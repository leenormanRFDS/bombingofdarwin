// Vercel serverless function — the headless booking proxy.
// The Rezdy API key NEVER reaches the browser; it lives only in this function's
// environment (Vercel → Settings → Environment Variables, or .env locally).
//
//   REZDY_API_KEY        required for live data (secret)
//   REZDY_PRODUCT_CODE   optional — auto-discovers the first bookable product if unset
//
// Without a key this returns realistic mock sessions so the booking skin always works.

const REZDY_BASE = 'https://api.rezdy.com/v1';

function pad(n) { return String(n).padStart(2, '0'); }
function ymd(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }

function mockSessions() {
  const times = ['09:30', '11:00', '13:00', '14:30'];
  const out = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getMonth() === 11 && d.getDate() === 25) continue; // closed Christmas Day
    times.forEach((t, j) => {
      out.push({ id: `${ymd(d)}-${t}`, date: ymd(d), time: t, seatsAvailable: Math.max(0, 40 - ((i + j) % 9) * 4) });
    });
  }
  return out;
}

function sanitise(sessions) {
  return (sessions || []).map((s) => {
    const local = s.startTimeLocal || s.startTime || '';
    const [date, timeRaw] = String(local).split(' ');
    return {
      id: String(s.id ?? `${date}-${timeRaw}`),
      date: date || '',
      time: (timeRaw || '').slice(0, 5),
      seatsAvailable: s.seatsAvailable ?? s.seats ?? null,
    };
  });
}

async function rezdy(path, key) {
  const sep = path.includes('?') ? '&' : '?';
  const r = await fetch(`${REZDY_BASE}${path}${sep}apiKey=${encodeURIComponent(key)}`);
  if (!r.ok) throw new Error(`Rezdy ${r.status} on ${path.split('?')[0]}`);
  return r.json();
}

async function discoverProductCode(key) {
  const data = await rezdy('/products?limit=20&offset=0', key);
  const products = data.products || [];
  // prefer a BOOKABLE product; fall back to the first listed
  const p = products.find((x) => (x.status || '').toUpperCase() === 'ACTIVE') || products[0];
  return p ? p.productCode : null;
}

export default async function handler(req, res) {
  const key = process.env.REZDY_API_KEY;

  try {
    if (!key) {
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({ mock: true, reason: 'no-key', sessions: mockSessions() });
      return;
    }

    let product = process.env.REZDY_PRODUCT_CODE;
    if (!product) product = await discoverProductCode(key);
    if (!product) throw new Error('no products found on the Rezdy account');

    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + 30);
    const data = await rezdy(
      `/availability?productCode=${encodeURIComponent(product)}` +
        `&startTimeLocal=${ymd(today)}%2000:00:00&endTimeLocal=${ymd(end)}%2023:59:59`,
      key
    );

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json({ product, sessions: sanitise(data.sessions) });
  } catch (err) {
    // Never break the booking UI — fall back to mock and say why (no secrets in the message).
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ mock: true, reason: String(err.message || 'upstream'), sessions: mockSessions() });
  }
}

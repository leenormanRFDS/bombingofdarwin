// Vercel serverless function — the booking proxy.
// The Rezdy API key NEVER reaches the browser; it lives only in this
// function's environment. The front-end calls /api/availability and gets
// back sanitised session data (no key, no internal fields).
//
// Set these in Vercel → Project → Settings → Environment Variables:
//   REZDY_API_KEY        (secret — the Supplier API key)
//   REZDY_PRODUCT_CODE   (the product/booking code for the experience)
//
// Until those are set, this returns realistic mock sessions so the booking
// skin works in development and preview.

const REZDY_BASE = 'https://api.rezdy.com/v1';

function pad(n) { return String(n).padStart(2, '0'); }
function ymd(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }

// Realistic mock: next 14 days, four sessions/day, closed Christmas.
function mockSessions() {
  const times = ['09:30', '11:00', '13:00', '14:30'];
  const out = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getMonth() === 11 && d.getDate() === 25) continue; // Christmas Day closed
    times.forEach((t, j) => {
      out.push({
        id: `${ymd(d)}-${t}`,
        date: ymd(d),
        time: t,
        seatsAvailable: Math.max(0, 40 - ((i + j) % 9) * 4),
      });
    });
  }
  return out;
}

function sanitiseRezdy(data) {
  const sessions = (data && data.sessions) || [];
  return sessions.map((s) => {
    const local = s.startTimeLocal || s.startTime || '';
    const [date, timeRaw] = local.split(' ');
    return {
      id: String(s.id ?? `${date}-${timeRaw}`),
      date: date || '',
      time: (timeRaw || '').slice(0, 5),
      seatsAvailable: s.seatsAvailable ?? s.seats ?? null,
    };
  });
}

export default async function handler(req, res) {
  const key = process.env.REZDY_API_KEY;
  const product = process.env.REZDY_PRODUCT_CODE;

  try {
    if (!key || !product) {
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({ mock: true, sessions: mockSessions() });
      return;
    }

    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + 30);
    const url =
      `${REZDY_BASE}/products/${encodeURIComponent(product)}/availability` +
      `?apiKey=${encodeURIComponent(key)}` +
      `&startTimeLocal=${ymd(today)}%2000:00:00` +
      `&endTimeLocal=${ymd(end)}%2023:59:59`;

    const r = await fetch(url);
    if (!r.ok) throw new Error(`Rezdy ${r.status}`);
    const data = await r.json();

    // Cache at the edge: 5 min fresh, 10 min stale-while-revalidate.
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json({ sessions: sanitiseRezdy(data) });
  } catch (err) {
    // Never break the booking UI — fall back to mock and note it.
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ mock: true, error: 'upstream', sessions: mockSessions() });
  }
}

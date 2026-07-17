// Diagnostic endpoint: lists the Rezdy products on the account (sanitised) so you
// can pick the right REZDY_PRODUCT_CODE. Requires REZDY_API_KEY in the environment.
// Visit /api/products once deployed (or via `vercel dev` locally).

const REZDY_BASE = 'https://api.rezdy.com/v1';

export default async function handler(req, res) {
  const key = process.env.REZDY_API_KEY;
  if (!key) {
    res.status(200).json({ error: 'REZDY_API_KEY not set in this environment' });
    return;
  }
  try {
    const r = await fetch(`${REZDY_BASE}/products?limit=50&offset=0&apiKey=${encodeURIComponent(key)}`);
    if (!r.ok) throw new Error(`Rezdy ${r.status}`);
    const data = await r.json();
    const products = (data.products || []).map((p) => ({
      productCode: p.productCode,
      name: p.name,
      status: p.status,
      durationMinutes: p.durationMinutes ?? null,
      priceOptions: (p.priceOptions || []).map((o) => ({ label: o.label, price: o.price })),
    }));
    res.setHeader('Cache-Control', 's-maxage=600');
    res.status(200).json({ count: products.length, products });
  } catch (err) {
    res.status(200).json({ error: String(err.message || 'upstream') });
  }
}

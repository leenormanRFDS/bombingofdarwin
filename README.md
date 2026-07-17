# The Bombing of Darwin Experience — website

Built with [Astro](https://astro.build). Static site, deploys to Vercel with zero config.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18.20+ (Node 20 or 22 recommended).

```bash
npm install      # one time — downloads dependencies
npm run dev      # start a local preview at http://localhost:4321
```

Leave `npm run dev` running; edit files and the browser refreshes automatically.
Press `Ctrl + C` in the terminal to stop it.

```bash
npm run build    # produces the production site in /dist
npm run preview  # preview that production build locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → import the repo.** Vercel auto-detects Astro — just click **Deploy**.
3. Every push to `main` redeploys; every branch/PR gets its own preview URL (handy for sharing drafts).

Later, when we add live booking, we'll add serverless functions and a `REZDY_API_KEY`
environment variable in Vercel's settings — it never goes in the code.

## Where things live

```
public/          Files served as-is (logo, favicon, images).
  brand/         The gold 1942 logo + cyan reticule.
src/
  consts.ts      Site config — name, nav links, prices, contact. Edit here.
  styles/        tokens.css = the brand colours/fonts; global.css = base styles.
  components/    Nav, Footer, LangSwitcher.
  layouts/       Base.astro = the shared page shell (head, nav, footer).
  pages/         One file = one page. index.astro is the home page.
source/          Raw high-res artwork (kept locally, not deployed — .gitignored).
```

## Configuration you control

**Fonts (Adobe Fonts).** The display face is Guildhall, loaded via the web-project kit
`https://use.typekit.net/hoe3ija.css`. Adobe Fonts web projects have **no domain allowlist** —
the kit works on any domain automatically, so there's nothing to configure. Just make sure the
three Guildhall styles (Regular, Condensed, Compressed) are in that web project and it's
published. If Guildhall can't load, the type falls back to a system sans.

**Booking (Rezdy) — headless availability is LIVE-ready.** The booking skin at `/book`
pulls real sessions through the server-side proxy (`/api/availability.js`). Locally the
secrets live in `.env` (gitignored). For the live site, add the same two variables in
Vercel → Settings → Environment Variables:

- `REZDY_API_KEY` — the Supplier API key (secret; server-side only, never in the repo)
- `REZDY_PRODUCT_CODE` — `PB1VKD` (RFDS Darwin Tourist Facility General Entry:
  Adult $30 / Senior $26 / Child $18 / 2A+3C $90 — matches the site's tiers)

`/api/products` lists every product on the account if you ever need a different code.
The Book button hands off to the Rezdy checkout (`rfdsdarwin1.rezdy.com`) for secure
payment; full in-site payment (RezdyPay/Stripe tokenisation) is the remaining phase.

## To do next
- The cinematic Experience opening, the narrative chapters, the "Meet the People" wheel, the Desk home.
- In Memoriam (last).
- Full headless payment (Stripe tokenisation) once Rezdy API access is confirmed.

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

## To do next
- Optimise the big artwork in `source/` into fast web images.
- Chapter I hero (the cinematic raid reveal).
- The rest of the chapters, the "Meet the People" wheel, tickets + booking.

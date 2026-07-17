// Central site configuration — edit values here and they update everywhere.

export const SITE = {
  name: 'The Bombing of Darwin Experience',
  short: '1942',
  tagline: 'WW2 HAPPENED HERE',
  domain: 'thebombingofdarwin.com.au',
  description:
    'Stand on Stokes Hill Wharf and live the day the war reached Australia. An immersive VR, hologram and theatre experience of the 19 February 1942 Bombing of Darwin, with the Royal Flying Doctor Service.',
  // Our own booking skin lives here (reached via Book buttons only — not in the nav):
  bookPath: '/tickets',
  // The Rezdy hosted checkout the skin hands off to for secure payment.
  bookingUrl: 'https://rfdsdarwin1.rezdy.com',
};

// ---- Ticket packages: each is a booking pathway on /tickets ----
export interface TicketTier { code: string; label: string; price: number; note?: string; max?: number }
export interface TicketPackage {
  slug: string;
  productCode: string;   // Rezdy product (allowlisted in api/availability.js)
  name: string;
  desc: string;
  duration: string;
  from: number;          // display "from" price
  checkoutUrl: string;   // Rezdy secure checkout for this product
  flag?: string;         // e.g. "Most popular"
  tiers: TicketTier[];
}

export const PACKAGES: TicketPackage[] = [
  {
    slug: 'general-entry',
    productCode: 'PB1VKD',
    name: 'General Entry',
    desc: 'The Bombing of Darwin and the Royal Flying Doctor Service experiences — history brought to life at Stokes Hill Wharf.',
    duration: '≈ 2 hours',
    from: 30,
    checkoutUrl: 'https://rfdsdarwin1.rezdy.com/433258/rfds-darwin-tourist-facility-general-entry',
    flag: 'Most popular',
    tiers: [
      { code: 'adult', label: 'Adult', price: 30, max: 20 },
      { code: 'child', label: 'Child', price: 18, note: 'Ages 5–15', max: 20 },
      { code: 'concession', label: 'Senior / Concession', price: 26, note: 'With proof', max: 20 },
      { code: 'family', label: 'Family', price: 90, note: '2 adults + 3 children', max: 10 },
    ],
  },
  {
    slug: 'aviation-combo',
    productCode: 'PR6UUK',
    name: 'Aviation Combo',
    desc: "Explore the Northern Territory's unique aviation history — two aviation attractions on one flexible ticket.",
    duration: '1 day',
    from: 47,
    checkoutUrl: 'https://rfdsdarwin1.rezdy.com/433269/aviation-attraction-combo-ticket',
    tiers: [
      { code: 'adult', label: 'Adult', price: 47, max: 20 },
      { code: 'child', label: 'Child', price: 23, max: 20 },
      { code: 'senior', label: 'Senior / Student', price: 34, note: 'With proof', max: 20 },
      { code: 'family', label: 'Family of 5', price: 118, max: 10 },
    ],
  },
  {
    slug: 'croc-n-history',
    productCode: 'P2Q41Q',
    name: 'Croc N History',
    desc: 'Two of Darwin’s premier attractions, one ticket: full-day entry to Crocosaurus Cove plus the RFDS & Bombing of Darwin facility.',
    duration: '≈ 6 hours',
    from: 70,
    checkoutUrl: 'https://rfdsdarwin1.rezdy.com/433980/croc-n-history-ticket',
    tiers: [
      { code: 'adult', label: 'Adult', price: 70, max: 20 },
      { code: 'senior', label: 'Senior', price: 58, note: 'With proof', max: 20 },
      { code: 'child', label: 'Child', price: 44, max: 20 },
    ],
  },
  {
    slug: 'croc-explorer',
    productCode: 'PWVVGE',
    name: 'Croc N History Explorer',
    desc: 'Three attractions, one ticket: Crocosaurus Cove, the RFDS & Bombing of Darwin facility, and the Darwin Explorer hop-on hop-off bus.',
    duration: '≈ 8 hours',
    from: 118,
    checkoutUrl: 'https://rfdsdarwin1.rezdy.com/435215/croc-n-history-explorer-ticket',
    flag: 'Best of Darwin',
    tiers: [
      { code: 'adult', label: 'Adult', price: 118, max: 20 },
      { code: 'senior', label: 'Senior', price: 100, note: 'With proof', max: 20 },
      { code: 'child', label: 'Child', price: 75, max: 20 },
    ],
  },
];

export const NAV: { label: string; href: string }[] = [
  { label: 'The Experience', href: '/experience' },
  { label: 'The Story', href: '/story' },
  { label: 'Visit', href: '/visit' },
  { label: 'Schools & Groups', href: '/schools' },
];

export const LOCALES: { code: string; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'zh', label: '中文', name: '简体中文' },
  { code: 'ja', label: '日本語', name: '日本語' },
];

export const PRICES: { tier: string; price: number; note?: string }[] = [
  { tier: 'Adult', price: 30 },
  { tier: 'Child', price: 18 },
  { tier: 'Concession', price: 26 },
  { tier: 'Family', price: 90, note: '2 adults + 3 children' },
];

export const CONTACT = {
  address: '45 Stokes Hill Road, Stokes Hill Wharf, Darwin NT 0800',
  phone: '(08) 8983 5700',
  email: 'rfdsdarwin@flyingdoctor.net',
};

// Google Analytics 4 — the tag itself lives in components/Analytics.astro
// (kept here for reference). Property ID is for the GA4 admin, not the tag.
export const ANALYTICS = {
  ga4MeasurementId: 'G-MQ9641V0NY',
  ga4PropertyId: '545435638',
};

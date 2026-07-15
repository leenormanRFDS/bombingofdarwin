// Central site configuration — edit values here and they update everywhere.

export const SITE = {
  name: 'The Bombing of Darwin Experience',
  short: '1942',
  tagline: 'WW2 HAPPENED HERE',
  domain: 'thebombingofdarwin.com.au',
  description:
    'Stand on Stokes Hill Wharf and live the day the war reached Australia. An immersive VR, hologram and theatre experience of the 19 February 1942 Bombing of Darwin, with the Royal Flying Doctor Service.',
  // TODO: replace with the real Rezdy checkout URL once confirmed (e.g. https://<company>.rezdy.com/...)
  bookingUrl: 'https://rfdsdarwin1.rezdy.com',
};

export const NAV: { label: string; href: string }[] = [
  { label: 'The Experience', href: '/#experience' },
  { label: 'The Story', href: '/#story' },
  { label: 'Visit', href: '/visit' },
  { label: 'Tickets', href: '/tickets' },
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

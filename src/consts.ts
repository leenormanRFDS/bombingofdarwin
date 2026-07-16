// Central site configuration — edit values here and they update everywhere.

export const SITE = {
  name: 'The Bombing of Darwin Experience',
  short: '1942',
  tagline: 'WW2 HAPPENED HERE',
  domain: 'thebombingofdarwin.com.au',
  description:
    'Stand on Stokes Hill Wharf and live the day the war reached Australia. An immersive VR, hologram and theatre experience of the 19 February 1942 Bombing of Darwin, with the Royal Flying Doctor Service.',
  // Our own booking skin lives here:
  bookPath: '/book',
  // The Rezdy hosted checkout the skin hands off to for secure payment.
  bookingUrl: 'https://rfdsdarwin1.rezdy.com',
};

// Booking tiers shown in the seamless booking skin.
export const BOOKING_TIERS: { code: string; label: string; price: number; note?: string; max?: number }[] = [
  { code: 'adult', label: 'Adult', price: 30, max: 20 },
  { code: 'child', label: 'Child', price: 18, note: 'Ages 5–15', max: 20 },
  { code: 'concession', label: 'Concession', price: 26, note: 'Seniors & concession', max: 20 },
  { code: 'family', label: 'Family', price: 90, note: '2 adults + 3 children', max: 10 },
];

export const NAV: { label: string; href: string }[] = [
  { label: 'The Experience', href: '/experience' },
  { label: 'Visit', href: '/visit' },
  { label: 'Tickets', href: '/tickets' },
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

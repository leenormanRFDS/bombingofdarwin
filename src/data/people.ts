// The people behind 19 February 1942.
// NOTE: historical copy should be verified with the Australian War Memorial, and
// Matthias Ulungura's story (and image) confirmed with the Tiwi community, before
// publishing. `draft` items especially need confirmation.

export interface Person {
  id: string;
  name: string;
  role: string;
  faction: string;
  desc: string;
  initials: string;
  image?: string;     // e.g. '/matthias.jpg' in /public — falls back to initials
  cultural?: boolean; // deceased First Nations person — cultural warning applies
  draft?: boolean;    // copy needs verification before publish
}

export const PEOPLE: Person[] = [
  {
    id: 'curtin',
    name: 'John Curtin',
    role: 'Prime Minister of Australia',
    faction: 'Australian Government',
    desc: 'Recognised the severity of the Japanese threat and made the controversial decision to bring Australian troops home from the Middle East to defend the mainland.',
    initials: 'JC',
    image: 'https://i.imgur.com/DhH14Xt.jpg',
  },
  {
    id: 'grant',
    name: 'Etheridge Grant',
    role: 'Rear Admiral',
    faction: 'Allied Naval Forces',
    desc: 'Commanded the naval defence of Darwin Harbour. Despite immense losses, he coordinated the rescue of hundreds of sailors from burning waters.',
    initials: 'EG',
    image: 'https://i.imgur.com/8liPjWc.jpg',
    draft: true,
  },
  {
    id: 'toyoshima',
    name: 'Hajime Toyoshima',
    role: 'A6M Zero Pilot',
    faction: 'Imperial Japanese Navy',
    desc: 'His Zero fighter was damaged during the raid. He crash-landed on Melville Island, becoming the first Japanese prisoner of war captured in Australia.',
    initials: 'HT',
    image: 'https://i.imgur.com/Zc5UOCZ.jpg',
  },
  {
    id: 'ulungura',
    name: 'Matthias Ampiyartiliwayi Ulungura',
    role: 'Tiwi Man',
    faction: 'Melville Island',
    desc: "A Tiwi man who captured Toyoshima using only a tomahawk, famously saying, 'Stick 'em up, two-fella'. His story endures through generations of Tiwi storytelling.",
    initials: 'MU',
    image: 'https://i.imgur.com/vWEjcEB.jpg',
    cultural: true,
  },
];

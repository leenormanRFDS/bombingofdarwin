// The people behind 19 February 1942.
// NOTE: historical copy is drafted for accuracy but should be verified with the
// Australian War Memorial and, for Matthias Ulungura, with the Tiwi community
// before publishing. Items marked `draft` especially need confirmation.

export interface Person {
  name: string;
  role: string;
  years: string;
  side: string;
  initials: string;
  bio: string;
  cultural?: boolean; // deceased First Nations person — cultural warning applies
  draft?: boolean;    // copy needs verification before publish
}

export const PEOPLE: Person[] = [
  {
    name: 'John Curtin',
    role: 'Prime Minister of Australia',
    years: '1885–1945',
    side: 'Australia',
    initials: 'JC',
    bio: 'Prime Minister through the nation’s darkest hour. In the weeks after Darwin he told Australians the plain truth about a war that had reached their own shore, and turned the country’s defence toward the Pacific.',
  },
  {
    name: 'Rear Admiral Etheridge Grant',
    role: 'Naval Commander',
    years: '—',
    side: 'Allied Forces',
    initials: 'EG',
    bio: 'A senior naval commander during the defence of Darwin Harbour on 19 February 1942.',
    draft: true,
  },
  {
    name: 'Hajime Toyoshima',
    role: 'Naval Airman, A6M Zero',
    years: '1920–1944',
    side: 'Japan',
    initials: 'HT',
    bio: 'A Zero pilot in the first raid. His aircraft, its fuel tank pierced by gunfire, came down on Melville Island. Disarmed and taken, he became the first Japanese prisoner of war held on Australian soil. He died in 1944 during the Cowra breakout.',
  },
  {
    name: 'Matthias Ampiyartiliwayi Ulungura',
    role: 'Tiwi Man, Melville Island',
    years: '—',
    side: 'Tiwi Nation',
    initials: 'MU',
    bio: 'The day after the raid, in the bush of Melville Island, he disarmed the downed pilot and walked him some fifteen kilometres to the mission — the first prisoner taken on Australian soil. His story endures through Tiwi storytelling, song and dance.',
    cultural: true,
  },
];

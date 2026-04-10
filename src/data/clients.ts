/**
 * Home client logos — count, order, and Sanity CDN assets aligned with the live reference layout
 * (from live `__NEXT_DATA__` / HTML, April 2026).
 */
export type ClientLogo = {
  name: string;
  /** Sanity CDN URL (production dataset ix6ogha4) */
  src: string;
  width: number;
  height: number;
  /** Remote SVG — use <img> so we don’t rely on next/image SVG pipeline */
  isSvg?: boolean;
};

export const homeClients: ClientLogo[] = [
  {
    name: "Diadora",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/4592c604343aaa06b812fad4c72f54a73066277d-1920x660.png?w=480&auto=format&q=92",
    width: 640,
    height: 220,
  },
  {
    name: "AW LAB",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/9fa416606a72318a7edc522b55089846cc4997fd-300x300.png?w=240&auto=format&q=92",
    width: 300,
    height: 300,
  },
  {
    name: "Kering Eyewear",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/719f7bb29f703c93a55f0db43734ab519371379b-300x300.png?w=240&auto=format&q=92",
    width: 300,
    height: 300,
  },
  {
    name: "Emporio Armani",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/67bfc75ca60d0bcf8b9387f3a3bd2ae55a9556c1-300x300.png?w=240&auto=format&q=92",
    width: 300,
    height: 300,
  },
  {
    name: "Converse",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/7ce24ba657b887ce3bbdb57d7c240e47f84aa32b-300x300.png?w=240&auto=format&q=92",
    width: 300,
    height: 300,
  },
  {
    name: "R3 LIVING",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/d956f475d7ad350394a2e84852b8a333e3b49589-300x300.png?w=240&auto=format&q=92",
    width: 300,
    height: 300,
  },
  {
    name: "UPSA",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/ee1470912265d170550873df7651cd8f7ddbb5cc-300x300.png?w=240&auto=format&q=92",
    width: 300,
    height: 300,
  },
  {
    name: "Luxottica",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/f1d65bdaf8d7b8e6876b4da90b9ca38e7c673331-127x31.svg",
    width: 127,
    height: 31,
    isSvg: true,
  },
  {
    name: "Lavazza",
    src: "https://cdn.sanity.io/images/ix6ogha4/production/721e7a8edc02f273e194a3c93295363d70599ea3-300x300.png?w=240&auto=format&q=92",
    width: 300,
    height: 300,
  },
];

/** Matches reference inline styles: duration 6.48s, delay -(8−i)×0.72s */
export const STAB_CLIENT_WAVE_DURATION_S = 6.48;
export const STAB_CLIENT_WAVE_STAGGER_S = 0.72;

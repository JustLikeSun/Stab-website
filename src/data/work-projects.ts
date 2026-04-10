/** Case studies and portfolio copy for Stab. Images: `public/assets/media-cdn` and Sanity CDN. */

export type WorkBlock =
  | { type: "text"; html: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      /** portrait = centered column; wide = full content width */
      layout?: "portrait" | "wide";
    };

export type WorkProject = {
  slug: string;
  title: string;
  /** Card label on home / work index */
  tag: string;
  listImage: string;
  /** Hero cover (defaults to listImage) */
  coverImage?: string;
  description: string;
  ogImage?: string;
  clients: string[];
  agency?: string;
  services: string[];
  year: string;
  blocks: WorkBlock[];
};

export const sanityImage = (filename: string, w = 1920) =>
  `https://cdn.sanity.io/images/ix6ogha4/production/${filename}?w=${w}&auto=format&q=88`;

/** Prev / next order aligned with portfolio sequence around Essilor */
export const WORK_SLUG_ORDER: string[] = [
  "diadora-utility",
  "essilor-luxottica",
  "emporio-armani-forestami",
  "efferalgan-tv-commercial",
  "upsa-x-nourished-gummies",
  "converse-cherry-aw-lab",
  "mullet-tea-can-launch",
  "stellest-chip",
  "gshock",
  "flower",
  "rnd-honey",
  "red-studio-creative-website",
];

const projects: WorkProject[] = [
  {
    slug: "diadora-utility",
    title: "Diadora Utility",
    tag: "CGI",
    listImage: "/assets/media-cdn/e1f43059cf31ae783ea72963fb14ae39ee0677cf-1920x1080-w1920.png",
    description:
      "Explore the case study Diadora Utility. Stab Creative Agency was involved in CGI, Motion Design, Commercial/Advertising.",
    clients: ["Diadora"],
    agency: "Postilla",
    services: ["CGI", "Motion Design", "Commercial/Advertising"],
    year: "2026",
    blocks: [
      {
        type: "text",
        html: `<p>We collaborated with Postilla to create two 3D videos dedicated to the Diadora Utility Vortex, with the goal of showcasing its design and highlighting its key technical features. Although it is unmistakably a work shoe, the line separating it from a sports shoe is extremely thin—not only in terms of aesthetics, but above all in its performance, including flexibility, a smooth heel-to-toe transition, and responsiveness.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/e1f43059cf31ae783ea72963fb14ae39ee0677cf-1920x1080-w1920.png",
        alt: "Diadora Utility case study image",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "essilor-luxottica",
    title: "Essilor Luxottica",
    tag: "3D Animation",
    listImage: "/assets/media-cdn/214c2c0f506856bd35ef95a80d0731889e54c518-1920x1080-w1920.webp",
    coverImage: sanityImage("ab8fadeb12bdd710c924bfe7ed9f1d0402a8cc4d-2700x2160.png", 2200),
    description:
      "Explore the case study Essilor Luxottica. Stab Creative Agency was involved in 3D Animation, CGI, Art Direction.",
    ogImage: sanityImage("ab8fadeb12bdd710c924bfe7ed9f1d0402a8cc4d-2700x2160.png", 1600),
    clients: ["Luxottica"],
    services: ["3D Animation", "CGI", "Art Direction"],
    year: "2026",
    blocks: [
      {
        type: "text",
        html: `<p>Collaborating with a global leader like EssilorLuxottica means operating at the intersection of optical science and visual art. Our contribution spanned from technical <strong>R&amp;D</strong> consultancy to the production of high-impact visual assets. Working closely with the internal creative team, we developed <strong>lighting</strong> and <strong>3D animation</strong> solutions to illustrate the technological complexity of flagship products such as <strong>Stellest</strong>, <strong>Varilux</strong>, and <strong>Eyezen</strong>. A journey where technical precision meets visual storytelling.</p>`,
      },
      {
        type: "image",
        src: sanityImage("8c72da16f951bd2618575cc9a14dc6925271e9ab-2160x2700.png", 1600),
        alt: "Essilor Luxottica case study image",
        width: 2160,
        height: 2700,
        layout: "portrait",
      },
      {
        type: "image",
        src: sanityImage("8be75a832ee72458fb29418b76b85552eb7714bc-2160x2700.png", 1600),
        alt: "Essilor Luxottica case study image",
        width: 2160,
        height: 2700,
        layout: "portrait",
      },
      {
        type: "image",
        src: sanityImage("16452a782c40c6acd707c740ca1e22a0b00f5805-2160x2700.png", 1600),
        alt: "Essilor Luxottica case study image",
        width: 2160,
        height: 2700,
        layout: "portrait",
      },
      {
        type: "image",
        src: sanityImage("50c052fd66d1b9796945a14aea0b177da5f3a438-5905x3041.png", 2400),
        alt: "Essilor Luxottica case study image",
        width: 5905,
        height: 3041,
        layout: "wide",
      },
      {
        type: "image",
        src: sanityImage("303070ae17e4216de42b98ce951a63d2be2517ac-1920x1080.png", 1920),
        alt: "Essilor Luxottica case study image",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "emporio-armani-forestami",
    title: "Emporio Armani x Forestami",
    tag: "Motion Design",
    listImage:
      "/assets/media-cdn/9cfa8041a4e9d770f50d8bc6214e831b18846b19-1920x1080-w1920.png",
    description:
      "Explore the case study Emporio Armani x Forestami. Stab Creative Agency was involved in Motion Design.",
    ogImage: sanityImage("9cfa8041a4e9d770f50d8bc6214e831b18846b19-1920x1080.png", 1600),
    clients: ["Emporio Armani"],
    services: ["Motion Design"],
    year: "2024",
    blocks: [
      {
        type: "text",
        html: `<p>We had the pleasure of collaborating with Freeda to bring to life the illustrations created by Parco Studio for Armani as part of the Forestami initiative. Our team was responsible for developing an animated teaser and a main video, aimed at effectively communicating the project&apos;s mission and impact. The goal was to create an engaging narrative that would enhance the initiative&apos;s message of sustainability and reforestation.</p><p><br/>We animated the flowers designed by Parco Studio to bring nature to life and enhance the green concept of this fantastic collaboration 🌳</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/9cfa8041a4e9d770f50d8bc6214e831b18846b19-1920x1080-w1920.png",
        alt: "Emporio Armani x Forestami case study image",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "efferalgan-tv-commercial",
    title: "Efferalgan - TV Commercial",
    tag: "Advertising",
    listImage: "/assets/media-cdn/735130d2e9f05a3af36bd1c2106cc3cd8bd07e84-3840x2160-w3200.png",
    description:
      "Explore the case study Efferalgan. Stab Creative Agency was involved in Commercial/Advertising, 3D Animation, CGI.",
    clients: ["UPSA"],
    agency: "Naïve",
    services: ["Commercial/Advertising", "3D Animation", "CGI"],
    year: "2024",
    blocks: [
      {
        type: "text",
        html: `<p>We collaborated with Naive Agency on the creation of the television commercial for Efferalgan, working on the animated 3D production based on a narrative concept that innovatively integrates a new character into an extremely dynamic and lively story. The narrative, conceived to reflect the sparkling character of Efferalgan tablets, combines storytelling and visual creativity to reinforce the product&apos;s positioning.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/735130d2e9f05a3af36bd1c2106cc3cd8bd07e84-3840x2160-w3200.png",
        alt: "Efferalgan case study image",
        width: 3840,
        height: 2160,
        layout: "wide",
      },
    ],
  },
  {
    slug: "upsa-x-nourished-gummies",
    title: "UPSA x NOURISHED - Gummies",
    tag: "Commercial / Advertising",
    listImage: "/assets/media-cdn/ab8fadeb12bdd710c924bfe7ed9f1d0402a8cc4d-2700x2160-w2200.png",
    description:
      "Explore the case study UPSA x NOURISHED. Stab Creative Agency was involved in Commercial/Advertising.",
    clients: ["UPSA", "Nourished"],
    agency: "Naïve",
    services: ["Commercial/Advertising"],
    year: "2024",
    blocks: [
      {
        type: "text",
        html: `<p>We collaborated with Naive Agency on the production of a series of commercials for UPSA, in partnership with NOURISHED, to showcase three products from their supplement line: Gummies Sleep, Energy, and Collagen Skin. Stab handled the entire 3D production, motion graphics, and video, creating visually engaging content with clear and effective storytelling to highlight the benefits of each product.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/ab8fadeb12bdd710c924bfe7ed9f1d0402a8cc4d-2700x2160-w2200.png",
        alt: "UPSA x NOURISHED case study image",
        width: 2700,
        height: 2160,
        layout: "wide",
      },
    ],
  },
  {
    slug: "converse-cherry-aw-lab",
    title: "Converse Cherry - AW LAB",
    tag: "Art Direction",
    listImage: "/assets/media-cdn/3103b9b8e7c4e822b4209498da605892f8ea9955-1920x1080-w1920.png",
    description:
      "Explore the case study Converse Cherry. Stab Creative Agency was involved in Art Direction, 3D Art & Design, CGI and more.",
    clients: ["AW LAB", "Converse"],
    services: [
      "Art Direction",
      "3D Art & Design",
      "Commercial/Advertising",
      "CGI",
      "Sound Design",
    ],
    year: "2024",
    blocks: [
      {
        type: "text",
        html: `<p>Stab was invited by AW LAB to tell the story of the three new Converse Cherry shoes in an engaging and dynamic 3D visual, which aims to capture the attention of the new generations both digitally and in stores, along with key visuals for the broader digital campaign.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/3103b9b8e7c4e822b4209498da605892f8ea9955-1920x1080-w1920.png",
        alt: "Converse Cherry case study image",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "mullet-tea-can-launch",
    title: "Mullet Tea - Can Launch",
    tag: "Art Direction",
    listImage: "/assets/media-cdn/ac1f57d527cde045557bf70ed044e9c7dc79bf38-1920x1080-w1920.png",
    description:
      "Explore the case study Mullet Tea - Can Launch. Stab Creative Agency was involved in Art Direction, 3D Animation, Commercial/Advertising.",
    clients: ["Mullet Tea"],
    services: ["Art Direction", "3D Animation", "Commercial/Advertising"],
    year: "2024",
    blocks: [
      {
        type: "text",
        html: `<p>We collaborated with Mullet Tea to create a commercial and associated images for the launch of their new canned format. We worked on a concept aimed at a young audience that captures attention on social media, while also functioning as a standalone ad for the Mullet Tea brand.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/ac1f57d527cde045557bf70ed044e9c7dc79bf38-1920x1080-w1920.png",
        alt: "Mullet Tea - Can Launch case study image",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "stellest-chip",
    title: "Stellest Chip",
    tag: "CGI",
    listImage: "/assets/media-cdn/9cfa8041a4e9d770f50d8bc6214e831b18846b19-1920x1080-w1920.png",
    description: "CGI and look development study from Stab Lab.",
    clients: ["Stab Lab"],
    services: ["CGI", "3D"],
    year: "2025",
    blocks: [
      {
        type: "text",
        html: `<p>Creative experiment exploring material, light and product storytelling—part of the ongoing R&amp;D work in Stab Lab.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/9cfa8041a4e9d770f50d8bc6214e831b18846b19-1920x1080-w1920.png",
        alt: "Stellest Chip",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "gshock",
    title: "GSHOCK",
    tag: "3D / CGI",
    listImage: "/assets/media-cdn/c84631a433dab0298e0edb2d90565893478d572b-1920x1080-w1920.png",
    description: "3D and CGI experiment from Stab Lab.",
    clients: ["Stab Lab"],
    services: ["3D", "CGI"],
    year: "2025",
    blocks: [
      {
        type: "text",
        html: `<p>Visual experiment focused on product form, shaders and mood—produced as part of Stab Lab explorations.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/c84631a433dab0298e0edb2d90565893478d572b-1920x1080-w1920.png",
        alt: "GSHOCK",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "flower",
    title: "Flower",
    tag: "CGI",
    listImage: "/assets/media-cdn/a0c219e21caa8c8488219de1e61ca8b9cfd5ddad-1920x1080-w1920.png",
    description: "CGI study from Stab Lab.",
    clients: ["Stab Lab"],
    services: ["CGI"],
    year: "2025",
    blocks: [
      {
        type: "text",
        html: `<p>Organic forms, color and lighting explored as a standalone visual study in the lab.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/a0c219e21caa8c8488219de1e61ca8b9cfd5ddad-1920x1080-w1920.png",
        alt: "Flower",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "rnd-honey",
    title: "RND - Honey",
    tag: "R&D",
    listImage: "/assets/media-cdn/8c3ff10ff7cc3dfdb4023c3e36a926f8d608ad77-1920x1080-w1800.png",
    description: "R&D visual experiment from Stab Lab.",
    clients: ["Stab Lab"],
    services: ["R&D", "CGI"],
    year: "2025",
    blocks: [
      {
        type: "text",
        html: `<p>Research-driven look development and rendering study from Stab Lab.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/8c3ff10ff7cc3dfdb4023c3e36a926f8d608ad77-1920x1080-w1800.png",
        alt: "RND - Honey",
        width: 1920,
        height: 1080,
        layout: "wide",
      },
    ],
  },
  {
    slug: "red-studio-creative-website",
    title: "Red Studio — Creative Website",
    tag: "Creative Experiments",
    listImage: "/assets/media-cdn/5337f568925cf43e80caeaa1611dab578d90f0d1-3072x1728-w2200.webp",
    description:
      "Explore the case study Red Studio — Creative Website. Stab Creative Agency was involved in Creative Website, Branding.",
    clients: ["Red Studio"],
    services: ["Creative Website", "Branding"],
    year: "2024",
    blocks: [
      {
        type: "text",
        html: `<p>We have completely redesigned the website for Red Studio, a renowned video production studio based in Ticino. The website was developed using React with NextJS and features a 3D render in the hero section that we created, which is tied to the page scroll.</p><p>The launch was further enhanced with a 3D animated teaser designed to immediately generate excitement and interest in the new project.</p>`,
      },
      {
        type: "image",
        src: "/assets/media-cdn/5337f568925cf43e80caeaa1611dab578d90f0d1-3072x1728-w2200.webp",
        alt: "Red Studio — Creative Website case study image",
        width: 3072,
        height: 1728,
        layout: "wide",
      },
    ],
  },
];

export const workProjectsBySlug: Record<string, WorkProject> = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjectsBySlug[slug];
}

export function getWorkNeighbors(slug: string): {
  prev: WorkProject | null;
  next: WorkProject | null;
} {
  const i = WORK_SLUG_ORDER.indexOf(slug);
  if (i < 0) return { prev: null, next: null };
  const prevSlug = i > 0 ? WORK_SLUG_ORDER[i - 1] : null;
  const nextSlug = i < WORK_SLUG_ORDER.length - 1 ? WORK_SLUG_ORDER[i + 1] : null;
  return {
    prev: prevSlug ? workProjectsBySlug[prevSlug] ?? null : null,
    next: nextSlug ? workProjectsBySlug[nextSlug] ?? null : null,
  };
}

/** Full-width cards on `/work/all` (e.g. Emporio Armani, MINE, Hublot, Dualsense). */
const WORK_ALL_LARGE_SLUGS = new Set<string>(["emporio-armani-forestami"]);

export type WorkListingEntry = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  large: boolean;
};

export function getWorkListing(): WorkListingEntry[] {
  return WORK_SLUG_ORDER.map((slug) => {
    const p = getWorkProject(slug);
    if (!p) return null;
    return {
      slug: p.slug,
      title: p.title,
      tag: p.tag,
      image: p.listImage,
      large: WORK_ALL_LARGE_SLUGS.has(slug),
    };
  }).filter((x): x is WorkListingEntry => x != null);
}

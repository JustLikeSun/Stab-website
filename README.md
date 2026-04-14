# Stab — website

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Public marketing site for **[Stab](https://stab.agency)** — a creative production studio for **CGI, 3D, and motion**. This repo is the Next.js front end: case studies, services, contact, and the small moments of motion that tie the brand together.

**Repository:** [github.com/JustLikeSun/Stab-website](https://github.com/JustLikeSun/Stab-website)

---

## Quick start

Work from the **repository root** (the directory that contains `package.json` — e.g. `stab-website` on your machine, not an old nested copy).

```bash
npm install
npm run dev
```

| Where | URL |
|-------|-----|
| This machine | [http://localhost:3000](http://localhost:3000) |
| Phone / same Wi‑Fi | `http://<your-LAN-IP>:3000` (the dev server prints it, e.g. `10.0.0.x`) |

Production build:

```bash
npm run build
npm start
```

### Contact form (Resend)

The `/contact` form sends email through [Resend](https://resend.com). Copy `.env.example` to `.env.local`, create an API key in the Resend dashboard, and set:

- **`RESEND_API_KEY`** — API key (`re_…`).
- **`CONTACT_FROM_EMAIL`** — Sender Resend recognizes. For a quick test you can use Resend’s shared address (see their docs); for production, verify **stab.agency** (or your domain) in Resend and use something like `Stab <hello@stab.agency>`.
- **`CONTACT_TO_EMAIL`** — Where inquiries land (defaults to `contact@stab.agency` if omitted).

Add the same variables under **Vercel → Project → Settings → Environment Variables** for Production (and Preview if you want forms on preview deploys).

### Coming soon mode

To hide the full site while you revise content, set **`COMING_SOON=1`** in **Vercel → Environment Variables** (Production), then redeploy. All routes redirect to **`/coming-soon`** except static assets. Remove the variable or set it to **`0`**, redeploy, and the full site is back. Locally, add `COMING_SOON=1` to `.env.local` to test.

---

## Scripts

| Command | What it does |
|---------|----------------|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build (`next build --webpack`) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run vercel` | Vercel CLI |
| `npm run vercel:pull` | Pull production env/config (`vercel pull --yes --environment=production`) |

---

## What lives where

| Path | Purpose |
|------|---------|
| [`src/app/`](src/app/) | App Router routes — home, work, services, contact, code |
| [`src/components/`](src/components/) | Shared UI — header, footer, transitions, kinetic treatment |
| [`src/data/`](src/data/) | Typed content helpers (e.g. work projects, clients) |
| [`public/`](public/) | Static assets — brand, media CDN paths, etc. |
| [`docs/`](docs/) | Internal references — design tokens, asset notes |
| `legacy/` | Optional local static mirror — **gitignored**, not on the remote |

Design work should align with **`DESIGN.md`**, **`docs/design-tokens.json`**, and **`docs/DESIGN_SOURCES.md`** (see [`AGENTS.md`](AGENTS.md) for the short version).

---

## Stack (why it feels the way it does)

- **Next.js 16** — App Router, server components where it fits, metadata and layout as product.
- **React 19** — Current line for this project.
- **Tailwind CSS 4** — Utility-first layout and tokens wired through CSS.
- **GSAP** — Cinematic motion without fighting the rest of the stack.

If you touch Next.js APIs, read the in-repo docs under `node_modules/next/dist/docs/` — this major version intentionally diverges from older Next patterns.

---

## Deploying on Vercel (`stab.agency`)

DNS is doing its job when responses show **Vercel** as the server (and you often see apex → `www`). If visitors see **“The page could not be found”** / **`NOT_FOUND`**, the custom domain is usually not backed by a **green Production deployment** for **this** repo — fix the project settings before chasing app bugs.

1. **Project → Settings → General → Root Directory** — leave **empty** (repo root). A stale path to a removed subfolder breaks builds and leaves the domain empty.
2. **Deployments** — latest **Production** deploy must be **Ready**. Failed builds: read the log (`package.json` missing / wrong root is the usual smoking gun).
3. **Settings → Domains** — `stab.agency` and `www.stab.agency` on **this** project, status **Valid**.
4. After changing root directory, **Redeploy** the latest commit (or push a no-op commit) so Production actually updates.

Sanity check: your `*.vercel.app` URL should return **200** on `/`. If that 404s, fix deployments first; the custom domain will follow.

---

## Troubleshooting

**Multiple lockfiles** — Next.js may warn if it finds another `package-lock.json` higher up (e.g. in your home directory). Rename or remove the stray file to silence it, or ignore if the app runs fine.

**Git remote**

```bash
git remote -v
# origin → https://github.com/JustLikeSun/Stab-website.git
```

First push to an empty GitHub repo:

```bash
git push -u origin main
```

---

## License / usage

Private package (`"private": true` in `package.json`). Treat source and assets as Stab-internal unless you have explicit permission to redistribute.

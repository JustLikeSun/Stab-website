# Stab website

Next.js site (anubi.io–style layout and interactions). Repository: [github.com/JustLikeSun/Stab-website](https://github.com/JustLikeSun/Stab-website).

## Develop

From the **repository root**:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Layout

| Path | Purpose |
|------|---------|
| `src/` | Next.js App Router app and components |
| `public/` | Static assets (anubi-assets mirror, CDN imagery) |
| `docs/` | Internal notes (e.g. asset manifest) |
| `legacy/` | Optional local static mirror; **gitignored**, not in the remote repo |

## Git remote

```bash
git remote -v
# origin → https://github.com/JustLikeSun/Stab-website.git
```

First push to an empty GitHub repo:

```bash
git push -u origin main
```

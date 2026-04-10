# Stab website

Next.js site (anubi.io–style layout and interactions). Repository: [github.com/JustLikeSun/Stab-website](https://github.com/JustLikeSun/Stab-website).

## Develop

From the **repository root** (the folder that contains `package.json` — e.g. `stab-website` on your machine, not a nested `anubi-next` path):

```bash
npm install
npm run dev
```

Then open:

- **This machine:** [http://localhost:3000](http://localhost:3000)
- **Phone / another device on the same Wi‑Fi:** `http://<your-computer-LAN-IP>:3000` (the dev server prints the address, e.g. `10.0.0.x`)

If Next.js warns about **multiple lockfiles** and picks the wrong root, you may have a stray `package-lock.json` in your home directory; removing or renaming it clears the warning, or keep it and ignore the message if the app runs correctly.

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

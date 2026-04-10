# Stab website

Next.js site for **Stab** (creative agency). Repository: [github.com/JustLikeSun/Stab-website](https://github.com/JustLikeSun/Stab-website).

## Develop

From the **repository root** (the folder that contains `package.json` — e.g. `stab-website` on your machine, not a nested subfolder from an old layout):

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

## Vercel & custom domain (`stab.agency`)

DNS is working when requests reach Vercel (you see `server: Vercel` and often a redirect from apex → `www`). If the site shows **“The page could not be found”** / **`NOT_FOUND`**, the domain is not backed by a **successful Production deployment** for this repo—usually a dashboard setting, not app code.

1. **Project → Settings → General → Root Directory** — leave **empty** (repo root). If it still points at a removed subfolder from an old layout, builds fail and nothing is served on your domain.
2. **Deployments** — open the latest **Production** deploy; it must be **Ready** (green). If it’s failed, read the build log (missing `package.json` / wrong root is the common fix).
3. **Settings → Domains** — `stab.agency` and `www.stab.agency` must be on **this** project and show **Valid**.
4. After fixing root directory, click **Redeploy** on the latest commit (or push an empty commit) so Production updates.

Your `*.vercel.app` preview URL should return **200** for `/` when the project is healthy; if that URL is also 404, fix deployments first, then the custom domain will follow.

## Layout

| Path | Purpose |
|------|---------|
| `src/` | Next.js App Router app and components |
| `public/` | Static assets (`brand-assets`, `media-cdn`, etc.) |
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

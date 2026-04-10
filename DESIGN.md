# Design system: Stab (stab-website)

**Context:** Next.js marketing site for Stab. This file is optimized for **AI assistants and tools** (including [Google Stitch Design MD](https://stitch.withgoogle.com/docs/design-md/format)–style workflows): semantic descriptions plus **exact color values**. It complements—does not replace—`docs/design-tokens.json` and `docs/design-system.md`.

---

## 1. Visual theme & atmosphere

- **Mood:** Premium, cinematic, and minimal. Dark-first hero moments and rich imagery sit beside **light, editorial** interior pages (`#fcfcfc` surfaces, near-black type).
- **Density:** Medium-compact: strong hierarchy, restrained motion, no playful bounce.
- **Signature moves:** Thin **hairline** borders on dark (`rgba(255,255,255,0.08)`), **fluid type** via `clamp()`, pill-shaped primary actions, work imagery with **dark gradient overlays** and subtle hover scale.

---

## 2. Color palette & roles

| Role | Descriptive name | Value | Usage |
|------|------------------|-------|--------|
| Page (marketing dark sections) | Near-black void | `#0a0a0a` | Deep section backgrounds (tokens) |
| Page (light shell) | Soft paper | `#fcfcfc` | Default body background (`--color-bg-light`) |
| Primary text on light | Ink black | `#0f0f0f` | Body copy on light pages (`--color-black`) |
| Primary text on dark | Pure white | `#ffffff` | Headlines and UI on dark overlays |
| Muted on dark | Cool silver | `#cfcfcf` | Secondary copy on dark |
| Muted on light | Charcoal | `#4d4d4d` | Secondary copy on light |
| Panel / elevated dark | Graphite panel | `#111111` | Dark cards, dense UI blocks |
| Border (on dark) | Frost hairline | `rgba(255,255,255,0.08)` | Dividers, header/footer edges |
| Border (on light) | Mist line | `#eaeaea` | Light surfaces |
| Wordmark / key vector | Soft charcoal | `#222222` | STAB SVG wordmark fills |
| Overlay scrim (strong) | Deep cinema veil | `rgba(0,0,0,0.86)` | Legibility over imagery |

Additional neutrals from the system: `#0b0b0c`, `#0d0d0d`, `#dfdfdf`, `#a1a1a1`, `#5d5d5d`, `#444`, `#333` — use for layered dark sections and fine-grained UI (see `docs/design-system.md`).

---

## 3. Typography rules

- **Body & UI:** *Bricolage Grotesque* — readable, slightly characterful; default weight 400; comfortable line height (~1.45 for long copy).
- **Display / hero / big section titles:** *Epilogue* — medium weight, **tight leading** (~0.9–0.96), **negative tracking** (about `-0.04em` to `-0.06em` on large display).
- **Mono / technical:** *IBM Plex Mono* — labels, code-adjacent UI, contact snippets.
- **Scale (fluid, representative):** hero/display in the `clamp(2.75rem, 6vw, 5.5rem)` range; section titles `clamp(1.45rem, 2.45vw, 2.35rem)`; body `clamp(1rem, 1.35vw, 1.2rem)`; eyebrow-style labels may use wider letter-spacing (~`0.2em`). Full list: `docs/design-tokens.json` → `typography.fontSize`.

---

## 4. Component stylings

- **Buttons / primary actions:** **Pill-shaped** (`border-radius: 999px`); high contrast (dark fill on light pages or inverted on dark bands); transitions ~180–260ms, ease-out–style curves—not bouncy.
- **Cards (work, featured):** **16:9** or large portrait feel; **image-first**; bottom or overlay **gradient** for title/meta; hover: modest **scale** (~1.08) and opacity shifts on overlays.
- **Header:** Fixed; **translucent dark** bar with **1px** bottom border; logo mark + text lockup; compact nav; mobile sheet/panel.
- **Footer:** Multi-column links; bottom **centered wordmark** — full STAB SVG scaled with a **max width** cap (~560px) so it stays balanced on wide screens.
- **Inputs / forms (when added):** Prefer light fields on `#fcfcfc` with `#eaeaea` borders; focus ring visible and on-brand (avoid default browser blue alone).

---

## 5. Layout principles

- **Width:** Content typically caps around **1200px–1400px**; page gutters use fluid padding (e.g. `clamp(16px, 3.25vw, 36px)`).
- **Vertical rhythm:** Section padding often in the `clamp(40px, 6vw, 82px)` to `clamp(52px, 6.5vw, 96px)` range.
- **Corners:** Mostly **8px–16px** on boxes; pills for CTAs.
- **Depth:** Generally **flat to soft** — rely on borders and gradients more than heavy drop shadows.
- **Motion:** Scroll reveals: fade + small **upward** translate (~20px), ~800ms for hero-style reveals; header may hide/show by scroll direction after a threshold.

---

## 6. Brand assets (static)

- **Header mark:** `/brand-assets/_next/static/media/stab-mark.00dff3f2.svg`
- **Hero / footer wordmark:** `/brand-assets/stab.svg` (wide wordmark; intrinsic aspect ~4052×692)
- **Page transition (desktop):** Full-viewport **black stripes** with centered mark; disabled on small viewports.

---

## 7. When this file drifts

Implementation lives in **`src/app/globals.css`** and React components. If colors, type, or spacing change in code, update **`docs/design-tokens.json`** and **`docs/design-system.md`**, then refresh the tables and prose in **this file** so AI tools and Stitch-style prompts stay accurate. See **`docs/DESIGN_SOURCES.md`** for the full workflow.

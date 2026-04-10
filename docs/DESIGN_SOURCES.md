# Design documentation map (Stab website)

Use this when **adding pages, sections, or visual changes** so specs, tokens, and code stay aligned.

## Files and roles

| File | Role |
|------|------|
| [`docs/design-tokens.json`](design-tokens.json) | **Machine-oriented** JSON: colors, type, layout, motion, z-index. Prefer this for new token names and values before duplicating in prose. |
| [`docs/design-system.md`](design-system.md) | **Human-oriented** narrative: brand character, patterns, breakpoints, component language. Use for design reviews and onboarding. |
| [`DESIGN.md`](../DESIGN.md) (repo root) | **AI / Stitch-style** summary: atmosphere, palette with hex, typography, components, layout — tuned for prompts and codegen. |
| [`src/app/globals.css`](../src/app/globals.css) | **Implementation:** `:root` CSS variables, Tailwind `@theme`, section and component classes. |
| [`docs/asset-manifest.md`](asset-manifest.md) | **Static assets:** paths under `public/` and where they are referenced in code. |

## Suggested workflow when you change the UI

1. **Decide the change** (e.g. new section, new button variant, color tweak).
2. **Update implementation** in `globals.css` and/or components.
3. **Sync tokens:** add or edit keys in `design-tokens.json` if the value is reusable.
4. **Sync narrative:** adjust `design-system.md` if patterns, breakpoints, or principles change.
5. **Sync AI spec:** update `DESIGN.md` so tables and descriptions match (especially hex codes and font roles).
6. **If you add/rename assets:** update `asset-manifest.md` and any `Image` / `img` / CSS references.

## External reference

- [Stitch Design MD format](https://stitch.withgoogle.com/docs/design-md/format) — `DESIGN.md` follows a similar *structure* (theme, colors, type, components, layout) for interoperability; this repo is not required to use Stitch.

## Versioning

Bump `design-tokens.json` → `meta.version` when you make meaningful token changes so diffs and handoffs stay clear.

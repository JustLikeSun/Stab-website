# Anubi Asset Manifest (Extracted)

This manifest maps extracted assets to current and intended usage in the rebuild.

## 1) Brand / UI System Assets

Location: [`/Users/sunny/Desktop/stab-website/anubi-next/public/anubi-assets/_next/static/media`](/Users/sunny/Desktop/stab-website/anubi-next/public/anubi-assets/_next/static/media)

### Brand marks

- `anubi.00dff3f2.svg`
  - Current usage: header brand icon
  - File: [`/Users/sunny/Desktop/stab-website/anubi-next/src/components/site-header.tsx`](/Users/sunny/Desktop/stab-website/anubi-next/src/components/site-header.tsx)

- `anubi-footer.9e2d2407.svg`
  - Current usage: footer brand lockup
  - File: [`/Users/sunny/Desktop/stab-website/anubi-next/src/components/site-footer.tsx`](/Users/sunny/Desktop/stab-website/anubi-next/src/components/site-footer.tsx)

### Interaction/media icons

- `play-icon.926d0472.svg`
- `pause-icon.167fe43f.svg`
- `speaker-high.fefcfc84.svg`
- `speaker-x.8159d4fe.svg`
- `spinner-icon.053a5400.svg`
- `frame-corners.ae3cebd2.svg`

Intended usage:
- media controls and interactive visual overlays in future motion parity pass.

### Font binaries

- Multiple `.woff2` files (`011e...`, `2053...`, `5356...`, etc.)
Intended usage:
- local font hosting fallback if switching away from Google Fonts imports.

## 2) Extracted Content Imagery (Sanity CDN)

Location: [`/Users/sunny/Desktop/stab-website/anubi-next/public/assets/anubi-cdn`](/Users/sunny/Desktop/stab-website/anubi-next/public/assets/anubi-cdn)

Representative groups:

- **Work hero/card imagery**
  - `e1f43059...-1920x1080-w1920.png`
  - `214c2c0f...-1920x1080-w1920.webp`
  - `735130d2...-3840x2160-w3200.png`
  - `ab8fadeb...-2700x2160-w2200.png`
  - `3103b9b8...-1920x1080-w1920.png`
  - `ac1f57d5...-1920x1080-w1920.png`

- **Client/logo-like square assets**
  - `67bfc75c...-300x300-w240.png`
  - `719f7bb2...-300x300-w240.png`
  - `721e7a8e...-300x300-w240.png`
  - `7ce24ba6...-300x300-w240.png`
  - `9fa41660...-300x300-w240.png`
  - `d956f475...-300x300-w240.png`
  - `ee147091...-300x300-w240.png`

Current usage:
- homepage + work listing cards
- file: [`/Users/sunny/Desktop/stab-website/anubi-next/src/app/page.tsx`](/Users/sunny/Desktop/stab-website/anubi-next/src/app/page.tsx)
- file: [`/Users/sunny/Desktop/stab-website/anubi-next/src/app/work/all/page.tsx`](/Users/sunny/Desktop/stab-website/anubi-next/src/app/work/all/page.tsx)

## 3) Placeholder Replacement Pack

Location: [`/Users/sunny/Desktop/stab-website/anubi-next/public/assets/work`](/Users/sunny/Desktop/stab-website/anubi-next/public/assets/work)

Files:
- `diadora-utility.svg`
- `essilor-luxottica.svg`
- `efferalgan-tv-commercial.svg`
- `upsa-nourished-gummies.svg`
- `converse-cherry-awlab.svg`
- `mullet-tea-can-launch.svg`

Purpose:
- temporary placeholders only; keep for quick fallback and custom replacement workflow.

## 4) Favicons / Platform Icons

Location: [`/Users/sunny/Desktop/stab-website/anubi-next/public/anubi-assets`](/Users/sunny/Desktop/stab-website/anubi-next/public/anubi-assets)

Includes:
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-96x96.png`
- `apple-icon-*.png`, `android-icon-192x192.png`
- `manifest.json`

Intended usage:
- final metadata and PWA icon parity pass.

## 5) Asset Replacement Rules

- Prefer replacing by filename-in-place to avoid code churn.
- Keep image dimensions/aspect consistent to preserve layout fidelity.
- For future custom branding:
  1. Replace in `public/assets/anubi-cdn` for content realism.
  2. Replace in `public/anubi-assets/_next/static/media` for brand/system icons.
  3. Update references only when file naming must change.

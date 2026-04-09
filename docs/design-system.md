# Anubi Visual Identity & Design System (Extracted Baseline)

This document captures the extracted visual system from the mirrored `anubi.io` source and translates it into reusable implementation guidance for the Next rebuild.

## Brand Character

- **Tone:** premium, cinematic, minimalist, technical
- **Visual language:** dark-first surfaces with subtle gradients, precise borders, editorial typography, restrained accents
- **UI density:** medium-compact; high visual information with controlled whitespace

## Typography System

### Font Families (from mirrored source)

- **Primary text (`--text` / `--text-info`)**: `Bricolage Grotesque`
- **Display/headline (`--text-fancy`)**: `Epilogue`
- **Mono (`--text-mono`)**: `IBM Plex Mono`

### Practical usage

- **Hero + section display:** `Epilogue`, medium weight, tight leading and negative tracking
- **Body + UI labels:** `Bricolage Grotesque`
- **Technical labels/contact snippets:** `IBM Plex Mono`

### Extracted scale patterns (from source CSS)

- Hero/display ranges:
  - `clamp(2.75rem, 6vw, 5.5rem)`
  - `clamp(3.2rem, 6.6vw, 6.25rem)`
  - `clamp(4.6rem, 15vw, 12rem)` (large marquee-like text)
- Section titles:
  - `clamp(1.45rem, 2.45vw, 2.35rem)`
  - `clamp(2.25rem, 5vw, 5rem)`
- Body/copy:
  - `clamp(1rem, 1.35vw, 1.2rem)`
  - `clamp(15px, 1.25vw, 18px)`

## Color System (Extracted)

### Core

- `#0a0a0a`, `#0b0b0c`, `#0d0d0d`, `#111`
- White/near-white: `#fff`, `#fcfcfc`, `#fefefe`

### Neutral support

- `#eaeaea`, `#dfdfdf`, `#cfcfcf`, `#a1a1a1`, `#5d5d5d`, `#444`, `#333`

### Overlay gradients

- `rgb(0 0 0 / 0.04)` through `rgb(0 0 0 / 0.86)`
- Section overlays commonly combine:
  - linear dark gradients
  - radial dark vignette
  - subtle repeating grid lines

## Layout System

- **Container max widths:** around `1200px` to `1400px` depending on section
- **Global page gutters:** `12px` to `36px` adaptive
- **Vertical rhythm:** section padding generally `clamp(40px, 6vw, 96px)` style ranges
- **Borders:** thin 1px lines with low-opacity white on dark
- **Radii:** mostly small-to-medium (`8px` to `16px`)

## Component Language

### Header

- Fixed, dark translucent backdrop, thin bottom border
- Brand lockup + compact nav links + contact CTA
- Mobile: menu button + slide/drop panel

### Cookie Banner

- Fixed bottom-right panel
- Light background on dark page
- Compact text and dual action buttons

### Work Cards

- Strong imagery
- Dark gradient overlay for title/category
- Slight hover zoom, subtle transition

### Buttons/Links

- Rounded pill actions
- Dark/light inversion for primary vs secondary
- Tight hover transitions with minimal movement

## Motion & Interaction Baseline

- **Entrance:** staggered reveal on scroll with fade + upward transform
- **Header behavior:** hide on downward scroll after threshold; reveal on upward
- **Cards:** smooth scale and overlay transitions
- **Timing feel:** restrained, not bouncy; 180–450ms ranges depending on action

## Breakpoint Guidance

- Primary desktop fidelity targets: `1920`, `1440`
- Mobile targets: `390`, `430`
- Mobile changes:
  - reduced columns (services/work/clients)
  - simplified nav interaction
  - tighter section paddings

## Implementation Rule

All future visual tuning should use tokenized values from `docs/design-tokens.json` first, then section-specific overrides only where required for exact parity.

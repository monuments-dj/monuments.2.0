# Color system — stop guessing hex values (research 2026-06-13)

DJ's note: "when you guess on making color options for the UI you struggle. Is
there a library or a tool? don't guess." Correct. Here is the answer, with a
concrete plan for the LabFx theme presets.

## The tools (researched, real, current)

| Tool | What it is | Use it for |
|---|---|---|
| **Radix Colors** (radix-ui/colors) | A curated, accessible open-source color SYSTEM. 12-step scales per hue, matched light + dark, with steps mapped to UI states (bg, hover, active, border, text). Drop-in CSS variables. | The fastest way to a correct, accessible palette. Pick a hue, get a vetted scale. |
| **Adobe Leonardo** (leonardocolor.io + `@adobe/leonardo-contrast-colors`) | A GENERATOR. Give it a base/brand color + target contrast ratios; it computes accessible scales. npm module generates palettes programmatically; supports adaptive theming + colorblind-safe checks. | Generating scales FROM DJ's signature red with guaranteed contrast. Best fit for a brand-led theme. |
| **culori** | Modern color-math library (ESM, OKLCH/LCH/P3, perceptually uniform). Used by Tailwind v4 and Radix to build their systems. | The math layer: interpolate, ensure contrast, convert. Pair with Leonardo or roll scales. |
| **chroma.js** | Color manipulation + scales (incl. ColorBrewer, colorblind-tested). | Data-viz scales, gradients. Less ideal for UI tokens than culori. |

## Recommendation for monuments

The brand has a signature **red** (the floating-hand red) and we want a few
themeable presets (currently: monument / noir / electric / press, hand-picked in
`LabFx.astro` — that's the guessing DJ called out).

**Plan:** generate the presets with **Adobe Leonardo** (anchored on the red +
neutrals, contrast targets WCAG AA = 4.5 for text, 3 for large/UI), export the
resulting steps, and feed them into the LabFx `:root` token blocks. Use
**culori** for any in-between math. This replaces hand-chosen hexes with
contrast-guaranteed values, and the existing token names (`--bg --fg --accent
--accent-2 --deep --ink ...`) don't change, so nothing downstream breaks.

- Leonardo config: backgrounds (dark + light), text/UI colors keyed to the red
  and a neutral, each with a contrast target. Export -> paste hex into the four
  preset blocks.
- If we want it LIVE (the theme selector generating instead of swapping fixed
  presets), `@adobe/leonardo-contrast-colors` can run client-side to recompute
  the palette from one base color + a contrast slider. That's a future upgrade.

## Why not keep hand-picking
Hand-picked hexes have no contrast guarantee (the "press" light theme already
risks low-contrast text), no perceptual evenness between steps, and no
dark/light parity. Leonardo/Radix solve all three by construction.

## Sources
- Radix Colors — https://github.com/radix-ui/colors , https://www.radix-ui.com/colors
- Adobe Leonardo — https://leonardocolor.io/
- culori (used by Tailwind v4 + Radix) — color math, OKLCH
- chroma.js — https://gka.github.io/chroma.js/

# Monuments — Design Spec (lab pages)

The source of truth for the lab-page reskin: the tokenized color system, the
type-clip fix, the motion laws, and how to add a new theme preset.

This applies to the `/lab/*` pages, which import `src/components/LabFx.astro`.
LabFx ships ONLY on lab pages, so everything here re-skins lab without touching
the live pages.

---

## 1. Color tokens

All themed surfaces/text/accents route through CSS custom properties defined in
`LabFx.astro`'s `<style is:global>`. The DEFAULT tokens live on `:root` (preset
"monument"), so static render is themed with NO JS. Presets override on
`:root.theme-noir` / `:root.theme-electric` / `:root.theme-press`.

The names `--black`, `--white`, `--accent`, `--c-slate`, `--c-sand` already
existed in `global.css` and are reused everywhere by the lab pages — LabFx
redefines them so the reskin is automatic.

### Token reference

| Token         | Role                                   | Notes |
|---------------|----------------------------------------|-------|
| `--bg`        | page background surface                | mirror of `--black` |
| `--black`     | legacy bg name (lab pages use it)      | = `--bg` |
| `--fg`        | primary text / foreground              | mirror of `--white` |
| `--white`     | legacy fg name (lab pages use it)      | = `--fg` |
| `--fg-rgb`    | space-separated rgb of `--fg`          | for `rgb(var(--fg-rgb) / a)` |
| `--paper`     | light card / inverted panel surface    | |
| `--ink`       | dark text on light/paper surfaces      | |
| `--ink-rgb`   | space-separated rgb of `--ink`         | for `rgb(var(--ink-rgb) / a)` |
| `--accent`    | SIGNATURE accent (the floating hand)   | red in most presets |
| `--accent-2`  | secondary accent                       | blue in most presets |
| `--deep`      | cool deep section bed                   | mirror of `--c-slate` |
| `--c-slate`   | legacy cool-deep name                  | = `--deep` |
| `--warm-deep` | warm deep section bed                   | |
| `--c-sand`    | warm light section (legacy)            | |

Plus the structural tokens from `global.css` that the selector does NOT touch:
`--wrap` (1300px content column), `--pad` (`clamp(24px,5vw,40px)` gutter).

### Preset values

| Token        | monument (default) | noir      | electric  | press (light) |
|--------------|--------------------|-----------|-----------|---------------|
| `--bg`/`--black`     | `#0c0b0a`   | `#000`    | `#0a0b12` | `#f4efe6`     |
| `--fg`/`--white`     | `#f4efe6`   | `#ededed` | `#f2f4ff` | `#16130f`     |
| `--fg-rgb`           | `244 239 230` | `237 237 237` | `242 244 255` | `22 19 15` |
| `--paper`            | `#f4efe6`   | `#ededed` | `#f2f4ff` | `#16130f`     |
| `--ink`              | `#16130f`   | `#0a0a0a` | `#0a0b12` | `#f4efe6`     |
| `--ink-rgb`          | `22 19 15`  | `10 10 10`| `10 11 18`| `244 239 230` |
| `--accent`           | `#ff3b2e`   | `#ff2e1f` | `#3a4dff` | `#e0241a`     |
| `--accent-2`         | `#2b3bff`   | `#4a5bff` | `#ff3b2e` | `#2233dd`     |
| `--deep`/`--c-slate` | `#141b2e`   | `#0e0e12` | `#10142a` | `#dcd3c4`     |
| `--warm-deep`        | `#1c160f`   | `#121212` | `#11131f` | `#e7ddcc`     |
| `--c-sand`           | `#e7ddcc`   | (inherits)| (inherits)| `#e7ddcc`     |

### Usage rules

- Use `var(--bg)` / `var(--fg)` / `var(--accent)` / `var(--accent-2)` /
  `var(--deep)` / `var(--warm-deep)`, plus the existing `var(--black)` /
  `var(--white)` / `var(--accent)` / `var(--wrap)` / `var(--pad)`.
- For translucent fg/ink use `rgb(var(--fg-rgb) / 0.7)` and
  `rgb(var(--ink-rgb) / 0.7)` — NOT `rgba(252,252,252,…)` or `rgba(20,21,25,…)`.
- NEVER hardcode a raw hex for a themed surface/text/accent. Route it through a
  token so the selector works. (Keeping `#e0322d` as-is is acceptable only for
  marker-stroke SVGs, but prefer `var(--accent)`.)
- Italic emphasis via `<em>` colored `var(--accent)`.

### The live selector

`LabFx.astro` renders a fixed control bottom-LEFT (`.fx-theme`, z-index 2600,
`pointer-events:auto`, does not block scrolling): a row of 4 round swatches, one
per preset, each showing that preset's `--accent` over its `--bg`.

- Click → sets the preset class on `<html>` (`theme-noir`/`theme-electric`/
  `theme-press`, or removes all for `monument`) and
  `localStorage.setItem('mc-theme', name)`.
- On load → a tiny `<script is:inline>` no-flash shim reads `localStorage` and
  applies the class before paint. Default (no class) = "monument".
- The active swatch is marked via `aria-pressed="true"`.

---

## 2. Type-clip fix (CRITICAL)

Italics overhang and descenders (g/y/p) were being clipped by word-mask boxes.
Any word-reveal mask wrapper MUST be:

```css
.split .w  { display:inline-block; overflow:clip; overflow-clip-margin:0.22em;
             vertical-align:top; padding:0.1em 0.14em; margin:-0.1em -0.14em; }
.split .wi { display:inline-block; transform:translateY(135%);
             transition:transform .75s cubic-bezier(.16,1,.3,1) calc(var(--wd)*.04s); }
.split.on .wi { transform:none; }
```

For clip-path LINE masks, use:
- hidden: `inset(-15% -3% 102% -3%)`
- shown:  `inset(-15% -3% -22% -3%)`

so overhang is not cut.

Rules:
- NEVER use plain `overflow:hidden` on a tight text box.
- Headings must have enough line-height and NOT clip ascenders/descenders.

---

## 3. Typography

- Inter only, weights 300–600.
- Big display = weight 400, `letter-spacing:-0.03em`, `line-height:~1`.
- Use `clamp()` for sizes.
- Italic emphasis via `<em>` colored `var(--accent)`.

---

## 4. Motion laws (more pizzazz, more parallax, more scroll)

Measured from the references (see `REFERENCES.md` + filmstrips in
`tools/snaps/motion-*`).

1. **Pinned scenes**: sticky stage (`position:sticky; top:0; height:100vh`)
   inside a tall parent (e.g. `300vh`); scroll progress through the parent
   drives composition.
2. **Scrubbed + reversible**: all scroll motion is driven by scroll position
   every frame via rAF — never fire-once.
3. **Overlap at seams**: the next scene slides/grows OVER the previous
   (`margin-top:-100vh` trick), never a hard cut.
4. **Media travels SLOWER than type**: parallax factor ~0.4–0.6x. Be generous —
   elements deviate 60–240px, not timid 10px drifts.
5. **Atmosphere can change per scene.**
6. **Respect `prefers-reduced-motion` everywhere**: pinned scenes collapse to
   normal stacked sections, transforms off.

---

## 5. How to add a new theme preset

1. Pick a name, e.g. `dusk`. Its class will be `theme-dusk`.
2. In `LabFx.astro`'s `<style is:global>`, add a `:root.theme-dusk { … }` block.
   Define EVERY token that differs from "monument": at minimum `--bg`/`--black`,
   `--fg`/`--white`, `--fg-rgb`, `--paper`, `--ink`, `--ink-rgb`, `--accent`,
   `--accent-2`, `--deep`/`--c-slate`, `--warm-deep`. (Anything you omit inherits
   the monument default from `:root`.)
3. Add a swatch button in the `.fx-theme` markup:
   `<button class="fx-sw" data-theme="dusk" aria-label="Dusk theme (…)"></button>`
4. Add the swatch's preview gradient in CSS (mirror the existing
   `.fx-sw[data-theme="…"]` rules — its own `--accent` over its own `--bg`):
   `.fx-sw[data-theme="dusk"] { background: radial-gradient(circle at 50% 50%, ACCENT 0 45%, BG 46% 100%); }`
5. Add the name to the `THEMES` array in the module `<script>` and to the class
   list in BOTH `currentTheme()` and the no-flash inline `<script is:inline>`
   (the `classes` array and the conditional).
6. That's it — the selector toggles `theme-dusk` on `<html>` and persists it.

Notes:
- `monument` is the DEFAULT (no class on `<html>`). Don't add a `:root.theme-monument`
  block; "monument" just means "remove all theme classes".
- Keep swatch preview gradients using literal hex (they must show each preset's
  color regardless of the active theme).

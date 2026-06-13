// tools/gen-palettes.mjs: generate contrast-safe LabFx theme presets.
//
// Why this exists: DJ called out that hand-picking theme hex "guesses." This
// script removes the guess. Every token is either a deliberate surface choice
// or an algorithmically-derived value with a verified WCAG contrast ratio.
//
// Tool roles (honest about who does what):
//   - culori        : OKLCH math (perceptually-even surface beds), WCAG verify,
//                     RGB extraction, and the lightness search that targets a
//                     contrast ratio while preserving a color's hue + chroma.
//   - Adobe Leonardo: corrects an ACCENT when a surface makes it illegible
//                     (e.g. the brand red on a cream "press" background), via
//                     its Theme/Color contrast engine. We preserve the exact
//                     brand color whenever it already clears the target, since
//                     Leonardo would otherwise dim it to the bare minimum.
//
// Output: paste-ready `:root.theme-NAME { ... }` blocks + the swatch gradients
// + the THEMES array, plus a verification report. Run: `node tools/gen-palettes.mjs`
// Token names match LabFx exactly, so nothing downstream changes.

import { Theme, Color, BackgroundColor, luminance } from '@adobe/leonardo-contrast-colors';
import { converter, formatHex, wcagContrast, clampChroma } from 'culori';

const toOklch = converter('oklch');
const toRgb = converter('rgb');
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const hex = (c) => formatHex(clampChroma({ ...c, mode: 'oklch' }, 'rgb', 'oklch'));
const wcag = (a, b) => wcagContrast(a, b);
const rgbTriple = (h) => {
  const c = toRgb(h);
  return [c.r, c.g, c.b].map((v) => Math.round(v * 255)).join(' ');
};

// A bright (or deep) text tone tinted faintly toward the surface hue. We anchor
// at high contrast on purpose (crisp beats text dimmed to the WCAG floor),
// and only push FURTHER from the surface in the rare case the anchor is short.
function textTone(surfaceHex, target, lightText) {
  const s = toOklch(surfaceHex);
  const h = s.h ?? 70;
  const c = lightText ? 0.012 : 0.016; // faint warmth/coolness from the surface
  let l = lightText ? 0.95 : 0.18;     // near-white / near-black anchor
  let out = hex({ l, c, h });
  const dir = lightText ? +1 : -1;     // away from surface = more contrast
  for (let i = 0; i < 80 && wcag(out, surfaceHex) < target; i++) {
    l = clamp(l + dir * 0.01, 0, 1);
    out = hex({ l, c, h });
  }
  return out;
}

// Move a color's lightness (OKLCH, hue+chroma preserved) until it clears target
// against the surface. Direction chosen by surface lightness.
function adjustToContrast(srcHex, surfaceHex, target) {
  if (wcag(srcHex, surfaceHex) >= target) return formatHex(srcHex); // preserve as-is
  const src = toOklch(srcHex);
  const surfDark = toOklch(surfaceHex).l < 0.5;
  const dir = surfDark ? +1 : -1;
  let l = src.l;
  let out = srcHex;
  for (let i = 0; i < 200; i++) {
    l = clamp(l + dir * 0.004, 0, 1);
    out = hex({ l, c: src.c, h: src.h ?? 0 });
    if (wcag(out, surfaceHex) >= target) return out;
  }
  return out;
}

// Leonardo correction: find the theme lightness whose output background best
// matches our exact surface luminance, then read back the accent Leonardo places
// at the target ratio. Re-verified against the EXACT surface; nudged if drift.
function leonardoFixAccent(accentHex, surfaceHex, target) {
  const targetLum = luminance(surfaceHex);
  const bg = new BackgroundColor({ name: 'bg', colorKeys: [surfaceHex], ratios: [2] });
  const accent = new Color({ name: 'accent', colorKeys: [accentHex], ratios: [target] });
  let best = null;
  for (let L = 2; L <= 99; L += 1) {
    const theme = new Theme({ colors: [accent], backgroundColor: bg, lightness: L });
    const outBg = theme.contrastColors[0].background;
    const d = Math.abs(luminance(outBg) - targetLum);
    if (!best || d < best.d) best = { d, value: theme.contrastColorPairs.accent100 };
  }
  // Guarantee against the real surface (Leonardo's bg can drift a hair).
  return adjustToContrast(best.value, surfaceHex, target);
}

// Preserve the brand/base accent if it already clears the target on the surface;
// otherwise hand it to Leonardo to correct.
function accentFor(accentHex, surfaceHex, target) {
  if (wcag(accentHex, surfaceHex) >= target) {
    return { value: formatHex(accentHex), corrected: false };
  }
  return { value: leonardoFixAccent(accentHex, surfaceHex, target), corrected: true };
}

// A subtle section "bed": shift the surface's OKLCH lightness by dL and steer its
// hue/chroma toward a target, staying perceptually close to the surface.
function bed(surfaceHex, dL, h, c) {
  const s = toOklch(surfaceHex);
  return hex({ l: clamp(s.l + dL, 0, 1), c, h });
}

// ---- The presets: deliberate surfaces + base accents; everything else derived ----
// mode 'dark' => --bg is the dark surface; 'light' => --bg is the light surface.
const TEXT_TARGET = 12.5; // body text: well past AA (4.5) and AAA (7)
const ACCENT_TARGET = 4.5; // AA for normal text
const ACCENT2_TARGET = 3.5; // large text / UI

const PRESETS = [
  { name: 'monument', label: 'Monument theme: warm dark, signature red', mode: 'dark',
    dark: '#0c0b0a', light: '#f4efe6', accent: '#ff3b2e', accent2: '#2b3bff' },
  { name: 'noir', label: 'Noir theme: true black', mode: 'dark',
    dark: '#000000', light: '#ededed', accent: '#ff3b2e', accent2: '#4a5bff' },
  { name: 'electric', label: 'Electric theme: cool dark, blue', mode: 'dark',
    dark: '#0a0b12', light: '#f2f4ff', accent: '#3a4dff', accent2: '#ff3b2e' },
  { name: 'press', label: 'Press theme: light editorial', mode: 'light',
    light: '#f4efe6', dark: '#16130f', accent: '#ff3b2e', accent2: '#2233dd' },
  { name: 'slate', label: 'Slate theme: cool neutral dark, indigo', mode: 'dark',
    dark: '#0e1014', light: '#eef0f3', accent: '#5b6cff', accent2: '#16b8c4' },
  { name: 'forest', label: 'Forest theme: deep green, amber', mode: 'dark',
    dark: '#0b110d', light: '#eef1ea', accent: '#ffb224', accent2: '#46a758' },
  { name: 'sand', label: 'Sand theme: warm light, clay', mode: 'light',
    light: '#f3ece1', dark: '#1a1410', accent: '#c2410c', accent2: '#0f766e' },
  { name: 'mono', label: 'Mono theme: max contrast, single red', mode: 'dark',
    dark: '#050505', light: '#fafafa', accent: '#ff3b2e', accent2: '#ff3b2e' },
];

function build(p) {
  const isDark = p.mode === 'dark';
  const surface = isDark ? p.dark : p.light;   // --bg
  const inverse = isDark ? p.light : p.dark;    // --paper

  const fg = textTone(surface, TEXT_TARGET, isDark);     // text on --bg
  const ink = textTone(inverse, TEXT_TARGET, !isDark);   // text on --paper
  const a1 = accentFor(p.accent, surface, ACCENT_TARGET);
  const a2 = accentFor(p.accent2, surface, ACCENT2_TARGET);

  // Beds: dark surfaces lift toward light (clamped to a visible band so true-black
  // themes still get distinguishable section beds); light surfaces drop toward dark.
  const mono = p.name === 'mono';
  const sL = toOklch(surface).l;
  let deep, warmDeep, sand;
  if (isDark) {
    deep = hex({ l: clamp(sL + 0.06, 0.13, 0.24), c: mono ? 0.006 : 0.035, h: mono ? 250 : 258 });   // cool slate
    warmDeep = hex({ l: clamp(sL + 0.045, 0.11, 0.22), c: mono ? 0.005 : 0.03, h: mono ? 60 : 62 });  // warm bed
    sand = bed(p.light, -0.04, 82, 0.045);                                                            // warm light bed
  } else {
    deep = bed(surface, -0.06, 70, 0.04);
    warmDeep = bed(surface, -0.04, 70, 0.05);
    sand = bed(surface, -0.025, 82, 0.05);
  }

  const tokens = {
    '--bg': surface, '--black': surface,
    '--fg': fg, '--white': fg, '--fg-rgb': rgbTriple(fg),
    '--paper': inverse,
    '--ink': ink, '--ink-rgb': rgbTriple(ink),
    '--accent': a1.value, '--accent-2': a2.value,
    '--deep': deep, '--c-slate': deep,
    '--warm-deep': warmDeep, '--c-sand': sand,
  };

  return { p, tokens, fg, ink, a1, a2, surface, inverse };
}

const built = PRESETS.map(build);

// ---- emit CSS blocks ----
const isDefault = (name) => name === 'monument';
let css = '';
for (const b of built) {
  const sel = isDefault(b.p.name) ? ':root' : `:root.theme-${b.p.name}`;
  const note = isDefault(b.p.name) ? '  /* default = monument; on :root so static render is themed */' : '';
  css += `${sel} {${note}\n`;
  css += `    /* ${b.p.label} */\n`;
  css += `    --bg: ${b.tokens['--bg']};        --black: ${b.tokens['--black']};\n`;
  css += `    --fg: ${b.tokens['--fg']};        --white: ${b.tokens['--white']};   --fg-rgb: ${b.tokens['--fg-rgb']};\n`;
  css += `    --paper: ${b.tokens['--paper']};\n`;
  css += `    --ink: ${b.tokens['--ink']};       --ink-rgb: ${b.tokens['--ink-rgb']};\n`;
  css += `    --accent: ${b.tokens['--accent']};    --accent-2: ${b.tokens['--accent-2']};\n`;
  css += `    --deep: ${b.tokens['--deep']};      --c-slate: ${b.tokens['--c-slate']};\n`;
  css += `    --warm-deep: ${b.tokens['--warm-deep']}; --c-sand: ${b.tokens['--c-sand']};\n`;
  css += `  }\n\n`;
}

// ---- emit swatch gradients (accent over bg) ----
let swatches = '';
for (const b of built) {
  swatches += `  .fx-sw[data-theme="${b.p.name}"] { background: radial-gradient(circle at 50% 50%, ${b.tokens['--accent']} 0 45%, ${b.tokens['--bg']} 46% 100%); }\n`;
}

// ---- emit THEMES array + swatch buttons ----
const themesArr = `const THEMES = [${built.map((b) => `'${b.p.name}'`).join(', ')}];`;
let buttons = '';
for (const b of built) {
  buttons += `  <button class="fx-sw" data-theme="${b.p.name}" aria-label="${b.p.label}"></button>\n`;
}

// ---- verification report ----
let report = '\n===== VERIFICATION (WCAG contrast, must clear target) =====\n';
for (const b of built) {
  const fgC = wcag(b.fg, b.surface).toFixed(2);
  const inkC = wcag(b.ink, b.inverse).toFixed(2);
  const a1C = wcag(b.a1.value, b.surface).toFixed(2);
  const a2C = wcag(b.a2.value, b.surface).toFixed(2);
  report += `${b.p.name.padEnd(9)} fg/bg ${fgC.padStart(6)}  ink/paper ${inkC.padStart(6)}  ` +
    `accent/bg ${a1C.padStart(5)}${b.a1.corrected ? ' (Leonardo-fixed ' + b.p.accent + '->' + b.a1.value + ')' : ' (brand kept)'}  ` +
    `accent2/bg ${a2C.padStart(5)}${b.a2.corrected ? ' (fixed)' : ''}\n`;
}

console.log(report);
console.log('\n===== CSS BLOCKS (paste into LabFx <style is:global>) =====\n');
console.log(css);
console.log('===== SWATCH GRADIENTS =====\n');
console.log(swatches);
console.log('===== THEMES ARRAY =====\n');
console.log(themesArr);
console.log('\n===== SWATCH BUTTONS =====\n');
console.log(buttons);

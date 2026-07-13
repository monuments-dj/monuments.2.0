// bw-sweep.mjs · hunt the "stupid mistake" classes in B/W mode, every page, 1440.
// Detects: (1) near-invisible text (color ~ effective bg), (2) hardcoded rose
// survivors, (3) giant vertical voids inside/between sections, (4) adjacent
// same-ground sections with heavy combined padding (black-mass candidates).
// Also saves a full-page screenshot per route for the visual review pass.
import { chromium } from 'playwright';
import fs from 'node:fs';

const base = 'http://localhost:4322';
const routes = [
  '/', '/work', '/about', '/capabilities', '/contact', '/photography', '/giving', '/hire', '/template', '/ai',
  ...['adorama-music','art-of-visuals','blue-cross','buck-the-quo','clothing-merch','cwi-lets-get-started',
      'donut-zumiez','dw-drums','flashpoint','know-vape','on-camera','sony-flow-state','sony-this-moment',
      'sony-xm5','sony-xperia-summer','turnstile','waffle-me-up'].map(s => `/work/${s}`),
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
fs.mkdirSync('tools/snaps/bw-sweep', { recursive: true });
const report = {};

for (const route of routes) {
  const name = route === '/' ? 'home' : route.replace(/\//g, '_').replace(/^_/, '');
  await page.addInitScript(a => localStorage.setItem('mnmt-accent', a), 'bw');
  await page.goto(base + route, { waitUntil: 'networkidle' }).catch(() => null);
  await page.waitForTimeout(1200);
  // force all reveals so hidden .rv content doesn't read as voids
  await page.evaluate(() => {
    document.querySelectorAll('.rv,.fr,.pl,.cfr').forEach(el => el.classList.add('in'));
    document.querySelectorAll('.frames').forEach(el => el.classList.add('show'));
    scrollTo(0, document.body.scrollHeight); // trigger lazyload
  });
  await page.waitForTimeout(1200);
  await page.evaluate(() => scrollTo(0, 0));
  await page.waitForTimeout(400);

  const findings = await page.evaluate(() => {
    const out = { invisibleText: [], pink: [], voids: [], masses: [] };
    const lum = (r, g, b) => { const f = c => { c /= 255; return c <= .03928 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4; }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
    const parse = (s) => { const m = s.match(/rgba?\(([\d.]+), ?([\d.]+), ?([\d.]+)(?:, ?([\d.]+))?\)/); return m ? [+m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4]] : null; };
    const effBg = (el) => { let n = el; while (n && n !== document.documentElement) { const bg = parse(getComputedStyle(n).backgroundColor); if (bg && bg[3] > .5) return bg; n = n.parentElement; } return [22, 21, 20, 1]; };
    const sel = (el) => { let s = el.tagName.toLowerCase(); if (el.id) s += '#' + el.id; else if (el.className && typeof el.className === 'string') s += '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.'); return s; };

    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 8 || r.height < 8) continue;
      // pink survivors (rose #EFA1AD = 239,161,173)
      for (const prop of ['color', 'backgroundColor', 'borderTopColor', 'stroke', 'fill']) {
        const v = cs[prop] || '';
        if (v.includes('239, 161, 173')) { out.pink.push({ el: sel(el), prop }); break; }
      }
      // invisible text: direct text node with real content
      const hasText = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 2);
      if (hasText) {
        const c = parse(cs.color); if (!c) continue;
        const bg = effBg(el);
        const l1 = lum(c[0], c[1], c[2]), l2 = lum(bg[0], bg[1], bg[2]);
        const ratio = (Math.max(l1, l2) + .05) / (Math.min(l1, l2) + .05);
        if (ratio < 1.6) out.invisibleText.push({ el: sel(el), txt: el.textContent.trim().slice(0, 40), ratio: +ratio.toFixed(2) });
      }
    }
    // voids + masses: walk top-level flow sections
    const roots = document.querySelectorAll('.over > *, body > section, body > div.break, body > header, body > .statrow, body > .rolerow');
    const blocks = [...(roots.length ? roots : document.body.children)]
      .filter(el => { const r = el.getBoundingClientRect(); return r.height > 40 && getComputedStyle(el).position !== 'fixed'; });
    for (let i = 0; i < blocks.length - 1; i++) {
      const a = blocks[i].getBoundingClientRect(), b = blocks[i + 1].getBoundingClientRect();
      const gap = b.top - a.bottom;
      if (gap > 220) out.voids.push({ between: sel(blocks[i]) + ' -> ' + sel(blocks[i + 1]), gap: Math.round(gap) });
      // same-ground mass: both dark or both light, no border, combined inner dead space
      const bgA = effBg(blocks[i]), bgB = effBg(blocks[i + 1]);
      const dark = (c) => lum(c[0], c[1], c[2]) < .05;
      if (dark(bgA) === dark(bgB)) {
        const padA = parseFloat(getComputedStyle(blocks[i]).paddingBottom) || 0;
        const padB = parseFloat(getComputedStyle(blocks[i + 1]).paddingTop) || 0;
        if (padA + padB + Math.max(0, gap) > 260) out.masses.push({ between: sel(blocks[i]) + ' -> ' + sel(blocks[i + 1]), dead: Math.round(padA + padB + Math.max(0, gap)) });
      }
    }
    // dedupe pink by el+prop
    out.pink = [...new Map(out.pink.map(p => [p.el + p.prop, p])).values()].slice(0, 12);
    out.invisibleText = out.invisibleText.slice(0, 12);
    return out;
  });

  await page.screenshot({ path: `tools/snaps/bw-sweep/${name}.png`, fullPage: true }).catch(() => null);
  report[route] = findings;
  const n = findings.invisibleText.length + findings.pink.length + findings.voids.length + findings.masses.length;
  console.log(`${route.padEnd(28)} text:${findings.invisibleText.length} pink:${findings.pink.length} voids:${findings.voids.length} masses:${findings.masses.length}`);
}
fs.writeFileSync('tools/snaps/bw-sweep/report.json', JSON.stringify(report, null, 1));
await browser.close();
console.log('DONE');

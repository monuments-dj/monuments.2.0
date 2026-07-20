// flowcheck.mjs — the page FLOW RULE, enforced. Content bands must alternate;
// no two LIGHT bands may sit adjacent (never a light section butted against another
// light section). v2 (2026-07-20): the old version trusted a hardcoded selector
// list, so any band class it had never heard of was INVISIBLE (capabilities: 1 of
// 9 sections seen) and its PASSes were meaningless; it also hung on /work because
// autoplaying video keeps networkidle from ever settling. This version reads the
// page the way an eye does: sample the painted ground down the left gutter at a
// fixed step, resolve each sample to the topmost opaque background in the hit
// stack, and merge runs into bands. No allow-list to go stale.
// NOTE (DJ 2026-07-14): stat bars (.statrow/.rolerow/.statbeat/.sr) are EXEMPT
// from the flow — neutral beats. Semantics: they are PUNCTUATION — never counted
// as a light/dark band themselves, but they DO separate the bands around them
// (a dark statbeat between two light sections is a real visual break; v2's first
// cut dropped them entirely and manufactured a false adjacent-light on the Kit).
// Usage: node tools/flowcheck.mjs [url ...]   default /page-template
//        exit 1 if ANY page fails.
import { chromium } from '/Users/djram/monuments-site/node_modules/playwright/index.mjs';
const urls = process.argv.slice(2);
if (!urls.length) urls.push('http://localhost:4321/page-template');
const b = await chromium.launch();
let anyFail = false;
for (const url of urls) {
  const pg = await b.newPage();
  await pg.setViewportSize({ width: 1280, height: 900 });
  try {
    await pg.goto(url, { waitUntil: 'load', timeout: 20000 });
  } catch (e) {
    console.log(url, '\n  ❌ LOAD ERROR:', e.message.split('\n')[0]);
    anyFail = true; await pg.close(); continue;
  }
  await pg.waitForTimeout(400);
  const bands = await pg.evaluate(async () => {
    const STEP = 60, X = 18, MINBAND = 140;
    const EXEMPT = '.statrow,.rolerow,.statbeat,.sr';
    const H = document.documentElement.scrollHeight;
    const samples = [];
    const toneOf = (rgb) => {
      const m = rgb && rgb.match(/[\d.]+/g);
      if (!m) return null;
      if (m[3] !== undefined && Number(m[3]) === 0) return null; // transparent
      const [r, g, bl] = m.map(Number), lum = (r + g + bl) / 3;
      if (r > 185 && r - g > 38 && r - bl > 20) return 'ACCENT';
      return lum > 200 ? 'LIGHT' : 'DARK';
    };
    const raf2 = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    for (let y = 30; y < H - 10; y += STEP) {
      // 'instant' beats any scroll-behavior:smooth / Lenis animation — sampling
      // right after an animated scrollTo reads the OLD position (the probe desync).
      window.scrollTo({ top: Math.max(0, y - 450), behavior: 'instant' });
      await raf2();
      const vy = y - window.scrollY;
      if (vy < 0 || vy > innerHeight) continue;
      let tone = null, label = '', exempt = false;
      for (const el of document.elementsFromPoint(X, vy)) {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed' || cs.position === 'sticky') continue;
        if (el.matches(EXEMPT) || el.closest(EXEMPT)) { exempt = true; }
        // the rule is about BAND GROUNDS, not content: skip narrow elements
        // (cards, film frames, tiles) so the sample lands on the band's ground —
        // a white reel-card on a paper band, or a white .fr frame on an ink
        // sheet, must not masquerade as the ground (the home false-FAIL).
        if (el.getBoundingClientRect().width < innerWidth * 0.6) continue;
        if (/^(IMG|VIDEO|CANVAS|PICTURE)$/.test(el.tagName)) {
          // full-bleed media ground: imagery counts as DARK (the .break convention)
          tone = 'DARK'; label = el.tagName.toLowerCase(); break;
        }
        const t = toneOf(cs.backgroundColor);
        if (t) {
          tone = t;
          label = (el.className && typeof el.className === 'string'
            ? el.className.trim().split(/\s+/)[0] : el.tagName).toString().slice(0, 16);
          break;
        }
      }
      if (!tone) tone = 'DARK'; // nothing painted → the ink base
      samples.push({ y, tone, label, exempt });
    }
    // merge consecutive same-tone samples into bands; drop exempt + thin runs
    const runs = [];
    for (const s of samples) {
      const last = runs[runs.length - 1];
      if (last && last.tone === s.tone && last.exempt === s.exempt) { last.h += STEP; }
      else runs.push({ tone: s.tone, label: s.label, exempt: s.exempt, h: STEP, y: s.y });
    }
    // exempt runs stay in the list as separators (t:'·'); thin noise runs merge away
    return runs.filter(r => r.exempt ? r.h >= 100 : r.h >= MINBAND)
               .map(r => ({ t: r.exempt ? '·' : r.tone, label: r.label, y: r.y, h: r.h }));
  });
  const seq = bands.map(x => x.t);
  const viol = [];
  for (let i = 1; i < seq.length; i++)
    if (seq[i] === 'LIGHT' && seq[i - 1] === 'LIGHT') viol.push(`${i - 1}-${i}`);
  console.log(url);
  console.log('  SEQ:', seq.join(' '), `  (${bands.length} bands)`);
  if (viol.length) {
    for (const v of viol) {
      const [a, c] = v.split('-').map(Number);
      console.log(`  FAIL adjacent-light @ ${v}: ${bands[a].label}(y${bands[a].y}) + ${bands[c].label}(y${bands[c].y})`);
    }
    anyFail = true;
  } else console.log('  PASS');
  await pg.close();
}
await b.close();
process.exit(anyFail ? 1 : 0);

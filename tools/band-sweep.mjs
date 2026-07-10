// band-sweep.mjs · verify the statrow/rolerow band on every page, at both accents.
// For each page x accent: computed statrow text colors must match --on-rgb, the
// statrow must carry its separator border, and the rolerow must flow flex-start
// (wrapped lines allowed, spread orphans not). Usage: node tools/band-sweep.mjs [base]
import { chromium } from 'playwright';
import fs from 'node:fs';

const base = process.argv[2] || 'http://localhost:4321';
const pages = [
  '/', '/work', '/about', '/giving',
  ...['adorama-music','art-of-visuals','blue-cross','buck-the-quo','clothing-merch',
      'cwi-lets-get-started','donut-zumiez','flashpoint','know-vape','on-camera',
      'sony-flow-state','sony-this-moment','sony-xm5','sony-xperia-summer',
      'turnstile','waffle-me-up'].map(s => `/work/${s}`),
];
const accents = { rose: '22, 21, 20', ink: '245, 243, 239' };
const shots = ['/work/clothing-merch', '/work/flashpoint', '/work/know-vape'];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
fs.mkdirSync('tools/snaps/band-sweep', { recursive: true });

let fails = 0;
for (const [acc, rgb] of Object.entries(accents)) {
  await page.addInitScript(a => localStorage.setItem('mnmt-accent', a), acc);
  for (const path of pages) {
    await page.goto(base + path, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);
    const r = await page.evaluate((expRgb) => {
      const sr = document.querySelector('.statrow');
      if (!sr) return { skip: true };
      const b = sr.querySelector('.stat b');
      const span = sr.querySelector('.stat span');
      const cs = getComputedStyle(sr);
      const out = {
        bColor: b ? getComputedStyle(b).color : null,
        spanColor: span ? getComputedStyle(span).color : null,
        srColor: cs.color,
        border: cs.borderBottomWidth + ' ' + cs.borderBottomColor,
        expect: `rgb(${expRgb})`,
      };
      const rr = document.querySelector('.rolerow>.in');
      if (rr) {
        out.rolerowJustify = getComputedStyle(rr).justifyContent;
        const ys = [...rr.querySelectorAll(':scope>span')].map(s => Math.round(s.getBoundingClientRect().y));
        out.rolerowRows = [...new Set(ys)].length;
      }
      return out;
    }, rgb);
    if (r.skip) { console.log(`SKIP  ${acc} ${path} (no statrow)`); continue; }
    const okColor = r.srColor === r.expect && (!r.bColor || r.bColor === r.expect);
    const okSpan = !r.spanColor || r.spanColor.startsWith(`rgba(${rgb}`);
    const okJustify = !r.rolerowJustify || r.rolerowJustify === 'flex-start';
    const okBorder = r.border.startsWith('1px');
    const ok = okColor && okSpan && okJustify && okBorder;
    if (!ok) fails++;
    console.log(`${ok ? 'OK  ' : 'FAIL'}  ${acc.padEnd(4)} ${path.padEnd(28)} color:${okColor} span:${okSpan} justify:${okJustify}(${r.rolerowJustify || '-'}) border:${okBorder}(${r.border}) rows:${r.rolerowRows ?? '-'}`);
    if (shots.includes(path)) {
      const sr = await page.locator('.statrow').first();
      await sr.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      const box = await sr.boundingBox();
      if (box) await page.screenshot({ path: `tools/snaps/band-sweep/${acc}-${path.replace(/\//g, '_')}.png`, clip: { x: 0, y: Math.max(0, box.y - 10), width: 1440, height: Math.min(360, 900 - Math.max(0, box.y - 10)) } });
    }
  }
}
await browser.close();
console.log(fails ? `\n${fails} FAILURES` : '\nALL PASS');
process.exit(fails ? 1 : 0);

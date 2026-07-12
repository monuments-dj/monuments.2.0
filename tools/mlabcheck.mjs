// MOTION LAB verification: cycles all 5 languages, shoots each entrance,
// drives the lock scrub to arbitrary RESTING offsets (the repeat-corrections
// rule), and confirms the engine state.
import { chromium } from 'playwright';
const BASE = process.argv[2] || 'http://localhost:4444';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE + '/template/', { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.removeItem('mnmt-mlab'));

const labTop = await page.evaluate(() => {
  const r = document.getElementById('mlab').getBoundingClientRect();
  return r.top + scrollY;
});

for (const mo of ['settle', 'rise', 'drift', 'snap']) {
  await page.evaluate(v => {
    document.querySelector(`.mlab-btns button[data-mo="${v}"]`).click();
    scrollTo(0, 0);
  }, mo);
  await page.waitForTimeout(300);
  // arrive at the lab like a visitor: land title block in view, let entrance run
  await page.evaluate(t => scrollTo(0, t - 200), labTop);
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `tools/snaps/mlab-${mo}-title.png` });
  // then the tail of the lab (duo + cta entered)
  await page.evaluate(() => document.querySelector('.mlab-cta').scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `tools/snaps/mlab-${mo}-tail.png` });
  const state = await page.evaluate(() => ({
    mode: document.getElementById('mlab').getAttribute('data-motion'),
    total: document.querySelectorAll('#mlab .m-el').length,
    entered: document.querySelectorAll('#mlab .m-el.in').length,
  }));
  console.log(mo, JSON.stringify(state));
}

// LOCK: resting offsets through the pin + after it
await page.evaluate(() => { document.querySelector('.mlab-btns button[data-mo="lock"]').click(); scrollTo(0, 0); });
await page.waitForTimeout(400);
const seg = await page.evaluate(() => {
  const el = document.getElementById('mlabLockseg');
  const r = el.getBoundingClientRect();
  return { top: r.top + scrollY, h: el.offsetHeight };
});
for (const f of [0.15, 0.45, 0.75, 1.0]) {
  const y = Math.round(seg.top + (seg.h - 900) * f);
  await page.evaluate(v => scrollTo(0, v), y);
  await page.waitForTimeout(700);
  await page.screenshot({ path: `tools/snaps/mlab-lock-${Math.round(f * 100)}.png` });
  const p = await page.evaluate(() => document.getElementById('mlabLockseg').style.getPropertyValue('--p'));
  console.log('lock rest', f, '--p =', p);
}
// past the pin: stats/duo enter normally
await page.evaluate(() => document.querySelector('.mlab-duo').scrollIntoView({ block: 'center' }));
await page.waitForTimeout(1400);
await page.screenshot({ path: 'tools/snaps/mlab-lock-after.png' });
await browser.close();
console.log('mlab shots saved');

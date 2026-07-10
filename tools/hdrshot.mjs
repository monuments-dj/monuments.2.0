import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.addInitScript(() => localStorage.setItem('mnmt-accent','bw'));
await page.goto('http://localhost:4321/work', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(4500); // let the typewriter land
const m = await page.evaluate(() => {
  const hero = document.querySelector('.hero').getBoundingClientRect();
  const bar = document.querySelector('.viewbar, #lens')?.getBoundingClientRect();
  const card = document.querySelector('.gcard')?.getBoundingClientRect();
  return { heroH: Math.round(hero.height), gapBarToGrid: card && bar ? Math.round(card.top - bar.bottom) : null };
});
await page.screenshot({ path: '/tmp/work-top.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log(JSON.stringify(m));
await browser.close();

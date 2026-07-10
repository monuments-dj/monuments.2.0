import { chromium } from 'playwright';
// Full-site mobile QC sweep. For each route at several breakpoints:
//  - horizontal overflow (scrollWidth vs viewport) + worst offender
//  - hero media: did the hero <img>/<video> actually load, or is the header bare?
//  - any image/media that 404'd or has 0 natural size
// Usage: node tools/qc-mobile.mjs [width=390]
const WIDTHS = process.argv[2] ? [Number(process.argv[2])] : [390, 360, 768];
const routes = [
  '/', '/work', '/about', '/capabilities', '/contact', '/ai', '/giving', '/photography',
  ...['ac-boise','adorama-music','art-of-visuals','blue-cross','buck-the-quo','clothing-merch',
      'donut-zumiez','dw-drums','flashpoint','know-vape','on-camera','sony-flow-state',
      'sony-this-moment','sony-xm5','sony-xperia-summer','turnstile','waffle-me-up',
      'cwi-lets-get-started'].map(s => '/work/' + s),
];
const b = await chromium.launch();
for (const width of WIDTHS) {
  console.log(`\n================= ${width}px =================`);
  for (const route of routes) {
    const p = await b.newPage({ viewport: { width, height: 844 }, deviceScaleFactor: 1 });
    const failed = [];
    p.on('response', r => { if (r.status() >= 400 && /\.(jpg|jpeg|png|webp|mp4|webm|avif|gif)/i.test(r.url())) failed.push(r.status() + ' ' + r.url().split('/').slice(-2).join('/')); });
    await p.goto('http://localhost:4321' + route, { waitUntil: 'domcontentloaded' }).catch(() => {});
    await p.waitForTimeout(1600);
    const r = await p.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      let worst = null;
      document.querySelectorAll('*').forEach(el => {
        const b = el.getBoundingClientRect();
        if (b.right > vw + 6 && (!worst || b.right > worst.right)) {
          const cs = getComputedStyle(el);
          if (cs.position !== 'fixed' && cs.visibility !== 'hidden' && +cs.opacity > 0.01)
            worst = { tag: el.tagName.toLowerCase(), cls: ('' + el.className).slice(0, 32), right: Math.round(b.right) };
        }
      });
      // hero media check
      const hero = document.querySelector('.hero, header.hero, .hero-wrap, .wh, .work-page header');
      let heroInfo = 'no-hero-el';
      if (hero) {
        const img = hero.querySelector('img');
        const vid = hero.querySelector('video');
        const ifr = hero.querySelector('iframe');
        const parts = [];
        if (img) parts.push('img:' + (img.naturalWidth > 0 ? 'ok(' + img.naturalWidth + ')' : 'BLANK'));
        if (vid) parts.push('video:' + (vid.readyState >= 2 ? 'ok' : 'rs' + vid.readyState));
        if (ifr) parts.push('iframe');
        if (!parts.length) parts.push('NO-MEDIA(text-only)');
        // is hero visually tall enough to host an image?
        const hb = hero.getBoundingClientRect();
        heroInfo = parts.join(' ') + ' h=' + Math.round(hb.height);
      }
      // any blank in-flow images below hero
      let blanks = 0;
      document.querySelectorAll('img').forEach(im => { const b = im.getBoundingClientRect(); if (b.width > 30 && im.complete && im.naturalWidth === 0) blanks++; });
      return { sw: document.documentElement.scrollWidth, vw, worst, heroInfo, blanks };
    });
    const flag = r.sw > r.vw + 8 ? ' <<OVERFLOW' : '';
    const w = r.worst ? `${r.worst.tag}.${r.worst.cls}@${r.worst.right}` : '-';
    console.log(`${route.padEnd(28)} sw${r.sw} | hero[${r.heroInfo}] | blanks:${r.blanks}${r.blanks?' <<':''} | worst ${w}${flag}${failed.length ? ' | 404:' + failed.join(',') : ''}`);
    await p.close();
  }
}
await b.close();

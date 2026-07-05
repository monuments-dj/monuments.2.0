import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const [url, name] = process.argv.slice(2);
const dir = path.join('tools','snaps', name); fs.mkdirSync(dir,{recursive:true});
const b = await chromium.launch();
const p = await b.newPage({ viewport:{width:390,height:844}, deviceScaleFactor:2 });
await p.goto(url,{waitUntil:'domcontentloaded',timeout:60000}).catch(()=>{});
await p.waitForTimeout(1400);
// 1. hero (nav closed)
await p.screenshot({ path: path.join(dir,'hero.png') });
// 2. overflow report: elements wider than viewport
const overflow = await p.evaluate(()=>{
  const vw = document.documentElement.clientWidth;
  const bad = [];
  document.querySelectorAll('*').forEach(el=>{
    const r = el.getBoundingClientRect();
    if (r.width > vw+1 || r.right > vw+2){
      bad.push({tag:el.tagName.toLowerCase(), cls:(''+el.className).slice(0,44), w:Math.round(r.width), right:Math.round(r.right)});
    }
  });
  return {scrollW:document.documentElement.scrollWidth, clientW:vw, offenders:bad.slice(0,14)};
});
// 3. open the hamburger menu
let menu = 'no-burger';
const burger = await p.$('.navburger');
if (burger){ await burger.click(); await p.waitForTimeout(700); await p.screenshot({path:path.join(dir,'menu-open.png')}); menu='opened';
  // close again
  await burger.click(); await p.waitForTimeout(500);
}
// 4. break section
const brk = await p.$('.break');
if (brk){ await brk.scrollIntoViewIfNeeded(); await p.waitForTimeout(700); await p.screenshot({path:path.join(dir,'break.png')}); }
console.log(JSON.stringify({name, menu, hasBreak:!!brk, overflow}, null, 1));
await b.close();

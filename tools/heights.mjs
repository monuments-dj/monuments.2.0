import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','h'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const routes=['/','/about','/giving','/capabilities','/ai','/work/turnstile','/work/buck-the-quo'];
for(const r of routes){
  const p=await b.newPage({viewport:{width:1440,height:900}});
  await p.goto('http://localhost:4321'+r,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(1200);
  const h=await p.evaluate(()=>{const el=document.querySelector('.hero, header.hero, .band3');return el?Math.round(el.getBoundingClientRect().height):null});
  console.log(r.padEnd(22),'hero',h,'px =',Math.round(h/9)+'% of 900');
  if(r==='/about'||r==='/'){await p.screenshot({path:path.join(dir,(r==='/'?'home':'about')+'-fold.png')});}
  await p.close();
}
// about creed screenshot
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/about',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1200);
const f=await p.$('.file'); await f.scrollIntoViewIfNeeded(); await p.waitForTimeout(900);
await f.screenshot({path:path.join(dir,'creed-tight.png')});
await p.close(); await b.close(); console.log('done');

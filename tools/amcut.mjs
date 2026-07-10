import { chromium } from 'playwright'; import fs from 'node:fs';
const dir='tools/snaps/amcap'; fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/work/adorama-music',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(800);
const el=await p.$('text=/cutdown/i'); if(el){await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(700);}
await p.evaluate(()=>window.scrollBy(0,220)); await p.waitForTimeout(500);
await p.screenshot({path:dir+'/cutdowns.png'}); await b.close();

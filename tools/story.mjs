import { chromium } from 'playwright'; import path from 'node:path'; import fs from 'node:fs';
const dir='tools/snaps/story'; fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:760},deviceScaleFactor:1.3});
await p.goto('http://localhost:4321/work/adorama-music',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(1400);
const secs=await p.$$('.story');
for(let i=0;i<Math.min(secs.length,2);i++){ await secs[i].scrollIntoViewIfNeeded(); await p.evaluate(()=>window.scrollBy(0,-70)); await p.waitForTimeout(500); await p.screenshot({path:path.join(dir,'story-'+i+'.png')}); }
console.log('story sections:', secs.length);
await b.close();

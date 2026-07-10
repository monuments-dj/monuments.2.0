import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT='tools/snaps/adorama160'; fs.mkdirSync(OUT,{recursive:true});
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});
await p.goto('http://localhost:4321/work/adorama-music',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(1200);
const sr=await p.$('.statrow'); if(sr){await sr.scrollIntoViewIfNeeded(); await p.waitForTimeout(500); await sr.screenshot({path:OUT+'/statrow.png'});}
const sb=await p.$('.statbeat'); if(sb){await sb.scrollIntoViewIfNeeded(); await p.waitForTimeout(600); await sb.screenshot({path:OUT+'/statbeat.png'});}
console.log('done'); await b.close();

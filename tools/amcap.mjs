import { chromium } from 'playwright'; import fs from 'node:fs';
const dir='tools/snaps/amcap'; fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/work/adorama-music',{waitUntil:'domcontentloaded'}); await p.waitForTimeout(1000);
await p.evaluate(()=>{document.getElementById('framesA').scrollIntoView();}); await p.waitForTimeout(1200);
await p.evaluate(()=>window.scrollBy(0,-60)); await p.waitForTimeout(600);
await p.screenshot({path:dir+'/frames.png'});
const caps=await p.evaluate(()=>[...document.querySelectorAll('#framesA .cap, #framesB .cap')].slice(0,8).map(c=>c.textContent));
console.log(JSON.stringify(caps)); await b.close();

import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','menu'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
// desktop: open on home, hover an item, screenshot
let p=await b.newPage({viewport:{width:1440,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message.slice(0,110)));
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1600);
const pre=await p.evaluate(()=>({trigs:document.querySelectorAll('.mt-trig').length,c2:getComputedStyle(document.querySelector('.corners .c2')).display}));
await p.click('#mtTrig'); await p.waitForTimeout(900);
await p.hover('.mt-item[href="/about"]'); await p.waitForTimeout(600);
const state=await p.evaluate(()=>({open:document.body.classList.contains('mt-open'),prev:document.getElementById('mtPrev').src.split('/').slice(-2).join('/'),clock:document.getElementById('mtClock').textContent}));
console.log('pre:',JSON.stringify(pre),'| open state:',JSON.stringify(state),'| pageerrors:',errs.length?errs.join('|'):'none');
await p.screenshot({path:path.join(dir,'desktop-open.png')});
// esc closes
await p.keyboard.press('Escape'); await p.waitForTimeout(500);
console.log('esc closed:',await p.evaluate(()=>!document.body.classList.contains('mt-open')));
await p.close();
// mobile: open on a case page
p=await b.newPage({viewport:{width:390,height:844}});
await p.goto('http://localhost:4321/work/buck-the-quo',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1400);
await p.click('#mtTrig'); await p.waitForTimeout(900);
await p.screenshot({path:path.join(dir,'mobile-open.png')});
console.log('mobile open:',await p.evaluate(()=>document.body.classList.contains('mt-open')));
await p.close();
// hire page has trigger too?
p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/hire',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(900);
console.log('hire trigger:',await p.evaluate(()=>!!document.getElementById('mtTrig')));
await p.close();
await b.close();console.log('done');

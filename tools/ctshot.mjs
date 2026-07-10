import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','ct2'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
// contact full at 1440
let p=await b.newPage({viewport:{width:1440,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message.slice(0,120)));
await p.goto('http://localhost:4321/contact',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(2000);
await p.screenshot({path:path.join(dir,'contact-full.png'),fullPage:true});
// check band cycling: sample the .on image src per column now and after 5s
const s1=await p.evaluate(()=>[...document.querySelectorAll('.b3col')].map(c=>c.querySelector('img.on')?.getAttribute('src')));
await p.waitForTimeout(5600);
const s2=await p.evaluate(()=>[...document.querySelectorAll('.b3col')].map(c=>c.querySelector('img.on')?.getAttribute('src')));
console.log('errors:',errs.length?errs.join('|'):'none');
console.log('band t0:',JSON.stringify(s1));
console.log('band t+5.6s:',JSON.stringify(s2),' (changed = cycling works)');
await p.close();
// work hero at 1440: measure band height
p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/work',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
const h=await p.evaluate(()=>Math.round(document.querySelector('.hero').getBoundingClientRect().height));
console.log('work hero height @1440x900:',h,'px =',Math.round(h/9),'vh');
await p.screenshot({path:path.join(dir,'work-hero.png')});
await p.close();
await b.close();console.log('done');

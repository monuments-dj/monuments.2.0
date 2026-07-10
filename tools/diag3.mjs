import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','diag'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
// Flashpoint: statrow + rolerow together
let p=await b.newPage({viewport:{width:1440,height:1000}});
await p.goto('http://localhost:4321/work/flashpoint',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
let a=await p.$('.statrow'); await a.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
let box=await p.evaluate(()=>{const s=document.querySelector('.statrow').getBoundingClientRect();const r=document.querySelector('.rolerow').getBoundingClientRect();return{y:s.top+scrollY,h:r.bottom-s.top}});
await p.screenshot({path:path.join(dir,'fp-fixed.png'),clip:{x:0,y:box.y,width:1440,height:box.h}});
await p.close();
// Waffle markband
p=await b.newPage({viewport:{width:1440,height:1000}});
await p.goto('http://localhost:4321/work/waffle-me-up',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
let m=await p.$('.markband'); await m.scrollIntoViewIfNeeded(); await p.waitForTimeout(600);
await m.screenshot({path:path.join(dir,'wf-fixed.png')});
await p.close();
// Sony XM5 statrow (another page, confirm sitewide)
p=await b.newPage({viewport:{width:1440,height:1000}});
await p.goto('http://localhost:4321/work/sony-xm5',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
let s2=await p.$('.statrow'); if(s2){await s2.scrollIntoViewIfNeeded(); await p.waitForTimeout(500); await s2.screenshot({path:path.join(dir,'xm5-stat.png')});}
await p.close();
await b.close();console.log('shot');

import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','hire'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
// desktop full
let p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/hire',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1400);
await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,90));}window.scrollTo(0,0);});
await p.waitForTimeout(500);
await p.screenshot({path:path.join(dir,'full.png'),fullPage:true});
// overflow check
const of=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,vw:document.documentElement.clientWidth}));
console.log('desktop overflow', JSON.stringify(of));
await p.close();
// mobile
p=await b.newPage({viewport:{width:390,height:844}});
await p.goto('http://localhost:4321/hire',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1200);
const ofm=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,vw:document.documentElement.clientWidth}));
console.log('mobile overflow', JSON.stringify(ofm));
await p.screenshot({path:path.join(dir,'mobile.png')});
await p.close();
// print/PDF emulation
p=await b.newPage();
await p.goto('http://localhost:4321/hire',{waitUntil:'networkidle'}).catch(()=>{});
await p.waitForTimeout(800);
await p.emulateMedia({media:'print'});
await p.pdf({path:path.join(dir,'onepager.pdf'),format:'A4',printBackground:true});
await p.close();
await b.close(); console.log('done');

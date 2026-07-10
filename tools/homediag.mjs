import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','home'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
const errs=[];
p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,140))});
p.on('pageerror',e=>errs.push('PAGEERR: '+e.message.slice(0,140)));
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(2500);
// measure the reel-pin sticky behavior: scroll to it and check if it pins
const info=await p.evaluate(()=>{
  const pin=document.querySelector('.reel-pin');
  const wrap=pin?pin.closest('.reel-wrap, section'):null;
  const html=getComputedStyle(document.documentElement);
  const body=getComputedStyle(document.body);
  return {
    hasPin:!!pin,
    pinPos: pin?getComputedStyle(pin).position:null,
    htmlOverflowX:html.overflowX, htmlOverflowY:html.overflowY,
    bodyOverflowX:body.overflowX, bodyOverflowY:body.overflowY,
    lenis: document.documentElement.classList.contains('lenis'),
  };
});
console.log('ERRORS:', errs.length?errs.join(' | '):'none');
console.log('DIAG:', JSON.stringify(info,null,1));
await b.close();

import { chromium } from 'playwright';
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1280,height:860}});
await p.goto('http://localhost:4321/work/ac-boise',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1400);
const el=await p.$('#acbFilm'); await el.scrollIntoViewIfNeeded(); await el.click(); await p.waitForTimeout(1200);
const r=await p.evaluate(()=>{const f=document.querySelector('#acbFilm iframe');return {hasIframe:!!f, src:f?f.src:null};});
console.log('click-to-play:', JSON.stringify(r));
await p.close(); await b.close();

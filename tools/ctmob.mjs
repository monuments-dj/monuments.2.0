import { chromium } from 'playwright';
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:390,height:844}});
await p.goto('http://localhost:4321/contact',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1800);
await p.screenshot({path:'tools/snaps/ct2/contact-390.png',fullPage:true});
await b.close();console.log('done');

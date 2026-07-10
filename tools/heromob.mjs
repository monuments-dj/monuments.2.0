import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
await p.goto('http://localhost:4321/',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1600);
await p.screenshot({path:'tools/snaps/home/hero-390.png'});
await b.close();console.log('mob shot');

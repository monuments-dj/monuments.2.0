import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','fix'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
// About in-the-room (desktop)
let p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/about',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
const room=await p.$('.room'); if(room){await room.scrollIntoViewIfNeeded();await p.waitForTimeout(700);await room.screenshot({path:path.join(dir,'about-room.png')});}
await p.close();
// On Camera podcast (desktop)
p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/work/on-camera',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1500);
const pod=await p.$('.pod'); if(pod){await pod.scrollIntoViewIfNeeded();await p.waitForTimeout(700);await pod.screenshot({path:path.join(dir,'oncam-pod.png')});}
await p.close();
await b.close(); console.log('shot');

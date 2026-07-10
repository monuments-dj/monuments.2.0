import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const b=await chromium.launch();
for(const pg of ['capabilities','contact','ai']){
  for(const w of [1440,390]){
    const p=await b.newPage({viewport:{width:w,height:w===1440?820:780},deviceScaleFactor:1});
    await p.goto('http://localhost:4321/'+pg,{waitUntil:'domcontentloaded'}).catch(()=>{});
    await p.waitForTimeout(1600);
    const dir=path.join('tools','snaps','hero'); fs.mkdirSync(dir,{recursive:true});
    await p.screenshot({path:path.join(dir,`${pg}-${w}.png`)});
    await p.close();
  }
}
await b.close(); console.log('shot');

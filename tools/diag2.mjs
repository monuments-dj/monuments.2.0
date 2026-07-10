import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','diag'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
for(const [url,sel,name] of [['/work/flashpoint','.statrow','fp-bar'],['/work/waffle-me-up','.markband','wf-mark']]){
  const p=await b.newPage({viewport:{width:1440,height:1000}});
  await p.goto('http://localhost:4321'+url,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(1600);
  const el=await p.$(sel); await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(700);
  await el.screenshot({path:path.join(dir,name+'.png')});
  await p.close();
}
await b.close();console.log('shot');

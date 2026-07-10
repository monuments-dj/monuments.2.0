import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','turn'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
async function shot(url,name,{w=1440,sel=null,click=null,wait=1500}={}){
  const p=await b.newPage({viewport:{width:w,height:860}});
  await p.goto('http://localhost:4321'+url,{waitUntil:'domcontentloaded'}).catch(()=>{});
  await p.waitForTimeout(wait);
  if(click){const c=await p.$(click); if(c){await c.scrollIntoViewIfNeeded();await c.click();await p.waitForTimeout(2500);}}
  if(sel){const s=await p.$(sel); if(s){await s.scrollIntoViewIfNeeded();await p.waitForTimeout(500);await s.screenshot({path:path.join(dir,name+'.png')});await p.close();return;}}
  await p.screenshot({path:path.join(dir,name+'.png')});
  await p.close();
}
await shot('/work','work-header',{w:1440});
await shot('/work/ac-boise','acb-film',{sel:'.film'});
await shot('/work/ac-boise','acb-wall',{sel:'.swall'});
await shot('/contact','contact',{w:1440});
await b.close(); console.log('done');

import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const dir=path.join('tools','snaps','cwi'); fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:4321/work/cwi-lets-get-started',{waitUntil:'domcontentloaded'}).catch(()=>{});
await p.waitForTimeout(1600);
// hero+statrow
await p.screenshot({path:path.join(dir,'top.png')});
// film section
const film=await p.$('.film'); if(film){await film.scrollIntoViewIfNeeded();await p.waitForTimeout(600);await film.screenshot({path:path.join(dir,'film.png')});}
// results section (find the 'against the trend' story)
await p.evaluate(()=>{const h=[...document.querySelectorAll('h2')].find(e=>/Against the/.test(e.textContent));if(h)h.scrollIntoView({block:'start'});});
await p.waitForTimeout(700); await p.screenshot({path:path.join(dir,'results.png')});
await p.close(); await b.close(); console.log('done');

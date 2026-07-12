#!/usr/bin/env node
// Smart media tagger (seed version, macOS-only, zero deps).
// Scans image folders, pulls Spotlight metadata (shoot date + camera - the web
// copies kept those but not GPS), merges into content/media-tags.json WITHOUT
// touching existing hand/vision tags, clusters frames by shoot day so whole
// shoots can be tagged in one move, and lists anything still untagged.
// Usage: node tools/tag-media.mjs [dir ...]   (default: public/gallery/full)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const TAGS = 'content/media-tags.json';
const dirs = process.argv.slice(2).length ? process.argv.slice(2) : ['public/gallery/full'];
const db = fs.existsSync(TAGS) ? JSON.parse(fs.readFileSync(TAGS, 'utf8')) : {};
db.meta ??= {};

function mdls(file, attr) {
  try {
    const out = execFileSync('mdls', ['-name', attr, '-raw', file], { encoding: 'utf8' }).trim();
    return out === '(null)' ? null : out;
  } catch { return null; }
}

const byDay = {};
let scanned = 0;
for (const dir of dirs) {
  for (const f of fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp)$/i.test(f)).sort()) {
    const p = path.join(dir, f);
    const key = f.replace(/\.\w+$/, '');
    const shot = mdls(p, 'kMDItemContentCreationDate');
    const cam = [mdls(p, 'kMDItemAcquisitionMake'), mdls(p, 'kMDItemAcquisitionModel')].filter(Boolean).join(' ');
    db.meta[key] = { file: p, shot: shot || undefined, camera: cam || undefined };
    if (shot) (byDay[shot.slice(0, 10)] ??= []).push(key);
    scanned++;
  }
}
fs.writeFileSync(TAGS, JSON.stringify(db, null, 1));

console.log(`scanned ${scanned} files from ${dirs.join(', ')} → ${TAGS}\n`);
console.log('── shoots by day (tag a whole day in one move) ──');
for (const [day, keys] of Object.entries(byDay).sort()) {
  console.log(`${day} · ${keys.length} frames · ${keys[0]}…${keys[keys.length - 1]}`);
}
const tagged = new Set(Object.keys(db.gallery ?? {}).concat(Object.keys(db.giving ?? {})));
const untagged = Object.keys(db.meta).filter(k => !tagged.has(k));
console.log(`\n── untagged (need eyes): ${untagged.length} ──`);
if (untagged.length) console.log(untagged.join(', '));

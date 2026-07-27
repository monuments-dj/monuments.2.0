// imgdims.mjs - build-time intrinsic pixel size for /public images (png + jpeg).
// Used by components (MasonryGallery, HeroHeader) so rendered <img>/<video> cells
// always carry width/height: the packer-collapse + unsized-images insurance.
// Returns {w,h} or null (missing file / other format) - callers render no attrs on null.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const cache = new Map();

export function imgDims(publicPath) {
  if (cache.has(publicPath)) return cache.get(publicPath);
  let out = null;
  try {
    // cwd = project root under astro dev AND astro build (import.meta.url is NOT
    // stable here - the bundler relocates this module, so anchor on cwd instead)
    const b = readFileSync(join(process.cwd(), 'public', publicPath));
    if (b[0] === 0x89 && b[1] === 0x50) {
      out = { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
    } else if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i < b.length - 9) {
        if (b[i] !== 0xff) { i++; continue; }
        const m = b[i + 1];
        if (m === 0xd8 || m === 0x01 || (m >= 0xd0 && m <= 0xd7)) { i += 2; continue; }
        if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
          out = { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
          break;
        }
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
  } catch { /* not on disk or unreadable: fall through to null */ }
  cache.set(publicPath, out);
  return out;
}

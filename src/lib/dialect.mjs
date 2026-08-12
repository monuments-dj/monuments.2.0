// ============================================================================
// dialect.mjs · the deterministic monuments -> djthecd voice transform.
// ----------------------------------------------------------------------------
// Runs at BUILD TIME over the emitted HTML of the SITE=dj build only. The .astro
// source never changes, so the 19 case studies stay ONE source of truth
// (DJTHECD-HOLDINGS.md: "DJ directed" -> "I directed" is a deterministic
// build-time transform; that is why the voice sweep chose DJ over We for
// personal claims - We would have destroyed the attribution forever).
//
// THREE SAFETY LAYERS, because a false positive here is a lie on a portfolio:
//  1. PROTECTED REGIONS. Credits, call sheets, quotes, testimonials, letters and
//     <script>/<style> are never touched. Client words stay client words and a
//     factual "DJ Ramirez · Director" credit stays a credit.
//  2. VERB ALLOWLIST. "DJ" only becomes "I" when the very next word is a known
//     verb. "DJ Ramirez" can never become "I Ramirez" because Ramirez is not a
//     verb. Anything unrecognised is LEFT ALONE and reported as unhandled.
//  3. EXPLICIT PER-PAGE REPLACEMENTS for anything needing judgment (every We
//     sentence). Exact string in, exact string out, logged for DJ's review.
//
// Every single change is returned in the report. Nothing is silent.
// ============================================================================

// ---------------------------------------------------------------------------
// 1 · protected regions
// ---------------------------------------------------------------------------
const RAW_TAGS = new Set(['script', 'style', 'noscript', 'svg']);
// tags whose text is somebody else's words, or a factual credit
const PROTECTED_TAGS = new Set(['blockquote', 'q']);
// class tokens that mark a credit / quote / testimonial block
const PROTECTED_CLASS = /(^|[\s"'])(cc|cc-list|cc-\S+|callsheet|shead|srow|qb|qb-\S+|tst|tst-\S+|quote|quotes|pull|pullquote|testimonial|testimonials|letter|letters|credit|credits|cs-credits|bt-item|bt-logo)([\s"']|$)/;
const VOID_TAGS = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);

// ---------------------------------------------------------------------------
// 2 · the verb allowlist. "DJ <verb>" -> "I <verb>" (3rd person loses the s).
// ---------------------------------------------------------------------------
const VERBS = {
  // present, third person -> first person
  directs: 'direct', cuts: 'cut', runs: 'run', leads: 'lead', shoots: 'shoot',
  hosts: 'host', designs: 'design', builds: 'build', writes: 'write',
  pushes: 'push', brings: 'bring', works: 'work', wants: 'want', makes: 'make',
  keeps: 'keep', takes: 'take', gives: 'give', gets: 'get', goes: 'go',
  knows: 'know', shows: 'show', tells: 'tell', calls: 'call', sells: 'sell',
  holds: 'hold', sets: 'set', starts: 'start', ends: 'end', carries: 'carry',
  handles: 'handle', edits: 'edit', produces: 'produce', joins: 'join',
  lands: 'land', wins: 'win', has: 'have', is: 'am', does: 'do', was: 'was',
  hosted: 'hosted',
  // past / participle forms are identical for I
  directed: 'directed', shot: 'shot', led: 'led', designed: 'designed',
  wrote: 'wrote', built: 'built', started: 'started', pushed: 'pushed',
  shaped: 'shaped', rebuilt: 'rebuilt', ended: 'ended', carried: 'carried',
  collaborated: 'collaborated', ran: 'ran', made: 'made', took: 'took',
  gave: 'gave', got: 'got', went: 'went', came: 'came', knew: 'knew',
  showed: 'showed', told: 'told', called: 'called', sold: 'sold',
  held: 'held', handled: 'handled', edited: 'edited', produced: 'produced',
  launched: 'launched', delivered: 'delivered', joined: 'joined',
  landed: 'landed', won: 'won', had: 'had', did: 'did', kept: 'kept',
  cast: 'cast', pitched: 'pitched', consulted: 'consulted', mentored: 'mentored',
  learned: 'learned', spent: 'spent', turned: 'turned', put: 'put',
};
// words allowed to sit between "DJ" and the verb ("DJ creative directed …")
const MODIFIERS = new Set([
  'creative', 'also', 'still', 'then', 'later', 'personally', 'eventually',
  'always', 'never', 'only', 'even', 'first', 'finally', 'actually',
]);

// ---------------------------------------------------------------------------
// 3 · text-level rules applied in order, inside unprotected text only.
// ---------------------------------------------------------------------------
const RULES = [
  // possessive: "DJ's team at Art of Visuals" -> "my team at Art of Visuals"
  { re: /\bDJ['’]s\b/g, to: 'my', id: 'poss' },
  // contractions: "DJ's been" handled above -> "my been" would be wrong, so
  // those are caught by the explicit map before this rule ever sees them.
  // "DJ" + optional modifier + allowlisted verb
  {
    re: /\bDJ\s+([a-z]+)(\s+([a-z]+))?/g,
    id: 'verb',
    fn: (m, w1, _sp, w2) => {
      if (VERBS[w1]) return `I ${VERBS[w1]}`;
      if (MODIFIERS.has(w1) && w2 && VERBS[w2]) return `I ${w1} ${VERBS[w2]}`;
      return null; // unhandled: leave untouched, report it
    },
  },
];

// markers the audit hunts for in the dj build
export const WE_MARKER = /\b(we|We|WE|our|Our|OUR|us|Us|ours|We're|we're|We've|we've|We'll|we'll)\b/;

// ---------------------------------------------------------------------------
// the walker: yields every text node outside protected regions
// ---------------------------------------------------------------------------
function walkText(html, fn) {
  const tagRe = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>|<!--[\s\S]*?-->/g;
  let out = '';
  let last = 0;
  let protDepth = 0;
  let rawTag = null;
  const stack = [];
  let m;
  while ((m = tagRe.exec(html)) !== null) {
    const text = html.slice(last, m.index);
    if (text) out += (protDepth === 0 && !rawTag && text.trim()) ? fn(text) : text;
    out += m[0];
    last = tagRe.lastIndex;
    if (m[0].startsWith('<!--')) continue;
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    const attrs = m[3] || '';
    const selfClose = m[4] === '/' || VOID_TAGS.has(tag);
    if (rawTag) { if (closing && tag === rawTag) rawTag = null; continue; }
    if (closing) {
      // unwind to the matching open tag
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag) {
          if (stack[i].prot) protDepth--;
          stack.splice(i, 1);
          break;
        }
      }
      continue;
    }
    if (selfClose) continue;
    if (RAW_TAGS.has(tag)) { rawTag = tag; continue; }
    const classM = attrs.match(/\bclass\s*=\s*("[^"]*"|'[^']*')/);
    const prot = PROTECTED_TAGS.has(tag)
      || /\bdata-nodialect\b/.test(attrs)
      || (classM ? PROTECTED_CLASS.test(classM[1]) : false);
    if (prot) protDepth++;
    stack.push({ tag, prot });
  }
  const tail = html.slice(last);
  if (tail) out += (protDepth === 0 && !rawTag && tail.trim()) ? fn(tail) : tail;
  return out;
}

/**
 * Apply the solo-voice transform to one page of HTML.
 * @param {string} html
 * @param {object} opts
 * @param {Array<[string,string]>} opts.replacements exact-string swaps (per page + global)
 * @param {string} opts.page route, for the report
 * @returns {{html:string, changes:Array, unhandled:Array}}
 */
export function toSoloVoice(html, { replacements = [], page = '' } = {}) {
  const changes = [];
  const unhandled = [];
  let out = html;

  // A · explicit replacements first (they carry the judgment calls)
  for (const [from, to] of replacements) {
    if (!from) continue;
    let hits = 0;
    let idx = out.indexOf(from);
    while (idx !== -1) { hits++; idx = out.indexOf(from, idx + from.length); }
    if (hits) {
      out = out.split(from).join(to);
      changes.push({ page, rule: 'explicit', hits, from, to });
    }
  }

  // B · mechanical rules over unprotected text nodes
  out = walkText(out, (text) => {
    let t = text;
    for (const rule of RULES) {
      t = t.replace(rule.re, (...args) => {
        const full = args[0];
        if (rule.fn) {
          const res = rule.fn(...args);
          if (res === null) {
            // only report an unhandled DJ when it is not a plain name mention
            if (!/^DJ\s+(Ramirez|the|and|·)/.test(full)) unhandled.push({ page, text: full.trim() });
            return full;
          }
          // keep whatever trailed the matched verb(s)
          const consumed = res.split(' ').length;
          const parts = full.trim().split(/\s+/);
          const rest = parts.slice(consumed).join(' ');
          const changed = rest ? `${res} ${rest}` : res;
          changes.push({ page, rule: rule.id, from: full.trim(), to: changed.trim() });
          return changed;
        }
        changes.push({ page, rule: rule.id, from: full, to: rule.to });
        return rule.to;
      });
    }
    return t;
  });

  return { html: out, changes, unhandled };
}

/** Find We-markers left in unprotected prose (the leak hunt). */
export function findWeLeaks(html, { page = '' } = {}) {
  const leaks = [];
  walkText(html, (text) => {
    const re = new RegExp(WE_MARKER.source, 'g');
    let m;
    while ((m = re.exec(text)) !== null) {
      const start = Math.max(0, m.index - 45);
      leaks.push({ page, word: m[0], context: text.slice(start, m.index + 55).replace(/\s+/g, ' ').trim() });
    }
    return text;
  });
  return leaks;
}

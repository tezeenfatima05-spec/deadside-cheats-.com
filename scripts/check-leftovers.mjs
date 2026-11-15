import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SCAN_DIRS = ['src', 'public', 'dist', 'scripts'].map((d) => path.join(ROOT, d));

const BANNED = [
  /\bHANIA\b/i,
  /oncecheats\.com/i,
  /deadlock-cheat\.com/i,
  /overwatch2-cheats\.com/i,
  /dotacheats\.com/i,
  /\bdota\s*2\b/i,
  /npc_dota_/i,
  /valve anti-cheat/i,
  /Skin Changer/i,
  /unlock-all/i,
  /products\/dota-2-cheats/i,
  /\/blog\/dota-/i,
  /Undetected provider/i,
  /#1 Undetected/i,
];

const AUTHORIZED = [
  'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fdeadside',
  'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fhwid-spoofer',
  'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fugc',
  'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fcloud-dma',
];

const ALLOW_FILES = new Set([
  path.normalize(path.join(ROOT, 'scripts', 'check-leftovers.mjs')),
  path.normalize(path.join(ROOT, 'scripts', 'redirects.mjs')),
  path.normalize(path.join(ROOT, 'docs', 'keyword-map.md')),
]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function isTextFile(file) {
  return /\.(astro|ts|tsx|js|mjs|json|md|html|xml|txt|css|svg)$/i.test(file);
}

const findings = [];

for (const dir of SCAN_DIRS) {
  for (const file of walk(dir)) {
    if (!isTextFile(file) || ALLOW_FILES.has(path.normalize(file))) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const pattern of BANNED) {
      if (pattern.test(text)) {
        findings.push({ file: path.relative(ROOT, file), pattern: String(pattern) });
      }
    }
    if (file.includes(`${path.sep}dist${path.sep}`) || file.includes(`${path.sep}src${path.sep}config${path.sep}checkout`)) {
      const urls = [...text.matchAll(/https:\/\/zadeyo\.com\/[^\s"'<>]+/g)].map((m) => m[0]);
      for (const url of urls) {
        if (!AUTHORIZED.includes(url) && !url.includes('/go/TAZEEN')) {
          findings.push({ file: path.relative(ROOT, file), pattern: `unauthorized merchant URL: ${url}` });
        }
      }
    }
  }
}

if (findings.length) {
  console.error('check-leftovers: FAIL');
  for (const f of findings) {
    console.error(`  ${f.file}: ${f.pattern}`);
  }
  process.exit(1);
}

console.log('check-leftovers: OK');
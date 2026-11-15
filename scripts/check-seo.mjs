import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const htmlFiles = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}

walk(dist);

if (!htmlFiles.length) {
  console.error('check-seo: no dist HTML — run build first');
  process.exit(1);
}

const titles = new Map();
const errors = [];

const skipPaths = [/^blog\/index\.html$/, /^cheats\//, /^contact\/index\.html$/];

for (const file of htmlFiles) {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (rel.includes('404')) continue;
  if (skipPaths.some((re) => re.test(rel))) continue;

  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  if (title.includes('Redirecting to:')) continue;
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '';
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)?.[1] ?? '';
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1] ?? '';
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, '').trim());

  if (!title) errors.push(`${rel}: missing title`);
  if (!desc) errors.push(`${rel}: missing description`);
  if (robots.includes('noindex') && !rel.includes('404')) errors.push(`${rel}: unexpected noindex`);
  if (!canonical.startsWith('https://deadside-cheats.com/')) errors.push(`${rel}: bad canonical ${canonical}`);
  const relaxedH1 =
    rel.startsWith('blogs/') ||
    rel.startsWith('products/') ||
    rel === 'index.html' ||
    rel === 'faq/index.html';
  if (!relaxedH1 && h1s.length !== 1) errors.push(`${rel}: expected 1 h1, got ${h1s.length}`);
  if (relaxedH1 && h1s.length < 1) errors.push(`${rel}: missing h1`);

  const key = title.trim();
  titles.set(key, [...(titles.get(key) ?? []), rel]);
}

for (const [title, paths] of titles) {
  if (paths.length > 1) errors.push(`duplicate title "${title}" in ${paths.join(', ')}`);
}

if (errors.length) {
  console.error('check-seo: FAIL');
  errors.forEach((e) => console.error(' ', e));
  process.exit(1);
}

console.log(`check-seo: OK (${htmlFiles.length} html files)`);
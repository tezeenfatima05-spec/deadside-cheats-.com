import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distCandidates = [path.join(root, 'dist'), path.join(root, 'dist', 'client')];

function findSitemapSource() {
  for (const dir of distCandidates) {
    const candidate = path.join(dir, 'sitemap-0.xml');
    if (fs.existsSync(candidate)) return { dir, source: candidate };
  }
  return null;
}

const found = findSitemapSource();

if (!found) {
  console.error('finalize-sitemap: sitemap-0.xml not found under dist/ or dist/client/ — run astro build first.');
  process.exit(1);
}

const { dir: dist, source } = found;
const raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

const formatted = formatUrlset(raw);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://deadside-cheats.com/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), formatted, 'utf8');

// Keep top-level dist/sitemap.xml when Astro wrote under dist/client (Cloudflare adapter).
const topDist = path.join(root, 'dist');
if (dist !== topDist) {
  for (const name of ['sitemap.xml', 'sitemap-index.xml', 'sitemap-0.xml']) {
    fs.copyFileSync(path.join(dist, name), path.join(topDist, name));
  }
}

console.log(`Sitemap finalized: ${urlCount} URLs → ${path.relative(root, path.join(dist, 'sitemap.xml'))}`);

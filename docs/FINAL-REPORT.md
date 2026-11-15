# Deadside Cheats — implementation report (2026-11-15)

## A. Template usage

| Area | Status |
|------|--------|
| NOT-OPTIMISED Astro/Starwind base | Kept layout, Header, product components, forum/blog patterns |
| Extended | TAZEEN checkout config, `/blogs/`, reviews empty state, blog search (`?q=`), validators |
| Added | `scripts/check-leftovers.mjs`, `scripts/check-seo.mjs`, `docs/keyword-map.md`, Cloud DMA product page data |

## B. Repository cleanup

- Merged template; rebranded `dotacheats.com` → `deadside-cheats.com`.
- Single main product `deadside` + utilities (HWID, UGC, Cloud DMA).
- Legacy 301s in `scripts/redirects.mjs` (dota paths → deadside paths).
- `npm run validate`: **check-leftovers OK**, **check-seo OK** (59 HTML files).
- **Note:** Unused Dota blog/gameplay PNGs remain under `public/images/` for optimize script; not referenced in `src/` or `dist/` HTML after build.

## C. Website functionality

- **Checkout:** Internal `/go/deadside/`, `/go/hwid-spoofer/`, `/go/ugc/`, `/go/cloud-dma/` → exact TAZEEN zadeyo URLs (verified in config).
- **Product UI:** Pricing removed; PRODUCT FEATURES card + Proceed to Checkout.
- **Blogs:** 15 articles at `/blogs/{slug}/`, filters + sort + search.
- **Forum:** 21 illustrative threads at `/forum/{slug}/`.
- **Reviews:** Empty state at `/reviews/`.

## D. SEO

- Canonical origin: `https://deadside-cheats.com`
- `dist/sitemap.xml`: 51 URLs
- `public/robots.txt` lists production sitemap
- Preview: `scripts/serve.mjs` sets `X-Robots-Tag: noindex, nofollow` on preview host patterns (not on `deadside-cheats.com`)

## E. Hosting

- **Pattern:** Nixpacks + `npm run start` → `scripts/serve.mjs`
- **Live production:** UNVERIFIED (prior check returned HTTP 500; deploy required)

## F. QA (local)

| Check | Result |
|-------|--------|
| QA1 Build | PASS (`npm run build`) |
| QA2 Responsive | UNVERIFIED (not browser-tested this session) |
| QA3 Sitemap/robots | PASS |
| QA4 Metadata | PASS (`check-seo.mjs`) |
| QA5 Affiliate | PASS (config + `/go/deadside/` resolver) |
| QA6 Images | PASS (deadside gameplay assets in use) |
| QA7 Content/leftovers | PASS (`check-leftovers.mjs`) |
| QA8 Template UI | PASS (same Starwind/dark theme) |

## G. Commands

```bash
npm ci
npm run build
npm run validate
npm run start
```

## H. Blockers

- Push/deploy to hosting attached to `deadside-cheats.com` to clear production 500.
- Search Console / IndexNow optional (`INDEXNOW_KEY` unset).
- Genuine customer reviews not present (reviews page intentionally empty).
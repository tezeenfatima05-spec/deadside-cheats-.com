/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blogs', '/blogs/'],
  ['/blog', '/blogs/'],
  ['/blog/', '/blogs/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/reviews', '/reviews/'],
  ['/cheats', '/products/deadside-cheats/'],
  ['/cheats/', '/products/deadside-cheats/'],
  ['/cheats/lite', '/products/deadside-cheats/'],
  ['/cheats/lite/', '/products/deadside-cheats/'],
  ['/cheats/pro', '/products/deadside-cheats/'],
  ['/cheats/pro/', '/products/deadside-cheats/'],
  ['/cheats/elite', '/products/deadside-cheats/deadside/'],
  ['/cheats/elite/', '/products/deadside-cheats/deadside/'],
  ['/cheats/compare', '/blogs/deadside-cheats-comparison/'],
  ['/cheats/compare/', '/blogs/deadside-cheats-comparison/'],
  ['/products/deadside-cheats', '/products/deadside-cheats/'],
  ['/products/deadside-cheats/', '/products/deadside-cheats/'],
  ['/products/deadside-cheats/utilities', '/products/deadside-cheats/utilities/'],
  ['/products/deadside-cheats/utilities/', '/products/deadside-cheats/utilities/'],
  ['/products/deadside-cheats/elite', '/products/deadside-cheats/deadside/'],
  ['/products/deadside-cheats/elite/', '/products/deadside-cheats/deadside/'],
  ['/products/deadside-cheats/lite', '/products/deadside-cheats/deadside/'],
  ['/products/deadside-cheats/lite/', '/products/deadside-cheats/deadside/'],
  ['/products/deadside-cheats/pro', '/products/deadside-cheats/deadside/'],
  ['/products/deadside-cheats/pro/', '/products/deadside-cheats/deadside/'],
  ['/products/deadside-cheats/cloud-dma', '/products/deadside-cheats/'],
  ['/products/deadside-cheats/cloud-dma/', '/products/deadside-cheats/'],
  ['/products/deadside-cheats/hwid-spoofer', '/products/deadside-cheats/hwid-spoofer/'],
  ['/products/deadside-cheats/hwid-spoofer/', '/products/deadside-cheats/hwid-spoofer/'],
  ['/products/deadside-cheats/ugc', '/products/deadside-cheats/ugc/'],
  ['/products/deadside-cheats/ugc/', '/products/deadside-cheats/ugc/'],
  ['/products/deadside-cheats/account-recovery', '/products/deadside-cheats/ugc/'],
  ['/products/deadside-cheats/account-recovery/', '/products/deadside-cheats/ugc/'],
  ['/products/deadside-cheats/utilities', '/products/deadside-cheats/utilities/'],
  ['/products/deadside-cheats', '/products/deadside-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname.startsWith('/blog/') && pathname !== '/blog/') {
    return pathname.replace(/^\/blog\//, '/blogs/');
  }

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
/** Authorized merchant checkout URLs (referral ID TAZEEN). */
export const CHECKOUT_URLS = {
  deadside: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fdeadside',
  hwidSpoofer: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fugc',
  cloudDma: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fcloud-dma',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/deadside', CHECKOUT_URLS.deadside],
  ['/go/deadside/', CHECKOUT_URLS.deadside],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
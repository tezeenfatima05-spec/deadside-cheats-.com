/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Deadside Cheats for PC | ESP & Aimbot Features',
    description:
      'Explore Deadside cheats for PC, compare available features, check compatibility details, and learn the risks and options before you buy.',
  },
  '/products/deadside-cheats/': {
    title: 'Deadside Cheats & Utilities for PC',
    description:
      'Deadside software for PC plus HWID Spoofer, UGC Tool, and Cloud DMA utilities—feature summaries and checkout links.',
  },
  '/products/deadside-cheats/deadside/': {
    title: 'Deadside Cheats for PC | ESP & Aimbot',
    description:
      'Player ESP, item ESP, and aimbot-style options for Deadside on Windows—compatibility notes and honest EAC risk context.',
  },
  '/products/deadside-cheats/utilities/': {
    title: 'Deadside Utilities | HWID, UGC & Cloud DMA',
    description:
      'Compare HWID Spoofer, UGC Tool, and Cloud DMA utilities—when each applies and how they relate to the main Deadside product.',
  },
  '/blogs/': {
    title: 'Deadside Cheats Guides & PC Tips',
    description:
      'Buying guides, ESP and aimbot explainers, EAC risk notes, FPS tuning, and update compatibility for Deadside on PC.',
  },
  '/forum/': {
    title: 'Deadside Forum | Illustrative Q&A',
    description:
      'Read-only example threads about Deadside ESP, aimbot settings, EAC, Cloud DMA, and installation— not live user posts.',
  },
  '/reviews/': {
    title: 'Deadside Cheats Reviews',
    description:
      'Customer reviews for Deadside Cheats products when published. Filter and search when genuine review data is available.',
  },
  '/faq/': {
    title: 'FAQ | Deadside Cheats & Setup',
    description:
      'Answers on Deadside features, Cloud DMA, checkout, compatibility, and blog guides at deadside-cheats.com.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Deadside Cheats',
    description:
      'Purchase terms, license use, and refund policy for products linked from deadside-cheats.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Deadside Cheats',
    description:
      'How deadside-cheats.com uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Deadside Cheats',
    description:
      'What deadside-cheats.com publishes: Deadside product info, utilities, guides, and compatibility notes.',
  },
  '/support/': {
    title: 'Support | Deadside Cheats',
    description:
      'Get help with checkout, Cloud DMA requirements, and loader questions for Deadside PC software.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
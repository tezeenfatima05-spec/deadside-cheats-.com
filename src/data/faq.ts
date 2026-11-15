import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const main = link('Deadside software', productPath('deadside'));
const productsHub = link('Deadside products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('UGC Tool', productPath('ugc'));
const cloud = link('Cloud DMA', productPath('cloud-dma'));
const blog = link('blog guides', ROUTES.blog);
const support = link('Discord support', ROUTES.support);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check compatibility after a Deadside update?',
    a: a(
      'Review merchant status notes and our update guides after major patches. Feature availability can change with Easy Anti-Cheat updates.',
    ),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a(
      'Checkout opens the merchant portal for loader access and setup docs. Follow those steps before launching Deadside.',
    ),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party Deadside software?',
    a: a(
      'Yes. Deadside uses Easy Anti-Cheat. We never claim undetectable or ban-proof use. Read the safety guide and accept the risk.',
    ),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Windows 10/11 64-bit with Deadside on Steam. No console support.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists ${main}, ${hwid}, ${ugc}, and ${cloud} with feature summaries and checkout.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What ESP options are included?',
    a: `Player ESP (box, skeleton, name, corpse, view line) and item ESP as listed on ${main}.`,
    scopes: ['deadside'],
  },
  {
    id: 'aimbot',
    topic: 'scripts',
    icon: 'faqEspVsScripts',
    q: 'What aimbot-style options exist?',
    a: a(
      'Aim key, hold/always modes, bone selection, NPC aim, visible check, FOV size/draw, smoothing, and distance limits.',
    ),
    scopes: ['deadside'],
  },
  {
    id: 'cloud-dma',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Is Cloud DMA required?',
    a: `The merchant states Cloud DMA is required for full functionality on supported builds. See ${cloud}.`,
  },
  {
    id: 'hwid',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What is the HWID Spoofer for?',
    a: `${hwid} is a separate utility for hardware-identifier workflows. It does not guarantee unbans.`,
  },
  {
    id: 'ugc',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Does the UGC Tool guarantee account recovery?',
    a: `No. ${ugc} is merchant account tooling—outcomes are not guaranteed.`,
  },
  {
    id: 'checkout',
    topic: 'plans',
    icon: 'faqAfterBuy',
    q: 'How does checkout work on this site?',
    a: a(
      'Product pages use Proceed to Checkout, which redirects through the authorized TAZEEN affiliate link to the merchant.',
    ),
  },
  {
    id: 'support',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Where do I get support?',
    a: `Join Discord from ${support} for loader and setup help.`,
  },
  {
    id: 'blog-guides',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Where are buying and safety guides?',
    a: `Browse ${blog} for ESP, aimbot, pricing, safety, FPS, and installation articles.`,
  },
  {
    id: 'pc-only',
    topic: 'safety',
    icon: 'faqPlatforms',
    q: 'Do you support consoles?',
    a: a('No. Everything linked here is for PC only.'),
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['ban-risk', 'platforms', 'what-is-esp', 'aimbot', 'cloud-dma', 'checkout', 'support'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs;
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Deadside questions, answered',
  subtitle: 'Products, ESP, aim options, Cloud DMA, EAC risk, and checkout.',
};

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Common questions',
  subtitle: 'Short answers related to this page.',
};

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  return SITE_FAQ_FILTER_TOPICS.filter((topic) => topic === 'all' || present.has(topic));
}

export function getProductFaqs(slug: string, _kind?: 'tier' | 'utility'): SiteFaqItem[] {
  const base = siteFaqs.filter((f) =>
    ['ban-risk', 'platforms', 'checkout', 'support', 'cloud-dma'].includes(f.id),
  );
  if (slug === 'deadside') {
    return [
      ...siteFaqs.filter((f) => f.scopes?.includes('deadside') || f.id === 'what-is-esp' || f.id === 'aimbot'),
      ...base,
    ];
  }
  if (slug === 'hwid-spoofer') return [...siteFaqs.filter((f) => f.id === 'hwid'), ...base];
  if (slug === 'ugc') return [...siteFaqs.filter((f) => f.id === 'ugc'), ...base];
  if (slug === 'cloud-dma') return [...siteFaqs.filter((f) => f.id === 'cloud-dma'), ...base];
  return base;
}

export function getBlogFaqs(_tag?: string, _slug?: string): SiteFaqItem[] {
  return siteFaqs.filter((f) => ['blog-guides', 'ban-risk', 'checkout', 'support'].includes(f.id));
}

export const compareRows = [
  { feature: 'Player ESP', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Item ESP', icon: 'package' as const, lite: true, pro: true, elite: true },
  { feature: 'Aimbot options', icon: 'crosshair' as const, lite: true, pro: true, elite: true },
  { feature: 'Config profiles', icon: 'settings' as const, lite: true, pro: true, elite: true },
  { feature: 'Cloud DMA (separate)', icon: 'cpu' as const, lite: false, pro: false, elite: true },
];

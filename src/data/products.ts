import { checkoutForSlug, checkoutPath, PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

const productBase = PRODUCT_BASE;
const gameplay = '/images/gameplay';

const sharedGoodToKnow =
  'Deadside and Easy Anti-Cheat receive updates. Review compatibility notes after major patches before launch. Feature availability can shift with game or Windows changes.';

const sharedLimitations =
  'Third-party software in online games can violate terms of service and trigger Easy Anti-Cheat or account action. You accept that risk. We do not promise ban-proof use or guaranteed outcomes.';

const deadsideRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit).' },
  { icon: 'reqSettings', text: 'HVCI, Core Isolation, TPM, and Secure Boot enabled where required by the merchant stack.' },
  { icon: 'reqWifi', text: 'Stable internet for loader access and activation.' },
  { icon: 'reqCpu', text: 'Hardware that meets Deadside’s published system requirements on Steam.' },
];

const gallery: ProductSlide[] = [
  {
    src: `${gameplay}/deadside-feature-preview.png`,
    alt: 'Deadside player ESP overlay example with name and distance labels',
    caption: 'Player ESP',
    captionDesc: 'Boxes, skeletons, names, and corpse markers for PvP and PvE awareness.',
  },
  {
    src: `${gameplay}/deadside-loot-esp.png`,
    alt: 'Deadside loot and resource ESP layout example',
    caption: 'Loot and item ESP',
    captionDesc: 'Filters for weapons, consumables, resources, tools, and stashes.',
  },
  {
    src: `${gameplay}/deadside-aimbot-ui.png`,
    alt: 'Deadside aimbot FOV and smoothing settings example',
    caption: 'Aimbot options',
    captionDesc: 'Configurable FOV, smoothing, bone selection, and visibility checks.',
  },
];

const defaultSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review requirements',
    desc: 'Confirm Windows version, security features, and Cloud DMA needs on the product page before checkout.',
  },
  {
    num: '02',
    title: 'Proceed to checkout',
    desc: 'Use Proceed to Checkout on deadside-cheats.com to reach the authorized merchant with referral TAZEEN.',
  },
  {
    num: '03',
    title: 'Activate license',
    desc: 'Follow the merchant loader guide and save your config profile for each server you play.',
  },
  {
    num: '04',
    title: 'Test in a low-stakes session',
    desc: 'Validate ESP and aim settings in a controlled session before relying on them in PvP.',
  },
];

function acquisitionFor(name: string): ProductAcquisition {
  return { title: `How to get ${name}`, steps: defaultSteps };
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  deadside: [
    'best-deadside-cheats',
    'deadside-esp-guide',
    'deadside-aimbot-guide',
    'deadside-cheats-safety',
    'deadside-installation',
    'deadside-updates-compatibility',
  ],
  'hwid-spoofer': ['deadside-hwid-spoofer-guide', 'deadside-cheats-safety', 'deadside-installation'],
  ugc: ['deadside-ugc-tool-guide', 'deadside-cheats-safety'],
  'cloud-dma': ['deadside-cloud-dma-guide', 'deadside-pc-requirements', 'deadside-installation'],
};

const deadsideFullFeatures = [
  'Player ESP: box, skeleton, name, corpse, view line',
  'Item ESP: clothing, weapons, consumables, resources, tools, devices, money',
  'Aimbot: aim key, hold/always modes, bone targets, NPC aim, visible check',
  'FOV display and size, smoothing, and distance limits',
  'Battle mode, crosshair overlay, config save/load/import/export',
];

const mainProduct: ProductPage = {
  slug: 'deadside',
  kind: 'tier',
  badge: 'PC',
  tier: 'Main',
  name: 'Deadside',
  title: 'Deadside Cheats for PC',
  subtitle: 'ESP, aimbot, and loot filters for open-world PvPvE.',
  desc: 'Software for Deadside on PC with player ESP, item ESP, and configurable aim assistance. Windows only.',
  features: ['Player ESP', 'Item ESP', 'Aimbot tuning', 'Config profiles', 'Battle mode'],
  more: 8,
  variant: 'popular',
  buyUrl: checkoutForSlug('deadside'),
  images: gallery,
  overview: {
    title: 'Deadside on PC',
    paragraphs: [
      'Deadside is an open-world PvPvE survival shooter by Bad Pixel, published by tinyBuild. The merchant listing for this product includes player ESP, item ESP, and aimbot-style options suited to raids, looting, and PvP.',
      'The merchant notes Cloud DMA is required for full functionality on supported builds. Review the [Cloud DMA utility](/products/deadside-cheats/cloud-dma/) page if you are new to that stack.',
    ],
  },
  acquisition: acquisitionFor('Deadside Cheats'),
  goodToKnow: sharedGoodToKnow,
  limitations: sharedLimitations,
  fullFeatures: deadsideFullFeatures,
  systemRequirements: deadsideRequirements,
  about: [
    {
      type: 'p',
      text: 'Deadside uses Easy Anti-Cheat on official servers. Using third-party tools carries real ban risk. Update 1.1.3 (Feb 2025) added official-server moderation and anti-cheat investment—treat enforcement as ongoing, not a one-time concern.',
    },
  ],
  body: [
    { type: 'h2', text: 'Feature overview' },
    {
      type: 'p',
      text: 'Options align with the merchant product page: visual layers for players and loot, plus aim assistance with FOV and smoothing controls. Toggle only what you can track during a fight.',
    },
    { type: 'h2', text: 'Related guides' },
    {
      type: 'p',
      text: 'Start with the [ESP guide](/blogs/deadside-esp-guide/) and [aimbot guide](/blogs/deadside-aimbot-guide/). For purchase flow, see [best Deadside cheats](/blogs/best-deadside-cheats/).',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs.deadside,
};

const hwidProduct: ProductPage = {
  slug: 'hwid-spoofer',
  kind: 'utility',
  badge: 'Utility',
  category: 'Account & hardware',
  name: 'HWID Spoofer',
  title: 'HWID Spoofer',
  subtitle: 'Hardware identifier tooling when the merchant offers it.',
  desc: 'Utility product for hardware identifier workflows described by the merchant—not a substitute for fair play or guaranteed unbans.',
  features: ['Merchant-supported workflow', 'Windows PC', 'Used with care', 'Read before checkout'],
  more: 0,
  buyUrl: checkoutForSlug('hwid-spoofer'),
  images: [gallery[0]!],
  overview: {
    title: 'When hardware matters',
    paragraphs: [
      'HWID Spoofer is sold as a separate utility. Use only for scenarios the merchant documents. It does not reverse Easy Anti-Cheat bans by itself.',
    ],
  },
  acquisition: acquisitionFor('HWID Spoofer'),
  goodToKnow: sharedGoodToKnow,
  limitations: sharedLimitations,
  fullFeatures: ['Merchant-defined spoofing workflow', 'Windows 10/11 compatibility', 'Operator documentation in portal'],
  systemRequirements: deadsideRequirements,
  body: [
    {
      type: 'p',
      text: 'Read [HWID Spoofer explained](/blogs/deadside-hwid-spoofer-guide/) before purchase. Pair with realistic expectations about EAC enforcement.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs['hwid-spoofer'],
};

const ugcProduct: ProductPage = {
  slug: 'ugc',
  kind: 'utility',
  badge: 'Utility',
  category: 'Account tools',
  name: 'UGC Tool',
  title: 'UGC Tool for Account Recovery',
  subtitle: 'Merchant account tooling—described neutrally, no guaranteed recovery.',
  desc: 'UGC is presented by the merchant as account governance tooling. We do not promise unbans or restored accounts.',
  features: ['Merchant workflow', 'Case organization', 'Windows access', 'Support via merchant'],
  more: 0,
  buyUrl: checkoutForSlug('ugc'),
  images: [gallery[1]!],
  overview: {
    title: 'Account tooling',
    paragraphs: [
      'Describe the UGC Tool exactly as the merchant does: a workspace for appeals and account-related steps. Outcomes depend on platform policy, not marketing claims.',
    ],
  },
  acquisition: acquisitionFor('UGC Tool'),
  goodToKnow: sharedGoodToKnow,
  limitations: sharedLimitations,
  fullFeatures: ['Merchant-defined UGC features', 'Documentation in checkout portal', 'No guaranteed ban removal'],
  systemRequirements: deadsideRequirements,
  body: [
    {
      type: 'p',
      text: 'See [UGC Tool explained](/blogs/deadside-ugc-tool-guide/) for scope and limits before checkout.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs.ugc,
};

const cloudDmaProduct: ProductPage = {
  slug: 'cloud-dma',
  kind: 'utility',
  badge: 'Required stack',
  category: 'Infrastructure',
  name: 'Cloud DMA',
  title: 'Cloud DMA',
  subtitle: 'Infrastructure layer required for full catalog functionality on supported builds.',
  desc: 'Hyper-V–based delivery on a single PC per merchant description. Separate purchase from main Deadside software.',
  features: ['Single-PC setup', 'Hyper-V layer', 'Merchant activation', 'Windows 10/11'],
  more: 0,
  buyUrl: checkoutForSlug('cloud-dma'),
  images: [gallery[2]!],
  overview: {
    title: 'Why Cloud DMA is listed',
    paragraphs: [
      'The Deadside merchant page states Cloud DMA is required for full functionality on supported builds. This utility is that infrastructure product—not the gameplay module itself.',
      'The merchant also lists GREENWARD, Static Server, and AWS as separate required products. None are included in Cloud DMA checkout.',
    ],
  },
  acquisition: acquisitionFor('Cloud DMA'),
  goodToKnow: sharedGoodToKnow,
  limitations: sharedLimitations,
  fullFeatures: [
    'Hyper-V–based virtual environment on one gaming PC',
    'Encrypted activation link per merchant installer',
    'Compatible with Windows 10/11 with virtualization enabled',
  ],
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10/11 Pro or edition that supports Hyper-V per merchant notes.' },
    { icon: 'reqCpu', text: 'CPU virtualization (Intel VT-x or AMD-V) enabled in firmware.' },
    { icon: 'reqWifi', text: 'Stable broadband for activation and service connectivity.' },
  ],
  body: [
    {
      type: 'p',
      text: 'Walk through [Cloud DMA explained](/blogs/deadside-cloud-dma-guide/) and [PC requirements](/blogs/deadside-pc-requirements/) before buying the main Deadside product.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs['cloud-dma'],
};

export const productPages: ProductPage[] = [mainProduct, hwidProduct, ugcProduct, cloudDmaProduct];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = gallery;

export const productHub = {
  path: productBase,
  title: 'Deadside products',
  subtitle: 'PC software and related utilities',
  description:
    'Deadside cheat software for PC plus HWID Spoofer, UGC Tool, and Cloud DMA utilities offered on deadside-cheats.com.',
  buyUrl: PRIMARY_CHECKOUT_PATH,
};
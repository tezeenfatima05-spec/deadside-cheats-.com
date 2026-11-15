import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Deadside Cheats',
    domain: 'deadside-cheats.com',
    title: 'Deadside Cheats for PC | ESP & Aimbot Features',
    description:
      'Explore Deadside cheats for PC, compare available features, check compatibility details, and learn the risks and options before you buy.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/forum/', label: 'Forum' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Deadside — PC software overview',
    eyebrow: 'Open-world PvPvE survival shooter',
    titleLine1: 'ESP, Aimbot & PC Software Features',
    titleLine2: 'Deadside Cheats',
    subtitle:
      'Compare Deadside cheat features for PC—player ESP, loot ESP, and aim assistance options—with compatibility notes for Easy Anti-Cheat and Cloud DMA where required.',
    ctaPrimary: 'View products',
    ctaDiscord: 'Proceed to checkout',
    modesLabel: 'Deadside focus',
    modes: ['PvPvE raids', 'Base building', 'Official servers', 'Community servers'],
    metrics: [
      { label: 'Platform', strong: 'PC only' },
      { label: 'Anti-cheat', strong: 'EAC' },
      { label: 'Publisher', strong: 'tinyBuild' },
      { label: 'Developer', strong: 'Bad Pixel' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Verified software highlights',
    subtitle: 'Options aligned with the merchant Deadside listing—ESP, aimbot tuning, and config tools for PC.',
    items: [
      {
        title: 'Player ESP',
        subtitle: 'See players through terrain.',
        desc: 'Boxes, skeletons, names, corpses, and view lines for PvP and PvE awareness on Deadside PC.',
        bullets: ['Box and skeleton overlays', 'Name tags and corpse markers', 'View line indicators', 'Distance-aware readability'],
        tags: ['deadside esp', 'player esp', 'wallhack'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Item & loot ESP',
        subtitle: 'Find gear before rivals do.',
        desc: 'Filters for clothing, weapons, consumables, resources, tools, devices, and money.',
        bullets: ['Weapon and clothing filters', 'Consumables and resources', 'Tools and devices', 'Money and stash cues'],
        tags: ['loot esp', 'item esp', 'deadside wallhack'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Aimbot options',
        subtitle: 'Tune FOV and smoothness.',
        desc: 'Aim key, hold/always modes, bone targets, NPC aim, visible check, FOV draw/size, distance limits.',
        bullets: ['Custom aim key and modes', 'Bone selection', 'Visible check', 'FOV and smoothing'],
        tags: ['deadside aimbot', 'aim assist', 'fov'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Misc & configs',
        subtitle: 'Save profiles per server.',
        desc: 'Battle mode, crosshair, and config save/load/import/export for repeatable setups.',
        bullets: ['Battle mode toggle', 'Crosshair overlay', 'Config import/export', 'Per-server profiles'],
        tags: ['config', 'hotkeys', 'profiles'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Cloud DMA stack',
        subtitle: 'Infrastructure when required.',
        desc: 'Merchant notes Cloud DMA for full functionality on supported builds—sold as a separate utility.',
        bullets: ['Single-PC Hyper-V flow', 'Separate from gameplay module', 'Windows 10/11 focus', 'Read requirements first'],
        tags: ['cloud dma', 'deadside dma', 'setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'PC compatibility',
        subtitle: 'Windows only.',
        desc: 'Built for Deadside on Steam for Windows—no console claims.',
        bullets: ['Windows 10 & 11', 'Steam PC client', 'EAC risk awareness', 'Honest update notes'],
        tags: ['pc only', 'eac', 'compatibility'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches—not promises',
    subtitle:
      'Most Deadside cheat shops ship stale loaders, obvious automation, and ticket bots. We built deadside-cheats.com around patch-day delivery, humanized scripts, and live operators.',
    usLabel: 'Deadside Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'EAC-aware builds pushed within hours of Deadside updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized scripts & delays',
        desc: 'Delay Setting, Target Selector and conservative defaults mimic high-MMR timing—not instant bot bursts that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, Cloud DMA, and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Deadside process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Loot-run and PvP profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Deadside or EAC changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Steam PC players running ESP, aim assist, and utilities on deadside-cheats.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to first session in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and launch Deadside on Steam PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import a quiet ESP/aim preset, and tune distance and smoothness sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Deadside',
        desc: 'Check the live status banner, launch Steam Deadside, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Deadside after updates.',
    items: ['Windows 10 & 11', 'Steam', 'Deadside client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'Deadside software',
    subtitle: 'Player ESP, item ESP, and aimbot-style options for PC.',
    viewAll: 'View software details',
    explore: 'Explore',
    items: [
      {
        badge: 'PC',
        tier: 'Main',
        name: 'Deadside',
        title: 'Deadside Cheats',
        desc: 'ESP, aim assistance, and loot filters for open-world PvPvE on Windows.',
        features: ['Player ESP', 'Item ESP', 'Aimbot tuning', 'Config profiles', 'Battle mode'],
        more: 8,
        href: `${productBase}deadside/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Deadside products',
    subtitle: 'Main Deadside software plus HWID Spoofer, UGC Tool, and Cloud DMA utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching Deadside.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Steam restrictions, EAC bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Required stack',
        category: 'Infrastructure',
        title: 'Cloud DMA',
        subtitle: 'Merchant infrastructure layer',
        desc: 'Hyper-V–based delivery on one PC for supported builds—separate from the gameplay module.',
        features: ['Single-PC setup', 'Hyper-V provisioning', 'Merchant activation', 'Windows 10/11'],
        more: 4,
        href: `${productBase}cloud-dma/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Buying guides, ESP/aim setup, and patch-day checks for Deadside.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All Articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest',
    sortOldest: 'Oldest',
    sortAz: 'A–Z',
    sortZa: 'Z–A',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    searchLabel: 'Search articles',
    searchPlaceholder: 'Search guides and topics…',
    filterAllLabel: 'All Articles',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Buying Guides',
        title: 'Best Deadside Cheats in 2026',
        slug: 'best-deadside-cheats',
        image:
          'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/deadside/986c4da2-dda6-40d4-9002-5802ae47beb5/1793624469198-5iaw32-zadeyo-deadside-1-visuals.webp',
        desc: 'Buying guide for Deadside PC software, features, and EAC risk.',
        date: 'Nov 1, 2026',
        readTime: '12 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'ESP', title: 'Player and loot overlays', desc: 'Boxes, distance, loot filters, and extract markers grouped in one visuals tab.' },
      { num: '02', label: 'Aim', title: 'Assist that stays controllable', desc: 'FOV, smoothness, bone priority, and hotkey toggle without clutter.' },
      { num: '03', label: 'World', title: 'Vehicles and supply awareness', desc: 'Vehicle ESP, supply signals, and world markers on a compact overlay.' },
      { num: '04', label: 'Profiles', title: 'Per-server config profiles', desc: 'Save ESP and aim presets per server and swap with hotkeys.' },
      { num: '05', label: 'Misc', title: 'Utility modules', desc: 'Night vision helpers, radar options, and session utilities for longer raids.' },
      { num: '06', label: 'Cloud', title: 'Configs you can reuse', desc: 'Separate quiet, loot-run, and PvP presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Deadside profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check EAC status',
        desc: 'Read the live banner on deadside-cheats.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick the Deadside package and required utilities that match your setup.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune ESP/aim in a quiet server first.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save loot-run and PvP presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Deadside plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you launch.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with quiet ESP ranges and low aim smoothing, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or Cloud DMA? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Deadside Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: 'https://discord.com/invite/wmFY3xVtwm',
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@deadside-cheats.com',
        href: 'mailto:support@deadside-cheats.com',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on deadside-cheats.com or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam on Windows 10 or 11—and your Deadside client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Deadside cheats are online?',
        a: 'The live status banner is on deadside-cheats.com and in the Discord #status channel. Always check after a Deadside or EAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Deadside.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party deadside cheats?',
        a: 'Yes—any modification carries risk. EAC and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Deadside via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Cloud DMA live at deadside-cheats.com/products/deadside-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Deadside cheats — ESP, aim, and PC tools. deadside-cheats.com',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/deadside-cheats/', label: 'Deadside software', ariaLabel: 'Deadside software' },
      { href: '/products/deadside-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blogs/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Deadside Cheats',
      description:
        'Deadside Cheats provides Deadside cheat tiers, utility tools and PC support resources at deadside-cheats.com.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Deadside Cheats is a PC-focused resource for Deadside players exploring ESP, aim assist, utilities, and Cloud DMA workflows. We publish feature guides, setup notes, and live status updates so you can evaluate deadside cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Deadside Cheats, HWID utilities, Cloud DMA, and related tools. Blog articles explain safer configs, patch-day checks, and EAC update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Steam account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Deadside Cheats handles analytics, cookies, and contact data when you use deadside-cheats.com.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on deadside-cheats.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Deadside Cheats products and deadside-cheats.com.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. By using deadside-cheats.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Deadside Cheats and utility tools (HWID Spoofer, UGC, Cloud DMA) delivered through an operator portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Deadside or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. deadside-cheats.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Deadside.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam Deadside on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Deadside build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Deadside can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Deadside Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at deadside-cheats.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Deadside Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Deadside Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};

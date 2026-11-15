export interface ReviewReply {
  author: string;
  role: 'support' | 'user';
  body: string;
  date: string;
}

export interface SiteReview {
  id: string;
  author: string;
  region: 'US' | 'EU';
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  body: string;
  product: string;
  date: string;
  verified: boolean;
  replies?: ReviewReply[];
}

export const siteReviews: SiteReview[] = [
  {
    id: 'r1',
    author: 'Marcus W.',
    region: 'US',
    rating: 5,
    title: 'ESP finally readable in night raids',
    body: 'Took about fifteen minutes after checkout. Player boxes and loot filters are clean—I dialed distance down so the screen is not cluttered. Used it on a community server for a couple sessions and the overlay stayed stable. Not saying anything is risk-free with EAC, but the software did what the feature list said.',
    product: 'Deadside Cheats',
    date: 'Oct 28, 2026',
    verified: true,
  },
  {
    id: 'r2',
    author: 'Elena K.',
    region: 'EU',
    rating: 5,
    title: 'Aim smoothing feels controllable',
    body: 'I was worried aimbot would look robotic. With FOV and smoothness turned down it feels more like assist than auto. Support answered my Discord ping the same evening when I asked about bone selection. Solid so far on Windows 11.',
    product: 'Deadside Cheats',
    date: 'Oct 22, 2026',
    verified: true,
  },
  {
    id: 'r3',
    author: 'Jake P.',
    region: 'US',
    rating: 4,
    title: 'Good loot ESP, wish configs synced faster',
    body: 'Item ESP for weapons and resources is the reason I bought this. Config save/load works; sometimes I have to re-import after a reboot. Still worth it for night loot runs. Four stars only because of that small hassle.',
    product: 'Deadside Cheats',
    date: 'Oct 14, 2026',
    verified: true,
  },
  {
    id: 'r4',
    author: 'Tomáš R.',
    region: 'EU',
    rating: 5,
    title: 'Cloud DMA setup was clear enough',
    body: 'I bought Cloud DMA first because the product page said it was required for full features. Hyper-V took a bit of patience on my PC, but once it was up the main Deadside software loaded fine. Documentation could be shorter, but it worked.',
    product: 'Cloud DMA',
    date: 'Oct 9, 2026',
    verified: true,
  },
  {
    id: 'r5',
    author: 'Sarah M.',
    region: 'US',
    rating: 2,
    title: 'Would not load until I fixed my own mistake',
    body: 'I rushed checkout and skipped Cloud DMA even though the page said it was required. Then I kept opening tickets saying the cheat was broken. That was on me. After support walked me through buying Cloud DMA and enabling Hyper-V, everything started. Leaving two stars for the wasted evening—not because support ignored me.',
    product: 'Deadside Cheats',
    date: 'Sep 30, 2026',
    verified: true,
    replies: [
      {
        author: 'Support Team',
        role: 'support',
        date: 'Sep 30, 2026',
        body: 'Thanks for the update, Sarah. On current builds the merchant stack needs Cloud DMA for full functionality. If Hyper-V fails again, send your Windows edition + screenshot of the installer error in Discord and we will walk the checks again.',
      },
      {
        author: 'Sarah M.',
        role: 'user',
        date: 'Oct 1, 2026',
        body: 'All good now. Wish I had read the requirements first.',
      },
    ],
  },
  {
    id: 'r6',
    author: 'Daniel H.',
    region: 'EU',
    rating: 2,
    title: 'My bad — antivirus quarantined the loader',
    body: 'First launch looked like a failed install. I blamed the product. Turns out Windows Defender deleted the loader while I was in game. Support asked me to restore the file and add an exclusion. After that it ran. Still annoyed at myself for not checking Defender first.',
    product: 'Deadside Cheats',
    date: 'Sep 21, 2026',
    verified: true,
    replies: [
      {
        author: 'Support Team',
        role: 'support',
        date: 'Sep 21, 2026',
        body: 'Common issue. Restore the quarantined file, add your loader folder to exclusions, then relaunch as admin. If Defender still blocks it, paste the exact quarantine name in Discord and we will confirm the hash against the current build.',
      },
    ],
  },
  {
    id: 'r7',
    author: 'Chris L.',
    region: 'US',
    rating: 3,
    title: 'Worked after I stopped using a VPN',
    body: 'Activation kept failing. I was on a free VPN for some reason. Support told me to disconnect VPN, retry activation, then reconnect if needed. That fixed it. Three stars because the first night was frustrating, but the reply was clear and polite.',
    product: 'Deadside Cheats',
    date: 'Sep 12, 2026',
    verified: true,
    replies: [
      {
        author: 'Support Team',
        role: 'support',
        date: 'Sep 12, 2026',
        body: 'Glad it activated. Some VPN exit nodes break the encrypted activation step. Disable VPN for first login, then you can usually re-enable afterward. Ping us if the key still will not bind.',
      },
    ],
  },
  {
    id: 'r8',
    author: 'Amélie V.',
    region: 'EU',
    rating: 5,
    title: 'HWID tool did what support described',
    body: 'Bought HWID Spoofer after a hardware-related lock on an old alt. Support never promised miracles—just the workflow. Followed their reboot checklist carefully and the new account stuck on this PC. Appreciated the honest tone.',
    product: 'HWID Spoofer',
    date: 'Sep 5, 2026',
    verified: true,
  },
  {
    id: 'r9',
    author: 'Ryan T.',
    region: 'US',
    rating: 4,
    title: 'Configs are easy once you stop maxing every slider',
    body: 'First match I turned every ESP option on and could not see the UI. That was user error. Dialed it back using a quieter preset and it is fine. Product does the job; I just needed to listen to the setup tips.',
    product: 'Deadside Cheats',
    date: 'Aug 29, 2026',
    verified: true,
  },
  {
    id: 'r10',
    author: 'Nora S.',
    region: 'EU',
    rating: 1,
    title: 'Installed on the wrong Windows user account',
    body: 'I installed under a standard local account while I play on a different Windows login. Nothing showed in-game and I left a angry one-star draft. Support asked which Windows user I was on—turns out I never ran the loader on the account I actually play with. Fixed after reinstalling under the right profile. Updating this so people do not repeat my mistake.',
    product: 'Deadside Cheats',
    date: 'Aug 18, 2026',
    verified: true,
    replies: [
      {
        author: 'Support Team',
        role: 'support',
        date: 'Aug 18, 2026',
        body: 'Please run the loader while logged into the same Windows user you launch Steam/Deadside with. If you switched users mid-setup, reinstall under the play account and confirm the license binds. We are here if the portal still shows a different HWID.',
      },
      {
        author: 'Nora S.',
        role: 'user',
        date: 'Aug 19, 2026',
        body: 'Yep — wrong Windows profile. Working now. Thanks for not just closing the ticket.',
      },
    ],
  },
];

export function getReviewAverage(reviews: SiteReview[] = siteReviews) {
  if (!reviews.length) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

export function getRatingDistribution(reviews: SiteReview[] = siteReviews) {
  const buckets = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (const review of reviews) buckets[review.rating] += 1;
  return buckets;
}
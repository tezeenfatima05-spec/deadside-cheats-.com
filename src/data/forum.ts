export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'ESP & Visuals', tone: 'blue', icon: 'navBlog' },
  { name: 'Aimbot & Combat', tone: 'green', icon: 'messageCircle' },
  { name: 'EAC & Security', tone: 'orange', icon: 'refresh' },
  { name: 'Cloud DMA', tone: 'purple', icon: 'layers' },
  { name: 'Installation', tone: 'blue', icon: 'refresh' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: 'deadside-esp-distance-settings',
    category: 'ESP & Visuals',
    categoryTone: 'blue',
    title: 'What ESP distance values work best in open Deadside fields?',
    excerpt:
      'Example ranges for player ESP in rural zones versus towns, and why stacking every label at max range gets unreadable fast.',
    author: 'mod_example',
    age: '3 hours ago',
    commentsCount: 5,
    upvotes: 142,
    flair: 'ESP',
    sourceTitle: 'Deadside player ESP setup walkthrough',
    sourcePath: '/blogs/deadside-player-esp-setup/',
    body: [
      'For illustrative tuning, many players start around 250–350 m for hostile players in forests and raise the cap slightly when pushing compound interiors. Loot ESP often uses a shorter radius so the overlay does not resemble a galaxy map.',
      'The linked guide recommends separating player, container, and vehicle channels so you can drop one category without disabling the whole overlay. Distance is only half the battle—font size, opacity, and off-screen arrows matter as much in Deadside’s long sight lines.',
    ],
    comments: [
      {
        author: 'ridge_runner_demo',
        age: '2 hours ago',
        score: 31,
        body: 'I keep players at 300 m and crates at 120 m in the example profile. Anything beyond that is noise when you are rotating along a tree line.',
      },
      {
        author: 'mod_example',
        age: '1 hour ago',
        score: 18,
        body: 'Exactly—test in a low-traffic server first. If names overlap, reduce loot distance before touching player range.',
        replies: [
          {
            author: 'ui_tinker_demo',
            age: '52 min. ago',
            score: 9,
            body: 'Bumping label opacity to ~70% helped me more than adding another 100 m of range.',
          },
        ],
      },
      {
        author: 'squad_lead_example',
        age: '48 min. ago',
        score: 14,
        body: 'We color-code squadmates locally so callouts stay consistent even when the example build uses default palettes.',
      },
      {
        author: 'night_owl_demo',
        age: '35 min. ago',
        score: 7,
        body: 'Night raids: drop loot ESP to ~80 m so headlights do not paint the whole HUD orange.',
      },
      {
        author: 'faq_bot_example',
        age: '20 min. ago',
        score: 4,
        body: 'Reminder: illustration-only numbers—always match the current product doc before a live session.',
      },
    ],
  },
  {
    slug: 'deadside-aimbot-smoothing',
    category: 'Aimbot & Combat',
    categoryTone: 'green',
    title: 'How much aim smoothing feels natural on bolt rifles?',
    excerpt:
      'Smoothing trades snap for believable motion. This thread collects example curves for SKS-style engagements at medium range.',
    author: 'mod_example',
    age: '5 hours ago',
    commentsCount: 6,
    upvotes: 118,
    flair: 'Aimbot',
    sourceTitle: 'Deadside aim smoothing and FOV primer',
    sourcePath: '/blogs/deadside-aim-smoothing-guide/',
    body: [
      'Illustrative setups often use higher smoothing on marksman rifles than on SMGs because the kill window is narrower and camera whip is more obvious on a 4x optic.',
      'Pair smoothing with a modest FOV circle. The guide suggests logging three test engagements—standing, crouch peek, full sprint cancel—before copying anyone else’s numbers.',
    ],
    comments: [
      { author: 'bolt_demo_user', age: '4 hours ago', score: 22, body: 'Example profile: smoothing 6–8, FOV 4° on SKS. Anything lower looked robotic in the training clip.' },
      { author: 'recoil_lab_example', age: '3 hours ago', score: 15, body: 'Add a tiny humanization jitter in the doc’s advanced tab if your mouse lacks weight.' },
      {
        author: 'mod_example',
        age: '2 hours ago',
        score: 11,
        body: 'Good note. Jitter should stay sub-pixel; large random jumps defeat the purpose of smoothing.',
        replies: [
          { author: 'bolt_demo_user', age: '1 hour ago', score: 6, body: 'Tried 0.3 px variance—felt closer to thumb stick drift than macro snapping.' },
        ],
      },
      { author: 'cqc_alt_demo', age: '1 hour ago', score: 8, body: 'SMG example uses smoothing 3 because target velocity spikes in compound fights.' },
      { author: 'scope_check_demo', age: '40 min. ago', score: 5, body: 'Re-test when swapping PU scope vs reflex; FOV math shifts.' },
      { author: 'readme_first_example', age: '25 min. ago', score: 3, body: 'These are training values only—not a promise of in-game performance.' },
    ],
  },
  {
    slug: 'deadside-eac-questions',
    category: 'EAC & Security',
    categoryTone: 'orange',
    title: 'Common EAC questions before your first Deadside session',
    excerpt:
      'What to verify on Windows, why kernel debuggers matter, and how example users structure a clean boot profile.',
    author: 'security_mod_example',
    age: '7 hours ago',
    commentsCount: 6,
    upvotes: 96,
    flair: 'EAC',
    sourceTitle: 'Easy Anti-Cheat prep checklist for Deadside',
    sourcePath: '/blogs/deadside-eac-prep-checklist/',
    body: [
      'Easy Anti-Cheat expects a fairly stock environment. Illustrative prep includes disabling test-signing, closing memory scanners, and making sure no leftover overlay hooks from other titles load at startup.',
      'The checklist also covers TPM/Secure Boot notes for newer boards and why running multiple unrelated tools simultaneously increases false positives—even if each tool works alone in a lab video.',
    ],
    comments: [
      { author: 'clean_boot_demo', age: '6 hours ago', score: 19, body: 'I keep a dedicated Windows user account just for Deadside example sessions—fewer autostart surprises.' },
      { author: 'driver_curious_example', age: '5 hours ago', score: 12, body: 'Does the guide mention unsigned filter drivers? That blocked my mate’s VM experiment.' },
      {
        author: 'security_mod_example',
        age: '4 hours ago',
        score: 16,
        body: 'Yes—section 4 lists common filter-driver leftovers. Remove or update them before launching EAC.',
        replies: [
          { author: 'driver_curious_example', age: '3 hours ago', score: 7, body: 'Found an old VPN tap driver; deleting it fixed the launch error in the sample trace.' },
          { author: 'vm_watcher_demo', age: '2 hours ago', score: 4, body: 'VM snapshots still trigger extra attestation—expected behavior in the doc.' },
        ],
      },
      { author: 'overlay_audit_example', age: '2 hours ago', score: 9, body: 'Discord overlay off, GeForce overlay on windowed only—worked in the tutorial capture.' },
      { author: 'patch_watch_demo', age: '1 hour ago', score: 6, body: 'Re-read the checklist after each Deadside patch; EAC build strings change quietly.' },
      { author: 'faq_bot_example', age: '30 min. ago', score: 2, body: 'No bypass instructions here—education and hygiene only.' },
    ],
  },
  {
    slug: 'deadside-cloud-dma-latency',
    category: 'Cloud DMA',
    categoryTone: 'purple',
    title: 'Cloud DMA: what latency numbers mean in practice',
    excerpt:
      'Explains the example dashboard metrics—frame relay, PCIe tunnel, and why sub-20 ms is a lab goal, not a guarantee.',
    author: 'cloud_ops_example',
    age: '9 hours ago',
    commentsCount: 4,
    upvotes: 87,
    flair: 'Cloud DMA',
    sourceTitle: 'Cloud DMA architecture overview',
    sourcePath: '/blogs/deadside-cloud-dma-overview/',
    body: [
      'Cloud DMA routes memory reads through a remote endpoint. Illustrative monitoring shows round-trip time, queue depth, and dropped batches—useful when diagnosing stutter that is not GPU-bound.',
      'The overview stresses redundant networking: wired backhaul on the gaming PC, avoid VPN hops on the same NIC, and keep firmware on the DMA appliance current.',
    ],
    comments: [
      { author: 'ping_chart_demo', age: '8 hours ago', score: 17, body: 'My demo rig averages 14 ms RTT on fiber; Wi-Fi added 40 ms spikes in the sample graph.' },
      {
        author: 'cloud_ops_example',
        age: '7 hours ago',
        score: 12,
        body: 'Document those spikes—support uses them to suggest NIC offload tweaks.',
        replies: [
          { author: 'ping_chart_demo', age: '6 hours ago', score: 5, body: 'Disabled Large Send Offload per the KB; variance halved in the second capture.' },
        ],
      },
      { author: 'dual_pc_example', age: '5 hours ago', score: 8, body: 'Second PC as reader still needs the same firmware branch—easy to miss in the illustration diagram.' },
      { author: 'status_page_demo', age: '3 hours ago', score: 4, body: 'Check the status banner before blaming local routing.' },
    ],
  },
  {
    slug: 'deadside-loader-install-steps',
    category: 'Installation',
    categoryTone: 'blue',
    title: 'First-time loader install: ordered steps for Deadside',
    excerpt:
      'A copy-friendly sequence—download, hash check, extract path, run as admin once, then pin the launcher.',
    author: 'install_mod_example',
    age: '11 hours ago',
    commentsCount: 5,
    upvotes: 76,
    flair: 'Setup',
    sourceTitle: 'Deadside loader installation guide',
    sourcePath: '/blogs/deadside-loader-installation/',
    body: [
      'Install to a short path without spaces (example: C:\\DeadsideSuite\\). Windows Defender exclusions are optional but the guide shows how to add them without disabling real-time protection entirely.',
      'Launch the loader once before starting Deadside so it can bind overlays to the correct process name. The sample video uses offline mode to demonstrate the menu without joining a server.',
    ],
    comments: [
      { author: 'path_short_demo', age: '10 hours ago', score: 14, body: 'Moving out of Downloads fixed the “path too long” error in the scripted demo.' },
      { author: 'hash_check_example', age: '9 hours ago', score: 11, body: 'SHA-256 in the release note matched—takes 10 seconds, saves headaches.' },
      { author: 'uac_once_demo', age: '8 hours ago', score: 7, body: 'Right-click → Run as administrator only on first boot; normal launch afterward.' },
      {
        author: 'install_mod_example',
        age: '7 hours ago',
        score: 9,
        body: 'If the menu never appears, confirm you are on borderless windowed—exclusive fullscreen hides the overlay in the tutorial.',
        replies: [
          { author: 'display_mode_demo', age: '6 hours ago', score: 5, body: 'Switched to borderless and the sample HUD popped in immediately.' },
        ],
      },
      { author: 'clean_uninstall_example', age: '4 hours ago', score: 4, body: 'Uninstaller in the same folder removes scheduled tasks—handy for rotating test builds.' },
    ],
  },
  {
    slug: 'deadside-loot-esp-filtering',
    category: 'ESP & Visuals',
    categoryTone: 'blue',
    title: 'Filtering loot ESP so rare items pop without spam',
    excerpt:
      'Tier lists, minimum durability filters, and example color rules for weapons versus crafting mats.',
    author: 'loot_filter_demo',
    age: '12 hours ago',
    commentsCount: 6,
    upvotes: 71,
    flair: 'ESP',
    sourceTitle: 'Loot ESP filters and presets',
    sourcePath: '/blogs/deadside-loot-esp-filters/',
    body: [
      'Start by hiding grey-tier junk in the illustrative preset, then whitelist medical and weapon mods you actually carry. Deadside stash weight makes noisy ESP costly.',
      'The filter guide exports JSON snippets you can swap between raid types—open world scav versus military compound rush.',
    ],
    comments: [
      { author: 'stash_math_example', age: '11 hours ago', score: 16, body: 'Hiding nails and rope alone cleaned 40% of my demo overlay clutter.' },
      { author: 'color_key_demo', age: '10 hours ago', score: 10, body: 'Purple for suppressors, cyan for optics—matches our squad spreadsheet.' },
      { author: 'loot_filter_demo', age: '9 hours ago', score: 8, body: 'Export before big patches; filter schema version bumps are called out in release notes.' },
      { author: 'dup_stack_demo', age: '8 hours ago', score: 6, body: 'Enable stack collapse so three bandage icons become one label with x3.' },
      { author: 'hardcore_example', age: '6 hours ago', score: 5, body: 'Hardcore preset shows only firearms + armor above 70% durability.' },
      {
        author: 'new_player_demo',
        age: '4 hours ago',
        score: 3,
        body: 'Is there a beginner JSON? The blog links one called loot_esp_starter.json in the assets list.',
        replies: [
          { author: 'loot_filter_demo', age: '3 hours ago', score: 4, body: 'Yes—download from the same article footer; it is explicitly labeled sample data.' },
        ],
      },
    ],
  },
  {
    slug: 'deadside-silent-aim-fov',
    category: 'Aimbot & Combat',
    categoryTone: 'green',
    title: 'Silent aim FOV: tight cones for CQB compounds',
    excerpt:
      'Why wide FOV silent aim looks suspicious on killcam-style clips and how example users cap degrees per weapon class.',
    author: 'combat_mod_example',
    age: '14 hours ago',
    commentsCount: 4,
    upvotes: 68,
    flair: 'Aimbot',
    sourceTitle: 'Silent aim configuration examples',
    sourcePath: '/blogs/deadside-silent-aim-fov/',
    body: [
      'Silent aim redirects projectiles within a cone without moving your reticle. Illustrative CQB values sit around 2–4°; open-field DMR examples might stretch to 6° with visibility checks enabled.',
      'Always pair FOV limits with line-of-sight validation. The article’s diagram shows how wall penetration flags should remain off unless you are testing in an offline range.',
    ],
    comments: [
      { author: 'compound_rush_demo', age: '12 hours ago', score: 15, body: '2.5° on shotgun, 3.5° on AK example—felt consistent in the supplied clip pack.' },
      { author: 'visibility_first_example', age: '11 hours ago', score: 11, body: 'LOS check stopped the demo bolt from snapping through sheet metal—important detail.' },
      {
        author: 'combat_mod_example',
        age: '10 hours ago',
        score: 7,
        body: 'If kills look magnetic, lower FOV before touching hitchance.',
        replies: [
          { author: 'compound_rush_demo', age: '9 hours ago', score: 4, body: 'Dropped 0.5° and the trace overlay looked human in slow-mo.' },
        ],
      },
      { author: 'edu_only_demo', age: '7 hours ago', score: 3, body: 'Tutorial values—treat killcam risk as part of the learning exercise.' },
    ],
  },
  {
    slug: 'deadside-bone-selection-tips',
    category: 'Aimbot & Combat',
    categoryTone: 'green',
    title: 'Bone priority: head, neck, or upper chest for armored foes?',
    excerpt:
      'When helmets skew TTK, example profiles fall back to upper chest or pelvis to keep damage predictable.',
    author: 'ballistics_demo',
    age: '16 hours ago',
    commentsCount: 5,
    upvotes: 59,
    flair: 'Aimbot',
    sourceTitle: 'Hitbox priority reference for Deadside',
    sourcePath: '/blogs/deadside-hitbox-priority/',
    body: [
      'Deadside armor layers change optimal bones. The reference chart marks which vests downgrade headshot value, pushing illustrative aim profiles toward upper chest.',
      'Dynamic bone swap—head until shield break, then chest—is shown in the sample config with a key toggle for manual override.',
    ],
    comments: [
      { author: 'helmet_tester_example', age: '15 hours ago', score: 13, body: 'Military helmet demo: chest priority saved ~0.2 s in the spreadsheet TTK.' },
      { author: 'leg_meta_demo', age: '13 hours ago', score: 8, body: 'Leg shots for slow—fun in illustration, bad for squad wipes.' },
      { author: 'ballistics_demo', age: '12 hours ago', score: 9, body: 'Document armor class when sharing configs; patch notes rebalance plates often.' },
      { author: 'sniper_lane_example', age: '10 hours ago', score: 6, body: 'DMR profile keeps head priority but adds 50 ms acquisition delay in the sample.' },
      { author: 'chart_reader_demo', age: '8 hours ago', score: 4, body: 'PDF table in the blog is easier than guessing from YouTube thumbnails.' },
    ],
  },
  {
    slug: 'deadside-patch-day-checklist',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Patch day: what to check before queueing Deadside',
    excerpt:
      'Build version parity, postponed ranked pushes, and why the status page is the first tab to open.',
    author: 'patch_mod_example',
    age: '18 hours ago',
    commentsCount: 6,
    upvotes: 55,
    flair: 'Updates',
    sourceTitle: 'Deadside patch day playbook',
    sourcePath: '/blogs/deadside-patch-day-playbook/',
    body: [
      'When Deadside updates, EAC and game binaries shift together. Illustrative workflow: read changelog → confirm product build tag → run offline smoke test → join low-pop server.',
      'Avoid stacking fresh Windows updates with game patches on the same boot; the playbook’s flowchart leaves a reboot between them.',
    ],
    comments: [
      { author: 'version_string_demo', age: '17 hours ago', score: 12, body: 'Matcher tool in the loader compared my 0.9.x build—red banner until sync.' },
      { author: 'hotfix_watch_example', age: '16 hours ago', score: 9, body: 'Thursday hotfixes sometimes land twice; subscribe to the RSS illustration feed.' },
      { author: 'patch_mod_example', age: '15 hours ago', score: 8, body: 'If offsets are yellow in the dashboard, stay in offline range per the doc.' },
      { author: 'squad_queue_demo', age: '13 hours ago', score: 6, body: 'We postpone scrims 24h after major patches—sample team policy only.' },
      { author: 'backup_cfg_example', age: '11 hours ago', score: 5, body: 'Zip your configs pre-patch; restore beats rewriting from memory.' },
      {
        author: 'changelog_bot_demo',
        age: '9 hours ago',
        score: 3,
        body: 'AI summary of changelog is handy but always read the human notes.',
        replies: [
          { author: 'patch_mod_example', age: '8 hours ago', score: 4, body: 'Agreed—AI missed the EAC string bump last month in the demo thread.' },
        ],
      },
    ],
  },
  {
    slug: 'deadside-stream-proof-overlay',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Stream-proof overlay: test before you go live',
    excerpt:
      'Record a minute locally, inspect frames, and compare game capture versus display capture in OBS.',
    author: 'stream_lab_example',
    age: '1 day ago',
    commentsCount: 4,
    upvotes: 52,
    flair: 'Guide',
    sourceTitle: 'Stream-proof overlay testing for Deadside',
    sourcePath: '/blogs/deadside-stream-proof-overlay/',
    body: [
      'Stream-proof modes aim to keep overlays off broadcast software while remaining visible to you. The guide’s worksheet walks through OBS, XSplit, and generic recorder scenarios.',
      'Multi-monitor setups need extra scrutiny—display capture on the wrong monitor leaks overlays in the sample failure clip.',
    ],
    comments: [
      { author: 'obs_scene_demo', age: '22 hours ago', score: 14, body: 'Game capture + stream-proof on = clean MP4 in the tutorial’s test matrix.' },
      { author: 'dual_monitor_example', age: '20 hours ago', score: 9, body: 'Moved chat to non-captured monitor; fixed the leak shown at 4:12 in the video.' },
      {
        author: 'stream_lab_example',
        age: '18 hours ago',
        score: 7,
        body: 'Re-test after GPU driver updates; capture APIs shuffle occasionally.',
        replies: [
          { author: 'obs_scene_demo', age: '16 hours ago', score: 4, body: 'Driver 551.x required one extra toggle in the sample sheet.' },
        ],
      },
      { author: 'clip_review_demo', age: '14 hours ago', score: 3, body: 'Frame-by-frame in VLC caught a one-frame flash—worth the effort.' },
    ],
  },
  {
    slug: 'deadside-hwid-reset-process',
    category: 'EAC & Security',
    categoryTone: 'orange',
    title: 'HWID reset: when to request one and what info to include',
    excerpt:
      'Illustrates the support form fields—old device tag, new motherboard serial hash, and receipt-free troubleshooting path.',
    author: 'support_mod_example',
    age: '1 day ago',
    commentsCount: 5,
    upvotes: 49,
    flair: 'Account',
    sourceTitle: 'Hardware ID reset policy (example)',
    sourcePath: '/blogs/deadside-hwid-reset-policy/',
    body: [
      'Product licenses often bind to a device fingerprint. The example policy allows a limited number of resets per quarter when you replace core components.',
      'Do not paste license keys in forum threads. Use the ticket template linked from the blog and attach the diagnostic JSON the loader exports.',
    ],
    comments: [
      { author: 'new_motherboard_demo', age: '23 hours ago', score: 11, body: 'Reset approved in the sample ticket after attaching hw_report.json—48 h turnaround in doc.' },
      { author: 'laptop_swap_example', age: '21 hours ago', score: 8, body: 'Clarify whether dGPU mux affects fingerprint; article says yes for some OEMs.' },
      { author: 'support_mod_example', age: '19 hours ago', score: 9, body: 'Never share keys publicly—mods will delete posts that include them.' },
      { author: 'vm_not_counted_demo', age: '17 hours ago', score: 5, body: 'VMs get a different license tier in the illustration pricing table.' },
      { author: 'ticket_format_example', age: '15 hours ago', score: 4, body: 'Subject line `[HWID]` speeds routing in the fictional queue chart.' },
    ],
  },
  {
    slug: 'deadside-radar-mini-map-scale',
    category: 'ESP & Visuals',
    categoryTone: 'blue',
    title: 'Radar mini-map scale for squad flanking calls',
    excerpt:
      'Matching radar zoom to in-game map grid so north callouts line up with your overlay.',
    author: 'tactics_demo',
    age: '1 day ago',
    commentsCount: 4,
    upvotes: 47,
    flair: 'ESP',
    sourceTitle: 'Deadside radar overlay calibration',
    sourcePath: '/blogs/deadside-radar-calibration/',
    body: [
      'Set radar scale so one grid square equals one square on the tactical overlay. The calibration post includes a fenced training area with fixed landmarks.',
      'Rotate offset matters when servers use slight map variants—note your bearing in the config comment field for squadmates.',
    ],
    comments: [
      { author: 'north_call_demo', age: '20 hours ago', score: 10, body: '0.85 scale matched the doc’s quarry reference screenshot on 1440p.' },
      { author: 'squad_sync_example', age: '18 hours ago', score: 7, body: 'We export radar JSON to Discord pins before raid night—sample workflow.' },
      {
        author: 'tactics_demo',
        age: '16 hours ago',
        score: 6,
        body: 'If arrows drift while driving, enable velocity-based rotation in advanced.',
        replies: [
          { author: 'driver_demo', age: '14 hours ago', score: 3, body: 'Fixed the swivel on the illustrative UAZ clip.' },
        ],
      },
      { author: 'ui_scale_demo', age: '12 hours ago', score: 4, body: 'Windows 125% scaling threw off pixel snap—set 100% during calibration.' },
    ],
  },
  {
    slug: 'deadside-no-recoil-settings',
    category: 'Aimbot & Combat',
    categoryTone: 'green',
    title: 'No-recoil intensity: subtle pull versus full pattern copy',
    excerpt:
      'Compares percentage-based compensation with full spray traces pulled from the example ballistics sheet.',
    author: 'pattern_lab_example',
    age: '1 day ago',
    commentsCount: 6,
    upvotes: 44,
    flair: 'Combat',
    sourceTitle: 'Recoil control presets for Deadside',
    sourcePath: '/blogs/deadside-recoil-presets/',
    body: [
      'Light pull (15–25%) keeps gun smoke believable in illustrative footage. Full pattern mode is mostly for range benchmarking, not long raids.',
      'Pair recoil helpers with a mild smoothing value so the camera does not slide like it is on rails.',
    ],
    comments: [
      { author: 'ak_spray_demo', age: '22 hours ago', score: 12, body: '20% pull on AK example—first five shots tight, drift after per the chart.' },
      { author: 'smg_burst_example', age: '20 hours ago', score: 8, body: 'Burst weapons want separate profiles; copy pasta one value fails.' },
      { author: 'pattern_lab_example', age: '18 hours ago', score: 7, body: 'Record your own 30-round mag in offline mode to validate traces.' },
      { author: 'hipfire_demo', age: '16 hours ago', score: 5, body: 'Disable helper on hipfire in the sample config—looks worse than natural spread.' },
      { author: 'ads_only_example', age: '14 hours ago', score: 4, body: 'ADS-only toggle is in the keybind tab of the walkthrough.' },
      { author: 'ethics_note_demo', age: '12 hours ago', score: 2, body: 'Illustration thread—balance fun labs with fair play on public servers.' },
    ],
  },
  {
    slug: 'deadside-first-launch-troubleshooting',
    category: 'Installation',
    categoryTone: 'blue',
    title: 'First launch failed? Scan this troubleshooting ladder',
    excerpt:
      'Ordered checks from easy (admin, antivirus quarantine) to advanced (VC++ redistributable, .NET desktop runtime).',
    author: 'install_mod_example',
    age: '2 days ago',
    commentsCount: 7,
    upvotes: 41,
    flair: 'Support',
    sourceTitle: 'Deadside loader troubleshooting tree',
    sourcePath: '/blogs/deadside-loader-troubleshooting/',
    body: [
      'Most first-launch failures in the sample dataset trace to blocked DLLs or missing runtimes. The troubleshooting tree prints which log line maps to which fix.',
      'Collect logs before reinstalling; wiping the folder loses the exact error code support needs.',
    ],
    comments: [
      { author: 'dll_block_demo', age: '1 day ago', score: 11, body: 'Defender quarantined injection_helper.dll in the demo—restored via protection history.' },
      { author: 'vc_redist_example', age: '23 hours ago', score: 9, body: 'Installing 2015–2022 x64 bundle cleared error 0x80004005 in the scripted repro.' },
      { author: 'dotnet_check_demo', age: '21 hours ago', score: 6, body: '.NET 6 desktop runtime was the missing piece on my clean VM illustration.' },
      {
        author: 'install_mod_example',
        age: '19 hours ago',
        score: 8,
        body: 'Attach launcher.log, not screenshots—text stays searchable.',
        replies: [
          { author: 'log_reader_example', age: '17 hours ago', score: 4, body: 'Line 42 pointed to expired cert in the sample; clock sync fixed it.' },
        ],
      },
      { author: 'reinstall_last_demo', age: '15 hours ago', score: 5, body: 'Reinstall only after step 9 in the ladder—saves bandwidth.' },
      { author: 'peer_help_example', age: '13 hours ago', score: 3, body: 'Cross-post logs to Community board with spoiler tags for paths.' },
      { author: 'faq_bot_example', age: '11 hours ago', score: 2, body: 'No remote desktop sessions—loader refuses nested sessions in the doc.' },
    ],
  },
  {
    slug: 'deadside-tier-lite-vs-pro',
    category: 'General',
    categoryTone: 'purple',
    title: 'Lite vs Pro tiers: which Deadside modules move between them?',
    excerpt:
      'Side-by-side table from the product sheet—ESP core in Lite, combat automation pack in Pro, Cloud DMA add-on separate.',
    author: 'product_mod_example',
    age: '2 days ago',
    commentsCount: 5,
    upvotes: 63,
    flair: 'Product',
    sourceTitle: 'Deadside Lite vs Pro comparison',
    sourcePath: '/blogs/deadside-lite-vs-pro/',
    body: [
      'Lite targets awareness: players, loot, vehicles, weather-safe radar. Pro adds aim assistance suites, trigger helpers, and the advanced config exporter.',
      'Neither tier includes Cloud DMA hardware; that path is documented as its own stack so rural players do not pay for unused FPGA features.',
    ],
    comments: [
      { author: 'budget_demo_user', age: '1 day ago', score: 14, body: 'Lite enough for duo stack calls; we run Pro only on entry fragger PC in the example roster.' },
      { author: 'module_list_example', age: '22 hours ago', score: 9, body: 'Comparison PDF lists Skin/VO preview as cosmetic-only utility—no gameplay buff in doc.' },
      { author: 'product_mod_example', age: '20 hours ago', score: 8, body: 'Upgrade path preserves configs—export before switching tiers.' },
      { author: 'dma_addon_demo', age: '18 hours ago', score: 6, body: 'DMA subscription billed separately in the illustration billing page.' },
      { author: 'question_asker_demo', age: '16 hours ago', score: 4, body: 'Is there a trial JSON? Docs mention 24h demo license for events only—not ongoing.' },
    ],
  },
  {
    slug: 'deadside-vehicle-esp-range',
    category: 'ESP & Visuals',
    categoryTone: 'blue',
    title: 'Vehicle ESP range when hunting car spawns',
    excerpt:
      'Longer draw distance for cars than players, but throttle when airfields get busy.',
    author: 'motor_pool_demo',
    age: '2 days ago',
    commentsCount: 4,
    upvotes: 38,
    flair: 'ESP',
    sourceTitle: 'Vehicle ESP tuning for Deadside',
    sourcePath: '/blogs/deadside-vehicle-esp/',
    body: [
      'Cars render useful silhouettes hundreds of meters out. Illustrative default: 450 m for ground vehicles, 600 m for helicopters with a fade curve.',
      'When too many wrecks clutter the map, filter destroyed chassis or dim them to 30% opacity.',
    ],
    comments: [
      { author: 'airfield_demo', age: '1 day ago', score: 9, body: 'Fade wreck filter saved my eyes during the example airfield rush clip.' },
      { author: 'bike_runner_example', age: '20 hours ago', score: 6, body: 'Bikes use a smaller icon set in the sample theme pack—less HUD noise.' },
      {
        author: 'motor_pool_demo',
        age: '18 hours ago',
        score: 5,
        body: 'Heli range past 500 m can tank FPS on low-end GPUs—watch the profiler overlay.',
        replies: [
          { author: 'fps_chart_demo', age: '16 hours ago', score: 3, body: 'Dropped heli to 480 m, gained 6 FPS in the bundled benchmark scene.' },
        ],
      },
      { author: 'squad_driver_demo', age: '14 hours ago', score: 3, body: 'Driver runs lower player ESP, higher vehicle—role split from the guide.' },
    ],
  },
  {
    slug: 'deadside-weapon-esp-labels',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Weapon ESP labels: ammo type, fire mode, or keep it minimal?',
    excerpt:
      'UI density trade-offs for sniper duels versus full-auto pushes.',
    author: 'hud_design_demo',
    age: '2 days ago',
    commentsCount: 5,
    upvotes: 36,
    flair: 'Guide',
    sourceTitle: 'Weapon ESP label styles',
    sourcePath: '/blogs/deadside-weapon-esp-labels/',
    body: [
      'Minimal labels show weapon class icon only. Verbose mode adds ammo, fire mode, and attachment dots—great for scouting, noisy for entry.',
      'The style pack includes colorblind-safe palettes validated against the example UI capture set.',
    ],
    comments: [
      { author: 'sniper_ui_example', age: '1 day ago', score: 8, body: 'Minimal mode for long range; toggle verbose on Middle Mouse in demo bind.' },
      { author: 'entry_frag_demo', age: '22 hours ago', score: 6, body: 'Ammo count matters when deciding whether to push—verbose for me.' },
      { author: 'hud_design_demo', age: '20 hours ago', score: 5, body: 'Export label themes as .theme files—squad shares one pack.' },
      { author: 'cb_palette_demo', age: '18 hours ago', score: 4, body: 'Deuteranopia preset passed the blog’s contrast checker screenshot.' },
      { author: 'font_size_example', age: '16 hours ago', score: 3, body: 'Drop to 11 px if labels overlap suppressor icons.' },
    ],
  },
  {
    slug: 'deadside-external-vs-cloud-dma',
    category: 'Cloud DMA',
    categoryTone: 'purple',
    title: 'External reader versus Cloud DMA: decision flowchart',
    excerpt:
      'When a local external build is enough and when the illustrated Cloud DMA path is worth the hardware budget.',
    author: 'architect_demo',
    age: '3 days ago',
    commentsCount: 6,
    upvotes: 74,
    flair: 'Architecture',
    sourceTitle: 'Choosing your Deadside memory access path',
    sourcePath: '/blogs/deadside-external-vs-cloud-dma/',
    body: [
      'External software overlays are simpler but live on the gaming PC. Cloud DMA isolates reads on another device, which the flowchart marks as interesting for streamers or dual-PC setups.',
      'Neither choice replaces patch awareness—both paths pause when offsets are yellow on the status board.',
    ],
    comments: [
      { author: 'dual_box_demo', age: '2 days ago', score: 13, body: 'Cloud DMA reduced fan noise on main rig in the sample benchmark table.' },
      { author: 'budget_path_example', age: '1 day ago', score: 10, body: 'Single PC users stick external per decision tree question 3.' },
      { author: 'architect_demo', age: '22 hours ago', score: 8, body: 'Read latency section before buying FPGA cards—you may not need top bin.' },
      { author: 'streamer_case_demo', age: '20 hours ago', score: 6, body: 'Streaming persona in doc uses Cloud DMA + stream-proof combo illustration.' },
      {
        author: 'hardware_list_example',
        age: '18 hours ago',
        score: 5,
        body: 'Shopping list links are affiliate-free in the official article.',
        replies: [
          { author: 'architect_demo', age: '16 hours ago', score: 4, body: 'Correct—forum mirrors should not paste reseller URLs.' },
        ],
      },
      { author: 'offset_pause_demo', age: '14 hours ago', score: 3, body: 'Yellow offsets paused both paths equally in last week’s tabletop exercise.' },
    ],
  },
  {
    slug: 'deadside-supply-signal-esp',
    category: 'General',
    categoryTone: 'purple',
    title: 'Supply drop ESP: timing cues without watching the skybox',
    excerpt:
      'Audio cue overlay, estimated landing circle, and example server-event timers from the community sheet.',
    author: 'event_track_demo',
    age: '3 days ago',
    commentsCount: 4,
    upvotes: 33,
    flair: 'General',
    sourceTitle: 'Supply event overlays explained',
    sourcePath: '/blogs/deadside-supply-signal-esp/',
    body: [
      'Supply modules listen for server event flags and paint a probable landing circle. Illustrative accuracy depends on wind data exposed by the server build.',
      'Treat timers as hints, not guarantees—some community servers mod event cadence.',
    ],
    comments: [
      { author: 'plane_audio_demo', age: '2 days ago', score: 7, body: 'Plane audio cue + 800 m circle was within one grid in the sample drop.' },
      { author: 'modded_server_example', age: '1 day ago', score: 5, body: 'Custom servers broke timer—toggle module off when joining modded lists.' },
      { author: 'event_track_demo', age: '20 hours ago', score: 4, body: 'Export server profile JSON when you find stable cadence.' },
      { author: 'chill_raider_demo', age: '16 hours ago', score: 3, body: 'We still assign one player to binocular scout—overlay is backup.' },
    ],
  },
  {
    slug: 'deadside-support-ticket-info',
    category: 'Community',
    categoryTone: 'green',
    title: 'What to put in a support ticket (example template)',
    excerpt:
      'Build hash, Windows version, Deadside server region, and whether EAC threw a numeric code—no payment screenshots required for tech issues.',
    author: 'community_mod_example',
    age: '3 days ago',
    commentsCount: 5,
    upvotes: 28,
    flair: 'Community',
    sourceTitle: 'Support ticket template for Deadside products',
    sourcePath: '/blogs/deadside-support-ticket-template/',
    body: [
      'Tickets move faster when you attach structured info. The template avoids sharing full account emails in public channels.',
      'Billing questions use a different queue—this thread focuses on loader, overlay, and offset problems.',
    ],
    comments: [
      { author: 'ticket_newbie_demo', age: '2 days ago', score: 6, body: 'Copied markdown template into ticket—support bot parsed fields instantly in fictional SLA chart.' },
      { author: 'redaction_example', age: '1 day ago', score: 5, body: 'Blur hardware serials if posting log excerpts here; full serial only in ticket.' },
      { author: 'community_mod_example', age: '22 hours ago', score: 5, body: 'Do not claim you purchased anything in forum posts—we cannot verify and it clutters search.' },
      { author: 'region_tag_demo', age: '18 hours ago', score: 3, body: 'EU vs NA server tag matters for latency-related bugs.' },
      { author: 'follow_up_example', age: '14 hours ago', score: 2, body: 'Reply in ticket instead of opening duplicates—doc says merges slow both.' },
    ],
  },
  {
    slug: 'deadside-night-vision-esp-brightness',
    category: 'ESP & Visuals',
    categoryTone: 'blue',
    title: 'Night raids: ESP brightness without blowing out NVG shaders',
    excerpt:
      'Gamma clamps, desaturated enemy colors, and the example “dusk” theme profile.',
    author: 'night_ops_demo',
    age: '4 days ago',
    commentsCount: 6,
    upvotes: 34,
    flair: 'ESP',
    sourceTitle: 'Night vision friendly ESP palettes',
    sourcePath: '/blogs/deadside-night-esp-palettes/',
    body: [
      'Bright magenta players look obvious on NVG recordings. The dusk theme caps luminance and shifts hostiles to amber outlines.',
      'Test under both clear night and fog weather—shader fog multipliers change perceived glow.',
    ],
    comments: [
      { author: 'nvg_clip_demo', age: '3 days ago', score: 8, body: 'Dusk theme removed bloom on Gen3 clip from the media kit.' },
      { author: 'fog_server_example', age: '2 days ago', score: 6, body: 'Raise outline width +1 px when fog slider above 60% in server settings.' },
      { author: 'night_ops_demo', age: '1 day ago', score: 5, body: 'Share palette files with version tag—colors drift after UI font update.' },
      { author: 'moon_phase_demo', age: '20 hours ago', score: 4, body: 'Moonless nights need lower background opacity per chart.' },
      { author: 'thermal_fake_demo', age: '16 hours ago', score: 3, body: 'Thermal ESP is illustration-only in Lite; check tier table.' },
      {
        author: 'photo_compare_example',
        age: '12 hours ago',
        score: 2,
        body: 'Before/after PNG set linked at bottom of blog—useful for squad approval.',
        replies: [
          { author: 'night_ops_demo', age: '10 hours ago', score: 3, body: 'Those PNGs are CC-BY sample media—credit if rehosted.' },
        ],
      },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
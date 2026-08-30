/**
 * サイト全体のコンテンツ。日本語 (ja) と英語 (en) をここに一元化している。
 * 文言を直したいときはこのファイルだけ触れば OK。
 *
 * TODO で始まるコメントの箇所は、実際の情報に置き換えてください。
 */

export type Bi = { en: string; ja: string };

export const profile = {
  name: { en: 'Satoshi Kameyama', ja: '亀山聖史' },
  monogram: 'SK',
  role: { en: 'Cyber Security Consultant', ja: 'サイバーセキュリティコンサルタント' },
  location: { en: 'Tokyo, Japan', ja: '日本・東京' },
  status: {
    en: 'Open to interesting problems',
    ja: '面白い課題を探しています',
  },
  tagline: {
    en: 'I build small tools that take the tedious parts out of the day — browser extensions, bots, and apps that quietly do the work for you.',
    ja: '毎日の面倒な作業を肩代わりする小さな道具をつくっています。ブラウザ拡張、Bot、そして黙って働いてくれるアプリ。',
  },
  // 主な連絡先。Contact セクションとヒーローのボタンで使う
  primary: {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/satoshiest',
    href: 'https://www.linkedin.com/in/satoshiest/',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/Satoshiest' },
    { label: 'Instagram', href: 'https://www.instagram.com/satoshiest/' },
  ],
};

export const about = {
  heading: { en: 'About', ja: 'プロフィール' },
  paragraphs: [
    {
      en: 'I studied Computer Science and Communication, Culture, Information & Technology at the University of Toronto, and now work as a cyber security consultant at Deloitte.',
      ja: 'トロント大学でコンピュータサイエンスと CCIT（Communication, Culture, Information & Technology）を学び、現在は Deloitte でサイバーセキュリティコンサルタントとして働いています。',
    },
    {
      en: 'Most of what I build starts as a personal annoyance. A form I filled in too many times, a video I kept having to click through — so I write something that handles it and move on with my day.',
      ja: 'つくるものはたいてい「自分が面倒だと思ったこと」から始まります。何度も入力したフォーム、毎回クリックしていた動画。だったら自動化してしまおう、という発想です。',
    },
    {
      en: 'Outside of code I coach badminton and shoot photos — both of which taught me more about explaining things clearly than any class did.',
      ja: 'コードを書いていないときはバドミントンのコーチと写真撮影を。どちらも「人に分かりやすく伝える」ことを、どの授業よりも教えてくれました。',
    },
  ],
  stackHeading: { en: 'Tools I reach for', ja: 'よく使う道具' },
  stack: [
    { group: { en: 'Languages', ja: '言語' }, items: ['TypeScript', 'JavaScript', 'Python', 'Swift', 'HTML/CSS'] },
    { group: { en: 'Building', ja: '開発' }, items: ['Node.js', 'Astro', 'Chrome Extensions (MV3)', 'SwiftUI', 'Git'] },
    { group: { en: 'Interests', ja: '関心領域' }, items: ['Cyber Security', 'Automation', 'Machine Learning', 'Developer Tooling'] },
  ],
};

export type Job = {
  period: Bi;
  title: Bi;
  org: Bi;
  detail: Bi;
};

// LinkedIn (linkedin.com/in/satoshiest) の Experience をそのまま反映
export const experience: { heading: Bi; items: Job[] } = {
  heading: { en: 'Experience', ja: '経歴' },
  items: [
    {
      period: { en: 'Apr 2025 — Present', ja: '2025年4月 — 現在' },
      title: { en: 'Cyber Security Consultant', ja: 'サイバーセキュリティコンサルタント' },
      org: { en: 'Deloitte', ja: 'Deloitte' },
      detail: { en: 'Permanent, full-time.', ja: '正社員・フルタイム。' },
    },
    {
      period: { en: 'Mar 2024 — Feb 2025', ja: '2024年3月 — 2025年2月' },
      title: { en: 'iOS Engineer', ja: 'iOS エンジニア' },
      org: { en: 'Stealth Startup', ja: 'ステルススタートアップ' },
      detail: {
        en: 'Permanent, full-time · Toronto, Ontario, Canada.',
        ja: '正社員・フルタイム／カナダ・オンタリオ州トロント。',
      },
    },
    {
      period: { en: 'Jun 2024 — Dec 2024', ja: '2024年6月 — 2024年12月' },
      title: { en: 'Associate', ja: 'アソシエイト' },
      org: { en: 'Fast Retailing', ja: 'ファーストリテイリング' },
      detail: {
        en: 'Permanent, full-time · Toronto, Ontario, Canada.',
        ja: '正社員・フルタイム／カナダ・オンタリオ州トロント。',
      },
    },
    {
      period: { en: 'Nov 2023 — Mar 2024', ja: '2023年11月 — 2024年3月' },
      title: {
        en: 'Head of Marketing, North America Division',
        ja: '北米事業部 マーケティング責任者',
      },
      org: { en: 'TKF Project Inc.', ja: '株式会社TKF Project' },
      detail: { en: '', ja: '' },
    },
    {
      period: { en: 'Nov 2022 — Jan 2024', ja: '2022年11月 — 2024年1月' },
      title: { en: 'Co-Founder & CEO', ja: '共同創業者 兼 CEO' },
      org: { en: 'Japadian Inc.', ja: 'Japadian Inc.' },
      detail: { en: '', ja: '' },
    },
    {
      period: { en: 'Sep 2022 — Dec 2022', ja: '2022年9月 — 2022年12月' },
      title: { en: 'Software Developer', ja: 'ソフトウェア開発者' },
      org: { en: 'The Urban Writers', ja: 'The Urban Writers' },
      detail: {
        en: 'Web and software development · Ontario, Canada.',
        ja: 'Web・ソフトウェア開発／カナダ・オンタリオ州。',
      },
    },
    {
      period: { en: 'Mar 2022 — Dec 2022', ja: '2022年3月 — 2022年12月' },
      title: { en: 'Programmer', ja: 'プログラマー' },
      org: { en: 'Mediacorp Canada Inc.', ja: 'Mediacorp Canada Inc.' },
      detail: {
        en: 'Software development · Toronto, Ontario, Canada.',
        ja: 'ソフトウェア開発／カナダ・オンタリオ州トロント。',
      },
    },
    {
      period: { en: 'Nov 2021 — May 2022', ja: '2021年11月 — 2022年5月' },
      title: { en: 'Web Developer', ja: 'Web デベロッパー' },
      org: { en: 'DEM Association', ja: 'DEM Association' },
      detail: { en: 'Web development.', ja: 'Web 開発。' },
    },
    {
      period: { en: 'Jan 2022 — Apr 2022', ja: '2022年1月 — 2022年4月' },
      title: { en: 'UX/UI Designer', ja: 'UX/UI デザイナー' },
      org: { en: 'Empowered 4x', ja: 'Empowered 4x' },
      detail: { en: 'Seasonal.', ja: '季節雇用。' },
    },
    {
      period: { en: 'Jul 2018 — Sep 2019', ja: '2018年7月 — 2019年9月' },
      title: { en: 'Badminton Training Assistant', ja: 'バドミントン トレーニングアシスタント' },
      org: { en: 'CXC Sports', ja: 'CXC Sports' },
      detail: { en: 'Permanent, part-time.', ja: '無期雇用・パートタイム。' },
    },
    {
      period: { en: 'Sep 2017 — Nov 2018', ja: '2017年9月 — 2018年11月' },
      title: { en: 'Garnisher', ja: 'ガーニッシャー（調理スタッフ）' },
      org: { en: "Harvey's", ja: "Harvey's" },
      detail: { en: 'Permanent, part-time.', ja: '無期雇用・パートタイム。' },
    },
  ],
};

// 折りたたみトグルのラベル
export const showMore = {
  more: { en: 'Show more', ja: 'もっと見る' },
  less: { en: 'Show less', ja: '閉じる' },
};

// LinkedIn の Education
export const education = {
  heading: { en: 'Education', ja: '学歴' },
  items: [
    {
      period: { en: '2019 — 2024', ja: '2019年 — 2024年' },
      title: { en: 'Honours Bachelor of Science', ja: '理学士（Honours）' },
      org: { en: 'University of Toronto', ja: 'トロント大学' },
      detail: {
        en: 'Computer Science major alongside Communication, Culture, Information & Technology.',
        ja: 'コンピュータサイエンスと CCIT のダブルメジャー。',
      },
    },
  ] satisfies Job[],
};

export type Project = {
  year: string;
  name: Bi;
  blurb: Bi;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const work = {
  heading: { en: 'Selected work', ja: '主なプロジェクト' },
  archiveHeading: { en: 'Also built', ja: 'その他' },
  viewLabel: { en: 'View', ja: '見る' },
  privateLabel: { en: 'Private', ja: '非公開' },
  items: <Project[]>[
    {
      year: '2025',
      name: { en: 'Vpoint Auto', ja: 'Vくじ 自動化' },
      blurb: {
        en: 'Chrome extension that logs in and draws every daily V-Point lottery ticket on its own — a few minutes of clicking reduced to zero.',
        ja: 'ログインから抽選まで、Vくじを全部自動で引く Chrome 拡張。毎日数分のクリック作業をゼロに。',
      },
      tags: ['Chrome MV3', 'JavaScript'],
      featured: true,
    },
    {
      year: '2025',
      name: { en: 'BrightTalk AutoPlay', ja: 'BrightTalk AutoPlay' },
      blurb: {
        en: 'One button signs into BrightTalk, plays a webinar at 1.5×, and advances to the next one in the list when it finishes.',
        ja: 'ボタン1つで BrightTalk にログインし、1.5倍速で再生。終わったら次の動画へ自動で進みます。',
      },
      tags: ['Chrome MV3', 'JavaScript'],
      featured: true,
    },
    {
      year: '2023',
      name: { en: 'NISS Bot', ja: 'NISS Bot' },
      blurb: {
        en: 'Discord bot with auto-translation, dictionary lookups, image search and a pile of quality-of-life commands.',
        ja: '自動翻訳・辞書検索・画像検索など、あると便利なコマンドを詰め込んだ Discord Bot。',
      },
      tags: ['Node.js', 'Discord API'],
      href: 'https://github.com/Satoshiest/DiscordBot',
      featured: true,
    },
    {
      year: '2023',
      name: { en: 'ToDo Calendar', ja: 'ToDo カレンダー' },
      blurb: {
        en: 'iOS app that puts tasks and the calendar on the same screen, so a deadline is never one tab away.',
        ja: 'タスクとカレンダーを同じ画面に置いた iOS アプリ。締め切りを見失わないために。',
      },
      tags: ['Swift', 'iOS'],
      href: 'https://github.com/Satoshiest/ToDoCalendarApp',
      featured: true,
    },
    {
      year: '2023',
      name: { en: 'Colour Search', ja: 'Colour Search' },
      blurb: {
        en: 'Search a colour, get its hex code, keep the ones you like.',
        ja: '色を検索して hex コードを取得し、気に入った色を保存できるアプリ。',
      },
      tags: ['Swift', 'iOS'],
      href: 'https://github.com/Satoshiest/ColourSearchApp',
      featured: true,
    },
    {
      year: '2021',
      name: { en: 'Traffic Sign Recognition', ja: '道路標識認識' },
      blurb: {
        en: 'Convolutional net that identifies which traffic sign appears in a photograph.',
        ja: '写真に写った道路標識を判別する畳み込みニューラルネット。',
      },
      tags: ['Python', 'TensorFlow'],
      href: 'https://github.com/Satoshiest/traffic-sign-recognition',
      featured: true,
    },
    {
      year: '2021',
      name: { en: 'Nim AI', ja: 'Nim AI' },
      blurb: { en: 'Teaches itself Nim through reinforcement learning.', ja: '強化学習で Nim を独学するAI。' },
      tags: ['Python'],
      href: 'https://github.com/Satoshiest/nim-AI',
    },
    {
      year: '2021',
      name: { en: 'Minesweeper AI', ja: 'マインスイーパ AI' },
      blurb: { en: 'Plays Minesweeper by propositional inference.', ja: '論理推論でマインスイーパを解くAI。' },
      tags: ['Python'],
      href: 'https://github.com/Satoshiest/minesweeper-AI',
    },
    {
      year: '2021',
      name: { en: 'Tic Tac Toe AI', ja: '三目並べ AI' },
      blurb: { en: 'Unbeatable, via minimax.', ja: 'ミニマックス法で絶対に負けないAI。' },
      tags: ['Python'],
      href: 'https://github.com/Satoshiest/tictactoe-AI',
    },
    {
      year: '2021',
      name: { en: 'Webcam Motion Detector', ja: 'ウェブカメラ動体検知' },
      blurb: { en: 'Watches for motion and starts recording.', ja: '動きを検知してカメラを起動するアプリ。' },
      tags: ['Python', 'OpenCV'],
      href: 'https://github.com/Satoshiest/webcam-snapshot',
    },
    {
      year: '2021',
      name: { en: 'Space Invaders', ja: 'スペースインベーダー' },
      blurb: { en: 'The classic, rebuilt in pygame.', ja: 'pygame で作り直した定番シューティング。' },
      tags: ['Python', 'pygame'],
      href: 'https://github.com/Satoshiest/invader_pygame',
    },
    {
      year: '2021',
      name: { en: 'StopWatch', ja: 'ストップウォッチ' },
      blurb: { en: 'First Swift app — laps, pause, reset.', ja: '初めて作った Swift アプリ。ラップ・一時停止・リセット。' },
      tags: ['Swift', 'iOS'],
      href: 'https://github.com/Satoshiest/StopWatch',
    },
  ],
};

export const contact = {
  heading: { en: 'Get in touch', ja: 'お問い合わせ' },
  body: {
    en: 'Got something you want built, or just want to talk shop? LinkedIn is the fastest way to reach me.',
    ja: '作りたいものがある方も、ただ技術の話がしたい方も。LinkedIn が一番早く届きます。',
  },
  cta: { en: 'Say hello', ja: 'お気軽にどうぞ' },
};

export const nav = [
  { id: 'about', label: { en: 'About', ja: 'プロフィール' } },
  { id: 'experience', label: { en: 'Experience', ja: '経歴' } },
  { id: 'work', label: { en: 'Work', ja: 'プロジェクト' } },
  { id: 'contact', label: { en: 'Contact', ja: '連絡先' } },
];

export const meta = {
  title: 'Satoshi Kameyama — Cyber Security Consultant',
  description:
    'Portfolio of Satoshi Kameyama, a cyber security consultant who builds browser extensions, bots and small apps that automate the tedious parts of the day.',
};

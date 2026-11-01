export type Lang = 'en' | 'ar';

export interface Stat {
  value: string;
  label: string;
  note?: string;
}

export interface Content {
  meta: { title: string; description: string; caseIndexTitle: string; caseIndexDescription: string };
  name: string;
  role: string;
  locations: string;
  nav: { about: string; cases: string; career: string; results: string; faq: string; contact: string };
  ctaPrimary: string;
  ctaSecondary: string;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    body: string;
    chips: Stat[];
    badges: Stat[];
    portraitAlt: string;
  };
  about: { kicker: string; headline: string; paragraphs: string[]; stats: Stat[]; portraitAlt: string };
  expertise: { kicker: string; headline: string; items: { title: string; body: string }[] };
  ai: {
    kicker: string;
    headline: string;
    intro: string;
    labels: { problem: string; outcome: string; detail: string };
    items: { num: string; type: string; title: string; problem: string; outcome: string; detail: string }[];
    closing: string;
  };
  stack: {
    kicker: string;
    headline: string;
    intro: string;
    groups: { name: string; desc: string; tools: string[] }[];
    footer: string[];
  };
  career: {
    kicker: string;
    headline: string;
    currentLabel: string;
    items: { company: string; market: string; desc: string; role?: string; current?: boolean }[];
  };
  clients: { kicker: string; headline: string; names: string[]; note: string };
  regional: { kicker: string; headline: string; tagline: string; items: { title: string; body: string }[] };
  results: {
    kicker: string;
    headline: string;
    stats: Stat[];
    pillars: { kicker: string; title: string; body: string }[];
    industries: string[];
  };
  casesTeaser: { kicker: string; headline: string; sub: string; viewAll: string };
  sessions: {
    kicker: string;
    headline: string;
    intro: string;
    topicsLabel: string;
    topics: { title: string; body: string }[];
    scarcityTag: string;
    scarcity: string;
  };
  form: {
    title: string;
    stepOf: (n: number, total: number) => string;
    steps: string[];
    businessQ: string;
    businessOptions: string[];
    marketQ: string;
    marketOptions: string[];
    challengeQ: string;
    budgetQ: string;
    name: string;
    email: string;
    whatsapp: string;
    company: string;
    message: string;
    optional: string;
    next: string;
    back: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    error: string;
    required: string;
  };
  faq: { kicker: string; headline: string; sub: string; items: { q: string; a: string }[] };
  contact: {
    kicker: string;
    headline: string;
    sub: string;
    email: string;
    whatsapp: string;
    linkedin: string;
    profile: string;
    profileCta: string;
  };
  casesPage: {
    kicker: string;
    headline: string;
    sub: string;
    stats: Stat[];
    filters: { market: string; discipline: string; industry: string; all: string; reset: string };
    results: (n: number) => string;
    empty: string;
    disclaimer: string;
    read: string;
  };
  caseDetail: {
    back: string;
    market: string;
    category: string;
    metrics: string;
    summary: string;
    prev: string;
    next: string;
    more: string;
    ctaTitle: string;
    ctaBody: string;
  };
  ui: {
    skip: string;
    menu: string;
    close: string;
    langSwitch: string;
    langSwitchLabel: string;
    whatsappLabel: string;
    backToTop: string;
    rights: string;
    notFoundTitle: string;
    notFoundBody: string;
    home: string;
    thanksTitle: string;
    thanksBody: string;
  };
}

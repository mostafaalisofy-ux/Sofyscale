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
  nav: {
    home: string;
    about: string;
    leadership: string;
    impact: string;
    cases: string;
    insights: string;
    contact: string;
    profile: string;
  };
  ctaPrimary: string;
  ctaSecondary: string;

  /* 1. Hero */
  hero: {
    roles: string[];
    title: [string, string];
    sub: string;
    ctaExplore: string;
    ctaDiscuss: string;
    current: string;
    portraitAlt: string;
  };

  /* 2. Executive snapshot */
  snapshot: { label: string; stats: Stat[] };

  /* 3. About */
  about: {
    kicker: string;
    headline: string;
    intro: string;
    paragraphs: string[];
    quote: string;
    principles: { title: string; body: string }[];
    portraitAlt: string;
    more: string;
  };

  /* 4. Leadership & expertise */
  leadership: {
    kicker: string;
    headline: string;
    sub: string;
    pillars: { title: string; summary: string; points: string[] }[];
    stackTitle: string;
    stack: { name: string; tools: string[] }[];
  };

  /* 5. Career journey */
  career: {
    kicker: string;
    headline: string;
    sub: string;
    currentLabel: string;
    presentLabel: string;
    profileCta: string;
    items: { company: string; market: string; desc?: string; role: string; from: number; to?: number; current?: boolean }[];
  };

  /* 6. Selected impact */
  impact: {
    kicker: string;
    headline: string;
    sub: string;
    contributionLabel: string;
    roleLabel: string;
    items: { title: string; contribution: string; role: string }[];
    note: string;
    clientsTitle: string;
    clients: string[];
    clientsNote: string;
  };

  /* 7. Selected case studies */
  casesTeaser: { kicker: string; headline: string; sub: string; viewAll: string; view: string };

  /* 8. Leadership philosophy */
  philosophy: {
    kicker: string;
    lines: [string, string, string];
    statement: string;
    pillars: { title: string; body: string }[];
  };

  /* 9. Insights */
  insights: {
    kicker: string;
    headline: string;
    sub: string;
    topicsLabel: string;
    topics: string[];
    featureLabel: string;
    featureTitle: string;
    featureIntro: string;
    labels: { problem: string; outcome: string; detail: string };
    items: { num: string; type: string; title: string; problem: string; outcome: string; detail: string }[];
    closing: string;
    follow: string;
  };

  /* 10. Opportunities & contact */
  contact: {
    kicker: string;
    headline: string;
    sub: string;
    paths: {
      executive: { title: string; audience: string; body: string; cta: string };
      partnership: { title: string; audience: string; body: string; cta: string };
    };
    form: {
      name: string;
      company: string;
      email: string;
      position: string;
      collaboration: string;
      collaborationPlaceholder: string;
      collaborationOptions: string[];
      message: string;
      optional: string;
      required: string;
      sending: string;
      successTitle: string;
      successBody: string;
      error: string;
    };
    direct: string;
    email: string;
    whatsapp: string;
    linkedin: string;
    profile: string;
    profileCta: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
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
    discipline: string;
    context: string;
    overview: string;
    impact: string;
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

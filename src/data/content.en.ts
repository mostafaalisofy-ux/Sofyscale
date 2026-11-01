import type { Content } from './types';

const description =
  'Building brands, scaling agencies, and driving measurable growth across Saudi Arabia and Egypt since 2010.';

export const en: Content = {
  meta: {
    title: 'Mostafa Sofy · Marketing Leader · Growth Strategist · Agency Builder',
    description,
    caseIndexTitle: 'Case Studies · Real campaigns. Real numbers. · Mostafa Sofy',
    caseIndexDescription:
      '18 anonymized engagements across MENA. Live ad accounts. Live analytics. Names confidential, numbers documented.',
  },
  name: 'Mostafa Sofy',
  role: 'Marketing Leader · Growth Strategist · Agency Builder',
  locations: 'Riyadh · Cairo',
  nav: {
    about: 'About',
    cases: 'Case Studies',
    career: 'Career',
    results: 'Results',
    faq: 'FAQ',
    contact: 'Contact',
  },
  ctaPrimary: 'Book a Strategic Session',
  ctaSecondary: 'View Case Studies',

  hero: {
    eyebrow: 'Currently leading Steps · Saudi Arabia',
    h1: 'Sofy.',
    sub: 'Marketing Leader and Growth Strategist',
    body: description,
    chips: [
      { value: '15+', label: 'Years' },
      { value: '13x', label: 'Peak ROAS' },
      { value: 'SAR 24M+', label: 'single-brand revenue' },
    ],
    badges: [
      { value: '15+ Years', label: 'Regional leadership' },
      { value: 'KSA · EG', label: 'Multi-market' },
    ],
    portraitAlt: 'Portrait of Mostafa Sofy',
  },

  about: {
    kicker: 'About',
    headline: 'A regional operator building measurable growth.',
    paragraphs: [
      "I'm Sofy, a marketing and business growth leader with 15+ years of experience across digital marketing, performance marketing, business development, and agency leadership.",
      'Throughout my career, I have led growth strategies, managed regional operations, built high-performing teams, and developed marketing systems that deliver measurable business impact across competitive markets.',
      'My experience spans Saudi Arabia and Egypt, working with brands across retail, FMCG, hospitality, real estate, technology, e-commerce, and lifestyle sectors.',
    ],
    stats: [
      { value: '15+', label: 'Years Experience' },
      { value: '4', label: 'Markets', note: 'KSA · EG · Libya · GCC' },
      { value: '20+', label: 'Industries Served' },
      { value: '18', label: 'Case Studies' },
    ],
    portraitAlt: 'Mostafa Sofy, marketing and growth leader',
  },

  expertise: {
    kicker: 'Expertise',
    headline: 'The disciplines behind every result.',
    items: [
      { title: 'Performance Marketing', body: 'ROI-focused campaigns, full-funnel optimization, and acquisition systems built to scale.' },
      { title: 'Growth Strategy', body: 'Strategic roadmaps that align brand, product, and revenue.' },
      { title: 'Agency Leadership', body: 'Operating and scaling regional agencies and creative teams.' },
      { title: 'Business Development', body: 'Opening markets, building pipelines, closing partnerships.' },
      { title: 'Brand Positioning', body: 'Sharp narratives that win competitive markets.' },
      { title: 'Media Buying', body: 'Cross-channel buying with measurable efficiency.' },
      { title: 'Team Building', body: 'Recruiting and leading high-performance teams.' },
      { title: 'Market Expansion', body: 'Cross-border launches between KSA and Egypt.' },
    ],
  },

  ai: {
    kicker: 'AI in Growth',
    headline: 'Marketing operations, engineered with AI in the loop.',
    intro:
      'Five operating patterns I have implemented inside live performance environments. None of these are prompts. They are systems running inside ad accounts, reporting pipelines, and creative ops every day.',
    labels: { problem: 'Problem', outcome: 'Outcome', detail: 'How it works' },
    items: [
      {
        num: '01',
        type: 'System',
        title: 'Creative testing at agency scale.',
        problem:
          'Manual creative production caps testing volume at 5–10 variants per week, which starves the algorithm and stalls compounding.',
        outcome:
          'CPM compression and faster winner detection. The brand exits the learning phase in days, not weeks.',
        detail:
          'An AI-assisted creative pipeline that takes a winning angle and produces 30–50 brief-ready variants weekly across hooks, formats, and aspect ratios. Briefs auto-generate from past winners using Mixpanel drop-off signals as input.',
      },
      {
        num: '02',
        type: 'Pattern',
        title: 'Reporting that writes insights, not rows.',
        problem: 'Marketing teams burn 6–10 hours a week assembling reports that nobody reads.',
        outcome:
          'Weekly reporting collapses from hours to minutes. Leadership reads actual insights, not dashboards.',
        detail:
          'Reporting layer that pulls from GA4, Meta, TikTok, and Klaviyo, then runs the data through a Claude or GPT-4 layer that flags anomalies, surfaces creative fatigue, and writes the executive summary in plain language.',
      },
      {
        num: '03',
        type: 'System',
        title: 'Performance ops copilots inside the ad account.',
        problem: 'Senior media buyers spend 60% of their time on monitoring instead of strategy.',
        outcome:
          'Buyers act on signal, not noise. Spend efficiency stays inside the target band without the late-night account-checking.',
        detail:
          'A monitoring agent watches campaigns against ROAS, CPA, and frequency thresholds. When anything crosses a guardrail, it pushes a Slack alert with the diagnosis and a recommended action: pause, scale, refresh, or shift budget.',
      },
      {
        num: '04',
        type: 'Pattern',
        title: 'Content briefs generated from performance data.',
        problem:
          'Content teams brief from intuition. Performance teams measure after the fact. The two functions never align.',
        outcome:
          "Content production aligned to what's working in paid, in real time. The funnel stops leaking between teams.",
        detail:
          'A workflow that reads winning ad creatives, scrapes top-converting hooks, then auto-generates content briefs for the content team, formatted to their actual brief template.',
      },
      {
        num: '05',
        type: 'System',
        title: 'First-party data activation through AI matching.',
        problem:
          'First-party customer data sits in the CRM, disconnected from the ad platforms where it matters most.',
        outcome:
          'Retargeting becomes a precision instrument, not a tax. CAC drops, LTV-to-CAC widens.',
        detail:
          'An AI-enabled enrichment layer that segments customers by behavioural signal, then pushes hashed audiences into Meta, Google, and TikTok via Conversions API. High-LTV cohorts get scaled retargeting, low-intent ones get suppressed.',
      },
    ],
    closing:
      'None of these are theoretical. Each one was built inside a live engagement, against a live P&L, under a real budget.',
  },

  stack: {
    kicker: 'Operating Stack',
    headline: 'The tools behind the work.',
    intro:
      'The platforms, data layers, and AI infrastructure I operate daily. Mastery of a stack is not about logos on a slide. It is about knowing which tool to use, when, and what it can and cannot do.',
    groups: [
      { name: 'Paid Media', desc: 'Cross-platform paid acquisition, from setup to scale', tools: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Snapchat Ads', 'X Ads', 'LinkedIn Ads'] },
      { name: 'Analytics & Attribution', desc: 'Measurement infrastructure that ties spend to revenue', tools: ['GA4', 'Mixpanel', 'Amplitude', 'Triple Whale', 'Hyros', 'Looker Studio'] },
      { name: 'Lifecycle & CRM', desc: 'Retention engines and customer data orchestration', tools: ['Klaviyo', 'Customer.io', 'HubSpot', 'Salesforce', 'Mailchimp', 'Sendinblue'] },
      { name: 'Data Infrastructure', desc: 'The pipes that move data from ad accounts to insight', tools: ['BigQuery', 'Snowflake', 'Supermetrics', 'Fivetran', 'Funnel.io', 'Power BI'] },
      { name: 'AI & Automation', desc: 'The intelligence layer running inside daily marketing ops', tools: ['OpenAI API', 'Claude API', 'n8n', 'Make', 'Zapier', 'Replit'] },
      { name: 'Creative & Content', desc: 'Production stack for the creative throughput that performance demands', tools: ['Figma', 'Canva', 'CapCut', 'Runway', 'Adobe Creative Cloud', 'Notion'] },
    ],
    footer: ['Primary', 'MENA', 'Bilingual Operations', 'Arabic + English'],
  },

  career: {
    kicker: 'Career',
    headline: 'A career built across regions, brands, and disciplines.',
    currentLabel: 'Current',
    items: [
      { company: 'Steps', market: 'KSA', desc: 'Regional operations & growth leadership.', role: 'Managing Director', current: true },
      { company: 'Infinity Performance', market: 'KSA', desc: 'Performance marketing leadership.', role: 'Country Manager' },
      { company: 'BirdMilk Advertising Agency', market: 'KSA / EG', desc: 'Agency leadership & client growth.' },
      { company: 'Hive Analytics', market: 'EG', desc: 'Data-driven marketing strategy.' },
      { company: 'NSM+', market: 'EG', desc: 'Digital marketing & business development.' },
      { company: 'Viral Corners', market: 'EG', desc: 'Performance & social media growth.' },
      { company: 'Al-Jazeera Paints', market: 'KSA', desc: 'Brand & marketing leadership.' },
      { company: 'Yellow Pages Egypt', market: 'EG', desc: 'Digital media & business growth.' },
    ],
  },

  clients: {
    kicker: 'Selected Clients',
    headline: 'Selected Clients',
    names: ['Buffalo Burger', 'Juhayna', 'Edita Foods', 'Costa Coffee', 'Toyota', 'BYD', 'DAMAC', 'STC', 'QNB', 'Air Arabia', 'Radisson Blu', 'Saudi GEA'],
    note: 'Full roster spans 200+ brands',
  },

  regional: {
    kicker: 'Regional',
    headline: 'Building growth across Saudi Arabia & Egypt.',
    tagline: 'Two markets · One operator',
    items: [
      { title: 'Saudi market experience', body: "Deep operational experience inside Saudi Arabia's competitive marketing landscape." },
      { title: 'Regional operations', body: 'Leading cross-border teams between KSA and Egypt.' },
      { title: 'Performance-driven growth', body: 'Measurable ROI across performance, brand, and acquisition channels.' },
      { title: 'Multi-market leadership', body: 'Adapting strategy to distinct consumer behaviors and media ecosystems.' },
      { title: 'Team management', body: 'Building high-output marketing and agency teams.' },
    ],
  },

  results: {
    kicker: 'Results',
    headline: 'Numbers behind the work.',
    stats: [
      { value: '15+', label: 'Years Experience', note: 'Leading growth since 2010.' },
      { value: '4', label: 'Regional Markets', note: 'KSA · EG · Libya · GCC.' },
      { value: '20+', label: 'Industries Served', note: 'F&B · Retail · Real Estate · Automotive · Healthcare · Finance · Telecom · Hospitality & more.' },
      { value: '13x', label: 'Peak ROAS', note: 'Highest recorded campaign return.' },
      { value: 'SAR 24M+', label: 'Peak Campaign Revenue', note: 'Single-brand revenue in 11 months' },
    ],
    pillars: [
      { kicker: 'Scope', title: 'Regional Leadership', body: 'Cross-market operations across KSA & Egypt.' },
      { kicker: 'Teams', title: 'Built & Led High-Output Teams', body: 'High-output marketing & agency teams.' },
      { kicker: 'Approach', title: 'Growth Systems, Performance Discipline', body: 'Performance-driven, never ad-hoc.' },
    ],
    industries: ['Retail', 'Fashion', 'FMCG', 'Hospitality', 'Real Estate', 'E-commerce', 'Technology', 'Lifestyle'],
  },

  casesTeaser: {
    kicker: 'Case Studies',
    headline: 'Real campaigns. Real numbers.',
    sub: '18 anonymized engagements across MENA. Live ad accounts. Live analytics. Names confidential, numbers documented.',
    viewAll: 'View all 18 case studies',
  },

  sessions: {
    kicker: 'Strategic Sessions',
    headline: "Let's Build Your Next Growth Move",
    intro:
      "Whether you're scaling an agency, growing a brand, restructuring your marketing direction, or expanding into competitive markets, strategic clarity changes everything.",
    topicsLabel: 'Session topics',
    topics: [
      { title: 'Agency Growth Strategy', body: 'Scale operations, retention, and revenue.' },
      { title: 'Performance Marketing', body: 'Data-driven acquisition that compounds.' },
      { title: 'Saudi Market Expansion', body: 'Enter and win in the Gulf region.' },
      { title: 'Team Structure & Scaling', body: 'Build org charts that perform.' },
      { title: 'Marketing Leadership', body: 'Executive direction and fractional CMO.' },
      { title: 'Brand Positioning', body: 'Sharpen the narrative that converts.' },
      { title: 'Business Growth Systems', body: 'Operating systems for predictable growth.' },
      { title: 'Client Acquisition Strategy', body: 'Pipelines built for premium clients.' },
    ],
    scarcityTag: 'By application · Limited availability',
    scarcity:
      'Due to ongoing regional projects and leadership commitments, only a limited number of strategic sessions are available each month.',
  },

  form: {
    title: 'Apply for a strategic session',
    stepOf: (n, total) => `Step ${n} of ${total}`,
    steps: ['About your business', 'Main challenge / goal', 'Your details'],
    businessQ: 'What best describes your business?',
    businessOptions: ['Agency / Studio', 'Brand / E-commerce', 'Startup / Founder', 'Enterprise / Corporate', 'Other'],
    marketQ: 'What market are you operating in?',
    marketOptions: ['Saudi Arabia', 'Egypt', 'GCC region', 'MENA', 'Global', 'Other'],
    challengeQ: 'What is your main challenge or goal?',
    budgetQ: 'Budget range',
    name: 'Name',
    email: 'Email',
    whatsapp: 'WhatsApp',
    company: 'Company',
    message: 'Short message',
    optional: 'optional',
    next: 'Continue',
    back: 'Back',
    submit: 'Submit application',
    sending: 'Sending',
    successTitle: 'Application received.',
    successBody: 'Thank you. I review every application personally and will reply by email or WhatsApp.',
    error: 'Something went wrong. Please try again, or reach out directly on WhatsApp.',
    required: 'Please complete this step to continue.',
  },

  faq: {
    kicker: 'FAQ',
    headline: 'Questions before we talk.',
    sub: 'The questions founders, CEOs, and marketing leaders ask before booking a strategic session.',
    items: [
      { q: 'Who is this for?', a: 'Founders, CEOs, agency owners, and marketing leaders operating in Saudi Arabia, Egypt, or the wider GCC who need senior strategic clarity, not another freelancer or generalist consultant.' },
      { q: 'What happens in a strategic session?', a: 'A focused conversation about your current growth situation, the specific bottlenecks, and a clear next-step plan. No generic decks. No filler. You leave with direction you can act on inside the same week.' },
      { q: 'Do you work with brands, or only agencies?', a: 'Both. Brand-side leadership and agency-side scaling are two sides of the same operating discipline. Each session is shaped around your specific position in the market.' },
      { q: 'Can sessions be one-off or ongoing?', a: 'Both formats work. Some engagements are a single high-leverage session for a critical decision. Others move into ongoing advisory or fractional leadership for a defined period.' },
      { q: 'Which markets do you cover?', a: 'Primary focus is Saudi Arabia and Egypt, with broader experience across the GCC and the wider MENA region. Cross-border launches between markets are a core specialty.' },
      { q: 'What languages do you operate in?', a: 'Arabic and English, fluently across written and spoken work. All deliverables can be produced in either language or both.' },
      { q: 'How fast can we start?', a: 'Strategic sessions are scheduled within 7 to 14 days, depending on availability. A limited number of slots are released each month.' },
      { q: 'Is everything confidential?', a: 'Yes. All conversations, materials, and information shared are treated as fully confidential. NDAs available on request.' },
    ],
  },

  contact: {
    kicker: 'Contact',
    headline: "Let's build what's next.",
    sub: 'Open to executive leadership, strategic advisory, and growth partnerships across Saudi Arabia and Egypt.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    profile: 'Executive Profile',
    profileCta: 'Download PDF',
  },

  casesPage: {
    kicker: 'Case Studies',
    headline: 'Real campaigns. Real numbers.',
    sub: '18 anonymized engagements across MENA. Live ad accounts. Live analytics. Names confidential, numbers documented.',
    stats: [
      { value: '18', label: 'Engagements' },
      { value: '4', label: 'Markets', note: 'KSA · EG · LY · GCC' },
      { value: '11', label: 'Industries', note: 'case sample' },
      { value: '13x', label: 'Peak ROAS' },
    ],
    filters: { market: 'Market', discipline: 'Discipline', industry: 'Industry', all: 'All', reset: 'Reset filters' },
    results: (n) => `${n} ${n === 1 ? 'case study' : 'case studies'}`,
    empty: 'No case studies match this combination. Try widening a filter.',
    disclaimer:
      'All figures are sourced from live ad accounts and analytics platforms. Client identities and brand names are kept confidential. NDAs available on request.',
    read: 'Read case study',
  },

  caseDetail: {
    back: 'All case studies',
    market: 'Market',
    category: 'Category',
    metrics: 'Key metrics',
    summary: 'Summary',
    prev: 'Previous',
    next: 'Next',
    more: 'More case studies',
    ctaTitle: "Let's Build Your Next Growth Move",
    ctaBody:
      "Whether you're scaling an agency, growing a brand, restructuring your marketing direction, or expanding into competitive markets, strategic clarity changes everything.",
  },

  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    langSwitch: 'ع',
    langSwitchLabel: 'اقرأ بالعربية',
    whatsappLabel: 'Chat on WhatsApp',
    backToTop: 'Back to top',
    rights: 'All rights reserved.',
    notFoundTitle: 'Page not found.',
    notFoundBody: 'The page you are looking for has moved or no longer exists.',
    home: 'Back to home',
    thanksTitle: 'Application received.',
    thanksBody: 'Thank you. I review every application personally and will reply by email or WhatsApp.',
  },
};

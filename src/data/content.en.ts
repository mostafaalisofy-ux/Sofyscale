import type { Content } from './types';

/*
 * Sources: site-content.md, Mostafa-Sofy-Executive-Profile.pdf (2026) and the
 * positioning brief. Anything that still needs sign-off is listed in CONFIRM.md.
 */

export const en: Content = {
  meta: {
    title: 'Mostafa Sofy · Marketing Leadership. Business Growth.',
    description:
      'Mostafa Sofy is a regional marketing and business growth leader with 15+ years across Saudi Arabia, the Gulf and Egypt. Managing Director, Steps.',
    caseIndexTitle: 'Case Studies · Real campaigns. Real numbers. · Mostafa Sofy',
    caseIndexDescription:
      '18 anonymized engagements across MENA. Live ad accounts. Live analytics. Names confidential, numbers documented.',
  },
  name: 'Mostafa Sofy',
  role: 'Marketing Leader · Growth Strategist · Agency Builder',
  locations: 'Riyadh · Cairo',
  nav: {
    home: 'Home',
    about: 'About',
    leadership: 'Leadership',
    impact: 'Impact',
    cases: 'Case Studies',
    insights: 'Insights',
    contact: 'Contact',
    profile: 'Executive Profile',
  },
  ctaPrimary: 'Discuss an Opportunity',
  ctaSecondary: 'View Case Studies',

  hero: {
    roles: ['Marketing Leader', 'Growth Strategist', 'Agency Builder'],
    title: ['Marketing Leadership.', 'Business Growth.'],
    sub: 'Building teams, scaling businesses, and turning strategy into measurable impact.',
    ctaExplore: 'Explore My Experience',
    ctaDiscuss: 'Discuss an Opportunity',
    current: 'Managing Director, Steps · Riyadh',
    portraitAlt: 'Portrait of Mostafa Sofy',
  },

  snapshot: {
    label: 'Executive snapshot',
    stats: [
      { value: '15+', label: 'Years of operating experience', note: 'Leading growth since 2010' },
      { value: '8+', label: 'Senior leadership roles', note: 'Managing Director · Country Manager · Head of BD' },
      { value: '18', label: 'Documented case studies', note: 'Live ad accounts, names confidential' },
      { value: 'KSA · UAE · EG', label: 'Regional markets', note: 'Gulf-focused, Egypt-rooted' },
    ],
  },

  about: {
    kicker: 'About Sofy',
    headline: 'A marketing leader with a business mindset.',
    intro:
      "I'm Mostafa Sofy, a regional marketing and growth leader with 15+ years of operating experience across Saudi Arabia, the Gulf and Egypt.",
    paragraphs: [
      'My background spans performance marketing, business development and agency leadership, across industries from paints and publishing to advertising, analytics and corporate services.',
      'Today I lead regional operations as Managing Director of Steps in Riyadh, after serving as Country Manager for Infinity Performance and Infinity Corp. The work sits where marketing meets the P&L: entering new markets, structuring operations, recruiting senior talent, and building the systems that turn marketing investment into durable growth.',
    ],
    quote: 'I build the operating systems that move brands from campaigns to compounding growth.',
    principles: [
      { title: 'Strategy that answers to the business', body: 'Market-specific growth plans grounded in local commercial reality.' },
      { title: 'Teams built to perform', body: 'Recruiting, structuring and leading senior, cross-functional regional teams.' },
      { title: 'Systems that compound', body: 'Reporting, media and pipeline systems that compound month over month.' },
    ],
    portraitAlt: 'Mostafa Sofy at his desk in Riyadh at night',
    more: 'More about my journey',
  },

  leadership: {
    kicker: 'Leadership & Expertise',
    headline: 'Capabilities that drive growth.',
    sub: 'A blend of strategic, commercial and operational experience to build, lead and scale marketing and business operations.',
    pillars: [
      {
        title: 'Marketing Leadership',
        summary: 'Setting direction, and building the function that delivers it.',
        points: ['Marketing strategy and direction', 'Marketing team leadership', 'Strategic planning', 'Marketing operations', 'Organizational alignment'],
      },
      {
        title: 'Business Growth',
        summary: 'Turning market opportunity into durable revenue lines.',
        points: ['Business development', 'Growth strategy', 'Commercial thinking', 'Market expansion', 'Opportunity development'],
      },
      {
        title: 'Agency Management',
        summary: 'Operating agencies end to end, from commercial pipeline to delivery and retention.',
        points: ['Agency operations', 'Client relationship management', 'Team development', 'Resource planning', 'Operational processes', 'Business performance'],
      },
      {
        title: 'Performance & Digital',
        summary: 'Measurable, ROI-led acquisition systems across paid media and digital channels.',
        points: ['Performance marketing', 'Paid media strategy', 'Digital marketing ecosystems', 'Measurement and optimization', 'Data-informed decision-making'],
      },
      {
        title: 'Brand & Market Strategy',
        summary: 'Sharpening the narrative, and taking it to market.',
        points: ['Brand positioning', 'Go-to-market strategy', 'Market localization', 'Integrated marketing', 'Regional market understanding'],
      },
    ],
    stackTitle: 'The operating stack',
    stack: [
      { name: 'Paid Media', tools: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Snapchat Ads', 'X Ads', 'LinkedIn Ads'] },
      { name: 'Analytics & Attribution', tools: ['GA4', 'Mixpanel', 'Amplitude', 'Triple Whale', 'Hyros', 'Looker Studio'] },
      { name: 'Lifecycle & CRM', tools: ['Klaviyo', 'Customer.io', 'HubSpot', 'Salesforce', 'Mailchimp', 'Sendinblue'] },
      { name: 'Data Infrastructure', tools: ['BigQuery', 'Snowflake', 'Supermetrics', 'Fivetran', 'Funnel.io', 'Power BI'] },
      { name: 'AI & Automation', tools: ['OpenAI API', 'Claude API', 'n8n', 'Make', 'Zapier', 'Replit'] },
      { name: 'Creative & Content', tools: ['Figma', 'Canva', 'CapCut', 'Runway', 'Adobe Creative Cloud', 'Notion'] },
    ],
  },

  career: {
    kicker: 'Career Journey',
    headline: 'A progressive leadership path.',
    sub: 'A fifteen-year arc through publishing, paints, advertising, analytics and performance, building toward regional managing director.',
    currentLabel: 'Current',
    presentLabel: 'Present',
    profileCta: 'Download the Executive Profile',
    items: [
      { company: 'Steps', market: 'Riyadh · KSA', role: 'Managing Director', desc: 'Regional operations & growth leadership.', from: 2025, current: true },
      { company: 'Infinity Performance', market: 'KSA', role: 'Country Manager', desc: 'Performance marketing leadership.', from: 2023, to: 2026 },
      { company: 'Infinity Corp', market: 'KSA', role: 'Country Manager & Head of Business Development', from: 2023, to: 2025 },
      { company: 'BirdMilk Advertising Agency', market: 'Egypt', role: 'Head of Business Development', desc: 'Agency leadership & client growth.', from: 2022, to: 2023 },
      { company: 'Hive Analytics', market: 'Egypt', role: 'Business Development Manager', desc: 'Data-driven marketing strategy.', from: 2021, to: 2022 },
      { company: 'NSM+', market: 'Egypt', role: 'Business Development Manager', desc: 'Digital marketing & business development.', from: 2018, to: 2021 },
      { company: 'Viral Corners', market: 'Egypt', role: 'Sales Manager', desc: 'Performance & social media growth.', from: 2016, to: 2018 },
      { company: 'Al-Jazeera Paints', market: 'KSA · Egypt', role: 'Senior Projects Business Development', desc: 'Brand & marketing leadership.', from: 2014, to: 2016 },
      { company: 'Yellow Pages Egypt', market: 'Egypt', role: 'Senior Business Developer', desc: 'Digital media & business growth.', from: 2010, to: 2014 },
    ],
  },

  impact: {
    kicker: 'Selected Impact',
    headline: 'Turning strategy into business impact.',
    sub: 'Selected operating themes drawn from regional leadership across agencies, performance teams and business development organisations.',
    contributionLabel: 'Contribution',
    roleLabel: 'My role',
    items: [
      {
        title: 'Business Development',
        contribution: 'Architected strategic partnerships that unlocked new verticals and recurring revenue.',
        role: 'Senior business development mandates across agencies and corporate services.',
      },
      {
        title: 'Operational Growth',
        contribution: 'Installed reporting, forecasting and pipeline discipline across regional units.',
        role: 'Country-level P&L and operational leadership.',
      },
      {
        title: 'Marketing Transformation',
        contribution: 'Delivered measurable, performance-focused marketing systems with ROI accountability.',
        role: 'Led regional marketing and performance operations.',
      },
      {
        title: 'Team Leadership',
        contribution: 'Built and managed high-performing, cross-functional teams across sales, media and delivery.',
        role: 'Recruited, structured and led senior regional teams.',
      },
      {
        title: 'Market Expansion',
        contribution: 'Developed scalable growth strategies adapted to Saudi and Egyptian market dynamics.',
        role: 'Regional expansion and market entry as country manager and managing director.',
      },
      {
        title: 'Performance Improvement',
        contribution: 'Performance and media buying at scale, with campaign outcomes documented in 18 case studies.',
        role: 'Strategy and senior oversight. Execution by the teams and agencies involved.',
      },
    ],
    note: 'Campaign figures in the case studies come from live ad accounts and reflect the work of the teams and agencies involved.',
    clientsTitle: 'Selected brands across the portfolio',
    clients: ['Buffalo Burger', 'Juhayna', 'Edita Foods', 'Costa Coffee', 'Toyota', 'BYD', 'DAMAC', 'STC', 'QNB', 'Air Arabia', 'Radisson Blu', 'Saudi GEA'],
    clientsNote: 'Full roster spans 200+ brands',
  },

  casesTeaser: {
    kicker: 'Selected Case Studies',
    headline: 'Real campaigns. Real numbers.',
    sub: '18 anonymized engagements across MENA. Live ad accounts. Live analytics. Names confidential, numbers documented.',
    viewAll: 'Explore all 18 case studies',
    view: 'View case study',
  },

  philosophy: {
    kicker: 'Leadership Philosophy',
    lines: ['Strategy creates direction.', 'People create momentum.', 'Execution creates impact.'],
    statement:
      "Marketing is not about random campaigns. It's about building the right strategy, executing with precision, and creating systems that move brands forward.",
    pillars: [
      { title: 'Strategic clarity', body: 'Turn complexity into a clear and actionable direction.' },
      { title: 'People & culture', body: 'Build and empower teams that deliver and grow.' },
      { title: 'Disciplined execution', body: 'Convert strategy into measurable business results.' },
    ],
  },

  insights: {
    kicker: 'Insights & Perspectives',
    headline: 'Ideas on marketing, growth and leadership.',
    sub: 'The themes I think and write about, and one operating perspective in full.',
    topicsLabel: 'Editorial themes',
    topics: ['Marketing Leadership', 'Business Growth', 'Agency Management', 'Saudi Market & Regional Business', 'Performance Marketing', 'AI & Marketing Transformation'],
    featureLabel: 'Perspective · AI & Marketing Transformation',
    featureTitle: 'Marketing operations, engineered with AI in the loop.',
    featureIntro:
      'Five operating patterns I have implemented inside live performance environments. None of these are prompts. They are systems running inside ad accounts, reporting pipelines, and creative ops every day.',
    labels: { problem: 'Problem', outcome: 'Outcome', detail: 'How it works' },
    items: [
      {
        num: '01',
        type: 'System',
        title: 'Creative testing at agency scale.',
        problem: 'Manual creative production caps testing volume at 5–10 variants per week, which starves the algorithm and stalls compounding.',
        outcome: 'CPM compression and faster winner detection. The brand exits the learning phase in days, not weeks.',
        detail: 'An AI-assisted creative pipeline that takes a winning angle and produces 30–50 brief-ready variants weekly across hooks, formats, and aspect ratios. Briefs auto-generate from past winners using Mixpanel drop-off signals as input.',
      },
      {
        num: '02',
        type: 'Pattern',
        title: 'Reporting that writes insights, not rows.',
        problem: 'Marketing teams burn 6–10 hours a week assembling reports that nobody reads.',
        outcome: 'Weekly reporting collapses from hours to minutes. Leadership reads actual insights, not dashboards.',
        detail: 'Reporting layer that pulls from GA4, Meta, TikTok, and Klaviyo, then runs the data through a Claude or GPT-4 layer that flags anomalies, surfaces creative fatigue, and writes the executive summary in plain language.',
      },
      {
        num: '03',
        type: 'System',
        title: 'Performance ops copilots inside the ad account.',
        problem: 'Senior media buyers spend 60% of their time on monitoring instead of strategy.',
        outcome: 'Buyers act on signal, not noise. Spend efficiency stays inside the target band without the late-night account-checking.',
        detail: 'A monitoring agent watches campaigns against ROAS, CPA, and frequency thresholds. When anything crosses a guardrail, it pushes a Slack alert with the diagnosis and a recommended action: pause, scale, refresh, or shift budget.',
      },
      {
        num: '04',
        type: 'Pattern',
        title: 'Content briefs generated from performance data.',
        problem: 'Content teams brief from intuition. Performance teams measure after the fact. The two functions never align.',
        outcome: "Content production aligned to what's working in paid, in real time. The funnel stops leaking between teams.",
        detail: 'A workflow that reads winning ad creatives, scrapes top-converting hooks, then auto-generates content briefs for the content team, formatted to their actual brief template.',
      },
      {
        num: '05',
        type: 'System',
        title: 'First-party data activation through AI matching.',
        problem: 'First-party customer data sits in the CRM, disconnected from the ad platforms where it matters most.',
        outcome: 'Retargeting becomes a precision instrument, not a tax. CAC drops, LTV-to-CAC widens.',
        detail: 'An AI-enabled enrichment layer that segments customers by behavioural signal, then pushes hashed audiences into Meta, Google, and TikTok via Conversions API. High-LTV cohorts get scaled retargeting, low-intent ones get suppressed.',
      },
    ],
    closing: 'None of these are theoretical. Each one was built inside a live engagement, against a live P&L, under a real budget.',
    follow: 'Follow the conversation on LinkedIn',
  },

  contact: {
    kicker: "Let's Connect",
    headline: 'Explore the right opportunity.',
    sub: "Whether it's a leadership role or a strategic business collaboration, I'm open to meaningful conversations across the Gulf and Egypt.",
    paths: {
      executive: {
        title: 'Executive Opportunities',
        audience: 'For organizations and recruiters',
        body: 'Exploring senior marketing leadership or a business leadership appointment.',
        cta: 'Discuss an Executive Opportunity',
      },
      partnership: {
        title: 'Strategic Partnerships',
        audience: 'For founders and business owners',
        body: 'Looking to build, scale or transform marketing and growth.',
        cta: 'Discuss a Strategic Partnership',
      },
    },
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Professional email',
      position: 'Position or opportunity',
      collaboration: 'Type of collaboration',
      collaborationPlaceholder: 'Select one',
      collaborationOptions: [
        'Agency Growth Strategy',
        'Performance Marketing',
        'Saudi Market Expansion',
        'Team Structure & Scaling',
        'Marketing Leadership (fractional)',
        'Brand Positioning',
        'Business Growth Systems',
        'Client Acquisition Strategy',
        'Other',
      ],
      message: 'Message',
      optional: 'optional',
      required: 'Please complete the highlighted fields.',
      sending: 'Sending',
      successTitle: 'Message received.',
      successBody: 'Thank you. I read every message personally and will reply by email.',
      error: 'Something went wrong and your message was not sent. Please try again, or reach out on WhatsApp.',
    },
    direct: 'Or reach out directly',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    profile: 'Executive Profile',
    profileCta: 'Download PDF',
    faqTitle: 'Questions before we talk',
    faq: [
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

  casesPage: {
    kicker: 'Case Studies',
    headline: 'Real campaigns. Real numbers.',
    sub: '18 anonymized engagements across MENA. Live ad accounts. Live analytics. Names confidential, numbers documented.',
    stats: [
      { value: '18', label: 'Engagements' },
      { value: 'GCC + EG', label: 'Markets', note: 'KSA · UAE · Egypt & beyond' },
      { value: '11', label: 'Industries', note: 'case sample' },
      { value: '13x', label: 'Peak ROAS' },
    ],
    filters: { market: 'Market', discipline: 'Discipline', industry: 'Industry', all: 'All', reset: 'Reset filters' },
    results: (n) => `${n} ${n === 1 ? 'case study' : 'case studies'}`,
    empty: 'No case studies match this combination. Try widening a filter.',
    disclaimer:
      'All figures are sourced from live ad accounts and analytics platforms. Client identities and brand names are kept confidential. NDAs available on request.',
    read: 'View case study',
  },

  caseDetail: {
    back: 'All case studies',
    market: 'Market',
    category: 'Category',
    discipline: 'Discipline',
    context: 'Business context',
    overview: 'Overview',
    impact: 'Business impact',
    prev: 'Previous',
    next: 'Next',
    more: 'More case studies',
    ctaTitle: 'Explore the right opportunity.',
    ctaBody: "Whether it's a leadership role or a strategic business collaboration, I'm open to meaningful conversations across the Gulf and Egypt.",
  },

  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    langSwitchLabel: 'اقرأ بالعربية',
    whatsappLabel: 'Chat on WhatsApp',
    backToTop: 'Back to top',
    rights: 'All rights reserved.',
    notFoundTitle: 'Page not found.',
    notFoundBody: 'The page you are looking for has moved or no longer exists.',
    home: 'Back to home',
    thanksTitle: 'Message received.',
    thanksBody: 'Thank you. I read every message personally and will reply by email.',
  },
};

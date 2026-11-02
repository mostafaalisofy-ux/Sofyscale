import type { Lang } from './types';

type T = { en: string; ar: string };

export type MarketKey = 'ksa' | 'egypt' | 'libya' | 'gcc';
export type DisciplineKey = 'performance' | 'seo' | 'leadgen' | 'fnb' | 'influencer';
export type IndustryKey =
  | 'ecommerce' | 'electronics' | 'fragrance' | 'beauty' | 'fashion' | 'healthcare'
  | 'fnb' | 'education' | 'furniture' | 'fooddelivery' | 'toys' | 'retail';

export interface Metric { value: string | T; label?: T }

export interface CaseStudy {
  num: string;
  slug: string;
  title: T;
  category: T;
  market: T;
  headline: T;
  metrics: Metric[];
  summary: T;
  markets: MarketKey[];
  disciplines: DisciplineKey[];
  industries: IndustryKey[];
  /** Cover photo in /public/assets/cases. Cases without one get a typographic cover. */
  cover?: string;
  /*
   * Narrative fields for the full case-study format. Rendered only when filled in.
   * Not yet supplied for any case; see CONFIRM.md.
   */
  challenge?: T;
  role?: T;
  approach?: T;
  execution?: T;
}

export const FILTERS: {
  market: { key: MarketKey; label: T }[];
  discipline: { key: DisciplineKey; label: T }[];
  industry: { key: IndustryKey; label: T }[];
} = {
  market: [
    { key: 'ksa', label: { en: 'KSA', ar: 'السعودية' } },
    { key: 'egypt', label: { en: 'Egypt', ar: 'مصر' } },
    { key: 'libya', label: { en: 'Libya', ar: 'ليبيا' } },
    { key: 'gcc', label: { en: 'GCC', ar: 'الخليج' } },
  ],
  discipline: [
    { key: 'performance', label: { en: 'Performance', ar: 'الأداء' } },
    { key: 'seo', label: { en: 'SEO', ar: 'تحسين محركات البحث' } },
    { key: 'leadgen', label: { en: 'Lead Gen', ar: 'توليد العملاء المحتملين' } },
    { key: 'fnb', label: { en: 'F&B', ar: 'الأغذية والمشروبات' } },
    { key: 'influencer', label: { en: 'Influencer Marketing', ar: 'التسويق عبر المؤثرين' } },
  ],
  industry: [
    { key: 'ecommerce', label: { en: 'E-commerce', ar: 'التجارة الإلكترونية' } },
    { key: 'electronics', label: { en: 'Electronics', ar: 'الإلكترونيات' } },
    { key: 'fragrance', label: { en: 'Fragrance', ar: 'العطور' } },
    { key: 'beauty', label: { en: 'Beauty', ar: 'التجميل' } },
    { key: 'fashion', label: { en: 'Fashion', ar: 'الأزياء' } },
    { key: 'healthcare', label: { en: 'Healthcare', ar: 'الرعاية الصحية' } },
    { key: 'fnb', label: { en: 'F&B', ar: 'الأغذية والمشروبات' } },
    { key: 'education', label: { en: 'Education', ar: 'التعليم' } },
    { key: 'furniture', label: { en: 'Furniture', ar: 'الأثاث' } },
    { key: 'fooddelivery', label: { en: 'Food Delivery', ar: 'توصيل الطعام' } },
    { key: 'toys', label: { en: 'Toys & Kids', ar: 'ألعاب الأطفال' } },
    { key: 'retail', label: { en: 'Retail', ar: 'التجزئة' } },
  ],
};

const KSA: T = { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' };
const EG: T = { en: 'Egypt', ar: 'مصر' };
const GCC: T = { en: 'GCC', ar: 'الخليج' };

const L = (en: string, ar: string): T => ({ en, ar });
const revenue = L('revenue', 'إيرادات');
const roas = L('ROAS', 'عائد على الإنفاق الإعلاني');
const orders = L('orders', 'طلب');
const reach = L('reach', 'وصول');
const impressions = L('impressions', 'ظهور');
const spend = L('spend', 'إنفاق');
const influencers = L('influencers', 'مؤثر');

export const CASES: CaseStudy[] = [
  {
    num: '01',
    slug: 'consumer-electronics-retailer',
    title: L('Consumer Electronics Retailer', 'متجر تجزئة للإلكترونيات الاستهلاكية'),
    category: L('E-commerce · Electronics · Performance', 'تجارة إلكترونية · إلكترونيات · أداء'),
    market: KSA,
    headline: L('SAR 8M in 6 months', '8 ملايين ريال خلال 6 أشهر'),
    metrics: [
      { value: 'SAR 2.96M', label: revenue },
      { value: '5.13x', label: roas },
      { value: '10.3K', label: L('conversions', 'تحويل') },
    ],
    summary: L(
      'A high-AOV electronics store scaled profitably with retention compounding paid performance.',
      'متجر إلكترونيات بمتوسط قيمة طلب مرتفع توسّع بربحية، فيما ضاعف الاحتفاظ بالعملاء أثر الأداء المدفوع.',
    ),
    markets: ['ksa'], disciplines: ['performance'], industries: ['ecommerce', 'electronics'],
  },
  {
    num: '02',
    slug: 'perfume-brand',
    title: L('Perfume Brand', 'علامة عطور'),
    category: L('E-commerce · Fragrance · Performance', 'تجارة إلكترونية · عطور · أداء'),
    market: KSA,
    headline: L('SAR 24M+ in 11 months', 'أكثر من 24 مليون ريال خلال 11 شهرًا'),
    metrics: [
      { value: 'SAR 24M+', label: revenue },
      { value: '90,000+', label: orders },
      { value: '8.41x', label: L('peak ROAS', 'أعلى عائد على الإنفاق الإعلاني') },
    ],
    summary: L(
      'A regional fragrance label scaled through a creator-led growth loop.',
      'علامة عطور إقليمية توسّعت عبر حلقة نمو يقودها صنّاع المحتوى.',
    ),
    markets: ['ksa'], disciplines: ['performance'], industries: ['ecommerce', 'fragrance'],
  },
  {
    num: '03',
    slug: 'cosmetics-brand-saudi-arabia',
    title: L('Cosmetics Brand', 'علامة مستحضرات تجميل'),
    category: L('E-commerce · Beauty · Performance', 'تجارة إلكترونية · تجميل · أداء'),
    market: KSA,
    headline: L('SAR 425K in 3 months at 10.5x ROAS', '425 ألف ريال خلال 3 أشهر بعائد 10.5x على الإنفاق الإعلاني'),
    metrics: [
      { value: 'SAR 425K', label: revenue },
      { value: '10.53x', label: roas },
      { value: '2,250', label: L('purchases', 'عملية شراء') },
    ],
    summary: L(
      'A new beauty line validated quickly through paid acquisition without burning budget on dead inventory.',
      'خط تجميل جديد أثبت جدواه سريعًا عبر الاستحواذ المدفوع، دون إهدار الميزانية على مخزون راكد.',
    ),
    markets: ['ksa'], disciplines: ['performance'], industries: ['ecommerce', 'beauty'],
  },
  {
    num: '04',
    slug: 'gen-z-fashion-brand',
    title: L('Gen-Z Fashion Brand', 'علامة أزياء للجيل Z'),
    category: L('E-commerce · Fashion · Performance', 'تجارة إلكترونية · أزياء · أداء'),
    market: KSA,
    headline: L('SAR 3.2M · 5,000+ orders', '3.2 مليون ريال · أكثر من 5,000 طلب'),
    metrics: [
      { value: 'SAR 3.21M', label: L('total sales', 'إجمالي المبيعات') },
      { value: '5,000+', label: orders },
      { value: 'SAR 413K', label: L('taxes processed', 'ضرائب تمت معالجتها') },
    ],
    summary: L(
      'A Gen-Z audience reached with tailored brand voice and scale conversion.',
      'الوصول إلى جمهور الجيل Z بنبرة علامة مصممة خصيصًا له، وتحويل على نطاق واسع.',
    ),
    markets: ['ksa'], disciplines: ['performance'], industries: ['ecommerce', 'fashion'],
  },
  {
    num: '05',
    slug: 'fashion-brand',
    title: L('Fashion Brand', 'علامة أزياء'),
    category: L('E-commerce · Fashion · Performance', 'تجارة إلكترونية · أزياء · أداء'),
    market: KSA,
    headline: L('6.49x average ROAS across the operation', 'متوسط عائد 6.49x على الإنفاق الإعلاني عبر كامل العمليات'),
    metrics: [
      { value: '6.49x', label: L('avg ROAS', 'متوسط العائد على الإنفاق الإعلاني') },
      { value: 'SAR 72.7K', label: L('aggregate revenue', 'إجمالي الإيرادات') },
      { value: '805', label: L('checkouts', 'عملية دفع') },
    ],
    summary: L(
      'A fashion operation scaled by running a shared performance system across multiple accounts.',
      'عملية أزياء توسّعت عبر تشغيل نظام أداء موحّد على حسابات متعددة.',
    ),
    markets: ['ksa'], disciplines: ['performance'], industries: ['ecommerce', 'fashion'],
  },
  {
    num: '06',
    slug: 'cosmetics-brand-egypt',
    title: L('Cosmetics Brand', 'علامة مستحضرات تجميل'),
    category: L('E-commerce · Beauty · Performance', 'تجارة إلكترونية · تجميل · أداء'),
    market: EG,
    headline: L('EGP 2.7M in 7 months on Meta alone', '2.7 مليون جنيه خلال 7 أشهر عبر Meta وحدها'),
    metrics: [
      { value: 'EGP 2.7M', label: revenue },
      { value: '7.95x', label: roas },
      { value: '12.18%', label: L('CTR', 'نسبة النقر إلى الظهور') },
    ],
    summary: L(
      'A single-platform acquisition engine built on disciplined testing instead of hero campaigns.',
      'محرك استحواذ على منصة واحدة بُني على الاختبار المنضبط بدلًا من الحملات الاستعراضية.',
    ),
    markets: ['egypt'], disciplines: ['performance'], industries: ['ecommerce', 'beauty'],
  },
  {
    num: '07',
    slug: 'cosmetics-brand-libya',
    title: L('Cosmetics Brand', 'علامة مستحضرات تجميل'),
    category: L('E-commerce · Beauty · Performance', 'تجارة إلكترونية · تجميل · أداء'),
    market: L('Libya', 'ليبيا'),
    headline: L('EGP 5M+ via messaging-led conversion', 'أكثر من 5 ملايين جنيه عبر تحويل تقوده المحادثات'),
    metrics: [
      { value: '13x', label: roas },
      { value: '803', label: orders },
      { value: '70K', label: L('messages', 'رسالة') },
    ],
    summary: L(
      'A high-friction market converted through conversation before checkout, not after.',
      'سوق عالي الصعوبة جرى تحويله عبر المحادثة قبل إتمام الشراء، لا بعده.',
    ),
    markets: ['libya'], disciplines: ['performance'], industries: ['ecommerce', 'beauty'],
  },
  {
    num: '08',
    slug: 'healthcare-lead-generation',
    title: L('Healthcare', 'الرعاية الصحية'),
    category: L('Healthcare · Lead Gen', 'رعاية صحية · توليد عملاء محتملين'),
    market: EG,
    headline: L('12M+ impressions, 3.68M accounts reached', 'أكثر من 12 مليون ظهور، والوصول إلى 3.68 مليون حساب'),
    metrics: [
      { value: '3.68M', label: reach },
      { value: '12.08M', label: impressions },
      { value: 'EGP 221K', label: spend },
    ],
    summary: L(
      'A clinical-service operator generated leads at quality, not just volume, through a mapped buyer journey.',
      'مشغّل خدمات طبية ولّد عملاء محتملين بجودة عالية لا بالكم فقط، عبر رحلة مشترٍ مرسومة بعناية.',
    ),
    markets: ['egypt'], disciplines: ['leadgen'], industries: ['healthcare'],
  },
  {
    num: '09',
    slug: 'restaurant-cairo',
    title: L('Restaurant', 'مطعم'),
    category: L('F&B · Local', 'أغذية ومشروبات · محلي'),
    market: L('Cairo, Egypt', 'القاهرة، مصر'),
    headline: L('EGP 5M+ revenue, 4,000+ orders per year', 'أكثر من 5 ملايين جنيه إيرادات، وأكثر من 4,000 طلب سنويًا'),
    metrics: [
      { value: 'EGP 5M+', label: revenue },
      { value: '4,000+', label: L('orders/year', 'طلب سنويًا') },
      { value: '2.37M', label: reach },
    ],
    summary: L(
      'A local F&B operation scaled on rhythm, not on novelty.',
      'عملية أغذية ومشروبات محلية توسّعت بالإيقاع المنتظم، لا بالتجديد العابر.',
    ),
    markets: ['egypt'], disciplines: ['fnb'], industries: ['fnb'],
    cover: '/assets/cases/fnb.webp',
  },
  {
    num: '10',
    slug: 'education-academy-gcc',
    title: L('Education Academy', 'أكاديمية تعليمية'),
    category: L('Education · Lead Gen', 'تعليم · توليد عملاء محتملين'),
    market: GCC,
    headline: L('5.29M impressions · 1.13M reach', '5.29 مليون ظهور · وصول إلى 1.13 مليون'),
    metrics: [
      { value: '1.13M', label: reach },
      { value: '5.29M', label: impressions },
      { value: 'EGP 290K', label: spend },
    ],
    summary: L(
      'Enrolment-quality leads across the GCC for an education academy.',
      'عملاء محتملون بجودة تؤهلهم للتسجيل في أنحاء الخليج لصالح أكاديمية تعليمية.',
    ),
    markets: ['gcc'], disciplines: ['leadgen'], industries: ['education'],
    cover: '/assets/cases/education.webp',
  },
  {
    num: '11',
    slug: 'furniture-ecommerce-seo',
    title: L('Furniture & Home Decor E-commerce (SEO Growth)', 'متجر إلكتروني للأثاث وديكور المنزل (نمو عبر تحسين محركات البحث)'),
    category: L('E-commerce · Furniture · SEO', 'تجارة إلكترونية · أثاث · تحسين محركات البحث'),
    market: KSA,
    headline: L('103K clicks · 8.79M impressions', '103 آلاف نقرة · 8.79 مليون ظهور'),
    metrics: [
      { value: '103K', label: L('total clicks', 'إجمالي النقرات') },
      { value: '8.79M', label: impressions },
      { value: '1.2%', label: L('avg CTR', 'متوسط نسبة النقر') },
    ],
    summary: L(
      'Organic search engine ranking for high-intent Arabic furniture queries.',
      'تصدّر نتائج البحث العضوي لعمليات بحث عربية عالية النية في قطاع الأثاث.',
    ),
    markets: ['ksa'], disciplines: ['seo'], industries: ['ecommerce', 'furniture'],
  },
  {
    num: '12',
    slug: 'furniture-ecommerce-saudi-national-day',
    title: L('Furniture & Home Decor E-commerce (Saudi National Day Campaign)', 'متجر إلكتروني للأثاث وديكور المنزل (حملة اليوم الوطني السعودي)'),
    category: L('E-commerce · Furniture · Performance', 'تجارة إلكترونية · أثاث · أداء'),
    market: KSA,
    headline: L('10x ROAS · SAR 1.08M in sales', 'عائد 10x على الإنفاق الإعلاني · مبيعات بقيمة 1.08 مليون ريال'),
    metrics: [
      { value: '10x', label: roas },
      { value: 'SAR 1,086,533', label: L('in sales', 'مبيعات') },
      { value: '507', label: orders },
    ],
    summary: L(
      'Beat a 7x ROAS target in a discount-saturated season, without influencers, without deep discounts.',
      'تجاوز مستهدف عائد 7x على الإنفاق الإعلاني في موسم مشبع بالخصومات، دون مؤثرين ودون خصومات عميقة.',
    ),
    markets: ['ksa'], disciplines: ['performance'], industries: ['ecommerce', 'furniture'],
  },
  {
    num: '13',
    slug: 'food-delivery-platform',
    title: L('Food Delivery Platform', 'منصة توصيل طعام'),
    category: L('Influencer Marketing · Food Delivery', 'تسويق عبر المؤثرين · توصيل طعام'),
    market: L('Saudi Arabia · GCC', 'المملكة العربية السعودية · الخليج'),
    headline: L('1,000+ influencers, 12 months of ongoing awareness', 'أكثر من 1,000 مؤثر، و12 شهرًا من الحضور المتواصل'),
    metrics: [
      { value: '1,000+', label: influencers },
      { value: { en: '1 year+', ar: 'أكثر من عام' }, label: L('duration', 'المدة') },
      { value: '3', label: L('sub-campaigns', 'حملات فرعية') },
    ],
    summary: L(
      'A food delivery platform sustained brand visibility through a full year of layered influencer activity, from loyalty program pushes to sponsored sports activations, instead of one-off bursts.',
      'منصة توصيل طعام حافظت على حضور علامتها طوال عام كامل من نشاط المؤثرين متعدد الطبقات، من دعم برنامج الولاء إلى رعاية الفعاليات الرياضية، بدلًا من دفعات متقطعة لمرة واحدة.',
    ),
    markets: ['ksa', 'gcc'], disciplines: ['influencer'], industries: ['fooddelivery'],
  },
  {
    num: '14',
    slug: 'quick-service-restaurant-chain',
    title: L('Quick-Service Restaurant Chain', 'سلسلة مطاعم خدمة سريعة'),
    category: L('Influencer Marketing · QSR / F&B', 'تسويق عبر المؤثرين · مطاعم سريعة / أغذية ومشروبات'),
    market: KSA,
    headline: L('250 influencers, one drive-thru moment, two hours', '250 مؤثرًا، ولحظة واحدة في مسار الطلب من السيارة، خلال ساعتين'),
    metrics: [
      { value: '250', label: influencers },
      { value: { en: '2 hours', ar: 'ساعتان' }, label: L('window', 'نافذة زمنية') },
      { value: '1', label: L('location, 1 message', 'موقع، ورسالة واحدة') },
    ],
    summary: L(
      'A global QSR chain concentrated influencer content into a single two-hour drive-thru window to prove "it\'s not about the location, it\'s about the brand."',
      'سلسلة مطاعم خدمة سريعة عالمية ركّزت محتوى المؤثرين في نافذة واحدة مدتها ساعتان عند مسار الطلب من السيارة، لتثبت أن «المسألة ليست في الموقع، بل في العلامة التجارية».',
    ),
    markets: ['ksa'], disciplines: ['influencer'], industries: ['fnb'],
  },
  {
    num: '15',
    slug: 'fashion-lifestyle-retailer',
    title: L('Fashion & Lifestyle Retailer', 'متجر تجزئة للأزياء ونمط الحياة'),
    category: L('Influencer Marketing · Fashion Retail', 'تسويق عبر المؤثرين · تجزئة الأزياء'),
    market: L('GCC (multi-market)', 'الخليج (أسواق متعددة)'),
    headline: L('2,000+ influencers supporting monthly branch openings across the GCC', 'أكثر من 2,000 مؤثر يدعمون افتتاح الفروع شهريًا في أنحاء الخليج'),
    metrics: [
      { value: '2,000+', label: influencers },
      { value: { en: 'Always-on', ar: 'حضور دائم' } },
      { value: { en: 'Monthly', ar: 'شهريًا' }, label: L('new branches', 'فروع جديدة') },
    ],
    summary: L(
      'A fashion retail chain paired every new branch opening across the Gulf with a dedicated influencer wave, turning expansion into a recurring content and buzz engine rather than a one-time event.',
      'سلسلة تجزئة أزياء رافقت كل افتتاح فرع جديد في الخليج بموجة مخصصة من المؤثرين، فحوّلت التوسع إلى محرك متجدد للمحتوى والتفاعل بدلًا من حدث لمرة واحدة.',
    ),
    markets: ['gcc'], disciplines: ['influencer'], industries: ['fashion', 'retail'],
    cover: '/assets/cases/fashion.webp',
  },
  {
    num: '16',
    slug: 'toys-kids-retailer',
    title: L('Toys & Kids Retailer', 'متجر ألعاب ومستلزمات أطفال'),
    category: L('Influencer Marketing · Toys & Kids Retail', 'تسويق عبر المؤثرين · تجزئة ألعاب الأطفال'),
    market: KSA,
    headline: L('750 influencers, 4 days, one message: "we\'re in KSA"', '750 مؤثرًا، 4 أيام، ورسالة واحدة: «وصلنا السعودية»'),
    metrics: [
      { value: '750', label: influencers },
      { value: '4', label: L('days', 'أيام') },
      { value: '1', label: L('core message', 'رسالة أساسية') },
    ],
    summary: L(
      "A children's toy retailer entering Saudi Arabia used a tightly-timed 750-influencer wave to plant one message everywhere at once.",
      'متجر ألعاب أطفال يدخل السوق السعودي استخدم موجة محكمة التوقيت من 750 مؤثرًا لزرع رسالة واحدة في كل مكان في آن واحد.',
    ),
    markets: ['ksa'], disciplines: ['influencer'], industries: ['toys', 'retail'],
  },
  {
    num: '17',
    slug: 'home-furniture-retailer',
    title: L('Home & Furniture Retailer', 'متجر تجزئة للمنزل والأثاث'),
    category: L('Influencer Marketing · Home & Furniture', 'تسويق عبر المؤثرين · المنزل والأثاث'),
    market: KSA,
    headline: L('500 influencers, 3-hour activation, one new branch', '500 مؤثر، تفعيل لمدة 3 ساعات، وفرع جديد واحد'),
    metrics: [
      { value: '500', label: influencers },
      { value: '3', label: L('hours', 'ساعات') },
      { value: { en: 'Interior + lifestyle', ar: 'تصميم داخلي + نمط حياة' }, label: L('mix', 'مزيج') },
    ],
    summary: L(
      "A home and furniture retailer's Saudi branch opening combined interior design creators with fashion and beauty voices, generating continuously reusable content for the brand's ongoing marketing library.",
      'افتتاح فرع لمتجر منزل وأثاث في السعودية جمع بين صنّاع محتوى التصميم الداخلي وأصوات الأزياء والجمال، فأنتج محتوى قابلًا لإعادة الاستخدام باستمرار ضمن مكتبة التسويق الدائمة للعلامة.',
    ),
    markets: ['ksa'], disciplines: ['influencer'], industries: ['furniture', 'retail'],
  },
  {
    num: '18',
    slug: 'luxury-beauty-brand',
    title: L('Luxury Beauty Brand', 'علامة تجميل فاخرة'),
    category: L('Influencer Marketing · Luxury Beauty', 'تسويق عبر المؤثرين · تجميل فاخر'),
    market: GCC,
    headline: L('100 makeup artists and beauty creators, full collection coverage', '100 خبير مكياج وصانع محتوى تجميل، وتغطية كاملة للمجموعة'),
    metrics: [
      { value: '100', label: influencers },
      { value: '5', label: L('days', 'أيام') },
      { value: { en: 'Full range', ar: 'المجموعة كاملة' }, label: L('access after results', 'إتاحة بعد النتائج') },
    ],
    summary: L(
      'A luxury beauty house started with limited product gifting and expanded to its full collection mid-campaign after early engagement results, letting real performance data unlock more creator access.',
      'دار تجميل فاخرة بدأت بإهداء محدود للمنتجات، ثم توسّعت إلى مجموعتها الكاملة في منتصف الحملة بعد نتائج التفاعل الأولى، لتتيح بيانات الأداء الفعلية وصولًا أوسع لصنّاع المحتوى.',
    ),
    markets: ['gcc'], disciplines: ['influencer'], industries: ['beauty'],
  },
];

/** Featured on the home page */
export const FEATURED = ['02', '15', '09'];

export const t = (v: T | string, lang: Lang) => (typeof v === 'string' ? v : v[lang]);

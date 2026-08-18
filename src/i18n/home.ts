import type { Locale } from './translations';

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExploreCard {
  title: string;
  description: string;
  cta: string;
  image: string;
}

export interface IndustryCard {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface NewsItem {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface EventItem {
  date: string;
  tag: string;
  title: string;
  type: string;
  image: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface HomeContent {
  nav: NavLink[];
  navCta: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: StatItem[];
  intro: {
    title: string;
    body: string;
    cta: string;
  };
  explore: {
    sectionTitle: string;
    cards: ExploreCard[];
  };
  industries: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: IndustryCard[];
  };
  whyChoose: {
    sectionTitle: string;
    features: FeatureItem[];
  };
  process: {
    sectionTitle: string;
    cta: string;
    steps: ProcessStep[];
  };
  news: {
    sectionTitle: string;
    viewAll: string;
    items: NewsItem[];
  };
  events: {
    sectionTitle: string;
    viewAll: string;
    items: EventItem[];
  };
  footer: {
    tagline: string;
    columns: FooterColumn[];
    legalLinks: NavLink[];
    copyright: string;
    mockNotice: string;
  };
}

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    nav: [
      { label: 'Business', href: '#business' },
      { label: 'Industries', href: '#industries' },
      { label: 'About', href: '#about' },
      { label: 'News', href: '#news' },
      { label: 'Careers', href: '#careers' },
    ],
    navCta: 'Contact Us',
    hero: {
      eyebrow: 'Where Vision Meets Opportunity',
      title: 'A united business,',
      highlight: 'built on trust',
      subtitle:
        'Eleganza United Business brings together six industries under one vision — connecting capital, expertise and ambition across the region.',
      ctaPrimary: 'Explore Our Industries',
      ctaSecondary: 'Our Story',
    },
    stats: [
      { value: '6', label: 'Core industries' },
      { value: '15+', label: 'Years of combined expertise' },
      { value: '500+', label: 'Partners & clients' },
      { value: '3', label: 'Countries of operation' },
    ],
    intro: {
      title: 'Built on one vision, growing in every direction',
      body: 'For over a decade, Eleganza United Business has united diverse industries under a single philosophy: unified direction, diverse expertise, and limitless potential. From holding structures to trading floors, every venture we touch is guided by the same standard of excellence.',
      cta: 'Learn more about us',
    },
    explore: {
      sectionTitle: 'Explore Eleganza',
      cards: [
        {
          title: 'Our Business',
          description: 'Discover how our holding structure supports ventures across construction, real estate, investment and more.',
          cta: 'Learn more',
          image: '/mock/card-1.jpg',
        },
        {
          title: 'Our Industries',
          description: 'Six sectors, one vision — explore where Eleganza creates value across the region.',
          cta: 'Learn more',
          image: '/mock/card-2.jpg',
        },
        {
          title: 'Our Story',
          description: 'From a single idea to a united business — learn about the journey that shaped Eleganza.',
          cta: 'Learn more',
          image: '/mock/card-3.jpg',
        },
        {
          title: 'Partner With Us',
          description: 'Join a growing network of partners who share our vision for sustainable, diversified growth.',
          cta: 'Learn more',
          image: '/mock/card-4.jpg',
        },
      ],
    },
    industries: {
      sectionTitle: 'Our Industries',
      sectionSubtitle: 'Six sectors, one unified direction',
      items: [
        { title: 'Holding', description: 'A resilient structure that unifies strategy, governance and capital across every venture.' },
        { title: 'Construction', description: 'Delivering landmark developments with precision, safety and long-term durability.' },
        { title: 'Real Estate', description: 'Shaping spaces where business and community thrive, from commercial to residential.' },
        { title: 'Investment', description: 'Disciplined capital allocation across ventures with long-term, sustainable returns.' },
        { title: 'Oil & Gas', description: 'Reliable energy partnerships built on safety, compliance and operational excellence.' },
        { title: 'Trading', description: 'Connecting markets and moving goods with speed, trust and global reach.' },
      ],
    },
    whyChoose: {
      sectionTitle: 'Why choose Eleganza',
      features: [
        { title: 'Unified vision', description: 'Every industry we operate in is guided by one clear direction and purpose.' },
        { title: 'Diversified portfolio', description: 'Six industries reduce risk and open opportunity across market cycles.' },
        { title: 'Global reach', description: 'Partnerships and operations that extend well beyond a single market.' },
        { title: 'Trusted governance', description: 'A holding structure built on transparency, discipline and accountability.' },
        { title: 'Experienced teams', description: 'Specialists across every sector we operate, working toward one standard.' },
        { title: 'Sustainable growth', description: 'Decisions made for long-term impact, not short-term gain.' },
      ],
    },
    process: {
      sectionTitle: 'Partner with us in three simple steps',
      cta: 'Start the conversation',
      steps: [
        { number: '01', title: 'Connect', description: 'Reach out and share your vision — our team will understand your goals and where Eleganza can add value.' },
        { number: '02', title: 'Align', description: 'We structure a proposal tailored to your industry, timeline and objectives, with full transparency at every step.' },
        { number: '03', title: 'Grow', description: 'Together we execute, scale and build — with Eleganza\u2019s network and expertise behind every milestone.' },
      ],
    },
    news: {
      sectionTitle: 'News & Insights',
      viewAll: 'View all news',
      items: [
        { category: 'Holding', title: 'Eleganza Expands Regional Holding Structure', excerpt: 'A new framework strengthens governance across all six industries.', date: '12 Aug 2026', image: '/mock/card-1.jpg' },
        { category: 'Real Estate', title: 'Eleganza Breaks Ground on New Mixed-Use Development', excerpt: 'A landmark project combining commercial and residential space.', date: '28 Jul 2026', image: '/mock/card-2.jpg' },
        { category: 'Investment', title: 'Eleganza Launches New Investment Vehicle', excerpt: 'Expanding access to diversified, long-term opportunities.', date: '14 Jul 2026', image: '/mock/card-3.jpg' },
      ],
    },
    events: {
      sectionTitle: 'Upcoming Events',
      viewAll: 'View all events',
      items: [
        { date: '02 Sep 2026', tag: 'Investment', title: 'Eleganza Investor Roundtable', type: 'In person', image: '/mock/card-4.jpg' },
        { date: '19 Sep 2026', tag: 'Trading', title: 'Regional Trade & Logistics Forum', type: 'Webinar', image: '/mock/card-5.jpg' },
        { date: '08 Oct 2026', tag: 'Construction', title: 'Future Developments Showcase', type: 'In person', image: '/mock/card-6.jpg' },
      ],
    },
    footer: {
      tagline: 'One Vision. Multiple Solutions. Endless Possibilities.',
      columns: [
        {
          title: 'Company',
          links: [
            { label: 'Our story', href: '#about' },
            { label: 'Our industries', href: '#industries' },
            { label: 'Careers', href: '#careers' },
          ],
        },
        {
          title: 'Business',
          links: [
            { label: 'Holding', href: '#industries' },
            { label: 'Construction', href: '#industries' },
            { label: 'Real Estate', href: '#industries' },
            { label: 'Investment', href: '#industries' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'News & insights', href: '#news' },
            { label: 'Events', href: '#events' },
            { label: 'Contact us', href: '#contact' },
          ],
        },
      ],
      legalLinks: [
        { label: 'Terms of use', href: '#' },
        { label: 'Privacy policy', href: '#' },
      ],
      copyright: 'Eleganza United Business. All rights reserved.',
      mockNotice: 'Preview page — content and figures shown are placeholders pending final brand content.',
    },
  },
  fa: {
    nav: [
      { label: 'کسب‌وکار', href: '#business' },
      { label: 'حوزه‌های فعالیت', href: '#industries' },
      { label: 'درباره ما', href: '#about' },
      { label: 'اخبار', href: '#news' },
      { label: 'فرصت‌های شغلی', href: '#careers' },
    ],
    navCta: 'تماس با ما',
    hero: {
      eyebrow: 'جایی که چشم‌انداز با فرصت تلاقی می‌کنه',
      title: 'یک کسب‌وکار یکپارچه،',
      highlight: 'بر پایه‌ی اعتماد',
      subtitle: 'الگانزا یونایتد بیزینس شش حوزه‌ی فعالیت رو زیر یک چشم‌انداز کنار هم آورده — سرمایه، تخصص و بلندپروازی رو در سراسر منطقه به هم وصل می‌کنه.',
      ctaPrimary: 'حوزه‌های فعالیت ما',
      ctaSecondary: 'داستان ما',
    },
    stats: [
      { value: '۶', label: 'حوزه‌ی اصلی فعالیت' },
      { value: '+۱۵', label: 'سال تجربه‌ی تجمیعی' },
      { value: '+۵۰۰', label: 'شریک و مشتری' },
      { value: '۳', label: 'کشور محل فعالیت' },
    ],
    intro: {
      title: 'بر پایه‌ی یک چشم‌انداز، رشد در هر مسیر',
      body: 'بیش از یک دهه‌ست که الگانزا یونایتد بیزینس حوزه‌های مختلف رو زیر یک فلسفه‌ی واحد کنار هم آورده: مسیر یکپارچه، تخصص متنوع و پتانسیل بی‌پایان. از ساختارهای هلدینگ گرفته تا میزهای معامله، هر پروژه‌ای که دست می‌زنیم با همون استاندارد از تعالی پیش می‌ره.',
      cta: 'بیشتر درباره‌مون بدونید',
    },
    explore: {
      sectionTitle: 'الگانزا رو کشف کنید',
      cards: [
        { title: 'کسب‌وکار ما', description: 'ببینید چطور ساختار هلدینگ ما از پروژه‌ها تو ساخت‌وساز، املاک، سرمایه‌گذاری و بیشتر پشتیبانی می‌کنه.', cta: 'بیشتر بدانید', image: '/mock/card-1.jpg' },
        { title: 'حوزه‌های فعالیت', description: 'شش حوزه، یک چشم‌انداز — ببینید الگانزا کجاهای منطقه ارزش خلق می‌کنه.', cta: 'بیشتر بدانید', image: '/mock/card-2.jpg' },
        { title: 'داستان ما', description: 'از یک ایده تا یک کسب‌وکار یکپارچه — با مسیری که الگانزا رو ساخت آشنا بشید.', cta: 'بیشتر بدانید', image: '/mock/card-3.jpg' },
        { title: 'همکاری با ما', description: 'به شبکه‌ی روبه‌رشدی از شرکایی بپیوندید که چشم‌اندازمون برای رشد پایدار و متنوع رو با ما سهیم‌اند.', cta: 'بیشتر بدانید', image: '/mock/card-4.jpg' },
      ],
    },
    industries: {
      sectionTitle: 'حوزه‌های فعالیت ما',
      sectionSubtitle: 'شش حوزه، یک مسیر یکپارچه',
      items: [
        { title: 'هلدینگ', description: 'ساختاری مقاوم که استراتژی، حاکمیت و سرمایه رو در تمام پروژه‌ها یکپارچه می‌کنه.' },
        { title: 'ساخت‌وساز', description: 'اجرای پروژه‌های شاخص با دقت، ایمنی و دوام بلندمدت.' },
        { title: 'املاک', description: 'شکل‌دادن به فضاهایی که کسب‌وکار و جامعه توشون شکوفا می‌شن، از تجاری تا مسکونی.' },
        { title: 'سرمایه‌گذاری', description: 'تخصیص منظم سرمایه در پروژه‌های مختلف با بازدهی پایدار و بلندمدت.' },
        { title: 'نفت و گاز', description: 'همکاری‌های انرژی قابل‌اعتماد بر پایه‌ی ایمنی، انطباق و تعالی عملیاتی.' },
        { title: 'تجارت', description: 'وصل‌کردن بازارها و جابه‌جایی کالا با سرعت، اعتماد و دسترسی جهانی.' },
      ],
    },
    whyChoose: {
      sectionTitle: 'چرا الگانزا',
      features: [
        { title: 'چشم‌انداز یکپارچه', description: 'هر حوزه‌ای که توش فعالیم، با یک مسیر و هدف روشن پیش می‌ره.' },
        { title: 'پرتفوی متنوع', description: 'شش حوزه‌ی فعالیت ریسک رو کم و فرصت رو در چرخه‌های مختلف بازار باز می‌کنه.' },
        { title: 'دسترسی جهانی', description: 'همکاری‌ها و فعالیت‌هایی که خیلی فراتر از یک بازار می‌رن.' },
        { title: 'حاکمیت قابل‌اعتماد', description: 'ساختار هلدینگی بر پایه‌ی شفافیت، انضباط و پاسخگویی.' },
        { title: 'تیم‌های باتجربه', description: 'متخصصانی در تمام حوزه‌های فعالیتمون که به سمت یک استاندارد حرکت می‌کنن.' },
        { title: 'رشد پایدار', description: 'تصمیم‌هایی برای تأثیر بلندمدت، نه سود کوتاه‌مدت.' },
      ],
    },
    process: {
      sectionTitle: 'همکاری با ما در سه قدم ساده',
      cta: 'شروع گفتگو',
      steps: [
        { number: '۰۱', title: 'ارتباط', description: 'باهامون در تماس باشید و چشم‌اندازتون رو بگید — تیم ما اهدافتون رو می‌فهمه و می‌بینه الگانزا کجا می‌تونه ارزش اضافه کنه.' },
        { number: '۰۲', title: 'هم‌راستایی', description: 'یه پیشنهاد متناسب با حوزه، زمان‌بندی و اهدافتون می‌چینیم، با شفافیت کامل در هر قدم.' },
        { number: '۰۳', title: 'رشد', description: 'با هم اجرا می‌کنیم، رشد می‌کنیم و می‌سازیم — با شبکه و تخصص الگانزا پشت هر مرحله.' },
      ],
    },
    news: {
      sectionTitle: 'اخبار و تحلیل‌ها',
      viewAll: 'همه‌ی اخبار',
      items: [
        { category: 'هلدینگ', title: 'الگانزا ساختار هلدینگ منطقه‌ای‌ش رو گسترش داد', excerpt: 'چارچوبی جدید که حاکمیت رو در هر شش حوزه‌ی فعالیت تقویت می‌کنه.', date: '۱۲ آگوست ۲۰۲۶', image: '/mock/card-1.jpg' },
        { category: 'املاک', title: 'الگانزا کلنگ یه پروژه‌ی ترکیبی جدید رو زد', excerpt: 'پروژه‌ای شاخص که فضای تجاری و مسکونی رو ترکیب می‌کنه.', date: '۲۸ ژوئیه ۲۰۲۶', image: '/mock/card-2.jpg' },
        { category: 'سرمایه‌گذاری', title: 'الگانزا ابزار سرمایه‌گذاری جدیدی راه‌اندازی کرد', excerpt: 'گسترش دسترسی به فرصت‌های متنوع و بلندمدت.', date: '۱۴ ژوئیه ۲۰۲۶', image: '/mock/card-3.jpg' },
      ],
    },
    events: {
      sectionTitle: 'رویدادهای پیش‌رو',
      viewAll: 'همه‌ی رویدادها',
      items: [
        { date: '۲ سپتامبر ۲۰۲۶', tag: 'سرمایه‌گذاری', title: 'میزگرد سرمایه‌گذاران الگانزا', type: 'حضوری', image: '/mock/card-4.jpg' },
        { date: '۱۹ سپتامبر ۲۰۲۶', tag: 'تجارت', title: 'فوروم منطقه‌ای تجارت و لجستیک', type: 'وبینار', image: '/mock/card-5.jpg' },
        { date: '۸ اکتبر ۲۰۲۶', tag: 'ساخت‌وساز', title: 'نمایش پروژه‌های آینده', type: 'حضوری', image: '/mock/card-6.jpg' },
      ],
    },
    footer: {
      tagline: 'یک چشم‌انداز. راهکارهای متعدد. امکانات بی‌پایان.',
      columns: [
        { title: 'شرکت', links: [ { label: 'داستان ما', href: '#about' }, { label: 'حوزه‌های فعالیت', href: '#industries' }, { label: 'فرصت‌های شغلی', href: '#careers' } ] },
        { title: 'کسب‌وکار', links: [ { label: 'هلدینگ', href: '#industries' }, { label: 'ساخت‌وساز', href: '#industries' }, { label: 'املاک', href: '#industries' }, { label: 'سرمایه‌گذاری', href: '#industries' } ] },
        { title: 'منابع', links: [ { label: 'اخبار و تحلیل‌ها', href: '#news' }, { label: 'رویدادها', href: '#events' }, { label: 'تماس با ما', href: '#contact' } ] },
      ],
      legalLinks: [ { label: 'شرایط استفاده', href: '#' }, { label: 'حریم خصوصی', href: '#' } ],
      copyright: 'الگانزا یونایتد بیزینس. تمامی حقوق محفوظ است.',
      mockNotice: 'صفحه‌ی پیش‌نمایش — محتوا و اعداد فعلاً نمونه هستن تا محتوای نهایی برند آماده بشه.',
    },
  },
  ar: {
    nav: [
      { label: 'الأعمال', href: '#business' },
      { label: 'مجالات العمل', href: '#industries' },
      { label: 'من نحن', href: '#about' },
      { label: 'الأخبار', href: '#news' },
      { label: 'الوظائف', href: '#careers' },
    ],
    navCta: 'تواصل معنا',
    hero: {
      eyebrow: 'حيث تلتقي الرؤية بالفرصة',
      title: 'عمل موحّد،',
      highlight: 'مبني على الثقة',
      subtitle: 'تجمع إليغانزا يونايتد بيزنس ست مجالات عمل تحت رؤية واحدة — تربط رأس المال والخبرة والطموح في جميع أنحاء المنطقة.',
      ctaPrimary: 'استكشف مجالاتنا',
      ctaSecondary: 'قصتنا',
    },
    stats: [
      { value: '٦', label: 'مجالات عمل رئيسية' },
      { value: '+١٥', label: 'سنة من الخبرة المجمّعة' },
      { value: '+٥٠٠', label: 'شريك وعميل' },
      { value: '٣', label: 'دول للعمليات' },
    ],
    intro: {
      title: 'مبنيّون على رؤية واحدة، ننمو في كل اتجاه',
      body: 'منذ أكثر من عقد، توحّد إليغانزا يونايتد بيزنس مجالات متنوعة تحت فلسفة واحدة: اتجاه موحّد، خبرة متنوعة، وإمكانات لا نهائية. من الهياكل القابضة إلى أروقة التداول، كل مشروع نلمسه يسير وفق نفس معيار التميّز.',
      cta: 'اعرف المزيد عنا',
    },
    explore: {
      sectionTitle: 'استكشف إليغانزا',
      cards: [
        { title: 'أعمالنا', description: 'اكتشف كيف يدعم هيكلنا القابض مشاريع في الإنشاءات والعقارات والاستثمار وأكثر.', cta: 'اعرف المزيد', image: '/mock/card-1.jpg' },
        { title: 'مجالات عملنا', description: 'ست قطاعات، رؤية واحدة — استكشف أين تخلق إليغانزا قيمة في المنطقة.', cta: 'اعرف المزيد', image: '/mock/card-2.jpg' },
        { title: 'قصتنا', description: 'من فكرة واحدة إلى عمل موحّد — تعرّف على الرحلة التي شكّلت إليغانزا.', cta: 'اعرف المزيد', image: '/mock/card-3.jpg' },
        { title: 'كن شريكاً', description: 'انضم إلى شبكة متنامية من الشركاء الذين يشاركوننا رؤيتنا للنمو المستدام والمتنوع.', cta: 'اعرف المزيد', image: '/mock/card-4.jpg' },
      ],
    },
    industries: {
      sectionTitle: 'مجالات عملنا',
      sectionSubtitle: 'ست قطاعات، اتجاه موحّد واحد',
      items: [
        { title: 'القابضة', description: 'هيكل مرن يوحّد الاستراتيجية والحوكمة ورأس المال عبر كل مشروع.' },
        { title: 'الإنشاءات', description: 'تنفيذ مشاريع بارزة بدقة وسلامة ومتانة على المدى الطويل.' },
        { title: 'العقارات', description: 'تشكيل مساحات تزدهر فيها الأعمال والمجتمع، من التجارية إلى السكنية.' },
        { title: 'الاستثمار', description: 'تخصيص منضبط لرأس المال عبر المشاريع بعوائد مستدامة طويلة الأمد.' },
        { title: 'النفط والغاز', description: 'شراكات طاقة موثوقة مبنية على السلامة والامتثال والتميز التشغيلي.' },
        { title: 'التجارة', description: 'ربط الأسواق ونقل البضائع بسرعة وثقة ووصول عالمي.' },
      ],
    },
    whyChoose: {
      sectionTitle: 'لماذا إليغانزا',
      features: [
        { title: 'رؤية موحّدة', description: 'كل مجال نعمل فيه يسترشد باتجاه وهدف واضح واحد.' },
        { title: 'محفظة متنوعة', description: 'ست مجالات عمل تقلل المخاطر وتفتح الفرص عبر دورات السوق المختلفة.' },
        { title: 'وصول عالمي', description: 'شراكات وعمليات تمتد إلى ما هو أبعد من سوق واحد.' },
        { title: 'حوكمة موثوقة', description: 'هيكل قابض مبني على الشفافية والانضباط والمساءلة.' },
        { title: 'فرق ذات خبرة', description: 'متخصصون في كل قطاع نعمل فيه، يعملون نحو معيار واحد.' },
        { title: 'نمو مستدام', description: 'قرارات تُتخذ من أجل تأثير طويل الأمد، لا مكاسب قصيرة الأمد.' },
      ],
    },
    process: {
      sectionTitle: 'كن شريكاً معنا في ثلاث خطوات بسيطة',
      cta: 'ابدأ الحوار',
      steps: [
        { number: '٠١', title: 'التواصل', description: 'تواصل معنا وشاركنا رؤيتك — سيفهم فريقنا أهدافك وأين يمكن لإليغانزا أن تضيف قيمة.' },
        { number: '٠٢', title: 'التوافق', description: 'نضع اقتراحاً مصمماً خصيصاً لقطاعك وجدولك الزمني وأهدافك، بشفافية كاملة في كل خطوة.' },
        { number: '٠٣', title: 'النمو', description: 'معاً ننفذ ونوسّع ونبني — بدعم من شبكة وخبرة إليغانزا خلف كل إنجاز.' },
      ],
    },
    news: {
      sectionTitle: 'الأخبار والرؤى',
      viewAll: 'عرض كل الأخبار',
      items: [
        { category: 'القابضة', title: 'إليغانزا توسّع هيكلها القابض الإقليمي', excerpt: 'إطار عمل جديد يعزز الحوكمة عبر جميع المجالات الست.', date: '١٢ أغسطس ٢٠٢٦', image: '/mock/card-1.jpg' },
        { category: 'العقارات', title: 'إليغانزا تضع حجر الأساس لمشروع متعدد الاستخدامات', excerpt: 'مشروع بارز يجمع بين المساحات التجارية والسكنية.', date: '٢٨ يوليو ٢٠٢٦', image: '/mock/card-2.jpg' },
        { category: 'الاستثمار', title: 'إليغانزا تطلق أداة استثمار جديدة', excerpt: 'توسيع الوصول إلى فرص متنوعة وطويلة الأمد.', date: '١٤ يوليو ٢٠٢٦', image: '/mock/card-3.jpg' },
      ],
    },
    events: {
      sectionTitle: 'الفعاليات القادمة',
      viewAll: 'عرض كل الفعاليات',
      items: [
        { date: '٢ سبتمبر ٢٠٢٦', tag: 'الاستثمار', title: 'طاولة مستديرة لمستثمري إليغانزا', type: 'حضوري', image: '/mock/card-4.jpg' },
        { date: '١٩ سبتمبر ٢٠٢٦', tag: 'التجارة', title: 'منتدى التجارة واللوجستيات الإقليمي', type: 'ندوة عبر الإنترنت', image: '/mock/card-5.jpg' },
        { date: '٨ أكتوبر ٢٠٢٦', tag: 'الإنشاءات', title: 'معرض المشاريع المستقبلية', type: 'حضوري', image: '/mock/card-6.jpg' },
      ],
    },
    footer: {
      tagline: 'رؤية واحدة. حلول متعددة. إمكانيات لا نهائية.',
      columns: [
        { title: 'الشركة', links: [ { label: 'قصتنا', href: '#about' }, { label: 'مجالات عملنا', href: '#industries' }, { label: 'الوظائف', href: '#careers' } ] },
        { title: 'الأعمال', links: [ { label: 'القابضة', href: '#industries' }, { label: 'الإنشاءات', href: '#industries' }, { label: 'العقارات', href: '#industries' }, { label: 'الاستثمار', href: '#industries' } ] },
        { title: 'الموارد', links: [ { label: 'الأخبار والرؤى', href: '#news' }, { label: 'الفعاليات', href: '#events' }, { label: 'تواصل معنا', href: '#contact' } ] },
      ],
      legalLinks: [ { label: 'شروط الاستخدام', href: '#' }, { label: 'سياسة الخصوصية', href: '#' } ],
      copyright: 'إليغانزا يونايتد بيزنس. جميع الحقوق محفوظة.',
      mockNotice: 'صفحة معاينة — المحتوى والأرقام المعروضة هي عناصر نائبة ريثما يتم إعداد المحتوى النهائي للعلامة التجارية.',
    },
  },
};

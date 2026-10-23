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
    slogan1: string;
    slogan2: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  statement: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
  };
  industryGrid: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    cta: string;
    items: { title: string; highlight: string; description: string }[];
  };
  story: {
    eyebrow: string;
    title: string;
    highlight: string;
    lead: string;
    body: string;
    stats: { value: string; label: string; sub: string }[];
    cta: string;
    timeline: { year: string; text: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    cta: string;
    items: { category: string; title: string; location: string }[];
  };
  partners: {
    eyebrow: string;
    names: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    steps: string[];
    form: {
      name: string;
      email: string;
      phone: string;
      type: string;
      types: string[];
      message: string;
      send: string;
      sent: string;
    };
    info: { phone: string; phoneNote: string; email: string; emailNote: string; city: string; cityNote: string; follow: string };
    strip: { value: string; label: string }[];
    regions: string[];
    copyright: string;
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
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
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
      { label: 'Industries', href: '#industries' },
      { label: 'Our Story', href: '#story' },
      { label: 'Why Eleganza', href: '#why' },
      { label: 'Projects', href: '#projects' },
      { label: 'Partners', href: '#partners' },
    ],
    navCta: 'Contact Us',
    hero: {
      eyebrow: 'Where Vision Meets Opportunity',
      slogan1: 'Connecting Businesses.',
      slogan2: 'Creating Opportunities.',
      title: 'A united business,',
      highlight: 'built on trust',
      subtitle:
        'Eleganza United Business brings together six industries under one vision — connecting capital, expertise and ambition across the region.',
      ctaPrimary: 'Explore Our Industries',
      ctaSecondary: 'Start a Partnership',
    },
    statement: {
      eyebrow: 'Beyond Business. Towards Possibilities.',
      title: 'One Partner.',
      highlight: 'Endless Opportunities.',
      subtitle:
        'Based in Oman, Eleganza United Business connects expertise, resources, and opportunities across six key sectors — helping businesses and investors turn ambitious ideas into successful ventures.',
    },
    industryGrid: {
      eyebrow: 'Our Industries',
      title: 'Six Industries.',
      highlight: 'One Integrated Vision.',
      subtitle:
        'Eleganza United Business operates across six key industries, combining expertise and resources to create value, build partnerships and drive sustainable growth.',
      cta: 'Explore Our Industries',
      items: [
        { title: 'Construction,', highlight: 'Design & Fit-Out', description: 'From concept to completion, we deliver high-quality construction and fit-out solutions across residential, commercial and specialized projects.' },
        { title: 'Real Estate', highlight: '& Property', description: 'Identifying opportunities, developing assets and creating long-term value in Oman and the region.' },
        { title: 'Logistics &', highlight: 'Freight', description: 'Reliable logistics solutions that connect markets, move businesses and keep supply chains running.' },
        { title: 'General Trading', highlight: '& Sourcing', description: 'Sourcing quality products and building reliable supply networks to support diverse industries.' },
        { title: 'Energy &', highlight: 'Petrochemicals', description: 'Connecting energy markets and supporting the supply of essential resources for a growing future.' },
        { title: 'Business Setup', highlight: '& Investment', description: 'Helping businesses establish, grow and invest in Oman with the right structure, partnerships and support.' },
      ],
    },
    story: {
      eyebrow: 'Our Story',
      title: 'From Vision',
      highlight: 'to Lasting Impact.',
      lead: 'A journey built on design, execution and business opportunities across Oman and the region.',
      body: 'We started in Oman with a clear vision to create spaces, deliver quality and connect business opportunities. From architectural design and fit-out to real estate, trading, logistics, energy and business setup, Eleganza United Business has grown into a trusted partner for clients across the region.',
      stats: [
        { value: '9+', label: 'Years of Experience', sub: 'in Oman' },
        { value: '100+', label: 'Projects Completed', sub: 'Across Sectors' },
        { value: '6', label: 'Integrated', sub: 'Industries' },
        { value: 'Long-Term', label: 'Partnerships', sub: 'in Oman & the Region' },
      ],
      cta: 'Discover Our Journey',
      timeline: [
        { year: '2016', text: 'Started our journey in Oman with design and construction projects' },
        { year: '2018', text: 'Built a strong team and expanded our services' },
        { year: '2020', text: 'Entered real estate and trading, creating new business opportunities' },
        { year: '2023', text: 'Expanded into logistics, energy and petrochemicals' },
        { year: '2025', text: 'A growing regional presence with trusted partners and long-term clients' },
      ],
    },
    projects: {
      eyebrow: 'Selected Projects',
      title: 'Real Projects.',
      highlight: 'Real Results.',
      subtitle: 'A selection of our projects across different industries, showcasing our capability, attention to detail and commitment to quality.',
      cta: 'Discuss Your Project',
      items: [
        { category: 'Interior & Fit-Out', title: 'Muscat International Airport', location: 'CIP Lounge – Muscat, Oman' },
        { category: 'Exhibition Booths', title: 'Oman Agrofood 2025', location: 'Algeria Pavilion – OCEC, Muscat' },
        { category: 'Office Fit-Out', title: 'Oraman Office Group', location: 'Shatti Al Qurum, Muscat' },
        { category: 'Residential', title: 'Private Villa', location: 'Muscat, Oman' },
        { category: 'Industrial', title: 'Sohar Industrial Facility', location: 'Sohar, Oman' },
        { category: 'Logistics & Trading', title: 'International Shipments', location: 'UAE – Oman – Regional Markets' },
      ],
    },
    partners: {
      eyebrow: 'Trusted by partners across the region',
      names: ['Al Noor Holdings', 'Gulf Bridge Logistics', 'Muscat Build Co.', 'Oasis Energy', 'Desert Pearl Trading', 'Sohar Steel Works', 'Harbor Line Shipping', 'Qurum Interiors'],
    },
    contact: {
      eyebrow: "Let's Build Together",
      title: 'Your Next Project',
      highlight: 'Starts Here.',
      subtitle: 'Whether you have a project, a business opportunity or a partnership in mind, we are here to listen and turn your ideas into reality.',
      steps: ['Discuss Your Project', 'Get a Tailored Solution', 'Build a Long-Term Partnership'],
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Phone Number',
        type: 'Project Type',
        types: ['Construction, Design & Fit-Out', 'Real Estate & Property', 'Logistics & Freight', 'General Trading & Sourcing', 'Energy & Petrochemicals', 'Business Setup & Investment', 'Other'],
        message: 'Your Message',
        send: 'Send Message',
        sent: 'Thank you! Your email app has opened with your message ready to send.',
      },
      info: { phone: '+968 9200 4000', phoneNote: 'Call or WhatsApp', email: 'info@eleganza.om', emailNote: 'General Inquiries', city: 'Muscat, Oman', cityNote: 'Our Head Office', follow: 'Follow Our Journey' },
      strip: [
        { value: '6', label: 'Industries' },
        { value: '100+', label: 'Projects' },
        { value: '9+', label: 'Years in Oman' },
      ],
      regions: ['UAE', 'Oman', 'Regional Markets'],
      copyright: 'Eleganza United Business LLC. All rights reserved.',
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
      sectionTitle: 'Why Choose Eleganza',
      eyebrow: 'Why Choose Eleganza',
      title: 'More Than Services.',
      highlight: 'A Trusted Partner.',
      subtitle: 'We combine expertise, regional experience and a practical approach to deliver real value for our clients across Oman and the wider region.',
      features: [
        { title: 'End-to-End Expertise', description: 'From design and construction to trading, logistics, energy and business setup, we provide integrated solutions under one group.' },
        { title: 'Experienced Team', description: 'A multidisciplinary team with years of hands-on experience in Oman and regional markets, ensuring professional execution and reliable support.' },
        { title: 'Quality Focused', description: 'We are committed to high standards, attention to detail and long-lasting results across all industries.' },
        { title: 'Reliable Execution', description: 'On-time delivery, clear communication and practical solutions that keep projects and supply chains running smoothly.' },
        { title: 'Strong Partnerships', description: 'A trusted network of local and international partners, giving us access to resources, markets and opportunities across the region.' },
        { title: 'Long-Term Value', description: 'We focus on building sustainable relationships and creating opportunities that support the growth of our clients and partners.' },
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
            { label: 'Careers', href: '#careers' },
          ],
        },
        {
          title: 'Business',
          links: [
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
      { label: 'حوزه‌ها', href: '#industries' },
      { label: 'داستان ما', href: '#story' },
      { label: 'چرا الگانزا', href: '#why' },
      { label: 'پروژه‌ها', href: '#projects' },
      { label: 'همکاران', href: '#partners' },
    ],
    navCta: 'تماس با ما',
    hero: {
      eyebrow: 'جایی که چشم‌انداز با فرصت تلاقی می‌کنه',
      slogan1: 'پیوند کسب‌وکارها.',
      slogan2: 'خلق فرصت‌ها.',
      title: 'یک کسب‌وکار یکپارچه،',
      highlight: 'بر پایه‌ی اعتماد',
      subtitle: 'الگانزا یونایتد بیزینس شش حوزه‌ی فعالیت رو زیر یک چشم‌انداز کنار هم آورده — سرمایه، تخصص و بلندپروازی رو در سراسر منطقه به هم وصل می‌کنه.',
      ctaPrimary: 'حوزه‌های فعالیت ما',
      ctaSecondary: 'شروع همکاری',
    },
    statement: {
      eyebrow: 'فراتر از کسب‌وکار. به‌سوی امکان‌ها.',
      title: 'یک شریک.',
      highlight: 'فرصت‌های بی‌پایان.',
      subtitle: 'الگانزا یونایتد بیزینس، با مقر در عمان، تخصص، منابع و فرصت‌ها رو تو شش حوزه‌ی کلیدی به هم وصل می‌کنه — و به کسب‌وکارها و سرمایه‌گذارها کمک می‌کنه ایده‌های بلندپروازانه رو به پروژه‌های موفق تبدیل کنن.',
    },
    industryGrid: {
      eyebrow: 'حوزه‌های فعالیت ما',
      title: 'شش حوزه.',
      highlight: 'یک چشم‌انداز یکپارچه.',
      subtitle: 'الگانزا یونایتد بیزینس تو شش حوزه‌ی کلیدی فعالیت می‌کنه و با ترکیب تخصص و منابع، ارزش خلق می‌کنه، شراکت می‌سازه و رشد پایدار رو پیش می‌بره.',
      cta: 'حوزه‌های فعالیت ما',
      items: [
        { title: 'ساخت‌وساز،', highlight: 'طراحی و فیت‌اوت', description: 'از ایده تا تحویل، راه‌حل‌های ساخت و فیت‌اوت باکیفیت برای پروژه‌های مسکونی، تجاری و تخصصی ارائه می‌دیم.' },
        { title: 'املاک', highlight: 'و مستغلات', description: 'شناسایی فرصت‌ها، توسعه‌ی دارایی‌ها و خلق ارزش بلندمدت در عمان و منطقه.' },
        { title: 'لجستیک', highlight: 'و حمل‌ونقل', description: 'راه‌حل‌های لجستیکی قابل‌اعتماد که بازارها رو به هم وصل می‌کنه، کسب‌وکارها رو جابه‌جا می‌کنه و زنجیره‌ی تأمین رو فعال نگه می‌داره.' },
        { title: 'بازرگانی عمومی', highlight: 'و تأمین کالا', description: 'تأمین محصولات باکیفیت و ساخت شبکه‌های تأمین قابل‌اعتماد برای پشتیبانی از صنایع مختلف.' },
        { title: 'انرژی', highlight: 'و پتروشیمی', description: 'اتصال بازارهای انرژی و پشتیبانی از تأمین منابع حیاتی برای آینده‌ای رو به رشد.' },
        { title: 'راه‌اندازی کسب‌وکار', highlight: 'و سرمایه‌گذاری', description: 'کمک به کسب‌وکارها برای ثبت، رشد و سرمایه‌گذاری در عمان با ساختار، شرکا و پشتیبانی درست.' },
      ],
    },
    story: {
      eyebrow: 'داستان ما',
      title: 'از یک چشم‌انداز',
      highlight: 'تا تأثیری ماندگار.',
      lead: 'مسیری که بر پایه‌ی طراحی، اجرا و فرصت‌های کسب‌وکار در عمان و منطقه ساخته شده.',
      body: 'کارمون رو تو عمان با یک چشم‌انداز روشن شروع کردیم: خلق فضا، ارائه‌ی کیفیت و وصل‌کردن فرصت‌های کسب‌وکار. از طراحی معماری و فیت‌اوت تا املاک، بازرگانی، لجستیک، انرژی و راه‌اندازی کسب‌وکار، الگانزا یونایتد بیزینس به شریکی قابل‌اعتماد برای مشتری‌ها در سراسر منطقه تبدیل شده.',
      stats: [
        { value: '+۹', label: 'سال تجربه', sub: 'در عمان' },
        { value: '+۱۰۰', label: 'پروژه‌ی انجام‌شده', sub: 'در حوزه‌های مختلف' },
        { value: '۶', label: 'حوزه‌ی', sub: 'یکپارچه' },
        { value: 'بلندمدت', label: 'شراکت‌ها', sub: 'در عمان و منطقه' },
      ],
      cta: 'مسیر ما رو ببینید',
      timeline: [
        { year: '۲۰۱۶', text: 'شروع مسیرمون در عمان با پروژه‌های طراحی و ساخت' },
        { year: '۲۰۱۸', text: 'ساخت یک تیم قوی و گسترش خدمات' },
        { year: '۲۰۲۰', text: 'ورود به املاک و بازرگانی و خلق فرصت‌های جدید کسب‌وکار' },
        { year: '۲۰۲۳', text: 'گسترش به لجستیک، انرژی و پتروشیمی' },
        { year: '۲۰۲۵', text: 'حضور رو به رشد منطقه‌ای با شرکای قابل‌اعتماد و مشتری‌های بلندمدت' },
      ],
    },
    projects: {
      eyebrow: 'پروژه‌های منتخب',
      title: 'پروژه‌های واقعی.',
      highlight: 'نتایج واقعی.',
      subtitle: 'گزیده‌ای از پروژه‌های ما در حوزه‌های مختلف که توانمندی، توجه به جزئیات و تعهدمون به کیفیت رو نشون می‌ده.',
      cta: 'درباره‌ی پروژه‌تون صحبت کنیم',
      items: [
        { category: 'طراحی داخلی و فیت‌اوت', title: 'فرودگاه بین‌المللی مسقط', location: 'سالن CIP – مسقط، عمان' },
        { category: 'غرفه‌های نمایشگاهی', title: 'Oman Agrofood 2025', location: 'پاویون الجزایر – OCEC، مسقط' },
        { category: 'فیت‌اوت اداری', title: 'Oraman Office Group', location: 'شاطی القرم، مسقط' },
        { category: 'مسکونی', title: 'ویلای خصوصی', location: 'مسقط، عمان' },
        { category: 'صنعتی', title: 'تأسیسات صنعتی صحار', location: 'صحار، عمان' },
        { category: 'لجستیک و بازرگانی', title: 'محموله‌های بین‌المللی', location: 'امارات – عمان – بازارهای منطقه' },
      ],
    },
    partners: {
      eyebrow: 'مورد اعتماد شرکای ما در سراسر منطقه',
      names: ['Al Noor Holdings', 'Gulf Bridge Logistics', 'Muscat Build Co.', 'Oasis Energy', 'Desert Pearl Trading', 'Sohar Steel Works', 'Harbor Line Shipping', 'Qurum Interiors'],
    },
    contact: {
      eyebrow: 'بیایید با هم بسازیم',
      title: 'پروژه‌ی بعدی شما',
      highlight: 'از اینجا شروع می‌شه.',
      subtitle: 'چه پروژه‌ای در دست دارید، چه یک فرصت کسب‌وکار یا ایده‌ی همکاری، ما اینجاییم تا بشنویم و ایده‌هاتون رو به واقعیت تبدیل کنیم.',
      steps: ['درباره‌ی پروژه‌تون صحبت کنیم', 'راه‌حلی متناسب بگیرید', 'یک شراکت بلندمدت بسازیم'],
      form: {
        name: 'نام شما',
        email: 'ایمیل شما',
        phone: 'شماره تماس',
        type: 'نوع پروژه',
        types: ['ساخت‌وساز، طراحی و فیت‌اوت', 'املاک و مستغلات', 'لجستیک و حمل‌ونقل', 'بازرگانی عمومی و تأمین کالا', 'انرژی و پتروشیمی', 'راه‌اندازی کسب‌وکار و سرمایه‌گذاری', 'سایر'],
        message: 'پیام شما',
        send: 'ارسال پیام',
        sent: 'ممنون! برنامه‌ی ایمیلتون با پیام آماده‌ی ارسال باز شد.',
      },
      info: { phone: '+968 9200 4000', phoneNote: 'تماس یا واتس‌اپ', email: 'info@eleganza.om', emailNote: 'سؤالات عمومی', city: 'مسقط، عمان', cityNote: 'دفتر مرکزی', follow: 'ما رو دنبال کنید' },
      strip: [
        { value: '۶', label: 'حوزه' },
        { value: '+۱۰۰', label: 'پروژه' },
        { value: '+۹', label: 'سال در عمان' },
      ],
      regions: ['امارات', 'عمان', 'بازارهای منطقه'],
      copyright: 'الگانزا یونایتد بیزینس. تمامی حقوق محفوظ است.',
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
      eyebrow: 'چرا الگانزا',
      title: 'فراتر از خدمات.',
      highlight: 'یک شریک قابل‌اعتماد.',
      subtitle: 'تخصص، تجربه‌ی منطقه‌ای و رویکردی عملی رو کنار هم می‌ذاریم تا برای مشتری‌هامون در عمان و کل منطقه ارزش واقعی خلق کنیم.',
      features: [
        { title: 'تخصص جامع', description: 'از طراحی و ساخت تا بازرگانی، لجستیک، انرژی و راه‌اندازی کسب‌وکار، راه‌حل‌های یکپارچه رو زیر یک مجموعه ارائه می‌دیم.' },
        { title: 'تیم باتجربه', description: 'تیمی چندتخصصی با سال‌ها تجربه‌ی عملی در عمان و بازارهای منطقه، برای اجرای حرفه‌ای و پشتیبانی قابل‌اعتماد.' },
        { title: 'تمرکز بر کیفیت', description: 'به استانداردهای بالا، توجه به جزئیات و نتایج ماندگار در همه‌ی حوزه‌ها متعهدیم.' },
        { title: 'اجرای قابل‌اعتماد', description: 'تحویل به‌موقع، ارتباط شفاف و راه‌حل‌های عملی که پروژه‌ها و زنجیره‌های تأمین رو روان نگه می‌داره.' },
        { title: 'شراکت‌های قوی', description: 'شبکه‌ای قابل‌اعتماد از شرکای محلی و بین‌المللی که دسترسی به منابع، بازارها و فرصت‌های منطقه رو برامون فراهم می‌کنه.' },
        { title: 'ارزش بلندمدت', description: 'روی ساخت روابط پایدار و خلق فرصت‌هایی تمرکز می‌کنیم که از رشد مشتری‌ها و شرکامون پشتیبانی کنه.' },
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
        { title: 'منابع', links: [ { label: 'اخبار و تحلیل‌ها', href: '#news' }, { label: 'رویدادها', href: '#events' }, { label: 'تماس با ما', href: '#contact' } ] },
      ],
      legalLinks: [ { label: 'شرایط استفاده', href: '#' }, { label: 'حریم خصوصی', href: '#' } ],
      copyright: 'الگانزا یونایتد بیزینس. تمامی حقوق محفوظ است.',
      mockNotice: 'صفحه‌ی پیش‌نمایش — محتوا و اعداد فعلاً نمونه هستن تا محتوای نهایی برند آماده بشه.',
    },
  },
  ar: {
    nav: [
      { label: 'القطاعات', href: '#industries' },
      { label: 'قصتنا', href: '#story' },
      { label: 'لماذا إليغانزا', href: '#why' },
      { label: 'المشاريع', href: '#projects' },
      { label: 'شركاؤنا', href: '#partners' },
    ],
    navCta: 'تواصل معنا',
    hero: {
      eyebrow: 'حيث تلتقي الرؤية بالفرصة',
      slogan1: 'نربط الأعمال.',
      slogan2: 'نصنع الفرص.',
      title: 'عمل موحّد،',
      highlight: 'مبني على الثقة',
      subtitle: 'تجمع إليغانزا يونايتد بيزنس ست مجالات عمل تحت رؤية واحدة — تربط رأس المال والخبرة والطموح في جميع أنحاء المنطقة.',
      ctaPrimary: 'استكشف مجالاتنا',
      ctaSecondary: 'ابدأ التعاون',
    },
    statement: {
      eyebrow: 'ما وراء الأعمال. نحو الإمكانيات.',
      title: 'شريك واحد.',
      highlight: 'فرص بلا حدود.',
      subtitle: 'تربط إليغانزا يونايتد بيزنس، ومقرها في سلطنة عُمان، الخبرات والموارد والفرص عبر ستة قطاعات رئيسية — لتساعد الشركات والمستثمرين على تحويل الأفكار الطموحة إلى مشاريع ناجحة.',
    },
    industryGrid: {
      eyebrow: 'قطاعاتنا',
      title: 'ستة قطاعات.',
      highlight: 'رؤية واحدة متكاملة.',
      subtitle: 'تعمل إليغانزا يونايتد بيزنس عبر ستة قطاعات رئيسية، تجمع بين الخبرة والموارد لخلق القيمة وبناء الشراكات ودفع النمو المستدام.',
      cta: 'استكشف قطاعاتنا',
      items: [
        { title: 'البناء،', highlight: 'التصميم والتجهيز', description: 'من الفكرة إلى التسليم، نقدّم حلول بناء وتجهيز عالية الجودة للمشاريع السكنية والتجارية والمتخصصة.' },
        { title: 'العقارات', highlight: 'والممتلكات', description: 'تحديد الفرص وتطوير الأصول وخلق قيمة طويلة الأمد في عُمان والمنطقة.' },
        { title: 'الخدمات اللوجستية', highlight: 'والشحن', description: 'حلول لوجستية موثوقة تربط الأسواق وتنقل الأعمال وتحافظ على استمرارية سلاسل الإمداد.' },
        { title: 'التجارة العامة', highlight: 'والتوريد', description: 'توريد منتجات عالية الجودة وبناء شبكات إمداد موثوقة لدعم مختلف القطاعات.' },
        { title: 'الطاقة', highlight: 'والبتروكيماويات', description: 'ربط أسواق الطاقة ودعم توريد الموارد الأساسية لمستقبل متنامٍ.' },
        { title: 'تأسيس الأعمال', highlight: 'والاستثمار', description: 'مساعدة الشركات على التأسيس والنمو والاستثمار في عُمان بالهيكل والشراكات والدعم المناسب.' },
      ],
    },
    story: {
      eyebrow: 'قصتنا',
      title: 'من الرؤية',
      highlight: 'إلى أثرٍ دائم.',
      lead: 'رحلة مبنية على التصميم والتنفيذ وفرص الأعمال في عُمان والمنطقة.',
      body: 'بدأنا في عُمان برؤية واضحة لصناعة المساحات وتقديم الجودة وربط فرص الأعمال. من التصميم المعماري والتجهيز إلى العقارات والتجارة والخدمات اللوجستية والطاقة وتأسيس الأعمال، أصبحت إليغانزا يونايتد بيزنس شريكاً موثوقاً للعملاء في جميع أنحاء المنطقة.',
      stats: [
        { value: '+٩', label: 'سنوات من الخبرة', sub: 'في عُمان' },
        { value: '+١٠٠', label: 'مشروع منجز', sub: 'عبر القطاعات' },
        { value: '٦', label: 'قطاعات', sub: 'متكاملة' },
        { value: 'طويلة الأمد', label: 'شراكات', sub: 'في عُمان والمنطقة' },
      ],
      cta: 'اكتشف رحلتنا',
      timeline: [
        { year: '٢٠١٦', text: 'بدأنا رحلتنا في عُمان بمشاريع التصميم والبناء' },
        { year: '٢٠١٨', text: 'بنينا فريقاً قوياً ووسّعنا خدماتنا' },
        { year: '٢٠٢٠', text: 'دخلنا مجالي العقارات والتجارة لنصنع فرص أعمال جديدة' },
        { year: '٢٠٢٣', text: 'توسّعنا في الخدمات اللوجستية والطاقة والبتروكيماويات' },
        { year: '٢٠٢٥', text: 'حضور إقليمي متنامٍ مع شركاء موثوقين وعملاء على المدى الطويل' },
      ],
    },
    projects: {
      eyebrow: 'مشاريع مختارة',
      title: 'مشاريع حقيقية.',
      highlight: 'نتائج حقيقية.',
      subtitle: 'مجموعة مختارة من مشاريعنا عبر قطاعات مختلفة، تعكس قدراتنا واهتمامنا بالتفاصيل والتزامنا بالجودة.',
      cta: 'ناقش مشروعك',
      items: [
        { category: 'التصميم الداخلي والتجهيز', title: 'مطار مسقط الدولي', location: 'صالة CIP – مسقط، عُمان' },
        { category: 'أجنحة المعارض', title: 'Oman Agrofood 2025', location: 'جناح الجزائر – OCEC، مسقط' },
        { category: 'تجهيز المكاتب', title: 'Oraman Office Group', location: 'شاطئ القرم، مسقط' },
        { category: 'سكني', title: 'فيلا خاصة', location: 'مسقط، عُمان' },
        { category: 'صناعي', title: 'منشأة صحار الصناعية', location: 'صحار، عُمان' },
        { category: 'الخدمات اللوجستية والتجارة', title: 'شحنات دولية', location: 'الإمارات – عُمان – الأسواق الإقليمية' },
      ],
    },
    partners: {
      eyebrow: 'موضع ثقة شركائنا في جميع أنحاء المنطقة',
      names: ['Al Noor Holdings', 'Gulf Bridge Logistics', 'Muscat Build Co.', 'Oasis Energy', 'Desert Pearl Trading', 'Sohar Steel Works', 'Harbor Line Shipping', 'Qurum Interiors'],
    },
    contact: {
      eyebrow: 'لنبنِ معاً',
      title: 'مشروعك القادم',
      highlight: 'يبدأ من هنا.',
      subtitle: 'سواء كان لديك مشروع أو فرصة أعمال أو فكرة شراكة، نحن هنا لنستمع ونحوّل أفكارك إلى واقع.',
      steps: ['ناقش مشروعك', 'احصل على حل مخصص', 'ابنِ شراكة طويلة الأمد'],
      form: {
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        phone: 'رقم الهاتف',
        type: 'نوع المشروع',
        types: ['البناء والتصميم والتجهيز', 'العقارات والممتلكات', 'الخدمات اللوجستية والشحن', 'التجارة العامة والتوريد', 'الطاقة والبتروكيماويات', 'تأسيس الأعمال والاستثمار', 'أخرى'],
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        sent: 'شكراً لك! تم فتح تطبيق البريد ورسالتك جاهزة للإرسال.',
      },
      info: { phone: '+968 9200 4000', phoneNote: 'اتصال أو واتساب', email: 'info@eleganza.om', emailNote: 'الاستفسارات العامة', city: 'مسقط، عُمان', cityNote: 'المقر الرئيسي', follow: 'تابع رحلتنا' },
      strip: [
        { value: '٦', label: 'قطاعات' },
        { value: '+١٠٠', label: 'مشروع' },
        { value: '+٩', label: 'سنوات في عُمان' },
      ],
      regions: ['الإمارات', 'عُمان', 'الأسواق الإقليمية'],
      copyright: 'إليغانزا يونايتد بيزنس ش.م.م. جميع الحقوق محفوظة.',
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
      eyebrow: 'لماذا إليغانزا',
      title: 'أكثر من مجرد خدمات.',
      highlight: 'شريك موثوق.',
      subtitle: 'نجمع بين الخبرة والتجربة الإقليمية والنهج العملي لنقدّم قيمة حقيقية لعملائنا في عُمان والمنطقة الأوسع.',
      features: [
        { title: 'خبرة متكاملة', description: 'من التصميم والبناء إلى التجارة والخدمات اللوجستية والطاقة وتأسيس الأعمال، نقدّم حلولاً متكاملة تحت مجموعة واحدة.' },
        { title: 'فريق ذو خبرة', description: 'فريق متعدد التخصصات يمتلك سنوات من الخبرة العملية في عُمان والأسواق الإقليمية، لضمان تنفيذ احترافي ودعم موثوق.' },
        { title: 'التركيز على الجودة', description: 'نلتزم بأعلى المعايير والاهتمام بالتفاصيل ونتائج تدوم طويلاً في جميع القطاعات.' },
        { title: 'تنفيذ موثوق', description: 'تسليم في الوقت المحدد وتواصل واضح وحلول عملية تُبقي المشاريع وسلاسل الإمداد تسير بسلاسة.' },
        { title: 'شراكات قوية', description: 'شبكة موثوقة من الشركاء المحليين والدوليين تمنحنا الوصول إلى الموارد والأسواق والفرص في جميع أنحاء المنطقة.' },
        { title: 'قيمة طويلة الأمد', description: 'نركّز على بناء علاقات مستدامة وخلق فرص تدعم نمو عملائنا وشركائنا.' },
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
        { title: 'الموارد', links: [ { label: 'الأخبار والرؤى', href: '#news' }, { label: 'الفعاليات', href: '#events' }, { label: 'تواصل معنا', href: '#contact' } ] },
      ],
      legalLinks: [ { label: 'شروط الاستخدام', href: '#' }, { label: 'سياسة الخصوصية', href: '#' } ],
      copyright: 'إليغانزا يونايتد بيزنس. جميع الحقوق محفوظة.',
      mockNotice: 'صفحة معاينة — المحتوى والأرقام المعروضة هي عناصر نائبة ريثما يتم إعداد المحتوى النهائي للعلامة التجارية.',
    },
  },
};

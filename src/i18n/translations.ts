export type Locale = 'en' | 'fa' | 'ar';

export interface LocaleConfig {
  dir: 'ltr' | 'rtl';
  label: string;
}

export const locales: Record<Locale, LocaleConfig> = {
  en: { dir: 'ltr', label: 'English' },
  fa: { dir: 'rtl', label: 'فارسی' },
  ar: { dir: 'rtl', label: 'العربية' },
};

export interface Pillar {
  title: string;
  description: string;
}

export interface Industry {
  label: string;
}

export interface Translation {
  badge: string;
  brandLine1: string;
  brandLine2: string;
  headline: string;
  subtitle: string;
  pillars: [Pillar, Pillar, Pillar];
  industriesLabel: string;
  industries: [Industry, Industry, Industry, Industry, Industry, Industry];
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  emailPlaceholder: string;
  notifyBtn: string;
  successMsg: string;
  footer: string;
}

export const translations: Record<Locale, Translation> = {
  en: {
    badge: 'Launching Soon',
    brandLine1: 'ELEGANZA',
    brandLine2: 'UNITED BUSINESS',
    headline: 'A new standard of business excellence',
    subtitle:
      'Our new home on the web is being crafted. Leave your email and be the first to know when we arrive.',
    pillars: [
      { title: 'One Vision', description: 'Unified direction and purpose.' },
      { title: 'Multiple Solutions', description: 'Diverse expertise, smart solutions.' },
      { title: 'Endless Possibilities', description: 'Limitless potential, global impact.' },
    ],
    industriesLabel: 'Our Industries',
    industries: [
      { label: 'Holding' },
      { label: 'Construction' },
      { label: 'Real Estate' },
      { label: 'Investment' },
      { label: 'Oil & Gas' },
      { label: 'Trading' },
    ],
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    emailPlaceholder: 'Your email address',
    notifyBtn: 'Notify Me',
    successMsg: "You're on the list. We'll be in touch.",
    footer: 'All rights reserved.',
  },
  fa: {
    badge: 'به‌زودی راه‌اندازی می‌شود',
    brandLine1: 'الگانزا',
    brandLine2: 'یونایتد بیزینس',
    headline: 'استانداردی نو از تعالی کسب‌وکار',
    subtitle: 'خانه‌ی جدیدمون تو وب داره ساخته می‌شه. ایمیلت رو بذار تا اولین نفری باشی که خبردار می‌شه.',
    pillars: [
      { title: 'یک چشم‌انداز', description: 'مسیر و هدفی یکپارچه.' },
      { title: 'راهکارهای متعدد', description: 'تخصص متنوع، راهکارهای هوشمند.' },
      { title: 'امکانات بی‌پایان', description: 'پتانسیل نامحدود، تأثیر جهانی.' },
    ],
    industriesLabel: 'حوزه‌های فعالیت',
    industries: [
      { label: 'هلدینگ' },
      { label: 'ساخت‌وساز' },
      { label: 'املاک' },
      { label: 'سرمایه‌گذاری' },
      { label: 'نفت و گاز' },
      { label: 'تجارت' },
    ],
    days: 'روز',
    hours: 'ساعت',
    minutes: 'دقیقه',
    seconds: 'ثانیه',
    emailPlaceholder: 'آدرس ایمیلت',
    notifyBtn: 'خبرم کن',
    successMsg: 'ثبت شد! به‌زودی باهات در تماسیم.',
    footer: 'تمامی حقوق محفوظ است.',
  },
  ar: {
    badge: 'الإطلاق قريباً',
    brandLine1: 'إليغانزا',
    brandLine2: 'يونايتد بيزنس',
    headline: 'معيار جديد للتميز في الأعمال',
    subtitle: 'موقعنا الجديد قيد الإنشاء. اترك بريدك الإلكتروني لتكون أول من يعلم عند الإطلاق.',
    pillars: [
      { title: 'رؤية واحدة', description: 'اتجاه وهدف موحّد.' },
      { title: 'حلول متعددة', description: 'خبرات متنوعة، حلول ذكية.' },
      { title: 'إمكانيات لا نهائية', description: 'إمكانات غير محدودة، تأثير عالمي.' },
    ],
    industriesLabel: 'مجالات عملنا',
    industries: [
      { label: 'القابضة' },
      { label: 'الإنشاءات' },
      { label: 'العقارات' },
      { label: 'الاستثمار' },
      { label: 'النفط والغاز' },
      { label: 'التجارة' },
    ],
    days: 'يوم',
    hours: 'ساعة',
    minutes: 'دقيقة',
    seconds: 'ثانية',
    emailPlaceholder: 'بريدك الإلكتروني',
    notifyBtn: 'أعلمني',
    successMsg: 'تم التسجيل! سنتواصل معك قريباً.',
    footer: 'جميع الحقوق محفوظة.',
  },
};

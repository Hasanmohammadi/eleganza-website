import type { Locale } from './translations';

// محتوای تجربه‌ی «ویدیو با اسکرول» (روت‌های /en/cinematic/، /fa/cinematic/، /ar/cinematic/).
// سه عبارت وسط (One Vision / ...) از translations.ts (pillars) و برچسب‌های منو/CTA از cinematic.ts میان.
export interface ScrollVideoContent {
  pageTitle: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  sub: string;
  statValue: number;
  statLabel: string;
  scrollHint: string;
  numberLocale: string; // برای نمایش ارقام (فارسی/عربی‌هندی) تو شمارنده
}

export const scrollVideoContent: Record<Locale, ScrollVideoContent> = {
  en: {
    pageTitle: 'Eleganza United Business',
    eyebrow: 'Eleganza · Construction & Real Estate',
    titleLine1: 'We build with vision,',
    titleLine2: 'we renovate with excellence',
    sub: 'From foundation to finish, every Eleganza project is crafted to last a lifetime.',
    statValue: 15,
    statLabel: 'Years transforming spaces, guided by one vision',
    scrollHint: 'Scroll',
    numberLocale: 'en-US',
  },
  fa: {
    pageTitle: 'الگانزا یونایتد بیزینس',
    eyebrow: 'الگانزا · ساخت‌وساز و املاک',
    titleLine1: 'با چشم‌انداز می‌سازیم،',
    titleLine2: 'با تعالی بازسازی می‌کنیم',
    sub: 'از پی‌ریزی تا آخرین جزئیات، هر پروژه‌ی الگانزا برای ماندگاری ساخته می‌شه.',
    statValue: 15,
    statLabel: 'سال تجربه در متحول‌کردن فضاها، با یک چشم‌انداز',
    scrollHint: 'اسکرول کنید',
    numberLocale: 'fa-IR',
  },
  ar: {
    pageTitle: 'إليغانزا يونايتد بيزنس',
    eyebrow: 'إليغانزا · الإنشاءات والعقارات',
    titleLine1: 'نبني برؤية،',
    titleLine2: 'ونجدّد بتميّز',
    sub: 'من الأساس حتى اللمسة الأخيرة، كل مشروع من إليغانزا مصمَّم ليدوم مدى الحياة.',
    statValue: 15,
    statLabel: 'سنوات من تحويل المساحات، برؤية واحدة',
    scrollHint: 'مرّر للأسفل',
    numberLocale: 'ar-EG',
  },
};

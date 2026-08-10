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

export interface Translation {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
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
    badge: 'Coming Soon',
    title: 'We are building',
    highlight: 'something great',
    subtitle: "Our new website is on its way. Leave your email and we'll let you know the moment we launch.",
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    emailPlaceholder: 'Your email address',
    notifyBtn: 'Notify me',
    successMsg: "Thanks! We'll be in touch.",
    footer: 'All rights reserved.',
  },
  fa: {
    badge: 'به‌زودی',
    title: 'در حال ساخت',
    highlight: 'یه چیز خفن هستیم',
    subtitle: 'سایت جدیدمون داره آماده می‌شه. ایمیلت رو بذار تا لحظه لانچ بهت خبر بدیم.',
    days: 'روز',
    hours: 'ساعت',
    minutes: 'دقیقه',
    seconds: 'ثانیه',
    emailPlaceholder: 'آدرس ایمیلت',
    notifyBtn: 'خبرم کن',
    successMsg: 'ممنون! بهت خبر می‌دیم.',
    footer: 'تمامی حقوق محفوظ است.',
  },
  ar: {
    badge: 'قريباً',
    title: 'نحن نعمل على',
    highlight: 'شيء رائع',
    subtitle: 'موقعنا الجديد في الطريق. اترك بريدك الإلكتروني وسنخبرك فور الإطلاق.',
    days: 'يوم',
    hours: 'ساعة',
    minutes: 'دقيقة',
    seconds: 'ثانية',
    emailPlaceholder: 'بريدك الإلكتروني',
    notifyBtn: 'أعلمني',
    successMsg: 'شكراً لك! سنتواصل معك قريباً.',
    footer: 'جميع الحقوق محفوظة.',
  },
};

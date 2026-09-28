import type { Locale } from './translations';

export interface CinematicContent {
  navigatePill: string;
  closePill: string;
  overlayLinks: { label: string; href: string }[];
  subcopy: string;
  cta: string;
}

export const cinematicContent: Record<Locale, CinematicContent> = {
  en: {
    navigatePill: 'Navigate',
    closePill: 'Close',
    overlayLinks: [
      { label: 'Home', href: '/en/home/' },
      { label: 'Story', href: '/en/home/#about' },
      { label: 'Business', href: '/en/home/#business' },
      { label: 'Contact', href: '/en/home/#contact' },
    ],
    subcopy: 'Be part of the vision from day one.',
    cta: 'Join the Waitlist',
  },
  fa: {
    navigatePill: 'منو',
    closePill: 'بستن',
    overlayLinks: [
      { label: 'خانه', href: '/fa/home/' },
      { label: 'داستان ما', href: '/fa/home/#about' },
      { label: 'کسب‌وکار', href: '/fa/home/#business' },
      { label: 'تماس', href: '/fa/home/#contact' },
    ],
    subcopy: 'از همون روز اول بخشی از این چشم‌انداز باش.',
    cta: 'به لیست انتظار بپیوند',
  },
  ar: {
    navigatePill: 'التنقل',
    closePill: 'إغلاق',
    overlayLinks: [
      { label: 'الرئيسية', href: '/ar/home/' },
      { label: 'قصتنا', href: '/ar/home/#about' },
      { label: 'أعمالنا', href: '/ar/home/#business' },
      { label: 'تواصل', href: '/ar/home/#contact' },
    ],
    subcopy: 'كن جزءاً من هذه الرؤية منذ اليوم الأول.',
    cta: 'انضم إلى قائمة الانتظار',
  },
};

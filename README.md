# Eleganza United Business — Website (Astro SSG)

صفحه‌ی «به‌زودی» **زنده‌ی سایت** (بدون تغییر) + یه **صفحه‌ی اصلی کامل در حالت
پیش‌نمایش** — هدر، هیرو، آمار، حوزه‌های فعالیت، اخبار، رویدادها، فوتر —
الهام‌گرفته از ساختار سایت‌هایی مثل DMCC ولی با هویت بصری Eleganza.

## 🔍 صفحه‌ی پیش‌نمایش صفحه‌ی اصلی

این مسیرها یه طرح کامل از صفحه‌ی اصلی *آینده‌ی* سایت رو نشون می‌دن:

- `/en/home/`
- `/fa/home/`
- `/ar/home/`

شامل: هدر چسبان با منو و سوییچر زبان، هیروی با تصویر اسکای‌لاین، نوار آمار،
گرید «Explore Eleganza»، شش حوزه‌ی فعالیت، «چرا الگانزا»، سه‌قدم همکاری، اخبار،
رویدادهای پیش‌رو، و فوتر چندستونه — همه با انیمیشن ورود موقع اسکرول (GSAP +
ScrollTrigger).

⚠️ **همه‌ی آمار، اخبار، رویدادها و تصاویر تو این صفحه، داده‌ی MOCK
(نمونه/جایگزین) هستن** و باید قبل از انتشار واقعی با اطلاعات واقعی شرکت
جایگزین بشن (محل دقیقشون: `src/i18n/home.ts`).

به همین خاطر این صفحات **`noindex`** شدن (گوگل ایندکسشون نمی‌کنه).
**صفحه‌ی زنده‌ی فعلی سایت** (`/en/`, `/fa/`, `/ar/`) همچنان همون Coming Soon
قبلیه و کاملاً دست‌نخورده مونده — این پیش‌نمایش جاش رو نگرفته.

وقتی طرح رو دیدی و پسندیدی، بگو تا:
1. محتوای mock رو با محتوای واقعی جایگزین کنم
2. این صفحه رو جای Coming Soon فعلی بذارم
3. `noindex` رو بردارم تا قابل‌ایندکس بشه و به sitemap اضافه بشه

---

## چی تو کل پروژه هست؟

- ⚡ Astro با خروجی کاملاً استاتیک (SSG)
- 🎨 پالت رنگی دقیق برند + فونت اختصاصی هر زبان
- 🎬 انیمیشن‌های حرفه‌ای premium روی صفحه‌ی پیش‌نمایش:
  - **GSAP + ScrollTrigger** برای ریویل موقع اسکرول (هر بخش با انیمیشن مخصوص خودش)
  - **Lenis** برای اسکرول نرم سراسری
  - **Astro View Transitions** برای جابجایی نرم بین صفحات (بومی، بدون کتابخونه‌ی اضافه)
  - **Three.js** — لایه‌ی ذرات سه‌بعدی ظریف طلایی پشت هیرو
  - پارالاکس اسکرولی، دکمه‌های مگنتیک، تیلت سه‌بعدی کارت‌ها با موس،
    شمارش اعداد از صفر، ریویل کلمه‌به‌کلمه‌ی هدلاین، خط اتصال SVG که با
    اسکرول کشیده می‌شه
  - همه‌جا با پشتیبانی `prefers-reduced-motion`
- 🌐 سه‌زبانه: English / فارسی / العربية
- 🔍 SEO کامل روی صفحات زنده (meta, OG, hreflang, sitemap, JSON-LD)
- 📦 پکیج‌منیجر: **npm**

## نصب و اجرا

```bash
npm install
npm run dev
```

## Build نهایی

```bash
npm run build     # خروجی استاتیک + sitemap.xml داخل dist/
npm run preview
```

## ساختار پروژه

```
public/
  mock/                    # تصاویر placeholder برای صفحه‌ی پیش‌نمایش
  og-image.png, favicon.ico, site.webmanifest, robots.txt
src/
  components/
    ComingSoon.astro         # صفحه‌ی زنده‌ی فعلی
    IndustryRing.astro, EmblemMark.astro, LanguageSwitcher.astro
    Seo.astro                  # متا تگ‌ها، OG، hreflang، JSON-LD (با پشتیبانی noindex)
    home/                        # کامپوننت‌های صفحه‌ی پیش‌نمایش
      Header.astro, Hero.astro, StatsBar.astro, Intro.astro,
      ExploreGrid.astro, IndustriesSection.astro, WhyChoose.astro,
      ProcessSteps.astro, NewsSection.astro, EventsSection.astro,
      Footer.astro, HomePage.astro (ترکیب همه‌ی بخش‌ها)
  i18n/
    translations.ts            # متن صفحه‌ی Coming Soon
    home.ts                      # متن صفحه‌ی پیش‌نمایش (منو، هیرو، آمار، اخبار...)
  layouts/Layout.astro             # هد صفحه + فونت هر زبان + Seo (+ noindex اختیاری)
  pages/
    index.astro                     # ریدایرکت (noindex)
    en/index.astro, fa/index.astro, ar/index.astro   # صفحه‌ی زنده‌ی Coming Soon
    en/home/, fa/home/, ar/home/                       # پیش‌نمایش صفحه‌ی اصلی (noindex)
astro.config.mjs                     # site url + sitemap integration
tailwind.config.mjs                    # پالت رنگی دقیق برند
```

## شخصی‌سازی صفحه‌ی پیش‌نمایش

- همه‌ی متن‌ها (منو، آمار، اخبار، رویدادها، فوتر) تو `src/i18n/home.ts` هستن —
  هر سه زبان کنار هم.
- تصاویر placeholder تو `public/mock/` — وقتی عکس واقعی داشتی، همون اسم‌ها رو
  جایگزین کن یا مسیر `image` رو تو `home.ts` عوض کن.
- برای تغییر رنگ‌ها، فقط `tailwind.config.mjs` رو عوض کن — همه‌جا از همون
  توکن‌ها (`gold`, `charcoal`, `navy`, `platinum`, `warmwhite`) استفاده شده.

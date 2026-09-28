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

---

## 🎬 تجربه‌ی «ویدیو با اسکرول» (`/en/cinematic/`، `/fa/cinematic/`، `/ar/cinematic/`)

ویدیوی بازسازی خونه (قدیمی ← مدرن) کل صفحه رو پر می‌کنه و با اسکرول دقیق جلو/عقب می‌ره؛ متن‌ها
(هیرو، One Vision، Multiple Solutions، Endless Possibilities، آمار ۱۵+) هرکدوم تو بازه‌ی خودشون روش میان.
این روت‌ها جای صفحه‌ی سینمایی قبلی (عکس ثابت + گوی‌ها) رو گرفتن. Coming Soon و Home Preview دست‌نخورده‌ان.

**آپدیت**: الان به‌جای یه ویدیوی تنها، **سه ویدیو پشت‌سرهم** پخش می‌شن (هرکدوم مستقل، متن خودشو داره، وقتی اسکرولش تموم شد طبیعی می‌ری سراغ بعدی): بازسازی خونه («One Vision»)، ساعت فلیپ («Multiple Solutions»)، غروب («Endless Possibilities» + دکمه‌ی نهایی). این سه‌تا از `t.pillars` (translations.ts) میان، پس با بقیه‌ی سایت هماهنگن.

**محو متقابل بین ویدیوها**: هر سکشن (به‌جز اولی) با `margin-top: -60vh` روی انتهای سکشن قبلی می‌شینه (`VideoSegment.astro`، پراپ `isFirst`). یه اسکریپت مشترک تو `ScrollVideoPage.astro` دقیقاً همون ۶۰vh رو اپاسیتی می‌ده: سکشن قبلی محو میشه بیرون درست همون لحظه‌ای که سکشن بعدی محو میشه داخل. عدد `FADE_VH` باید تو هر دو فایل یکی بمونه (الان ۶۰). کامپوننت مشترکشون `VideoSegment.astro`ه — یه ویدیو دیگه بخوای اضافه کنی، فقط یه `<VideoSegment .../>` دیگه تو `ScrollVideoPage.astro` می‌ذاری.

```
public/media/house-renovation.mp4       ویدیو (هر فریم keyframe، برای اسکراب نرم)
src/i18n/scrollvideo.ts                 محتوای سه‌زبانه‌ی هیرو/آمار (بقیه از translations.ts و cinematic.ts)
src/layouts/ScrollVideoLayout.astro     Layout ساده‌ی مخصوص این تجربه
src/components/scrollvideo/             VideoWrap، Overlays، Nav، Stat، ScrollVideoPage
```

### قواعدی که با آزمون‌وخطا پیدا شد (نشکنید!)
- **`overflow-x: hidden` روی `html`/`body` ممنوع.** `overflow-y` رو هم `auto` می‌کنه، `body` می‌شه scroll container و
  `position: sticky` (که ScrollyVideo روش حساب می‌کنه) هیچ‌وقت نمی‌چسبه. به‌جاش `overflow-x: clip`.
- این Layout **عمداً** Lenis و CustomCursor ندارن (Layout.astro اصلی دارد). تو تست‌ها بدون اون‌ها کار کرد.
- `astro.config.mjs`: `tailwind({ applyBaseStyles: false })` — preflight روی `video`/`img` صفحه‌ی ویدیو اثر نذاره.
  Layout.astro اصلی همچنان base رو از `global.css` می‌گیره.
- لینک‌های خروجی `data-astro-reload` دارن (مقصدشون Layout دیگه‌ایه).
- ساخت ScrollyVideo روی `astro:page-load` و منتظر لود شدن کتابخونه‌ست (به‌خاطر ViewTransitions).
- **کتابخونه‌ها self-host هستن**: `gsap` و `scrolly-video` (با نسخه‌ی قفل‌شده‌ی `0.0.24`) موقع `npm install` / `npm run dev` / `npm run build` با `scripts/copy-vendor.mjs` از `node_modules` به `public/vendor/` کپی می‌شن و از خود سایت سرو می‌شن. CDN فقط پشتیبانِ `onerror` هست. `npm run build` اگه کپی نشه **متوقف می‌شه** (تا سایت بی‌صدا با CDN منتشر نشه). فایل‌های `public/vendor/*` رو کامیت کن.
- فارسی/عربی: `letter-spacing` و `text-transform` خاموشه (حروف رو از هم جدا می‌کنن).
- ویدیو واترمارک PixVerse.ai دارد (فعلاً عمداً مونده).

تست‌های قدم‌به‌قدم (baseline تا step12) تو پروژه‌ی جداگانه‌ی `scrollyvideo-routes` هستن.

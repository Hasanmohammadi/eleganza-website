# Eleganza United Business — Website (Astro SSG)

صفحه‌ی «به‌زودی» برای Eleganza United Business — کاملاً استاتیک، سه‌زبانه،
پرانیمیشن، و فول SEO.

## چی توشه؟

- ⚡ Astro با خروجی کاملاً استاتیک (SSG)
- 🎨 پالت رنگی دقیق برند + فونت اختصاصی هر زبان
- 🎬 انیمیشن‌های فراوان با GSAP (ورود، ذرات، شیمر، پارالاکس، شمارش معکوس)
- ⭕ حلقه‌ی شش حوزه‌ی فعالیت (عنصر امضادار برند)
- 🌐 سه‌زبانه: English / فارسی / العربية
- 🔍 **SEO کامل** (توضیح کامل پایین‌تر)
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

---

## 🔍 SEO — چی اضافه شده و چرا

### ۱. متا تگ‌های پایه (هر صفحه)
`title`, `description`, `canonical` — هر صفحه (en/fa/ar) عنوان و توضیح
اختصاصی خودش رو داره (تو `src/i18n/translations.ts` قابل ویرایشه).

### ۲. Hreflang — مهم‌ترین بخش برای سایت چندزبانه
گوگل با این تگ‌ها می‌فهمه هر زبان مال کدوم کاربره و نسخه‌ی درست رو تو نتایج
جستجوی هر کشور نشون می‌ده. این تگ‌ها هم تو `<head>` هر صفحه هست (از طریق
`Seo.astro`) و هم تو خود `sitemap.xml`.

### ۳. Open Graph + Twitter Card
وقتی لینک سایت رو تو واتساپ/تلگرام/توییتر/لینکدین شیر کنی، یه کارت خوشگل
با عکس نشون داده می‌شه (`public/og-image.png` — طراحی‌شده با برند خودتون،
۱۲۰۰×۶۳۰ استاندارد).

### ۴. Structured Data (JSON-LD)
اسکیمای `Organization` و `WebSite` اضافه شده — به گوگل کمک می‌کنه نام برند،
لوگو و شعار شرکت رو مستقیم تو نتایج جستجو (Knowledge Panel احتمالی) نشون بده.

### ۵. `sitemap.xml` خودکار
با `@astrojs/sitemap` — موقع build خودش می‌سازتش و هر سه نسخه‌ی زبان رو
با ارتباط hreflang بهم وصل می‌کنه. آدرسش بعد از دیپلوی:
```
https://eleganzaco.com/sitemap-index.xml
```

### ۶. `robots.txt`
اجازه‌ی کراول کامل + آدرس sitemap رو به ربات‌ها می‌ده.

### ۷. Favicon کامل
`favicon.ico`, `apple-touch-icon.png`, آیکون‌های PWA و `site.webmanifest`
— همه از نشان برند خودتون ساخته شدن.

### ۸. صفحه‌ی ریشه (`/`) با `noindex`
چون `/` فقط یه ریدایرکت جاوااسکریپتیه (نه محتوای واقعی)، `noindex` شده تا
گوگل به‌جاش صفحات واقعی (`/en/`, `/fa/`, `/ar/`) رو ایندکس کنه.

---

## ✅ کارهایی که بعد از دیپلوی باید خودت انجام بدی

SEO تکنیکال سمت کد تمومه، ولی این مرحله‌ها بیرون از کد و لازمن:

1. **Google Search Console** (search.google.com/search-console):
   - سایت رو با دامنه‌ی `eleganzaco.com` اضافه کن
   - کد تاییدیه رو تو `src/components/Seo.astro` (خط `google-site-verification`) بذار
   - از بخش Sitemaps آدرس `https://eleganzaco.com/sitemap-index.xml` رو ثبت کن
2. **Bing Webmaster Tools** هم مشابه گوگل ثبتش کن (می‌تونی از GSC ایمپورت کنی)
3. تست کن لینک سایت تو واتساپ/تلگرام درست پیش‌نمایش می‌ده (کارت OG)
4. بعد از این‌که محتوای واقعی (نه فقط Coming Soon) جایگزین شد، `description`
   هر صفحه رو دقیق‌تر و مخصوص همون صفحه بنویس
5. برای رتبه گرفتن واقعی تو گوگل، عامل اصلی «محتوا» و «بک‌لینک»‌هاست —
   SEO تکنیکال (این‌جا) شرط لازمه ولی کافی نیست

## ساختار پروژه

```
public/
  og-image.png          # تصویر پیش‌نمایش شبکه‌های اجتماعی
  favicon.ico, apple-touch-icon.png, icon-32.png, icon-512.png
  site.webmanifest
  robots.txt
src/
  components/
    Seo.astro             # همه‌ی متا تگ‌ها، OG، hreflang، JSON-LD
    ComingSoon.astro       # کل صفحه + انیمیشن‌های GSAP
    IndustryRing.astro
    EmblemMark.astro
    LanguageSwitcher.astro
  i18n/translations.ts       # متن هر سه زبان
  layouts/Layout.astro         # هد صفحه + فونت هر زبان + Seo
  pages/
    index.astro                 # ریدایرکت (noindex)
    en/index.astro
    fa/index.astro
    ar/index.astro
astro.config.mjs                 # site url + sitemap integration
```

## شخصی‌سازی

- **تاریخ شمارش معکوس / فرم ایمیل**: همون توضیحات نسخه‌ی قبلی، بدون تغییر.
- **تصویر OG**: اگه خواستی عوضش کنی، فقط `public/og-image.png` رو با یه
  فایل ۱۲۰۰×۶۳۰ جدید جایگزین کن (اسم فایل باید همین بمونه).

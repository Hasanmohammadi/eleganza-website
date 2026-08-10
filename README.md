# Eleganza United Business — Website (Astro SSG)

صفحه‌ی «به‌زودی» برای Eleganza United Business — کاملاً استاتیک، سه‌زبانه، و
بر اساس سند برند رسمی شرکت.

## چی توشه؟

- ⚡ Astro با خروجی کاملاً استاتیک (SSG)
- 🟦 TypeScript کامل
- 🎨 پالت رنگی دقیق برند:
  - Royal Gold `#D4AF37` / Champagne Gold `#F3E6B3`
  - Deep Charcoal Black `#0D0D0D` / Midnight Navy `#0B1F3A`
  - Platinum Silver `#B9BDC5` / Warm White `#F7F6F2`
- 🖋 فونت‌های اختصاصی هر زبان: Cormorant Garamond (EN), Vazirmatn (FA), Amiri + Tajawal (AR)
- 🎬 انیمیشن‌های فراوان با GSAP:
  - تایم‌لاین ورود چندمرحله‌ای (emblem، بج، برند، هدلاین، حلقه، شمارش معکوس، فرم، پیام‌های برند)
  - دو حلقه‌ی چرخان در جهت مخالف دور نشان حوزه‌های فعالیت
  - ذرات طلایی شناور در پس‌زمینه
  - شیمر بی‌پایان روی متن برند (گرادیان متحرک)
  - نبض نورانی پشت حلقه، شناوری نشان برند، تاب‌خوردن آیکون‌های پیام برند
  - پاپ‌شدن ارقام شمارش معکوس هر بار که عوض می‌شن
  - پارالاکس حلقه با حرکت موس، هاور فنری روی آیکون‌های حوزه‌های فعالیت
  - رعایت `prefers-reduced-motion` برای کاربرانی که انیمیشن کمتر می‌خوان
- ⭕ عنصر امضادار: حلقه‌ی شش حوزه‌ی فعالیت (Holding, Construction, Real Estate,
  Investment, Oil & Gas, Trading) — از بخش «Industry Application» سند برند
- 🌐 سه‌زبانه: English / فارسی / العربية
- 📦 پکیج‌منیجر: **npm**

## نصب و اجرا

```bash
npm install
npm run dev
```

روی `http://localhost:4321` بالا میاد. `/` بر اساس زبان مرورگرت به
`/en/`, `/fa/` یا `/ar/` هدایتت می‌کنه.

## Build نهایی

```bash
npm run build     # خروجی استاتیک داخل dist/
npm run preview
```

## ساختار پروژه

```
src/
  components/
    ComingSoon.astro      # کل صفحه + همه‌ی انیمیشن‌های GSAP
    IndustryRing.astro     # عنصر امضادار — حلقه‌ی شش حوزه‌ی فعالیت
    EmblemMark.astro        # نشان برند (SVG گرادیان طلایی)
    LanguageSwitcher.astro
  i18n/
    translations.ts          # متن هر سه زبان، بر اساس تگ‌لاین و پیام برند
  layouts/
    Layout.astro              # لود فونت مخصوص هر زبان + lang/dir
  pages/
    index.astro                 # ریدایرکت خودکار بر اساس زبان مرورگر
    en/index.astro
    fa/index.astro
    ar/index.astro
tailwind.config.mjs            # پالت رنگی دقیق برند
```

## شخصی‌سازی

- **تاریخ شمارش معکوس**: در `ComingSoon.astro`، الان «۳۰ روز از لحظه‌ی بازدید»ه.
  برای تاریخ ثابت: `const target = new Date('2026-12-31T00:00:00');`
- **فرم ایمیل**: فعلاً فقط پیام موفقیت نشون می‌ده — برای اتصال واقعی یه `fetch`
  به API خودت داخل event listener فرم اضافه کن.
- **شدت انیمیشن**: اگه جایی زیاد به‌نظر رسید، `duration` و `stagger`های تایم‌لاین
  اصلی رو در پایین فایل `ComingSoon.astro` تنظیم کن.

# Astro Coming Soon Starter (pnpm + TypeScript + Tailwind + GSAP + i18n)

پروژه استارتر Astro با یک صفحه‌ی «به‌زودی» (Coming Soon) انیمیشنی و سه‌زبانه.

## چی توشه؟

- ⚡ Astro با خروجی استاتیک (SSG)
- 🟦 TypeScript کامل (strict mode)
- 🎨 Tailwind CSS
- 🎬 GSAP برای انیمیشن ورود عناصر + بلاب‌های گرادیانی متحرک در پس‌زمینه
- ⏳ شمارش معکوس زنده (روز / ساعت / دقیقه / ثانیه)
- ✉️ فرم ثبت ایمیل (فرانت‌اند فقط، بدون بک‌اند واقعی — جای اتصال به API خودته)
- 🌐 سه زبانه: **English / فارسی / العربية** با تشخیص خودکار جهت متن (RTL/LTR)
- 📦 پکیج‌منیجر: **pnpm**

## نصب و اجرا

اگه pnpm نصب نداری:
```bash
npm install -g pnpm
```

بعد:
```bash
pnpm install
pnpm dev
```

پروژه روی این آدرس بالا میاد:
```
http://localhost:4321
```

وقتی وارد `/` بشی، خودش بر اساس زبان مرورگرت به `/en/`, `/fa/` یا `/ar/` هدایتت می‌کنه.
می‌تونی مستقیم هم بری:

- `http://localhost:4321/en/`
- `http://localhost:4321/fa/`
- `http://localhost:4321/ar/`

## دستورات دیگه

```bash
pnpm build     # بیلد نهایی استاتیک (داخل پوشه dist)
pnpm preview   # پیش‌نمایش نسخه بیلد شده
```

## ساختار پروژه

```
src/
  components/
    ComingSoon.astro       # کل صفحه Coming Soon (انیمیشن + شمارش معکوس + فرم)
    LanguageSwitcher.astro # دکمه‌های تعویض زبان
  i18n/
    translations.ts        # متن‌های هر سه زبان + تنظیمات جهت (rtl/ltr)
  layouts/
    Layout.astro           # لایوت پایه؛ lang و dir رو خودکار ست می‌کنه
  pages/
    index.astro             # ریدایرکت خودکار بر اساس زبان مرورگر
    en/index.astro
    fa/index.astro
    ar/index.astro
  styles/
    global.css              # Tailwind + فونت‌های Vazirmatn (فارسی) و Cairo (عربی)
```

## نکات مهم برای شخصی‌سازی

- **تاریخ شمارش معکوس**: در `ComingSoon.astro` همین الان روی «۳۰ روز از لحظه بازدید» تنظیم شده.
  برای یه تاریخ ثابت، این خط رو عوض کن:
  ```ts
  const target = new Date();
  target.setDate(target.getDate() + 30);
  ```
  به یه تاریخ مشخص مثل:
  ```ts
  const target = new Date('2026-12-31T00:00:00');
  ```

- **فرم ایمیل**: الان فقط پیام موفقیت نشون می‌ده. برای اتصال واقعی، داخل تابع
  `submit` در همون فایل، یه `fetch` به API خودت اضافه کن.

- **افزودن زبان جدید**: کافیه توی `src/i18n/translations.ts` یه locale جدید اضافه کنی
  و یه پوشه‌ی جدید مثل `src/pages/de/index.astro` مشابه بقیه بسازی.

- چون از **Islands Architecture** استفاده می‌شه، جاوااسکریپت GSAP فقط همون‌جایی
  که لازمه لود می‌شه؛ بقیه سایت سبک می‌مونه.

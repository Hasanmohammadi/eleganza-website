// کتابخونه‌های سمت-مرورگر رو از node_modules به public/vendor کپی می‌کنه تا از خود سایت سرو بشن
// (نه از CDN خارجی). با postinstall / predev / prebuild خودکار اجرا می‌شه.
//
//   node scripts/copy-vendor.mjs            → اگه چیزی پیدا نشد فقط هشدار می‌ده (نصب/توسعه رو نمی‌خوابونه)
//   node scripts/copy-vendor.mjs --strict   → اگه چیزی پیدا نشد با خطا خارج می‌شه (برای build)
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const strict = process.argv.includes('--strict');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const files = [
  { pkg: 'gsap', from: 'node_modules/gsap/dist/gsap.min.js', to: 'public/vendor/gsap.min.js' },
];

let missing = 0;
for (const f of files) {
  const src = resolve(root, f.from);
  const dest = resolve(root, f.to);
  if (!existsSync(src)) {
    missing++;
    console.warn(`[vendor] ✗ ${f.pkg}: ${f.from} پیدا نشد (npm install زده شده؟)`);
    continue;
  }
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  console.log(`[vendor] ✓ ${f.pkg} → ${f.to} (${Math.round(statSync(dest).size / 1024)} KB)`);
}

if (missing && strict) {
  console.error(`[vendor] ${missing} فایل کم بود؛ build متوقف شد تا سایت با وابستگی CDN منتشر نشه.`);
  process.exit(1);
}

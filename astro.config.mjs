import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://eleganzaco.com',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'fa',
        locales: {
          en: 'en',
          fa: 'fa',
          ar: 'ar',
        },
      },
      filter: (page) => page !== 'https://eleganzaco.com/',
    }),
  ],
  output: 'static', // خروجی کاملا استاتیک (SSG)
});

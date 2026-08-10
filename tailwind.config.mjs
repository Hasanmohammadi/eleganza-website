/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand Color System — Eleganza United Business
        gold: {
          DEFAULT: '#D4AF37', // 1. Primary Color — Royal Gold
          light: '#F3E6B3', // 2. Secondary Color — Champagne Gold
        },
        charcoal: '#0D0D0D', // 3. Primary Background — Deep Charcoal Black
        navy: '#0B1F3A', // 4. Corporate Blue — Midnight Navy
        platinum: '#B9BDC5', // 5. Accent Color — Platinum Silver
        warmwhite: '#F7F6F2', // 6. Neutral Color — Warm White
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
};

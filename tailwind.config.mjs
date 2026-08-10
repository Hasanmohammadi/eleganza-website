/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6d28d9',
          light: '#8b5cf6',
          dark: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
};

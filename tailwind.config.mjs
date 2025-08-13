/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // avoid resetting your existing global.css
  },
};


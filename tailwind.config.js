/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  fontFamily: {
  'dm-sans': ['"DM Sans"', 'sans-serif'],
  'inter': ['Inter', 'sans-serif'],
  },
}

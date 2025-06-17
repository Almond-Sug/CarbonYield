/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.2)', opacity: '0.4' },
          '90%': { opacity: '0' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
          subtleRipple: {
          '0%':   { transform: 'translate(-50%, -50%) scale(0.9)', opacity: '0.15' },
          '70%':  { opacity: '0.05' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        ripple: 'ripple 2.4s ease-in-out infinite',
        subtleRipple: 'subtleRipple 5s ease-in-out infinite',
      }, 
      
    },
  },
  plugins: [],
};

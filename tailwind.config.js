/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7CB46',
        secondary: '#F9F5F2',
        accentred: '#E00A63',
      },
      fontFamily: {
        works: 'Work Sans, sans-serif',
        bricolage: 'Bricolage Grotesque, sans-serif',
      },
      boxShadow: {
        'solid-rb': '3px 2px black',
      },
    },
  },
  plugins: [],
};

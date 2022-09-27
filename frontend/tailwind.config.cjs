/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      logo: ['Rancho', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
};

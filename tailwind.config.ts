/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '639px' },
      lg: { max: '1023px' },
      xl: { max: '1283px' },
    },
    colors: {
      'aqua-color-text': '#07d3d3',
      'hover-color-text': '#2b808f',
    },
    extend: {},
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        'blog': '54%', // 
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {colors: {
      'mygrey': '#0F100E',
      'mywhite': '#F7F7F7',
      'mygreen': '#BBFB05',
    },},
  },
  plugins: [],
}


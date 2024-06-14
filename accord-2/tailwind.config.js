/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom-cubic': 'cubic-bezier(1, 0, 1, 0)',
      },
      transitionDuration: {
        '500': '500ms',
      }
    },
  },
  plugins: [],
}


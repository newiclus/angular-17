/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid': '-6px 6px rgb(0, 0, 0)',
      }
    },
  },
  plugins: [],
}


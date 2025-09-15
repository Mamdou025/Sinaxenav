/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
      sans: ['manifold', 'system-ui', 'sans-serif'],
    },
    },
  },
  plugins: [],
};
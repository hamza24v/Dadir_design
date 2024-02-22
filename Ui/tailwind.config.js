/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'furniture-pattern': "url('./assets/whitebackground.webp')",
      },
      colors: {
        brand: '#f6bf09'
      }
    },
  },
  plugins: [],
}


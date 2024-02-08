/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'furniture-pattern': "url('./assets/whitebackground.webp')",
      },
    },
  },
  plugins: [],
}


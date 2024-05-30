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
        brand: '#f6bf09',
        'light-grey': '#F6F9FC',
        'dark-terminal': '#0A2540',
        'accent': '#635BFF',
      },
      borderRadius: {
        'radius': '3px',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


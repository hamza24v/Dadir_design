/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          to : {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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
      height: {
        'screen-75': '75vh',
      }
    },
  },
  plugins: [],
}


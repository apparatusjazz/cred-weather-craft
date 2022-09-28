/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#64aed5"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1deg)'
          },
          '50%': {
            transform: 'rotate(2deg) translate(10px, 0)'
          },
        },
      },
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite',
        wiggleAlt: 'wiggle 8s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
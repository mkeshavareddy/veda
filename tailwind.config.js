/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
          light: '#67E8F9',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          dark: '#5B21B6',
          light: '#C4B5FD',
        },
      },
    },
  },
  plugins: [],
}

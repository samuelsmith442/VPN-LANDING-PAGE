/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Rubik', 'sans-serif']
      },
      colors: {
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E0E0E0',
          muted: '#9CA3AF',
          border: '#2E2E2E'
        }
      }
    },
  },
  plugins: [],
}

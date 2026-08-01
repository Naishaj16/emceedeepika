/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          50: '#F6FAF7',
          100: '#EBF5EE',
          200: '#D6EBDC',
          300: '#B8DCC3',
          400: '#8DC69F',
          500: '#5E9B79',
          600: '#437A5B',
          700: '#2E5941',
          800: '#1C3B2B',
          900: '#13281D',
        },
        sage: {
          light: '#E2EFE6',
          DEFAULT: '#88C0A8',
          dark: '#2D5542',
        },
        gold: {
          light: '#F5E8C7',
          DEFAULT: '#D4AF37',
          dark: '#A6851C',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

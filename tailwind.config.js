/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          50: '#1A1A1A',
          100: '#161616',
          200: '#222222',
          300: '#2E2E2E',
          400: '#3A3A3A',
        },
        paper: {
          DEFAULT: '#F5F3EE',
          50: '#FAF9F6',
          100: '#EDEAE3',
          200: '#D5D0C5',
        },
        gold: {
          DEFAULT: '#C9A96E',
          50: '#E0CCB0',
          100: '#D4B886',
          200: '#B8956A',
          300: '#9C7E55',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
};

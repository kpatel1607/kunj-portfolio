/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cosmic: {
          950: '#050816',
          900: '#08111f',
          800: '#111827',
          cyan: '#fb7185',
          violet: '#f43f5e',
          mint: '#f97316',
        },
      },
      boxShadow: {
        glow: '0 0 32px rgba(251, 113, 133, 0.18)',
      },
    },
  },
  plugins: [],
};


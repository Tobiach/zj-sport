/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rayun: {
          cream:  '#FAFAF7',
          beige:  '#F0EDE6',
          sage:   '#7A9968',
          forest: '#2D4A2D',
          brown:  '#2C1810',
          gold:   '#C9A87C',
          taupe:  '#8B8276',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Lato', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.12em',
        wide:   '0.06em',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'morado-uva': 'var(--color-morado-uva)',
        'verde-vid': 'var(--color-verde-vid)',
        'verde-hoja': 'var(--color-verde-hoja)',
        'blanco-paz': 'var(--color-blanco-paz)',
        'beige-calido': 'var(--color-beige-calido)',
        'gris-suave': 'var(--color-gris-suave)',
      },
    },
  },
  plugins: [],
}

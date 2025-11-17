/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      colors: {
        // Paleta de colores Vite Vera
        'grape': 'var(--color-grape)',
        'verde-vid': 'var(--color-verde-vid)',
        'verde-hoja': 'var(--color-verde-hoja)',
        'blanco-paz': 'var(--color-blanco-paz)',
        'beige-calido': 'var(--color-beige-calido)',
        'gris-suave': 'var(--color-gris-suave)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
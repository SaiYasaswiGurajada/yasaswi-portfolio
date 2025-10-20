
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'ui-sans-serif','system-ui'] },
      colors: {
        ink: '#e8e8ff',
        muted: '#a6a6c9',
        bg: '#0a0a12',
        card: '#13131d',
        border: '#232336',
        accent: {
          DEFAULT: '#7c3aed',
          2: '#06b6d4'
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,.35)'
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        radiate: {
          '0%': { opacity: .5, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1.02)' }
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        'floaty': 'floaty 6s ease-in-out infinite',
        'radiate': 'radiate 6s ease-in-out infinite alternate',
        'gradientMove': 'gradientMove 12s linear infinite alternate'
      }
    },
  },
  plugins: [],
}

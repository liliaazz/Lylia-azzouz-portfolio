/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1A2E4A',
          deep: '#0F1E30',
          light: '#243A5E',
        },
        brand: {
          blue: '#3B82F6',
          'blue-light': '#EFF6FF',
          yellow: '#F5C842',
          'yellow-dark': '#B8941F',
          'yellow-soft': '#FEFCE8',
        },
        ink: '#0F172A',
        muted: '#64748B',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pip-pulse': 'pipPulse 2.2s ease-in-out infinite',
        'av-pulse': 'avPulse 2s ease-in-out infinite',
        'arrow-slide': 'arrowSlide 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0.5deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-0.5deg)' },
        },
        pipPulse: {
          '0%, 100%': { boxShadow: '0 0 0 3px rgba(245,200,66,0.22)' },
          '50%': { boxShadow: '0 0 0 7px rgba(245,200,66,0.08)' },
        },
        avPulse: {
          '0%, 100%': { boxShadow: '0 0 0 2px rgba(34,197,94,0.2)' },
          '50%': { boxShadow: '0 0 0 5px rgba(34,197,94,0.07)' },
        },
        arrowSlide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // indigo-500
          DEFAULT: '#4f46e5', // indigo-600
          dark: '#4338ca', // indigo-700
        },
        success: '#10b981', // emerald-500
        error: '#ef4444', // red-500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(79, 70, 229, 0.2)',
        'glass': '0 8px 32px rgba(99, 102, 241, 0.08)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.2), 0 0 60px rgba(99, 102, 241, 0.08)',
        'neon': '0 0 40px rgba(129, 140, 248, 0.3)',
      },
      backdropBlur: {
        '3xl': '64px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient-shift 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

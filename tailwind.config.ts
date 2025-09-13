import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'medium-body': ['21px', { lineHeight: '1.58', letterSpacing: '-0.003em' }],
        'medium-title': ['32px', { lineHeight: '1.25', fontWeight: '700' }],
        'medium-subtitle': ['24px', { lineHeight: '1.33', fontWeight: '600' }],
        'medium-large': ['42px', { lineHeight: '1.18', fontWeight: '700' }],
      },
      maxWidth: {
        'medium': '680px',
        'medium-wide': '728px',
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'medium-gray': {
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#d1d1d1',
          400: '#b3b3b3',
          500: '#8a8a8a',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
        'medium-green': '#1a8917',
      },
      spacing: {
        'medium': '2rem',
        'medium-lg': '3rem',
        'medium-xl': '4rem',
      },
    },
  },
  plugins: [],
}

export default config
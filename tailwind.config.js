/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          lightBg: '#F5F5F7',
          lightCard: 'rgba(255, 255, 255, 0.72)',
          lightBorder: 'rgba(0, 0, 0, 0.08)',
          lightText: '#1D1D1F',
          lightSecondary: '#86868B',
          darkBg: '#000000',
          darkCard: 'rgba(28, 28, 30, 0.75)',
          darkBorder: 'rgba(255, 255, 255, 0.12)',
          darkText: '#F5F5F7',
          darkSecondary: '#A1A1A6',
          accent: '#2997FF',
          accentHover: '#0071E3',
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "Fira Code",
          "monospace"
        ]
      },
      backdropBlur: {
        'xs': '2px',
        'apple': '20px',
        'apple-thick': '32px',
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'apple-dark-sm': '0 2px 12px rgba(0, 0, 0, 0.4)',
        'apple-dark-md': '0 8px 30px rgba(0, 0, 0, 0.6)',
        'apple-dark-lg': '0 20px 50px rgba(0, 0, 0, 0.8)',
        'specular': 'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        'specular-dark': 'inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(0.96)' },
        }
      }
    },
  },
  plugins: [],
}

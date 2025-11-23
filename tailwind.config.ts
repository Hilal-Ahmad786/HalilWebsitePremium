import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Turuncu (Orange) - Main Brand Color
        turuncu: {
          50: '#FFF4ED',
          100: '#FFE4D4',
          200: '#FFC5A8',
          300: '#FF9D71',
          400: '#FF6B35',
          500: '#FF6B35',
          600: '#E55100',
          700: '#C44500',
          800: '#9A3700',
          900: '#7A2C00',
        },

        // Lacivert (Navy Blue)
        lacivert: {
          50: '#E8EBF3',
          100: '#D1D7E7',
          200: '#A3AFCF',
          300: '#7587B7',
          400: '#47609F',
          500: '#2C4170',
          600: '#243661',
          700: '#1B2951',
          800: '#0F1B2E',
          900: '#0A1220',
          950: '#050911',
        },
        // WhatsApp Green
        whatsapp: {
          500: '#25D366',
          600: '#20BA5A',
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },

      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#FF6B35',
              '&:hover': {
                color: '#E55100',
              },
            },
            h1: { color: '#1B2951' },
            h2: { color: '#1B2951' },
            h3: { color: '#1B2951' },
            h4: { color: '#1B2951' },
            strong: { color: '#1B2951' },
            code: { color: '#FF6B35' },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};

export default config;
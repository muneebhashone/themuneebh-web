import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          elevated: '#0A0A0A',
          card: '#141414',
        },
        gray: {
          900: '#1A1A1A',
          800: '#262626',
          600: '#666666',
          400: '#999999',
        },
        lime: {
          DEFAULT: '#CCFF00',
          dim: '#A8D600',
          glow: 'rgba(204, 255, 0, 0.15)',
          ultra: 'rgba(204, 255, 0, 0.05)',
        },
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      maxWidth: {
        'narrow': '640px',
        'container': '1280px',
        'wide': '1440px',
      },
      fontSize: {
        'hero': 'var(--font-size-hero)',
        'display': 'var(--font-size-h1)',
        'title': 'var(--font-size-h2)',
        'label': 'var(--font-size-mono)',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        'relaxed': '1.7',
      },
      letterSpacing: {
        'tighter': '-0.05em',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--foreground))',
            maxWidth: 'none',
            hr: {
              borderColor: 'rgb(var(--foreground) / 0.1)',
              marginTop: '3em',
              marginBottom: '3em',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'rgb(var(--foreground))',
              fontWeight: '700',
            },
            code: {
              color: '#CCFF00',
              backgroundColor: 'rgba(204, 255, 0, 0.1)',
              borderRadius: '0.375rem',
              padding: '0.2em 0.4em',
              fontWeight: '500',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
            'pre code': {
              color: 'rgb(var(--foreground))',
              backgroundColor: 'transparent',
              padding: '0',
            },
            pre: {
              backgroundColor: 'rgba(204, 255, 0, 0.05)',
              color: 'rgb(var(--foreground))',
              borderRadius: '0.5rem',
              border: '1px solid rgba(204, 255, 0, 0.1)',
            },
            a: {
              color: '#CCFF00',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#A8D600',
              },
            },
            blockquote: {
              borderLeftColor: '#CCFF00',
              borderLeftWidth: '3px',
              color: 'rgb(var(--foreground) / 0.8)',
            },
            'ul > li::marker': {
              color: '#CCFF00',
            },
            'ol > li::marker': {
              color: '#CCFF00',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config

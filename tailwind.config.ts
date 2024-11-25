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
      container: {
        center: true,
        padding: '1rem',
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
              color: 'rgb(var(--accent-secondary))',
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
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
              backgroundColor: 'rgb(var(--accent) / 0.1)',
              color: 'rgb(var(--foreground))',
              borderRadius: '0.5rem',
            },
            a: {
              color: 'rgb(var(--accent))',
              textDecoration: 'none',
              '&:hover': {
                opacity: '0.8',
              },
            },
            blockquote: {
              borderLeftColor: 'rgb(var(--accent))',
              color: 'rgb(var(--foreground) / 0.8)',
            },
            'ul > li::marker': {
              color: 'rgb(var(--accent))',
            },
            'ol > li::marker': {
              color: 'rgb(var(--accent))',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config

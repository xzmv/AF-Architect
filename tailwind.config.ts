import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F6F3EE',
        'bg-alt': '#EDEBE6',
        'bg-dark': '#1C1C1A',
        primary: '#1C1C1A',
        muted: '#7A7672',
        border: '#D8D4CC',
        light: '#F6F3EE',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0',
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}

export default config

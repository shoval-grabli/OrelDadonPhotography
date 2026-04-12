import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main':          '#F7F3EE',
        'bg-section':       '#EDE3D7',
        'taupe':            '#D8C7B8',
        'accent':           '#CBB8AE',
        'text-primary':     '#4E433D',
        'text-secondary':   '#7A6F68',
        'border-soft':      '#DDD2C7',
        'button-soft':      '#A89282',
      },
      fontFamily: {
        sans:    ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      letterSpacing: {
        wider: '0.08em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config

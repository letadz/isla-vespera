/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark, var(--color-primary)) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light, var(--color-primary)) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          light: 'rgb(var(--color-secondary-light, var(--color-secondary)) / <alpha-value>)'
        },
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          muted: 'rgb(var(--color-surface-muted, var(--color-surface)) / <alpha-value>)'
        },
        font: {
          text: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)'
        },
        border: 'rgb(var(--color-border) / <alpha-value>)'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      borderRadius: {
        card: 'var(--radius-card, 0.75rem)',
        button: 'var(--radius-button, 0.5rem)'
      }
    }
  },
  plugins: []
}

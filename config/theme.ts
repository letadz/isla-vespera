import type { ThemeDefinition, ThemeName } from '~/types'

export const activeTheme: ThemeName = 'tropical'

export const defaultTheme: ThemeDefinition = {
  name: 'tropical',
  label: 'Isla Vespera Tropical Resort',
  description: 'Crisp linen background, deep teal accents, warm island sand gold, and elegant serif headings.',
  headingFont: 'Playfair Display',
  bodyFont: 'Inter',
  colors: {
    primary: '#1E5B5A',
    primaryDark: '#143E3D',
    primaryLight: '#2D8280',
    secondary: '#D9B56D',
    secondaryLight: '#EBD098',
    background: '#F8F6F1',
    surface: '#FFFFFF',
    surfaceMuted: '#F0EEE8',
    text: '#182322',
    textMuted: '#6B7776',
    border: '#E2DED4'
  }
}

export const themePresets: Record<ThemeName, ThemeDefinition> = {
  tropical: defaultTheme,
  luxury: defaultTheme,
  modern: defaultTheme
}

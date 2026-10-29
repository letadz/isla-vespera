export type ThemeName = 'luxury' | 'tropical' | 'modern'

export interface ThemeColors {
  primary: string
  primaryDark?: string
  primaryLight?: string
  secondary: string
  secondaryLight?: string
  background: string
  surface: string
  surfaceMuted?: string
  text: string
  textMuted: string
  border: string
}

export interface ThemeDefinition {
  name: ThemeName
  label: string
  description: string
  headingFont: string
  bodyFont: string
  colors: ThemeColors
}

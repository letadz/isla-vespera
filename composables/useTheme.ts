import { storeToRefs } from 'pinia'
import { useUiStore } from '~/stores/ui'
import { themePresets } from '~/config/theme'
import type { ThemeName, ThemeDefinition } from '~/types'

export function useTheme() {
  const uiStore = useUiStore()
  const { currentTheme } = storeToRefs(uiStore)

  const activeThemeDefinition = computed<ThemeDefinition>(() => {
    return themePresets[currentTheme.value] || themePresets.tropical
  })

  const availableThemes = computed(() => {
    return Object.values(themePresets)
  })

  const setTheme = (theme: ThemeName) => {
    uiStore.setTheme(theme)
  }

  const isCurrent = (theme: ThemeName) => {
    return currentTheme.value === theme
  }

  return {
    currentTheme,
    theme: activeThemeDefinition,
    availableThemes,
    setTheme,
    isCurrent,
    initTheme: uiStore.initTheme
  }
}

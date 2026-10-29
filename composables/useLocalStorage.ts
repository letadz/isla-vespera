import { ref, watch, onMounted } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const data = ref<T>(defaultValue) as Ref<T>

  onMounted(() => {
    try {
      const stored = localStorage.getItem(key)
      if (stored !== null) {
        data.value = JSON.parse(stored)
      }
    } catch (e) {
      console.warn(`Error reading localStorage key "${key}":`, e)
    }
  })

  watch(
    data,
    (newVal) => {
      if (import.meta.client) {
        try {
          if (newVal === null || newVal === undefined) {
            localStorage.removeItem(key)
          } else {
            localStorage.setItem(key, JSON.stringify(newVal))
          }
        } catch (e) {
          console.warn(`Error writing to localStorage key "${key}":`, e)
        }
      }
    },
    { deep: true }
  )

  return data
}

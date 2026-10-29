import { defineStore } from 'pinia'
import { activeTheme } from '~/config/theme'
import type { ThemeName } from '~/types'

export interface ToastMessage {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  duration?: number
}

export const useUiStore = defineStore('ui', {
  state: () => ({
    mobileMenuOpen: false,
    activeModal: null as string | null,
    lightboxIndex: null as number | null,
    lightboxItems: [] as string[],
    currentTheme: activeTheme as ThemeName,
    toasts: [] as ToastMessage[]
  }),

  actions: {
    toggleMobileMenu(open?: boolean) {
      this.mobileMenuOpen = open !== undefined ? open : !this.mobileMenuOpen
      if (import.meta.client) {
        document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : ''
      }
    },

    closeMobileMenu() {
      this.mobileMenuOpen = false
      if (import.meta.client) {
        document.body.style.overflow = ''
      }
    },

    openModal(modalId: string) {
      this.activeModal = modalId
    },

    closeModal() {
      this.activeModal = null
    },

    openLightbox(images: string[], startIndex: number = 0) {
      this.lightboxItems = images
      this.lightboxIndex = startIndex
      if (import.meta.client) {
        document.body.style.overflow = 'hidden'
      }
    },

    closeLightbox() {
      this.lightboxIndex = null
      this.lightboxItems = []
      if (import.meta.client) {
        document.body.style.overflow = ''
      }
    },

    setTheme(themeName: ThemeName = 'tropical') {
      this.currentTheme = 'tropical'
      if (import.meta.client) {
        document.documentElement.setAttribute('data-theme', 'tropical')
      }
    },

    initTheme() {
      if (import.meta.client) {
        document.documentElement.setAttribute('data-theme', 'tropical')
        localStorage.removeItem('isla_vespera_theme_preference')
      }
    },

    showToast(toast: Omit<ToastMessage, 'id'>) {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`
      const fullToast: ToastMessage = { ...toast, id }
      this.toasts.push(fullToast)

      const duration = toast.duration || 4000
      setTimeout(() => {
        this.removeToast(id)
      }, duration)
    },

    removeToast(id: string) {
      this.toasts = this.toasts.filter(t => t.id !== id)
    }
  }
})

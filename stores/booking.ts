import { defineStore } from 'pinia'
import { siteConfig } from '~/config/site'
import { rooms } from '~/data/rooms'
import type {
  BookingDates,
  BookingGuests,
  GuestInformation,
  Room,
  PriceBreakdown,
  BookingRequestRecord
} from '~/types'
import { calculatePriceBreakdown, generateReferenceId } from '~/utils/booking'
import { getTodayString, addDays } from '~/utils/date'

const STORAGE_KEY = 'isla_vespera_booking_v1'

export const useBookingStore = defineStore('booking', {
  state: () => {
    const today = getTodayString()
    const tomorrow = addDays(today, 2)

    return {
      dates: {
        checkIn: today,
        checkOut: tomorrow
      } as BookingDates,
      guests: {
        adults: 2,
        children: 0
      } as BookingGuests,
      selectedRoomId: 'deluxe-ocean-view' as string | null,
      promoCode: '' as string,
      guestInformation: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: '',
        estimatedArrival: '14:00'
      } as GuestInformation,
      submittedBooking: null as BookingRequestRecord | null,
      isSubmitting: false,
      validationErrors: {} as Record<string, string>
    }
  },

  getters: {
    selectedRoom(state): Room | null {
      if (!state.selectedRoomId) return null
      return rooms.find(r => r.id === state.selectedRoomId) || null
    },
    totalGuests(state): number {
      return state.guests.adults + state.guests.children
    },
    hasValidDates(state): boolean {
      if (!state.dates.checkIn || !state.dates.checkOut) return false
      return new Date(state.dates.checkOut) > new Date(state.dates.checkIn)
    },
    pricingSummary(state): PriceBreakdown {
      return calculatePriceBreakdown({
        room: this.selectedRoom,
        checkIn: state.dates.checkIn,
        checkOut: state.dates.checkOut,
        promoCode: state.promoCode,
        config: siteConfig.booking
      })
    }
  },

  actions: {
    setDates(checkIn: string | null, checkOut: string | null) {
      this.dates.checkIn = checkIn
      this.dates.checkOut = checkOut
      this.persist()
    },

    setGuests(adults: number, children: number = 0) {
      this.guests.adults = Math.max(1, adults)
      this.guests.children = Math.max(0, children)
      this.persist()
    },

    selectRoom(roomId: string) {
      this.selectedRoomId = roomId
      this.persist()
    },

    setGuestInformation(info: Partial<GuestInformation>) {
      this.guestInformation = {
        ...this.guestInformation,
        ...info
      }
      this.persist()
    },

    setPromoCode(code: string) {
      this.promoCode = code
    },

    calculateTotal(): PriceBreakdown {
      return this.pricingSummary
    },

    validateStep(step: 'dates' | 'guest'): boolean {
      this.validationErrors = {}

      if (step === 'dates') {
        if (!this.dates.checkIn) {
          this.validationErrors.checkIn = 'Please select a check-in date.'
        }
        if (!this.dates.checkOut) {
          this.validationErrors.checkOut = 'Please select a check-out date.'
        }
        if (this.dates.checkIn && this.dates.checkOut) {
          if (new Date(this.dates.checkOut) <= new Date(this.dates.checkIn)) {
            this.validationErrors.checkOut = 'Check-out date must be after check-in date.'
          }
        }
      }

      if (step === 'guest') {
        if (!this.guestInformation.firstName.trim()) {
          this.validationErrors.firstName = 'First name is required.'
        }
        if (!this.guestInformation.lastName.trim()) {
          this.validationErrors.lastName = 'Last name is required.'
        }
        if (!this.guestInformation.email.trim()) {
          this.validationErrors.email = 'Email address is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.guestInformation.email)) {
          this.validationErrors.email = 'Please provide a valid email address.'
        }
        if (!this.guestInformation.phone.trim()) {
          this.validationErrors.phone = 'Contact phone number is required.'
        }
      }

      return Object.keys(this.validationErrors).length === 0
    },

    submitBookingRequest(): BookingRequestRecord {
      if (!this.selectedRoom) {
        throw new Error('Please select a room before submitting your booking.')
      }

      const isValid = this.validateStep('guest')
      if (!isValid) {
        throw new Error('Please fix the validation errors in the guest form.')
      }

      this.isSubmitting = true

      const record: BookingRequestRecord = {
        referenceId: generateReferenceId('ABR'),
        createdAt: new Date().toISOString(),
        roomId: this.selectedRoom.id,
        roomName: this.selectedRoom.name,
        dates: { ...this.dates },
        nights: this.pricingSummary.nights,
        guests: { ...this.guests },
        guest: { ...this.guestInformation },
        price: { ...this.pricingSummary },
        status: 'pending_confirmation'
      }

      this.submittedBooking = record
      this.isSubmitting = false

      if (import.meta.client) {
        localStorage.setItem('isla_vespera_last_booking_record', JSON.stringify(record))
      }

      return record
    },

    clearBooking() {
      const today = getTodayString()
      this.dates = {
        checkIn: today,
        checkOut: addDays(today, 2)
      }
      this.guests = { adults: 2, children: 0 }
      this.selectedRoomId = null
      this.promoCode = ''
      this.guestInformation = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: '',
        estimatedArrival: '14:00'
      }
      this.validationErrors = {}
      if (import.meta.client) {
        localStorage.removeItem(STORAGE_KEY)
      }
    },

    persist() {
      if (import.meta.client) {
        try {
          const payload = {
            dates: this.dates,
            guests: this.guests,
            selectedRoomId: this.selectedRoomId,
            guestInformation: this.guestInformation
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
        } catch (e) {
          console.warn('LocalStorage save error:', e)
        }
      }
    },

    hydrate() {
      if (import.meta.client) {
        try {
          const raw = localStorage.getItem(STORAGE_KEY)
          if (raw) {
            const data = JSON.parse(raw)
            if (data.dates) this.dates = data.dates
            if (data.guests) this.guests = data.guests
            if (data.selectedRoomId) this.selectedRoomId = data.selectedRoomId
            if (data.guestInformation) this.guestInformation = data.guestInformation
          }

          const lastRaw = localStorage.getItem('isla_vespera_last_booking_record')
          if (lastRaw) {
            this.submittedBooking = JSON.parse(lastRaw)
          }
        } catch (e) {
          console.warn('LocalStorage hydration error:', e)
        }
      }
    }
  }
})

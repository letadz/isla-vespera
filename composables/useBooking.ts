import { storeToRefs } from 'pinia'
import { useBookingStore } from '~/stores/booking'
import { formatCurrency } from '~/utils/currency'
import { formatDisplayDate, calculateNights } from '~/utils/date'

export function useBooking() {
  const store = useBookingStore()
  const {
    dates,
    guests,
    selectedRoomId,
    selectedRoom,
    guestInformation,
    submittedBooking,
    isSubmitting,
    validationErrors,
    hasValidDates,
    totalGuests,
    pricingSummary,
    promoCode
  } = storeToRefs(store)

  const formattedCheckIn = computed(() => formatDisplayDate(dates.value.checkIn))
  const formattedCheckOut = computed(() => formatDisplayDate(dates.value.checkOut))
  const nightsCount = computed(() => calculateNights(dates.value.checkIn, dates.value.checkOut))

  const formattedNightlyPrice = computed(() => {
    if (!selectedRoom.value) return '₱0'
    return formatCurrency(selectedRoom.value.price, selectedRoom.value.currency)
  })

  const formattedTotalPrice = computed(() => {
    return formatCurrency(pricingSummary.value.total, pricingSummary.value.currency, pricingSummary.value.currencySymbol)
  })

  return {
    // State & Getters
    dates,
    guests,
    selectedRoomId,
    selectedRoom,
    guestInformation,
    submittedBooking,
    isSubmitting,
    validationErrors,
    hasValidDates,
    totalGuests,
    pricingSummary,
    promoCode,
    formattedCheckIn,
    formattedCheckOut,
    nightsCount,
    formattedNightlyPrice,
    formattedTotalPrice,

    // Actions
    setDates: store.setDates,
    setGuests: store.setGuests,
    selectRoom: store.selectRoom,
    setGuestInformation: store.setGuestInformation,
    setPromoCode: store.setPromoCode,
    validateStep: store.validateStep,
    submitBookingRequest: store.submitBookingRequest,
    clearBooking: store.clearBooking,
    hydrate: store.hydrate
  }
}

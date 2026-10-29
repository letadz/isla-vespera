import type { Room, PriceBreakdown, BookingSettingsConfig } from '~/types'
import { calculateNights } from './date'

interface CalculatePriceParams {
  room: Room | null
  checkIn: string | null
  checkOut: string | null
  promoCode?: string
  config: BookingSettingsConfig
}

export function calculatePriceBreakdown({
  room,
  checkIn,
  checkOut,
  promoCode = '',
  config
}: CalculatePriceParams): PriceBreakdown {
  const currency = config.currency || 'PHP'
  const currencySymbol = config.currencySymbol || '₱'
  
  if (!room) {
    return {
      nightlyRate: 0,
      nights: 0,
      subtotal: 0,
      discountAmount: 0,
      serviceCharge: 0,
      vatAmount: 0,
      total: 0,
      currency,
      currencySymbol
    }
  }

  const nights = calculateNights(checkIn, checkOut)
  const nightlyRate = room.price
  const baseSubtotal = nightlyRate * nights

  // Check promo code discounts
  let discountAmount = 0
  let appliedPromo: string | undefined = undefined
  const cleanedPromo = promoCode.trim().toUpperCase()

  if (cleanedPromo === 'WEEKEND15') {
    discountAmount = Math.round(baseSubtotal * 0.15)
    appliedPromo = 'Weekend Escape (15% OFF)'
  } else if (cleanedPromo === 'EARLY20') {
    discountAmount = Math.round(baseSubtotal * 0.20)
    appliedPromo = 'Early Bird Advantage (20% OFF)'
  } else if (cleanedPromo === 'LONGSTAY25' && nights >= 5) {
    discountAmount = Math.round(baseSubtotal * 0.25)
    appliedPromo = 'Extended Stay (25% OFF)'
  }

  const discountedSubtotal = Math.max(0, baseSubtotal - discountAmount)
  const serviceCharge = Math.round(discountedSubtotal * (config.serviceChargePercent / 100))
  const vatAmount = Math.round(discountedSubtotal * (config.vatPercent / 100))
  const total = discountedSubtotal + serviceCharge + vatAmount

  return {
    nightlyRate,
    nights,
    subtotal: baseSubtotal,
    discountAmount,
    appliedPromo,
    serviceCharge,
    vatAmount,
    total,
    currency,
    currencySymbol
  }
}

/**
 * Generates an executive reference ID for tracking booking requests
 * e.g. ABR-2026-7842
 */
export function generateReferenceId(hotelPrefix: string = 'ABR'): string {
  const year = new Date().getFullYear()
  const randomDigits = Math.floor(1000 + Math.random() * 9000)
  return `${hotelPrefix}-${year}-${randomDigits}`
}

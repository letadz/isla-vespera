export interface GuestInformation {
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests?: string
  estimatedArrival?: string
}

export interface BookingDates {
  checkIn: string | null // ISO format YYYY-MM-DD
  checkOut: string | null // ISO format YYYY-MM-DD
}

export interface BookingGuests {
  adults: number
  children: number
}

export interface PriceBreakdown {
  nightlyRate: number
  nights: number
  subtotal: number
  discountAmount: number
  appliedPromo?: string
  serviceCharge: number // e.g. 10%
  vatAmount: number // e.g. 12%
  total: number
  currency: string
  currencySymbol: string
}

export interface BookingRequestRecord {
  referenceId: string // e.g. "ABR-2026-9481"
  createdAt: string
  roomId: string
  roomName: string
  dates: BookingDates
  nights: number
  guests: BookingGuests
  guest: GuestInformation
  price: PriceBreakdown
  status: 'pending_confirmation'
}

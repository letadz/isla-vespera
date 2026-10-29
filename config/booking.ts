import type { BookingSettingsConfig } from '~/types'

export const bookingSettings: BookingSettingsConfig = {
  currency: 'PHP',
  currencySymbol: '₱',
  minimumNights: 1,
  maximumGuests: 8,
  checkInTime: '14:00 (2:00 PM)',
  checkOutTime: '12:00 (12:00 PM)',
  serviceChargePercent: 10,
  vatPercent: 12
}

export const cancellationPolicy = {
  title: 'Flexible Cancellation',
  summary: 'Free cancellation up to 72 hours before check-in date. Cancellations made within 72 hours are subject to a 1-night charge.',
  highlights: [
    '100% refund up to 3 days prior to arrival',
    'No modification fees for date changes (subject to seasonal rate variance)',
    'Full refund in the event of tropical storm travel advisories'
  ]
}

import type { BookingRequestRecord } from '~/types'

export const sampleBookings: BookingRequestRecord[] = [
  {
    referenceId: 'ABR-2026-8812',
    createdAt: '2026-09-20T10:15:00Z',
    roomId: 'deluxe-ocean-view',
    roomName: 'Deluxe Ocean View',
    dates: {
      checkIn: '2026-11-10',
      checkOut: '2026-11-14'
    },
    nights: 4,
    guests: {
      adults: 2,
      children: 0
    },
    guest: {
      firstName: 'Camille',
      lastName: 'Dupont',
      email: 'camille.dupont@example.com',
      phone: '+33612345678',
      specialRequests: 'High floor preferred, arriving around 3 PM.'
    },
    price: {
      nightlyRate: 9500,
      nights: 4,
      subtotal: 38000,
      discountAmount: 0,
      serviceCharge: 3800,
      vatAmount: 4560,
      total: 46360,
      currency: 'PHP',
      currencySymbol: '₱'
    },
    status: 'pending_confirmation'
  }
]

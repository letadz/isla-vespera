import type { Offer } from '~/types'

export const offers: Offer[] = [
  {
    id: 'weekend-escape',
    slug: 'weekend-escape',
    title: 'Weekend Escape Package',
    subtitle: 'Recharge with an idyllic seaside getaway',
    description: 'Elevate your weekend with 15% off room rates, complimentary daily artisan breakfast for two, and a welcoming sunset cocktail at Azure Beach Lounge.',
    discountPercentage: 15,
    image: '/images/offers/weekend-escape.jpg',
    validFrom: '2026-09-01',
    validUntil: '2026-12-20',
    minimumNights: 2,
    promoCode: 'WEEKEND15',
    ctaText: 'Claim Weekend Rate',
    inclusions: [
      '15% discount on Best Available Rate',
      'Daily breakfast buffet for 2 adults',
      'Welcome sunset cocktails at Beach Lounge',
      'Late check-out until 14:00 (subject to availability)'
    ]
  },
  {
    id: 'early-booking',
    slug: 'early-booking',
    title: 'Early Bird Advantage',
    subtitle: 'Plan ahead and enjoy privileged savings',
    description: 'Book your stay at least 30 days in advance and secure 20% savings across all room and suite categories, inclusive of return speedboat transfers.',
    discountPercentage: 20,
    image: '/images/offers/early-bird.jpg',
    validFrom: '2026-09-01',
    validUntil: '2027-04-30',
    minimumNights: 3,
    promoCode: 'EARLY20',
    ctaText: 'Book in Advance',
    inclusions: [
      '20% exclusive discount on accommodation',
      'Round-trip airport & speedboat transfers from Caticlan',
      '₱2,000 resort dining credit per stay',
      'Complimentary non-motorized watersports rental'
    ]
  },
  {
    id: 'long-stay-offer',
    slug: 'long-stay-offer',
    title: 'Extended Island Sanctuary',
    subtitle: 'Immerse deeply in Boracay’s beauty for 5+ nights',
    description: 'Stay 5 consecutive nights or more and enjoy 25% off your entire reservation, daily laundry allowance, and a complimentary 60-minute couple’s massage.',
    discountPercentage: 25,
    image: '/images/offers/long-stay.jpg',
    validFrom: '2026-09-01',
    validUntil: '2027-05-31',
    minimumNights: 5,
    promoCode: 'LONGSTAY25',
    ctaText: 'Explore Extended Stay',
    inclusions: [
      '25% savings on 5+ nights bookings',
      '60-minute signature Hilot massage for two at Sanctuary Spa',
      'Complimentary daily laundry service (4 items per room)',
      '15% discount on food & beverage throughout your stay'
    ]
  }
]

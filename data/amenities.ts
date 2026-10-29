import type { Amenity } from '~/types'

export const amenities: Amenity[] = [
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    category: 'property',
    icon: 'Wifi',
    description: 'Complimentary high-speed fiber internet throughout the resort property and in all rooms.',
    isPopular: true
  },
  {
    id: 'ac',
    name: 'Climate Control AC',
    category: 'room',
    icon: 'Wind',
    description: 'Individually controlled whisper-quiet air conditioning.',
    isPopular: true
  },
  {
    id: 'pool',
    name: 'Infinity Pool',
    category: 'property',
    icon: 'Waves',
    description: 'Oceanfront two-tier infinity pool with sun loungers and sunset cocktail bar service.',
    isPopular: true
  },
  {
    id: 'breakfast',
    name: 'Artisan Breakfast Buffet',
    category: 'dining',
    icon: 'UtensilsCrossed',
    description: 'Daily complimentary tropical breakfast with fresh island fruits, bakery items, and chef stations.',
    isPopular: true
  },
  {
    id: 'parking',
    name: 'Private Valet Parking',
    category: 'property',
    icon: 'Car',
    description: 'Secure, dedicated valet and golf-cart buggy transfer assistance.'
  },
  {
    id: 'room-service',
    name: '24/7 In-Room Dining',
    category: 'dining',
    icon: 'BellRing',
    description: 'Gourmet dining served directly to your terrace or private lounge area.',
    isPopular: true
  },
  {
    id: 'tv',
    name: 'Smart 4K UHD TV',
    category: 'room',
    icon: 'Tv',
    description: '65-inch Smart OLED TV with Netflix, streaming integration, and premium satellite channels.'
  },
  {
    id: 'minibar',
    name: 'Complimentary Mini Bar',
    category: 'room',
    icon: 'Wine',
    description: 'Stocked daily with craft beverages, coconut water, artisanal teas, and local snacks.'
  },
  {
    id: 'gym',
    name: 'Fitness & Wellness Studio',
    category: 'wellness',
    icon: 'Dumbbell',
    description: 'Technogym cardio equipment, free weights, yoga mats, and personal training on request.'
  },
  {
    id: 'spa',
    name: 'Sanctuary Holistic Spa',
    category: 'wellness',
    icon: 'Sparkles',
    description: 'Traditional Hilot massages, organic body treatments, and private aromatherapy cabanas.',
    isPopular: true
  },
  {
    id: 'restaurant',
    name: 'Azure Cove Signature Dining',
    category: 'dining',
    icon: 'Utensils',
    description: 'Fresh seafood, farm-to-table Asian-Mediterranean fusion cuisine, and beachfront candlelit tables.',
    isPopular: true
  },
  {
    id: 'airport-transfer',
    name: 'Speedboat & Van Transfer',
    category: 'property',
    icon: 'Ship',
    description: 'Seamless arrival assistance including airport lounge reception and private speedboat transfer across Caticlan strait.',
    isPopular: true
  }
]

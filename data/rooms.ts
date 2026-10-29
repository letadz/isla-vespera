import type { Room } from '~/types'

export const rooms: Room[] = [
  {
    id: 'deluxe-ocean-view',
    slug: 'deluxe-ocean-view',
    name: 'Deluxe Ocean View',
    tagline: 'Panoramic vistas of Boracay’s turquoise waters and powdery white sands.',
    description: 'A sunlit retreat featuring an expansive private balcony overlooking the ocean, tailored for couples or solo travelers seeking tranquility.',
    longDescription: 'Perched on the higher floors of Isla Vespera Resort, the Deluxe Ocean View room immerses you in the natural rhythm of the sea. Featuring floor-to-ceiling sliding glass doors, a plush king-sized bed with 500-thread-count Egyptian cotton linens, a deep-soak marble tub, and handwoven Filipino accent pieces, this room delivers the quintessential island escape.',
    price: 9500,
    currency: 'PHP',
    capacity: {
      adults: 2,
      children: 1,
      maxGuests: 3
    },
    beds: '1 King Bed or 2 Twin Beds',
    sizeM2: 48,
    images: {
      hero: '/images/rooms/deluxe-ocean-view/hero.jpg',
      thumbnail: '/images/rooms/deluxe-ocean-view/thumb.jpg',
      gallery: [
        '/images/rooms/deluxe-ocean-view/hero.jpg',
        '/images/rooms/deluxe-ocean-view/balcony.jpg',
        '/images/rooms/deluxe-ocean-view/bathroom.jpg',
        '/images/rooms/deluxe-ocean-view/interior.jpg'
      ]
    },
    amenities: ['wifi', 'ac', 'breakfast', 'tv', 'minibar', 'room-service'],
    featured: true,
    available: true,
    availableCount: 4,
    view: 'ocean',
    badge: 'Popular Choice'
  },
  {
    id: 'premium-king-room',
    slug: 'premium-king-room',
    name: 'Premium King Room',
    tagline: 'Serene tropical garden immersion with artisan wood finishes.',
    description: 'Surrounded by lush flora, this spacious sanctuary provides quiet elegance with an outdoor rain shower and private daybed terrace.',
    longDescription: 'Tucked within the resort’s curated botanical gardens, the Premium King Room blends modern architectural lines with organic local mahogany and teakwood. Unwind on the shaded veranda daybed, recharge under the open-sky rain shower, and enjoy personalized in-room morning tea rituals prepared by your island concierge.',
    price: 12500,
    currency: 'PHP',
    capacity: {
      adults: 2,
      children: 1,
      maxGuests: 3
    },
    beds: '1 Custom California King Bed',
    sizeM2: 56,
    images: {
      hero: '/images/rooms/premium-king-room/hero.jpg',
      thumbnail: '/images/rooms/premium-king-room/thumb.jpg',
      gallery: [
        '/images/rooms/premium-king-room/hero.jpg',
        '/images/rooms/premium-king-room/terrace.jpg',
        '/images/rooms/premium-king-room/shower.jpg',
        '/images/rooms/premium-king-room/bed.jpg'
      ]
    },
    amenities: ['wifi', 'ac', 'breakfast', 'tv', 'minibar', 'room-service', 'spa'],
    featured: true,
    available: true,
    availableCount: 3,
    view: 'garden',
    badge: 'Guest Favorite'
  },
  {
    id: 'family-suite',
    slug: 'family-suite',
    name: 'Family Suite',
    tagline: 'Generous multi-room layout crafted for memorable group and family getaways.',
    description: 'Dual interconnected bedrooms, a private dining lounge, and direct ground-level access to the kids’ pool and gardens.',
    longDescription: 'Designed with effortless harmony in mind, the Family Suite comfortably welcomes families or travel companions. Features include a master bedroom with an ensuite plunge bath, a secondary bedroom with twin queen beds, a central living pavilion, children’s beach amenity kits, and afternoon family tea service.',
    price: 18000,
    currency: 'PHP',
    capacity: {
      adults: 4,
      children: 2,
      maxGuests: 6
    },
    beds: '1 King Bed + 2 Double Beds',
    sizeM2: 88,
    images: {
      hero: '/images/rooms/family-suite/hero.jpg',
      thumbnail: '/images/rooms/family-suite/thumb.jpg',
      gallery: [
        '/images/rooms/family-suite/hero.jpg',
        '/images/rooms/family-suite/living.jpg',
        '/images/rooms/family-suite/bedroom-2.jpg',
        '/images/rooms/family-suite/patio.jpg'
      ]
    },
    amenities: ['wifi', 'ac', 'breakfast', 'tv', 'minibar', 'room-service', 'pool', 'parking'],
    featured: false,
    available: true,
    availableCount: 2,
    view: 'pool',
    badge: 'Spacious & Social'
  },
  {
    id: 'executive-suite',
    slug: 'executive-suite',
    name: 'Executive Suite',
    tagline: 'Refined penthouse luxury with sunset ocean terraces and private bar.',
    description: 'An elevated corner suite offering 270-degree horizon views, personalized butler service, and an open-concept oceanfront jacuzzi.',
    longDescription: 'The Executive Suite is the pinnacle of seaside sophistication. Positioned at the highest vantage of White Beach Station 1, guests enjoy sweeping sunset views from a 30-square-meter private terrace equipped with a stone whirlpool jacuzzi, dedicated dining gazebo, daily sunset champagne service, and round-the-clock butler attention.',
    price: 24000,
    currency: 'PHP',
    capacity: {
      adults: 2,
      children: 2,
      maxGuests: 4
    },
    beds: '1 Super King Bed + 1 Convertible Lounge',
    sizeM2: 110,
    images: {
      hero: '/images/rooms/executive-suite/hero.jpg',
      thumbnail: '/images/rooms/executive-suite/thumb.jpg',
      gallery: [
        '/images/rooms/executive-suite/hero.jpg',
        '/images/rooms/executive-suite/jacuzzi.jpg',
        '/images/rooms/executive-suite/lounge.jpg',
        '/images/rooms/executive-suite/sunset.jpg'
      ]
    },
    amenities: ['wifi', 'ac', 'breakfast', 'tv', 'minibar', 'room-service', 'spa', 'airport-transfer', 'gym'],
    featured: true,
    available: true,
    availableCount: 2,
    view: 'ocean',
    badge: 'Executive Selection'
  },
  {
    id: 'presidential-villa',
    slug: 'presidential-villa',
    name: 'Presidential Villa',
    tagline: 'The ultimate standalone beachfront haven with private infinity plunge pool.',
    description: 'A palatial two-story beachfront villa with direct private sand access, secluded infinity pool, chef kitchen, and private boat transfers.',
    longDescription: 'Isla Vespera Resort’s crown jewel: the Presidential Villa provides absolute seclusion directly on the famous powdery sands. Encompassing over 210 square meters of indoor and outdoor living space, this sanctuary boasts a private freshwater infinity pool, an outdoor dining pavilion, private chef dining options, and personal speedboat transfers from Caticlan.',
    price: 45000,
    currency: 'PHP',
    capacity: {
      adults: 6,
      children: 2,
      maxGuests: 8
    },
    beds: '3 King Suites + Butler Quarters',
    sizeM2: 215,
    images: {
      hero: '/images/rooms/presidential-villa/hero.jpg',
      thumbnail: '/images/rooms/presidential-villa/thumb.jpg',
      gallery: [
        '/images/rooms/presidential-villa/hero.jpg',
        '/images/rooms/presidential-villa/private-pool.jpg',
        '/images/rooms/presidential-villa/master.jpg',
        '/images/rooms/presidential-villa/beachfront.jpg'
      ]
    },
    amenities: ['wifi', 'ac', 'breakfast', 'tv', 'minibar', 'room-service', 'pool', 'spa', 'restaurant', 'airport-transfer', 'gym', 'parking'],
    featured: true,
    available: true,
    availableCount: 1,
    view: 'ocean',
    badge: 'Signature Villa'
  }
]

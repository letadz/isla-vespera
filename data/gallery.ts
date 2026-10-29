import type { GalleryItem } from '~/types'

export const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'rooms', label: 'Rooms & Suites' },
  { id: 'exterior', label: 'Resort & Beach' },
  { id: 'interior', label: 'Interiors & Design' },
  { id: 'pool', label: 'Pool & Cabanas' },
  { id: 'dining', label: 'Culinary Experiences' },
  { id: 'amenities', label: 'Spa & Wellness' }
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Beachfront Sunset Vista',
    category: 'exterior',
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Beachfront infinity loungers overlooking Boracay golden hour sunset',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-2',
    title: 'Deluxe Ocean View Bedroom',
    category: 'rooms',
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunlit modern deluxe bedroom with king bed and balcony overlooking the ocean',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-3',
    title: 'Two-Tier Infinity Pool',
    category: 'pool',
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Curved infinity pool reflecting tropical palm trees and turquoise ocean water',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-4',
    title: 'Azure Cove Sunset Dining',
    category: 'dining',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Candlelit open-air beachfront tables laid with fine glassware and fresh seafood',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-5',
    title: 'Sanctuary Spa Treatment Pavilion',
    category: 'amenities',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    alt: 'Holistic massage tables surrounded by tropical foliage and trickling water fountains',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-6',
    title: 'Presidential Villa Living Area',
    category: 'interior',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Spacious high-ceiling villa lounge with custom teakwood furnishings and modern art',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-7',
    title: 'Tropical Garden Pathway',
    category: 'exterior',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Stone pathway winding through lush palm groves leading directly to White Beach',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-8',
    title: 'Executive Suite Terrace Jacuzzi',
    category: 'rooms',
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Private outdoor stone whirlpool hot tub overlooking ocean horizon at dusk',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-9',
    title: 'Artisan Breakfast Spread',
    category: 'dining',
    src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh tropical fruits, croissants, espresso, and organic farm dishes on a wooden table',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-10',
    title: 'Private Beach Cabana',
    category: 'pool',
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Shaded white linen cabana with plush loungers on powdery white sand',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-11',
    title: 'Boutique Fitness Studio',
    category: 'amenities',
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    alt: 'Air-conditioned fitness studio with modern treadmills looking out over the gardens',
    width: 1200,
    height: 800
  },
  {
    id: 'gal-12',
    title: 'Family Suite Second Bedroom',
    category: 'rooms',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    alt: 'Twin queen beds with crisp white linen and woven tropical headboards',
    width: 1200,
    height: 800
  }
]

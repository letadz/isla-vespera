export interface Amenity {
  id: string
  name: string
  category: 'room' | 'property' | 'wellness' | 'dining'
  icon: string // Lucide icon name, e.g. "Wifi", "Waves", "Utensils"
  description?: string
  isPopular?: boolean
}

export interface RoomCapacity {
  adults: number
  children: number
  maxGuests: number
}

export interface RoomImages {
  hero: string
  gallery: string[]
  thumbnail: string
}

export interface Room {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  price: number // In local currency, e.g., PHP
  currency: string
  capacity: RoomCapacity
  beds: string
  sizeM2: number
  images: RoomImages
  amenities: string[] // Amenity IDs
  featured: boolean
  available: boolean
  availableCount: number
  view: 'ocean' | 'garden' | 'pool' | 'mountain' | 'city'
  badge?: string
}

export interface Review {
  id: string
  name: string
  country: string
  avatar?: string
  rating: number // 1 to 5
  comment: string
  date: string
  stayedRoom: string
}

export interface Offer {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  discountPercentage?: number
  fixedDiscount?: number
  image: string
  validFrom: string
  validUntil: string
  minimumNights: number
  promoCode?: string
  ctaText: string
  inclusions: string[]
}

export interface GalleryItem {
  id: string
  title: string
  category: 'rooms' | 'exterior' | 'interior' | 'pool' | 'dining' | 'amenities'
  src: string
  alt: string
  width?: number
  height?: number
}

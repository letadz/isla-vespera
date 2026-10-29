import { siteConfig } from '~/config/site'
import { rooms } from '~/data/rooms'
import { amenities } from '~/data/amenities'
import { reviews } from '~/data/reviews'
import { offers } from '~/data/offers'
import { galleryItems, galleryCategories } from '~/data/gallery'
import type { Room, Amenity, Review, Offer, GalleryItem } from '~/types'

export function useHotel() {
  const hotel = readonly(siteConfig)
  const roomList = readonly(rooms)
  const amenityList = readonly(amenities)
  const reviewList = readonly(reviews)
  const offerList = readonly(offers)
  const gallery = readonly(galleryItems)
  const categories = readonly(galleryCategories)

  const featuredRooms = computed(() => roomList.filter(r => r.featured))

  const getRoomBySlug = (slug: string): Room | undefined => {
    return roomList.find(r => r.slug === slug)
  }

  const getRoomById = (id: string): Room | undefined => {
    return roomList.find(r => r.id === id)
  }

  const getAmenityById = (id: string): Amenity | undefined => {
    return amenityList.find(a => a.id === id)
  }

  const getAmenitiesForRoom = (amenityIds: string[]): Amenity[] => {
    return amenityIds
      .map(id => getAmenityById(id))
      .filter((a): a is Amenity => a !== undefined)
  }

  return {
    hotel,
    rooms: roomList,
    featuredRooms,
    amenities: amenityList,
    reviews: reviewList,
    offers: offerList,
    gallery,
    galleryCategories: categories,
    getRoomBySlug,
    getRoomById,
    getAmenityById,
    getAmenitiesForRoom
  }
}

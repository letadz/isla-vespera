<template>
  <div>
    <!-- Hero with Docked Booking Bar -->
    <HeroSection />

    <!-- Welcome & Heritage Story -->
    <WelcomeSection />

    <!-- Featured Accommodations -->
    <FeaturedRooms />

    <!-- Curated Amenities -->
    <AmenitiesSection />

    <!-- Photo Gallery Preview -->
    <GalleryPreview />

    <!-- Seasonal Packages & Offers -->
    <OffersSection />

    <!-- Guest Testimonials -->
    <TestimonialsSection />

    <!-- Bottom Conversion CTA Banner -->
    <BookingCTA />
  </div>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import HeroSection from '~/components/home/HeroSection.vue';
import WelcomeSection from '~/components/home/WelcomeSection.vue';
import FeaturedRooms from '~/components/home/FeaturedRooms.vue';
import AmenitiesSection from '~/components/home/AmenitiesSection.vue';
import GalleryPreview from '~/components/home/GalleryPreview.vue';
import OffersSection from '~/components/home/OffersSection.vue';
import TestimonialsSection from '~/components/home/TestimonialsSection.vue';
import BookingCTA from '~/components/home/BookingCTA.vue';

const { hotel } = useHotel();

useHead({
  title: `${hotel.name} — Luxury Tropical Resort`,
  meta: [
    {
      name: 'description',
      content: `Book direct at ${hotel.name}. Beachfront luxury rooms, private villas, and personalized concierge in Station 1, Philippines.`,
    },
  ],
});
</script>

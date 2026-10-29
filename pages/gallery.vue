<template>
  <div class="py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-widest text-secondary"
        >
          <span class="w-6 h-px bg-secondary" />
          <span>Resort Photography</span>
          <span class="w-6 h-px bg-secondary" />
        </div>
        <h1 class="text-3xl sm:text-5xl font-heading font-bold text-font-text">
          A Visual Journey Through Isla Vespera
        </h1>
        <p
          class="mt-3 text-sm sm:text-base text-font-muted leading-relaxed max-w-2xl mx-auto"
        >
          Browse our curated gallery spanning pristine beachfronts, sun-drenched
          suites, intimate dining, and holistic wellness escapes.
        </p>
      </div>

      <!-- Full Gallery Grid with Filters and Lightbox -->
      <GalleryGrid :items="gallery" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import GalleryGrid from '~/components/gallery/GalleryGrid.vue';

const { gallery, hotel } = useHotel();

useHead({
  title: 'Resort Gallery',
  meta: [
    {
      name: 'description',
      content: `Explore the visual story of ${hotel.name}. Browse high-resolution photography of our rooms, pool, dining, spa, and beachfront experiences.`,
    },
  ],
});
</script>

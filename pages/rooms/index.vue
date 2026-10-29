<template>
  <div class="py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-widest text-secondary"
        >
          <span class="w-6 h-px bg-secondary" />
          <span>Our Accommodations</span>
          <span class="w-6 h-px bg-secondary" />
        </div>
        <h1 class="text-3xl sm:text-5xl font-heading font-bold text-font-text">
          Rooms, Suites & Beachfront Villas
        </h1>
        <p class="mt-3 text-sm sm:text-base text-font-muted leading-relaxed">
          Select from our collection of oceanfront sanctuaries, tranquil garden
          rooms, and private pool villas, designed for absolute rest.
        </p>
      </div>

      <!-- Filterable and Sortable Room Grid -->
      <RoomGrid :rooms="rooms" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import RoomGrid from '~/components/rooms/RoomGrid.vue';

const { rooms, hotel } = useHotel();

useHead({
  title: 'Rooms & Suites',
  meta: [
    {
      name: 'description',
      content: `Explore luxury rooms, suites, and presidential villas at ${hotel.name}. Featuring ocean views, custom king beds, and plunge pools.`,
    },
  ],
});
</script>

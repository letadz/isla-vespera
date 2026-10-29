<template>
  <div class="py-8 sm:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Found Room State -->
      <RoomDetails
        v-if="room"
        :room="room"
      />

      <!-- Invalid Room Slug Friendly State -->
      <div
        v-else
        class="text-center py-24 space-y-6"
      >
        <EmptyState
          title="Accommodation Not Found"
          description="The requested room or suite does not exist or may have been updated in our system."
        >
          <template #action>
            <BaseButton
              to="/rooms"
              variant="gold"
              size="md"
            >
              Browse Available Rooms
            </BaseButton>
          </template>
        </EmptyState>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHotel } from '~/composables/useHotel';
import RoomDetails from '~/components/rooms/RoomDetails.vue';
import EmptyState from '~/components/common/EmptyState.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const route = useRoute();
const { getRoomBySlug, hotel } = useHotel();

const slug = computed(() => route.params.slug as string);
const room = computed(() => getRoomBySlug(slug.value));

// Dynamic SEO & Structured Data
useHead(() => {
  if (!room.value) {
    return {
      title: 'Room Not Found',
    };
  }

  const roomTitle = `${room.value.name} — ${hotel.name}`;
  const roomDesc = room.value.description;

  return {
    title: room.value.name,
    meta: [
      { name: 'description', content: roomDesc },
      { property: 'og:title', content: roomTitle },
      { property: 'og:description', content: roomDesc },
      { property: 'og:image', content: room.value.images.hero },
      { name: 'twitter:title', content: roomTitle },
      { name: 'twitter:description', content: roomDesc },
      { name: 'twitter:image', content: room.value.images.hero },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HotelRoom',
          name: room.value.name,
          description: room.value.description,
          image: room.value.images.hero,
          bed: room.value.beds,
          occupancy: {
            '@type': 'QuantitativeValue',
            maxValue: room.value.capacity.maxGuests,
          },
          offers: {
            '@type': 'Offer',
            price: room.value.price,
            priceCurrency: room.value.currency,
            availability: room.value.available
              ? 'https://schema.org/InStock'
              : 'https://schema.org/SoldOut',
          },
        }),
      },
    ],
  };
});
</script>

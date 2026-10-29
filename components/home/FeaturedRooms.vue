<template>
  <section class="py-20 sm:py-28 bg-surface-muted/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Accommodations"
        title="Sanctuaries of Rest & Elegance"
        subtitle="Each space is intentionally crafted to balance coastal architecture with indulgent comfort, panoramic ocean views, and discreet island hospitality."
        with-flourish
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard
          v-for="room in displayRooms"
          :key="room.id"
          :room="room"
        />
      </div>

      <div class="mt-14 text-center">
        <BaseButton
          to="/rooms"
          variant="outline"
          size="lg"
        >
          View All Rooms & Suites
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHotel } from '~/composables/useHotel';
import SectionHeading from '~/components/common/SectionHeading.vue';
import RoomCard from '~/components/rooms/RoomCard.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const { featuredRooms, rooms } = useHotel();

const displayRooms = computed(() => {
  return featuredRooms.value.length > 0
    ? featuredRooms.value.slice(0, 3)
    : rooms.slice(0, 3);
});
</script>

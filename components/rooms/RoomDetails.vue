<template>
  <div class="space-y-12">
    <!-- Breadcrumb -->
    <nav
      class="flex items-center gap-2 text-xs text-font-muted"
      aria-label="Breadcrumb"
    >
      <NuxtLink
        to="/"
        class="hover:text-secondary transition-colors"
      >
        Home
      </NuxtLink>
      <span>/</span>
      <NuxtLink
        to="/rooms"
        class="hover:text-secondary transition-colors"
      >
        Rooms & Suites
      </NuxtLink>
      <span>/</span>
      <span class="text-font-text font-medium">{{ room.name }}</span>
    </nav>

    <!-- Main Two-Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Left Column: Gallery, Narrative, Specifications, Amenities (8 cols) -->
      <div class="lg:col-span-8 space-y-10">
        <!-- Room Photo Gallery -->
        <RoomGallery
          :hero="room.images.hero"
          :gallery="room.images.gallery"
          :room-name="room.name"
        />

        <!-- Title & Badges Header -->
        <div>
          <div class="flex flex-wrap items-center gap-2.5 mb-3">
            <Badge
              v-if="room.badge"
              variant="gold"
              size="sm"
            >
              {{ room.badge }}
            </Badge>
            <Badge
              variant="outline"
              size="sm"
            >
              {{ room.view }} view
            </Badge>
            <span
              class="text-xs text-secondary font-semibold uppercase tracking-wider"
            >
              Boracay Island
            </span>
          </div>

          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-font-text leading-tight"
          >
            {{ room.name }}
          </h1>

          <p class="mt-2 text-base sm:text-lg text-secondary font-medium">
            {{ room.tagline }}
          </p>
        </div>

        <!-- Specifications Grid Bar -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-surface border border-border"
        >
          <div class="space-y-1">
            <span
              class="text-[11px] uppercase tracking-wider text-font-muted font-medium flex items-center gap-1.5"
            >
              <Icon
                name="Bed"
                :size="15"
                class="text-secondary"
              />
              Bed Type
            </span>
            <p class="text-sm font-semibold text-font-text">{{ room.beds }}</p>
          </div>

          <div class="space-y-1">
            <span
              class="text-[11px] uppercase tracking-wider text-font-muted font-medium flex items-center gap-1.5"
            >
              <Icon
                name="Maximize2"
                :size="15"
                class="text-secondary"
              />
              Room Size
            </span>
            <p class="text-sm font-semibold text-font-text">
              {{ room.sizeM2 }} m² ({{ Math.round(room.sizeM2 * 10.764) }} sq
              ft)
            </p>
          </div>

          <div class="space-y-1">
            <span
              class="text-[11px] uppercase tracking-wider text-font-muted font-medium flex items-center gap-1.5"
            >
              <Icon
                name="Users"
                :size="15"
                class="text-secondary"
              />
              Occupancy
            </span>
            <p class="text-sm font-semibold text-font-text">
              {{ room.capacity.adults }} Adults,
              {{ room.capacity.children }} Child
            </p>
          </div>

          <div class="space-y-1">
            <span
              class="text-[11px] uppercase tracking-wider text-font-muted font-medium flex items-center gap-1.5"
            >
              <Icon
                name="Eye"
                :size="15"
                class="text-secondary"
              />
              Primary View
            </span>
            <p class="text-sm font-semibold text-font-text capitalize">
              {{ room.view }} View
            </p>
          </div>
        </div>

        <!-- Narrative Description -->
        <div class="space-y-4">
          <h3 class="text-xl font-heading font-semibold text-font-text">
            About the Accommodation
          </h3>
          <p
            class="text-sm sm:text-base text-font-muted leading-relaxed whitespace-pre-line"
          >
            {{ room.longDescription || room.description }}
          </p>
        </div>

        <!-- Included Amenities -->
        <RoomAmenities :amenities="amenitiesList" />

        <!-- Check-in & Stay Policies Reassurance -->
        <div class="p-6 rounded-2xl bg-surface border border-border space-y-3">
          <h4
            class="text-sm font-semibold uppercase tracking-wider text-font-text flex items-center gap-2"
          >
            <Icon
              name="Clock"
              :size="16"
              class="text-secondary"
            />
            Check-In & Stay Policies
          </h4>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-font-muted pt-2 border-t border-border"
          >
            <div>
              <p class="font-medium text-font-text">
                Check-in: {{ siteConfig.booking.checkInTime }}
              </p>
              <p>Early check-in subject to room availability.</p>
            </div>
            <div>
              <p class="font-medium text-font-text">
                Check-out: {{ siteConfig.booking.checkOutTime }}
              </p>
              <p>Late check-out may be arranged at front desk.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Sticky Availability Widget (4 cols) -->
      <div class="lg:col-span-4 w-full">
        <RoomAvailability :room="room" />
      </div>
    </div>

    <!-- Related Rooms Carousel/Grid -->
    <div
      v-if="relatedRooms.length > 0"
      class="pt-16 border-t border-border space-y-8"
    >
      <div class="flex items-center justify-between">
        <div>
          <span
            class="text-xs font-semibold uppercase tracking-widest text-secondary"
          >
            Explore More
          </span>
          <h2
            class="text-2xl sm:text-3xl font-heading font-bold text-font-text"
          >
            Other Rooms & Suites You Might Love
          </h2>
        </div>
        <NuxtLink
          to="/rooms"
          class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
        >
          <span>View All Rooms</span>
          <Icon
            name="ArrowRight"
            :size="16"
          />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RoomCard
          v-for="relRoom in relatedRooms"
          :key="relRoom.id"
          :room="relRoom"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Room } from '~/types';
import { siteConfig } from '~/config/site';
import { useHotel } from '~/composables/useHotel';
import RoomGallery from './RoomGallery.vue';
import RoomAmenities from './RoomAmenities.vue';
import RoomAvailability from './RoomAvailability.vue';
import RoomCard from './RoomCard.vue';
import Badge from '~/components/ui/Badge.vue';
import Icon from '~/components/ui/Icon.vue';

const props = defineProps<{
  room: Room;
}>();

const { rooms, getAmenitiesForRoom } = useHotel();

const amenitiesList = computed(() => {
  return getAmenitiesForRoom(props.room.amenities);
});

const relatedRooms = computed(() => {
  return rooms.filter((r) => r.id !== props.room.id).slice(0, 3);
});
</script>

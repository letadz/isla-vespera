<template>
  <article
    class="bg-surface border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
  >
    <!-- Room Image Container -->
    <div class="relative aspect-16/10 overflow-hidden bg-surface-muted">
      <img
        :src="room.images.thumbnail || room.images.hero"
        :alt="`${room.name} interior at ${hotel.name}`"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"
      />

      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-wrap gap-2">
        <Badge
          v-if="room.badge"
          variant="gold"
          size="sm"
        >
          {{ room.badge }}
        </Badge>
        <Badge
          v-else-if="room.featured"
          variant="secondary"
          size="sm"
        >
          Featured
        </Badge>
      </div>

      <!-- View Tag -->
      <div class="absolute bottom-3 left-3">
        <span
          class="text-[11px] font-semibold tracking-wider uppercase text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1"
        >
          <Icon
            name="Eye"
            :size="12"
          />
          {{ room.view }} view
        </span>
      </div>

      <!-- Price Overlay -->
      <div class="absolute bottom-3 right-3 text-right">
        <div class="text-white drop-shadow-md">
          <span class="text-xs uppercase tracking-wider opacity-80">From</span>
          <span class="text-xl font-heading font-bold text-secondary-light">
            {{ formatCurrency(room.price, room.currency) }}
          </span>
          <span class="text-xs opacity-80">/ night</span>
        </div>
      </div>
    </div>

    <!-- Room Body Info -->
    <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
      <div>
        <h3
          class="text-xl font-heading font-bold text-font-text group-hover:text-secondary transition-colors"
        >
          <NuxtLink :to="`/rooms/${room.slug}`">
            {{ room.name }}
          </NuxtLink>
        </h3>

        <p
          class="mt-2 text-xs sm:text-sm text-font-muted line-clamp-2 leading-relaxed"
        >
          {{ room.description }}
        </p>

        <!-- Specifications: Bed, Size, Capacity -->
        <div
          class="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-2 text-xs text-font-muted"
        >
          <div
            class="flex items-center gap-1.5"
            title="Bed Configuration"
          >
            <Icon
              name="Bed"
              :size="16"
              class="text-secondary shrink-0"
            />
            <span class="truncate">{{ room.beds }}</span>
          </div>

          <div
            class="flex items-center gap-1.5"
            title="Room Size"
          >
            <Icon
              name="Maximize2"
              :size="15"
              class="text-secondary shrink-0"
            />
            <span>{{ room.sizeM2 }} m²</span>
          </div>

          <div
            class="flex items-center gap-1.5"
            title="Maximum Capacity"
          >
            <Icon
              name="Users"
              :size="16"
              class="text-secondary shrink-0"
            />
            <span>Up to {{ room.capacity.maxGuests }}</span>
          </div>
        </div>

        <!-- Amenities Preview Chips -->
        <div
          v-if="roomAmenities.length > 0"
          class="mt-3.5 flex flex-wrap gap-1.5"
        >
          <span
            v-for="amenity in roomAmenities.slice(0, 3)"
            :key="amenity.id"
            class="text-[11px] px-2 py-0.5 rounded-full bg-surface-muted text-font-muted border border-border/60 flex items-center gap-1"
          >
            <Icon
              :name="amenity.icon"
              :size="11"
              class="text-secondary"
            />
            <span>{{ amenity.name }}</span>
          </span>
          <span
            v-if="roomAmenities.length > 3"
            class="text-[11px] text-font-muted px-1.5 py-0.5"
          >
            +{{ roomAmenities.length - 3 }} more
          </span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-6 pt-4 border-t border-border flex items-center gap-3">
        <BaseButton
          :to="`/rooms/${room.slug}`"
          variant="outline"
          size="sm"
          class="flex-1"
        >
          View Details
        </BaseButton>

        <BaseButton
          variant="gold"
          size="sm"
          class="flex-1"
          @click="handleQuickReserve"
        >
          Reserve
        </BaseButton>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Room } from '~/types';
import { useHotel } from '~/composables/useHotel';
import { useBooking } from '~/composables/useBooking';
import { formatCurrency } from '~/utils/currency';
import Icon from '~/components/ui/Icon.vue';
import Badge from '~/components/ui/Badge.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const props = defineProps<{
  room: Room;
}>();

const router = useRouter();
const { hotel, getAmenitiesForRoom } = useHotel();
const { selectRoom } = useBooking();

const roomAmenities = computed(() => {
  return getAmenitiesForRoom(props.room.amenities);
});

const handleQuickReserve = () => {
  selectRoom(props.room.id);
  router.push('/booking');
};
</script>

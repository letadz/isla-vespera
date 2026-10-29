<template>
  <div class="space-y-8">
    <!-- Filter and Sort Controls Toolbar -->
    <div
      class="bg-surface border border-border p-4 sm:p-5 rounded-2xl shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4"
    >
      <!-- Search Input -->
      <div class="flex-1 min-w-[240px]">
        <div class="relative flex items-center">
          <div class="absolute left-3.5 text-font-muted pointer-events-none">
            <Icon
              name="Search"
              :size="16"
            />
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search suites, views, bed configurations..."
            class="w-full bg-surface-muted/50 border border-border rounded-button py-2 pl-9 pr-3 text-sm text-font-text focus:outline-hidden focus:border-secondary transition-colors"
          />
        </div>
      </div>

      <!-- Filters: View, Capacity, Sort -->
      <div class="flex flex-wrap items-center gap-3">
        <!-- View Filter -->
        <select
          v-model="selectedView"
          class="bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
        >
          <option value="all">All Views</option>
          <option value="ocean">Ocean View</option>
          <option value="garden">Garden View</option>
          <option value="pool">Pool View</option>
        </select>

        <!-- Capacity Filter -->
        <select
          v-model="selectedCapacity"
          class="bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
        >
          <option :value="0">Any Capacity</option>
          <option :value="2">2+ Guests</option>
          <option :value="4">4+ Guests</option>
          <option :value="6">6+ Guests</option>
        </select>

        <!-- Sort Option -->
        <select
          v-model="sortBy"
          class="bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
        >
          <option value="recommended">Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="size-desc">Largest Size</option>
        </select>

        <!-- Featured Only Toggle -->
        <button
          type="button"
          class="py-2 px-3 rounded-button border text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
          :class="
            featuredOnly
              ? 'bg-secondary/15 border-secondary text-secondary font-semibold'
              : 'border-border text-font-muted hover:border-font-muted'
          "
          @click="featuredOnly = !featuredOnly"
        >
          <Icon
            name="Sparkles"
            :size="14"
          />
          <span>Featured Only</span>
        </button>
      </div>
    </div>

    <!-- Active Results Count -->
    <div class="flex items-center justify-between text-xs text-font-muted px-1">
      <span>
        Showing {{ filteredRooms.length }} of {{ rooms.length }} available rooms
      </span>
      <button
        v-if="hasActiveFilters && filteredRooms.length >= 1"
        type="button"
        class="text-secondary hover:underline cursor-pointer"
        @click="resetFilters"
      >
        Reset filters
      </button>
    </div>

    <!-- Rooms Grid -->
    <div
      v-if="filteredRooms.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      <RoomCard
        v-for="room in filteredRooms"
        :key="room.id"
        :room="room"
      />
    </div>

    <!-- Empty State -->
    <EmptyState
      v-else
      title="No rooms match your filters"
      description="Try clearing your search query or selecting a different view or guest capacity."
    >
      <template #action>
        <BaseButton
          variant="outline"
          size="sm"
          @click="resetFilters"
        >
          Clear All Filters
        </BaseButton>
      </template>
    </EmptyState>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Room } from '~/types';
import RoomCard from './RoomCard.vue';
import EmptyState from '~/components/common/EmptyState.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const props = defineProps<{
  rooms: Room[];
}>();

const searchQuery = ref('');
const selectedView = ref('all');
const selectedCapacity = ref(0);
const sortBy = ref('recommended');
const featuredOnly = ref(false);

const hasActiveFilters = computed(() => {
  return (
    searchQuery.value !== '' ||
    selectedView.value !== 'all' ||
    selectedCapacity.value !== 0 ||
    featuredOnly.value
  );
});

const resetFilters = () => {
  searchQuery.value = '';
  selectedView.value = 'all';
  selectedCapacity.value = 0;
  sortBy.value = 'recommended';
  featuredOnly.value = false;
};

const filteredRooms = computed(() => {
  let list = [...props.rooms];

  // Search keyword filter
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim();
    list = list.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.beds.toLowerCase().includes(q),
    );
  }

  // View filter
  if (selectedView.value !== 'all') {
    list = list.filter((r) => r.view === selectedView.value);
  }

  // Capacity filter
  if (selectedCapacity.value > 0) {
    list = list.filter((r) => r.capacity.maxGuests >= selectedCapacity.value);
  }

  // Featured only
  if (featuredOnly.value) {
    list = list.filter((r) => r.featured);
  }

  // Sorting
  if (sortBy.value === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortBy.value === 'size-desc') {
    list.sort((a, b) => b.sizeM2 - a.sizeM2);
  }

  return list;
});
</script>

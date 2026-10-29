<template>
  <div
    class="bg-surface border border-border rounded-2xl p-5 shadow-sm space-y-4"
  >
    <div class="flex items-center justify-between pb-3 border-b border-border">
      <h3 class="text-base font-heading font-semibold text-font-text">
        Select Room & Travel Dates
      </h3>
      <NuxtLink
        to="/rooms"
        class="text-xs text-secondary hover:underline"
      >
        Browse all rooms
      </NuxtLink>
    </div>

    <!-- Room Selection Radio/Cards -->
    <div class="space-y-2">
      <label
        class="block text-xs font-semibold uppercase tracking-wider text-font-muted"
      >
        Choose Accommodation
      </label>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          v-for="r in rooms"
          :key="r.id"
          type="button"
          class="p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between"
          :class="
            selectedRoomId === r.id
              ? 'border-secondary bg-secondary/10 ring-1 ring-secondary'
              : 'border-border bg-surface-muted/30 hover:border-font-muted'
          "
          @click="selectRoom(r.id)"
        >
          <div>
            <p class="text-sm font-semibold text-font-text">{{ r.name }}</p>
            <p class="text-xs text-font-muted">
              {{ r.beds }} • Up to {{ r.capacity.maxGuests }} guests
            </p>
          </div>
          <span class="text-xs font-heading font-bold text-secondary">
            {{ formatCurrency(r.price, r.currency) }}
          </span>
        </button>
      </div>
    </div>

    <!-- Dates Picker -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1"
        >
          Check-In
        </label>
        <input
          :value="dates.checkIn"
          type="date"
          :min="todayStr"
          class="w-full bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
          @input="
            handleCheckInChange(($event.target as HTMLInputElement).value)
          "
        />
      </div>

      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1"
        >
          Check-Out
        </label>
        <input
          :value="dates.checkOut"
          type="date"
          :min="minCheckOut"
          class="w-full bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
          @input="
            handleCheckOutChange(($event.target as HTMLInputElement).value)
          "
        />
      </div>
    </div>

    <!-- Guests Selection -->
    <div class="grid grid-cols-2 gap-3 pt-1">
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1"
        >
          Adults
        </label>
        <select
          :value="guests.adults"
          class="w-full bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
          @change="
            setGuests(
              Number(($event.target as HTMLSelectElement).value),
              guests.children,
            )
          "
        >
          <option :value="1">1 Adult</option>
          <option :value="2">2 Adults</option>
          <option :value="3">3 Adults</option>
          <option :value="4">4 Adults</option>
          <option :value="5">5 Adults</option>
          <option :value="6">6 Adults</option>
        </select>
      </div>

      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1"
        >
          Children
        </label>
        <select
          :value="guests.children"
          class="w-full bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
          @change="
            setGuests(
              guests.adults,
              Number(($event.target as HTMLSelectElement).value),
            )
          "
        >
          <option :value="0">0 Children</option>
          <option :value="1">1 Child</option>
          <option :value="2">2 Children</option>
          <option :value="3">3 Children</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useHotel } from '~/composables/useHotel';
import { useBooking } from '~/composables/useBooking';
import { formatCurrency } from '~/utils/currency';
import { getTodayString, addDays } from '~/utils/date';

const { rooms } = useHotel();
const { dates, guests, selectedRoomId, selectRoom, setDates, setGuests } =
  useBooking();

const todayStr = getTodayString();
const minCheckOut = computed(() => {
  return dates.value.checkIn
    ? addDays(dates.value.checkIn, 1)
    : addDays(todayStr, 1);
});

const handleCheckInChange = (newIn: string) => {
  let newOut = dates.value.checkOut;
  if (!newOut || new Date(newOut) <= new Date(newIn)) {
    newOut = addDays(newIn, 1);
  }
  setDates(newIn, newOut);
};

const handleCheckOutChange = (newOut: string) => {
  setDates(dates.value.checkIn, newOut);
};
</script>

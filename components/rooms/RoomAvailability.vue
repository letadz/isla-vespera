<template>
  <div
    class="bg-surface border border-border rounded-2xl p-6 shadow-xl sticky top-28 space-y-6"
  >
    <!-- Header / Price per night -->
    <div
      class="flex items-baseline justify-between pb-4 border-b border-border"
    >
      <div>
        <span class="text-3xl font-heading font-bold text-secondary">
          {{ formatCurrency(room.price, room.currency) }}
        </span>
        <span class="text-xs text-font-muted">/ night</span>
      </div>
      <Badge
        v-if="room.availableCount <= 2"
        variant="primary"
        size="sm"
      >
        Only {{ room.availableCount }} left
      </Badge>
    </div>

    <!-- Date Selectors -->
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label
            class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1"
          >
            Check-In
          </label>
          <input
            v-model="localCheckIn"
            type="date"
            :min="todayStr"
            class="w-full bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
            @change="handleDateChange"
          />
        </div>

        <div>
          <label
            class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1"
          >
            Check-Out
          </label>
          <input
            v-model="localCheckOut"
            type="date"
            :min="minCheckOut"
            class="w-full bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
            @change="handleDateChange"
          />
        </div>
      </div>

      <!-- Guests Selector -->
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1"
        >
          Guests
        </label>
        <select
          v-model="localAdults"
          class="w-full bg-surface-muted/50 border border-border rounded-button py-2 px-3 text-xs text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
          @change="handleGuestsChange"
        >
          <option
            v-for="count in room.capacity.maxGuests"
            :key="count"
            :value="count"
          >
            {{ count }} {{ count === 1 ? 'Guest' : 'Guests' }} (Max
            {{ room.capacity.maxGuests }})
          </option>
        </select>
      </div>
    </div>

    <!-- Live Pricing Breakdown -->
    <div class="pt-4 border-t border-border space-y-2 text-xs text-font-muted">
      <div class="flex justify-between">
        <span>
          {{ formatCurrency(room.price, room.currency) }} ×
          {{ breakdown.nights }}
          {{ breakdown.nights === 1 ? 'night' : 'nights' }}
        </span>
        <span class="text-font-text font-medium">
          {{ formatCurrency(breakdown.subtotal, room.currency) }}
        </span>
      </div>

      <div
        v-if="breakdown.discountAmount > 0"
        class="flex justify-between text-emerald-600 font-medium"
      >
        <span>Special Discount</span>
        <span>
          -{{ formatCurrency(breakdown.discountAmount, room.currency) }}
        </span>
      </div>

      <div class="flex justify-between">
        <span>
          Resort Service Charge ({{ siteConfig.booking.serviceChargePercent }}%)
        </span>
        <span class="text-font-text font-medium">
          {{ formatCurrency(breakdown.serviceCharge, room.currency) }}
        </span>
      </div>

      <div class="flex justify-between">
        <span>
          VAT & Local Tourism Taxes ({{ siteConfig.booking.vatPercent }}%)
        </span>
        <span class="text-font-text font-medium">
          {{ formatCurrency(breakdown.vatAmount, room.currency) }}
        </span>
      </div>

      <div
        class="pt-3 border-t border-border flex justify-between items-baseline text-font-text"
      >
        <span class="text-sm font-semibold">Estimated Total</span>
        <span class="text-2xl font-heading font-bold text-secondary">
          {{ formatCurrency(breakdown.total, room.currency) }}
        </span>
      </div>
    </div>

    <!-- Booking CTA Button -->
    <BaseButton
      variant="gold"
      size="lg"
      block
      @click="proceedToBooking"
    >
      Reserve {{ room.name }}
    </BaseButton>

    <!-- Cancellation Guarantee note -->
    <div class="flex items-start gap-2 text-[11px] text-font-muted">
      <Icon
        name="ShieldCheck"
        :size="15"
        class="text-secondary shrink-0 mt-0.5"
      />
      <span>
        No instant charge. Your reservation is submitted directly to Isla
        Vespera Resort concierge.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Room } from '~/types';
import { siteConfig } from '~/config/site';
import { useBooking } from '~/composables/useBooking';
import { formatCurrency } from '~/utils/currency';
import { getTodayString, addDays, calculateNights } from '~/utils/date';
import { calculatePriceBreakdown } from '~/utils/booking';
import Icon from '~/components/ui/Icon.vue';
import Badge from '~/components/ui/Badge.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const props = defineProps<{
  room: Room;
}>();

const router = useRouter();
const { dates, guests, setDates, setGuests, selectRoom } = useBooking();

const todayStr = getTodayString();
const localCheckIn = ref(dates.value.checkIn || todayStr);
const localCheckOut = ref(dates.value.checkOut || addDays(todayStr, 2));
const localAdults = ref(
  Math.min(guests.value.adults || 2, props.room.capacity.maxGuests),
);

const minCheckOut = computed(() => {
  return localCheckIn.value
    ? addDays(localCheckIn.value, 1)
    : addDays(todayStr, 1);
});

const handleDateChange = () => {
  if (new Date(localCheckOut.value) <= new Date(localCheckIn.value)) {
    localCheckOut.value = addDays(localCheckIn.value, 1);
  }
  setDates(localCheckIn.value, localCheckOut.value);
};

const handleGuestsChange = () => {
  setGuests(localAdults.value, 0);
};

const breakdown = computed(() => {
  return calculatePriceBreakdown({
    room: props.room,
    checkIn: localCheckIn.value,
    checkOut: localCheckOut.value,
    config: siteConfig.booking,
  });
});

const proceedToBooking = () => {
  setDates(localCheckIn.value, localCheckOut.value);
  setGuests(localAdults.value, 0);
  selectRoom(props.room.id);
  router.push('/booking');
};
</script>

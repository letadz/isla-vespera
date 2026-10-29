<template>
  <div
    class="w-full bg-surface border border-border shadow-xl rounded-2xl p-4 sm:p-5 text-font-text transition-all duration-300"
    :class="customClass"
  >
    <form
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
      @submit.prevent="handleSearch"
    >
      <!-- Check-In -->
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1.5"
        >
          Check-In
        </label>
        <div class="relative flex items-center">
          <div class="absolute left-3.5 text-secondary pointer-events-none">
            <Icon
              name="Calendar"
              :size="18"
            />
          </div>
          <input
            v-model="localCheckIn"
            type="date"
            :min="todayStr"
            class="w-full bg-surface-muted/60 border border-border rounded-button py-2.5 pl-10 pr-3 text-sm text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
            required
            @change="handleCheckInChange"
          />
        </div>
      </div>

      <!-- Check-Out -->
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1.5"
        >
          Check-Out
        </label>
        <div class="relative flex items-center">
          <div class="absolute left-3.5 text-secondary pointer-events-none">
            <Icon
              name="Calendar"
              :size="18"
            />
          </div>
          <input
            v-model="localCheckOut"
            type="date"
            :min="minCheckOutStr"
            class="w-full bg-surface-muted/60 border border-border rounded-button py-2.5 pl-10 pr-3 text-sm text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
            required
          />
        </div>
      </div>

      <!-- Guests -->
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1.5"
        >
          Guests
        </label>
        <div class="relative flex items-center">
          <div class="absolute left-3.5 text-secondary pointer-events-none">
            <Icon
              name="Users"
              :size="18"
            />
          </div>
          <select
            v-model="localAdults"
            class="w-full bg-surface-muted/60 border border-border rounded-button py-2.5 pl-10 pr-8 text-sm text-font-text focus:outline-hidden focus:border-secondary appearance-none cursor-pointer"
          >
            <option :value="1">1 Adult</option>
            <option :value="2">2 Adults</option>
            <option :value="3">3 Adults</option>
            <option :value="4">4 Adults</option>
            <option :value="5">5 Adults</option>
            <option :value="6">6+ Adults</option>
          </select>
          <div class="absolute right-3 text-font-muted pointer-events-none">
            <Icon
              name="ChevronDown"
              :size="16"
            />
          </div>
        </div>
      </div>

      <!-- Submit CTA Button -->
      <div>
        <BaseButton
          type="submit"
          variant="gold"
          size="lg"
          block
        >
          <template #icon-left>
            <Icon
              name="Search"
              :size="18"
            />
          </template>
          Search Rooms
        </BaseButton>
      </div>
    </form>

    <div
      v-if="errorMsg"
      class="mt-3 text-xs text-rose-600 font-medium"
    >
      {{ errorMsg }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useBooking } from '~/composables/useBooking';
import { getTodayString, addDays } from '~/utils/date';
import Icon from '~/components/ui/Icon.vue';
import BaseButton from '~/components/common/BaseButton.vue';

defineProps<{
  customClass?: string;
}>();

const router = useRouter();
const { dates, guests, setDates, setGuests } = useBooking();

const todayStr = getTodayString();
const localCheckIn = ref(dates.value.checkIn || todayStr);
const localCheckOut = ref(dates.value.checkOut || addDays(todayStr, 2));
const localAdults = ref(guests.value.adults || 2);
const errorMsg = ref('');

const minCheckOutStr = computed(() => {
  return localCheckIn.value
    ? addDays(localCheckIn.value, 1)
    : addDays(todayStr, 1);
});

const handleCheckInChange = () => {
  if (new Date(localCheckOut.value) <= new Date(localCheckIn.value)) {
    localCheckOut.value = addDays(localCheckIn.value, 1);
  }
};

const handleSearch = () => {
  errorMsg.value = '';
  if (!localCheckIn.value || !localCheckOut.value) {
    errorMsg.value = 'Please select valid check-in and check-out dates.';
    return;
  }
  if (new Date(localCheckOut.value) <= new Date(localCheckIn.value)) {
    errorMsg.value = 'Check-out date must be after check-in date.';
    return;
  }

  setDates(localCheckIn.value, localCheckOut.value);
  setGuests(localAdults.value, 0);

  router.push('/rooms');
};
</script>

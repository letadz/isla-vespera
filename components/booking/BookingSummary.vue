<template>
  <div
    class="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm space-y-5 p-5 sm:p-6"
  >
    <h3
      class="text-lg font-heading font-semibold text-font-text border-b border-border pb-3"
    >
      Your Reservation Summary
    </h3>

    <!-- Selected Room Card Header -->
    <div
      v-if="room"
      class="flex gap-4 items-center"
    >
      <div
        class="w-20 h-20 rounded-xl overflow-hidden bg-surface-muted shrink-0 border border-border"
      >
        <img
          :src="room.images.thumbnail || room.images.hero"
          :alt="room.name"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 class="font-heading font-bold text-font-text text-base">
          {{ room.name }}
        </h4>
        <p class="text-xs text-secondary font-medium">
          {{ room.beds }} • {{ room.sizeM2 }} m²
        </p>
        <p class="text-xs text-font-muted mt-1 capitalize">
          {{ room.view }} view
        </p>
      </div>
    </div>

    <!-- Dates & Guest Details Grid -->
    <div class="grid grid-cols-2 gap-3 py-3 border-y border-border text-xs">
      <div>
        <span
          class="text-font-muted block mb-0.5 uppercase tracking-wider text-[10px]"
        >
          Check-In
        </span>
        <span class="font-semibold text-font-text">{{ formattedCheckIn }}</span>
        <span class="text-[11px] text-font-muted block">From 14:00 PM</span>
      </div>

      <div>
        <span
          class="text-font-muted block mb-0.5 uppercase tracking-wider text-[10px]"
        >
          Check-Out
        </span>
        <span class="font-semibold text-font-text">
          {{ formattedCheckOut }}
        </span>
        <span class="text-[11px] text-font-muted block">Until 12:00 PM</span>
      </div>

      <div>
        <span
          class="text-font-muted block mb-0.5 uppercase tracking-wider text-[10px]"
        >
          Length of Stay
        </span>
        <span class="font-semibold text-font-text">
          {{ nights }} {{ nights === 1 ? 'Night' : 'Nights' }}
        </span>
      </div>

      <div>
        <span
          class="text-font-muted block mb-0.5 uppercase tracking-wider text-[10px]"
        >
          Guests
        </span>
        <span class="font-semibold text-font-text">
          {{ guests.adults }} {{ guests.adults === 1 ? 'Adult' : 'Adults' }}
          <template v-if="guests.children">
            , {{ guests.children }} Child
          </template>
        </span>
      </div>
    </div>

    <!-- Cancellation Policy Reminder -->
    <div
      class="p-3.5 rounded-xl bg-surface-muted/50 border border-border/80 text-xs text-font-muted space-y-1"
    >
      <div class="flex items-center gap-1.5 font-semibold text-font-text">
        <Icon
          name="ShieldCheck"
          :size="14"
          class="text-secondary"
        />
        <span>{{ cancellationPolicy.title }}</span>
      </div>
      <p class="leading-relaxed text-[11px]">
        {{ cancellationPolicy.summary }}
      </p>
    </div>

    <!-- Inclusions Checklist -->
    <div>
      <span
        class="text-xs font-semibold uppercase tracking-wider text-font-text block mb-2"
      >
        Complimentary Privileges
      </span>
      <ul class="space-y-1.5 text-xs text-font-muted">
        <li class="flex items-center gap-2">
          <Icon
            name="Check"
            :size="14"
            class="text-emerald-500 shrink-0"
          />
          <span>Daily artisan breakfast buffet for registered guests</span>
        </li>
        <li class="flex items-center gap-2">
          <Icon
            name="Check"
            :size="14"
            class="text-emerald-500 shrink-0"
          />
          <span>High-speed optical Wi-Fi across resort grounds</span>
        </li>
        <li class="flex items-center gap-2">
          <Icon
            name="Check"
            :size="14"
            class="text-emerald-500 shrink-0"
          />
          <span>Complimentary access to beachfront infinity pool</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Room, BookingGuests } from '~/types';
import { cancellationPolicy } from '~/config/booking';
import { formatDisplayDate } from '~/utils/date';
import Icon from '~/components/ui/Icon.vue';

const props = defineProps<{
  room: Room | null;
  checkIn: string | null;
  checkOut: string | null;
  nights: number;
  guests: BookingGuests;
}>();

const formattedCheckIn = computed(() => formatDisplayDate(props.checkIn));
const formattedCheckOut = computed(() => formatDisplayDate(props.checkOut));
</script>

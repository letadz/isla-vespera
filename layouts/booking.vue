<template>
  <div class="min-h-screen flex flex-col bg-background text-font-text">
    <!-- Simplified Checkout Header -->
    <header class="bg-surface border-b border-border py-4 px-4 sm:px-8">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <NuxtLink
          to="/"
          class="flex items-center gap-2.5"
        >
          <div
            class="w-8 h-8 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary"
          >
            <Icon
              name="Waves"
              :size="16"
            />
          </div>
          <span
            class="text-lg font-heading font-bold uppercase tracking-wider text-font-text"
          >
            {{ hotel.name }}
          </span>
        </NuxtLink>

        <!-- Trust Badges & Back Button -->
        <div class="flex items-center gap-5 text-xs text-font-muted">
          <div
            class="hidden sm:flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium"
          >
            <Icon
              name="ShieldCheck"
              :size="16"
            />
            <span>Direct Reservation Request • No Prepayment</span>
          </div>

          <NuxtLink
            to="/rooms"
            class="inline-flex items-center gap-1 text-font-text hover:text-secondary font-medium transition-colors"
          >
            <Icon
              name="ArrowLeft"
              :size="14"
            />
            <span>Back to Rooms</span>
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Booking Checkout Canvas -->
    <main class="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <slot />
    </main>

    <!-- Simplified Footer -->
    <footer
      class="bg-surface border-t border-border py-6 text-center text-xs text-font-muted"
    >
      <div
        class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p>
          © {{ new Date().getFullYear() }} {{ hotel.name }}. Secure Direct
          Booking Portal.
        </p>
        <p class="flex items-center gap-4">
          <span>
            Need assistance? Call:
            <a
              :href="`tel:${hotel.contact.phone}`"
              class="text-secondary font-medium"
            >
              {{ hotel.contact.phoneDisplay }}
            </a>
          </span>
          <span>•</span>
          <a
            :href="`mailto:${hotel.contact.email}`"
            class="hover:text-secondary"
          >
            {{ hotel.contact.email }}
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useHotel } from '~/composables/useHotel';
import { useUiStore } from '~/stores/ui';
import { useBookingStore } from '~/stores/booking';
import Icon from '~/components/ui/Icon.vue';

const { hotel } = useHotel();
const uiStore = useUiStore();
const bookingStore = useBookingStore();

onMounted(() => {
  uiStore.initTheme();
  bookingStore.hydrate();
});
</script>

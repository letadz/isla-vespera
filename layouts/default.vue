<template>
  <div
    class="min-h-screen flex flex-col bg-background text-font-text selection:bg-secondary/30 selection:text-secondary"
  >
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Universal Image Lightbox Modal -->
    <GalleryLightbox />

    <!-- Global Toast Notifications -->
    <div
      v-if="toasts.length > 0"
      class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto p-4 rounded-xl border shadow-xl flex items-start gap-3 bg-surface animate__animated animate__fadeInUp animate__faster"
        :class="{
          'border-emerald-500/40 text-emerald-500': toast.type === 'success',
          'border-rose-500/40 text-rose-500': toast.type === 'error',
          'border-secondary/40 text-secondary':
            toast.type === 'info' || toast.type === 'warning',
        }"
      >
        <Icon
          :name="
            toast.type === 'success'
              ? 'CheckCircle2'
              : toast.type === 'error'
                ? 'AlertCircle'
                : 'Info'
          "
          :size="20"
          class="shrink-0 mt-0.5"
        />
        <div class="flex-1 text-xs">
          <p class="font-semibold text-font-text text-sm mb-0.5">
            {{ toast.title }}
          </p>
          <p class="text-font-muted leading-relaxed">{{ toast.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUiStore } from '~/stores/ui';
import { useBookingStore } from '~/stores/booking';
import AppHeader from '~/components/layout/AppHeader.vue';
import AppFooter from '~/components/layout/AppFooter.vue';
import GalleryLightbox from '~/components/gallery/GalleryLightbox.vue';
import Icon from '~/components/ui/Icon.vue';

const uiStore = useUiStore();
const bookingStore = useBookingStore();
const { toasts } = storeToRefs(uiStore);

onMounted(() => {
  uiStore.initTheme();
  bookingStore.hydrate();
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox Viewer"
        class="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6"
        tabindex="-1"
        @keydown.esc="close"
        @keydown.left="prev"
        @keydown.right="next"
      >
        <!-- Top bar with counter & close button -->
        <div
          class="flex items-center justify-between text-white/80 max-w-7xl mx-auto w-full z-10"
        >
          <span class="text-xs uppercase tracking-widest font-mono">
            {{ currentIndex + 1 }} / {{ images.length }}
          </span>

          <button
            type="button"
            class="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
            @click="close"
          >
            <Icon
              name="X"
              :size="24"
            />
          </button>
        </div>

        <!-- Center Image Stage with Next/Prev Arrows -->
        <div
          class="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        >
          <!-- Previous Button -->
          <button
            v-if="images.length > 1"
            type="button"
            class="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
            aria-label="Previous image"
            @click.stop="prev"
          >
            <Icon
              name="ChevronLeft"
              :size="24"
            />
          </button>

          <!-- Current Image -->
          <div
            class="max-h-[82vh] max-w-5xl flex items-center justify-center select-none"
          >
            <img
              :src="currentImage"
              alt="Resort Gallery Photo"
              class="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl animate__animated animate__fadeIn animate__faster"
            />
          </div>

          <!-- Next Button -->
          <button
            v-if="images.length > 1"
            type="button"
            class="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
            aria-label="Next image"
            @click.stop="next"
          >
            <Icon
              name="ChevronRight"
              :size="24"
            />
          </button>
        </div>

        <!-- Bottom caption & hints -->
        <div class="text-center text-xs text-white/60 pb-2">
          <span>Use keyboard arrow keys ← / → to navigate • ESC to exit</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUiStore } from '~/stores/ui';
import Icon from '~/components/ui/Icon.vue';

const uiStore = useUiStore();
const { lightboxIndex, lightboxItems } = storeToRefs(uiStore);

const isOpen = computed(
  () => lightboxIndex.value !== null && lightboxItems.value.length > 0,
);
const currentIndex = computed(() => lightboxIndex.value || 0);
const images = computed(() => lightboxItems.value || []);
const currentImage = computed(() => images.value[currentIndex.value] || '');

const close = () => {
  uiStore.closeLightbox();
};

const prev = () => {
  if (images.value.length <= 1) return;
  const newIndex =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
  lightboxIndex.value = newIndex;
};

const next = () => {
  if (images.value.length <= 1) return;
  const newIndex = (currentIndex.value + 1) % images.value.length;
  lightboxIndex.value = newIndex;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown);
  }
});
</script>

<template>
  <div class="space-y-4">
    <!-- Main Big Image Display -->
    <div
      class="relative aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden bg-surface-muted border border-border group"
    >
      <img
        :src="activeImage"
        :alt="`${roomName} photo`"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
      />

      <!-- Expand full screen / lightbox trigger -->
      <button
        type="button"
        class="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-xs text-white text-xs font-medium py-2 px-3.5 rounded-full border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
        @click="openLightbox"
      >
        <Icon
          name="Maximize2"
          :size="14"
        />
        <span>View Full Gallery ({{ allImages.length }})</span>
      </button>
    </div>

    <!-- Thumbnails Strip -->
    <div class="grid grid-cols-4 gap-3 sm:gap-4">
      <button
        v-for="(img, idx) in allImages"
        :key="idx"
        type="button"
        class="relative aspect-16/10 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-surface-muted"
        :class="
          activeImage === img
            ? 'border-secondary ring-2 ring-secondary/30 scale-[1.02]'
            : 'border-border hover:border-font-muted opacity-80 hover:opacity-100'
        "
        @click="activeImage = img"
      >
        <img
          :src="img"
          :alt="`${roomName} thumbnail ${idx + 1}`"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUiStore } from '~/stores/ui';
import Icon from '~/components/ui/Icon.vue';

const props = defineProps<{
  hero: string;
  gallery: string[];
  roomName: string;
}>();

const uiStore = useUiStore();

const allImages = computed(() => {
  const list = [props.hero, ...(props.gallery || [])];
  // Deduplicate
  return Array.from(new Set(list.filter(Boolean)));
});

const activeImage = ref(props.hero || allImages.value[0]);

const openLightbox = () => {
  const idx = allImages.value.indexOf(activeImage.value);
  uiStore.openLightbox(allImages.value, idx >= 0 ? idx : 0);
};
</script>

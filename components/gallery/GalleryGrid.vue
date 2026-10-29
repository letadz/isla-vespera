<template>
  <div class="space-y-8">
    <!-- Category Tabs -->
    <GalleryFilter
      v-model="activeCategory"
      :categories="categories"
    />

    <!-- Photos Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in filteredItems"
        :key="item.id"
        class="group relative aspect-4/3 rounded-2xl overflow-hidden bg-surface-muted border border-border shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer animate__animated animate__fadeIn"
        @click="openLightbox(index)"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white"
        />

        <div
          class="absolute bottom-0 inset-x-0 p-5 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between"
        >
          <div>
            <span
              class="text-[10px] uppercase tracking-wider text-secondary-light font-semibold block mb-0.5"
            >
              {{ item.category }}
            </span>
            <h4
              class="text-sm font-heading font-semibold text-white drop-shadow-xs"
            >
              {{ item.title }}
            </h4>
          </div>

          <div
            class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0"
          >
            <Icon
              name="Maximize2"
              :size="14"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { GalleryItem } from '~/types';
import { galleryCategories } from '~/data/gallery';
import { useUiStore } from '~/stores/ui';
import GalleryFilter from './GalleryFilter.vue';
import Icon from '~/components/ui/Icon.vue';

const props = defineProps<{
  items: GalleryItem[];
}>();

const uiStore = useUiStore();
const categories = galleryCategories;
const activeCategory = ref('all');

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return props.items;
  }
  return props.items.filter((item) => item.category === activeCategory.value);
});

const openLightbox = (index: number) => {
  const images = filteredItems.value.map((item) => item.src);
  uiStore.openLightbox(images, index);
};
</script>

<template>
  <section class="py-20 sm:py-28 bg-surface-muted/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Visual Journal"
        title="Scenes of Stillness & Wonder"
        subtitle="Explore our sun-dappled pavilions, pristine shorelines, tranquil plunge pools, and intimate twilight dining tables."
        with-flourish
      />

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          v-for="(item, idx) in previewItems"
          :key="item.id"
          class="relative aspect-square rounded-2xl overflow-hidden bg-surface-muted group cursor-pointer border border-border/80 shadow-xs"
          :class="{ 'md:col-span-2 md:row-span-2': idx === 0 }"
          @click="openGallery"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-white text-center"
          >
            <span
              class="text-xs font-heading font-medium tracking-wide drop-shadow-xs"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <BaseButton
          to="/gallery"
          variant="outline"
          size="md"
        >
          Explore All Resort Photography
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useHotel } from '~/composables/useHotel';
import SectionHeading from '~/components/common/SectionHeading.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const router = useRouter();
const { gallery } = useHotel();

const previewItems = computed(() => {
  return gallery.slice(0, 6);
});

const openGallery = () => {
  router.push('/gallery');
};
</script>

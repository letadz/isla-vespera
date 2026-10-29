<template>
  <section class="py-20 sm:py-28 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Resort Amenities"
        title="Curated Pleasures & Holistic Comfort"
        subtitle="From sunrise oceanfront breakfast to twilight spa rituals, every amenity at Isla Vespera Resort is thoughtfully designed to enrich your island stay."
        with-flourish
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="amenity in amenities"
          :key="amenity.id"
          class="p-6 rounded-2xl bg-surface border border-border/80 shadow-xs hover:border-secondary hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div
              class="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
            >
              <Icon
                :name="amenity.icon"
                :size="24"
              />
            </div>

            <div class="flex items-center justify-between gap-2 mb-2">
              <h3
                class="text-base font-heading font-semibold text-font-text group-hover:text-secondary transition-colors"
              >
                {{ amenity.name }}
              </h3>
              <Badge
                v-if="amenity.isPopular"
                variant="gold"
                size="sm"
              >
                Featured
              </Badge>
            </div>

            <p class="text-xs text-font-muted leading-relaxed">
              {{ amenity.description }}
            </p>
          </div>

          <div
            class="mt-4 pt-3 border-t border-border/60 flex items-center text-[11px] text-secondary font-medium uppercase tracking-wider"
          >
            <span>Complimentary Privilege</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import SectionHeading from '~/components/common/SectionHeading.vue';
import Badge from '~/components/ui/Badge.vue';
import Icon from '~/components/ui/Icon.vue';

const { amenities } = useHotel();
</script>

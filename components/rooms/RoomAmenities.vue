<template>
  <div class="space-y-4">
    <h3 class="text-lg font-heading font-semibold text-font-text">
      Included Room Amenities
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <div
        v-for="amenity in amenities"
        :key="amenity.id"
        class="p-3.5 rounded-xl border border-border bg-surface flex items-start gap-3 transition-colors hover:border-secondary/40"
      >
        <div
          class="w-9 h-9 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0"
        >
          <Icon
            :name="amenity.icon"
            :size="18"
          />
        </div>
        <div>
          <h4
            class="text-sm font-semibold text-font-text flex items-center gap-2"
          >
            <span>{{ amenity.name }}</span>
            <span
              v-if="amenity.isPopular"
              class="text-[10px] text-secondary font-medium uppercase tracking-wider"
            >
              Popular
            </span>
          </h4>
          <p
            v-if="amenity.description"
            class="text-xs text-font-muted mt-0.5 leading-relaxed"
          >
            {{ amenity.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Amenity } from '~/types';
import Icon from '~/components/ui/Icon.vue';

defineProps<{
  amenities: Amenity[];
}>();
</script>

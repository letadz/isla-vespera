<template>
  <div class="text-center py-16 px-4 max-w-md mx-auto">
    <div
      class="w-14 h-14 mx-auto mb-4 rounded-full bg-surface-muted border border-border flex items-center justify-center text-secondary"
    >
      <Icon
        :name="icon"
        :size="28"
      />
    </div>

    <h3 class="text-xl font-heading font-semibold text-font-text mb-2">
      {{ title }}
    </h3>

    <p class="text-sm text-font-muted mb-6 leading-relaxed">
      {{ description }}
    </p>

    <div
      v-if="$slots.action"
      class="flex justify-center gap-3"
    >
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

withDefaults(
  defineProps<{
    icon?: string;
    title: string;
    description: string;
  }>(),
  {
    icon: 'Search',
  },
);
</script>

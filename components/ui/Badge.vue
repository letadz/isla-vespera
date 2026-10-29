<template>
  <span
    class="inline-flex items-center gap-1.5 font-medium transition-colors"
    :class="[badgeClasses, sizeClasses]"
  >
    <slot name="icon" />
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?:
      | 'primary'
      | 'secondary'
      | 'outline'
      | 'gold'
      | 'surface'
      | 'neutral';
    size?: 'sm' | 'md' | 'lg';
  }>(),
  {
    variant: 'secondary',
    size: 'md',
  },
);

const badgeClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-white border border-primary/20';
    case 'secondary':
      return 'bg-secondary/15 text-secondary border border-secondary/30 font-semibold';
    case 'gold':
      return 'bg-secondary text-primary-dark font-semibold';
    case 'outline':
      return 'bg-transparent text-font-text border border-border';
    case 'surface':
      return 'bg-surface text-font-text border border-border shadow-xs';
    case 'neutral':
    default:
      return 'bg-surface-muted text-font-muted border border-border/60';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs px-2 py-0.5 rounded-full';
    case 'lg':
      return 'text-sm px-3.5 py-1.5 rounded-full';
    case 'md':
    default:
      return 'text-xs px-2.5 py-1 rounded-full';
  }
});
</script>

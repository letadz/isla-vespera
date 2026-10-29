<template>
  <component
    :is="resolvedIcon"
    v-if="resolvedIcon"
    :size="size"
    :stroke-width="strokeWidth"
    :class="customClass"
    aria-hidden="true"
  />
  <span
    v-else
    :class="customClass"
    aria-hidden="true"
  >
    ★
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import * as LucideIcons from '@lucide/vue';

const props = withDefaults(
  defineProps<{
    name: string;
    size?: number | string;
    strokeWidth?: number | string;
    customClass?: string;
  }>(),
  {
    size: 20,
    strokeWidth: 2,
    customClass: '',
  },
);

const resolvedIcon = computed(() => {
  if (!props.name) return null;

  // Direct match or sanitized match
  const direct = (LucideIcons as any)[props.name];
  if (direct) return direct;

  // Try kebab to PascalCase e.g. "arrow-right" -> "ArrowRight"
  const pascal = props.name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');

  return (LucideIcons as any)[pascal] || LucideIcons.Sparkles;
});
</script>

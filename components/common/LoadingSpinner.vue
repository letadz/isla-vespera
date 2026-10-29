<template>
  <div
    class="inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    :class="sizeClass"
    role="status"
    aria-label="Loading"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg';
  }>(),
  {
    size: 'md',
  },
);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-4 w-4 border-2';
    case 'lg':
      return 'h-8 w-8 border-3';
    case 'md':
    default:
      return 'h-5 w-5 border-2';
  }
});
</script>

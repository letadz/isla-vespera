<template>
  <div
    class="inline-flex items-center gap-1.5"
    :aria-label="`Rating: ${rating} out of ${max}`"
  >
    <div class="flex items-center text-amber-500">
      <template
        v-for="star in max"
        :key="star"
      >
        <svg
          v-if="rating >= star"
          class="shrink-0 fill-current"
          :class="sizeClass"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        <svg
          v-else-if="rating > star - 1"
          class="shrink-0 fill-current"
          :class="sizeClass"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient :id="`half-star-${star}`">
              <stop
                offset="50%"
                stop-color="currentColor"
              />
              <stop
                offset="50%"
                stop-color="rgba(150, 150, 150, 0.25)"
              />
            </linearGradient>
          </defs>
          <path
            :fill="`url(#half-star-${star})`"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        <svg
          v-else
          class="shrink-0 fill-neutral-300 dark:fill-neutral-700"
          :class="sizeClass"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      </template>
    </div>

    <span
      v-if="showScore"
      class="text-xs font-semibold text-font-text"
    >
      {{ rating.toFixed(1) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    rating: number;
    max?: number;
    showScore?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }>(),
  {
    max: 5,
    showScore: false,
    size: 'sm',
  },
);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'md':
      return 'w-4 h-4';
    case 'lg':
      return 'w-5 h-5';
    case 'sm':
    default:
      return 'w-3.5 h-3.5';
  }
});
</script>

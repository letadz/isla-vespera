<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :target="target"
    :class="[buttonClasses, sizeClasses, block ? 'w-full' : 'inline-flex']"
    @click="$emit('click', $event)"
  >
    <LoadingSpinner
      v-if="loading"
      size="sm"
      class="mr-2"
    />
    <slot name="icon-left" />
    <span :class="{ 'opacity-0': loading }"><slot /></span>
    <slot name="icon-right" />
  </NuxtLink>

  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :class="[buttonClasses, sizeClasses, block ? 'w-full' : 'inline-flex']"
    @click="$emit('click', $event)"
  >
    <LoadingSpinner
      v-if="loading"
      size="sm"
      class="mr-2"
    />
    <slot name="icon-left" />
    <span :class="{ 'opacity-0': loading }"><slot /></span>
    <slot name="icon-right" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    to?: string | object;
    target?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
  }>(),
  {
    type: 'button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
  },
);

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const buttonClasses = computed(() => {
  const base =
    'flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  switch (props.variant) {
    case 'primary':
      return `${base} bg-primary text-white hover:bg-primary-dark shadow-sm`;
    case 'secondary':
      return `${base} bg-secondary text-primary-dark hover:brightness-105 shadow-sm font-semibold`;
    case 'gold':
      return `${base} bg-gradient-to-r from-secondary to-secondary-light text-primary-dark font-semibold shadow-md hover:shadow-lg`;
    case 'outline':
      return `${base} bg-transparent border border-border text-font-text hover:border-secondary hover:text-secondary`;
    case 'ghost':
      return `${base} bg-transparent text-font-text hover:bg-surface-muted/60`;
    case 'danger':
      return `${base} bg-rose-600 text-white hover:bg-rose-700 shadow-sm`;
    default:
      return `${base} bg-primary text-white`;
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs px-3.5 py-1.5 rounded-button gap-1.5';
    case 'lg':
      return 'text-base px-6 py-3 rounded-button gap-2.5 font-semibold';
    case 'xl':
      return 'text-lg px-8 py-3.5 rounded-button gap-3 font-semibold';
    case 'md':
    default:
      return 'text-sm px-5 py-2.5 rounded-button gap-2';
  }
});
</script>

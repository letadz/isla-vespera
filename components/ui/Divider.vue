<template>
  <div
    class="relative flex items-center justify-center my-6"
    :class="customClass"
    role="separator"
  >
    <div class="grow border-t border-border" />
    <span
      v-if="withDot"
      class="shrink-0 mx-4 w-1.5 h-1.5 rounded-full bg-secondary"
    />
    <span
      v-else-if="label"
      class="shrink-0 px-3 text-xs uppercase tracking-widest text-font-muted bg-background"
    >
      {{ label }}
    </span>
    <div class="grow border-t border-border" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
    withDot?: boolean;
    customClass?: string;
  }>(),
  {
    withDot: true,
    customClass: '',
  },
);
</script>

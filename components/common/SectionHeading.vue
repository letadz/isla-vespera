<template>
  <div
    class="mb-10 md:mb-14"
    :class="[
      align === 'center'
        ? 'text-center mx-auto max-w-3xl'
        : align === 'right'
          ? 'text-right ml-auto max-w-3xl'
          : 'text-left max-w-3xl',
      customClass,
    ]"
  >
    <div
      v-if="eyebrow"
      class="inline-flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-widest text-secondary"
      :class="{
        'justify-center': align === 'center',
        'justify-end': align === 'right',
      }"
    >
      <span class="w-6 h-px bg-secondary/60" />
      <span>{{ eyebrow }}</span>
      <span
        v-if="align === 'center'"
        class="w-6 h-px bg-secondary/60"
      />
    </div>

    <h2
      class="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-font-text leading-tight"
    >
      <slot name="title">{{ title }}</slot>
    </h2>

    <p
      v-if="subtitle || $slots.subtitle"
      class="mt-3.5 text-base sm:text-lg text-font-muted leading-relaxed font-normal"
    >
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>

    <div
      v-if="withFlourish"
      class="flex items-center gap-2 mt-5"
      :class="{
        'justify-center': align === 'center',
        'justify-end': align === 'right',
      }"
    >
      <span class="w-12 h-px bg-border" />
      <span class="w-1.5 h-1.5 rounded-full bg-secondary" />
      <span class="w-12 h-px bg-border" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    withFlourish?: boolean;
    customClass?: string;
  }>(),
  {
    align: 'center',
    withFlourish: false,
    customClass: '',
  },
);
</script>

<template>
  <div class="flex items-center justify-center flex-wrap gap-2 py-4">
    <button
      v-for="cat in categories"
      :key="cat.id"
      type="button"
      class="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
      :class="
        modelValue === cat.id
          ? 'bg-secondary text-primary-dark font-bold shadow-sm'
          : 'bg-surface border border-border text-font-muted hover:border-font-muted hover:text-font-text'
      "
      @click="$emit('update:modelValue', cat.id)"
    >
      {{ cat.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
export interface GalleryCategory {
  id: string;
  label: string;
}

defineProps<{
  categories: GalleryCategory[];
  modelValue: string;
}>();

defineEmits<{
  (e: 'update:modelValue', id: string): void;
}>();
</script>

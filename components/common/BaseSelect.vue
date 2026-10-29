<template>
  <div class="w-full text-left">
    <div
      v-if="label"
      class="flex items-center justify-between mb-1.5"
    >
      <label
        :for="id"
        class="text-xs font-medium uppercase tracking-wider text-font-muted"
      >
        {{ label }}
        <span
          v-if="required"
          class="text-secondary font-bold"
        >
          *
        </span>
      </label>
    </div>

    <div class="relative flex items-center">
      <div
        v-if="$slots.prefix"
        class="absolute left-3.5 text-font-muted flex items-center pointer-events-none"
      >
        <slot name="prefix" />
      </div>

      <select
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        :aria-invalid="!!error"
        class="w-full bg-surface border rounded-button py-2.5 px-3.5 pr-10 text-sm text-font-text transition-colors appearance-none focus:bg-surface focus:border-secondary focus:outline-hidden disabled:opacity-50 disabled:bg-surface-muted cursor-pointer"
        :class="[
          $slots.prefix ? 'pl-10' : '',
          error ? 'border-rose-500 focus:border-rose-500' : 'border-border',
        ]"
        @change="
          $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
        "
      >
        <option
          v-if="placeholder"
          value=""
          disabled
          :selected="!modelValue"
        >
          {{ placeholder }}
        </option>
        <option
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>

      <div
        class="absolute right-3 text-font-muted pointer-events-none flex items-center"
      >
        <Icon
          name="ChevronDown"
          :size="16"
        />
      </div>
    </div>

    <p
      v-if="error"
      class="mt-1 text-xs text-rose-600 font-medium"
    >
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

export interface SelectOption {
  label: string;
  value: string | number;
}

withDefaults(
  defineProps<{
    id?: string;
    modelValue: string | number;
    options: SelectOption[];
    label?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
  }>(),
  {
    id: () => `select-${Math.random().toString(36).substring(2, 9)}`,
    placeholder: '',
    error: '',
    disabled: false,
    required: false,
  },
);

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

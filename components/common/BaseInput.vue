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
      <slot name="label-right" />
    </div>

    <div class="relative flex items-center">
      <div
        v-if="$slots.prefix"
        class="absolute left-3.5 text-font-muted flex items-center pointer-events-none"
      >
        <slot name="prefix" />
      </div>

      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :min="min"
        :max="max"
        :aria-invalid="!!error"
        :aria-describedby="
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        "
        class="w-full bg-surface border rounded-button py-2.5 px-3.5 text-sm text-font-text transition-colors placeholder:text-font-muted/60 focus:bg-surface focus:border-secondary focus:outline-hidden disabled:opacity-50 disabled:bg-surface-muted"
        :class="[
          $slots.prefix ? 'pl-10' : '',
          $slots.suffix ? 'pr-10' : '',
          error ? 'border-rose-500 focus:border-rose-500' : 'border-border',
        ]"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
      />

      <div
        v-if="$slots.suffix"
        class="absolute right-3.5 text-font-muted flex items-center"
      >
        <slot name="suffix" />
      </div>
    </div>

    <p
      v-if="error"
      :id="`${id}-error`"
      class="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1"
    >
      <span>✕</span>
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="`${id}-hint`"
      class="mt-1 text-xs text-font-muted"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id?: string;
    modelValue: string | number;
    label?: string;
    type?: string;
    placeholder?: string;
    error?: string;
    hint?: string;
    disabled?: boolean;
    required?: boolean;
    min?: string | number;
    max?: string | number;
  }>(),
  {
    id: () => `input-${Math.random().toString(36).substring(2, 9)}`,
    type: 'text',
    placeholder: '',
    error: '',
    hint: '',
    disabled: false,
    required: false,
  },
);

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'focus', event: FocusEvent): void;
}>();
</script>

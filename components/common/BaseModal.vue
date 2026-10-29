<template>
  <dialog
    ref="dialogRef"
    :aria-labelledby="titleId"
    class="backdrop:bg-black/60 backdrop:backdrop-blur-xs bg-surface border border-border rounded-xl text-font-text p-0 shadow-2xl max-w-lg w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto m-auto fixed inset-0 z-50 animate__animated animate__fadeIn animate__faster"
    @cancel="handleCancel"
    @click="handleBackdropClick"
  >
    <div class="p-6">
      <div
        class="flex items-center justify-between pb-4 border-b border-border mb-5"
      >
        <h3
          :id="titleId"
          class="text-xl font-heading font-semibold text-font-text"
        >
          <slot name="title">{{ title }}</slot>
        </h3>
        <button
          type="button"
          class="text-font-muted hover:text-font-text p-1.5 rounded-full hover:bg-surface-muted transition-colors cursor-pointer"
          aria-label="Close modal"
          @click="close"
        >
          <Icon
            name="X"
            :size="20"
          />
        </button>
      </div>

      <div class="text-sm text-font-text">
        <slot />
      </div>

      <div
        v-if="$slots.footer"
        class="mt-6 pt-4 border-t border-border flex items-center justify-end gap-3"
      >
        <slot
          name="footer"
          :close="close"
        />
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import Icon from '~/components/ui/Icon.vue';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    title?: string;
  }>(),
  {
    title: '',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'close'): void;
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);
const titleId = `modal-title-${Math.random().toString(36).substring(2, 9)}`;

const open = () => {
  if (dialogRef.value && !dialogRef.value.open) {
    dialogRef.value.showModal();
  }
};

const close = () => {
  if (dialogRef.value && dialogRef.value.open) {
    dialogRef.value.close();
  }
  emit('update:modelValue', false);
  emit('close');
};

const handleCancel = (e: Event) => {
  e.preventDefault();
  close();
};

// Light dismiss when clicking outside dialog contents
const handleBackdropClick = (e: MouseEvent) => {
  if (!dialogRef.value) return;
  const rect = dialogRef.value.getBoundingClientRect();
  const isInDialog =
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width;
  if (!isInDialog) {
    close();
  }
};

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      open();
    } else {
      close();
    }
  },
);

onMounted(() => {
  if (props.modelValue) {
    open();
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
        aria-hidden="true"
        @click="close"
      />
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in transform"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        ref="drawerRef"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        class="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface border-l border-border shadow-2xl flex flex-col justify-between overflow-y-auto"
        tabindex="-1"
        @keydown.esc="close"
      >
        <!-- Top bar -->
        <div
          class="p-6 border-b border-border flex items-center justify-between"
        >
          <NuxtLink
            to="/"
            class="flex items-center gap-2.5"
            @click="close"
          >
            <span
              class="text-xl font-heading font-bold text-font-text tracking-wider uppercase"
            >
              {{ hotel.shortName || hotel.name }}
            </span>
          </NuxtLink>

          <button
            type="button"
            class="p-2 rounded-full text-font-muted hover:text-font-text hover:bg-surface-muted transition-colors cursor-pointer"
            aria-label="Close navigation menu"
            @click="close"
          >
            <Icon
              name="X"
              :size="22"
            />
          </button>
        </div>

        <!-- Navigation links -->
        <nav class="p-6 flex-1 flex flex-col gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="py-3 px-4 rounded-button text-base font-medium transition-colors flex items-center justify-between text-font-text hover:text-secondary hover:bg-surface-muted/60"
            active-class="text-secondary bg-secondary/10 font-semibold"
            @click="close"
          >
            <span>{{ link.label }}</span>
            <Icon
              name="ChevronRight"
              :size="16"
              class="opacity-50"
            />
          </NuxtLink>
        </nav>

        <!-- Bottom action -->
        <div class="p-6 border-t border-border bg-surface-muted/30">
          <BaseButton
            to="/booking"
            variant="gold"
            size="lg"
            block
            @click="close"
          >
            Book Now
          </BaseButton>

          <div
            class="mt-4 flex items-center justify-center gap-4 text-font-muted text-xs"
          >
            <a
              :href="`tel:${hotel.contact.phone}`"
              class="hover:text-secondary transition-colors flex items-center gap-1.5"
            >
              <Icon
                name="Phone"
                :size="14"
              />
              <span>{{ hotel.contact.phoneDisplay }}</span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { headerNavLinks } from '~/config/navigation';
import { useHotel } from '~/composables/useHotel';
import Icon from '~/components/ui/Icon.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const { hotel } = useHotel();
const navLinks = headerNavLinks;
const drawerRef = ref<HTMLElement | null>(null);

const close = () => {
  emit('close');
};

// Trap focus and handle escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    close();
  }
};

watch(
  () => props.isOpen,
  async (open) => {
    if (import.meta.client) {
      if (open) {
        document.body.style.overflow = 'hidden';
        await nextTick();
        drawerRef.value?.focus();
      } else {
        document.body.style.overflow = '';
      }
    }
  },
);

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeyDown);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-xs py-3.5'
        : 'bg-transparent border-b border-white/10 py-5',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
    >
      <!-- Brand Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-3 group focus-visible:outline-hidden"
        aria-label="Isla Vespera Resortort Homepage"
      >
        <div
          class="w-10 h-10 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary transition-transform group-hover:scale-105"
        >
          <Icon
            name="Waves"
            :size="22"
          />
        </div>
        <div class="flex flex-col">
          <span
            class="text-xl sm:text-2xl font-heading font-bold tracking-wider uppercase text-font-text leading-tight"
          >
            {{ hotel.name }}
          </span>
          <span
            class="text-[10px] tracking-[0.2em] uppercase text-secondary font-semibold"
          >
            Boracay Island
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav
        class="hidden lg:flex items-center gap-8"
        aria-label="Main Navigation"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm font-medium text-font-text/90 hover:text-secondary transition-colors relative py-1"
          active-class="text-secondary font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Right Actions: Book Now CTA -->
      <div class="hidden lg:flex items-center gap-4">
        <BaseButton
          to="/booking"
          variant="gold"
          size="md"
        >
          Book Now
        </BaseButton>
      </div>

      <!-- Mobile Hamburger Button -->
      <div class="flex items-center gap-2 lg:hidden">
        <!-- <BaseButton
          to="/booking"
          variant="gold"
          size="sm"
        >
          Book
        </BaseButton> -->

        <button
          type="button"
          class="p-2 rounded-button text-font-text hover:bg-surface-muted border border-border transition-colors cursor-pointer"
          aria-label="Open navigation menu"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMobileMenu(true)"
        >
          <Icon
            name="Menu"
            :size="22"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Slideover Navigation -->
    <MobileMenu
      :is-open="mobileMenuOpen"
      @close="toggleMobileMenu(false)"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { headerNavLinks } from '~/config/navigation';
import { useHotel } from '~/composables/useHotel';
import { useUiStore } from '~/stores/ui';
import Icon from '~/components/ui/Icon.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import MobileMenu from './MobileMenu.vue';

const { hotel } = useHotel();
const uiStore = useUiStore();
const { mobileMenuOpen } = storeToRefs(uiStore);
const { toggleMobileMenu } = uiStore;

const navLinks = headerNavLinks;
const isScrolled = ref(false);

const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 20;
  }
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

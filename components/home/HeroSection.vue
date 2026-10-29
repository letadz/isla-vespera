<template>
  <section
    class="relative min-h-[92vh] sm:min-h-[95vh] flex flex-col justify-between overflow-hidden bg-neutral-950 text-white"
  >
    <!-- Hero Background Image with High Priority LCP -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
        :alt="`${hotel.name} luxury beachfront resort`"
        fetchpriority="high"
        loading="eager"
        class="w-full h-full object-cover object-center scale-105 animate__animated animate__fadeIn animate__slow"
      />
      <!-- Subtle Luxury Dark Gradients -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-background via-black/45 to-black/30"
      />
      <div
        class="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60"
      />
    </div>

    <!-- Center Hero Typography -->
    <div
      class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 text-center my-auto"
    >
      <!-- Tagline Eyebrow -->
      <div
        class="inline-flex items-center gap-3 mb-4 animate__animated animate__fadeInDown"
      >
        <span class="w-8 h-px bg-secondary" />
        <span
          class="text-xs sm:text-sm uppercase tracking-[0.25em] text-secondary font-semibold drop-shadow-sm"
        >
          {{ hotel.tagline }}
        </span>
        <span class="w-8 h-px bg-secondary" />
      </div>

      <!-- Hotel Name Primary H1 -->
      <h1
        class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-normal tracking-tight text-white leading-[1.08] drop-shadow-md animate__animated animate__fadeInUp"
      >
        {{ hotel.name }}
      </h1>

      <!-- Short Description -->
      <p
        class="mt-6 text-base sm:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-xs animate__animated animate__fadeInUp stagger-1"
      >
        {{ hotel.description }}
      </p>

      <!-- Action Buttons -->
      <div
        class="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 animate__animated animate__fadeInUp stagger-2"
      >
        <BaseButton
          to="/booking"
          variant="gold"
          size="lg"
        >
          Book Your Stay
        </BaseButton>

        <BaseButton
          to="/rooms"
          variant="outline"
          size="lg"
          class="text-white border-white/40 hover:border-white hover:text-white bg-black/20 backdrop-blur-xs"
        >
          Explore Rooms & Suites
        </BaseButton>
      </div>
    </div>

    <!-- Floating Booking Bar Docked at Bottom of Hero -->
    <div
      class="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full animate__animated animate__fadeInUp stagger-3"
    >
      <BookingBar />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import BookingBar from '~/components/layout/BookingBar.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const { hotel } = useHotel();
</script>

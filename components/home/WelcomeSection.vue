<template>
  <section class="py-20 sm:py-28 bg-background overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <!-- Left: Image Composition (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div
            class="relative z-10 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80"
              alt="Isla Vespera Resort infinity pool and oceanfront cabanas"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Floating Accent Experience Card -->
          <div
            class="absolute -bottom-6 -right-4 sm:-right-8 z-20 bg-surface/95 backdrop-blur-md p-5 rounded-2xl border border-border shadow-xl max-w-xs"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0"
              >
                <Icon
                  name="Waves"
                  :size="24"
                />
              </div>
              <div>
                <span class="text-xl font-heading font-bold text-font-text">
                  Station 1
                </span>
                <p class="text-xs text-font-muted">
                  The island’s widest powdery beach stretch
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Story & Narrative (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div
            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary"
          >
            <span class="w-6 h-px bg-secondary" />
            <span>The Resort Philosophy</span>
          </div>

          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-font-text leading-tight"
          >
            Where Turquoise Waters Meet Island Serenity
          </h2>

          <p class="text-base sm:text-lg text-font-muted leading-relaxed">
            Welcome to
            <strong class="text-font-text">{{ hotel.name }}</strong>
            , an intimate beachfront haven nestled along the tranquil northern
            shores of world-renowned Station 1.
          </p>

          <p class="text-sm sm:text-base text-font-muted leading-relaxed">
            Designed for travelers who prize privacy and natural elegance, our
            architecture harmonizes contemporary tropical lines with native
            Filipino craftsmanship, sun-drenched verandas, and calming water
            features that echo the rhythmic tides of the Sibuyan Sea.
          </p>

          <!-- 4 Pillars Grid -->
          <div
            class="pt-4 grid grid-cols-2 gap-4 sm:gap-6 border-t border-border"
          >
            <div class="space-y-1">
              <span class="text-2xl font-heading font-bold text-secondary">
                100%
              </span>
              <p
                class="text-xs text-font-text font-semibold uppercase tracking-wider"
              >
                Beachfront Access
              </p>
              <p class="text-xs text-font-muted">
                Direct barefoot access onto white powdered sands.
              </p>
            </div>

            <div class="space-y-1">
              <span class="text-2xl font-heading font-bold text-secondary">
                24/7
              </span>
              <p
                class="text-xs text-font-text font-semibold uppercase tracking-wider"
              >
                Island Concierge
              </p>
              <p class="text-xs text-font-muted">
                Personalized itinerary and dining bookings.
              </p>
            </div>

            <div class="space-y-1">
              <span class="text-2xl font-heading font-bold text-secondary">
                10 Min
              </span>
              <p
                class="text-xs text-font-text font-semibold uppercase tracking-wider"
              >
                Private Speedboat
              </p>
              <p class="text-xs text-font-muted">
                VIP transfers directly from Caticlan.
              </p>
            </div>

            <div class="space-y-1">
              <span class="text-2xl font-heading font-bold text-secondary">
                4.9 ★
              </span>
              <p
                class="text-xs text-font-text font-semibold uppercase tracking-wider"
              >
                Guest Rating
              </p>
              <p class="text-xs text-font-muted">
                Based on verified traveler reviews.
              </p>
            </div>
          </div>

          <div class="pt-2">
            <BaseButton
              to="/about"
              variant="outline"
              size="md"
            >
              Read Our Story & Heritage
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const { hotel } = useHotel();
</script>

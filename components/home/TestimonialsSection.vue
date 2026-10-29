<template>
  <section
    id="testimonials"
    class="py-20 sm:py-28 bg-surface-muted/30"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center mb-12 text-center">
        <SectionHeading
          eyebrow="Guest Testimonials"
          title="Reflections of Unforgettable Stays"
          subtitle="Discover what discerning travelers from around the world cherish most about their days at Isla Vespera Resort."
        />

        <!-- Aggregate Rating Pill -->
        <div
          class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface border border-border shadow-xs -mt-4"
        >
          <StarRating
            :rating="5"
            :max="5"
            size="md"
          />
          <span class="text-sm font-heading font-bold text-font-text">
            4.9 / 5.0
          </span>
          <span class="text-xs text-font-muted">
            • Over 350 verified reviews
          </span>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <div
          v-for="review in reviews"
          :key="review.id"
          class="p-6 sm:p-7 rounded-2xl bg-surface border border-border shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-secondary/40"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <StarRating
                :rating="review.rating"
                :max="5"
                size="sm"
              />
              <span
                class="text-[10px] uppercase tracking-wider text-font-muted"
              >
                {{ review.stayedRoom }}
              </span>
            </div>

            <p class="text-xs sm:text-sm text-font-text leading-relaxed italic">
              "{{ review.comment }}"
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-border flex items-center gap-3">
            <img
              :src="review.avatar"
              :alt="review.name"
              loading="lazy"
              class="w-10 h-10 rounded-full object-cover border border-secondary/30"
            />
            <div>
              <h4 class="text-xs font-semibold text-font-text">
                {{ review.name }}
              </h4>
              <p class="text-[11px] text-font-muted">
                {{ review.country }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import SectionHeading from '~/components/common/SectionHeading.vue';
import StarRating from '~/components/common/StarRating.vue';

const { reviews } = useHotel();
</script>

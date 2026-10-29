<template>
  <section class="py-20 sm:py-28 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Special Offers"
        title="Curated Packages & Seasonal Privileges"
        subtitle="Reserve an elevated experience with bespoke benefits, extended stay savings, and complimentary island transfers."
        with-flourish
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="offer in offers"
          :key="offer.id"
          class="bg-surface border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Banner / Header -->
            <div class="relative aspect-16/9 bg-surface-muted overflow-hidden">
              <img
                :src="offer.image"
                :alt="offer.title"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              />

              <div class="absolute top-3 left-3">
                <Badge
                  variant="gold"
                  size="sm"
                >
                  {{ offer.discountPercentage }}% OFF
                </Badge>
              </div>

              <div class="absolute bottom-3 left-3 right-3 text-white">
                <span
                  class="text-[11px] uppercase tracking-wider text-secondary-light font-medium block"
                >
                  Promo Code: {{ offer.promoCode }}
                </span>
                <h3
                  class="text-lg font-heading font-bold text-white drop-shadow-xs"
                >
                  {{ offer.title }}
                </h3>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 space-y-4">
              <p class="text-xs sm:text-sm text-font-muted leading-relaxed">
                {{ offer.description }}
              </p>

              <!-- Inclusions -->
              <div class="pt-3 border-t border-border space-y-2">
                <span
                  class="text-[11px] uppercase tracking-wider text-font-text font-semibold block"
                >
                  Package Inclusions:
                </span>
                <ul class="space-y-1.5 text-xs text-font-muted">
                  <li
                    v-for="(inc, idx) in offer.inclusions"
                    :key="idx"
                    class="flex items-start gap-2"
                  >
                    <Icon
                      name="Check"
                      :size="14"
                      class="text-secondary shrink-0 mt-0.5"
                    />
                    <span>{{ inc }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="p-6 pt-0">
            <BaseButton
              variant="gold"
              size="md"
              block
              @click="claimOffer(offer.promoCode)"
            >
              {{ offer.ctaText }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useHotel } from '~/composables/useHotel';
import { useBooking } from '~/composables/useBooking';
import { useUiStore } from '~/stores/ui';
import SectionHeading from '~/components/common/SectionHeading.vue';
import Badge from '~/components/ui/Badge.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const router = useRouter();
const uiStore = useUiStore();
const { offers } = useHotel();
const { setPromoCode } = useBooking();

const claimOffer = (code?: string) => {
  if (code) {
    setPromoCode(code);
    uiStore.showToast({
      title: 'Offer Activated',
      message: `Promo code ${code} applied to your reservation.`,
      type: 'success',
    });
  }
  router.push('/booking');
};
</script>

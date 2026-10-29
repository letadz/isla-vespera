<template>
  <div class="py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-widest text-secondary"
        >
          <span class="w-6 h-px bg-secondary" />
          <span>Exclusive Packages</span>
          <span class="w-6 h-px bg-secondary" />
        </div>
        <h1 class="text-3xl sm:text-5xl font-heading font-bold text-font-text">
          Special Offers & Island Packages
        </h1>
        <p class="mt-3 text-sm sm:text-base text-font-muted leading-relaxed">
          Make the most of your Boracay escape with handcrafted packages
          designed to add meaningful value to every stay.
        </p>
      </div>

      <!-- Offers Full Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article
          v-for="offer in offers"
          :key="offer.id"
          class="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
        >
          <!-- Offer Banner -->
          <div class="relative aspect-16/9 overflow-hidden bg-surface-muted">
            <img
              :src="offer.image"
              :alt="offer.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />
            <div class="absolute top-3 left-3 flex flex-wrap gap-2">
              <Badge
                variant="gold"
                size="sm"
              >
                {{ offer.discountPercentage }}% OFF
              </Badge>
              <Badge
                v-if="offer.minimumNights > 1"
                variant="surface"
                size="sm"
              >
                Min {{ offer.minimumNights }} nights
              </Badge>
            </div>
            <div class="absolute bottom-3 left-4 right-4">
              <p
                class="text-[11px] uppercase tracking-wider text-secondary-light font-semibold"
              >
                Code: {{ offer.promoCode }}
              </p>
              <h2
                class="text-xl font-heading font-bold text-white drop-shadow-sm"
              >
                {{ offer.title }}
              </h2>
              <p class="text-xs text-white/80 font-medium">
                {{ offer.subtitle }}
              </p>
            </div>
          </div>

          <!-- Content Body -->
          <div
            class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4"
          >
            <div class="space-y-3">
              <p class="text-sm text-font-muted leading-relaxed">
                {{ offer.description }}
              </p>

              <div class="pt-3 border-t border-border">
                <p
                  class="text-xs font-semibold uppercase tracking-wider text-font-text mb-2.5"
                >
                  What's Included:
                </p>
                <ul class="space-y-1.5 text-xs text-font-muted">
                  <li
                    v-for="(inc, i) in offer.inclusions"
                    :key="i"
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

              <div
                class="pt-3 border-t border-border flex items-center justify-between text-xs text-font-muted"
              >
                <div class="flex items-center gap-1.5">
                  <Icon
                    name="Calendar"
                    :size="14"
                    class="text-secondary"
                  />
                  <span>Valid until {{ formatDate(offer.validUntil) }}</span>
                </div>
              </div>
            </div>

            <BaseButton
              variant="gold"
              size="md"
              block
              @click="claimOffer(offer.promoCode)"
            >
              {{ offer.ctaText }}
            </BaseButton>
          </div>
        </article>
      </div>

      <!-- Booking Reminder -->
      <div
        class="mt-4 p-6 rounded-2xl bg-surface-muted/50 border border-border text-center text-xs text-font-muted space-y-2"
      >
        <p class="font-semibold text-font-text">How to Redeem Your Offer</p>
        <p>
          Select your room, proceed to booking, and enter your promo code on the
          checkout page. Discounts apply automatically to the final rate.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useHotel } from '~/composables/useHotel';
import { useBooking } from '~/composables/useBooking';
import { useUiStore } from '~/stores/ui';
import Badge from '~/components/ui/Badge.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const router = useRouter();
const uiStore = useUiStore();
const { offers, hotel } = useHotel();
const { setPromoCode } = useBooking();

const formatDate = (dateStr: string) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
};

const claimOffer = (code?: string) => {
  if (code) {
    setPromoCode(code);
    uiStore.showToast({
      title: 'Promo Code Applied',
      message: `${code} will be applied at checkout.`,
      type: 'success',
    });
  }
  router.push('/booking');
};

useHead({
  title: 'Special Offers & Packages',
  meta: [
    {
      name: 'description',
      content: `Exclusive seasonal packages and promotional rates at ${hotel.name}. Weekend escapes, early bird discounts, and extended stay privileges.`,
    },
  ],
});
</script>

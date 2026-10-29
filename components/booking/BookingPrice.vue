<template>
  <div
    class="bg-surface border border-border rounded-2xl p-5 sm:p-6 shadow-sm space-y-4"
  >
    <div class="flex items-center justify-between pb-3 border-b border-border">
      <h3 class="text-base font-heading font-semibold text-font-text">
        Price Breakdown
      </h3>
      <span class="text-xs uppercase tracking-wider text-font-muted">
        {{ breakdown.nights }} {{ breakdown.nights === 1 ? 'Night' : 'Nights' }}
      </span>
    </div>

    <!-- Promo code input -->
    <div
      v-if="allowPromo"
      class="pt-1"
    >
      <div class="flex gap-2">
        <input
          v-model="localPromo"
          type="text"
          placeholder="Promo code (e.g. WEEKEND15)"
          class="flex-1 bg-surface-muted/60 border border-border rounded-button px-3 py-2 text-xs uppercase tracking-wider text-font-text focus:outline-hidden focus:border-secondary"
        />
        <BaseButton
          variant="outline"
          size="sm"
          @click="applyPromo"
        >
          Apply
        </BaseButton>
      </div>
      <p
        v-if="breakdown.appliedPromo"
        class="mt-1 text-xs text-emerald-600 font-medium flex items-center gap-1"
      >
        <Icon
          name="CheckCircle2"
          :size="13"
        />
        {{ breakdown.appliedPromo }}
      </p>
    </div>

    <!-- Calculations lines -->
    <div
      class="space-y-2.5 text-xs text-font-muted pt-2 border-t border-border"
    >
      <div class="flex justify-between">
        <span>Nightly Rate</span>
        <span class="text-font-text font-medium">
          {{
            formatCurrency(
              breakdown.nightlyRate,
              breakdown.currency,
              breakdown.currencySymbol,
            )
          }}
        </span>
      </div>

      <div class="flex justify-between">
        <span>Room Subtotal ({{ breakdown.nights }} nights)</span>
        <span class="text-font-text font-medium">
          {{
            formatCurrency(
              breakdown.subtotal,
              breakdown.currency,
              breakdown.currencySymbol,
            )
          }}
        </span>
      </div>

      <div
        v-if="breakdown.discountAmount > 0"
        class="flex justify-between text-emerald-600 font-semibold"
      >
        <span>Promotional Discount</span>
        <span>
          -{{
            formatCurrency(
              breakdown.discountAmount,
              breakdown.currency,
              breakdown.currencySymbol,
            )
          }}
        </span>
      </div>

      <div class="flex justify-between">
        <span>
          Service Charge ({{ siteConfig.booking.serviceChargePercent }}%)
        </span>
        <span class="text-font-text font-medium">
          {{
            formatCurrency(
              breakdown.serviceCharge,
              breakdown.currency,
              breakdown.currencySymbol,
            )
          }}
        </span>
      </div>

      <div class="flex justify-between">
        <span>Value Added Tax ({{ siteConfig.booking.vatPercent }}%)</span>
        <span class="text-font-text font-medium">
          {{
            formatCurrency(
              breakdown.vatAmount,
              breakdown.currency,
              breakdown.currencySymbol,
            )
          }}
        </span>
      </div>
    </div>

    <!-- Total -->
    <div
      class="pt-4 border-t border-border flex items-baseline justify-between"
    >
      <div>
        <span class="text-sm font-semibold text-font-text block">
          Total Request Amount
        </span>
        <span class="text-[11px] text-font-muted">
          Pay upon arrival at resort
        </span>
      </div>
      <span class="text-2xl font-heading font-bold text-secondary">
        {{
          formatCurrency(
            breakdown.total,
            breakdown.currency,
            breakdown.currencySymbol,
          )
        }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PriceBreakdown } from '~/types';
import { siteConfig } from '~/config/site';
import { formatCurrency } from '~/utils/currency';
import Icon from '~/components/ui/Icon.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const props = withDefaults(
  defineProps<{
    breakdown: PriceBreakdown;
    allowPromo?: boolean;
  }>(),
  {
    allowPromo: true,
  },
);

const emit = defineEmits<{
  (e: 'applyPromo', code: string): void;
}>();

const localPromo = ref('');

const applyPromo = () => {
  emit('applyPromo', localPromo.value);
};
</script>

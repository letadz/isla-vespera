<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <!-- Left Column: Checkout Form Steps (7 cols) -->
    <div class="lg:col-span-7 space-y-6">
      <!-- Step 1: Dates & Room Confirmation -->
      <BookingSearch />

      <!-- Step 2: Guest Details -->
      <GuestForm
        v-model="guestInformation"
        :errors="validationErrors"
      />

      <!-- Multi-Channel Alternative Notice -->
      <div
        class="p-4 rounded-xl border border-border bg-surface-muted/30 text-xs text-font-muted flex items-start gap-3"
      >
        <Icon
          name="Info"
          :size="18"
          class="text-secondary shrink-0 mt-0.5"
        />
        <div class="space-y-1">
          <p class="font-medium text-font-text">
            Prefer to book via Google Forms or WhatsApp?
          </p>
          <p>
            You can also submit your inquiry through our
            <a
              v-if="googleForm.enabled && googleForm.url"
              :href="googleForm.url"
              target="_blank"
              class="text-secondary underline font-medium"
            >
              Google Form
            </a>
            or message reservations on
            <a
              v-if="whatsappLink"
              :href="whatsappLink"
              target="_blank"
              class="text-secondary underline font-medium"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </div>

    <!-- Right Column: Live Summary, Price Calculation & Submission (5 cols) -->
    <div class="lg:col-span-5 space-y-6 sticky top-24">
      <BookingSummary
        :room="selectedRoom"
        :check-in="dates.checkIn"
        :check-out="dates.checkOut"
        :nights="nightsCount"
        :guests="guests"
      />

      <BookingPrice
        :breakdown="pricingSummary"
        @apply-promo="handleApplyPromo"
      />

      <!-- Submit Request Button -->
      <div class="space-y-3">
        <BaseButton
          variant="gold"
          size="xl"
          block
          :loading="isSubmitting"
          @click="handleSubmit"
        >
          Submit Booking Request
        </BaseButton>

        <p class="text-[11px] text-center text-font-muted">
          By clicking submit, you request room availability from Isla Vespera
          Resort. No charges are incurred now.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useBooking } from '~/composables/useBooking';
import { useContact } from '~/composables/useContact';
import { useUiStore } from '~/stores/ui';
import BookingSearch from './BookingSearch.vue';
import GuestForm from './GuestForm.vue';
import BookingSummary from './BookingSummary.vue';
import BookingPrice from './BookingPrice.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const router = useRouter();
const uiStore = useUiStore();
const {
  dates,
  guests,
  selectedRoom,
  guestInformation,
  nightsCount,
  pricingSummary,
  isSubmitting,
  validationErrors,
  setPromoCode,
  submitBookingRequest,
} = useBooking();

const { googleForm, whatsappLink } = useContact();

const handleApplyPromo = (code: string) => {
  setPromoCode(code);
  uiStore.showToast({
    title: 'Promo Applied',
    message: code ? `Applied code: ${code.toUpperCase()}` : 'Promo code reset',
    type: 'info',
  });
};

const handleSubmit = () => {
  try {
    const record = submitBookingRequest();
    uiStore.showToast({
      title: 'Request Sent',
      message: `Your booking request ${record.referenceId} was recorded.`,
      type: 'success',
    });
    router.push('/booking/confirmation');
  } catch (err: any) {
    uiStore.showToast({
      title: 'Action Needed',
      message: err.message || 'Please check your inputs and try again.',
      type: 'error',
    });
  }
};
</script>

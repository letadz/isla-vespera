<template>
  <div>
    <!-- Booking Request Submitted Success -->
    <BookingSuccess
      v-if="submittedBooking"
      :booking="submittedBooking"
    />

    <!-- No Booking Redirect Fallback -->
    <div
      v-else
      class="text-center py-24 space-y-6 max-w-xl mx-auto"
    >
      <div
        class="w-14 h-14 mx-auto rounded-full bg-surface-muted border border-border flex items-center justify-center text-font-muted"
      >
        <Icon
          name="AlertCircle"
          :size="28"
        />
      </div>
      <h1 class="text-2xl font-heading font-bold text-font-text">
        No Active Booking Found
      </h1>
      <p class="text-sm text-font-muted leading-relaxed">
        It looks like you navigated here directly. Please start a fresh booking
        request from our rooms catalog.
      </p>
      <BaseButton
        to="/rooms"
        variant="gold"
        size="md"
      >
        Browse Rooms & Suites
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBookingStore } from '~/stores/booking';
import BookingSuccess from '~/components/booking/BookingSuccess.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

definePageMeta({
  layout: 'booking',
});

const bookingStore = useBookingStore();
const { submittedBooking } = storeToRefs(bookingStore);

useHead({
  title: 'Booking Request Submitted',
  meta: [
    {
      name: 'description',
      content:
        'Your booking request has been submitted to Isla Vespera Resort. Our team will contact you within 24 hours.',
    },
  ],
});
</script>

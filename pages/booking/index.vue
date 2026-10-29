<template>
  <div class="py-4 sm:py-8">
    <div class="max-w-7xl mx-auto space-y-8">
      <!-- Checkout Wizard Header -->
      <div class="text-center max-w-2xl mx-auto">
        <div
          class="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-secondary"
        >
          <span class="w-6 h-px bg-secondary" />
          <span>Direct Reservation Portal</span>
          <span class="w-6 h-px bg-secondary" />
        </div>
        <h1 class="text-2xl sm:text-4xl font-heading font-bold text-font-text">
          Submit Your Booking Request
        </h1>
        <p class="mt-2 text-xs sm:text-sm text-font-muted leading-relaxed">
          No prepayment or credit card required. Our reservations concierge will
          review room availability and contact you within 24 hours.
        </p>
      </div>

      <!-- Main Booking Checkout Wizard -->
      <BookingForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import BookingForm from '~/components/booking/BookingForm.vue';

definePageMeta({
  layout: 'booking',
});

useHead({
  title: 'Reservation Request',
  meta: [
    {
      name: 'description',
      content:
        'Submit a direct booking request for Isla Vespera Resort. Flexible cancellations and no prepayment required.',
    },
  ],
});
</script>

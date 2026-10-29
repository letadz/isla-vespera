<template>
  <div class="py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-widest text-secondary"
        >
          <span class="w-6 h-px bg-secondary" />
          <span>Get In Touch</span>
          <span class="w-6 h-px bg-secondary" />
        </div>
        <h1 class="text-3xl sm:text-5xl font-heading font-bold text-font-text">
          Contact Our Reservations Team
        </h1>
        <p class="mt-3 text-sm sm:text-base text-font-muted leading-relaxed">
          Whether you're planning a romantic escape, a family adventure, or a
          private event, our team is ready to curate your perfect Isla Vespera
          experience.
        </p>
      </div>

      <div class="flex justify-center items-center">
        <!-- Contact Form -->
        <div class="w-full lg:w-7/12">
          <div class="mb-5">
            <h2 class="text-xl font-heading font-semibold text-font-text">
              Send Us a Message
            </h2>
            <p class="text-xs text-font-muted mt-1">
              This form integrates with the hotel's reservations system.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import ContactForm from '~/components/contact/ContactForm.vue';
import LocationMap from '~/components/contact/LocationMap.vue';

const { hotel } = useHotel();

useHead({
  title: 'Contact & Reservations',
  meta: [
    {
      name: 'description',
      content: `Contact ${hotel.name} reservations team for room bookings, event inquiries, and concierge assistance. Call, email, WhatsApp, or message us directly.`,
    },
  ],
});
</script>

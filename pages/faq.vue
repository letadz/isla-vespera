<template>
  <div class="py-12 sm:py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <!-- Page Header -->
      <div class="text-center">
        <div
          class="inline-flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-widest text-secondary"
        >
          <span class="w-6 h-px bg-secondary" />
          <span>Guest Guide</span>
          <span class="w-6 h-px bg-secondary" />
        </div>
        <h1 class="text-3xl sm:text-5xl font-heading font-bold text-font-text">
          Frequently Asked Questions
        </h1>
        <p class="mt-3 text-sm sm:text-base text-font-muted leading-relaxed">
          Everything you need to know about reservations, policies, and planning
          your Boracay getaway.
        </p>
      </div>

      <!-- FAQ Accordion Sections -->
      <div class="space-y-4">
        <div
          v-for="section in faqSections"
          :key="section.title"
          class="bg-surface border border-border rounded-2xl overflow-hidden shadow-xs"
        >
          <div class="px-6 py-4 border-b border-border bg-surface-muted/40">
            <h2
              class="text-sm font-semibold uppercase tracking-wider text-secondary flex items-center gap-2"
            >
              <Icon
                :name="section.icon"
                :size="16"
              />
              {{ section.title }}
            </h2>
          </div>

          <div class="divide-y divide-border">
            <details
              v-for="(item, idx) in section.items"
              :key="idx"
              class="group px-6 py-1"
            >
              <summary
                class="flex items-center justify-between cursor-pointer py-4 text-sm font-medium text-font-text hover:text-secondary transition-colors list-none select-none"
              >
                <span>{{ item.question }}</span>
                <Icon
                  name="ChevronDown"
                  :size="16"
                  class="text-font-muted shrink-0 ml-4 transition-transform group-open:rotate-180"
                />
              </summary>
              <div
                class="pb-4 text-xs sm:text-sm text-font-muted leading-relaxed"
              >
                {{ item.answer }}
              </div>
            </details>
          </div>
        </div>
      </div>

      <!-- Still Have Questions CTA -->
      <div
        class="text-center p-8 rounded-2xl bg-surface border border-border shadow-xs space-y-4"
      >
        <h3 class="text-lg font-heading font-semibold text-font-text">
          Still Have Questions?
        </h3>
        <p class="text-xs text-font-muted">
          Our team is available 24/7. Reach us directly by phone, email, or
          instant message.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <BaseButton
            to="/contact"
            variant="gold"
            size="md"
          >
            Contact Our Team
          </BaseButton>
          <BaseButton
            to="/booking"
            variant="outline"
            size="md"
          >
            Start a Booking Request
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const { hotel } = useHotel();

const faqSections = [
  {
    title: 'Reservations & Booking',
    icon: 'CalendarCheck',
    items: [
      {
        question: 'How do I make a reservation at Isla Vespera Resort?',
        answer:
          'You can submit a booking request directly through our website. Simply select your room, enter your travel dates and guest information, and click "Submit Booking Request". Our concierge will confirm availability and send a voucher within 24 hours. Alternatively, you may message us on WhatsApp, Messenger, or via our Google Form.',
      },
      {
        question: 'Is my reservation instantly confirmed?',
        answer:
          'No. All bookings submitted through the website are requests pending concierge review. We verify room availability and contact you with an official confirmation voucher within 24 hours. This is clearly communicated as a "Booking Request" throughout the reservation process.',
      },
      {
        question: 'Do I need to pay upfront to reserve a room?',
        answer:
          'No prepayment is required to submit a booking request. Full payment is settled upon arrival at Isla Vespera Resort in Philippine Peso (PHP). Specific payment methods accepted will be confirmed in your voucher communication.',
      },
      {
        question: 'Can I book using a promo code?',
        answer:
          'Yes. Promo codes like WEEKEND15, EARLY20, and LONGSTAY25 can be entered during the checkout process. The discount will automatically be calculated and reflected in your price summary before you submit the request.',
      },
    ],
  },
  {
    title: 'Check-In & Check-Out',
    icon: 'Clock',
    items: [
      {
        question: 'What are the standard check-in and check-out times?',
        answer:
          'Standard check-in is at 14:00 (2:00 PM) and check-out is at 12:00 PM noon. Early check-in may be arranged subject to room availability at the time of your arrival. Late check-out can also be requested at the front desk the evening before your departure.',
      },
      {
        question: 'How do I get to Isla Vespera Resort from the airport?',
        answer:
          'We recommend flying into Caticlan Airport (MPH), which is 30 minutes from the resort. Upon arrival, take a short trike ride to Caticlan Jetty Port, then our private speedboat transfer will whisk you to the beachfront in 10 minutes. We offer complimentary speedboat coordination for guests—please inform us of your flight details.',
      },
    ],
  },
  {
    title: 'Cancellations & Modifications',
    icon: 'RefreshCw',
    items: [
      {
        question: 'What is the cancellation policy?',
        answer:
          'We offer flexible cancellation with a 100% refund for cancellations made more than 72 hours before your scheduled check-in. Cancellations within 72 hours of check-in may be subject to a 1-night charge. We also honor full refunds in the event of government-declared travel advisories for tropical storms affecting Boracay Island.',
      },
      {
        question: 'Can I change my travel dates after submitting a request?',
        answer:
          'Yes. Contact our reservations team by phone, email, or WhatsApp and we will do our best to accommodate your preferred new dates without modification fees, subject to availability. Rate variance for seasonal changes may apply.',
      },
    ],
  },
  {
    title: 'Amenities & Services',
    icon: 'Sparkles',
    items: [
      {
        question: 'Is breakfast included with the room?',
        answer:
          'All Isla Vespera Resort rooms include a complimentary daily artisan breakfast buffet for the registered number of adults. Children under 6 dine complimentary. Our breakfast features fresh tropical fruits, local Filipino specialties, pastries, cold cuts, egg stations, and espresso service.',
      },
      {
        question: 'Do you have a swimming pool?',
        answer:
          'Yes. Isla Vespera Resort features a two-tier oceanfront infinity pool with sun loungers and shaded cabanas. Pool access is complimentary for all resort guests from 07:00 AM to 09:00 PM. A pool bar offers tropical cocktails and non-alcoholic refreshments throughout the day.',
      },
      {
        question: 'Is Wi-Fi available throughout the resort?',
        answer:
          'Yes. High-speed fiber-optic Wi-Fi is complimentary throughout the resort including all rooms, outdoor terraces, the restaurant, and the pool area. Streaming-quality bandwidth is standard across all access points.',
      },
    ],
  },
];

useHead({
  title: 'FAQ — Frequently Asked Questions',
  meta: [
    {
      name: 'description',
      content: `Common questions about booking, check-in policies, amenities, and getting to ${hotel.name} in Boracay Island, Philippines.`,
    },
  ],
});
</script>

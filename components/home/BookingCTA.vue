<template>
  <section
    class="py-20 sm:py-28 relative overflow-hidden bg-primary text-white"
  >
    <!-- Background overlay texture -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
        alt="Tropical coastline sunset"
        loading="lazy"
        class="w-full h-full object-cover opacity-25 brightness-50"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/90"
      />
    </div>

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
    >
      <div
        class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary-light"
      >
        <span class="w-6 h-px bg-secondary-light" />
        <span>Direct Reservation Privileges</span>
        <span class="w-6 h-px bg-secondary-light" />
      </div>

      <h2
        class="text-3xl sm:text-5xl md:text-6xl font-heading font-normal text-white leading-tight"
      >
        Your Island Sanctuary Is Ready For You
      </h2>

      <p
        class="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
      >
        Experience the serene shores of Station 1 with direct reservations,
        tailored concierge arrangements, and zero prepayment requirements.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <BaseButton
          to="/booking"
          variant="gold"
          size="lg"
        >
          Request Booking Now
        </BaseButton>

        <a
          v-if="whatsappLink"
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 px-6 rounded-button bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          <Icon
            name="Phone"
            :size="16"
          />
          <span>Message on WhatsApp</span>
        </a>

        <a
          v-if="googleForm.enabled && googleFormLink"
          :href="googleFormLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 text-sm font-medium py-3 px-6 rounded-button border border-white/30 hover:border-white text-white transition-colors bg-white/5 backdrop-blur-xs"
        >
          <span>Book via Google Form</span>
          <Icon
            name="ExternalLink"
            :size="14"
          />
        </a>
      </div>

      <div
        class="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70"
      >
        <span class="flex items-center gap-1.5">
          <Icon
            name="ShieldCheck"
            :size="15"
            class="text-secondary-light"
          />
          Best Rate Guarantee
        </span>
        <span>•</span>
        <span class="flex items-center gap-1.5">
          <Icon
            name="Clock"
            :size="15"
            class="text-secondary-light"
          />
          Free Cancellation Up to 72h
        </span>
        <span>•</span>
        <span class="flex items-center gap-1.5">
          <Icon
            name="Waves"
            :size="15"
            class="text-secondary-light"
          />
          Direct Beachfront Station 1
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContact } from '~/composables/useContact';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const { whatsappLink, googleForm, googleFormLink } = useContact();
</script>

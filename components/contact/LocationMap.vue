<template>
  <div
    class="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm"
  >
    <!-- Map Canvas Placeholder -->
    <div
      class="relative h-64 sm:h-80 bg-neutral-900 flex items-center justify-center overflow-hidden"
    >
      <!-- Background Map Texture -->
      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
        alt="Resort aerial coastline view"
        class="w-full h-full object-cover opacity-40 brightness-75"
      />
      <div class="absolute inset-0 bg-primary/40 backdrop-blur-[1px]" />

      <!-- Center Pin Card -->
      <div
        class="relative z-10 p-5 rounded-2xl bg-surface/95 border border-border shadow-2xl max-w-xs text-center backdrop-blur-md"
      >
        <div
          class="w-10 h-10 mx-auto mb-2 rounded-full bg-secondary/20 border border-secondary text-secondary flex items-center justify-center"
        >
          <Icon
            name="MapPin"
            :size="20"
          />
        </div>
        <h4 class="text-sm font-heading font-bold text-font-text">
          {{ hotel.name }}
        </h4>
        <p class="text-xs text-font-muted mt-1">{{ hotel.contact.address }}</p>
        <div class="mt-3 pt-3 border-t border-border">
          <a
            :href="googleMapsSearchUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:underline"
          >
            <span>Open in Google Maps</span>
            <Icon
              name="ExternalLink"
              :size="12"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Transport Assistance Guide -->
    <div
      class="p-5 sm:p-6 bg-surface grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-font-muted"
    >
      <div class="space-y-1">
        <h5 class="font-semibold text-font-text flex items-center gap-1.5">
          <Icon
            name="Ship"
            :size="15"
            class="text-secondary"
          />
          Arrival by Sea
        </h5>
        <p>
          Private speedboats transfer guests across Caticlan Jetty Port directly
          to Station 1 beachfront in 10 minutes.
        </p>
      </div>

      <div class="space-y-1">
        <h5 class="font-semibold text-font-text flex items-center gap-1.5">
          <Icon
            name="Clock"
            :size="15"
            class="text-secondary"
          />
          Airport Proximity
        </h5>
        <p>
          Caticlan Airport (MPH) is 30 minutes door-to-door. Kalibo
          International Airport (KLO) is approx. 2 hours via private van.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel';
import { useContact } from '~/composables/useContact';
import Icon from '~/components/ui/Icon.vue';

const { hotel } = useHotel();
const { googleMapsSearchUrl } = useContact();
</script>

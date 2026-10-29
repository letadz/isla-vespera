<template>
  <div class="py-12 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      <!-- Hero Intro -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary"
          >
            <span class="w-6 h-px bg-secondary" />
            <span>Our Heritage</span>
          </div>
          <h1
            class="text-3xl sm:text-5xl font-heading font-bold text-font-text leading-tight"
          >
            Born from the Sea, Shaped by the Island
          </h1>
          <p class="text-base text-font-muted leading-relaxed">
            {{ hotel.name }} was born from a singular vision: to create an
            intimate coastal retreat that honors Boracay's natural beauty while
            offering an elevated sanctuary that transcends ordinary resort
            stays.
          </p>
          <p class="text-sm text-font-muted leading-relaxed">
            Perched along the quieter northern stretch of Station 1, we
            carefully designed each pavilion, suite, and outdoor terrace to
            blend with the natural coastal terrain—using locally sourced bamboo,
            reclaimed teakwood, and hand-poured concrete in natural earth tones.
          </p>
          <div class="flex items-center gap-4 pt-2">
            <BaseButton
              to="/rooms"
              variant="primary"
              size="md"
            >
              Explore Our Suites
            </BaseButton>
            <BaseButton
              to="/contact"
              variant="outline"
              size="md"
            >
              Contact Us
            </BaseButton>
          </div>
        </div>

        <div class="relative">
          <div
            class="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
              alt="Isla Vespera Resort beachfront at golden hour"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Floating stats card -->
          <div
            class="absolute -bottom-4 -left-4 sm:-left-8 bg-surface/95 backdrop-blur-md p-5 rounded-2xl border border-border shadow-xl max-w-xs"
          >
            <div class="grid grid-cols-2 gap-4 text-center">
              <div>
                <span class="text-2xl font-heading font-bold text-secondary">
                  5
                </span>
                <p
                  class="text-[10px] uppercase tracking-wider text-font-muted mt-0.5"
                >
                  Room Types
                </p>
              </div>
              <div>
                <span class="text-2xl font-heading font-bold text-secondary">
                  4.9
                </span>
                <p
                  class="text-[10px] uppercase tracking-wider text-font-muted mt-0.5"
                >
                  Guest Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values & Philosophy -->
      <div class="space-y-8">
        <div class="text-center max-w-2xl mx-auto">
          <div
            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary mb-2"
          >
            <span class="w-6 h-px bg-secondary" />
            <span>Our Philosophy</span>
            <span class="w-6 h-px bg-secondary" />
          </div>
          <h2
            class="text-2xl sm:text-4xl font-heading font-bold text-font-text"
          >
            Principles That Guide Every Moment
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            v-for="principle in principles"
            :key="principle.title"
            class="p-7 rounded-2xl bg-surface border border-border shadow-xs text-center space-y-4"
          >
            <div
              class="w-12 h-12 mx-auto rounded-full bg-secondary/15 text-secondary flex items-center justify-center"
            >
              <Icon
                :name="principle.icon"
                :size="22"
              />
            </div>
            <h3 class="text-lg font-heading font-semibold text-font-text">
              {{ principle.title }}
            </h3>
            <p class="text-xs text-font-muted leading-relaxed">
              {{ principle.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Location Story -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          class="relative aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-border order-last lg:order-first"
        >
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80"
            alt="Isla Vespera Resort infinity pool overlooking the sea"
            loading="lazy"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="space-y-5">
          <div
            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary"
          >
            <span class="w-6 h-px bg-secondary" />
            <span>Location & Setting</span>
          </div>
          <h2
            class="text-2xl sm:text-4xl font-heading font-bold text-font-text"
          >
            Boracay Island, Station 1
          </h2>
          <p class="text-sm text-font-muted leading-relaxed">
            Our resort occupies one of the most coveted positions on Boracay —
            the tranquil northern end of Station 1, where the beach is widest,
            the water clearest, and the pace most deliberately relaxed.
          </p>
          <p class="text-sm text-font-muted leading-relaxed">
            Just a 10-minute private speedboat crossing from Caticlan Airport
            (Malay), reaching Isla Vespera Resort feels like an arrival into a
            different dimension of time.
          </p>
          <div class="pt-2 space-y-2 text-xs text-font-muted">
            <div class="flex items-center gap-2">
              <Icon
                name="MapPin"
                :size="15"
                class="text-secondary"
              />
              <span>
                {{ hotel.contact.address }}, {{ hotel.contact.city }},
                {{ hotel.contact.region }}, {{ hotel.contact.country }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                name="Ship"
                :size="15"
                class="text-secondary"
              />
              <span>
                10 minutes from Caticlan Jetty Port by private speedboat
              </span>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                name="Plane"
                :size="15"
                class="text-secondary"
              />
              <span>
                Caticlan Airport (MPH) is the nearest domestic airport
              </span>
            </div>
          </div>
          <BaseButton
            to="/contact"
            variant="outline"
            size="md"
          >
            Get Directions & Transfer Assistance
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

const principles = [
  {
    icon: 'Leaf',
    title: 'Environmental Stewardship',
    description:
      "We are committed to preserving Boracay's coral gardens and natural ecosystems through zero single-use plastics, solar-assisted energy, and on-site composting programs.",
  },
  {
    icon: 'Heart',
    title: 'Authentic Filipino Hospitality',
    description:
      'Our team—most of whom call Boracay home—bring a genuine warmth and island generosity that cannot be scripted. Every guest is treated as a personal guest of the family.',
  },
  {
    icon: 'Crown',
    title: 'Understated Luxury',
    description:
      'We reject the ostentatious in favor of refined elegance—generous spaces, flawless linens, custom furniture, and culinary experiences that honor local ingredients and tradition.',
  },
];

useHead({
  title: 'About Isla Vespera Resort',
  meta: [
    {
      name: 'description',
      content: `Discover the story, philosophy, and setting behind ${hotel.name}. A boutique beachfront luxury resort on Boracay Station 1, Philippines.`,
    },
  ],
});
</script>

<template>
  <footer
    class="bg-surface border-t border-border mt-20 pt-16 pb-12 text-font-text"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-border"
      >
        <!-- Col 1: Hotel Brand & Tagline -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary"
            >
              <Icon
                name="Waves"
                :size="20"
              />
            </div>
            <span
              class="text-xl font-heading font-bold uppercase tracking-wider text-font-text"
            >
              {{ hotel.name }}
            </span>
          </div>

          <p class="text-sm text-font-muted leading-relaxed">
            {{ hotel.description }}
          </p>

          <div class="pt-2 flex items-center gap-3 text-secondary">
            <a
              v-if="social.facebook?.enabled && social.facebook?.url"
              :href="social.facebook.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors"
              aria-label="Facebook"
            >
              <Icon
                name="MessageCircle"
                :size="16"
              />
            </a>
            <a
              v-if="social.messenger?.enabled && social.messenger?.url"
              :href="social.messenger.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors"
              aria-label="Messenger"
            >
              <Icon
                name="Send"
                :size="16"
              />
            </a>
            <a
              v-if="social.instagram?.enabled && social.instagram?.url"
              :href="social.instagram.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors"
              aria-label="Instagram"
            >
              <Icon
                name="Sparkle"
                :size="16"
              />
            </a>
            <a
              v-if="social.whatsapp?.enabled && whatsappLink"
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors"
              aria-label="WhatsApp"
            >
              <Icon
                name="Phone"
                :size="16"
              />
            </a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div>
          <h4
            class="text-sm font-semibold uppercase tracking-wider text-font-text mb-4"
          >
            Explore Resort
          </h4>
          <ul class="space-y-2.5 text-sm text-font-muted">
            <li
              v-for="link in footerQuickLinks"
              :key="link.label"
            >
              <NuxtLink
                :to="link.path"
                class="hover:text-secondary transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contact & Location -->
        <div>
          <h4
            class="text-sm font-semibold uppercase tracking-wider text-font-text mb-4"
          >
            Direct Contact
          </h4>
          <ul class="space-y-3 text-sm text-font-muted">
            <li class="flex items-start gap-2.5">
              <Icon
                name="MapPin"
                :size="18"
                class="text-secondary shrink-0 mt-0.5"
              />
              <span>
                {{ hotel.contact.address }}, {{ hotel.contact.city }},
                {{ hotel.contact.region }}, {{ hotel.contact.country }}
              </span>
            </li>
            <li class="flex items-center gap-2.5">
              <Icon
                name="Phone"
                :size="18"
                class="text-secondary shrink-0"
              />
              <a
                :href="`tel:${hotel.contact.phone}`"
                class="hover:text-secondary transition-colors"
              >
                {{ hotel.contact.phoneDisplay }}
              </a>
            </li>
            <li class="flex items-center gap-2.5">
              <Icon
                name="Mail"
                :size="18"
                class="text-secondary shrink-0"
              />
              <a
                :href="`mailto:${hotel.contact.email}`"
                class="hover:text-secondary transition-colors"
              >
                {{ hotel.contact.email }}
              </a>
            </li>
            <li class="flex items-center gap-2.5">
              <Icon
                name="Clock"
                :size="18"
                class="text-secondary shrink-0"
              />
              <span class="text-xs">{{ hotel.contact.businessHours }}</span>
            </li>
          </ul>
        </div>

        <!-- Col 4: Booking Inquiries & Google Form -->
        <div class="space-y-4">
          <h4
            class="text-sm font-semibold uppercase tracking-wider text-font-text mb-2"
          >
            Reservation Options
          </h4>
          <p class="text-xs text-font-muted leading-relaxed">
            Submit a booking request directly or use our official external
            Google Form. No prepayment is required.
          </p>

          <div class="space-y-2">
            <BaseButton
              to="/booking"
              variant="gold"
              size="sm"
              block
            >
              Instant Booking Request
            </BaseButton>

            <a
              v-if="googleForm.enabled && googleForm.url"
              :href="googleForm.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 text-xs py-2 px-3 rounded-button border border-border bg-surface-muted/50 hover:bg-surface-muted text-font-text font-medium transition-colors"
            >
              <span>Book via Google Form</span>
              <Icon
                name="ExternalLink"
                :size="12"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-font-muted"
      >
        <p>
          © {{ new Date().getFullYear() }} {{ hotel.name }}. All rights
          reserved.
        </p>
        <div class="flex items-center gap-6">
          <NuxtLink
            v-for="legal in footerLegalLinks"
            :key="legal.label"
            :to="legal.path"
            class="hover:text-secondary transition-colors"
          >
            {{ legal.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerQuickLinks, footerLegalLinks } from '~/config/navigation';
import { useHotel } from '~/composables/useHotel';
import { useContact } from '~/composables/useContact';
import Icon from '~/components/ui/Icon.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const { hotel } = useHotel();
const { social, googleForm, whatsappLink } = useContact();
</script>

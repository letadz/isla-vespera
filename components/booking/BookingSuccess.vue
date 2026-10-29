<template>
  <div
    class="max-w-2xl mx-auto py-8 sm:py-12 animate__animated animate__zoomIn animate__faster"
  >
    <div
      class="bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-8"
    >
      <!-- Status Badge & Icon -->
      <div class="flex flex-col items-center">
        <div
          class="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-4"
        >
          <Icon
            name="CheckCircle2"
            :size="36"
          />
        </div>

        <Badge
          variant="gold"
          size="lg"
          class="mb-3"
        >
          Status: Pending Review
        </Badge>

        <h1
          class="text-3xl sm:text-4xl font-heading font-bold text-font-text leading-tight"
        >
          Booking Request Submitted
        </h1>

        <p class="text-sm text-font-muted max-w-md mt-2 leading-relaxed">
          Thank you,
          <strong class="text-font-text">{{ booking.guest.firstName }}</strong>
          . We have received your booking inquiry for
          <strong class="text-font-text">{{ hotel.name }}</strong>
          .
        </p>
      </div>

      <!-- Voucher Reference Card -->
      <div
        class="p-6 rounded-2xl bg-surface-muted/60 border border-border text-left space-y-4"
      >
        <div
          class="flex items-center justify-between pb-3 border-b border-border"
        >
          <div>
            <span
              class="text-[10px] uppercase tracking-wider text-font-muted block"
            >
              Request Reference
            </span>
            <span class="text-lg font-mono font-bold text-secondary">
              {{ booking.referenceId }}
            </span>
          </div>
          <div class="text-right">
            <span
              class="text-[10px] uppercase tracking-wider text-font-muted block"
            >
              Submitted
            </span>
            <span class="text-xs text-font-text">
              {{ formatDate(booking.createdAt) }}
            </span>
          </div>
        </div>

        <!-- Room & Itinerary Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <span
              class="text-font-muted block uppercase tracking-wider text-[10px]"
            >
              Room Type
            </span>
            <span class="font-semibold text-font-text">
              {{ booking.roomName }}
            </span>
          </div>
          <div>
            <span
              class="text-font-muted block uppercase tracking-wider text-[10px]"
            >
              Check-In
            </span>
            <span class="font-semibold text-font-text">
              {{ booking.dates.checkIn }}
            </span>
          </div>
          <div>
            <span
              class="text-font-muted block uppercase tracking-wider text-[10px]"
            >
              Check-Out
            </span>
            <span class="font-semibold text-font-text">
              {{ booking.dates.checkOut }} ({{ booking.nights }} nights)
            </span>
          </div>
          <div>
            <span
              class="text-font-muted block uppercase tracking-wider text-[10px]"
            >
              Guests
            </span>
            <span class="font-semibold text-font-text">
              {{ booking.guests.adults }} Adults
              <template v-if="booking.guests.children">
                , {{ booking.guests.children }} Children
              </template>
            </span>
          </div>
          <div>
            <span
              class="text-font-muted block uppercase tracking-wider text-[10px]"
            >
              Total Rate
            </span>
            <span class="font-bold text-secondary text-sm">
              {{
                formatCurrency(
                  booking.price.total,
                  booking.price.currency,
                  booking.price.currencySymbol,
                )
              }}
            </span>
          </div>
          <div>
            <span
              class="text-font-muted block uppercase tracking-wider text-[10px]"
            >
              Payment
            </span>
            <span class="font-medium text-emerald-600">Pay at Hotel</span>
          </div>
        </div>

        <div
          v-if="booking.guest.specialRequests"
          class="pt-3 border-t border-border text-xs"
        >
          <span
            class="text-font-muted block uppercase tracking-wider text-[10px] mb-1"
          >
            Special Requests
          </span>
          <p class="text-font-text italic">
            "{{ booking.guest.specialRequests }}"
          </p>
        </div>
      </div>

      <!-- What happens next -->
      <div
        class="p-5 rounded-2xl bg-secondary/10 border border-secondary/20 text-left text-xs text-font-text space-y-2"
      >
        <h4 class="font-semibold flex items-center gap-1.5 text-secondary">
          <Icon
            name="Info"
            :size="16"
          />
          Next Steps for Confirmation
        </h4>
        <ol class="list-decimal list-inside space-y-1.5 text-font-muted pl-1">
          <li>
            Our concierge will verify room allocation for your selected dates
            within 24 hours.
          </li>
          <li>
            You will receive an official confirmation voucher via email at
            <strong class="text-font-text">{{ booking.guest.email }}</strong>
            .
          </li>
          <li>
            For immediate assistance or expedited confirmation, you can reach
            out via WhatsApp or Messenger below.
          </li>
        </ol>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <BaseButton
          to="/"
          variant="outline"
          size="md"
        >
          Return to Homepage
        </BaseButton>

        <a
          v-if="whatsappUrl"
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-button bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
        >
          <Icon
            name="Phone"
            :size="16"
          />
          <span>Confirm Faster via WhatsApp</span>
        </a>

        <a
          v-else-if="social.messenger?.enabled && social.messenger?.url"
          :href="social.messenger.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-button bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          <Icon
            name="Send"
            :size="16"
          />
          <span>Message on Messenger</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BookingRequestRecord } from '~/types';
import { useHotel } from '~/composables/useHotel';
import { useContact } from '~/composables/useContact';
import { formatCurrency } from '~/utils/currency';
import Icon from '~/components/ui/Icon.vue';
import Badge from '~/components/ui/Badge.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const props = defineProps<{
  booking: BookingRequestRecord;
}>();

const { hotel } = useHotel();
const { social } = useContact();

const formatDate = (isoStr: string) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(isoStr));
  } catch {
    return isoStr;
  }
};

const whatsappUrl = computed(() => {
  if (!social.whatsapp?.enabled || !social.whatsapp?.number) return null;
  const num = social.whatsapp.number.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(
    `Hello ${hotel.name}, I just submitted booking request ${props.booking.referenceId} for ${props.booking.roomName} (${props.booking.dates.checkIn} to ${props.booking.dates.checkOut}). Could you please confirm availability?`,
  );
  return `https://wa.me/${num}?text=${text}`;
});
</script>

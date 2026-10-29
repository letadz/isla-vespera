<template>
  <div class="space-y-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <!-- Call Hotel -->
      <a
        :href="telLink"
        class="p-4 rounded-xl border border-border bg-surface hover:border-secondary transition-all flex items-center gap-3.5 group shadow-xs"
      >
        <div
          class="w-10 h-10 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
        >
          <Icon
            name="Phone"
            :size="20"
          />
        </div>
        <div class="overflow-hidden">
          <span class="text-xs uppercase tracking-wider text-font-muted block">
            Call Directly
          </span>
          <span class="text-sm font-semibold text-font-text truncate block">
            {{ contact.phoneDisplay }}
          </span>
        </div>
      </a>

      <!-- Email Reservations -->
      <a
        :href="mailtoLink"
        class="p-4 rounded-xl border border-border bg-surface hover:border-secondary transition-all flex items-center gap-3.5 group shadow-xs"
      >
        <div
          class="w-10 h-10 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
        >
          <Icon
            name="Mail"
            :size="20"
          />
        </div>
        <div class="overflow-hidden">
          <span class="text-xs uppercase tracking-wider text-font-muted block">
            Email Reservations
          </span>
          <span class="text-sm font-semibold text-font-text truncate block">
            {{ contact.email }}
          </span>
        </div>
      </a>

      <!-- WhatsApp Direct -->
      <a
        v-if="whatsappLink"
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500 transition-all flex items-center gap-3.5 group shadow-xs"
      >
        <div
          class="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
        >
          <Icon
            name="Phone"
            :size="20"
          />
        </div>
        <div>
          <span
            class="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block font-semibold"
          >
            Instant Chat
          </span>
          <span class="text-sm font-semibold text-font-text block">
            WhatsApp Concierge
          </span>
        </div>
      </a>

      <!-- Facebook Messenger -->
      <a
        v-if="messengerLink"
        :href="messengerLink"
        target="_blank"
        rel="noopener noreferrer"
        class="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500 transition-all flex items-center gap-3.5 group shadow-xs"
      >
        <div
          class="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
        >
          <Icon
            name="Send"
            :size="20"
          />
        </div>
        <div>
          <span
            class="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 block font-semibold"
          >
            Messenger
          </span>
          <span class="text-sm font-semibold text-font-text block">
            Chat on Messenger
          </span>
        </div>
      </a>
    </div>

    <!-- Google Form Booking Option -->
    <div
      v-if="googleForm.enabled && googleFormLink"
      class="p-5 rounded-2xl border border-secondary/30 bg-secondary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
    >
      <div class="space-y-1">
        <h4
          class="text-sm font-heading font-semibold text-font-text flex items-center gap-2"
        >
          <Icon
            name="ExternalLink"
            :size="16"
            class="text-secondary"
          />
          <span>Book via Official Google Form</span>
        </h4>
        <p class="text-xs text-font-muted max-w-md">
          {{ googleForm.notice }}
        </p>
      </div>

      <a
        :href="googleFormLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-xs font-semibold py-2 px-4 rounded-button bg-secondary text-primary-dark hover:brightness-105 transition-all shrink-0"
      >
        <span>Open Google Form</span>
        <Icon
          name="ExternalLink"
          :size="14"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContact } from '~/composables/useContact';
import Icon from '~/components/ui/Icon.vue';

const {
  contact,
  googleForm,
  telLink,
  mailtoLink,
  messengerLink,
  whatsappLink,
  googleFormLink,
} = useContact();
</script>

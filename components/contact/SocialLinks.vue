<template>
  <div class="flex items-center gap-3">
    <a
      v-if="social.facebook?.enabled && social.facebook?.url"
      :href="social.facebook.url"
      target="_blank"
      rel="noopener noreferrer"
      class="w-10 h-10 rounded-full border border-border bg-surface hover:border-secondary hover:text-secondary flex items-center justify-center transition-colors text-font-muted"
      aria-label="Facebook Page"
    >
      <Icon
        name="MessageCircle"
        :size="18"
      />
    </a>

    <a
      v-if="social.messenger?.enabled && social.messenger?.url"
      :href="social.messenger.url"
      target="_blank"
      rel="noopener noreferrer"
      class="w-10 h-10 rounded-full border border-border bg-surface hover:border-secondary hover:text-secondary flex items-center justify-center transition-colors text-font-muted"
      aria-label="Facebook Messenger"
    >
      <Icon
        name="Send"
        :size="18"
      />
    </a>

    <a
      v-if="social.instagram?.enabled && social.instagram?.url"
      :href="social.instagram.url"
      target="_blank"
      rel="noopener noreferrer"
      class="w-10 h-10 rounded-full border border-border bg-surface hover:border-secondary hover:text-secondary flex items-center justify-center transition-colors text-font-muted"
      aria-label="Instagram Profile"
    >
      <Icon
        name="Sparkle"
        :size="18"
      />
    </a>

    <a
      v-if="social.whatsapp?.enabled && whatsappLink"
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="w-10 h-10 rounded-full border border-border bg-surface hover:border-secondary hover:text-secondary flex items-center justify-center transition-colors text-font-muted"
      aria-label="WhatsApp Contact"
    >
      <Icon
        name="Phone"
        :size="18"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { useContact } from '~/composables/useContact';
import Icon from '~/components/ui/Icon.vue';

const { social, whatsappLink } = useContact();
</script>

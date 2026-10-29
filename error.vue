<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center bg-background">
    <div class="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-secondary mb-6">
      <Icon name="Waves" :size="32" />
    </div>

    <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
      <span class="w-6 h-px bg-secondary" />
      <span>404 — Page Not Found</span>
      <span class="w-6 h-px bg-secondary" />
    </div>

    <h1 class="text-4xl sm:text-6xl font-heading font-bold text-font-text mb-4">
      Adrift at Sea
    </h1>

    <p class="text-base text-font-muted max-w-md mx-auto leading-relaxed mb-8">
      It seems this page has drifted out with the tide. Let us guide you back to the shore.
    </p>

    <div class="flex flex-wrap items-center justify-center gap-4">
      <BaseButton to="/" variant="gold" size="lg">
        Return to Homepage
      </BaseButton>
      <BaseButton to="/rooms" variant="outline" size="lg">
        Browse Our Rooms
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/common/BaseButton.vue'
import Icon from '~/components/ui/Icon.vue'

useHead({
  title: '404 — Page Not Found'
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useHotel } from '~/composables/useHotel'

const { hotel } = useHotel()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${hotel.name}` : `${hotel.name} — ${hotel.tagline}`
  },
  meta: [
    { name: 'description', content: hotel.description },
    { property: 'og:site_name', content: hotel.name },
    { property: 'og:title', content: `${hotel.name} — ${hotel.tagline}` },
    { property: 'og:description', content: hotel.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${hotel.name} — ${hotel.tagline}` },
    { name: 'twitter:description', content: hotel.description }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: hotel.favicon || '/favicon.ico' }
  ]
})
</script>

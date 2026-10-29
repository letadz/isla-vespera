import type { SocialConfig } from '~/types'

export const socialConfig: SocialConfig = {
  facebook: {
    enabled: true,
    url: 'https://facebook.com/islavesperaresort'
  },
  messenger: {
    enabled: true,
    url: 'https://m.me/islavesperaresort',
    handle: 'islavesperaresort'
  },
  instagram: {
    enabled: true,
    url: 'https://instagram.com/islavesperaresort',
    handle: '@islavesperaresort'
  },
  whatsapp: {
    enabled: true,
    number: '+639171234567',
    message: 'Hello Isla Vespera Resort, I would like to inquire about booking a room.'
  },
  tiktok: {
    enabled: false,
    url: 'https://tiktok.com/@islavesperaresort'
  }
}

import type { SiteConfig } from '~/types'
import { bookingSettings } from './booking'
import { socialConfig } from './social'
import { activeTheme } from './theme'

export const siteConfig: SiteConfig = {
  name: 'Isla Vespera Resort',
  shortName: 'Isla Vespera',
  tagline: 'Your peaceful escape by the sea.',
  description: 'Experience unmatched coastal luxury at Isla Vespera Resort on pristine tropical shores. Contemporary elegance meets warm hospitality.',
  logo: '/images/logo/logo.svg',
  logoDark: '/images/logo/logo-dark.svg',
  favicon: '/favicon.ico',
  contact: {
    phone: '+639171234567',
    phoneDisplay: '+63 917 123 4567',
    email: 'reservations@islavespera.com',
    address: 'Station 1, White Beach',
    city: 'Malay',
    region: 'Aklan',
    country: 'Philippines',
    coordinates: {
      lat: 11.9674,
      lng: 121.9248
    },
    businessHours: 'Front Desk: 24/7 | Reservations: 08:00 - 20:00 (PHT)'
  },
  booking: bookingSettings,
  social: socialConfig,
  googleForm: {
    enabled: true,
    url: 'https://forms.google.com/sample-islavespera-booking-request',
    notice: 'You will be redirected to our verified Google Forms booking sheet. Our concierge will review your submission and contact you within 24 hours.'
  },
  theme: activeTheme
}

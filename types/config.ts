import type { ThemeName } from './theme'

export interface ContactConfig {
  phone: string
  phoneDisplay: string
  email: string
  address: string
  city: string
  region: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
  businessHours: string
}

export interface BookingSettingsConfig {
  currency: string
  currencySymbol: string
  minimumNights: number
  maximumGuests: number
  checkInTime: string
  checkOutTime: string
  serviceChargePercent: number
  vatPercent: number
}

export interface SocialPlatformConfig {
  enabled: boolean
  url?: string
  handle?: string
  number?: string
  message?: string
}

export interface SocialConfig {
  facebook?: SocialPlatformConfig
  messenger?: SocialPlatformConfig
  instagram?: SocialPlatformConfig
  whatsapp?: SocialPlatformConfig
  tiktok?: SocialPlatformConfig
}

export interface GoogleFormConfig {
  enabled: boolean
  url: string
  notice: string
}

export interface SiteConfig {
  name: string
  shortName: string
  tagline: string
  description: string
  logo: string
  logoDark?: string
  favicon: string
  contact: ContactConfig
  booking: BookingSettingsConfig
  social: SocialConfig
  googleForm: GoogleFormConfig
  theme: ThemeName
}

export interface NavItem {
  label: string
  path: string
  isExternal?: boolean
  highlight?: boolean
}

import type { NavItem } from '~/types'

export const headerNavLinks: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Rooms & Suites', path: '/rooms' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Special Offers', path: '/offers' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' }
]

export const footerQuickLinks: NavItem[] = [
  { label: 'Our Rooms', path: '/rooms' },
  { label: 'Resort Gallery', path: '/gallery' },
  { label: 'Offers & Packages', path: '/offers' },
  { label: 'About Isla Vespera', path: '/about' },
  { label: 'Guest Reviews', path: '/#testimonials' },
  { label: 'Frequently Asked Questions', path: '/faq' }
]

export const footerLegalLinks: NavItem[] = [
  { label: 'Privacy Policy', path: '/faq' },
  { label: 'Terms of Service', path: '/faq' },
  { label: 'Booking & Cancellation Policy', path: '/faq' }
]

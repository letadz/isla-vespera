import { siteConfig } from '~/config/site'

export function useContact() {
  const { contact, social, googleForm, name } = siteConfig

  const telLink = computed(() => `tel:${contact.phone}`)
  const mailtoLink = computed(() => `mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry - ${name}`)}`)

  const messengerLink = computed(() => {
    if (!social.messenger?.enabled || !social.messenger?.url) return null
    return social.messenger.url
  })

  const whatsappLink = computed(() => {
    if (!social.whatsapp?.enabled || !social.whatsapp?.number) return null
    const cleanNumber = social.whatsapp.number.replace(/[^0-9]/g, '')
    const msg = encodeURIComponent(social.whatsapp.message || `Hello ${name}, I would like to inquire about booking a room.`)
    return `https://wa.me/${cleanNumber}?text=${msg}`
  })

  const googleFormLink = computed(() => {
    if (!googleForm.enabled || !googleForm.url) return null
    return googleForm.url
  })

  const facebookLink = computed(() => {
    if (!social.facebook?.enabled || !social.facebook?.url) return null
    return social.facebook.url
  })

  const instagramLink = computed(() => {
    if (!social.instagram?.enabled || !social.instagram?.url) return null
    return social.instagram.url
  })

  const googleMapsSearchUrl = computed(() => {
    const query = encodeURIComponent(`${name}, ${contact.address}, ${contact.city}`)
    return `https://www.google.com/maps/search/?api=1&query=${query}`
  })

  return {
    contact,
    social,
    googleForm,
    telLink,
    mailtoLink,
    messengerLink,
    whatsappLink,
    googleFormLink,
    facebookLink,
    instagramLink,
    googleMapsSearchUrl
  }
}

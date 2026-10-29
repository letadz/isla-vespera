/**
 * Form and booking validation helpers
 */

export function isValidEmail(email: string): boolean {
  if (!email) return false
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email.trim())
}

export function isValidPhone(phone: string): boolean {
  if (!phone) return false
  // Accepts digits, spaces, plus sign, dashes, parentheses, at least 7 chars
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  const stripped = phone.replace(/[^0-9]/g, '')
  return stripped.length >= 7
}

export function validateBookingDates(
  checkIn: string | null,
  checkOut: string | null
): { valid: boolean; error?: string } {
  if (!checkIn) {
    return { valid: false, error: 'Please select a check-in date.' }
  }
  if (!checkOut) {
    return { valid: false, error: 'Please select a check-out date.' }
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const inDate = new Date(checkIn)
  inDate.setHours(0, 0, 0, 0)

  if (inDate < today) {
    return { valid: false, error: 'Check-in date cannot be in the past.' }
  }

  const outDate = new Date(checkOut)
  outDate.setHours(0, 0, 0, 0)

  if (outDate <= inDate) {
    return { valid: false, error: 'Check-out date must be after check-in date.' }
  }

  return { valid: true }
}

export function validateGuests(
  adults: number,
  children: number,
  maxGuests: number = 8
): { valid: boolean; error?: string } {
  if (adults < 1) {
    return { valid: false, error: 'At least 1 adult is required.' }
  }
  if (adults + children > maxGuests) {
    return { valid: false, error: `Maximum guest capacity is ${maxGuests} guests.` }
  }
  return { valid: true }
}

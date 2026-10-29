/**
 * Returns today's date formatted as YYYY-MM-DD
 */
export function getTodayString(): string {
  const d = new Date()
  return formatDateISO(d)
}

/**
 * Returns tomorrow's date formatted as YYYY-MM-DD
 */
export function getTomorrowString(): string {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return formatDateISO(d)
}

/**
 * Formats a Date object as YYYY-MM-DD
 */
export function formatDateISO(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * Calculates number of nights between two ISO date strings (checkIn and checkOut)
 */
export function calculateNights(checkIn: string | null, checkOut: string | null): number {
  if (!checkIn || !checkOut) return 1
  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diffTime = end.getTime() - start.getTime()
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return nights > 0 ? nights : 1
}

/**
 * Formats an ISO date string to a human-readable format e.g. "Thu, Nov 12, 2026"
 */
export function formatDisplayDate(dateStr: string | null): string {
  if (!dateStr) return 'Select date'
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(d)
}

/**
 * Adds N days to an ISO date string and returns YYYY-MM-DD
 */
export function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + days)
  return formatDateISO(d)
}

/**
 * Formats an amount into localized currency string (Default: PHP / ₱)
 */
export function formatCurrency(
  amount: number,
  currency: string = 'PHP',
  symbol: string = '₱'
): string {
  if (isNaN(amount)) return `${symbol}0`
  
  const formatted = new Intl.NumberFormat('en-PH', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)

  return `${symbol}${formatted}`
}

/**
 * Returns currency symbol for a currency code
 */
export function getCurrencySymbol(currency: string = 'PHP'): string {
  switch (currency.toUpperCase()) {
    case 'PHP':
      return '₱'
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'GBP':
      return '£'
    case 'JPY':
      return '¥'
    case 'AUD':
      return 'A$'
    case 'SGD':
      return 'S$'
    default:
      return currency
  }
}

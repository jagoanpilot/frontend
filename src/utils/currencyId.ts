import { Currency, ETHER, Token } from '@dynastyswap-libs/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'DNY'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId

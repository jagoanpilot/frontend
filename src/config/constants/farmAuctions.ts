import { Token, Pair, ChainId } from '@dynastyswap/sdk'
import tokens from './tokens'
import { FarmAuctionBidderConfig } from './types'

const getLpAddress = (tokenAddress: string, quoteToken: Token) => {
  const token = new Token(ChainId.MAINNET, tokenAddress, 18)
  return Pair.getAddress(token, quoteToken)
}

export const whitelistedBidders: FarmAuctionBidderConfig[] = [
  {
    account: '0x9Ed5a62535A5Dd2dB2d9bB21bAc42035Af47F630',
    farmName: 'NAV-BNB',
    tokenAddress: '0xBFEf6cCFC830D3BaCA4F6766a0d4AaA242Ca9F3D',
    quoteToken: tokens.wvlx,
    tokenName: 'Navcoin',
    projectSite: 'https://navcoin.org/en',
  },
  {
    account: '0x33723811B0FCa2a751f3912B80603Fe11499D894',
    farmName: 'WSG-BNB',
    tokenAddress: '0xA58950F05FeA2277d2608748412bf9F802eA4901',
    quoteToken: tokens.wvlx,
    tokenName: 'Wall Street Games',
    projectSite: 'https://wsg.gg/',
  },
].map((bidderConfig) => ({
  ...bidderConfig,
  lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
}))

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: tokens.wvlx,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}

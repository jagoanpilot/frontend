import { ChainId } from '@dynastyswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'wss://sepolia.gateway.tenderly.co',
  // [ChainId.MAINNET]: 'https://wag.mainnet.veladev.net/rpc',
  [ChainId.TESTNET]: 'https://traces-api.testnet.veladev.net/bridges',
}

export default NETWORK_URLS

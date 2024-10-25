import { ChainId } from '@dynastyswap/sdk'

export const GRAPH_API_PROFILE = process.env.REACT_APP_GRAPH_API_PROFILE
export const GRAPH_API_PREDICTION = process.env.REACT_APP_GRAPH_API_PREDICTION
export const SNAPSHOT_VOTING_API = process.env.REACT_APP_SNAPSHOT_VOTING_API
export const SNAPSHOT_BASE_URL = process.env.REACT_APP_SNAPSHOT_BASE_URL
export const API_PROFILE = process.env.REACT_APP_API_PROFILE
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
export const BITQUERY_API = 'https://graphql.bitquery.io'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'

// export const INFO_CLIENT = {
//   [ChainId.TESTNET]: 'https://thegraph.testnet.astroswap.app/subgraphs/name/astro',
//   [ChainId.MAINNET]: 'http://51.91.119.137/subgraphs/name/astro',
// }[chainId]

export const INFO_CLIENT = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.astroswap.app/subgraphs/name/astro',
  [ChainId.MAINNET]: 'https://thegraph2.astroswap.app/subgraphs/name/astro',
}[chainId]

// export const BLOCKS_CLIENT = {
//   [ChainId.TESTNET]: 'http://51.222.43.201/subgraphs/name/blocks',
//   [ChainId.MAINNET]: 'http://51.91.119.137/subgraphs/name/astro',
// }[chainId]

export const BLOCKS_CLIENT = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.astroswap.app/subgraphs/name/blocks',
  [ChainId.MAINNET]: 'https://thegraph2.astroswap.app/subgraphs/name/astro',
}[chainId]

export const GRAPH_API_LOTTERY = {
  [ChainId.TESTNET]: 'https://thegraph.testnet.astroswap.app/subgraphs/name/lottery',
  [ChainId.MAINNET]: 'https://thegraph.astroswap.app/subgraphs/name/lottery',
}[chainId]

// export const GRAPH_API_LOTTERY = {
//   [ChainId.TESTNET]: 'http://51.222.43.201/subgraphs/name/lottery',
//   [ChainId.MAINNET]: 'http://209.237.140.231:8000/subgraphs/name/lottery',
// }[chainId]

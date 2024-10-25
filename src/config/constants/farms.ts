import { ChainId } from '@dynastyswap/sdk'

import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

export const ADA_ASTRO_LP_PID = chainId === MAINNET ? 1 : 1
export const ADA_BUSD_LP_PID = chainId === MAINNET ? 3 : 5

const farms: SerializedFarmConfig[] =
  chainId === MAINNET
    ? [
      ]
    : [
      ]

export default farms

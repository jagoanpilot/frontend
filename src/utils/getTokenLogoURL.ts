import { ChainId } from '@dynastyswap/sdk'

const getTokenLogoURL = (address: string) => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  return `https://github.com/astroswapapp/assets/blob/master/blockchains/velas${
    parseInt(chainId, 10) === ChainId.TESTNET ? '-test' : ''
  }/assets/${address.toLowerCase()}/logo.png?raw=true`
}

export default getTokenLogoURL

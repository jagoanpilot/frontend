import React from 'react'
import { TokenPairImage, ImageProps } from 'packages/uikit'
import { serializeTokens } from 'config/constants/tokens'
import getTokenLogoURL from 'utils/getTokenLogoURL'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  // const primaryTokenSrc = `/images/tokens/${mainnetTokens.cake.address}.svg`
  const primaryTokenSrc = getTokenLogoURL(serializeTokens().cake.address)

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default CakeVaultTokenPairImage

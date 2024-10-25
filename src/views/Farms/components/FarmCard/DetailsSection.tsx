import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { ASTRO_LP_DECIMALS, ASTRO_LP_SYMBOL } from 'config/constants'
import styled from 'styled-components'
import { Text, Flex, LinkExternal, Skeleton, Button, MetamaskIcon } from 'packages/uikit'
import { useWeb3React } from '@web3-react/core'
import { registerToken } from 'utils/wallet'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
  lpAddress?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
  lpAddress,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const isMetaMaskInScope = !!window.ethereum?.isMetaMask
  const tokenAddress = lpAddress || ''

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{t('Total Liquidity')}:</Text>
        {totalValueFormatted ? <Text>{totalValueFormatted}</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl}>{t('Get %symbol%', { symbol: lpLabel })}</StyledLinkExternal>
      )}
      <StyledLinkExternal href={bscScanAddress}>{t('View Contract')}</StyledLinkExternal>
      <StyledLinkExternal href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal>
      {account && isMetaMaskInScope && tokenAddress && (
        <Flex justifyContent="flex-start">
          <Button
            variant="text"
            p="0"
            height="auto"
            onClick={() => registerToken(tokenAddress, ASTRO_LP_SYMBOL, ASTRO_LP_DECIMALS)}
          >
            <Text color="primary" fontWeight="400">
              {t('Add to Metamask')}
            </Text>
            <MetamaskIcon ml="4px" />
          </Button>
        </Flex>
      )}
    </Wrapper>
  )
}

export default DetailsSection

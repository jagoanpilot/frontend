import React from 'react'
import styled from 'styled-components'
import Text from '../../../components/Text/Text'
import Skeleton from '../../../components/Skeleton/Skeleton'

interface Props {
  cakePriceUsd?: number | string
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`

const ImgWrapper = styled.img`
  width: 28px;
  margin-right: 16px;
`

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://exchange.astroswap.app/swap?outputCurrency=0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27"
      target="_blank"
    >
      <ImgWrapper alt="logo" src="/images/logo.png" />
      <Text color="tertiary" bold>{`$${cakePriceUsd}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  )
}

export default React.memo(CakePrice)

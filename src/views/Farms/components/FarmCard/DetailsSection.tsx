import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'
import { ChainId } from '@pancakeswap-libs/sdk'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
  depositUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  depositUrl
}) => {

  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })

  const depositLink = React.useMemo(() => {
    
    if (depositUrl) {
      return depositUrl
    }
    if (isTokenOnly) {
      return `https://swap.c4ei.net/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}?chainId=${ChainId.MAINNET}`
    }
    return `https://swap.c4ei.net/#/add/${liquidityUrlPathParts}?chainId=${ChainId.MAINNET}`
  }, [isTokenOnly, tokenAddresses, liquidityUrlPathParts, depositUrl]);

  let outLink="";
  if(depositLink.indexOf("0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e")>-1){
    outLink="https://klayswap.com/exchange/pool/detail/0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e"
  }else{
    outLink = depositLink
  }

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal href={outLink}> {/* depositLink */}
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on KlayScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection

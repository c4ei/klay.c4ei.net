import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'
// https://github.com/MarshmallowSwap/marshmallow-frontend/blob/main/src/config/constants/farms.ts
const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'SAWON-BUSD LP',
    lpAddresses: { 8217: '0x98DcF542Dbd43c490d52e0DC58cCe686B4a430d6', }, // SAWON-BUSD LP swap.c4ei.net 8217
    tokenSymbol: 'SAWON',
    tokenAddresses: { 8217: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    image: 'sawon-busd',
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'SAWON-KLAY LP',
    lpAddresses: { 8217: '0x10f0c0405fcCC73323C8061D2C96cE124917963e', }, // SAWON-KLAY LP swap.c4ei.net 8217
    tokenSymbol: 'SAWON',
    tokenAddresses: { 8217: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.KLAY,
    quoteTokenAdresses: contracts.wklay,
    image: 'sawon-klay',
    isDisplay: 'N',
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'KLAY-BUSD LP',
    lpAddresses: { 8217: '0x56016c4AD9dBd040e782CA9386B0Ba43684668BE', },
    tokenSymbol: 'KLAY',
    tokenAddresses: { 8217: '0xAb57000f39107eDE71441D54Aa53A22bdCE9F4B9', }, // wbnb (0xAb57000f39107eDE71441D54Aa53A22bdCE9F4B9) --> wklay ? 
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isDisplay: 'N',
  },
  // {
  //   pid: 4,
  //   risk: 5,
  //   isTokenOnly: true, // pools
  //   lpSymbol: 'SAWON',
  //   lpAddresses: { 8217: '0x98DcF542Dbd43c490d52e0DC58cCe686B4a430d6', }, // SAWON-BUSD LP swap.c4ei.net 8217
  //   tokenSymbol: 'SAWON',
  //   tokenAddresses: { 8217: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 5,
  //   risk: 5,
  //   isTokenOnly: true, // pools
  //   lpSymbol: 'KSLP(KLAY-SAWON) LP',
  //   lpAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', }, // KlaySwap LP KLAY-SAWON
  //   tokenSymbol: 'KSLP',
  //   tokenAddresses: { 8217: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
  //   quoteTokenSymbol: QuoteToken.SAWON,
  //   quoteTokenAdresses: contracts.sawon,
  //   image: 'kslp'
  // },
  // ================== pools ==================
  // KlaySwap LP KLAY-CEIK 
  // lpAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', },
  {
    pid: 3,
    risk: 2,
    isTokenOnly: true, // pools
  //   lpSymbol: 'ALBA',
    lpSymbol: 'KSLP(KLAY-CEIK) LP',
    lpAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', }, // KlaySwap LP KLAY-CEIK 
    tokenSymbol: 'KSLP',
    tokenAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', }, // 
    quoteTokenSymbol: QuoteToken.SAWON,
    quoteTokenAdresses: contracts.sawon,
  },

]

export default farms

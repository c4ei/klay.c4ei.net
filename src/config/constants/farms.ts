import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'SAWON-BUSD LP',
    lpAddresses: { 8217: '0x94923842E2791eA8e4D1CeC26F3f14Ca30768D32', },
    tokenSymbol: 'SAWON',
    tokenAddresses: { 8217: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'KLAY-BUSD LP',
    lpAddresses: { 8217: '0x56016c4AD9dBd040e782CA9386B0Ba43684668BE', },
    tokenSymbol: 'KLAY',
    tokenAddresses: { 8217: '0xAb57000f39107eDE71441D54Aa53A22bdCE9F4B9', },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'KLAY-CEIK LP',
    // lpAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', }, // KlaySwap LP KLAY-CEIK 
    lpAddresses: { 8217: '0xC2fF16cf1Dfc77cA025364e79192ED19c651eAb6', }, // SawonDefi
    tokenSymbol: 'CEIK',
    tokenAddresses: { 8217: '0x18814b01b5cc76f7043e10fd268cc4364df47da0', },
    quoteTokenSymbol: QuoteToken.KLAY,
    // quoteTokenAdresses: contracts.ceik,
    quoteTokenAdresses: contracts.sawon,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'SAWON-CEIK LP',
    lpAddresses: { 8217: '0x0ebcDE1df8F8681Dd51FD9Ae5859E6db42F1f154', },
    tokenSymbol: 'CEIK',
    tokenAddresses: { 8217: '0x18814b01b5cc76f7043e10fd268cc4364df47da0', },
    quoteTokenSymbol: QuoteToken.SAWON,
    quoteTokenAdresses: contracts.sawon,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'KSLP(KLAY-SAWON)-CEIK LP',
    lpAddresses: { 8217: '0xb7Ba63EB14eEe2805FE1E1b03D8ca9BCBDa01364', },
    tokenSymbol: 'KSLP',
    tokenAddresses: { 8217: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', },
    quoteTokenSymbol: QuoteToken.CEIK,
    quoteTokenAdresses: contracts.sawon,
  },
  // ================== pools ==================
  // KlaySwap LP KLAY-CEIK 
  // lpAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', },
  {
    pid: 6,
    risk: 3,
    isTokenOnly: true, // pools
  //   lpSymbol: 'SAWON',
    lpSymbol: 'KSLP(KLAY-CEIK) LP',
    lpAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', }, // KlaySwap LP KLAY-CEIK 
    tokenSymbol: 'KSLP',
    tokenAddresses: { 8217: '0x50e746edaa283365136ed86a4e5dfddc6cd3cf9e', }, // 
    quoteTokenSymbol: QuoteToken.SAWON,
    quoteTokenAdresses: contracts.sawon,
  },
]

export default farms

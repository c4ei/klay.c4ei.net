export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  releaseBlockNumber: number
}

export enum QuoteToken {
  'KLAY' = 'KLAY',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',
  'WCAKE' = 'WCAKE',
  'SAWON' = 'SAWON',
  'CEIK' = 'CEIK',
  'KSLP' = 'KSLP',
  // 'BNB' = 'BNB',
  // 'TWT' = 'TWT',
  // 'UST' = 'UST',
  // 'VAULT' = 'VAULT',
  // 'BTCB' = 'BTCB',
  // 'PLUM' = 'PLUM',
  // 'SLIME' = 'SLIME',
  // 'TAKO' = 'TAKO'
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native KLAY behave differently than pools using a token
  'KLAY' = 'Klay', // Pools using native KLAY behave differently than pools using a token
}

export interface Address {
  97?: string
  8217: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  depositUrl?: string
  image?: string
  isDisplay?: string
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: string
  contractAddress: Address
  poolCategory: PoolCategory
  projectLink: string,
  withBurnFee?: boolean,
  burnFee?: number,
  isLPReward ?: boolean,  isLPStake ?: boolean,
  withwithdrawDepositFee?:boolean,
  depositFee?:number,
  noApy?:boolean,
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  tokenDecimals: number
  startBlock? :number
  endBlock? : number
  isApe?: boolean
  slimeRounding? : number,
  isSlimeAMM? : boolean
}

export type Nft = {
  name: string
  description: string
  originalImage: string
  previewImage: string
  blurImage: string
  sortOrder: number
  bunnyId: number
}

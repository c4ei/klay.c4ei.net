import { PoolConfig, QuoteToken, PoolCategory } from './types'

const SAWON = 'SAWON';

const pools: PoolConfig[] = [
  {
    sousId: 1,
    tokenName: 'SAWON-KLAY LP',
    stakingTokenName: QuoteToken[SAWON],
    stakingTokenAddress: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66',
    contractAddress: {
      // 97: '0x26e67884Aa7b1a948A7aC6c6283468F8c2fa70dB',  //SawonChefDeflacionaryDeposit : 0xB949337009c97298c06Acbb585058887d10Ba3f9
      8217: '0x10f0c0405fcCC73323C8061D2C96cE124917963e',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://klay.c4ei.net/',
    harvest: true,
    isFinished: false,
    tokenPerBlock: '0.000124007936507936',
    sortOrder: 1,
    tokenDecimals: 18,
    // startBlock: 103437777+(848200-646600),
    // endBlock: 848200,
    startBlock: 104625555,
    endBlock: 116625555,
    withBurnFee: true,
    isLPStake:false,
    isLPReward:true,
    burnFee: 3,
    slimeRounding: 5,
    image: 'sawon-klay'
  },
]

export default pools

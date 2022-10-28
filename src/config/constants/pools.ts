import { PoolConfig, QuoteToken, PoolCategory } from './types'

const ALBA = 'ALBA';
const SAWON = 'SAWON';

const pools: PoolConfig[] = [
  // {
  //   sousId: 8,
  //   tokenName: 'SAWON LP',
  //   stakingTokenName: QuoteToken[SAWON],
  //   stakingTokenAddress: '0x787732f27d18495494cea3792ed7946bbcff8db2',
  //   contractAddress: {
  //     // 97: '',
  //     8217: '0xab76B5DA1af1C8091B8B8C87533627BB94D2FE36',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://app.slime.finance/',
  //   harvest: true,
  //   isFinished: false,
  //   tokenPerBlock: '0.000856329483621793',
  //   sortOrder: 1,
  //   tokenDecimals: 18,
  //   startBlock: 7323438,
  //   endBlock: 7525038,
  //   withBurnFee:true,
  //   isLPStake:false,
  //   isLPReward:true,
  //   burnFee:0,
  //   slimeRounding:5,
  //   image: 'mash-slime'
  // },
  // {
  //   sousId: 1,
  //   tokenName: 'ALBA-KLAY LP',
  //   stakingTokenName: QuoteToken[ALBA],
  //   stakingTokenAddress: '0xbE1a79Ac31DE3f69C9643fBeC19ee54EFAA944a5',
  //   contractAddress: {
  //     // 97: '0x26e67884Aa7b1a948A7aC6c6283468F8c2fa70dB',  //AlbaChefDeflacionaryDeposit : 0xB949337009c97298c06Acbb585058887d10Ba3f9
  //     8217: '0x26e67884Aa7b1a948A7aC6c6283468F8c2fa70dB',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://farm.c4ei.net/',
  //   harvest: true,
  //   isFinished: false,
  //   tokenPerBlock: '0.000124007936507936',
  //   sortOrder: 1,
  //   tokenDecimals: 18,
  //   // startBlock: 103437777+(848200-646600),
  //   // endBlock: 848200,
  //   startBlock: 103448888,
  //   endBlock: 109496888,
  //   withBurnFee: true,
  //   isLPStake:false,
  //   isLPReward:true,
  //   burnFee: 3,
  //   slimeRounding: 5,
  //   image: 'alba-klay'
  // },
  // {
  //   sousId: 1,
  //   tokenName: 'SAWON-KLAY LP',
  //   stakingTokenName: QuoteToken[SAWON],
  //   stakingTokenAddress: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66',
  //   contractAddress: {
  //     // 97: '0x26e67884Aa7b1a948A7aC6c6283468F8c2fa70dB',  //SawonChefDeflacionaryDeposit : 0xB949337009c97298c06Acbb585058887d10Ba3f9
  //     8217: '0x10f0c0405fcCC73323C8061D2C96cE124917963e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://klay.c4ei.net/',
  //   harvest: true,
  //   isFinished: false,
  //   tokenPerBlock: '0.000124007936507936',
  //   sortOrder: 1,
  //   tokenDecimals: 18,
  //   // startBlock: 103437777+(848200-646600),
  //   // endBlock: 848200,
  //   startBlock: 104625555,
  //   endBlock: 116625555,
  //   withBurnFee: true,
  //   isLPStake:false,
  //   isLPReward:true,
  //   burnFee: 3,
  //   slimeRounding: 5,
  //   image: 'sawon-klay'
  // },
]

export default pools

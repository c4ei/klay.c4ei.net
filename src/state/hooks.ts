import BigNumber from 'bignumber.js'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmsPublicDataAsync, fetchPoolsPublicDataAsync, fetchPoolsUserDataAsync } from './actions'
import { fetchLaunchPoolsUserDataAsync, fetchPoolsDataAsync } from './pools'
import { State, Farm, Pool } from './types'
import { QuoteToken } from '../config/constants/types'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    dispatch(fetchPoolsPublicDataAsync())
    dispatch(fetchPoolsDataAsync()) 
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useLaunchPools = (): Pool[] => {
  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// Pools
export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices
export const usePriceKlayBusd = (): BigNumber => {
  const pid = 3 // BUSD-KLAY LP --> 2
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceSawonBusd = (): BigNumber => {
  const pid = 0; // SAWON-BUSD LP --> 0
  const farm = useFarmFromPid(pid);
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const useTotalValue = (): BigNumber => {
  let value = new BigNumber(0)
  const totalFarmsValue = useFarmsValue()
  const totalLaunchPoolValue = useLaunchPoolValue()
  value = BigNumber.sum(totalFarmsValue, totalLaunchPoolValue)
  return value
}

export const useFarmsValue = () => {
  const farms = useFarms()
  const klayPrice = usePriceKlayBusd()
  const sawonPrice = usePriceSawonBusd()
  let value = new BigNumber(0)
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let valu;
      if (farm.quoteTokenSymbol === QuoteToken.KLAY) {
        valu = (klayPrice.times(farm.lpTotalInQuoteToken))
      } else if (farm.quoteTokenSymbol === QuoteToken.SAWON) { // TODO: should be updated with quiteToken.SAWON
        valu = (sawonPrice.times(farm.lpTotalInQuoteToken))
      } else {
        valu = (farm.lpTotalInQuoteToken)
      }
      value = value.plus(valu)
    }
  }

  return value
}

export const useLaunchPoolValue = () => {
  const launchPools = useLaunchPools();
  const bnbPrice = usePriceKlayBusd();
  const sawonPrice = usePriceSawonBusd();
  let value = new BigNumber(0);
  launchPools.forEach(launchPool => {
    if (launchPool.stakingTokenAddress) {
      let val;
      if (launchPool.stakingTokenName === QuoteToken.SAWON) {
        val = sawonPrice.times(launchPool.totalStaked).div(new BigNumber(10).pow(launchPool.tokenDecimals))
      } else if (launchPool.stakingTokenName === QuoteToken.KLAY) {
        val = bnbPrice.times(launchPool.totalStaked).div(new BigNumber(10).pow(launchPool.tokenDecimals))
      } else {
        val = launchPool.totalStaked.div(new BigNumber(10).pow(launchPool.tokenDecimals))
      }
      value = value.plus(val);
    }
  })
  return value;
}

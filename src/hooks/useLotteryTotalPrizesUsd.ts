import { usePriceAlbaBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalAlba = getBalanceNumber(totalRewards)
  const albaPriceBusd = usePriceAlbaBusd()

  return totalAlba * albaPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd

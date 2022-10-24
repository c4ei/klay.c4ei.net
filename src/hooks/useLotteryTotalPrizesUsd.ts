import { usePriceSawonBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalSawon = getBalanceNumber(totalRewards)
  const albaPriceBusd = usePriceSawonBusd()

  return totalSawon * albaPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd

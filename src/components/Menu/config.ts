import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://swap.c4ei.net/swap?chainId=8217',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.c4ei.net/liquidity?chainId=8217',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Token Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SAWON klay Scan',
        href: 'https://scope.klaytn.com/token/0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66',
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/c4ei",
      },
      {
        label: "Telegram",
        href: "https://t.me/c4eiAirdrop"
      },
    ],
  },
]

export default config

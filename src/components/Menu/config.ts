import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://swap.c4ei.net/',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://swap.c4ei.net/#/pool',
  //     },
  //   ],
  // },
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
  // {
  //   label: 'SafeFarms',
  //   icon: 'FarmIcon',
  //   href: 'http://safefarms.farm.c4ei.net/info',
  // },
  // {
  //   label: 'Launch Pools',
  //   icon: 'PoolIcon',
  //   href: '/launch',
  // },
  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://farm.c4ei.net/Audit.pdf',
  // },


  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   items: [
  //     {
  //       label: 'Techrate',
  //       href: '/Audit.pdf',
  //     },
  //     {
  //       label: 'CERTIK',
  //       href: 'https://certik.org/projects/marshmallow',
  //     },
  //   ],
  // },

  // {
  //   label: 'Partnership',
  //   icon: 'AuditIcon',
  //   href: 'https://forms.gle/UdsH5aEU3JxroM5G9',
  // },
  {
    label: 'Token Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SAWON klay Scan',
        href: 'https://scope.klaytn.com/token/0xbE1a79Ac31DE3f69C9643fBeC19ee54EFAA944a5',
      }
      // ,{
      //   label: 'SAWON Price Graph',
      //   href: 'https://dex.guru/token/0xbE1a79Ac31DE3f69C9643fBeC19ee54EFAA944a5-bsc',
      // }
      // ,{
      //   label: 'TOFY BSC Scan',
      //   href: 'https://scope.klaytn.com/token/0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      // },
      // {
      //   label: 'TOFY Price Graph',
      //   href: 'https://charts.bogged.finance/?token=0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      // }
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
      // {
      //   label: "Docs",
      //   href: "https://marshmallowswap.gitbook.io/marshmallowswap/",
      // },
      // {
      //   label: "Blog",
      //   href: "https://medium.com/@marshmallowdefi",
      // },
      {
        label: "Telegram",
        href: "https://t.me/c4eiAirdrop"
      },
    ],
  },
]

export default config

import { MenuEntry } from '@dynastyswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dynastycoin.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://dynasty-interface.vercel.app//#/pool',
      }
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://dynasty-interface.vercel.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://dynasty-interface.vercel.app/pools'
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'mailto:support@dynastycoin.io',
      },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/Dynasty-Team',
      },
      {
        label: 'Docs',
        href: 'https://doc.dynastycoin.io',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
      {
        label: 'Medium',
        href: 'https://medium.com/@Dynasty-Team',
      },
    ],
  },
]

export default config

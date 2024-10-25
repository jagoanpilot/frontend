import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'AstroSwap',
  description: 'A layer 2 dex for Cardano ecosystem',
  image: 'https://exchange.astroswap.app/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('AstroSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('AstroSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('AstroSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('AstroSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('AstroSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('AstroSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('AstroSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('AstroSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('AstroSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Solar Farms')} | ${t('AstroSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('AstroSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Galaxy Pools')} | ${t('AstroSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('AstroSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('AstroSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('AstroSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('AstroSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('AstroSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('AstroSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('AstroSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('AstroSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('AstroSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('AstroSwap Info & Analytics')}`,
        description: 'View statistics for AstroSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('AstroSwap Info & Analytics')}`,
        description: 'View statistics for AstroSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('AstroSwap Info & Analytics')}`,
        description: 'View statistics for AstroSwap exchanges.',
      }
    default:
      return null
  }
}

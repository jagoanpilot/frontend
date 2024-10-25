import addresses from '../../addresses.json'

/**
 * @see https://github.com/pancakeswap/pancake-frontend/blob/develop/src/config/constants/tokens.ts
 */
const tokens = {
  cake: {
    symbol: 'Astro',
    address: {
      11155111: addresses[11155111].DynastyToken,
      111: addresses[111].DynastyToken,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  wdny: {
    symbol: 'wDNY',
    address: {
      11155111: addresses[11155111].WDNY,
      111: addresses[111].WDNY,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  syrup: {
    symbol: 'SYRUP',
    address: {
      11155111: addresses[11155111].DynastyStake,
      111: addresses[111].DynastyStake,
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      11155111: '0xc111c29a988ae0c0087d97b33c6e6766808a3bd3',
      111: '0xe2172a8e1762ae9962a59ee88a731522a61a4cc9',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
}

export default tokens

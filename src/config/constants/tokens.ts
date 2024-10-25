import { ChainId, Token } from '@dynastyswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'
import addresses from './addresses.json'

const { MAINNET, TESTNET } = ChainId

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wdny: new Token(MAINNET, addresses[11155111].WDNY, 18, 'WDNY', 'Wrapped DNY', 'https://www.astroswap.app/'),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  dny: new Token(MAINNET, addresses[11155111].WDNY, 18, 'DNY', 'DNY', 'https://www.astroswap.app/'),
  ada: new Token(MAINNET, addresses[11155111].AdaToken, 6, 'ADA', 'Cardano', 'https://www.cardano.org/'),
  cake: new Token(MAINNET, addresses[11155111].DynastyToken, 18, 'DYNASTY', 'DynastyToken', 'https://www.astroswap.app/'),
  busd: new Token(
    MAINNET,
    '0xc111c29a988ae0c0087d97b33c6e6766808a3bd3',
    18,
    'BUSD',
    'Multichain BUSD',
    'https://www.astroswap.app/',
  ),
  weth: new Token(
    MAINNET,
    '0x85219708c49aa701871Ad330A94EA0f41dFf24Ca',
    18,
    'WETH',
    'Multichain WETH',
    'https://wagyuswap.app/',
  ),
  wag: new Token(
    MAINNET,
    '0xabf26902fd7b624e0db40d31171ea9dddf078351',
    18,
    'WAG',
    'WAGToken',
    'https://www.wagyuswap.app/',
  ),
  adapad: new Token(
    MAINNET,
    '0xdb0170e2d0c1cc1b2e7a90313d9b9afa4f250289',
    18,
    'ADAPAD',
    'ADAPad',
    'https://adapad.io/',
  ),
  swapz: new Token(
    MAINNET,
    '0x9b6fbF0ea23faF0d77B94d5699B44062e5E747Ac',
    18,
    'SWAPZ',
    'SWAPZ.app',
    'https://swapz.app',
  ),
  vdgt: new Token(
    MAINNET,
    '0xd12f7a98c0d740e7ec82e8caf94eb79c56d1b623',
    18,
    'VDGT',
    'VELERO',
    'https://velero.finance/',
  ),
  usdv: new Token(
    MAINNET,
    '0xcd7509b76281223f5b7d3ad5d47f8d7aa5c2b9bf',
    18,
    'USDV',
    'USD Velero Stablecoin',
    'https://velero.finance/',
  ),
  wbtc: new Token(
    MAINNET,
    '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
    18,
    'WBTC',
    'Wrapped Bitcoin',
    'https://wbtc.network/',
  ),
  dana: new Token(MAINNET, '0x87d506b45d3398a49f95d0e4b26f645dc74fe105', 6, 'DANA', 'Ardana', 'https://ardana.org/'),
  revu: new Token(
    MAINNET,
    '0x78fec264679c07aa1302af240fcb0c76db6e3a1c',
    6,
    'REVU',
    'Revuto',
    'https://crypto.revuto.com/',
  ),
  meld: new Token(MAINNET, '0xa5dcd54e78431f912d39e45174de23cde3842795', 6, 'MELD', 'MELD', 'https://meld.com/'),
  lq: new Token(
    MAINNET,
    '0x07bfb2da0f5204f1a9e48f0d7dc0442ec953e318',
    6,
    'LQ',
    'Liqwid Finance',
    'https://www.liqwid.finance/',
  ),
  xray: new Token(
    MAINNET,
    '0x438ec6bdf9909131b3bf5243429572fb9d0354a7',
    6,
    'XRAY',
    'Ray Network',
    'https://raynetwork.io/',
  ),
  pavia: new Token(MAINNET, '0x3ed96aaaba90d2e4642a917d65613784124b5793', 6, 'PAVIA', 'Pavia', 'https://www.pavia.io/'),
  vyfi: new Token(
    MAINNET,
    '0xc4b2aa12383e7a2fcc5fda9b7c5257c20b20cdd6',
    6,
    'VYFI',
    'VyFinance',
    'https://www.vyfi.io/',
  ),
  aada: new Token(
    MAINNET,
    '0x478bcae58d38a1fde507eab3ff2251b60e53863a',
    6,
    'AADA',
    'AADA Finance',
    'https://aada.finance/',
  ),
  sundae: new Token(
    MAINNET,
    '0x87cc4003d1bb6114ca9f10dd27a50346f6046c50',
    6,
    'SUNDAE',
    'SundaeSwap',
    'https://sundaeswap.finance/',
  ),
  clap: new Token(
    MAINNET,
    '0x253540b0fa37d2fc25e348672e09cbf395832438',
    6,
    'CLAP',
    'Cardashift',
    'https://cardashift.com/',
  ),
  wmt: new Token(
    MAINNET,
    '0xf8306d5344da9f0ba7fe87f51abf39a10a4455f3',
    6,
    'WMT',
    'World Mobile Token',
    'https://worldmobiletoken.com/',
  ),
  adao: new Token(
    MAINNET,
    '0x141ba6becda65b991f12e417f07636c656937e07',
    6,
    'ADAO',
    'ADADAO',
    'https://www.adadao.org/',
  ),
  adax: new Token(MAINNET, '0xd579b8b50200739ddd74e9255a75de6f4716d14d', 6, 'ADAX', 'ADAX', 'https://adax.pro/'),
  syrup: new Token(
    MAINNET,
    addresses[11155111].DynastyStake,
    18,
    'DynastyStake',
    'DynastyStake Token',
    'https://www.astroswap.app/',
  ),
}

export const testnetTokens = {
  wdny: new Token(TESTNET, addresses[111].WDNY, 18, 'WDNY', 'Wrapped DNY', 'https://www.astroswap.app/'),
  ada: new Token(TESTNET, addresses[111].AdaToken, 18, 'ADA', 'Cardano', 'https://www.cardano.org/'),
  cake: new Token(TESTNET, addresses[111].DynastyToken, 18, 'ASTRO', 'DynastyToken', 'https://www.astroswap.app/'),
  syrup: new Token(
    TESTNET,
    addresses[111].DynastyStake,
    18,
    'DynastyStake',
    'DynastyStake Token',
    'https://www.astroswap.app/',
  ),
  busd: new Token(
    TESTNET,
    '0xe2172a8E1762ae9962A59EE88a731522A61a4cc9',
    18,
    'BUSD',
    'Velas BUSD',
    'https://www.astroswap.app/',
  ),
}

const tokens = (): TokenList => {
  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (chainId === ChainId.TESTNET) {
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {})

    return Object.keys(testnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()

import { ChainId } from '@dynastyswap/sdk'
import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const { MAINNET } = ChainId

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] =
  chainId === MAINNET
    ? [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            111: '',
            11155111: '0x8f95d2c03C13255C58DFe13D9A7bA3Bc59f828f3',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '2.5',
          sortOrder: 1,
          isFinished: false,
        },
        {
          sousId: 2,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.ada,
          contractAddress: {
            111: '',
            11155111: '0x4E80954B90ce9274F3533752371e1b937E1AAc39',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.826719',
          sortOrder: 3,
          isFinished: true,
        },
        {
          sousId: 3,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.adapad,
          contractAddress: {
            111: '',
            11155111: '0xe06E6ad9d046f2F45BB99EFadA66ddd9D8cE5855',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.3215',
          sortOrder: 4,
          isFinished: true,
        },
        {
          sousId: 4,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.wag,
          contractAddress: {
            111: '',
            11155111: '0xB71fcE0D2D3570b21e136Ae1f056F26B177541C3',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.064',
          sortOrder: 5,
          isFinished: true,
        },
        {
          sousId: 5,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.wmt,
          contractAddress: {
            111: '',
            11155111: '0xb3cb1605FDAEFDc150825DB4Fc438C5b7D738DDe',
          },
          poolCategory: PoolCategory.CORE,
          harvest: false,
          tokenPerBlock: '0.0192',
          sortOrder: 6,
          isFinished: true,
          enableEmergencyWithdraw: true,
        },
        {
          sousId: 6,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.wmt,
          contractAddress: {
            111: '',
            11155111: '0x293389535A49513514487fFf9b1ab4399a2D7099',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.0192',
          sortOrder: 7,
          isFinished: true,
        },
        {
          sousId: 7,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.adao,
          contractAddress: {
            111: '',
            11155111: '0x18ca819DF92c60C3CD382b83d527499c54Af527b',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.1607',
          sortOrder: 8,
          isFinished: true,
        },
        {
          sousId: 9,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.swapz,
          contractAddress: {
            111: '',
            11155111: '0x02bC9f438944c1ee616FF6afD18b8539d43f3a15',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.495',
          sortOrder: 9,
          isFinished: true,
        },
        {
          sousId: 10,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.vdgt,
          contractAddress: {
            111: '',
            11155111: '0x9F3D312E38c7Ff8E578708E0ca87f3c20aec2002',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.202',
          sortOrder: 10,
          isFinished: true,
        },
        {
          sousId: 11,
          stakingToken: serializedTokens.vdgt,
          earningToken: serializedTokens.cake,
          contractAddress: {
            111: '',
            11155111: '0x2eD4AC501D6AF1f6210f3DF6ffe3DA2B700e58F0',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '0.064',
          sortOrder: 11,
          isFinished: true,
        },
        {
          sousId: 19,
          stakingToken: serializedTokens.ada,
          earningToken: serializedTokens.wmt,
          contractAddress: {
            111: '',
            11155111: '0xa4531FFD3834C18447c41E0FDA880E8d2288cd70',
          },
          poolCategory: PoolCategory.CORE,
          harvest: false,
          tokenPerBlock: '0.0192',
          sortOrder: 12,
          isFinished: true,
        },
      ]
    : [
        {
          sousId: 0,
          stakingToken: serializedTokens.cake,
          earningToken: serializedTokens.cake,
          contractAddress: {
            111: '0x2F1a6cbE5844516fdFA78f9a17F72cD60dd042b7',
            11155111: '',
          },
          poolCategory: PoolCategory.CORE,
          harvest: true,
          tokenPerBlock: '4.25',
          sortOrder: 1,
          isFinished: false,
        },
      ]

export default pools

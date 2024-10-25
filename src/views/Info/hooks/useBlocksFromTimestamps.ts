import { gql } from 'graphql-request'
import { useState, useEffect } from 'react'
import { multiQuery } from 'views/Info/utils/infoQueryHelpers'
import { BLOCKS_CLIENT } from 'config/constants/endpoints'
import { Block } from 'state/info/types'

const getBlockSubqueries = (timestamps: number[]) =>
  timestamps.map((timestamp) => {
    return `t${timestamp}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${
      timestamp - 3600
    }, timestamp_lt: ${timestamp + 600} }) {
      number
    }`
  })

const blocksQueryConstructor = (subqueries: string[]) => {
  return gql`query blocks {
    ${subqueries}
  }`
}

/**
 * @notice Fetches block objects for an array of timestamps.
 * @param {Array} timestamps
 */
export const getBlocksFromTimestamps = async (
  timestamps: number[],
  sortDirection: 'asc' | 'desc' = 'desc',
  skipCount = 500,
): Promise<Block[]> => {
  if (timestamps?.length === 0) {
    return []
  }

  const fetchedData: any = await multiQuery(
    blocksQueryConstructor,
    getBlockSubqueries(timestamps),
    BLOCKS_CLIENT,
    skipCount,
  )

  const sortingFunction =
    sortDirection === 'desc' ? (a: Block, b: Block) => b.number - a.number : (a: Block, b: Block) => a.number - b.number

  const blocks: Block[] = []
  if (fetchedData) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(fetchedData)) {
      if (fetchedData[key].length > 0) {
        blocks.push({
          timestamp: key.split('t')[1],
          number: parseInt(fetchedData[key][0].number, 10),
        })
      }
    }
    // graphql-request does not guarantee same ordering of batched requests subqueries, hence manual sorting
    blocks.sort(sortingFunction)
  }
  return blocks
}

/**
 * for a given array of timestamps, returns block entities
 * @param timestamps
 */
export const useBlocksFromTimestamps = (
  timestamps: number[],
  sortDirection: 'asc' | 'desc' = 'desc',
  skipCount = 1000,
): {
  blocks?: Block[]
  error: boolean
} => {
  const [blocks, setBlocks] = useState<Block[]>()
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBlocksFromTimestamps(timestamps, sortDirection, skipCount)
      if (result.length === 0) {
        setError(true)
      } else {
        setBlocks(result)
      }
    }
    if (!blocks && !error) {
      fetchData()
    }
  }) // TODO: dep array?

  return {
    blocks,
    error,
  }
}

/**
query blocks {    t1632795360:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: 1632795360, timestamp_lt: 1632795960 }) {      number    },t1632708960:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: 1632708960, timestamp_lt: 1632709560 }) {      number    },t1632276960:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: 1632276960, timestamp_lt: 1632277560 }) {      number    },t1631672160:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: 1631672160, timestamp_lt: 1631672760 }) {      number    }  }
 */

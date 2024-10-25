import ERC20_INTERFACE from 'constants/abis/erc20'
import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import priceContracts from 'constants/priceContracts'
import { useMulticallContract } from './useContract'

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_DNY: string
    }
  }
}

type yPantyPriceApiResponse = {
  /* eslint-disable camelcase */
  updated_at: string
  data: {
    name: string
    symbol: string
    price: string
    price_DNY: string
  }
}

export const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (multicallContract) {
          const { pantyAddress, busdAddress, bnbAddress, pantyBnbLpAddress, busdBnbLpAddress } = priceContracts;
          const calls = [
            [pantyAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [pantyBnbLpAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [pantyBnbLpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [busdBnbLpAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [busdBnbLpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [pantyAmount, bnbAmount1, busdAmount, bnbAmount2] = result.map(r => ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));

          const panty = new BigNumber(pantyAmount);
          const bnb1 = new BigNumber(bnbAmount1);
          const busd = new BigNumber(busdAmount);
          const bnb2 = new BigNumber(bnbAmount2);
          const pantyPrice = bnb1.div(panty).multipliedBy(busd.div(bnb2)).toNumber();

          setData(pantyPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export const useGetyPantyPrice = () => {
  const [data, setData] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setFetchError(null);

      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dynasty-coin&vs_currencies=usd');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const parsedData = await response.json();
        setData(parsedData['dynasty-coin'].usd); // Accessing the price directly
      } catch (error) {
        console.error('Unable to fetch yPanty price:', error);
        setFetchError('Unable to fetch yPanty price.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, fetchError };
};


/* export const useGetyPantyPrice = () => {
  const [data, setData] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const token = '0xe9e7cea3dedca5984780bafc599bd69add087d56'
      const response = await fetch(https://api.pancakeswap.info/api/v2/tokens/${token})
      const parsedData = (await response.json()) as yPantyPriceApiResponse
      setData(parseFloat(parsedData.data.price))
    }

    fetchData()
  }, [])

  return data
} */



export default useGetPriceData

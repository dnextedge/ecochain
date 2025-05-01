import { CoinGeckoAsset } from "@/types/api";

const COINGECKO_URLS = {
  ethereum: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=ethereum-ecosystem&order=market_cap_desc&per_page=30&page=1&sparkline=false",
  binance: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=binance-smart-chain&order=market_cap_desc&per_page=30&page=1&sparkline=false",
  solana: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-ecosystem&order=market_cap_desc&per_page=30&page=1&sparkline=false",
  cardano: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=cardano-ecosystem&order=market_cap_desc&per_page=30&page=1&sparkline=false",
  default: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
};

export async function fetchFromCoinGecko(): Promise<CoinGeckoAsset[]> {
  try {
    const fetchWithDelay = async (url: string, delay: number) => {
      await new Promise(resolve => setTimeout(resolve, delay));
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }
      
      return response.json();
    };

    const defaultData = await fetchWithDelay(COINGECKO_URLS.default, 0);
    const ethereumData = await fetchWithDelay(COINGECKO_URLS.ethereum, 300);
    const binanceData = await fetchWithDelay(COINGECKO_URLS.binance, 300);
    const solanaData = await fetchWithDelay(COINGECKO_URLS.solana, 300);
    const cardanoData = await fetchWithDelay(COINGECKO_URLS.cardano, 300);

    const ecosystemMaps: Record<string, Set<string>> = {
      ethereum: new Set(ethereumData.map((coin: CoinGeckoAsset) => coin.id)),
      binance: new Set(binanceData.map((coin: CoinGeckoAsset) => coin.id)),
      solana: new Set(solanaData.map((coin: CoinGeckoAsset) => coin.id)),
      cardano: new Set(cardanoData.map((coin: CoinGeckoAsset) => coin.id))
    };

    return defaultData.map((coin: CoinGeckoAsset) => {
      let chain = determineChain(coin, ecosystemMaps);
      return { ...coin, chain };
    });
  } catch (error) {
    console.error("CoinGecko API Error:", error);
    throw error;
  }
}

function determineChain(coin: CoinGeckoAsset, ecosystemMaps: Record<string, Set<string>>): string {
  if (ecosystemMaps.ethereum.has(coin.id)) return 'ethereum';
  if (ecosystemMaps.binance.has(coin.id)) return 'bnb';
  if (ecosystemMaps.solana.has(coin.id)) return 'solana';
  if (ecosystemMaps.cardano.has(coin.id)) return 'cardano';
  
  const pulseChainCoins = new Set(['pulsechain', 'pls', 'plsx', 'hex']);
  const renecCoins = new Set(['renec']);
  
  if (pulseChainCoins.has(coin.id.toLowerCase()) || coin.name.toLowerCase().includes('pulse')) {
    return 'pulsechain';
  }
  if (renecCoins.has(coin.id.toLowerCase()) || coin.name.toLowerCase().includes('renec')) {
    return 'renec';
  }
  
  return 'other';
}

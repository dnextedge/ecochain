
import { CoinGeckoAsset } from "@/types/api";

const COINPAPRIKA_BASE_URL = 'https://api.coinpaprika.com/v1';

export async function fetchFromCoinPaprika(): Promise<CoinGeckoAsset[]> {
  try {
    const response = await fetch(`${COINPAPRIKA_BASE_URL}/tickers?limit=20`);
    if (!response.ok) {
      throw new Error(`CoinPaprika API returned ${response.status}`);
    }
    const data = await response.json();
    
    return data.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol.toLowerCase(),
      name: coin.name,
      image: `https://static.coinpaprika.com/coin/${coin.id}/logo.png`,
      current_price: parseFloat(coin.quotes.USD.price),
      market_cap: parseFloat(coin.quotes.USD.market_cap),
      market_cap_rank: coin.rank,
      total_volume: parseFloat(coin.quotes.USD.volume_24h),
      price_change_percentage_24h: parseFloat(coin.quotes.USD.percent_change_24h),
      chain: determineChain(coin.id)
    }));
  } catch (error) {
    console.error("CoinPaprika API error:", error);
    throw error;
  }
}

function determineChain(coinId: string): string {
  const chainMap: Record<string, string[]> = {
    ethereum: ['eth-ethereum', 'usdt-tether', 'usdc-usd-coin'],
    bnb: ['bnb-binance-coin'],
    solana: ['sol-solana'],
    cardano: ['ada-cardano'],
    bitcoin: ['btc-bitcoin'],
    other: []
  };

  for (const [chain, ids] of Object.entries(chainMap)) {
    if (ids.includes(coinId)) {
      return chain;
    }
  }
  return 'other';
}


import { CoinGeckoAsset } from "@/types/api";
import { cryptoAssets } from "@/data/mockData";
import { fetchFromCoinGecko } from "./coinGeckoService";
import { fetchFromPulseChain } from "./pulsechainService";
import { fetchFromCoinPaprika } from "./coinPaprikaService";

export function mapMockDataToCoinGeckoFormat(): CoinGeckoAsset[] {
  return cryptoAssets.map((asset) => ({
    id: asset.id,
    symbol: asset.symbol.toLowerCase(),
    name: asset.name,
    image: asset.imageUrl,
    current_price: asset.price,
    market_cap: asset.marketCap,
    market_cap_rank: 0,
    total_volume: asset.volume24h,
    price_change_percentage_24h: asset.priceChange24h,
    chain: asset.chain
  }));
}

export async function fetchMarketData(chain?: string): Promise<CoinGeckoAsset[]> {
  if (chain === 'pulsechain') {
    return fetchFromPulseChain();
  }

  try {
    return await fetchFromCoinGecko();
  } catch (error) {
    console.log("CoinGecko API failed, trying CoinPaprika as fallback");
    try {
      return await fetchFromCoinPaprika();
    } catch (fallbackError) {
      console.error("All API attempts failed:", fallbackError);
      throw fallbackError;
    }
  }
}

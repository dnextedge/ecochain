
import { CoinGeckoAsset } from "@/types/api";

interface PulseCoinListToken {
  address: string;
  name: string;
  symbol: string;
  price: string;
  marketCap: string;
  volume24h: string;
  priceChange24h: string;
  logo?: string;
}

interface PulseScanToken {
  address: string;
  name: string;
  symbol: string;
  total_supply: string;
  type: string;
}

async function fetchFromPulseCoinList(): Promise<CoinGeckoAsset[]> {
  try {
    const response = await fetch('https://pulsecoinlist.com/api/v1/tokens');
    if (!response.ok) {
      throw new Error(`PulseCoinList API returned ${response.status}`);
    }
    const data = await response.json();
    return data.tokens.map((token: PulseCoinListToken) => ({
      id: token.address,
      symbol: token.symbol.toLowerCase(),
      name: token.name,
      image: token.logo || '',
      current_price: parseFloat(token.price) || 0,
      market_cap: parseFloat(token.marketCap) || 0,
      market_cap_rank: 0,
      total_volume: parseFloat(token.volume24h) || 0,
      price_change_percentage_24h: parseFloat(token.priceChange24h) || 0,
      chain: 'pulsechain'
    }));
  } catch (error) {
    console.error("PulseCoinList API error:", error);
    throw error;
  }
}

async function fetchFromPulseScan(): Promise<CoinGeckoAsset[]> {
  try {
    const response = await fetch('https://api.scan.pulsechain.com/api/v2/tokens');
    if (!response.ok) {
      throw new Error(`PulseChain API returned ${response.status}`);
    }
    const data = await response.json();
    return data.result
      .filter((token: PulseScanToken) => token.type === 'PRC20') // Only include PRC20 tokens
      .map((token: PulseScanToken) => ({
        id: token.address,
        symbol: token.symbol.toLowerCase(),
        name: token.name,
        image: '',
        current_price: 0,
        market_cap: 0,
        market_cap_rank: 0,
        total_volume: 0,
        price_change_percentage_24h: 0,
        chain: 'pulsechain'
    }));
  } catch (error) {
    console.error("PulseScan API error:", error);
    throw error;
  }
}

export async function fetchFromPulseChain(): Promise<CoinGeckoAsset[]> {
  try {
    // Try PulseCoinList first as it has more market data
    return await fetchFromPulseCoinList();
  } catch (error) {
    console.log("PulseCoinList API failed, trying PulseScan as fallback");
    try {
      return await fetchFromPulseScan();
    } catch (fallbackError) {
      console.error("All PulseChain API attempts failed:", fallbackError);
      throw fallbackError;
    }
  }
}


export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange24h: number;
  marketCap: number;
  volume24h: number;
  imageUrl: string;
  chain: string;
  ecosystem: string;
}

export interface ChainInfo {
  id: string;
  name: string;
  logo: string;
}

export interface EcosystemInfo {
  id: string;
  name: string;
  logo: string;
}

export interface MarketStat {
  label: string;
  value: string;
  change?: number;
}

export interface TradeOption {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
}

export interface StepGuide {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}


export interface P2PAdvertiser {
  id: string;
  name: string;
  orders: number;
  completionRate: number;
  verified?: boolean;
}

export interface P2POffer {
  id: string;
  advertiser: P2PAdvertiser;
  price: number;
  available: {
    min: number;
    max: number;
    currency: string;
  };
  fiat: {
    amount: number;
    currency: string;
  };
  limitMin: number;
  limitMax: number;
  paymentMethods: string[];
  asset: string;
  type: 'buy' | 'sell';
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export type FilterType = 'buy' | 'sell';
export type AssetType = 'USDT' | 'BTC' | 'BUSD' | 'ETH' | 'USDC' | 'BNB' | 'ADA' | 'SHIB' | 'DOGE' | 'TRX' | 'SOL' | 'XRP' | 'TON';

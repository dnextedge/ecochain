import { P2POffer, PaymentMethod } from "@/types/p2p";

export const paymentMethods: PaymentMethod[] = [
  { id: "bank_transfer", name: "Bank Transfer", icon: "credit-card" },
  { id: "paypal", name: "PayPal", icon: "wallet" },
  { id: "cash", name: "Cash Deposit", icon: "dollar-sign" },
  { id: "wire_transfer", name: "Wire Transfer", icon: "credit-card" },
];

export const p2pOffers: P2POffer[] = [
  {
    id: "1",
    advertiser: {
      id: "emp123",
      name: "Emirates_Trade",
      orders: 26,
      completionRate: 95.1,
      verified: true
    },
    price: 3.843,
    available: {
      min: 1000,
      max: 10000,
      currency: "USDT"
    },
    fiat: {
      amount: 72795.44,
      currency: "USDT"
    },
    limitMin: 1000,
    limitMax: 10000,
    paymentMethods: ["Bank Transfer"],
    asset: "AED",
    type: "buy"
  },
  {
    id: "2",
    advertiser: {
      id: "p2p123",
      name: "P2P_BZZZvni",
      orders: 54,
      completionRate: 100.0
    },
    price: 3.669,
    available: {
      min: 15999,
      max: 20000,
      currency: "USDT"
    },
    fiat: {
      amount: 5434.56,
      currency: "USDT"
    },
    limitMin: 15999,
    limitMax: 20000,
    paymentMethods: ["Bank Transfer"],
    asset: "AED",
    type: "buy"
  },
  {
    id: "3",
    advertiser: {
      id: "ninja123",
      name: "Ninja_P",
      orders: 123,
      completionRate: 99.99,
      verified: true
    },
    price: 3.674,
    available: {
      min: 100,
      max: 267,
      currency: "USDT"
    },
    fiat: {
      amount: 99.71,
      currency: "USDT"
    },
    limitMin: 100,
    limitMax: 267,
    paymentMethods: ["Bank Transfer", "Mobile Transfer"],
    asset: "AED",
    type: "buy"
  },
  {
    id: "4",
    advertiser: {
      id: "trader123",
      name: "Trader100115",
      orders: 13,
      completionRate: 100.0
    },
    price: 3.675,
    available: {
      min: 5000,
      max: 25000,
      currency: "USDT"
    },
    fiat: {
      amount: 46046.75,
      currency: "USDT"
    },
    limitMin: 5000,
    limitMax: 25000,
    paymentMethods: ["Bank Transfer"],
    asset: "AED",
    type: "buy"
  },
  {
    id: "5",
    advertiser: {
      id: "alric123",
      name: "Alric_Cam_mchung",
      orders: 119,
      completionRate: 97.61
    },
    price: 3.675,
    available: {
      min: 100,
      max: 1300,
      currency: "USDT"
    },
    fiat: {
      amount: 258.71,
      currency: "USDT"
    },
    limitMin: 100,
    limitMax: 1300,
    paymentMethods: ["Bank Transfer"],
    asset: "AED",
    type: "buy"
  },
  {
    id: "6",
    advertiser: {
      id: "alpha123",
      name: "ALPHA311IC",
      orders: 497,
      completionRate: 99.21,
      verified: true
    },
    price: 3.676,
    available: {
      min: 3000,
      max: 6495,
      currency: "USDT"
    },
    fiat: {
      amount: 1277.36,
      currency: "USDT"
    },
    limitMin: 3000,
    limitMax: 6495,
    paymentMethods: ["Bank Transfer"],
    asset: "AED",
    type: "buy"
  },
  {
    id: "7",
    advertiser: {
      id: "youan123",
      name: "YouanAU810184",
      orders: 46,
      completionRate: 98.91,
      verified: true
    },
    price: 3.677,
    available: {
      min: 20000,
      max: 21523,
      currency: "USDT"
    },
    fiat: {
      amount: 5.803,
      currency: "USDT"
    },
    limitMin: 20000,
    limitMax: 21523,
    paymentMethods: ["Bank Transfer"],
    asset: "AED",
    type: "buy"
  },
  {
    id: "8",
    advertiser: {
      id: "ohp2p123",
      name: "OH-P2P",
      orders: 472,
      completionRate: 99.53,
      verified: true
    },
    price: 3.677,
    available: {
      min: 5000,
      max: 72368,
      currency: "USDT"
    },
    fiat: {
      amount: 6264.05,
      currency: "USDT"
    },
    limitMin: 5000,
    limitMax: 72368,
    paymentMethods: ["Bank Transfer"],
    asset: "AED",
    type: "buy"
  },
];

export const faqs = [
  {
    question: "What is P2P exchange?",
    answer: "P2P (Peer-to-Peer) exchange is a marketplace where users can trade cryptocurrencies directly with each other using various payment methods, without the need for an intermediary."
  },
  {
    question: "Which cryptocurrencies are supported in the P2P trade zone?",
    answer: "Currently, we support trading of popular cryptocurrencies like BTC, ETH, USDT, BNB, BUSD, and more in our P2P marketplace."
  },
  {
    question: "How do I add new payment methods on P2P?",
    answer: "To add a new payment method, go to your P2P profile settings, click on 'Payment Methods', and then select 'Add Payment Method'. Follow the instructions to complete the setup."
  },
  {
    question: "How do I buy Bitcoin locally on P2P?",
    answer: "You can buy Bitcoin locally by selecting your preferred payment method, finding a seller with favorable terms, and completing the transaction through our secure escrow system."
  },
  {
    question: "Why is P2P better than other P2P marketplaces?",
    answer: "Our P2P platform offers enhanced security, a wide range of payment methods, competitive rates, and a user-friendly interface, making it a preferred choice for traders worldwide."
  },
  {
    question: "How do I protect myself against fraud? P2P Escrow FTW!",
    answer: "Our escrow system holds the cryptocurrency until both parties confirm the transaction is complete, providing protection against fraud. Always trade within our platform and never share sensitive information outside."
  },
  {
    question: "P2P user transaction policy",
    answer: "Our P2P transaction policy ensures fair trading practices. Users must complete transactions within the allocated time, communicate honestly, and follow our community guidelines to maintain a safe trading environment."
  }
];

export const p2pWorkSteps = [
  {
    id: 1,
    title: "Place an Order",
    description: "Choose from the best offers available to buy and sell. Select a preferred payment method."
  },
  {
    id: 2,
    title: "Pay the Seller",
    description: "Make payment to the seller via the selected payment method. Once payment is confirmed, the exchange will occur."
  },
  {
    id: 3,
    title: "Receive Crypto",
    description: "Once the seller confirms receipt of payment, the purchased crypto will be released to you."
  }
];

export const p2pAdvantages = [
  {
    id: 1,
    title: "P2P Trading",
    description: "Trusted by millions of users worldwide, our P2P Trading provides a safe platform to buy and sell crypto directly with other users, while setting their own price and payment methods in an open crypto marketplace."
  },
  {
    id: 2,
    title: "Transfers with specific bank",
    description: "Trade directly with users who have accounts at your bank for faster transfers and reduced fees."
  },
  {
    id: 3,
    title: "Cash Deposit to Bank",
    description: "Make cash deposits directly to a seller's bank account for quick and convenient transactions."
  }
];

export const P2P_BLOCKCHAINS = [
  { id: "all", label: "All Blockchains" },
  { id: "ethereum", label: "Ethereum" },
  { id: "bsc", label: "Binance Smart Chain" },
  { id: "solana", label: "Solana" },
  { id: "tron", label: "Tron" },
  { id: "polygon", label: "Polygon" },
  { id: "pulsechain", label: "Pulsechain" },
  { id: "renec", label: "RENEC" }
];

export const ASSET_BLOCKCHAIN_MAP: Record<string, string[]> = {
  USDT: ["ethereum", "bsc", "tron", "polygon", "solana", "pulsechain", "renec"],
  BTC: ["bitcoin", "bsc", "ethereum", "pulsechain"],
  BUSD: ["bsc", "ethereum", "pulsechain"],
  ETH: ["ethereum", "bsc", "polygon", "pulsechain"],
  USDC: ["ethereum", "bsc", "solana", "polygon", "pulsechain", "renec"],
  BNB: ["bsc", "binance", "pulsechain"],
  ADA: ["ethereum", "bsc", "pulsechain"],
  SHIB: ["ethereum", "bsc", "pulsechain"],
  DOGE: ["ethereum", "bsc", "pulsechain"],
  TRX: ["tron", "pulsechain"],
  SOL: ["solana", "pulsechain"],
  XRP: ["ethereum", "bsc", "pulsechain"],
  TON: ["ethereum", "pulsechain", "renec"]
};

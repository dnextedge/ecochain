import {
  CryptoAsset,
  ChainInfo,
  EcosystemInfo,
  MarketStat,
  TradeOption,
  FAQ,
  Testimonial,
  StepGuide,
  Partner,
} from "../types/crypto";

export const cryptoAssets: CryptoAsset[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 61245.32,
    priceChange24h: 2.34,
    marketCap: 1198765432198,
    volume24h: 28765432198,
    imageUrl: "/assets/coins/btc.svg",
    chain: "bitcoin",
    ecosystem: "bitcoin",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3276.48,
    priceChange24h: 1.56,
    marketCap: 398765432198,
    volume24h: 12765432198,
    imageUrl: "/assets/coins/eth.svg",
    chain: "ethereum",
    ecosystem: "ethereum",
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    price: 576.12,
    priceChange24h: -0.43,
    marketCap: 98765432198,
    volume24h: 2765432198,
    imageUrl: "/assets/coins/bnb.svg",
    chain: "bnb",
    ecosystem: "binance",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 143.87,
    priceChange24h: 5.32,
    marketCap: 58765432198,
    volume24h: 3765432198,
    imageUrl: "/assets/coins/sol.svg",
    chain: "solana",
    ecosystem: "solana",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.58,
    priceChange24h: -1.25,
    marketCap: 18765432198,
    volume24h: 965432198,
    imageUrl: "/assets/coins/ada.svg",
    chain: "cardano",
    ecosystem: "cardano",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    price: 7.32,
    priceChange24h: 0.89,
    marketCap: 8765432198,
    volume24h: 565432198,
    imageUrl: "/assets/coins/dot.svg",
    chain: "polkadot",
    ecosystem: "polkadot",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.1423,
    priceChange24h: 12.87,
    marketCap: 18765432198,
    volume24h: 4765432198,
    imageUrl: "/assets/coins/doge.svg",
    chain: "dogecoin",
    ecosystem: "meme",
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    price: 0.5632,
    priceChange24h: -0.58,
    marketCap: 28765432198,
    volume24h: 1765432198,
    imageUrl: "/assets/coins/xrp.svg",
    chain: "xrp",
    ecosystem: "ripple",
  },
  {
    id: "avalanche",
    name: "Avalanche",
    symbol: "AVAX",
    price: 36.87,
    priceChange24h: 3.12,
    marketCap: 12765432198,
    volume24h: 965432198,
    imageUrl: "/assets/coins/avax.svg",
    chain: "avalanche",
    ecosystem: "avalanche",
  },
  {
    id: "uniswap",
    name: "Uniswap",
    symbol: "UNI",
    price: 9.65,
    priceChange24h: 0.43,
    marketCap: 5765432198,
    volume24h: 465432198,
    imageUrl: "/assets/coins/uni.svg",
    chain: "ethereum",
    ecosystem: "defi",
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    price: 14.32,
    priceChange24h: 2.11,
    marketCap: 7765432198,
    volume24h: 565432198,
    imageUrl: "/assets/coins/link.svg",
    chain: "ethereum",
    ecosystem: "oracle",
  },
  {
    id: "usdt",
    name: "Tether",
    symbol: "USDT",
    price: 1.0001,
    priceChange24h: 0.01,
    marketCap: 87654321980,
    volume24h: 52765432198,
    imageUrl: "/assets/coins/usdt.svg",
    chain: "multichain",
    ecosystem: "stablecoin",
  },
];

export const chains: ChainInfo[] = [
  { id: "all", name: "All Chains", logo: "/assets/chains/all.svg" },
  { id: "bitcoin", name: "Bitcoin", logo: "/assets/chains/bitcoin.svg" },
  { id: "ethereum", name: "Ethereum", logo: "/assets/chains/ethereum.svg" },
  { id: "bnb", name: "BNB Chain", logo: "/assets/chains/bnb.svg" },
  { id: "solana", name: "Solana", logo: "/assets/chains/solana.svg" },
  { id: "cardano", name: "Cardano", logo: "/assets/chains/cardano.svg" },
  { id: "polkadot", name: "Polkadot", logo: "/assets/chains/polkadot.svg" },
  { id: "avalanche", name: "Avalanche", logo: "/assets/chains/avalanche.svg" },
  {
    id: "multichain",
    name: "Multi-Chain",
    logo: "/assets/chains/multichain.svg",
  },
  {
    id: "pulsechain",
    name: "Pulsechain",
    logo: "https://cryptologos.cc/logos/pulsechain-pulse-logo.png?v=032",
  },
  {
    id: "renec",
    name: "RENEC",
    logo: "https://cryptologos.cc/logos/renec-renec-logo.png?v=032",
  },
];

export const ecosystems: EcosystemInfo[] = [
  { id: "all", name: "All Ecosystems", logo: "/assets/ecosystems/all.svg" },
  { id: "defi", name: "DeFi", logo: "/assets/ecosystems/defi.svg" },
  {
    id: "stablecoin",
    name: "Stablecoins",
    logo: "/assets/ecosystems/stablecoin.svg",
  },
  { id: "gaming", name: "Gaming", logo: "/assets/ecosystems/gaming.svg" },
  { id: "nft", name: "NFTs", logo: "/assets/ecosystems/nft.svg" },
  { id: "meme", name: "Meme", logo: "/assets/ecosystems/meme.svg" },
  { id: "oracle", name: "Oracle", logo: "/assets/ecosystems/oracle.svg" },
];

export const marketStats: MarketStat[] = [
  { label: "Market Cap", value: "$1.23T", change: -1.2 },
  { label: "24h Volume", value: "$98.7B", change: 5.8 },
  { label: "BTC Dominance", value: "42.3%", change: 0.5 },
  { label: "Active Cryptocurrencies", value: "12,651" },
];

export const tradeOptions: TradeOption[] = [
  {
    id: "spot",
    name: "Spot Trading",
    description:
      "Buy and sell cryptocurrencies directly at current market prices",
    icon: "chart-line",
  },
  {
    id: "margin",
    name: "Margin Trading",
    description: "Trade with leverage to amplify your potential profits",
    icon: "trending-up",
  },
  {
    id: "etf",
    name: "Crypto ETFs",
    description: "Diversified crypto baskets for reduced risk exposure",
    icon: "wallet",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How to start trading on EcoChain?",
    answer:
      "To start trading on EcoChain, create an account, complete verification, deposit funds, and begin trading by selecting a cryptocurrency pair and placing an order.",
  },
  {
    question: "What trading fees does EcoChain charge?",
    answer:
      "EcoChain charges a competitive fee structure with maker fees at 0.1% and taker fees at 0.15%. Higher trading volumes qualify for reduced fee tiers.",
  },
  {
    question: "Is KYC verification required?",
    answer:
      "Yes, KYC verification is required to comply with regulatory standards. Basic verification allows limited trading, while full verification provides access to all features and higher withdrawal limits.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "EcoChain supports multiple payment methods including bank transfers, credit/debit cards, and cryptocurrency deposits from external wallets.",
  },
  {
    question: "Is my cryptocurrency safe on EcoChain?",
    answer:
      "EcoChain employs industry-leading security measures including cold storage for majority of assets, regular security audits, 2FA, and insurance for digital assets.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    role: "Crypto Analyst",
    company: "BlockView Research",
    content:
      "EcoChain offers the most intuitive trading interface I've used. The cross-chain trading capability sets it apart from competitors.",
  },
  {
    id: "2",
    author: "Michael Chen",
    role: "Founder",
    company: "DeFi Ventures",
    content:
      "The ecosystem filtering feature helps me quickly identify promising projects across different blockchains. A game-changer for portfolio building.",
  },
  {
    id: "3",
    author: "Elena Rodriguez",
    role: "Retail Investor",
    company: "",
    content:
      "As a newcomer to crypto, EcoChain made it easy to understand different blockchains and start trading. The educational resources are excellent.",
  },
];

export const steps: StepGuide[] = [
  {
    id: 1,
    title: "Create Account",
    description:
      "Sign up for a free account to access all features and start your crypto journey.",
    icon: "user",
  },
  {
    id: 2,
    title: "Deposit Funds",
    description:
      "Easily deposit funds via bank transfer, credit card, or crypto transfer.",
    icon: "credit-card",
  },
  {
    id: 3,
    title: "Start Trading",
    description:
      "Buy, sell and trade over 300+ cryptocurrencies with competitive fees.",
    icon: "exchange",
  },
];

export const partners: Partner[] = [
  {
    id: "1",
    name: "Chainlink",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=032",
  },
  {
    id: "2",
    name: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=032",
  },
  {
    id: "3",
    name: "Binance",
    logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=032",
  },
  {
    id: "4",
    name: "Avalanche",
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=032",
  },
  {
    id: "5",
    name: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032",
  },
  {
    id: "6",
    name: "Pulsechain",
    logo: "https://cryptologos.cc/logos/pulsechain-pulse-logo.png?v=032",
  },
  {
    id: "7",
    name: "RENEC",
    logo: "https://cryptologos.cc/logos/renec-renec-logo.png?v=032",
  },
];

export const priceHistoryData = [
  { date: "2023-01", price: 16500 },
  { date: "2023-02", price: 21000 },
  { date: "2023-03", price: 28000 },
  { date: "2023-04", price: 26000 },
  { date: "2023-05", price: 27000 },
  { date: "2023-06", price: 30000 },
  { date: "2023-07", price: 29500 },
  { date: "2023-08", price: 32000 },
  { date: "2023-09", price: 35000 },
  { date: "2023-10", price: 34000 },
  { date: "2023-11", price: 37000 },
  { date: "2023-12", price: 42000 },
  { date: "2024-01", price: 45000 },
  { date: "2024-02", price: 51000 },
  { date: "2024-03", price: 58000 },
  { date: "2024-04", price: 61000 },
];

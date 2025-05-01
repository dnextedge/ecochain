
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChainInfo } from "@/types/crypto";

interface MarketChainTabsProps {
  chains: ChainInfo[];
  active: string;
  setActive: (v: string) => void;
}

const relevantChains = [
  "all",
  "bitcoin",
  "ethereum",
  "bnb",
  "solana",
  "cardano",
  "pulsechain",
  "renec",
  "multichain",
];

export default function MarketChainTabs({ chains, active, setActive }: MarketChainTabsProps) {
  return (
    <TabsList className="bg-secondary/50 p-1 overflow-x-auto">
      {chains
        .filter(chain => relevantChains.includes(chain.id))
        .map(chain => (
          <TabsTrigger
            key={chain.id}
            value={chain.id}
            onClick={() => setActive(chain.id)}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {chain.name}
          </TabsTrigger>
        ))}
    </TabsList>
  );
}

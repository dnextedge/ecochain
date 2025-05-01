
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EcosystemInfo } from "@/types/crypto";

interface MarketEcosystemTabsProps {
  ecosystems: EcosystemInfo[];
  active: string;
  setActive: (v: string) => void;
}

export default function MarketEcosystemTabs({ ecosystems, active, setActive }: MarketEcosystemTabsProps) {
  return (
    <TabsList className="bg-secondary/50 p-1">
      {ecosystems.slice(0, 5).map((eco) => (
        <TabsTrigger
          key={eco.id}
          value={eco.id}
          onClick={() => setActive(eco.id)}
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          {eco.name}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}

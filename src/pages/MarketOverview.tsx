
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cryptoAssets, chains, ecosystems } from "@/data/mockData";
import { CryptoAsset, ChainInfo, EcosystemInfo } from "@/types/crypto";
import { formatCurrency, formatPercentage, formatMarketCap } from "@/utils/formatters";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const MarketOverview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChain, setSelectedChain] = useState<string>("all");
  const [selectedEcosystem, setSelectedEcosystem] = useState<string>("all");
  const [currentTab, setCurrentTab] = useState<string>("all");

  // Filter and search logic
  const filteredAssets = cryptoAssets.filter(asset => {
    const matchesSearch = searchQuery === "" || 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesChain = selectedChain === "all" || asset.chain === selectedChain;
    const matchesEcosystem = selectedEcosystem === "all" || asset.ecosystem === selectedEcosystem;
    
    if (currentTab === "all") {
      return matchesSearch && matchesChain && matchesEcosystem;
    } else if (currentTab === "chains") {
      return matchesSearch && matchesChain;
    } else if (currentTab === "ecosystems") {
      return matchesSearch && matchesEcosystem;
    }
    
    return false;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-2">Market Overview</h1>
          <p className="text-muted-foreground mb-8">
            Explore cryptocurrencies by chain, ecosystem, or search for specific tokens
          </p>
          
          <div className="mb-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search by name or symbol"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Tabs defaultValue="all" onValueChange={setCurrentTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Assets</TabsTrigger>
              <TabsTrigger value="chains">By Chain</TabsTrigger>
              <TabsTrigger value="ecosystems">By Ecosystem</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="overflow-x-auto">
                <MarketTable 
                  assets={filteredAssets} 
                />
              </div>
            </TabsContent>
            
            <TabsContent value="chains">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                {chains.map((chain) => (
                  <ChainCard 
                    key={chain.id} 
                    chain={chain} 
                    isSelected={selectedChain === chain.id} 
                    onClick={() => setSelectedChain(chain.id)} 
                  />
                ))}
              </div>
              <div className="overflow-x-auto">
                <MarketTable 
                  assets={filteredAssets} 
                />
              </div>
            </TabsContent>
            
            <TabsContent value="ecosystems">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                {ecosystems.map((eco) => (
                  <EcosystemCard 
                    key={eco.id} 
                    ecosystem={eco} 
                    isSelected={selectedEcosystem === eco.id} 
                    onClick={() => setSelectedEcosystem(eco.id)} 
                  />
                ))}
              </div>
              <div className="overflow-x-auto">
                <MarketTable 
                  assets={filteredAssets} 
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Chain selection card
const ChainCard = ({ chain, isSelected, onClick }: { chain: ChainInfo; isSelected: boolean; onClick: () => void }) => (
  <div 
    className={`p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'}`}
    onClick={onClick}
  >
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
        {chain.name.charAt(0)}
      </div>
      <div className="font-medium">{chain.name}</div>
    </div>
  </div>
);

// Ecosystem selection card
const EcosystemCard = ({ ecosystem, isSelected, onClick }: { ecosystem: EcosystemInfo; isSelected: boolean; onClick: () => void }) => (
  <div 
    className={`p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'}`}
    onClick={onClick}
  >
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
        {ecosystem.name.charAt(0)}
      </div>
      <div className="font-medium">{ecosystem.name}</div>
    </div>
  </div>
);

// Market table component
const MarketTable = ({ assets }: { assets: CryptoAsset[] }) => (
  <Table>
    <TableHeader>
      <TableRow className="bg-secondary/30">
        <TableHead className="w-[50px]">#</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className="text-right">24h Change</TableHead>
        <TableHead className="text-right">Market Cap</TableHead>
        <TableHead className="text-right">Volume (24h)</TableHead>
        <TableHead>Chain</TableHead>
        <TableHead>Ecosystem</TableHead>
        <TableHead className="text-right"></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {assets.length > 0 ? (
        assets.map((asset, index) => (
          <TableRow key={asset.id} className="hover:bg-secondary/20">
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <div className="w-8 h-8 mr-3 rounded-full bg-secondary flex items-center justify-center">
                  {asset.symbol.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{asset.name}</div>
                  <div className="text-muted-foreground text-sm">{asset.symbol}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium">{formatCurrency(asset.price)}</TableCell>
            <TableCell className={`text-right ${asset.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatPercentage(asset.priceChange24h / 100)}
            </TableCell>
            <TableCell className="text-right text-muted-foreground">
              {formatMarketCap(asset.marketCap)}
            </TableCell>
            <TableCell className="text-right text-muted-foreground">
              {formatMarketCap(asset.volume24h)}
            </TableCell>
            <TableCell>
              <div className="px-2 py-1 rounded bg-secondary/40 text-xs inline-block">
                {asset.chain.charAt(0).toUpperCase() + asset.chain.slice(1)}
              </div>
            </TableCell>
            <TableCell>
              <div className="px-2 py-1 rounded bg-secondary/40 text-xs inline-block">
                {asset.ecosystem.charAt(0).toUpperCase() + asset.ecosystem.slice(1)}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Button size="sm" variant="outline" asChild>
                <Link to={`/trade/spot/${asset.symbol}USDT`}>Trade</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
            No assets found matching your filters
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default MarketOverview;

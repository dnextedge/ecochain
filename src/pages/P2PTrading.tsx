
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { P2PNavigation } from "@/components/p2p/P2PNavigation";
import { AssetFilter } from "@/components/p2p/AssetFilter";
import { TradeTypeFilter } from "@/components/p2p/TradeTypeFilter";
import { TransactionFilter } from "@/components/p2p/TransactionFilter";
import { P2POfferTable } from "@/components/p2p/P2POfferTable";
import { P2PWorksSection } from "@/components/p2p/P2PWorksSection";
import { P2PAdvantagesSection } from "@/components/p2p/P2PAdvantagesSection";
import { P2PFAQSection } from "@/components/p2p/P2PFAQSection";
import { p2pOffers } from "@/data/p2pData";
import { AssetType, FilterType } from "@/types/p2p";
import { P2P_BLOCKCHAINS, ASSET_BLOCKCHAIN_MAP } from "@/data/p2pData";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

const P2PTrading = () => {
  const [filterType, setFilterType] = useState<FilterType>("buy");
  const [selectedAsset, setSelectedAsset] = useState<AssetType>("USDT");
  // change default selectedCurrency from "AED" to "NGN"
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [paymentMethod, setPaymentMethod] = useState("All payments");
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>("all");

  // Get label for selected blockchain
  const selectedBlockchainLabel = React.useMemo(() => {
    const blockchainObj = P2P_BLOCKCHAINS.find(chain => chain.id === selectedBlockchain);
    return blockchainObj ? blockchainObj.label : "All Blockchains";
  }, [selectedBlockchain]);

  // Filter assets: only show assets supported by selected blockchain, or all if 'all'
  const filteredAssets = React.useMemo(() => {
    if (selectedBlockchain === "all") return [
      "USDT", "BTC", "BUSD", "ETH", "USDC", "BNB", "ADA", "SHIB", "DOGE", "TRX", "SOL", "XRP", "TON"
    ] as AssetType[];
    
    return Object.entries(ASSET_BLOCKCHAIN_MAP)
      .filter(([asset, chains]) => chains.includes(selectedBlockchain))
      .map(([asset]) => asset as AssetType);
  }, [selectedBlockchain]);

  // Filter offers by asset, blockchain and type (buy/sell)
  const filteredOffers = p2pOffers.filter(offer => {
    if (offer.type !== filterType) return false;
    if (!filteredAssets.includes(offer.available.currency as AssetType)) return false;
    // Filter offers by selected asset
    if (selectedAsset && offer.available.currency !== selectedAsset) return false;
    return true;
  });

  // If selected asset not available for blockchain, pick first available
  React.useEffect(() => {
    if (!filteredAssets.includes(selectedAsset)) {
      setSelectedAsset(filteredAssets[0]);
    }
  }, [selectedBlockchain]); // eslint-disable-line

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <P2PNavigation activeTab="P2P" />
          
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <TradeTypeFilter 
                selectedType={filterType} 
                onTypeChange={setFilterType} 
              />
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">P2P Help Center</span>
                  <Button variant="outline" size="sm">
                    KYC Required
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <AssetFilter 
                selectedAsset={selectedAsset} 
                onAssetChange={setSelectedAsset} 
                assets={filteredAssets}
              />
              <div className="min-w-[200px]">
                <Select
                  value={selectedBlockchain}
                  onValueChange={setSelectedBlockchain}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Blockchain" />
                  </SelectTrigger>
                  <SelectContent>
                    {P2P_BLOCKCHAINS.map(chain =>
                      <SelectItem key={chain.id} value={chain.id}>{chain.label}</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <TransactionFilter 
            selectedCurrency={selectedCurrency}
            onCurrencyChange={setSelectedCurrency}
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
          />
          
          <P2POfferTable 
            offers={filteredOffers} 
            filterType={filterType}
            selectedBlockchainLabel={selectedBlockchainLabel}
          />
          
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                3
              </Button>
              <span>...</span>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                8
              </Button>
            </div>
          </div>
        </div>
        
        <P2PWorksSection />
        <P2PAdvantagesSection />
        <P2PFAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default P2PTrading;

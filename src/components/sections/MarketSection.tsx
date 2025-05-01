import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { chains, ecosystems } from "@/data/mockData";
import MarketChainTabs from "./MarketChainTabs";
import MarketEcosystemTabs from "./MarketEcosystemTabs";
import MarketAssetTable from "./MarketAssetTable";
import { useCryptoMarketData } from "@/hooks/useCryptoMarketData";
import { CryptoAsset } from "@/types/crypto";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const mapCoinGeckoToCryptoAsset = (
  cg: any
): CryptoAsset => ({
  id: cg.id,
  name: cg.name,
  symbol: cg.symbol.toUpperCase(),
  price: cg.current_price,
  priceChange24h: cg.price_change_percentage_24h,
  marketCap: cg.market_cap,
  volume24h: cg.total_volume,
  imageUrl: cg.image,
  chain: cg.chain || 'other',
  ecosystem: "all",
});

const PAGE_SIZE = 10;

export default function MarketSection() {
  const [filterChain, setFilterChain] = useState("all");
  const [filterEcosystem, setFilterEcosystem] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error, isError } = useCryptoMarketData(
    filterChain === 'all' ? undefined : filterChain
  );

  let assets: CryptoAsset[] = [];
  if (data) {
    assets = data.map(mapCoinGeckoToCryptoAsset);
  }

  const filteredAssets = assets.filter((asset) => {
    // Handle specific chain filtering
    return filterChain === "all" || asset.chain === filterChain;
  });

  const totalAssets = filteredAssets.length;
  const totalPages = Math.ceil(totalAssets / PAGE_SIZE);
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));
  const paginatedAssets = filteredAssets.slice(
    (safeCurrentPage - 1) * PAGE_SIZE,
    safeCurrentPage * PAGE_SIZE
  );

  function handleChainChange(chain: string) {
    setFilterChain(chain);
    setCurrentPage(1);
  }
  function handleEcosystemChange(ecosystem: string) {
    setFilterEcosystem(ecosystem);
    setCurrentPage(1);
  }
  function handlePageChange(page: number) {
    setCurrentPage(page);
  }
  function handlePrev() {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }
  function handleNext() {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  }

  function renderPagination() {
    if (totalPages <= 1) return null;

    let pageNumbers: (number | string)[] = [];
    if (totalPages <= 5) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (safeCurrentPage <= 3) {
        pageNumbers = [1, 2, 3, "...", totalPages];
      } else if (safeCurrentPage >= totalPages - 2) {
        pageNumbers = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pageNumbers = [1, "...", safeCurrentPage, "...", totalPages];
      }
    }

    return (
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrev}
              className={safeCurrentPage === 1 ? "pointer-events-none opacity-50" : ""}
              tabIndex={safeCurrentPage === 1 ? -1 : 0}
            />
          </PaginationItem>
          {pageNumbers.map((num, idx) => (
            <PaginationItem key={idx}>
              {typeof num === "number" ? (
                <PaginationLink
                  isActive={num === safeCurrentPage}
                  onClick={() => handlePageChange(num)}
                  tabIndex={0}
                >
                  {num}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={safeCurrentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              tabIndex={safeCurrentPage === totalPages ? -1 : 0}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Crypto Market Today</h2>
          <Button variant="outline" size="sm" asChild>
            <a href="/markets">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="space-y-6">
          <Tabs defaultValue="all" value={filterChain} className="w-full" onValueChange={handleChainChange}>
            <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
              <div>
                <h3 className="text-sm text-muted-foreground mb-2">Filter by Chain</h3>
                <MarketChainTabs
                  chains={chains}
                  active={filterChain}
                  setActive={handleChainChange}
                />
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-2">Filter by Ecosystem</h3>
                <MarketEcosystemTabs
                  ecosystems={ecosystems}
                  active={filterEcosystem}
                  setActive={handleEcosystemChange}
                />
              </div>
            </div>
            
            {isError && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>API Error</AlertTitle>
                <AlertDescription>
                  Failed to load market data. Showing static data.
                  {error instanceof Error ? <div className="text-sm opacity-70">{error.message}</div> : null}
                </AlertDescription>
              </Alert>
            )}
            
            {isLoading ? (
              <div className="py-20 text-center text-muted-foreground">Loading live crypto market data…</div>
            ) : (
              <>
                <MarketAssetTable 
                  assets={paginatedAssets} 
                  filterChain={filterChain} 
                  pageOffset={(safeCurrentPage - 1) * PAGE_SIZE} 
                />
                {renderPagination()}
              </>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

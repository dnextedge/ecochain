
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MarketAssetRow from "./MarketAssetRow";
import { CryptoAsset } from "@/types/crypto";

interface MarketAssetTableProps {
  assets: CryptoAsset[];
  filterChain: string;
  pageOffset?: number; // for correct row numbers in pagination
}

export default function MarketAssetTable({ assets, filterChain, pageOffset = 0 }: MarketAssetTableProps) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary/30">
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">24h Change</TableHead>
            <TableHead className="text-right">Market Cap</TableHead>
            <TableHead className="text-right">Volume (24h)</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset, index) => (
            <MarketAssetRow key={asset.id} asset={asset} index={pageOffset + index} />
          ))}
        </TableBody>
      </Table>
      {assets.length === 0 && (
        <div className="py-10 text-center text-muted-foreground">
          No assets found for this blockchain.
        </div>
      )}
    </div>
  );
}


import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { CryptoAsset } from "@/types/crypto";
import { formatCurrency, formatPercentage, formatMarketCap } from "@/utils/formatters";

interface MarketAssetRowProps {
  asset: CryptoAsset;
  index: number;
}

export default function MarketAssetRow({ asset, index }: MarketAssetRowProps) {
  return (
    <TableRow className="hover:bg-secondary/20">
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
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
              Trade
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="z-50 min-w-[150px]">
            <DropdownMenuItem asChild>
              <Link to={`/trade/spot/${asset.symbol}USDT`}>Spot</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/trade/p2p">P2P</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

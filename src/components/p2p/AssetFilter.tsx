
import React from "react";
import { cn } from "@/lib/utils";
import { AssetType } from "@/types/p2p";

interface AssetFilterProps {
  selectedAsset: AssetType;
  onAssetChange: (asset: AssetType) => void;
  assets?: AssetType[]; // add prop
}

export function AssetFilter({ selectedAsset, onAssetChange, assets }: AssetFilterProps) {
  const allAssets: AssetType[] = ["USDT", "BTC", "BUSD", "ETH", "USDC", "BNB", "ADA", "SHIB", "DOGE", "TRX", "SOL", "XRP", "TON"];
  const visibleAssets: AssetType[] = assets && assets.length ? assets : allAssets;
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin">
      {visibleAssets.map((asset) => (
        <button
          key={asset}
          onClick={() => onAssetChange(asset)}
          className={cn(
            "px-3 py-1 text-sm font-medium rounded-md whitespace-nowrap",
            selectedAsset === asset
              ? "bg-primary text-primary-foreground"
              : "bg-background text-foreground hover:bg-muted"
          )}
        >
          {asset}
        </button>
      ))}
    </div>
  );
}

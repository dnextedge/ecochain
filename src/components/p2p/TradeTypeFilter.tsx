
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FilterType } from "@/types/p2p";

interface TradeTypeFilterProps {
  selectedType: FilterType;
  onTypeChange: (type: FilterType) => void;
}

export function TradeTypeFilter({ selectedType, onTypeChange }: TradeTypeFilterProps) {
  return (
    <div className="flex rounded-md overflow-hidden border border-border">
      <Button
        onClick={() => onTypeChange("buy")}
        variant="ghost"
        className={cn(
          "rounded-none border-r border-border px-6",
          selectedType === "buy" && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Buy
      </Button>
      <Button
        onClick={() => onTypeChange("sell")}
        variant="ghost"
        className={cn(
          "rounded-none px-6",
          selectedType === "sell" && "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
      >
        Sell
      </Button>
    </div>
  );
}


import React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { P2POffer } from "@/types/p2p";
import { formatCurrency } from "@/utils/formatters";
import { CheckCircle2, User } from "lucide-react";

interface P2POfferTableProps {
  offers: P2POffer[];
  filterType: 'buy' | 'sell';
  selectedBlockchainLabel: string;
}

export function P2POfferTable({ offers, filterType, selectedBlockchainLabel }: P2POfferTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[250px]">Advertiser</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Available/Limit</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Blockchain Selected</TableHead>
            <TableHead className="text-right">Trade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offers.map((offer, index) => (
            <TableRow key={offer.id} className="hover:bg-muted/30">
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{offer.advertiser.name}</span>
                      {offer.advertiser.verified && (
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground gap-2">
                      <span>{offer.advertiser.orders} orders</span>
                      <span>·</span>
                      <span className="text-green-500">{offer.advertiser.completionRate}% completion</span>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold">{formatCurrency(offer.price, offer.asset)}</div>
                <div className="text-xs text-muted-foreground">{formatCurrency(offer.fiat.amount, offer.fiat.currency)}</div>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  {formatCurrency(offer.available.min, offer.available.currency, 0)} - {formatCurrency(offer.available.max, offer.available.currency, 0)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatCurrency(offer.limitMin, offer.asset, 0)} - {formatCurrency(offer.limitMax, offer.asset, 0)}
                </div>
              </TableCell>
              <TableCell>
                {offer.paymentMethods.map((method, i) => (
                  <div key={i} className="text-sm">
                    {method}
                  </div>
                ))}
              </TableCell>
              <TableCell>
                <span className="block text-sm">{selectedBlockchainLabel}</span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center gap-2 justify-end">
                  <Button className="bg-[#0FA0CE] hover:bg-[#1EAEDB]">
                    {filterType === "buy" ? "Buy USDT" : "Sell USDT"}
                  </Button>
                </div>
                {index === 0 && (
                  <div className="mt-2 text-xs text-green-500 flex justify-end items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Express Verification
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

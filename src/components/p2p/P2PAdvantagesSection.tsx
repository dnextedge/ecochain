
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, Wallet } from "lucide-react";
import { p2pAdvantages } from "@/data/p2pData";

export function P2PAdvantagesSection() {
  const icons = [
    <Wallet className="h-12 w-12 text-primary" />,
    <CreditCard className="h-12 w-12 text-primary" />,
    <DollarSign className="h-12 w-12 text-primary" />
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Advantages of P2P Exchange</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {p2pAdvantages.map((advantage, index) => (
            <Card key={advantage.id} className="border border-border bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                {icons[index]}
                <CardTitle>{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

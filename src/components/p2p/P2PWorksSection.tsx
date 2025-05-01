
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, DollarSign, Wallet } from "lucide-react";
import { p2pWorkSteps } from "@/data/p2pData";

export function P2PWorksSection() {
  const icons = [
    <CheckCircle className="h-12 w-12 text-primary" />,
    <DollarSign className="h-12 w-12 text-primary" />,
    <Wallet className="h-12 w-12 text-primary" />
  ];

  return (
    <div className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">How P2P Works</h2>
        <div className="text-xl font-semibold mb-4">
          Trade USDT Easily - Buy and Sell Using Your Favorite Payment Methods
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {p2pWorkSteps.map((step, index) => (
            <Card key={step.id} className="border border-border bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                {icons[index]}
                <div>
                  <CardTitle>{index + 1}. {step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";

interface TransactionFilterProps {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
}

export function TransactionFilter({ 
  selectedCurrency, 
  onCurrencyChange, 
  paymentMethod, 
  onPaymentMethodChange 
}: TransactionFilterProps) {
  const currencies = ["NGN", "AED", "USD", "EUR", "GBP", "JPY", "AUD"];
  const paymentMethods = ["All payments", "Bank Transfer", "Cash Deposit", "PayPal", "Wire Transfer"];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium whitespace-nowrap">Transaction currency:</span>
        <Select
          value={selectedCurrency}
          onValueChange={onCurrencyChange}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency} value={currency}>
                {currency}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <div className="flex gap-2">
          <Select
            value={paymentMethod}
            onValueChange={onPaymentMethodChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Payment method" />
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map((method) => (
                <SelectItem key={method} value={method}>
                  {method}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

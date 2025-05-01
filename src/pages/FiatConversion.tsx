import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cryptoAssets } from "@/data/mockData";
import { formatCurrency } from "@/utils/formatters";
import { CreditCard, Wallet, Building, ArrowRightLeft } from "lucide-react";

const FiatConversion = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const cryptoOptions = cryptoAssets.map((asset) => asset.symbol);
  const fiatOptions = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD"];

  const getRate = (from: string, to: string) => {
    if (from === "USD") {
      const asset = cryptoAssets.find((a) => a.symbol === to);
      return asset ? 1 / asset.price : 1;
    } else if (to === "USD") {
      const asset = cryptoAssets.find((a) => a.symbol === from);
      return asset ? asset.price : 1;
    } else {
      const fromAsset = cryptoAssets.find((a) => a.symbol === from);
      const toAsset = cryptoAssets.find((a) => a.symbol === to);
      if (fromAsset && toAsset) {
        return fromAsset.price / toAsset.price;
      }
      return 1;
    }
  };

  const rate = getRate(fromCurrency, toCurrency);
  const exchangeAmount = parseFloat(amount) || 0;
  const convertedAmount = exchangeAmount * rate;

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-2">Fiat to Crypto Conversion</h1>
          <p className="text-muted-foreground mb-8">
            Buy and sell crypto with your local currency easily and securely
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Convert Currency</CardTitle>
                <CardDescription>
                  Exchange between fiat and crypto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="buy">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="buy">Buy Crypto</TabsTrigger>
                    <TabsTrigger value="sell">Sell Crypto</TabsTrigger>
                  </TabsList>

                  <TabsContent value="buy">
                    <div className="space-y-6">
                      <div>
                        <Label
                          htmlFor="from-amount"
                          className="mb-2 block text-sm font-medium"
                        >
                          You Pay
                        </Label>
                        <div className="flex space-x-2">
                          <Input
                            id="from-amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="flex-1"
                          />
                          <Select
                            value={fromCurrency}
                            onValueChange={setFromCurrency}
                          >
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {fiatOptions.map((currency) => (
                                <SelectItem key={currency} value={currency}>
                                  {currency}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleSwapCurrencies}
                          className="rounded-full h-10 w-10 bg-primary/10"
                        >
                          <ArrowRightLeft className="h-5 w-5" />
                        </Button>
                      </div>

                      <div>
                        <Label
                          htmlFor="to-amount"
                          className="mb-2 block text-sm font-medium"
                        >
                          You Receive
                        </Label>
                        <div className="flex space-x-2">
                          <Input
                            id="to-amount"
                            type="number"
                            value={convertedAmount.toFixed(8)}
                            readOnly
                            className="flex-1 bg-muted"
                          />
                          <Select
                            value={toCurrency}
                            onValueChange={setToCurrency}
                          >
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {cryptoOptions.map((currency) => (
                                <SelectItem key={currency} value={currency}>
                                  {currency}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">
                            Exchange Rate
                          </span>
                          <span>
                            1 {fromCurrency} = {rate.toFixed(8)} {toCurrency}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Fee (1.5%)
                          </span>
                          <span>
                            {(exchangeAmount * 0.015).toFixed(2)} {fromCurrency}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-sm font-medium mb-2">
                          Select Payment Method
                        </h3>
                        <RadioGroup
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                        >
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-3 rounded-md border border-border p-3">
                              <RadioGroupItem value="card" id="card" />
                              <Label
                                htmlFor="card"
                                className="flex items-center"
                              >
                                <CreditCard className="mr-2 h-5 w-5" />
                                Credit/Debit Card
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3 rounded-md border border-border p-3">
                              <RadioGroupItem value="bank" id="bank" />
                              <Label
                                htmlFor="bank"
                                className="flex items-center"
                              >
                                <Building className="mr-2 h-5 w-5" />
                                Bank Transfer
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3 rounded-md border border-border p-3">
                              <RadioGroupItem value="wallet" id="wallet" />
                              <Label
                                htmlFor="wallet"
                                className="flex items-center"
                              >
                                <Wallet className="mr-2 h-5 w-5" />
                                Crypto Wallet
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <Button className="w-full gradient-bg">
                        Buy {toCurrency}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="sell">
                    <div className="space-y-6">
                      <div>
                        <Label
                          htmlFor="from-amount-sell"
                          className="mb-2 block text-sm font-medium"
                        >
                          You Sell
                        </Label>
                        <div className="flex space-x-2">
                          <Input
                            id="from-amount-sell"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="flex-1"
                          />
                          <Select
                            value={fromCurrency}
                            onValueChange={setFromCurrency}
                          >
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {cryptoOptions.map((currency) => (
                                <SelectItem key={currency} value={currency}>
                                  {currency}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleSwapCurrencies}
                          className="rounded-full h-10 w-10 bg-primary/10"
                        >
                          <ArrowRightLeft className="h-5 w-5" />
                        </Button>
                      </div>

                      <div>
                        <Label
                          htmlFor="to-amount-sell"
                          className="mb-2 block text-sm font-medium"
                        >
                          You Receive
                        </Label>
                        <div className="flex space-x-2">
                          <Input
                            id="to-amount-sell"
                            type="number"
                            value={convertedAmount.toFixed(2)}
                            readOnly
                            className="flex-1 bg-muted"
                          />
                          <Select
                            value={toCurrency}
                            onValueChange={setToCurrency}
                          >
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {fiatOptions.map((currency) => (
                                <SelectItem key={currency} value={currency}>
                                  {currency}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">
                            Exchange Rate
                          </span>
                          <span>
                            1 {fromCurrency} = {rate.toFixed(2)} {toCurrency}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Fee (1.5%)
                          </span>
                          <span>
                            {(convertedAmount * 0.015).toFixed(2)} {toCurrency}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-sm font-medium mb-2">
                          Select Payout Method
                        </h3>
                        <RadioGroup
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                        >
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-3 rounded-md border border-border p-3">
                              <RadioGroupItem value="bank" id="bank-sell" />
                              <Label
                                htmlFor="bank-sell"
                                className="flex items-center"
                              >
                                <Building className="mr-2 h-5 w-5" />
                                Bank Account
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3 rounded-md border border-border p-3">
                              <RadioGroupItem value="wallet" id="wallet-sell" />
                              <Label
                                htmlFor="wallet-sell"
                                className="flex items-center"
                              >
                                <Wallet className="mr-2 h-5 w-5" />
                                EcoChain Balance
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <Button className="w-full bg-red-500 hover:bg-red-600">
                        Sell {fromCurrency}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Supported payment options for your region
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <h4 className="font-medium">Credit/Debit Cards</h4>
                          <p className="text-sm text-muted-foreground">
                            Visa, Mastercard, UnionPay
                          </p>
                        </div>
                      </div>
                      <span className="text-sm bg-green-500/10 text-green-500 px-2 py-1 rounded">
                        Available
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div className="flex items-center">
                        <Building className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <h4 className="font-medium">Bank Transfers</h4>
                          <p className="text-sm text-muted-foreground">
                            SEPA, ACH, Wire Transfer
                          </p>
                        </div>
                      </div>
                      <span className="text-sm bg-green-500/10 text-green-500 px-2 py-1 rounded">
                        Available
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-3">
                      <div className="flex items-center">
                        <Wallet className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <h4 className="font-medium">Crypto Deposits</h4>
                          <p className="text-sm text-muted-foreground">
                            BTC, ETH, USDT, and 30+ more
                          </p>
                        </div>
                      </div>
                      <span className="text-sm bg-green-500/10 text-green-500 px-2 py-1 rounded">
                        Available
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rates</CardTitle>
                  <CardDescription>
                    Current exchange rates for popular pairs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cryptoAssets.slice(0, 5).map((asset) => (
                      <div
                        key={asset.id}
                        className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center mr-2">
                            {asset.symbol.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">
                              {asset.symbol}/USD
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {asset.name}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">
                            {formatCurrency(asset.price)}
                          </div>
                          <div
                            className={`text-xs ${
                              asset.priceChange24h >= 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {asset.priceChange24h >= 0 ? "+" : ""}
                            {asset.priceChange24h.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FiatConversion;

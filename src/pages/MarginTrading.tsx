
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { cryptoAssets } from "@/data/mockData";
import { formatCurrency } from "@/utils/formatters";

const MarginTrading = () => {
  const [selectedAsset, setSelectedAsset] = useState("BTC");
  const [leverage, setLeverage] = useState(5);
  const [amount, setAmount] = useState("");
  const [sliderValue, setSliderValue] = useState([0]);
  
  const asset = cryptoAssets.find(a => a.symbol === selectedAsset);
  const price = asset?.price || 0;
  const parsedAmount = parseFloat(amount) || 0;
  const total = parsedAmount * price;
  const marginRequired = total / leverage;
  const potentialProfit = total * 0.1 * leverage; // Assuming 10% price movement
  const potentialLoss = total * 0.1 * leverage; // Assuming 10% price movement

  const handleLeverageChange = (value: number[]) => {
    setLeverage(value[0]);
  };
  
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setAmount((value[0] * 1000 / price).toFixed(6));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-2">Margin Trading</h1>
          <p className="text-muted-foreground mb-8">
            Trade with leverage to amplify your potential returns. Higher risk, higher reward.
          </p>
          
          <Alert className="mb-8" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Risk Warning</AlertTitle>
            <AlertDescription>
              Margin trading involves significant risk. You can lose more than your initial investment.
              Please trade responsibly and only use capital you can afford to lose.
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Margin Trading Terminal</CardTitle>
                  <CardDescription>Trade with leverage up to 20x</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Select Asset</h3>
                    <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select asset" />
                      </SelectTrigger>
                      <SelectContent>
                        {cryptoAssets.slice(0, 6).map((asset) => (
                          <SelectItem key={asset.id} value={asset.symbol}>
                            {asset.symbol}/USDT
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Set Leverage: {leverage}x</h3>
                    <Slider
                      value={[leverage]}
                      min={1}
                      max={20}
                      step={1}
                      onValueChange={handleLeverageChange}
                    />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>1x</span>
                      <span>5x</span>
                      <span>10x</span>
                      <span>15x</span>
                      <span>20x</span>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="long">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="long">Long</TabsTrigger>
                      <TabsTrigger value="short">Short</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="long">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-2 text-sm font-medium">Amount</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="w-full"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">{selectedAsset}</div>
                          </div>
                        </div>
                        
                        <div className="py-2">
                          <Slider
                            value={sliderValue}
                            max={100}
                            step={1}
                            onValueChange={handleSliderChange}
                          />
                          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                            <span>0%</span>
                            <span>25%</span>
                            <span>50%</span>
                            <span>75%</span>
                            <span>100%</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="mb-2 text-sm font-medium">Position Value</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={total.toFixed(2)}
                              readOnly
                              className="w-full bg-muted"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">USDT</div>
                          </div>
                        </div>
                        
                        <Button className="w-full gradient-bg text-white mt-4">
                          Open Long Position
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="short">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-2 text-sm font-medium">Amount</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="w-full"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">{selectedAsset}</div>
                          </div>
                        </div>
                        
                        <div className="py-2">
                          <Slider
                            value={sliderValue}
                            max={100}
                            step={1}
                            onValueChange={handleSliderChange}
                          />
                          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                            <span>0%</span>
                            <span>25%</span>
                            <span>50%</span>
                            <span>75%</span>
                            <span>100%</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="mb-2 text-sm font-medium">Position Value</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={total.toFixed(2)}
                              readOnly
                              className="w-full bg-muted"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">USDT</div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-4">
                          Open Short Position
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Position Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Entry Price:</span>
                      <span className="font-medium">{formatCurrency(price)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Leverage:</span>
                      <span className="font-medium">{leverage}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Position Size:</span>
                      <span className="font-medium">{formatCurrency(total)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Margin Required:</span>
                      <span className="font-medium">{formatCurrency(marginRequired)}</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Liquidation Price:</span>
                        <span className="font-medium">{formatCurrency(price * (1 - 0.95/leverage))}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Potential P&L</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">If price rises 10%:</span>
                      <span className="font-medium text-green-500">+{formatCurrency(potentialProfit)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">If price drops 10%:</span>
                      <span className="font-medium text-red-500">-{formatCurrency(potentialLoss)}</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fees (0.075%):</span>
                        <span className="font-medium">{formatCurrency(total * 0.00075)}</span>
                      </div>
                    </div>
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

export default MarginTrading;

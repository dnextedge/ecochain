
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { cryptoAssets } from "@/data/mockData";
import { formatCurrency, formatPercentage } from "@/utils/formatters";
import { CryptoAsset } from "@/types/crypto";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { priceHistoryData } from "@/data/mockData";

const SpotTrading = () => {
  const { symbol = "BTCUSDT" } = useParams();
  const [baseAsset, setBaseAsset] = useState<string>(symbol.replace("USDT", ""));
  const [selectedAsset, setSelectedAsset] = useState<CryptoAsset | null>(null);
  const [orderType, setOrderType] = useState<"market" | "limit">("market");
  const [buyAmount, setBuyAmount] = useState<string>("0");
  const [sellAmount, setSellAmount] = useState<string>("0");
  const [buyTotal, setBuyTotal] = useState<number>(0);
  const [sellTotal, setSellTotal] = useState<number>(0);
  const [buySliderValue, setBuySliderValue] = useState<number[]>([0]);
  const [sellSliderValue, setSellSliderValue] = useState<number[]>([0]);
  const [limitPrice, setLimitPrice] = useState<string>("0");

  useEffect(() => {
    const asset = cryptoAssets.find(
      (a) => a.symbol.toLowerCase() === baseAsset.toLowerCase()
    );
    setSelectedAsset(asset || null);
    
    if (asset) {
      setLimitPrice(asset.price.toString());
    }
  }, [baseAsset]);

  useEffect(() => {
    if (selectedAsset && buyAmount) {
      const amount = parseFloat(buyAmount);
      if (!isNaN(amount)) {
        const price = orderType === "market" ? selectedAsset.price : parseFloat(limitPrice);
        setBuyTotal(amount * price);
      }
    }
  }, [buyAmount, selectedAsset, orderType, limitPrice]);

  useEffect(() => {
    if (selectedAsset && sellAmount) {
      const amount = parseFloat(sellAmount);
      if (!isNaN(amount)) {
        const price = orderType === "market" ? selectedAsset.price : parseFloat(limitPrice);
        setSellTotal(amount * price);
      }
    }
  }, [sellAmount, selectedAsset, orderType, limitPrice]);
  
  const handleBuySliderChange = (value: number[]) => {
    setBuySliderValue(value);
    if (selectedAsset) {
      const amount = (value[0] * 1000 / selectedAsset.price).toFixed(6);
      setBuyAmount(amount);
    }
  };
  
  const handleSellSliderChange = (value: number[]) => {
    setSellSliderValue(value);
    if (selectedAsset) {
      const amount = (value[0] * 0.1).toFixed(6);
      setSellAmount(amount);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Market Overview */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                {/* Pair selection and market info */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <Select value={baseAsset} onValueChange={setBaseAsset}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select asset" />
                      </SelectTrigger>
                      <SelectContent>
                        {cryptoAssets.map((asset) => (
                          <SelectItem key={asset.id} value={asset.symbol}>
                            {asset.symbol}/USDT
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {selectedAsset && (
                      <>
                        <div className="text-2xl font-bold">
                          {formatCurrency(selectedAsset.price)}
                        </div>
                        <div className={`text-sm px-2 py-1 rounded ${selectedAsset.priceChange24h >= 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                          {formatPercentage(selectedAsset.priceChange24h / 100)}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Price Chart</CardTitle>
                    <CardDescription>
                      Last 6 months price movement for {baseAsset}/USDT
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={priceHistoryData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="date" />
                          <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} />
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#9b87f5"
                            fillOpacity={1}
                            fill="url(#colorPrice)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Market Depth */}
                <Card>
                  <CardHeader>
                    <CardTitle>Order Book</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Bids</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Price (USDT)</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                              <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {selectedAsset && [
                              { price: selectedAsset.price * 0.998, amount: 1.2345, total: selectedAsset.price * 0.998 * 1.2345 },
                              { price: selectedAsset.price * 0.996, amount: 0.5432, total: selectedAsset.price * 0.996 * 0.5432 },
                              { price: selectedAsset.price * 0.994, amount: 2.1234, total: selectedAsset.price * 0.994 * 2.1234 },
                              { price: selectedAsset.price * 0.992, amount: 0.8765, total: selectedAsset.price * 0.992 * 0.8765 },
                              { price: selectedAsset.price * 0.990, amount: 3.2109, total: selectedAsset.price * 0.990 * 3.2109 },
                            ].map((bid, index) => (
                              <TableRow key={`bid-${index}`}>
                                <TableCell className="text-green-500">{formatCurrency(bid.price)}</TableCell>
                                <TableCell className="text-right">{bid.amount.toFixed(4)}</TableCell>
                                <TableCell className="text-right">{formatCurrency(bid.total)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Asks</h4>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Price (USDT)</TableHead>
                              <TableHead className="text-right">Amount</TableHead>
                              <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {selectedAsset && [
                              { price: selectedAsset.price * 1.002, amount: 0.4321, total: selectedAsset.price * 1.002 * 0.4321 },
                              { price: selectedAsset.price * 1.004, amount: 1.8765, total: selectedAsset.price * 1.004 * 1.8765 },
                              { price: selectedAsset.price * 1.006, amount: 0.6543, total: selectedAsset.price * 1.006 * 0.6543 },
                              { price: selectedAsset.price * 1.008, amount: 2.3456, total: selectedAsset.price * 1.008 * 2.3456 },
                              { price: selectedAsset.price * 1.010, amount: 0.9876, total: selectedAsset.price * 1.010 * 0.9876 },
                            ].map((ask, index) => (
                              <TableRow key={`ask-${index}`}>
                                <TableCell className="text-red-500">{formatCurrency(ask.price)}</TableCell>
                                <TableCell className="text-right">{ask.amount.toFixed(4)}</TableCell>
                                <TableCell className="text-right">{formatCurrency(ask.total)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Trading Panel */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Spot Trading</CardTitle>
                  <CardDescription>
                    Trade {baseAsset}/USDT with no leverage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="buy">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="buy">Buy</TabsTrigger>
                      <TabsTrigger value="sell">Sell</TabsTrigger>
                    </TabsList>
                    
                    <div className="mb-6">
                      <h4 className="mb-2 text-sm font-medium">Order Type</h4>
                      <div className="flex space-x-2">
                        <Button 
                          variant={orderType === "market" ? "default" : "outline"} 
                          size="sm" 
                          onClick={() => setOrderType("market")}
                          className={orderType === "market" ? "gradient-bg" : ""}
                        >
                          Market
                        </Button>
                        <Button 
                          variant={orderType === "limit" ? "default" : "outline"} 
                          size="sm" 
                          onClick={() => setOrderType("limit")}
                          className={orderType === "limit" ? "gradient-bg" : ""}
                        >
                          Limit
                        </Button>
                      </div>
                    </div>
                    
                    {orderType === "limit" && (
                      <div className="mb-6">
                        <h4 className="mb-2 text-sm font-medium">Limit Price</h4>
                        <div className="flex">
                          <Input
                            type="number"
                            value={limitPrice}
                            onChange={(e) => setLimitPrice(e.target.value)}
                            className="w-full"
                          />
                          <div className="ml-2 flex items-center text-muted-foreground">USDT</div>
                        </div>
                      </div>
                    )}
                    
                    <TabsContent value="buy">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-2 text-sm font-medium">Amount</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={buyAmount}
                              onChange={(e) => setBuyAmount(e.target.value)}
                              className="w-full"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">{baseAsset}</div>
                          </div>
                        </div>
                        
                        <div className="py-2">
                          <Slider
                            value={buySliderValue}
                            max={100}
                            step={1}
                            onValueChange={handleBuySliderChange}
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
                          <h4 className="mb-2 text-sm font-medium">Total</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={buyTotal.toFixed(2)}
                              readOnly
                              className="w-full bg-muted"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">USDT</div>
                          </div>
                        </div>
                        
                        <Button className="w-full gradient-bg text-white mt-4">
                          Buy {baseAsset}
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="sell">
                      <div className="space-y-4">
                        <div>
                          <h4 className="mb-2 text-sm font-medium">Amount</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={sellAmount}
                              onChange={(e) => setSellAmount(e.target.value)}
                              className="w-full"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">{baseAsset}</div>
                          </div>
                        </div>
                        
                        <div className="py-2">
                          <Slider
                            value={sellSliderValue}
                            max={100}
                            step={1}
                            onValueChange={handleSellSliderChange}
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
                          <h4 className="mb-2 text-sm font-medium">Total</h4>
                          <div className="flex">
                            <Input
                              type="number"
                              value={sellTotal.toFixed(2)}
                              readOnly
                              className="w-full bg-muted"
                            />
                            <div className="ml-2 flex items-center text-muted-foreground">USDT</div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-4">
                          Sell {baseAsset}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="border-t border-border pt-4 flex-col items-start">
                  <h4 className="font-medium mb-2">Your Balance</h4>
                  <div className="w-full space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">USDT:</span>
                      <span>10,000.00 USDT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{baseAsset}:</span>
                      <span>0.1523 {baseAsset}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          {/* Recent Trades */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Price (USDT)</TableHead>
                      <TableHead>Amount ({baseAsset})</TableHead>
                      <TableHead>Total (USDT)</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedAsset && [
                      { price: selectedAsset.price * 1.001, amount: 0.0234, total: selectedAsset.price * 1.001 * 0.0234, time: "14:32:45", type: "buy" },
                      { price: selectedAsset.price * 0.999, amount: 0.1567, total: selectedAsset.price * 0.999 * 0.1567, time: "14:32:30", type: "sell" },
                      { price: selectedAsset.price * 1.002, amount: 0.0189, total: selectedAsset.price * 1.002 * 0.0189, time: "14:32:15", type: "buy" },
                      { price: selectedAsset.price * 0.998, amount: 0.0432, total: selectedAsset.price * 0.998 * 0.0432, time: "14:32:00", type: "sell" },
                      { price: selectedAsset.price * 0.997, amount: 0.0876, total: selectedAsset.price * 0.997 * 0.0876, time: "14:31:45", type: "sell" },
                      { price: selectedAsset.price * 1.003, amount: 0.0654, total: selectedAsset.price * 1.003 * 0.0654, time: "14:31:30", type: "buy" },
                      { price: selectedAsset.price * 1.001, amount: 0.0321, total: selectedAsset.price * 1.001 * 0.0321, time: "14:31:15", type: "buy" },
                      { price: selectedAsset.price * 0.999, amount: 0.0123, total: selectedAsset.price * 0.999 * 0.0123, time: "14:31:00", type: "sell" },
                    ].map((trade, index) => (
                      <TableRow key={`trade-${index}`}>
                        <TableCell className={trade.type === "buy" ? "text-green-500" : "text-red-500"}>
                          {formatCurrency(trade.price)}
                        </TableCell>
                        <TableCell>{trade.amount.toFixed(6)}</TableCell>
                        <TableCell>{formatCurrency(trade.total)}</TableCell>
                        <TableCell>{trade.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpotTrading;

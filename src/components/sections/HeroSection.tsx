import { Button } from "@/components/ui/button";
import { marketStats } from "@/data/mockData";
import { formatPercentage } from "@/utils/formatters";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/20 blur-[120px] rounded-full" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Gateway to Crypto</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Trade cryptocurrencies across multiple chains and ecosystems with
              advanced tools, competitive fees, and institutional-grade
              security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-bg">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/trade/spot">Trade Now</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="User"
                  className="rounded-full"
                />
              </div>
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="User"
                  className="rounded-full"
                />
              </div>
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="User"
                  className="rounded-full"
                />
              </div>
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-xs font-medium">+5K</span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border/60">
                <img
                  src="/lovable-uploads/cb54e827-553d-488f-a84f-d1af36b13a8f.png"
                  alt="EcoChain Trading Platform"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {marketStats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-card border border-border"
            >
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-xl md:text-2xl font-bold">{stat.value}</h3>
                {stat.change !== undefined && (
                  <span
                    className={`text-sm ${
                      stat.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {formatPercentage(stat.change / 100)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

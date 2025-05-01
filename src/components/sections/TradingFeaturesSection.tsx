import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function TradingFeaturesSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold mb-6">
              Trade Spot, Margin & ETFs
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore all trading options on EcoChain. From spot trading for
              beginners to margin trading for experienced traders and ETFs for
              diversified exposure.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium mb-1">Over 300+ trading pairs</h4>
                  <p className="text-muted-foreground text-sm">
                    Access major tokens and new listings across popular chains
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium mb-1">Advanced order types</h4>
                  <p className="text-muted-foreground text-sm">
                    Limit, market, stop-loss, and trailing stop orders
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium mb-1">Competitive fees</h4>
                  <p className="text-muted-foreground text-sm">
                    Enjoy low trading fees starting from just 0.1%
                  </p>
                </div>
              </li>
            </ul>
            <Button size="lg" className="gradient-bg" asChild>
              <Link to="/trade/spot">Start Trading</Link>
            </Button>
          </div>
          <div className="md:w-1/2 bg-card rounded-xl border border-border p-6 relative">
            <div className="absolute -top-6 -right-6 bg-primary/70 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
              Platform Preview
            </div>
            <img
              src="/lovable-uploads/cb54e827-553d-488f-a84f-d1af36b13a8f.png"
              alt="Trading Platform"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

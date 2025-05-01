import { Button } from "@/components/ui/button";

export function MobileAppSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">EcoChain Mobile</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trade crypto on the go with our powerful mobile app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="crypto-card">
            <div className="w-full aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
              <div className="text-4xl">📱</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">iOS App</h3>
            <p className="text-muted-foreground mb-4">
              Download for iPhone and iPad for the best mobile trading
              experience.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Download for iOS
            </Button>
          </div>

          <div className="crypto-card">
            <div className="w-full aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
              <div className="text-4xl">🤖</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Android App</h3>
            <p className="text-muted-foreground mb-4">
              Download for Android phones and tablets with full trading
              functionality.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Download for Android
            </Button>
          </div>

          <div className="crypto-card">
            <div className="w-full aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
              <div className="text-4xl">🔔</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Price Alerts</h3>
            <p className="text-muted-foreground mb-4">
              Get notified instantly when crypto prices hit your targets.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Learn More
            </Button>
          </div>

          <div className="crypto-card">
            <div className="w-full aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
              <div className="text-4xl">🔒</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Wallet</h3>
            <p className="text-muted-foreground mb-4">
              Built-in secure wallet for storing and managing your crypto.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

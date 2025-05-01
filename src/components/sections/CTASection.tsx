import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="rounded-2xl overflow-hidden relative gradient-bg p-8 md:p-12">
          {/* Blended background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-indigo-600/90 mix-blend-multiply"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Buy & sell over 3,500 crypto and more
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join millions of users trading on EcoChain — the secure,
              user-friendly platform for all your crypto needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/register">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
                asChild
              >
                <Link to="/trade/spot">Trade Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

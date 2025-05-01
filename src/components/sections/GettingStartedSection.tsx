
import { steps } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard, User, ArrowRight, Wallet } from "lucide-react";

export function GettingStartedSection() {
  const icons = [
    <User className="h-6 w-6" />,
    <CreditCard className="h-6 w-6" />,
    <Wallet className="h-6 w-6" />
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Begin your crypto journey in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="crypto-card relative">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {step.id}
              </div>
              <div className="h-16 w-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-center mb-6">{step.description}</p>
              <div className="flex justify-center">
                <Button variant="outline" className="w-full" asChild>
                  <Link to={index === 0 ? "/register" : index === 1 ? "/deposit" : "/trade/spot"}>
                    {index === 0 ? "Register" : index === 1 ? "Deposit" : "Trade Now"}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

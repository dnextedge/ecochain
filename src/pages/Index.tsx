
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import MarketSection from "@/components/sections/MarketSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GettingStartedSection } from "@/components/sections/GettingStartedSection";
import { TradingFeaturesSection } from "@/components/sections/TradingFeaturesSection";
import { MobileAppSection } from "@/components/sections/MobileAppSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MarketSection />
        <FeaturesSection />
        <GettingStartedSection />
        <TradingFeaturesSection />
        <MobileAppSection />
        <TestimonialsSection />
        <PartnersSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

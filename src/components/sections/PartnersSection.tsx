
import { partners } from "@/data/mockData";

export function PartnersSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading blockchain projects and financial institutions
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="flex justify-center">
                <div className="h-16 w-32 bg-secondary/50 rounded-lg flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-[90%] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

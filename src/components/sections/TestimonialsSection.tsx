import { testimonials } from "@/data/mockData";

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What the Press Says</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what industry experts and users have to say about EcoChain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="crypto-card">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

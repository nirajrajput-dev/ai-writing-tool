import { Check, Star } from "lucide-react";
const pricingPlans = [{
  name: "Starter",
  price: 19,
  description: "Perfect for individuals and small projects",
  features: ["10,000 words per month", "Basic AI writing assistance", "5 document templates", "Email support", "Basic grammar checking", "Export to PDF/Word"],
  isPopular: false
}, {
  name: "Regular",
  price: 49,
  description: "Great for professionals and growing businesses",
  features: ["50,000 words per month", "Advanced AI writing assistance", "20+ document templates", "Priority email support", "Advanced grammar & style checking", "SEO optimization tools", "Team collaboration (up to 5 users)", "Custom templates", "Export to multiple formats"],
  isPopular: true
}, {
  name: "Business",
  price: 99,
  description: "For large teams and enterprise needs",
  features: ["Unlimited words", "Premium AI writing assistance", "50+ document templates", "24/7 phone & chat support", "Advanced SEO & analytics", "Team collaboration (unlimited users)", "Custom integrations", "API access", "White-label solution", "Dedicated account manager"],
  isPopular: false
}];
const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect plan for your writing needs. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-500 hover:shadow-glow ${
                plan.isPopular
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5 scale-105'
                  : 'border-border/50 bg-gradient-to-br from-card/50 to-card/30 hover:border-primary/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-3">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow'
                    : 'bg-card border border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: 19,
    description: "Perfect for individuals and small projects",
    features: [
      "10,000 words per month",
      "Basic AI writing assistance",
      "5 document templates",
      "Email support",
      "Basic grammar checking",
      "Export to PDF/Word"
    ],
    isPopular: false
  },
  {
    name: "Regular",
    price: 49,
    description: "Great for professionals and growing businesses",
    features: [
      "50,000 words per month",
      "Advanced AI writing assistance",
      "20+ document templates",
      "Priority email support",
      "Advanced grammar & style checking",
      "SEO optimization tools",
      "Team collaboration (up to 5 users)",
      "Custom templates",
      "Export to multiple formats"
    ],
    isPopular: true
  },
  {
    name: "Business",
    price: 99,
    description: "For large teams and enterprise needs",
    features: [
      "Unlimited words",
      "Premium AI writing assistance",
      "50+ document templates",
      "24/7 phone & chat support",
      "Advanced SEO & analytics",
      "Team collaboration (unlimited users)",
      "Custom integrations",
      "API access",
      "White-label solution",
      "Dedicated account manager"
    ],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Pricing Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your writing needs. No hidden fees, no surprises. 
            Cancel or upgrade anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative glass-card p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${
                plan.isPopular 
                  ? 'border-primary/50 ring-2 ring-primary/20 transform scale-105' 
                  : 'hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-start space-x-3 group"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.isPopular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Get Started
              </button>

              {/* Glow effect for popular plan */}
              {plan.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl -z-10 blur-xl opacity-50"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Pricing;
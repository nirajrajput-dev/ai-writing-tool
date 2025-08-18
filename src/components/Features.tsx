import { 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  Sparkles, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Generation",
    description: "Generate high-quality content in seconds with our advanced AI algorithms optimized for speed and accuracy."
  },
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description: "Powered by cutting-edge machine learning models that understand context, tone, and writing style preferences."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create content in over 50 languages with native-level fluency and cultural understanding."
  },
  {
    icon: Shield,
    title: "Privacy & Security First",
    description: "Your data is encrypted and secure. We never store or share your personal writing content."
  },
  {
    icon: Sparkles,
    title: "Creative Writing Modes",
    description: "Choose from various writing styles and tones to match your brand voice and content goals."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team in real-time with shared workspaces and collaborative editing features."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Key Features of Our Tool
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful capabilities that make our AI writing tool the perfect companion for all your content creation needs.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Features;
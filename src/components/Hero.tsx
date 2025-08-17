import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow opacity-30" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Writing Assistant</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            Elevate Your Content with Our{" "}
            <span className="glow-text">AI-Powered Writing Tool</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: "0.4s" }}>
            Transform your ideas into compelling content with advanced AI technology. 
            Write faster, better, and with more creativity than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 fade-in-up" style={{ animationDelay: "0.6s" }}>
            <button className="btn-primary group">
              Start Writing Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 fade-in-up" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-muted-foreground mb-8">Trusted by 50,000+ writers worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-sm font-medium">Company 1</div>
              <div className="text-sm font-medium">Company 2</div>
              <div className="text-sm font-medium">Company 3</div>
              <div className="text-sm font-medium">Company 4</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: "-1.5s" }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg float-animation" style={{ animationDelay: "-3s" }} />
    </section>
  );
};

export default Hero;
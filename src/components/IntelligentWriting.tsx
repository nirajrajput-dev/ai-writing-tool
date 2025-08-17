import { CheckCircle, ArrowRight } from "lucide-react";

const IntelligentWriting = () => {
  const benefits = [
    "Smart content suggestions",
    "Grammar and style optimization",
    "Tone and voice adjustment",
    "SEO-friendly content creation",
    "Plagiarism detection",
    "Real-time collaboration"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="fade-in-left">
            <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-muted-foreground">✨ AI-Powered Assistant</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Writing Assistance
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the future of content creation with our intelligent AI assistant that understands your writing style and helps you create better content faster than ever before.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn-primary group">
              Explore Features
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right visual */}
          <div className="fade-in-right">
            <div className="relative">
              {/* Main card */}
              <div className="glass-card p-8 rounded-2xl transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-card-foreground">AI Writing Assistant</h3>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>

                  {/* Content preview */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-muted/40 to-muted/20 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-muted/40 to-muted/20 rounded w-1/2"></div>
                  </div>

                  {/* Suggestions */}
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-sm text-muted-foreground mb-3">AI Suggestions:</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-card-foreground">Improve sentence structure</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-card-foreground">Enhance vocabulary</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-xl float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-accent to-primary rounded-full opacity-10 blur-2xl float-animation" style={{ animationDelay: "-2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentWriting;
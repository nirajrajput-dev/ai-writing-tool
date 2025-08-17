import { Lightbulb, FileText, Users2, TrendingUp } from "lucide-react";

const WritingExperience = () => {
  const experiences = [
    {
      icon: Lightbulb,
      title: "AI-Powered Writing Experience",
      description: "Experience the future of writing with our intelligent AI that adapts to your style and preferences."
    },
    {
      icon: Users2,
      title: "Seamless and User-friendly",
      description: "Intuitive interface designed for writers of all levels, from beginners to professionals."
    }
  ];

  const stats = [
    {
      icon: FileText,
      title: "Content and Data Export",
      description: "Export your content in multiple formats including PDF, Word, and HTML with full formatting preservation."
    },
    {
      icon: TrendingUp,
      title: "Analytics and Insights", 
      description: "Track your writing progress, productivity metrics, and content performance with detailed analytics."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Writing Experience */}
          <div className="fade-in-left">
            <div className="space-y-12">
              {experiences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Stats and Export */}
          <div className="fade-in-right">
            <div className="space-y-12">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 group"
                    style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom visual elements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience card */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                Enhanced Writing Experience
              </h4>
              <p className="text-muted-foreground">
                Transform your writing process with AI-powered suggestions and real-time improvements.
              </p>
            </div>
          </div>

          {/* Analytics card */}
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                Comprehensive Analytics
              </h4>
              <p className="text-muted-foreground">
                Track your progress and optimize your writing workflow with detailed insights and metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default WritingExperience;
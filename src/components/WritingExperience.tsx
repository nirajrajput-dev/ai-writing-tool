import { Lightbulb, FileText, Users2, TrendingUp } from "lucide-react";
const WritingExperience = () => {
  const experiences = [{
    icon: Lightbulb,
    title: "AI-Powered Writing Experience",
    description: "Experience the future of writing with our intelligent AI that adapts to your style and preferences."
  }, {
    icon: Users2,
    title: "Seamless and User-friendly",
    description: "Intuitive interface designed for writers of all levels, from beginners to professionals."
  }];
  const stats = [{
    icon: FileText,
    title: "Content and Data Export",
    description: "Export your content in multiple formats including PDF, Word, and HTML with full formatting preservation."
  }, {
    icon: TrendingUp,
    title: "Analytics and Insights",
    description: "Track your writing progress, productivity metrics, and content performance with detailed analytics."
  }];
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Writing Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the power of intelligent writing tools designed to enhance your creativity and productivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{experience.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">{stat.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WritingExperience;
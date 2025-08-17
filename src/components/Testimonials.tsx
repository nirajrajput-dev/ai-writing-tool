import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Marketing Manager",
    company: "TechCorp",
    content: "This AI writing tool has revolutionized our content creation process. We're producing 3x more quality content in half the time.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Freelance Writer",
    company: "Independent",
    content: "As a freelancer, this tool has been a game-changer. The AI suggestions are incredibly accurate and help me maintain consistency across projects.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Blog Editor",
    company: "Digital Agency",
    content: "The collaboration features and real-time editing capabilities have made our team 10x more productive. Highly recommended!",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Wilson",
    role: "Marketing Director",
    company: "StartupXYZ",
    content: "We've seen a 40% increase in engagement since using this AI writing tool. The content quality is consistently excellent.",
    rating: 5,
    avatar: "DW"
  },
  {
    name: "Lisa Anderson",
    role: "Technical Writer",
    company: "SoftwareInc",
    content: "The AI understands technical writing perfectly. It helps me create clear, concise documentation that our users love.",
    rating: 5,
    avatar: "LA"
  },
  {
    name: "James Thompson",
    role: "Creative Director",
    company: "BrandStudio",
    content: "This tool has expanded our creative possibilities. The AI generates ideas we never would have thought of on our own.",
    rating: 5,
    avatar: "JT"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Customer Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our User Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experience with our AI writing tool.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary group-hover:scale-110 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-card-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-16">
          <button className="btn-secondary group">
            View More Reviews
            <Star className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Testimonials;
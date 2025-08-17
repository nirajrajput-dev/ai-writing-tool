import { Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Sarah Johnson",
  role: "Content Marketing Manager",
  company: "TechCorp",
  content: "This AI writing tool has revolutionized our content creation process. We're producing 3x more quality content in half the time.",
  rating: 5,
  avatar: "SJ"
}, {
  name: "Michael Chen",
  role: "Freelance Writer",
  company: "Independent",
  content: "As a freelancer, this tool has been a game-changer. The AI suggestions are incredibly accurate and help me maintain consistency across projects.",
  rating: 5,
  avatar: "MC"
}, {
  name: "Emily Rodriguez",
  role: "Blog Editor",
  company: "Digital Agency",
  content: "The collaboration features and real-time editing capabilities have made our team 10x more productive. Highly recommended!",
  rating: 5,
  avatar: "ER"
}, {
  name: "David Wilson",
  role: "Marketing Director",
  company: "StartupXYZ",
  content: "We've seen a 40% increase in engagement since using this AI writing tool. The content quality is consistently excellent.",
  rating: 5,
  avatar: "DW"
}, {
  name: "Lisa Anderson",
  role: "Technical Writer",
  company: "SoftwareInc",
  content: "The AI understands technical writing perfectly. It helps me create clear, concise documentation that our users love.",
  rating: 5,
  avatar: "LA"
}, {
  name: "James Thompson",
  role: "Creative Director",
  company: "BrandStudio",
  content: "This tool has expanded our creative possibilities. The AI generates ideas we never would have thought of on our own.",
  rating: 5,
  avatar: "JT"
}];
const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied writers who have transformed their productivity with our AI writing tool.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-6 h-6 text-primary/60 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
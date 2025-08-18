import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Contact With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? We're here to help you get the most out of our AI writing tool.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="fade-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-background-secondary border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background-secondary border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Enter your email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background-secondary border-border/50 focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help you?" 
                    className="bg-background-secondary border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={4}
                    className="bg-background-secondary border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>

                <button className="btn-primary w-full group flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="fade-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you succeed with your writing projects. Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      Email Us
                    </h4>
                    <p className="text-muted-foreground">support@aitool.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      Call Us
                    </h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      Visit Us
                    </h4>
                    <p className="text-muted-foreground">
                      123 AI Street, Tech City<br />
                      CA 90210, United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Support hours */}
              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-card-foreground mb-4">Support Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-card-foreground">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-card-foreground">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-card-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Contact;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-foreground">Tool</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300">Features</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors duration-300">Pricing</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-white hover:bg-primary/20 transition-all duration-300">
              Sign In
            </Button>
            <button className="btn-primary flex items-center">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 menu-slide">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300">Features</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors duration-300">Pricing</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="text-foreground hover:text-white hover:bg-primary/20 justify-start transition-all duration-300">
                  Sign In
                </Button>
                <button className="btn-primary text-left flex items-center">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
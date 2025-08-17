import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import IntelligentWriting from "@/components/IntelligentWriting";
import WritingExperience from "@/components/WritingExperience";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <IntelligentWriting />
      <WritingExperience />
      <Pricing />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;

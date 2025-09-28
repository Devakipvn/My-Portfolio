import { useEffect, useState } from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen font-space">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

       {/* Projects Section */}
      <ProjectsSection />
      
      {/* Certificates Section */}
      <CertificatesSection />
      
      {/* Contact Section */}
      <ContactSection />

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-glow 
           bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
           text-white font-semibold text-lg flex items-center justify-center 
           hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
           hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </main>
  );
};

export default Index;

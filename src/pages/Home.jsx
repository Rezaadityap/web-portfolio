import { Background } from "../assets/components/Background";
import { Navbar } from "../assets/components/Navbar";
import { HeroSection } from "../assets/components/HeroSection";
import { AboutSection } from "../assets/components/AboutSection";
import { SkillsSection } from "../assets/components/SkillsSection";
import { ProjectsSection } from "../assets/components/ProjectsSection";
import { ContactSection } from "../assets/components/ContactSection";
import { Toaster } from "../assets/components/Toaster";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Efek Background */}
      <Background />
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Toaster />
      {/* Footer */}
    </div>
  );
};

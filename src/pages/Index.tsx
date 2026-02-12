import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <p className="text-center text-muted-foreground text-sm">
          © 2025 Shyam Charan Reddy Karra. Built with React & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
};

export default Index;

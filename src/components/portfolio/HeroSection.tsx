import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile_pic.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-2 border-primary/50 neon-glow-blue">
            <img src={profilePhoto} alt="Shyam Charan Reddy Karra" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="inline-block px-6 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm neon-glow-blue transition-all duration-300 hover:scale-105 hover:bg-primary/10">
          <p className="text-sm md:text-base text-primary/90 font-medium tracking-wide">
            AI/ML Enthusiast & Full-Stack Developer
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">Shyam Charan Reddy</span>
          <br />
          <span className="text-foreground">Karra</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          B.Tech CSE student at Lovely Professional University specializing in
          AI/ML with a solid grip in Full-Stack Development.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button asChild className="neon-glow-blue transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <a
              href="https://linkedin.com/in/shyamkarra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 neon-glow-green transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <a
              href="https://github.com/ShyamCharanReddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 neon-glow-blue transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <a href="/Shyam_Charan_Reddy_Karra_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
              <Download size={18} />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

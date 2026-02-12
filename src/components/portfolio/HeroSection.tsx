import { useTypingAnimation } from "@/hooks/use-scroll-reveal";
import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  const { displayed, done } = useTypingAnimation(
    "Shyam Charan Reddy Karra: Engineering Intelligent Solutions",
    50
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{
            background: "radial-gradient(circle, hsl(199 100% 55% / 0.4), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 animate-float"
          style={{
            background: "radial-gradient(circle, hsl(160 100% 45% / 0.4), transparent 70%)",
            animationDelay: "1.5s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(199 100% 55% / 0.2), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-2 border-primary/50 neon-glow-blue">
            <img src={profilePhoto} alt="Shyam Charan Reddy Karra" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Terminal typing */}
        <div className="inline-block glass rounded-lg px-6 py-4 mb-8 neon-glow-blue">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-secondary/80" />
          </div>
          <p className="font-mono text-sm md:text-base text-muted-foreground text-left">
            <span className="text-secondary">$</span>{" "}
            <span className="text-foreground">{displayed}</span>
            <span
              className={`inline-block w-2 h-5 bg-primary ml-1 align-middle ${
                done ? "" : "animate-pulse"
              }`}
              style={{ animation: "typing-cursor 0.8s infinite" }}
            />
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
          <Button asChild className="neon-glow-blue">
            <a
              href="https://linkedin.com/in/shyamkarra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 neon-glow-green">
            <a
              href="https://github.com/ShyamCharanReddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 neon-glow-blue">
            <a href="/resume.pdf" download="Shyam_Charan_Reddy_Karra_Resume.pdf">
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

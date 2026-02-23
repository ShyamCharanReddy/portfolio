import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Brain, Code, Rocket, Smartphone } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The person behind the code
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I am a <span className="text-primary font-semibold">B.Tech CSE student</span> at Lovely Professional University, driven by the intersection of logic and creativity. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey started with a fascination for mathematical problem-solving, which naturally evolved into a passion for Algorithms and Artificial Intelligence. I don't just write code; I strive to build intelligent systems that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not training models or building full-stack apps, you'll find me exploring the latest in Generative AI or designing immersive stories.
            </p>
          </div>

          {/* Cards / Highlights */}
          <div
            className={`grid gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="glass p-4 rounded-xl flex items-center gap-4 hover:neon-glow-blue transition-all duration-300">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Brain size={24} />
              </div>
              <div>
                <h4 className="font-bold">AI Enthusiast</h4>
                <p className="text-sm text-muted-foreground">Deeply interested in ML, NLP, and the future of ethical AI.</p>
              </div>
            </div>

            <div className="glass p-4 rounded-xl flex items-center gap-4 hover:neon-glow-green transition-all duration-300">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                <Code size={24} />
              </div>
              <div>
                <h4 className="font-bold">Full-Stack Dev</h4>
                <p className="text-sm text-muted-foreground">Building seamless web apps with React, Python, and modern UI.</p>
              </div>
            </div>

            <div className="glass p-4 rounded-xl flex items-center gap-4 hover:neon-glow-blue transition-all duration-300">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Smartphone size={24} /> 
            </div>
            <div>
              <h4 className="font-bold">App Developer</h4>
              <p className="text-sm text-muted-foreground">
                Building end-to-end mobile applications with Kotlin, Jetpack Compose, and Firebase integration.
              </p>
            </div>
          </div>

            <div className="glass p-4 rounded-xl flex items-center gap-4 hover:neon-glow-green transition-all duration-300">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="font-bold">Problem Solver</h4>
                <p className="text-sm text-muted-foreground">Approaching challenges with a mathematical and analytical mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
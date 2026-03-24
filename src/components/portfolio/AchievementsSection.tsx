import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, BadgeCheck } from "lucide-react";

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Achievements
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Milestones & recognitions
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div
            className={`cyber-card rounded-xl p-6 neon-glow-blue transition-all duration-700 delay-200 hover:scale-105 interactive-hover ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  5-Star C++ Badge
                </h3>
                <p className="text-muted-foreground text-sm">
                  HackerRank — Demonstrated advanced proficiency in C++ programming
                </p>
              </div>
            </div>
          </div>
          
          <div
            className={`cyber-card rounded-xl p-6 neon-glow-green transition-all duration-700 delay-300 hover:scale-105 interactive-hover ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Award className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  X-Innovate 24-Hour Hackathon
                </h3>
                <p className="text-muted-foreground text-sm">
                  Successfully participated and built solutions during an intensive 24-hour development sprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

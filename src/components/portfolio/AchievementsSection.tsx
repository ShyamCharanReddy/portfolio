import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Summer Training in Full Stack",
    issuer: "Lovely Professional University",
    date: "Jul 2025",
  },
  {
    title: "Generative AI with No-Code Tools",
    issuer: "Infosys SpringBoard",
    date: "Sep 2025",
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys SpringBoard",
    date: "Oct 2025",
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Achievements & Certifications
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Milestones & credentials
        </p>

        {/* Achievement highlight */}
        <div
          className={`glass rounded-xl p-6 max-w-2xl mx-auto mb-10 neon-glow-blue transition-all duration-700 delay-200 ${
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

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`glass rounded-xl p-5 transition-all duration-500 hover:scale-105 hover:neon-glow-green ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
            >
              <BadgeCheck className="text-secondary mb-3" size={24} />
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {cert.title}
              </h4>
              <p className="text-muted-foreground text-xs">{cert.issuer}</p>
              <p className="text-secondary/70 text-xs mt-2 font-mono">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

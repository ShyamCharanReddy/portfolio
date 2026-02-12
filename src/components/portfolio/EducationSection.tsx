import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University",
    period: "Oct 2023 — Present",
    detail: "Specializing in AI/ML",
  },
  {
    title: "Intermediate (12th)",
    institution: "Sri Chaitanya Junior College",
    period: "Completed",
    detail: "Score: 96.4%",
  },
  {
    title: "Matriculation (10th)",
    institution: "Sri Chaitanya High School",
    period: "Completed",
    detail: "CGPA: 10/10",
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Education
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Academic journey
        </p>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {timeline.map((item, i) => (
            <div
              key={item.title}
              className={`relative pl-16 pb-12 last:pb-0 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-[14px] top-1 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                <GraduationCap size={10} className="text-primary" />
              </div>

              <div className="glass rounded-xl p-5 hover:neon-glow-blue transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-primary text-sm font-mono mb-1">
                  {item.institution}
                </p>
                <p className="text-muted-foreground text-xs mb-2">
                  {item.period}
                </p>
                <p className="text-secondary text-sm font-semibold">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

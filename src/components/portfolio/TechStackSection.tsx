import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code, Wrench, Database, Cpu } from "lucide-react";

const categories = [
  {
    title: "Languages",
    color: "primary",
    icon: Code,
    items: ["C++", "Java", "Python", "HTML", "JavaScript", "Kotlin"],
  },
  {
    title: "Frameworks",
    color: "secondary",
    icon: Database,
    items: ["React", "Vue", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Tools",
    color: "primary",
    icon: Wrench,
    items: ["VS Code", "Git/GitHub", "Firebase"],
  },
  {
    title: "AI/ML",
    color: "secondary",
    icon: Cpu,
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
];

const TechStackSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="techstack" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tech Stack
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Technologies I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`cyber-card rounded-xl p-6 transition-all duration-700 hover:scale-110 group interactive-hover ${
                cat.color === "primary" ? "hover:neon-glow-blue" : "hover:neon-glow-green"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(ci + 2) * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon
                  size={20}
                  className={cat.color === "primary" ? "text-primary" : "text-secondary"}
                />
                <h3
                  className={`text-lg font-semibold ${
                    cat.color === "primary" ? "text-primary" : "text-secondary"
                  }`}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-110 cursor-default ${
                      cat.color === "primary"
                        ? "border-primary/30 text-primary bg-primary/10 hover:bg-primary/20"
                        : "border-secondary/30 text-secondary bg-secondary/10 hover:bg-secondary/20"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

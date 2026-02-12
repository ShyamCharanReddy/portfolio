import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    title: "Languages",
    color: "primary",
    items: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    color: "secondary",
    items: ["React", "Vue", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Tools",
    color: "primary",
    items: ["VS Code", "Git/GitHub", "Firebase", "LeetCode", "GeeksforGeeks"],
  },
];

const TechStackSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="techstack" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass rounded-xl p-6 transition-all duration-700 hover:scale-105 ${
                cat.color === "primary" ? "hover:neon-glow-blue" : "hover:neon-glow-green"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(ci + 2) * 100}ms` }}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  cat.color === "primary" ? "text-primary" : "text-secondary"
                }`}
              >
                {cat.title}
              </h3>
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

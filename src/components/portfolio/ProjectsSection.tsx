import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Interactive Meme Editor & Generator",
    tech: "React · Firebase · Canvas API",
    description:
      "A single-page application for creating and editing memes with real-time canvas manipulation using react-draggable and Imgflip API integration for meme templates.",
    tags: ["ReactJS", "Firebase", "react-draggable", "Imgflip API", "SPA"],
    color: "primary" as const,
    github: "https://github.com/ShyamCharanReddy",
  },
  {
    title: "NLP Review Comprehension (MRC)",
    tech: "Python · NLTK · Machine Learning",
    description:
      "A machine reading comprehension pipeline for analyzing product reviews using VADER and Roberta sentiment analysis models, with Matplotlib visualizations for insights.",
    tags: ["Python", "NLTK", "VADER", "Roberta", "Matplotlib"],
    color: "secondary" as const,
    github: "https://github.com/ShyamCharanReddy",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Projects
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Featured work & experiments
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass rounded-xl p-6 transition-all duration-500 hover:scale-[1.03] group ${
                project.color === "primary"
                  ? "hover:neon-glow-blue"
                  : "hover:neon-glow-green"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors mt-1 shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
              </div>
              <p
                className={`text-sm font-mono mb-3 ${
                  project.color === "primary"
                    ? "text-primary/70"
                    : "text-secondary/70"
                }`}
              >
                {project.tech}
              </p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded text-xs border ${
                      project.color === "primary"
                        ? "border-primary/20 text-primary/80 bg-primary/5"
                        : "border-secondary/20 text-secondary/80 bg-secondary/5"
                    }`}
                  >
                    {tag}
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

export default ProjectsSection;

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Github, ExternalLink } from "lucide-react";
import DecorativeBackground from "./DecorativeBackground";

const projects = [
  {
    title: "Interactive Full-Stack Meme Generator",
    tech: "MERN Stack · JWT Auth · html2canvas",
    description:
      "A robust full-stack web application enabling users to create, download, and securely save custom memes. Features a modern dark-mode \"glassmorphism\" UI, an interactive canvas editor with drag-and-drop text positioning and color customization, and custom image uploads. Built with secure JWT authentication and MongoDB to provide persistent, personalized user galleries alongside trending templates via the Imgflip API.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT & bcrypt", "react-draggable", "html2canvas"],
    color: "primary" as const,
    github: "https://github.com/ShyamCharanReddy/meme_generator",
    demo: "https://bucolic-chaja-e923e7.netlify.app/", 
  },
  {
    title: "NLP Review Comprehension (MRC)",
    tech: "Python · NLTK · Machine Learning",
    description:
      "An advanced sentiment analysis pipeline that processes product reviews using VADER and Roberta models. It extracts latent customer pain points and provides data-driven insights through comprehensive Matplotlib visualizations.",
    tags: ["Python", "NLTK", "VADER", "Roberta", "Matplotlib"],
    color: "secondary" as const,
    github: "https://github.com/ShyamCharanReddy",
    demo: "",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <DecorativeBackground />
      </div>
      <div className="absolute inset-0 -z-10 cyber-grid"></div>
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
              className={`cyber-card rounded-xl p-6 transition-all duration-500 hover:scale-105 group interactive-hover ${
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
                <div className="flex gap-3 mt-1 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
                    onClick={(e) => e.stopPropagation()}
                    title="View Source"
                  >
                    <Github size={18} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
                      onClick={(e) => e.stopPropagation()}
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
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
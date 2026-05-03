import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Interactive Meme Editor & Generator",
    period: "Apr '25 – Jun '25",
    tech: "ReactJS · Tailwind CSS · Firebase · Imgflip API",
    description:
      "Designed and developed a responsive SPA for seamless meme creation with cross-component state and data persistence via dynamic routing. Implemented interactive canvas manipulation using react-draggable and html2canvas for downloadable high-quality images. Integrated the Imgflip REST API to fetch and randomize 100+ global templates with a custom upload feature using File Blobs.",
    tags: ["ReactJS", "Tailwind CSS", "Firebase", "Imgflip API", "react-draggable", "html2canvas"],
    color: "primary" as const,
    github: "https://github.com/ShyamCharanReddy/meme_generator",
    demo: "https://bucolic-chaja-e923e7.netlify.app/",
  },
  {
    title: "Full-Stack AI Sentiment & BI Platform",
    period: "Sep '25 – Nov '25",
    tech: "FastAPI · HuggingFace · React · Gemini API",
    description:
      "Engineered a high-performance FastAPI backend with a dual-engine ML pipeline (RoBERTa & VADER) and O(1) heuristic boundary for real-time sentiment classification. Developed a custom XAI Token-Valence Proxy for synchronous keyword attribution with dynamic LDA topic modeling. Designed a React & Tailwind dashboard with an LLM-powered agentic layer (Gemini API) to synthesize reviews into actionable executive summaries.",
    tags: ["FastAPI", "HuggingFace", "RoBERTa", "VADER", "React", "Tailwind", "Gemini API", "LDA"],
    color: "secondary" as const,
    github: "https://github.com/ShyamCharanReddy/machine_reading_in_customer_reviews",
    demo: "",
  },
  {
    title: "BharatSync Tourism & Heritage App",
    period: "Mar '26 – May '26",
    tech: "Kotlin · Jetpack Compose · Room · ML Kit · Groq API",
    description:
      "Designed and developed an offline-first Android application promoting local tourism using Kotlin and Jetpack Compose with Room Database and Hilt DI. Implemented interactive mapping with OpenStreetMap (osmdroid) for heritage tracking and Google ML Kit with CameraX for real-time handicraft identification. Integrated the Groq REST API via Retrofit for AI-driven travel itineraries using Llama-3.3.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "ML Kit", "Groq API", "OpenStreetMap"],
    color: "primary" as const,
    github: "https://github.com/ShyamCharanReddy",
    demo: "",
  },
  {
    title: "Spotify Unsupervised Learning & Cohort Discovery",
    period: "Apr '26 – May '26",
    tech: "Python · Scikit-learn · Pandas · Seaborn",
    description:
      "Designed a multi-algorithm unsupervised ML pipeline to analyze complex Spotify audio features, discovering distinct musical cohorts within a 1,600+ track discography. Implemented diverse clustering architectures including K-Means, DBSCAN, and GMM with Silhouette analyses and BIC/AIC evaluation. Engineered high-dimensional visualizations using PCA and t-SNE embeddings, validating cohort separation via Random Forest feature importance.",
    tags: ["Python", "Scikit-learn", "Pandas", "Seaborn", "K-Means", "DBSCAN", "GMM", "PCA", "t-SNE"],
    color: "secondary" as const,
    github: "https://github.com/ShyamCharanReddy/Spotify-Songs-Cohort-Analysis-and-Popularity-Analysis",
    demo: "",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Projects
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Featured work & experiments
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`cyber-card rounded-xl p-6 transition-all duration-500 hover:scale-105 group interactive-hover ${project.color === "primary"
                ? "hover:neon-glow-blue"
                : "hover:neon-glow-green"
                } ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 mt-1 shrink-0">
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
              <span className={`inline-block text-xs font-mono mb-3 px-2 py-0.5 rounded-full border ${project.color === "primary"
                ? "border-primary/30 text-primary/80 bg-primary/10"
                : "border-secondary/30 text-secondary/80 bg-secondary/10"
                }`}>
                {project.period}
              </span>
              <p
                className={`text-sm font-mono mb-3 ${project.color === "primary"
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
                    className={`px-2 py-1 rounded text-xs border ${project.color === "primary"
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
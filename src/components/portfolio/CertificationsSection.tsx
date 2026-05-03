import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BadgeCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "OCI 2025 AI Foundations Associate",
    issuer: "Oracle",
    date: "Mar 2026",
    file: "/certificates/OCI_AI_Foundations.pdf",
  },
  {
    title: "Summer Training in Full Stack",
    issuer: "Lovely Professional University",
    date: "Jul 2025",
    file: "/certificates/FullStack_Development_in_React_and_Node.png",
  },
  {
    title: "Generative AI with No-Code Tools",
    issuer: "Infosys SpringBoard",
    date: "Aug 2025",
    file: "/certificates/Build Generative AI Apps and Solutions with No-Code Tools.pdf",
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys SpringBoard",
    date: "Aug 2025",
    file: "/certificates/ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM.pdf",
  },
  {
    title: "Computational Theory & Automata",
    issuer: "Infosys SpringBoard",
    date: "Aug 2025",
    file: "/certificates/Computational Theory: Language Principle & Finite Automata Theory.pdf",
  },
];

const CertificateCard = ({ cert, isVisible, index }: { cert: any, isVisible: boolean, index: number }) => {
  return (
    <div
      className={`cyber-card rounded-xl p-5 hover:border-primary/80 transition-all duration-300 relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <BadgeCheck className="text-secondary mb-3" size={24} />
      <h4 className="font-semibold text-foreground text-sm mb-1">
        {cert.title}
      </h4>
      <p className="text-muted-foreground text-xs">{cert.issuer}</p>
      <p className="text-secondary/70 text-xs mt-2 font-mono mb-4">
        {cert.date}
      </p>

      <div className="w-full mt-auto pt-4 border-t border-border/30">
        <Button variant="outline" size="sm" className="w-full text-xs h-8 border-secondary/30 hover:bg-secondary/10 hover:text-secondary" asChild>
          <a href={cert.file} download={`${cert.title.replace(/\s+/g, "_")}${cert.file.substring(cert.file.lastIndexOf('.'))}`}>
            <Download size={14} className="mr-1.5" /> Download
          </a>
        </Button>
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Certifications
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Professional credentials
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificateCard key={cert.title} cert={cert} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

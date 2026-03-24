import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BadgeCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Summer Training in Full Stack",
    issuer: "Lovely Professional University",
    date: "Jul 2025",
    file: "/certificates/full_stack_training.pdf",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
  {
    title: "Generative AI with No-Code Tools",
    issuer: "Infosys SpringBoard",
    date: "Sep 2025",
    file: "/certificates/gen_ai_nocode.pdf",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys SpringBoard",
    date: "Oct 2025",
    file: "/certificates/chatgpt_prompt.pdf",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  },
];

const CertificateCard = ({ cert, isVisible, index }: { cert: any, isVisible: boolean, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    mousePosRef.current = { x: e.clientX, y: e.clientY };
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (previewRef.current) {
      previewRef.current.style.top = `${e.clientY + 15}px`;
      previewRef.current.style.left = `${e.clientX + 15}px`;
    }
  };

  return (
    <div
      className={`cyber-card rounded-xl p-5 hover:border-primary/80 transition-all duration-300 relative ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <BadgeCheck className="text-secondary mb-3" size={24} />
      <h4 className="font-semibold text-foreground text-sm mb-1">
        {cert.title}
      </h4>
      <p className="text-muted-foreground text-xs">{cert.issuer}</p>
      <p className="text-secondary/70 text-xs mt-2 font-mono mb-4">
        {cert.date}
      </p>

      <div className="w-full mt-auto pt-4 border-t border-border/30 relative z-20 pointer-events-auto">
        <Button variant="outline" size="sm" className="w-full text-xs h-8 border-secondary/30 hover:bg-secondary/10 hover:text-secondary" asChild>
          <a href={cert.file} download={`${cert.title.replace(/\\s+/g, "_")}.pdf`}>
            <Download size={14} className="mr-1.5" /> Download
          </a>
        </Button>
      </div>

      {isHovered && cert.image && createPortal(
        <div
          ref={previewRef}
          className="fixed pointer-events-none z-[200] bg-[#0a192f]/95 backdrop-blur-md border border-[#00ffff] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.4)] block"
          style={{ width: "320px", top: mousePosRef.current.y + 15, left: mousePosRef.current.x + 15 }}
        >
          <img src={cert.image} alt="Preview" className="w-full aspect-[4/3] object-cover" />
        </div>,
        document.body
      )}
    </div>
  );
};

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Certifications
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

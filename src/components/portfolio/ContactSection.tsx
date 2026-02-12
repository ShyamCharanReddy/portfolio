import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:shyamcharan4444@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gradient transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's connect and build something great
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`glass rounded-xl p-6 space-y-5 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <Label htmlFor="name" className="text-muted-foreground text-xs mb-1.5 block">
                Name
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-muted/50 border-border/50 focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-muted-foreground text-xs mb-1.5 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-muted/50 border-border/50 focus:border-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-muted-foreground text-xs mb-1.5 block">
                Message
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="bg-muted/50 border-border/50 focus:border-primary min-h-[120px]"
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" className="w-full neon-glow-blue">
              Send Message
            </Button>
          </form>

          {/* Contact info */}
          <div
            className={`flex flex-col justify-center gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg glass">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href="mailto:shyamcharan4444@gmail.com"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  shyamcharan4444@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg glass">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-foreground text-sm">Available on request</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg glass">
                <Linkedin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/shyamkarra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  linkedin.com/in/shyamkarra
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg glass">
                <Github className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <a
                  href="https://github.com/ShyamCharanReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  github.com/ShyamCharanReddy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

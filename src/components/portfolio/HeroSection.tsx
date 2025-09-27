import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [finished, setFinished] = useState(false);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        setFinished(true); // ✅ mark finished to hide cursor
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 float-animation" />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-secondary rounded-full opacity-15 float-animation"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-accent rounded-full opacity-10 float-animation"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div
        className={`text-center space-y-8 z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold font-space">
            <span className="gradient-text">Patchipulusu Venkata Naga</span>
            <br />
            <span className="text-foreground">Devaki</span>
          </h1>

          {/* Typewriter effect */}
          <div className="h-12">
            <h2 className="text-xl md:text-2xl font-space font-medium text-muted-foreground">
              <span
                className={`relative inline-block pr-1 ${
                  finished
                    ? ""
                    : "after:content-[''] after:inline-block after:w-[2px] after:h-full after:bg-current after:animate-blink"
                }`}
              >
                {typewriterText}
              </span>
                          </h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer with 1 year of experience building scalable web
          applications. Passionate about creating clean, maintainable code with
          focus on performance and usability.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/devaki_resume.pdf" download>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                        text-white font-semibold text-lg px-8 py-6 rounded-xl
                        shadow-glow hover:shadow-lg transition-all duration-300 
                        transform hover:scale-105 flex items-center justify-center
                        hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
         <Button
          variant="outline"
          size="lg"
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="glass-card px-8 py-6 text-lg font-medium rounded-xl border-primary/20 hover:border-primary/40"
        >
          View My Work
        </Button>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center pt-8">
          {[
            { icon: Github, href: "https://github.com/Devakipvn", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/pvndevaki", label: "LinkedIn" },
            { icon: Mail, href: "mailto:devakipvn@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="glass-card p-3 rounded-xl glow-effect transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-foreground" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground font-space">
              Scroll to explore
            </span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, Play } from "lucide-react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Jobseekr – AI-Powered Resume & Job Platform",
      description: "A full-stack job portal with real-time job listings via SerpAPI, secure authentication using Google/GitHub OAuth, and AI-powered tools including smart Resume Builder and AI Assistant for career guidance.",
      image: "💼",
      technologies: ["Next.js 14", "TypeScript", "React 18", "Tailwind CSS", "NextAuth", "Prisma ORM", "PostgreSQL"],
      github: "https://github.com/Devakipvn",
      live: "https://demo.com",
      category: "AI/Job Portal",
      longDescription: "Built a full-stack job portal with real-time job listings via SerpAPI, enabling job seekers to search and manage profiles efficiently. Integrated secure authentication using Google/GitHub OAuth and credentials-based login for seamless access. Developed AI-powered tools including a smart Resume Builder with personalized bullet points & summaries and AI Assistant for FAQs and career guidance. Engineered modular and reusable UI components with modern, responsive design for enhanced user experience."
    },
    {
      id: 2,
      title: "CodeCanvas – Online Code Editor",
      description: "A full-stack code editor with instant execution and live preview for frontend technologies. Features include authentication, project management, theme toggle, and responsive design for enhanced collaboration.",
      image: "💻",
      technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "TailwindCSS", "Python Flask"],
      github: "https://github.com/Devakipvn",
      live: "https://demo.com",
      category: "Development Tools",
      longDescription: "Developed a full-stack code editor with instant execution and live preview for frontend technologies (HTML, CSS, JavaScript). Implemented authentication and project management features (login/register, save, load, delete, export) to improve usability. Enhanced collaboration and productivity with features like theme toggle and responsive, user-friendly interface across devices."
    },
    {
      id: 3,
      title: "Psychometric Test App",
      description: "A web-based psychometric test assessing analytical, creative, and logical reasoning with instant scoring, real-time score analysis, and personalized roadmaps with responsive UI.",
      image: "🧠",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/Devakipvn",
      live: "https://demo.com",
      category: "Assessment Tool",
      longDescription: "Built a web-based psychometric test assessing analytical, creative, and logical reasoning with instant scoring. Features include real-time score analysis, personalized roadmaps, and responsive UI design for optimal user experience across all devices."
    },
    {
      id: 4,
      title: "Vizag Tourism Website",
      description: "A fully responsive website highlighting Vizag's popular tourist destinations, optimized for desktop and mobile with interactive UI components and smooth navigation.",
      image: "🏖️",
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/Devakipvn",
      live: "https://demo.com",
      category: "Tourism",
      longDescription: "Developed a fully responsive website highlighting Vizag's popular tourist destinations, optimized for desktop and mobile. Enhanced user engagement by integrating interactive UI components, media-rich content, and smooth navigation for an immersive user experience."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, spanning various technologies and industries.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass-card tilt-card glow-effect group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Project image/icon */}
                <div className="text-6xl text-center py-8 bg-gradient-primary rounded-lg mb-4">
                  {project.image}
                </div>

                {/* Category badge */}
                <Badge variant="secondary" className="glass-card">
                  {project.category}
                </Badge>

                {/* Project title and description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-space group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="glass-card flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="glass-card flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="gradient-button">
                        <Play className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-card max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-space gradient-text">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="text-4xl text-center py-8 bg-gradient-primary rounded-lg">
                          {project.image}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="glass-card">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button className="gradient-button flex-1">
                            <Github className="h-4 w-4 mr-2" />
                            View Source Code
                          </Button>
                          <Button variant="outline" className="glass-card flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
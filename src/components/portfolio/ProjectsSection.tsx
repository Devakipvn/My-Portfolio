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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, order tracking, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full Stack",
      longDescription: "Built a comprehensive e-commerce platform from the ground up, handling everything from user authentication to payment processing. The application features a responsive design, real-time inventory management, order tracking, and a powerful admin dashboard for managing products and analytics."
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration using OpenAI GPT. Features include message encryption, file sharing, and smart conversation summaries.",
      image: "🤖",
      technologies: ["Next.js", "TypeScript", "OpenAI", "Socket.io", "MongoDB"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "AI/ML",
      longDescription: "Developed an intelligent chat application that combines real-time messaging with AI capabilities. Users can chat with AI assistants, get conversation summaries, and enjoy secure messaging with end-to-end encryption."
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop interface, team collaboration features, and advanced analytics dashboard.",
      image: "📋",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Chart.js", "WebSocket"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Productivity",
      longDescription: "Created a comprehensive project management solution that helps teams organize tasks, track progress, and collaborate effectively. Features include Kanban boards, Gantt charts, time tracking, and detailed analytics."
    },
    {
      id: 4,
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price tracking with portfolio management, price alerts, and detailed market analysis using various APIs.",
      image: "₿",
      technologies: ["React", "Python", "FastAPI", "Redis", "Chart.js"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "FinTech",
      longDescription: "Built a sophisticated cryptocurrency tracking application that aggregates data from multiple exchanges, provides real-time price updates, portfolio management, and advanced charting capabilities for market analysis."
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with automated reporting, content scheduling, and performance metrics.",
      image: "📊",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "AWS"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Analytics",
      longDescription: "Developed a comprehensive social media management platform that helps businesses track their social media performance across multiple platforms, schedule content, and generate automated reports with actionable insights."
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform with video streaming, interactive quizzes, progress tracking, and certification system for online courses.",
      image: "🎓",
      technologies: ["Next.js", "TypeScript", "Prisma", "AWS S3", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Education",
      longDescription: "Created a full-featured learning management system that enables educators to create and deliver online courses with video content, interactive assessments, progress tracking, and automated certification upon completion."
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
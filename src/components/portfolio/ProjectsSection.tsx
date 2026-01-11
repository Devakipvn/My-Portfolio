"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Play } from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const PROJECTS = [
 
  {
  id: 1,
  title: "ResumeAI Enhancer",
  description:
    "AI-powered resume analysis platform that provides ATS-friendly suggestions and job-match insights.",
  image: "images/ResumeAI.png", // add image to your images folder
  fit: "contain",
  technologies: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "OpenAI API",
    "shadcn/ui",
    "Supabase",
  ],
  live: "https://resume-enhancer-ai.vercel.app/",
  category: "web",
  longDescription:
    "ResumeAI Enhancer is a web application that analyzes resumes against job requirements and provides ATS-friendly suggestions, keyword improvements, and job-match insights. Built to solve a real-world problem faced by freshers, with a clean UI and practical AI integration.",
},
{
  id: 2,
  title: "Maison Fashion Store",
  description:
    "Fashion e-commerce website with product listings and modern UI for online shopping experience.",
  image: "images/Maison.png", // add image to your images folder
  fit: "cover",
  technologies: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Tailwind CSS",
    "Stripe API",
    "shadcn/ui",
    "Supabase",
  ],
  
  live: "https://maison-fashion-store.vercel.app/",
  category: "web",
  longDescription:
    "Maison Fashion Store is a fashion-focused e-commerce web application showcasing clothing products with a clean layout and smooth browsing experience. The project emphasizes UI design, responsive layouts, and real-world e-commerce flow.",
},

  {
    id: 3,
    title: "Jobseekr – AI-Powered Resume & Job Platform",
    description:
      "Full-stack job portal with real-time job listings, OAuth, and AI-powered Resume Builder + Assistant.",
    image: "images/Jobseekr img.png",
    fit: "contain",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "React 18",
      "Tailwind",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/Devakipvn",
    live: "https://devakipvn.github.io/Psychometric-test-Web-App/",
    category: "web",
    longDescription:
      "Built a full-stack job portal with job listings via SerpAPI, secure OAuth login, and AI-powered tools (Resume Builder, FAQ Assistant). Responsive UI with modular components.",
  },

  {
    id: 4,
    title: "CodeCanvas – Online Code Editor",
    description:
      "Instant execution + live preview, auth, project management, and responsive UI.",
    image: "images/codecanvas img.png",
    fit: "contain",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "Python Flask",
      "MySQL",
    ],
    github: "https://github.com/Devakipvn/CodeCanvas---Online-Code-Editor",
    live: "https://devakipvn.github.io/Psychometric-test-Web-App/",
    category: "web",
    longDescription:
      "Developed a web-based editor with instant execution & live preview. Auth system, project save/load/delete, and theme toggle included.",
  },


  {
    id: 5,
    title: "Dynamic Kanban Board",
    description:
      "Interactive Kanban board with drag & drop, persistence, and modular JS functions.",
    image: "images/kanban-board.png", 
    fit: "contain",
    technologies: ["HTML5", "CSS3", "Vanilla JS", "localStorage"],
    github: "https://github.com/Devakipvn/kanban-board",
    live:   "https://devakipvn.github.io/kanban-board/",
    category: "web",
    longDescription:
      "I built this interactive Kanban Board to manage tasks efficiently. Features include task creation with title & description, three columns (To Do, In Progress, Done), drag & drop movement, and persistence using localStorage. The project uses clean, modular JavaScript functions for scalability.",
  },

  {
    id: 6,
    title: "Psychometric Test Web App",
    description:
      "Web-based psychometric test with scoring, analysis, and learning roadmaps.",
    image: "images/Psychometric test img.png",
    fit: "contain",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/Devakipvn/Psychometric-test-Web-App",
    live: "https://devakipvn.github.io/Psychometric-test-Web-App/",
    category: "web",
    longDescription:
      "A web app that analyzes reasoning skills with instant scoring and personalized learning paths. Built fully responsive with Bootstrap.",
  },

  {
    id: 7,
    title: "Book Management Dashboard 📚",
    description:
      "Responsive React.js dashboard to manage books with CRUD operations and mock API integration.",
    image: "images/book-dashboard.png", 
    fit: "cover",
    technologies: ["React.js", "React Query", "Material-UI", "TypeScript"],
    github: "https://github.com/Devakipvn/Dashboard-for-a-Book-Management-App",
    category: "web",
    longDescription:
      "A responsive React.js dashboard to manage books with full CRUD functionality. Users can add, edit, delete, and view books via a clean, interactive interface. It’s API-connected (CrudCrud) and fully responsive for desktop and mobile. Built with React.js, React Query, Material-UI, and TypeScript.",
  },

  {
    id: 8,
    title: "Java ATM GUI Application",
    description:
      "Java Swing-based ATM simulator with login, deposit, withdrawal, and balance check.",
    image: "images/Java based Atm img.png",
    fit: "contain",
    technologies: ["Java", "Java Swing"],
    github: "https://github.com/Devakipvn/Java-based-ATM-Simulator",
    category: "desktop",
    longDescription:
      "ATM app built with core Java + Swing. Implements GUI event handling and OOP concepts for banking simulation.",
  },
  {
    id: 9,
    title: "Sentiment Analysis (Customer Reviews)",
    description: "Classifies customer reviews as positive, negative, or neutral.",
    image: "images/Sentimental Analysis img.png",
    fit: "contain",
    technologies: ["Python", "NLP", "NLTK", "spaCy", "Pandas"],
    github:
      "https://github.com/Devakipvn/Sentimental-analysis-internship-project",
    category: "ml",
    longDescription:
      "NLP-based ML model with preprocessing (tokenization, lemmatization, stopwords). Uses Naïve Bayes for classification of reviews.",
  },
  {
    id: 10,
    title: "Scientific Calculator",
    description: "Python Tkinter GUI calculator with advanced scientific functions.",
    image: "images/Scientific Calculator img.png",
    fit: "contain",
    technologies: ["Python", "Tkinter"],
    github: "https://github.com/Devakipvn/Scientific-Calculator",
    category: "desktop",
    longDescription:
      "GUI calculator supporting arithmetic + scientific operations (trigonometry, sqrt, exponentiation).",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);
  return (
  <section
      id="projects"   
      ref={sectionRef}
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
        <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my work across Web, Desktop, and ML applications.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" onValueChange={(v) => setFilter(v)}>
          <TabsList className="flex justify-center gap-4 mb-10">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Apps</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="ml">ML / Data</TabsTrigger>
          </TabsList>

          <TabsContent value={filter}>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`shadow-card hover:shadow-glow-lg hover:scale-105 
                    glass-card tilt-card group cursor-pointer transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${50 + index * 50}ms` }}

                >
                  <CardContent className="p-6 space-y-4">
                    {/* Image placeholder */}
                    <div className="h-40 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full rounded-lg ${
                          project.fit === "contain" ? "object-contain" : "object-cover"
                        }`}
                      />
                    </div>

                    {/* Category */}
                    <Badge className="bg-gray-700/70 text-gray-100 border border-gray-600">
                      {project.category}
                    </Badge>

                    {/* Title + Desc */}
                    <h3 className="text-xl font-bold font-space">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gray-700/70 text-gray-100 border border-gray-600 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge className="bg-gray-700/70 text-gray-100 border border-gray-600 text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-4">
                       {/* Code button */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full glass-card"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      )}

                      {/* Live button only for web projects */}
                      {project.category === "web" && project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full glass-card"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </Button>
                        </a>
                      )}

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="w-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                            text-white font-medium text-xs py-1.5 px-3 rounded-md 
                              transition-all duration-300 transform hover:scale-105 
                              flex items-center justify-center"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </DialogTrigger>

                        <DialogContent
                          className="glass-card max-w-md md:max-w-xl max-h-[80vh] p-6 fixed inset-0 m-auto flex flex-col overflow-y-auto"
                        >
                          <DialogHeader>
                            <DialogTitle className="text-xl font-space gradient-text">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>

                          <div className="space-y-6">
                            {/* Image / Icon */}
                            <div className="h-40 rounded-lg overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-full rounded-lg ${
                                  project.fit === "contain" ? "object-contain" : "object-cover"
                                }`}
                              />
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                              {project.longDescription}
                            </p>

                            {/* Technologies */}
                            <div className="space-y-4">
                              <h4 className="font-semibold">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    className="bg-gray-700/70 text-gray-100 border border-gray-600 shadow-card"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Action buttons inside modal */}
                            <div className="flex gap-4 pt-2">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1"
                                >
                                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-card hover:shadow-glow-lg hover:scale-105">
                                    <Github className="h-4 w-4 mr-2" />
                                    View Source Code
                                  </Button>
                                </a>
                              )}

                              {project.category === "web" && project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1"
                                >
                                  <Button
                                    variant="outline"
                                    className="w-full glass-card shadow-card hover:shadow-glow-lg hover:scale-105"
                                  >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live Demo
                                  </Button>
                                </a>
                              )}
                            </div>

                          </div>
                        </DialogContent>
                      </Dialog>

                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;

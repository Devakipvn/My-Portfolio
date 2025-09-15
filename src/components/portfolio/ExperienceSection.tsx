import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
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

  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Lead a team of 5 developers in building scalable web applications. Implemented microservices architecture resulting in 40% improved performance. Mentored junior developers and established coding standards.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      achievements: [
        "Reduced application load time by 40%",
        "Led migration to microservices architecture",
        "Mentored 3 junior developers to mid-level positions"
      ]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Frontend Developer",
      location: "San Francisco, CA", 
      duration: "2020 - 2022",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components. Implemented automated testing resulting in 60% reduction in bugs.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Jest", "Cypress"],
      achievements: [
        "Built component library used across 5 products",
        "Implemented comprehensive testing suite",
        "Improved code coverage from 30% to 90%"
      ]
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Junior Web Developer",
      location: "Remote",
      duration: "2019 - 2020",
      description: "Created custom WordPress themes and plugins for client websites. Worked with cross-functional teams to deliver projects on time and within budget. Gained experience in various web technologies.",
      technologies: ["JavaScript", "PHP", "WordPress", "MySQL", "HTML/CSS"],
      achievements: [
        "Delivered 15+ client projects successfully",
        "Developed custom WordPress plugin with 1000+ downloads",
        "Improved client website performance by 50%"
      ]
    },
    {
      id: 4,
      company: "Freelance",
      position: "Web Developer",
      location: "Remote",
      duration: "2018 - 2019",
      description: "Provided web development services to small businesses and startups. Built responsive websites and e-commerce solutions. Managed client relationships and project timelines independently.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      achievements: [
        "Completed 25+ freelance projects",
        "Maintained 5-star rating on freelance platforms",
        "Generated $50K+ in revenue"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey through various roles and responsibilities.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-primary h-full"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                  <Card className="glass-card glow-effect">
                    <CardContent className="p-6 space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-bold font-space gradient-text">
                            {exp.position}
                          </h3>
                          <Badge variant="secondary" className="glass-card">
                            {exp.company}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
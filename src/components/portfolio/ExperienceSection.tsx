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
      company: "ProjectsPlace",
      position: "Full-Stack Developer",
      location: "On-Site",
      duration: "Aug 2025 - Present",
      description: "Developed a full-stack platform alongside friends to deliver real-world applications. Designed and implemented responsive frontend interfaces and integrated backend APIs. Developed scalable and reusable code, ensuring cross-device compatibility.",
      technologies: ["JavaScript", "TypeScript", "React.js", "Node.js", "REST APIs"],
      achievements: [
        "Contributed to project planning, design, and deployment",
        "Developed scalable and reusable code components",
        "Ensured cross-device compatibility"
      ]
    },
    {
      id: 2,
      company: "Easy Hiring Infotech",
      position: "Full-Stack Web Developer",
      location: "Remote", 
      duration: "Apr 2025 - Jun 2025",
      description: "Developed a fully responsive website highlighting Vizag's popular tourist destinations, optimized for desktop and mobile. Enhanced user engagement by integrating interactive UI components, media-rich content, and smooth navigation.",
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      achievements: [
        "Created fully responsive tourist destination website",
        "Enhanced user engagement with interactive components",
        "Optimized for both desktop and mobile platforms"
      ]
    },
    {
      id: 3,
      company: "Apex Planet Software Pvt Ltd",
      position: "Web Development Intern",
      location: "Remote",
      duration: "Oct 2024 - Dec 2024",
      description: "Implemented API integration and responsive design to enhance accessibility and performance. Debugged and optimized applications to improve reliability and efficiency.",
      technologies: ["JavaScript", "API Integration", "HTML5", "CSS3"],
      achievements: [
        "Implemented API integration successfully",
        "Enhanced application accessibility and performance",
        "Improved application reliability through debugging"
      ]
    },
    {
      id: 4,
      company: "Sri Padmavati Mahila Visvavidyalayam",
      position: "Master of Computer Application",
      location: "Tirupati, A.P",
      duration: "2023 - 2025",
      description: "CGPA: 8.3. Advanced studies in computer applications, focusing on full-stack development, database management, and software engineering principles.",
      technologies: ["Advanced Programming", "Database Management", "Software Engineering"],
      achievements: [
        "Maintaining 8.3 CGPA",
        "Specialized in full-stack development",
        "Strong foundation in software engineering"
      ]
    },
    {
      id: 5,
      company: "Punyagiri Degree and PG College",
      position: "Bachelor of Computer Science",
      location: "Vizianagaram, A.P",
      duration: "2020 - 2023",
      description: "CGPA: 8.7. Strong foundation in computer science fundamentals, programming languages, and web development technologies.",
      technologies: ["Java", "Python", "Database Design", "Web Development"],
      achievements: [
        "Graduated with 8.7 CGPA",
        "Strong programming foundation",
        "Comprehensive computer science knowledge"
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
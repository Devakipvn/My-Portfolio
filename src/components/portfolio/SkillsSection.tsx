import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 80, color: "bg-gradient-primary" },
        { name: "TypeScript", level: 88, color: "bg-gradient-secondary" },
        { name: "React.js", level: 82, color: "bg-gradient-accent" },
        { name: "HTML5", level: 85, color: "bg-gradient-primary" },
        { name: "CSS3", level: 93, color: "bg-gradient-secondary" },
        { name: "Tailwind CSS", level: 90, color: "bg-gradient-accent" },
        { name: "Bootstrap", level: 88, color: "bg-gradient-primary" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 87, color: "bg-gradient-accent" },
        { name: "Python", level: 90, color: "bg-gradient-primary" },
        { name: "Java", level: 85, color: "bg-gradient-secondary" },
        { name: "Flask", level: 80, color: "bg-gradient-accent" },
        { name: "REST APIs", level: 82, color: "bg-gradient-primary" },
        { name: "PostgreSQL", level: 79, color: "bg-gradient-secondary" },
        { name: "MySQL", level: 80, color: "bg-gradient-accent" }
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git", level: 73, color: "bg-gradient-secondary" },
        { name: "GitHub", level: 82, color: "bg-gradient-accent" },
        { name: "Postman", level: 70, color: "bg-gradient-primary" },
        { name: "GitHub Copilot", level: 85, color: "bg-gradient-secondary" },
        { name: "UI/UX Design", level: 78, color: "bg-gradient-accent" },
        { name: "Web Design", level: 90, color: "bg-gradient-primary" }
      ]
    }
  ];

  const techStack = [
    "JavaScript", "TypeScript", "React.js", "HTML5", "CSS3", "Bootstrap", 
    "Tailwind CSS", "Node.js", "Python", "Java", "Flask", "REST APIs", 
    "Git", "GitHub", "Postman", "GitHub Copilot", "PostgreSQL", "MySQL", 
    "UI/UX Design", "Web Design"
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life.
          </p>
        </div>

        {/* Skill categories with progress bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`shadow-card shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 200}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-space mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} transition-all duration-1000 ease-out ${
                            animateSkills ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            width: animateSkills ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              800 + categoryIndex * 200 + skillIndex * 100
                            }ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

     {/* Tech stack badges */}
        <Card
          className={`shadow-card shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105  ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold font-space mb-6 text-center gradient-text">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech}
                  className={`px-4 py-2 text-sm font-medium 
                    bg-gray-700/70 text-gray-100 border border-gray-600
                    hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white
                    hover:scale-110 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                  style={{ transitionDelay: `${1000 + index * 50}ms` }}
                >
                  {tech}
                </Badge>

              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default SkillsSection;

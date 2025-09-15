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
        { name: "React", level: 95, color: "bg-gradient-primary" },
        { name: "TypeScript", level: 90, color: "bg-gradient-secondary" },
        { name: "Next.js", level: 88, color: "bg-gradient-accent" },
        { name: "Tailwind CSS", level: 92, color: "bg-gradient-primary" },
        { name: "Vue.js", level: 85, color: "bg-gradient-secondary" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 93, color: "bg-gradient-accent" },
        { name: "Python", level: 87, color: "bg-gradient-primary" },
        { name: "PostgreSQL", level: 90, color: "bg-gradient-secondary" },
        { name: "MongoDB", level: 85, color: "bg-gradient-accent" },
        { name: "GraphQL", level: 82, color: "bg-gradient-primary" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95, color: "bg-gradient-secondary" },
        { name: "Docker", level: 88, color: "bg-gradient-accent" },
        { name: "AWS", level: 85, color: "bg-gradient-primary" },
        { name: "Figma", level: 90, color: "bg-gradient-secondary" },
        { name: "Testing", level: 87, color: "bg-gradient-accent" }
      ]
    }
  ];

  const techStack = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST API", "Docker", 
    "AWS", "Git", "Figma", "Tailwind CSS", "Material-UI", "Express.js"
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              className={`glass-card glow-effect transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                            animateSkills ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            width: animateSkills ? `${skill.level}%` : '0%',
                            transitionDelay: `${800 + categoryIndex * 200 + skillIndex * 100}ms`
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
        <Card className={`glass-card glow-effect transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold font-space mb-6 text-center gradient-text">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className={`glass-card px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
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
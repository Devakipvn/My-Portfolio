import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Heart } from "lucide-react";

const AboutSection = () => {
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

  const cards = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient code using the latest technologies and best practices."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Bringing ideas to life with stunning visual designs that captivate and engage users."
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimizing applications for speed and scalability to deliver exceptional user experiences."
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Creating intuitive interfaces that prioritize user needs and accessibility standards."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions
            that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>

        {/* Bio card */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="glass-card tilt-card glow-effect max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-space gradient-text">
                    Building the Future, One Line at a Time
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in San Francisco, I specialize in React, Node.js, and modern web technologies. 
                    When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
                    or hiking through the California mountains.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of technology to solve real-world problems and create meaningful 
                    connections between people and digital experiences.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-primary rounded-full flex items-center justify-center">
                    <div className="w-56 h-56 bg-card rounded-full flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                className={`glass-card tilt-card glow-effect h-full transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold font-space text-lg">{card.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
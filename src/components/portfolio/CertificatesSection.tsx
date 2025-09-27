import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar } from "lucide-react";

const CertificatesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
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

  const certificates = [
    {
      id: 1,
      title: "OCA - Certified Java Associate",
      issuer: "Oracle",
      date: "Aug 2025",
      url: "https://www.linkedin.com/in/pvndevaki/overlay/1754483343341/single-media-viewer/?profileId=ACoAAD39q48B19cFjrPCDuZZ-43_ytrfKIy3Keo",
      icon: "☕",
      level: "Professional"
    },
    {
      id: 2,
      title: "The Complete Introduction to SQL Programming",
      issuer: "Udemy",
      date: "Aug 2025",
      url: "https://www.udemy.com/certificate/UC-b11e01e4-29fc-4e1b-9a78-cad05df85833/",
      icon: "🗄️",
      level: "Intermediate"
    },

    {
      id: 3,
      title: "Python Complete Course and Flask Framework, HTML Essentials",
      issuer: "Udemy",
      date: "Aug 2025",
      url: "https://www.udemy.com/certificate/UC-77ce4c32-e15d-461f-9095-618a9356f236/",
      icon: "🐍",
      level: "Intermediate"
    },

    {
      id: 4,
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "June 2025",
      url: "https://www.linkedin.com/in/pvndevaki/details/certifications/1749567666674/single-media-viewer/?profileId=ACoAAD39q48B19cFjrPCDuZZ-43_ytrfKIy3Keo",
      icon: "🐍",
      level: "Beginner"
    },

    {
      id: 5,
      title: "Learn HTML and CSS from Beginning to Advanced",
      issuer: "Udemy",
      date: "Dec 2024",
      url: "https://www.udemy.com/certificate/UC-53a98fb5-1e22-482a-9db8-20fd6a06932b/",
      icon: "🌐",
      level: "Beginner"
    },
    
    {
      id: 6,
      title: "How to Plan Your Website",
      issuer: "LinkedIn Learning",
      date: "Jan 2025",
      url: "https://www.linkedin.com/learning/certificates/7ab351c1531d62f6c0c126a50790d611fc9d52de81448763fee1a3e3d1c2c557",
      icon: "📐",
      level: "Beginner"
    },
    {
      id: 7,
      title: "Introduction to Web Design and Development",
      issuer: "LinkedIn Learning",
      date: "Dec 2024",
      url: "https://www.linkedin.com/in/pvndevaki/details/certifications/1734879833779/single-media-viewer/?profileId=ACoAAD39q48B19cFjrPCDuZZ-43_ytrfKIy3Keo",
      icon: "💻",
      level: "Beginner"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications validating my skills in programming, web development, and software engineering.
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <Card 
                className="shadow-card shadow-glow hover:shadow-glow-lg cursor-pointer h-full transition-all duration-500 transform-gpu"
                onMouseEnter={() => setFlippedCard(cert.id)}
                onMouseLeave={() => setFlippedCard(null)}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Front */}
                <CardContent className={`p-6 space-y-4 backface-hidden ${flippedCard === cert.id ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <Badge variant="secondary" className="glass-card">{cert.level}</Badge>
                    <h3 className="text-lg font-bold font-space leading-tight">{cert.title}</h3>
                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </div>
                </CardContent>

                {/* Back */}
                <CardContent className={`p-6 space-y-4 absolute inset-0 backface-hidden rotate-y-180 ${flippedCard === cert.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="space-y-4 h-full flex flex-col justify-between">
                    <div className="text-center">
                      <h3 className="text-lg font-bold font-space gradient-text mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Issued by {cert.issuer} in {cert.date}.
                      </p>
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                                text-white font-semibold text-sm py-2 px-4 rounded-lg 
                                shadow-glow hover:shadow-lg transition-all duration-300 
                                transform hover:scale-105 flex items-center justify-center"
                    >
                      <Award className="h-4 w-4 mr-2 inline" />
                      View Certificate
                    </a>

                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

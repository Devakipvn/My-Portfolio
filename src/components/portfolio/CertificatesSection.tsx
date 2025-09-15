import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CertificatesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
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

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001",
      description: "Comprehensive certification covering AWS cloud architecture, security, scalability, and cost optimization.",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      icon: "☁️",
      level: "Professional"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-002",
      description: "Professional-level certification for developing scalable applications on Google Cloud Platform.",
      skills: ["GCP Services", "Kubernetes", "App Engine", "Cloud Functions"],
      icon: "🌐",
      level: "Professional"
    },
    {
      id: 3,
      title: "Meta React Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-RD-2022-003",
      description: "Advanced React development certification covering modern React patterns, hooks, and performance optimization.",
      skills: ["React", "Redux", "Hooks", "Performance", "Testing"],
      icon: "⚛️",
      level: "Advanced"
    },
    {
      id: 4,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-CD-2022-004",
      description: "Comprehensive certification covering MongoDB database design, queries, and application development.",
      skills: ["MongoDB", "NoSQL", "Aggregation", "Indexing", "Sharding"],
      icon: "🍃",
      level: "Professional"
    },
    {
      id: 5,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2021",
      credentialId: "DCA-2021-005",
      description: "Certification demonstrating proficiency in Docker containerization and orchestration technologies.",
      skills: ["Docker", "Containers", "Docker Compose", "Swarm", "DevOps"],
      icon: "🐳",
      level: "Associate"
    },
    {
      id: 6,
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CKA-2021-006",
      description: "Hands-on certification demonstrating skills in Kubernetes cluster administration and management.",
      skills: ["Kubernetes", "Cluster Management", "Networking", "Security", "Troubleshooting"],
      icon: "⚓",
      level: "Professional"
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
            Professional certifications and achievements that validate my expertise in various technologies.
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <Card 
                className={`glass-card glow-effect cursor-pointer h-full transition-all duration-500 transform-gpu ${
                  flippedCard === cert.id ? 'rotate-y-180' : ''
                }`}
                onMouseEnter={() => setFlippedCard(cert.id)}
                onMouseLeave={() => setFlippedCard(null)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Front of card */}
                <CardContent className={`p-6 space-y-4 backface-hidden ${flippedCard === cert.id ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <Badge variant="secondary" className="glass-card">
                      {cert.level}
                    </Badge>
                    <h3 className="text-lg font-bold font-space leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </div>
                </CardContent>

                {/* Back of card */}
                <CardContent className={`p-6 space-y-4 absolute inset-0 backface-hidden rotate-y-180 ${flippedCard === cert.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="text-center">
                      <h3 className="text-lg font-bold font-space gradient-text mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3 flex-1">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-full gradient-button text-sm py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                          <Award className="h-4 w-4 mr-2 inline" />
                          View Certificate
                        </button>
                      </DialogTrigger>
                      <DialogContent className="glass-card max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-space gradient-text flex items-center gap-2">
                            <span className="text-3xl">{cert.icon}</span>
                            {cert.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="text-center p-8 bg-gradient-primary rounded-lg">
                            <div className="text-6xl mb-4">{cert.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                            <p className="text-white/80 text-lg">{cert.issuer}</p>
                            <p className="text-white/60 mt-2">Earned in {cert.date}</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Description:</h4>
                              <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Skills & Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {cert.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary" className="glass-card">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                              <div>
                                <p className="font-semibold">Credential ID</p>
                                <p className="font-mono text-sm text-muted-foreground">{cert.credentialId}</p>
                              </div>
                              <button className="gradient-button px-4 py-2 rounded-lg">
                                <ExternalLink className="h-4 w-4 mr-2 inline" />
                                Verify
                              </button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
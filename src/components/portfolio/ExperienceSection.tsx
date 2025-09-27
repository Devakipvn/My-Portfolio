"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const EXPERIENCE = [
  {
    id: 1,
    company: "ProjectsPlace",
    position: "Full-Stack Developer",
    location: "On-Site",
    duration: "Aug 2025 - Present",
    description:
      "Developed a full-stack platform alongside friends to deliver real-world applications. Designed responsive frontend interfaces and integrated backend APIs. Built scalable and reusable code for cross-device compatibility.",
    technologies: ["JavaScript", "TypeScript", "React.js", "Node.js", "REST APIs"],
    achievements: [
      "Contributed to project planning, design, and deployment",
      "Developed scalable and reusable components",
      "Ensured cross-device compatibility",
    ],
  },
  {
    id: 2,
    company: "Easy Hiring Infotech",
    position: "Full-Stack Web Developer",
    location: "Remote",
    duration: "Apr 2025 - Jun 2025",
    description:
      "Developed a fully responsive website highlighting Vizag's tourist destinations. Integrated interactive UI components, media-rich content, and smooth navigation.",
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    achievements: [
      "Created fully responsive tourist website",
      "Enhanced user engagement with interactive components",
      "Optimized for desktop and mobile platforms",
    ],
  },
  {
    id: 3,
    company: "Apex Planet Software Pvt Ltd",
    position: "Web Development Intern",
    location: "Remote",
    duration: "Oct 2024 - Dec 2024",
    description:
      "Implemented API integration and responsive design to enhance performance and accessibility. Debugged and optimized applications for reliability.",
    technologies: ["JavaScript", "API Integration", "HTML5", "CSS3"],
    achievements: [
      "Implemented API integration successfully",
      "Enhanced accessibility and performance",
      "Improved reliability through debugging",
    ],
  },
];

const EDUCATION = [
  {
    program: "M.C.A., Sri Padmavati Mahila Visvavidyalayam (SPMVV)",
    place: "Tirupati, A.P.",
    detail: "CGPA 8.3 (2023 – 2025)",
  },
  {
    program: "B.Sc. Computer Science, Punyagiri Degree & PG College",
    place: "Vizianagaram, A.P.",
    detail: "CGPA 8.7 (2020 – 2023)",
  },
  {
    program: "MPC, Punyagiri Junior & Degree College",
    place: "Vizianagaram, A.P.",
    detail: "CGPA 9.3 (2018 – 2020)",
  },
  {
    program: "SSC, Sri Satya Sai Public School",
    place: "Vizianagaram, A.P.",
    detail: "CGPA 9.8 (2017 – 2018)",
  },
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey through various roles and responsibilities.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500/40 z-0"></div>

          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-12 relative flex flex-col md:flex-row items-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-glow z-10"></div>

              {/* Card */}
              <div
  className={`w-full md:w-5/12 ${
    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
  }`}
>
  <Card className="shadow-card hover:shadow-glow hover:scale-105 glass-card tilt-card group cursor-pointer transition-all duration-300">
    <CardContent className="p-4 space-y-3 text-left">
      {/* Always left-aligned */}
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg md:text-xl font-bold font-space gradient-text">
          {exp.position}
        </h3>
        <Badge className="bg-gray-700/70 text-gray-100 border border-gray-600 text-xs">
          {exp.company}
        </Badge>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-purple-400" />
          {exp.duration}
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-purple-400" />
          {exp.location}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <Badge
            key={tech}
            className="bg-gray-700/70 text-gray-100 border border-gray-600 text-xs shadow-card hover:shadow-glow transition-all duration-300"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="space-y-1 pt-2">
        <h4 className="font-semibold text-sm text-purple-400">Key Achievements:</h4>
        <ul className="space-y-1">
          {exp.achievements.map((achieve, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              {achieve}
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

        {/* Education Section */}
        <div
          className={`text-center mb-12 mt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {EDUCATION.map((edu, index) => (
            <Card
              key={edu.program}
              className={`shadow-card hover:shadow-glow hover:scale-105 
                      glass-card tilt-card group cursor-pointer transition-all duration-300 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-semibold gradient-text">{edu.program}</h3>
                </div>

                <p className="text-sm text-muted-foreground">{edu.place}</p>
                <p className="text-sm font-medium text-purple-400">{edu.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

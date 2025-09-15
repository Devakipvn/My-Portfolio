import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "devakipvn@gmail.com",
      href: "mailto:devakipvn@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8328033928",
      href: "tel:+918328033928"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tirupati, A.P, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Devakipvn",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      href: "https://linkedin.com/in/pvndevaki",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:devakipvn@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className={`glass-card glow-effect transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-space mb-6 gradient-text">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-card border-primary/20 focus:border-primary/40 transition-all duration-300 min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="gradient-button w-full py-6 text-lg font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact information */}
          <div className="space-y-8">
            {/* Contact details */}
            <Card className={`glass-card glow-effect transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold font-space mb-6 gradient-text">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={info.title}
                        href={info.href}
                        className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold group-hover:gradient-text transition-all duration-300">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social links */}
            <Card className={`glass-card glow-effect transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-space mb-6 gradient-text">
                  Follow Me
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`flex items-center gap-3 p-4 glass-card rounded-lg hover:scale-105 transition-all duration-300 group ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className={`glass-card glow-effect transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-xl font-bold font-space gradient-text">
                  Ready to work together?
                </h3>
                <p className="text-muted-foreground">
                  I'm always interested in new opportunities and exciting projects.
                </p>
                <Button className="gradient-button px-8 py-3">
                  <Mail className="h-4 w-4 mr-2" />
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
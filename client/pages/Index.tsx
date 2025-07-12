import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  Star,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Redux", level: 90, category: "State Management" },
    { name: "TypeScript", level: 88, category: "Language" },
    { name: "Next.js", level: 85, category: "Framework" },
    { name: "Tailwind CSS", level: 95, category: "Styling" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "HTML/CSS", level: 98, category: "Frontend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Responsive Design", level: 95, category: "UI/UX" },
    { name: "API Integration", level: 88, category: "Backend" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce web application built with React, Redux, and Tailwind CSS. Features include product catalog, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "https://github.com/ahmedebrahem0",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "Socket.io"],
      liveDemo: "#",
      github: "https://github.com/ahmedebrahem0",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, charts, and weather alerts using third-party APIs.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveDemo: "#",
      github: "https://github.com/ahmedebrahem0",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive personal portfolio website showcasing modern design principles and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveDemo: "#",
      github: "https://github.com/ahmedebrahem0",
      featured: false,
    },
  ];

  const experiences = [
    {
      title: "Front-End Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Cairo, Egypt",
      description:
        "Developed and maintained multiple React-based web applications, implemented responsive designs, and collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 5+ production web applications using React and Redux",
        "Improved application performance by 40% through code optimization",
        "Led migration from legacy JavaScript to modern React ecosystem",
      ],
    },
    {
      title: "Junior Front-End Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      location: "Cairo, Egypt",
      description:
        "Worked on client projects focusing on responsive web design and modern JavaScript frameworks.",
      achievements: [
        "Delivered 10+ client websites with 100% client satisfaction",
        "Implemented modern CSS techniques and responsive design patterns",
        "Collaborated with designers to create pixel-perfect implementations",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Cairo University",
      period: "2018 - 2022",
      location: "Cairo, Egypt",
      description:
        "Focused on software engineering, data structures, and web development technologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Ahmed Ebrahem
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-hero-gradient p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">AE</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Ahmed Ebrahem
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                Front-End Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Passionate about creating beautiful, responsive web applications
                with modern technologies. Based in Cairo, Egypt, I specialize in
                React.js, Redux, and building exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="gap-2"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/ahmedebrahem0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/ahmed-ebrahem-421604235"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ahmed.ebrahem.ebdelazem@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Hello, I'm Ahmed
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate Front-End Developer based in Cairo, Egypt,
                  with expertise in modern web technologies. I love creating
                  intuitive, responsive, and visually appealing web applications
                  that provide exceptional user experiences.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With a strong foundation in React.js, Redux, and TypeScript, I
                  focus on writing clean, maintainable code and staying
                  up-to-date with the latest industry trends and best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Code className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Writing maintainable, readable code
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Smartphone className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">Responsive</h4>
                    <p className="text-sm text-muted-foreground">
                      Mobile-first design approach
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">Modern Tech</h4>
                    <p className="text-sm text-muted-foreground">
                      Latest web technologies
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Team player mindset
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Experience & Education
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded"></div>
                  Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {exp.company} • {exp.period}
                        </CardDescription>
                        <CardDescription>{exp.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded"></div>
                  Education
                </h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {edu.institution} • {edu.period}
                        </CardDescription>
                        <CardDescription>{edu.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`${project.featured ? "ring-2 ring-primary/20" : ""}`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge variant="default">Featured</Badge>
                      )}
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-hero-gradient h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's discuss how we can bring your ideas to life!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    ahmed.ebrahem.ebdelazem@gmail.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">
                    ahmed-ebrahem-421604235
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Github className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground">ahmedebrahem0</p>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="gap-2"
              onClick={() =>
                window.open(
                  "mailto:ahmed.ebrahem.ebdelazem@gmail.com",
                  "_blank",
                )
              }
            >
              <Mail className="w-5 h-5" />
              Send me a message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Ahmed Ebrahem. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

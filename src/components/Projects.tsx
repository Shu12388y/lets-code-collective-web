import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      name: "DevTools Suite",
      description: "A comprehensive collection of developer productivity tools including code formatters, validators, and generators.",
      tags: ["TypeScript", "React", "Node.js"],
      stars: 234,
      forks: 45,
      featured: true
    },
    {
      name: "API Gateway",
      description: "Lightweight, fast API gateway with built-in authentication, rate limiting, and monitoring capabilities.",
      tags: ["Go", "Docker", "PostgreSQL"],
      stars: 189,
      forks: 32,
      featured: true
    },
    {
      name: "ML Toolkit",
      description: "Machine learning utilities and pre-trained models for common tasks like image classification and NLP.",
      tags: ["Python", "TensorFlow", "FastAPI"],
      stars: 156,
      forks: 28,
      featured: true
    },
    {
      name: "Code Review Bot",
      description: "Automated code review assistant that integrates with GitHub to provide intelligent feedback and suggestions.",
      tags: ["Python", "GitHub API", "AI"],
      stars: 98,
      forks: 19,
      featured: false
    },
    {
      name: "Documentation Generator",
      description: "Generate beautiful documentation websites from your codebase with minimal configuration required.",
      tags: ["JavaScript", "Markdown", "Static Site"],
      stars: 67,
      forks: 12,
      featured: false
    },
    {
      name: "Testing Framework",
      description: "Modern testing framework with built-in mocking, parallel execution, and detailed reporting capabilities.",
      tags: ["TypeScript", "Jest", "Testing"],
      stars: 45,
      forks: 8,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our collection of open source projects. From developer tools to 
            machine learning libraries, we're building solutions that empower the community.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-foreground">
                    {project.name}
                  </h4>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {project.name}
                </h4>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};


import { Card } from "@/components/ui/card";
import { Heart, Code2, Globe, Lightbulb } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of collaboration and supporting each other's growth."
    },
    {
      icon: Code2,
      title: "Quality Code",
      description: "We strive for excellence in every line of code we write and review."
    },
    {
      icon: Globe,
      title: "Open Source",
      description: "All our projects are open source, contributing to the global developer community."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative solutions and cutting-edge technologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About LetsCode
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            LetsCode is an open source organization dedicated to fostering collaboration, 
            learning, and innovation in the developer community. We bring together passionate 
            developers from around the world to work on meaningful projects that solve real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To democratize software development by creating high-quality, 
                  accessible open source tools and fostering an inclusive community 
                  where developers of all skill levels can learn, contribute, and grow.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that when developers collaborate openly, we can solve 
                  bigger problems and create more innovative solutions together.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Inclusive & Welcoming</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Learning Focused</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Impact Driven</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Globally Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

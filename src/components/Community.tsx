
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Calendar, Award, Github, Twitter, Discord } from "lucide-react";

export const Community = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: MessageCircle, label: "Monthly Discussions", value: "1.2K" },
    { icon: Award, label: "Projects Completed", value: "50+" },
    { icon: Calendar, label: "Events This Year", value: "24" }
  ];

  const ways = [
    {
      icon: Github,
      title: "Contribute Code",
      description: "Submit pull requests, report bugs, or suggest new features to our open source projects."
    },
    {
      icon: MessageCircle,
      title: "Join Discussions",
      description: "Participate in our forums, share knowledge, and help other community members."
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Join our virtual meetups, workshops, and coding sessions happening regularly."
    },
    {
      icon: Award,
      title: "Mentor Others",
      description: "Share your expertise and help newcomers get started with open source development."
    }
  ];

  return (
    <section id="community" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with like-minded developers, contribute to meaningful projects, 
            and grow your skills in a supportive environment.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Ways to Get Involved */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Ways to Get Involved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ways.map((way, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <way.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {way.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {way.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/5 to-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Contributing?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting out, there's a place 
            for you in our community. Let's build something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="px-8">
              <Github className="w-5 h-5 mr-2" />
              View Contributing Guide
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm">
              <Discord className="w-5 h-5 mr-2" />
              Discord
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

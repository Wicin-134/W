import { Link } from "react-router-dom";
import { BookOpen, Code2, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QuickLinks = () => {
  const links = [
    {
      to: "/why",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Why W?",
      description: "Discover what makes W Language special and easy to learn"
    },
    {
      to: "/docs",
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Documentation",
      description: "Complete reference guide for all W Language features"
    },
    {
      to: "/examples",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Examples",
      description: "Practical code examples to kickstart your learning"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Explore More
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to master W Language
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link key={index} to={link.to} className="group">
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3">{link.icon}</div>
                  <CardTitle className="text-xl mb-2 flex items-center justify-between">
                    {link.title}
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-base">
                    {link.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;

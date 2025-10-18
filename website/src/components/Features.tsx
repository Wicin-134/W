import { Code2, Zap, Box, FileText, Timer, Shuffle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Simple Syntax",
    description: "Easy-to-learn syntax with clear, readable commands like 'show', 'int', and 'array'."
  },
  {
    icon: Zap,
    title: "Dynamic Typing",
    description: "Variables and arrays with automatic type detection. No verbose declarations needed."
  },
  {
    icon: Box,
    title: "Built-in Data Structures",
    description: "Native support for arrays, both numeric and string-based, with simple operations."
  },
  {
    icon: FileText,
    title: "File Operations",
    description: "Read and write files with simple commands. Perfect for data processing tasks."
  },
  {
    icon: Timer,
    title: "Time & Random",
    description: "Built-in time functions and random number generation for various use cases."
  },
  {
    icon: Shuffle,
    title: "Control Flow",
    description: "Intuitive if/else statements, while loops, and functions for program control."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build programs quickly and efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import Navigation from "@/components/Navigation";
import { Code2, Zap, BookOpen, Users } from "lucide-react";

const Why = () => {
  const reasons = [
    {
      icon: <Code2 className="w-12 h-12 text-primary" />,
      title: "Simple & Intuitive",
      description: "W Language is designed to be easy to learn and understand. Its straightforward syntax makes programming accessible to beginners while remaining powerful for experienced developers."
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Fast Execution",
      description: "Built for performance, W Language executes your code efficiently. Whether you're working with arrays, loops, or file operations, W delivers speed without complexity."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Easy to Learn",
      description: "With clear command names and minimal syntax rules, you can start writing meaningful programs in minutes. No complex boilerplate or confusing paradigms."
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Growing Community",
      description: "Join a supportive community of developers who are passionate about simple, effective programming. Share ideas, get help, and contribute to the language's evolution."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose W Language?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              W Language combines simplicity with power, making it the perfect choice for both beginners and experienced developers.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
              >
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="bg-[hsl(var(--code-bg))] border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">See It In Action</h2>
            <p className="text-muted-foreground mb-6">
              Here's a simple example that showcases W's clean syntax:
            </p>
            <pre className="text-foreground font-mono text-sm bg-background/50 p-4 rounded overflow-x-auto">
{`# Create and manipulate data
int count 0
array "10,20,30,40,50" numbers

# Loop through values
while count < "5"
  get numbers count = value
  show value
  count + 1 = count
done

show "Simple, right?"`}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Why;

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Calculator, Repeat, FileText } from "lucide-react";

const Examples = () => {
  const examples = [
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Calculator",
      description: "A simple calculator using W Language arithmetic operations",
      code: `# Simple Calculator
input "Enter first number:" = num1
input "Enter second number:" = num2

# Convert to integers
int a num1
int b num2

# Perform calculations
a + b = sum
a - b = difference
a * b = product
a / b = quotient

# Display results
show "Sum: "
show sum
show "Difference: "
show difference
show "Product: "
show product
show "Quotient: "
show quotient`
    },
    {
      icon: <Repeat className="w-8 h-8 text-accent" />,
      title: "Fibonacci Sequence",
      description: "Generate Fibonacci numbers using while loops",
      code: `# Fibonacci Sequence
int a 0
int b 1
int counter 0

show "Fibonacci Sequence (first 10):"
show a
show b

while counter < "8"
  a + b = next
  show next
  int temp a
  int a b
  int b next
  counter + 1 = counter
done`
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Guess the Number",
      description: "Interactive number guessing game",
      code: `# Guess the Number Game
random 1 100 = target
int tries 0
bool won false

show "Guess a number between 1 and 100!"

while not won
  input "Enter your guess:" = userInput
  int guess userInput
  tries + 1 = tries
  
  if guess < target show "Too low!"
  if guess > target show "Too high!"
  if guess = target
    bool won true
    show "Correct! You won in "
    show tries
    show " tries"
  done
done`
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "File Logger",
      description: "Log messages to a file with timestamps",
      code: `# Simple File Logger
input "Enter log message:" = message

# Get current timestamp
datetime

# Write to log file
write message "log.txt"
show "Message logged successfully!"

# Read and display log
read "log.txt" = content
show "Log contents:"
show content`
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
              Code Examples
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore practical examples to get started with W Language programming.
            </p>
          </div>

          {/* Example Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="mb-4">{example.icon}</div>
                  <CardTitle className="text-2xl mb-2">{example.title}</CardTitle>
                  <CardDescription className="text-base">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-[hsl(var(--code-bg))] p-4 rounded-lg overflow-x-auto text-sm border border-border">
                    <code className="text-muted-foreground font-mono">{example.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3 text-foreground">Try These Examples</h2>
            <p className="text-muted-foreground mb-6">
              Copy any example and try it in our interactive playground!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Go to Playground
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Examples;

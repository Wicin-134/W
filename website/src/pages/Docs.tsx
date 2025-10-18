import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Docs = () => {
  const sections = [
    {
      title: "Getting Started",
      content: `To get started with W Language, download the interpreter from GitHub:

1. Clone the repository: git clone https://github.com/Wicin-134/W
2. Follow the installation instructions in the README
3. Run your first program: w myprogram.w`
    },
    {
      title: "Basic Commands",
      content: `SHOW - Display output
  show "Hello World"
  show myVariable

INT - Integer variables
  int myNumber 42
  int negative -5

BOOL - Boolean values
  bool isActive true
  bool isComplete false`
    },
    {
      title: "Arrays",
      content: `ARRAY - Numeric arrays
  array "1,2,3,4,5" numbers
  leng numbers
  push numbers 6
  pop numbers
  get numbers 0 = firstElement

ARRAY_STR - String arrays
  array_str "hello ","world " words
  push words "!"
  get words 1 = secondWord`
    },
    {
      title: "Control Flow",
      content: `IF/ELSE - Conditional statements
  if x = "5" show "x is 5" else show "x is not 5"
  if count > "10" show "Too many"

WHILE - Loops
  int i 0
  while i < "10"
    show i
    i + 1 = i
  done`
    },
    {
      title: "Math Operations",
      content: `Basic arithmetic with variables:
  int a 10
  int b 5
  
  a + b = sum
  a - b = difference
  a * b = product
  a / b = quotient
  
  # Compound expressions
  x + 5 * 2 = result`
    },
    {
      title: "Functions",
      content: `Define and call functions:
  func greet
    show "Hello from function!"
  done
  
  call greet`
    },
    {
      title: "User Input",
      content: `Get input from users:
  input "Enter your name: " = name
  show name
  
  input "Enter a number: " = number
  number + 10 = result
  show result`
    },
    {
      title: "File Operations",
      content: `Read and write files:
  write "Hello File!" "output.txt"
  read "output.txt" = content
  show content`
    },
    {
      title: "Time & Random",
      content: `TIME - Get current time
  time        # Unix timestamp
  date        # YYYY-MM-DD
  datetime    # YYYY-MM-DD HH:MM:SS
  sleep 2     # Pause for 2 seconds

RANDOM - Generate random numbers
  random 1 10 = dice
  random -100 100 = range`
    },
    {
      title: "Advanced Features",
      content: `CLEAR - Clear variables
  clear            # Clear all variables
  clear-output     # Clear output console

COMMENTS - Document your code
  # This is a comment

INLINE - Multiple commands
  int x 5; int y 10; show x; show y

END - Terminate program
  END`
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete reference for W Language v0.9.1
            </p>
          </div>

          {/* Documentation Sections */}
          <Accordion type="single" collapsible className="space-y-4">
            {sections.map((section, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <pre className="text-muted-foreground font-mono text-sm whitespace-pre-wrap bg-[hsl(var(--code-bg))] p-4 rounded">
                    {section.content}
                  </pre>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Note:</span> For the most up-to-date documentation and examples, 
              visit the <a href="https://github.com/Wicin-134/W" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">official GitHub repository</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;

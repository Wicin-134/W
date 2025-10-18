import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const commands = [
  {
    category: "Display & I/O",
    items: [
      { cmd: "show \"text\"", desc: "Display text or variable" },
      { cmd: "input \"prompt:\" = var", desc: "Get user input" },
    ]
  },
  {
    category: "Variables",
    items: [
      { cmd: "int myNum 42", desc: "Create integer variable" },
      { cmd: "bool isOK true", desc: "Create boolean variable" },
    ]
  },
  {
    category: "Arrays",
    items: [
      { cmd: "array \"1,2,3\" nums", desc: "Create numeric array" },
      { cmd: "array_str \"a\",\"b\" words", desc: "Create string array" },
      { cmd: "leng myArray", desc: "Get array length" },
      { cmd: "push myArray 5", desc: "Add element to array" },
      { cmd: "pop myArray", desc: "Remove last element" },
      { cmd: "get myArray 0", desc: "Access array element" },
    ]
  },
  {
    category: "Math & Logic",
    items: [
      { cmd: "3+2=sum", desc: "Basic arithmetic (+, -, *, /)" },
      { cmd: "x > \"5\"", desc: "Comparison (>, <, =)" },
      { cmd: "and, or, not", desc: "Logical operators" },
    ]
  },
  {
    category: "Control Flow",
    items: [
      { cmd: "if x = \"5\" show \"yes\"", desc: "Conditional statement" },
      { cmd: "while x < \"10\"", desc: "Loop until condition false" },
      { cmd: "func myFunc", desc: "Define function" },
      { cmd: "call myFunc", desc: "Call function" },
      { cmd: "done", desc: "End block (while/func)" },
    ]
  },
  {
    category: "Time & Random",
    items: [
      { cmd: "time", desc: "Get current timestamp" },
      { cmd: "date", desc: "Get current date" },
      { cmd: "datetime", desc: "Get date and time" },
      { cmd: "sleep 2", desc: "Pause for N seconds" },
      { cmd: "random 1 10 = var", desc: "Random number in range" },
    ]
  },
  {
    category: "Files & Utility",
    items: [
      { cmd: "write \"text\" \"file.txt\"", desc: "Write to file" },
      { cmd: "read \"file.txt\" = var", desc: "Read from file" },
      { cmd: "clear", desc: "Clear all variables" },
      { cmd: "clear-output", desc: "Clear output console" },
      { cmd: "# comment", desc: "Add comment" },
      { cmd: "END", desc: "End program" },
    ]
  }
];

const QuickReference = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Quick Reference
          </h2>
          <p className="text-xl text-muted-foreground">
            All W Language commands at a glance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commands.map((section, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[250px] pr-4">
                  <div className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="border-b border-border/50 pb-3 last:border-0">
                        <code className="text-sm font-mono text-accent block mb-1">
                          {item.cmd}
                        </code>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickReference;

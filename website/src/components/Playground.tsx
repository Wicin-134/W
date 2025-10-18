import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const DEFAULT_CODE = `# Welcome to W Language Playground!
# Try modifying the code below and click Run

show "Hello from W Language!"
int myNumber 42
show myNumber

array "1,2,3,4,5" numbers
show numbers
leng numbers

int counter 0
while counter < "3"
  show counter
  counter + 1 = counter
done

show "Program completed!"`;

const Playground = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState("Click 'Run Code' to see the output here...");
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    const lines = code.split('\n');
    let result: string[] = [];
    const variables: Record<string, any> = {};
    const arrays: Record<string, any[]> = {};
    
    const evaluateCondition = (condition: string): boolean => {
      // Remove quotes if present
      condition = condition.trim();
      
      // Handle comparisons
      if (condition.includes('<')) {
        const [left, right] = condition.split('<').map(s => s.trim());
        const leftVal = variables[left] !== undefined ? variables[left] : parseFloat(left);
        const rightVal = right.startsWith('"') ? parseFloat(right.slice(1, -1)) : parseFloat(right);
        return leftVal < rightVal;
      }
      if (condition.includes('>')) {
        const [left, right] = condition.split('>').map(s => s.trim());
        const leftVal = variables[left] !== undefined ? variables[left] : parseFloat(left);
        const rightVal = right.startsWith('"') ? parseFloat(right.slice(1, -1)) : parseFloat(right);
        return leftVal > rightVal;
      }
      if (condition.includes('=')) {
        const [left, right] = condition.split('=').map(s => s.trim());
        const leftVal = variables[left] !== undefined ? variables[left] : left.replace(/"/g, '');
        const rightVal = right.replace(/"/g, '');
        return String(leftVal) === rightVal;
      }
      
      return false;
    };
    
    const executeExpression = (expr: string): any => {
      expr = expr.trim();
      
      if (expr.includes('+')) {
        const [left, right] = expr.split('+').map(p => p.trim());
        const leftVal = variables[left] !== undefined ? variables[left] : parseFloat(left);
        const rightVal = variables[right] !== undefined ? variables[right] : parseFloat(right);
        return leftVal + rightVal;
      }
      if (expr.includes('-')) {
        const [left, right] = expr.split('-').map(p => p.trim());
        const leftVal = variables[left] !== undefined ? variables[left] : parseFloat(left);
        const rightVal = variables[right] !== undefined ? variables[right] : parseFloat(right);
        return leftVal - rightVal;
      }
      
      return variables[expr] !== undefined ? variables[expr] : parseFloat(expr);
    };
    
    try {
      let i = 0;
      while (i < lines.length) {
        const line = lines[i].trim();
        
        // Skip comments and empty lines
        if (!line || line.startsWith('#')) {
          i++;
          continue;
        }
        
        // SHOW command
        if (line.startsWith('show ')) {
          const content = line.substring(5).trim();
          if (content.startsWith('"') && content.endsWith('"')) {
            result.push(content.slice(1, -1));
          } else if (variables[content] !== undefined) {
            result.push(String(variables[content]));
          } else if (arrays[content] !== undefined) {
            result.push(`[${arrays[content].join(', ')}]`);
          } else {
            result.push(content);
          }
        }
        
        // INT command
        else if (line.startsWith('int ')) {
          const parts = line.substring(4).trim().split(' ');
          const varName = parts[0];
          const value = parseInt(parts[1] || '0');
          variables[varName] = value;
        }
        
        // ARRAY command
        else if (line.startsWith('array ')) {
          const match = line.match(/array "([^"]*)" (\w+)/);
          if (match) {
            const values = match[1].split(',').map(v => parseFloat(v.trim()));
            const arrayName = match[2];
            arrays[arrayName] = values;
          }
        }
        
        // LENG command
        else if (line.startsWith('leng ')) {
          const arrayName = line.substring(5).trim();
          if (arrays[arrayName]) {
            result.push(`Length: ${arrays[arrayName].length}`);
          }
        }
        
        // WHILE loop
        else if (line.startsWith('while ')) {
          const condition = line.substring(6).trim();
          const loopStart = i + 1;
          let loopEnd = i + 1;
          
          // Find the matching 'done'
          let depth = 1;
          for (let j = loopStart; j < lines.length; j++) {
            const checkLine = lines[j].trim();
            if (checkLine.startsWith('while ')) depth++;
            if (checkLine === 'done') {
              depth--;
              if (depth === 0) {
                loopEnd = j;
                break;
              }
            }
          }
          
          // Execute while loop
          let iterations = 0;
          const maxIterations = 1000; // Safety limit
          
          while (evaluateCondition(condition) && iterations < maxIterations) {
            for (let j = loopStart; j < loopEnd; j++) {
              const loopLine = lines[j].trim();
              
              if (!loopLine || loopLine.startsWith('#')) continue;
              
              // Handle show in loop
              if (loopLine.startsWith('show ')) {
                const content = loopLine.substring(5).trim();
                if (content.startsWith('"') && content.endsWith('"')) {
                  result.push(content.slice(1, -1));
                } else if (variables[content] !== undefined) {
                  result.push(String(variables[content]));
                }
              }
              // Handle assignments in loop
              else if (loopLine.includes('=')) {
                const parts = loopLine.split('=').map(p => p.trim());
                if (parts.length === 2) {
                  const varName = parts[1];
                  const value = executeExpression(parts[0]);
                  variables[varName] = value;
                }
              }
            }
            iterations++;
          }
          
          i = loopEnd; // Skip to end of loop
        }
        
        // Skip 'done' markers
        else if (line === 'done') {
          // Already handled by while loop
        }
        
        // Math operations with assignment
        else if (line.includes('=')) {
          const parts = line.split('=').map(p => p.trim());
          if (parts.length === 2) {
            const varName = parts[1];
            const value = executeExpression(parts[0]);
            variables[varName] = value;
          }
        }
        
        i++;
      }
      
      if (result.length === 0) {
        result.push("Program executed successfully (no output)");
      }
      
      setOutput(result.join('\n'));
      toast.success("Code executed successfully!");
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      toast.error("Execution error");
    }
  };

  const resetCode = () => {
    setCode(DEFAULT_CODE);
    setOutput("Click 'Run Code' to see the output here...");
    toast.info("Code reset to default");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Interactive Playground
          </h2>
          <p className="text-xl text-muted-foreground">
            Try W Language right in your browser
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Code Editor</h3>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copyCode}
                  className="gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={resetCode}
                  className="gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
              </div>
            </div>
            
            <div className="flex-1 bg-[hsl(var(--code-bg))] border border-border rounded-lg overflow-hidden">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-[500px] p-4 bg-transparent text-foreground font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                spellCheck={false}
              />
            </div>
            
            <Button
              onClick={runCode}
              size="lg"
              className="mt-4 bg-[hsl(var(--success))] hover:bg-[hsl(var(--success))]/90 text-background gap-2"
            >
              <Play className="w-5 h-5" />
              Run Code
            </Button>
          </div>
          
          {/* Output Console */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Output Console</h3>
            <div className="flex-1 bg-[hsl(var(--code-bg))] border border-border rounded-lg p-4 overflow-auto">
              <pre className="text-foreground font-mono text-sm whitespace-pre-wrap">
                {output}
              </pre>
            </div>
            
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> This is a simplified client-side simulator for demonstration. 
                For full W Language capabilities, download the interpreter from GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;

import { Button } from "@/components/ui/button";
import { Github, Play, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToPlayground = () => {
    document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
          <span className="text-primary font-semibold">v0.9.1</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: '200% auto' }}>
          W Language
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          An open-source interpreted programming language designed for simplicity and ease of development
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            onClick={scrollToPlayground}
          >
            <Play className="w-5 h-5" />
            Try it Now
          </Button>
          
          <Button 
            size="lg" 
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white gap-2"
            asChild
          >
            <a href="https://discord.gg/MQY89HaEpg" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 gap-2"
            asChild
          >
            <a href="https://github.com/Wicin-134/W" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </div>
        
        {/* Floating code snippet */}
        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 shadow-2xl backdrop-blur-sm">
            <pre className="text-left font-mono text-sm text-foreground">
              <code>
                <span className="text-accent">show</span> <span className="text-green-400">"Hello, World!"</span>{'\n'}
                <span className="text-accent">int</span> number <span className="text-yellow-400">42</span>{'\n'}
                <span className="text-accent">array</span> <span className="text-green-400">"1,2,3"</span> myArray
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

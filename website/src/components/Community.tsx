import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Heart } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6">
            <MessageCircle className="w-16 h-16 text-[#5865F2] mx-auto animate-bounce" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Discord Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with other W Language developers, get help, share your projects, and help shape the future of the language!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white gap-2 min-w-[250px] text-lg h-14 shadow-lg shadow-[#5865F2]/50"
              asChild
            >
              <a href="https://discord.gg/MQY89HaEpg" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Join Discord Server
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 gap-2"
              asChild
            >
              <a href="https://github.com/Wicin-134/W" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                Star us on GitHub
              </a>
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              W Language v0.9.1 • Licensed under GPL-3.0 • Made with ❤️ by the community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

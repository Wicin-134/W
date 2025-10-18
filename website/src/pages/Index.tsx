import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Playground from "@/components/Playground";
import QuickReference from "@/components/QuickReference";
import QuickLinks from "@/components/QuickLinks";
import Community from "@/components/Community";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Playground />
      <QuickReference />
      <QuickLinks />
      <Community />
    </div>
  );
};

export default Index;

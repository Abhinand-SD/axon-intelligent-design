import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShowcaseSection = () => {
  return (
    <section id="work" className="py-24 md:py-36 px-8 md:px-16 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/animation/SparkAnimation06.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[200px_1fr_220px] gap-8 lg:gap-12 items-start">
        {/* Left sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex flex-col gap-16"
        >
          <div className="text-center">
            <p className="text-foreground text-lg font-semibold">Case Study</p>
            <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
              How we rebuilt a SaaS
              <br />
              platform in 5 days.
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground text-lg font-semibold">AI Workflow</p>
            <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
              Our design-to-code
              <br />
              pipeline explained.
            </p>
            <a href="#" className="text-foreground text-xs underline underline-offset-4 mt-3 inline-block hover:text-muted-foreground transition-colors">
              Read more
            </a>
          </div>
        </motion.div>

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-foreground text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Intelligent
            <br />
            design
            <br />
            systems
          </h2>

          <p className="text-muted-foreground text-xs mt-6">
            Mar 25 | Project No. 042
          </p>

          <Button variant="hero" size="lg" className="mt-8 gap-2 px-10 py-6 text-xs">
            View Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>

          <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em] mt-24 lg:mt-32">
            AI-Powered &middot; Innovations
          </p>
        </motion.div>

        {/* Right sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex flex-col gap-6 items-end text-right"
        >
          <div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Trusted by Forward-
              <br />
              Thinking Brands
            </p>
          </div>

          <div className="mt-8">
            <div className="flex -space-x-2 justify-end">
              <img src="/profile1.jpeg" alt="Profile 1" className="w-9 h-9 rounded-full border-2 border-background object-cover" />
              <img src="/profile2.jpeg" alt="Profile 2" className="w-9 h-9 rounded-full border-2 border-background object-cover" />
            </div>
            <p className="text-foreground text-4xl font-bold mt-3">120+</p>
            <p className="text-muted-foreground text-xs mt-1">
              Websites Launched
              <br />
              Worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

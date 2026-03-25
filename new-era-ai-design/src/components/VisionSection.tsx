import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisionSection = () => {
  return (
    <section id="vision" className="bg-background py-24 md:py-36 px-8 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-foreground text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] max-w-lg mb-16"
      >
        Discover our
        <br />
        intelligent
        <br />
        design ecosystem
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Abstract graphic */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/animation/SparkAnimation05.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Right — Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-lg"
        >
          <h3 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            AXON
            <br />
            Studio
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-6">
            AXON Studio operates at the intersection of design and artificial intelligence, building websites that think, adapt, and evolve. Our core capabilities span generative layouts, intelligent content systems, and real-time performance optimization — transformations that redefine how brands show up online.
          </p>
          <Button variant="hero" size="lg" className="mt-8 gap-2 px-8 py-5 text-xs">
            Learn more
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-lg"
        >
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Every project starts with understanding your brand at its core. We then leverage AI-powered design systems to craft digital experiences that are not only visually striking but intelligently responsive to user behavior and market trends.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-6">
            From concept to launch, our process is streamlined by machine learning — eliminating guesswork, accelerating timelines, and delivering results that compound over time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

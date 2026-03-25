import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const Index = () => {
  const { scrollY } = useScroll();
  const videoOpacity = useTransform(scrollY, [0, 800], [1, 0.1]);

  return (
    <main className="relative z-0">
      {/* Sticky Background Video */}
      <motion.div 
        style={{ opacity: videoOpacity }} 
        className="fixed inset-0 z-[-1] bg-background"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/animation/SparkAnimation03.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />
      </motion.div>

      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ShowcaseSection />
      <Footer />
    </main>
  );
};

export default Index;

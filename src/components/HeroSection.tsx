import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, X } from "lucide-react";

const categories = [
  { name: "Branding", desc: "AI-driven identity" },
  { name: "Web Design", desc: "Pixel-perfect builds" },
  { name: "Development", desc: "Ship in days, not months" },
];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-8 md:px-16 py-6">
        <a href="#home" className="text-foreground text-2xl font-bold tracking-tight italic relative z-50">
          AXON
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm text-muted-foreground relative z-50">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div
          className="flex md:hidden flex-col items-end gap-1.5 cursor-pointer relative z-50 p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <>
              <span className="w-6 h-[2px] bg-foreground transition-all" />
              <span className="w-4 h-[2px] bg-foreground transition-all" />
            </>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-4xl md:text-6xl font-bold tracking-tight">
              {['Home', 'About', 'Vision', 'Work', 'Careers', 'Contact'].map((item, i) => {
                const href = item === 'Home' ? '#home' : `#${item.toLowerCase()}`;
                return (
                  <motion.a
                    key={item}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.1 }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 pt-24 md:pt-32 lg:pt-44">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.9] tracking-tight max-w-3xl"
        >
          New Era
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-muted-foreground text-base md:text-lg max-w-md leading-relaxed"
        >
          We design and build stunning websites powered by artificial intelligence — faster, smarter, and crafted for the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Button variant="hero" size="lg" className="px-10 py-6 text-sm">
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-auto px-8 md:px-16 pb-10 pt-20 md:pt-32"
      >
        <div className="absolute left-8 md:left-16 bottom-10 hidden lg:flex flex-col items-center text-muted-foreground">
          <div className="h-[80px] w-4 relative flex items-center justify-center">
            <span className="absolute text-[10px] uppercase tracking-[0.3em] -rotate-90 whitespace-nowrap">
              Scroll
            </span>
          </div>
          <ArrowDown className="w-3 h-10 animate-bounce" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-0 lg:ml-16">
          {categories.map((cat) => (
            <div key={cat.name} className="border-t border-border pt-5">
              <h3 className="text-foreground font-semibold text-lg">{cat.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

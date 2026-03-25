import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = "AXON gives you a complete overview of your digital presence — from design systems and brand identity to performance metrics and user engagement. Every website we build updates and evolves with AI, so you always stay ahead of what's next.";

const Letter = ({ char, progress, range }: { char: string, progress: any, range: number[] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

const Word = ({ word, progress, start, end }: { word: string, progress: any, start: number, end: number }) => {
  const characters = word.split("");
  const amount = end - start;
  const step = amount / characters.length;
  return (
    <span className="inline-block mr-[0.25em]">
      {characters.map((char, i) => {
        const charStart = start + step * i;
        const charEnd = start + step * (i + 1);
        return <Letter key={i} char={char} progress={progress} range={[charStart, charEnd]} />;
      })}
    </span>
  );
};

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  const words = text.split(" ");

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-36 px-8 md:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-foreground text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />;
          })}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

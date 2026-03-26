import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background text-foreground pt-20 overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16">
        
        {/* Left Column (Logo & Description) */}
        <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-muted-foreground/30 bg-muted/5 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            AXON.STUDIO
          </div>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-sm mt-2">
            Transform ideas into impactful digital experiences that captivate your audience and fuel business growth.
          </p>
          <div className="mt-8 md:mt-24 text-xs text-muted-foreground/60">
            Built with ♡ in the Future © 2024 - 2026
          </div>
        </div>

        {/* Space col */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Links: Menu */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="font-semibold text-sm mb-2 text-foreground">Menu</h4>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Services</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Portfolio</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Stack</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Insights</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</a>
        </div>

        {/* Links: Follow us */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-semibold text-sm mb-2 text-foreground">Follow us</h4>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Linkedin</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Instagram</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">X (Twitter)</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Facebook</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Behance</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Dribbble</a>
        </div>

        {/* Links: Legal */}
        <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4">
          <h4 className="font-semibold text-sm mb-2 text-foreground">Legal</h4>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">GDPR</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms & Conditions</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookies Policy</a>
        </div>
      </div>

      {/* Massive bottom text */}
      <div className="border-t border-border/10 pt-12 pb-0 overflow-hidden flex justify-center relative bg-gradient-to-b from-transparent to-black/40">
        <h1 className="text-[17vw] font-bold text-foreground/5 tracking-tighter leading-[0.7] select-none translate-y-[15%]">
          axonstudio
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

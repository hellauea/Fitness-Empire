import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--empire-red)/0.2),transparent_60%)]" />
        <div className="absolute inset-0 grain-overlay-strong pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">

        {/* CENTER LOGO */}
{/* CENTER LOGO */}
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mb-8"
>
  <img
    src="/brand/logo-icon.png"
    alt="Fitness Empire"
    className="
      mx-auto
      h-20 sm:h-24 md:h-28 lg:h-32
      opacity-90
      drop-shadow-[0_0_25px_rgba(220,38,38,0.35)]
    "
  />
</motion.div>



        {/* BRAND NAME */}
        <span className="block text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-foreground/70 mb-6">
          Fitness Empire
        </span>

        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
          TRANSFORM <br />
          <span className="text-primary empire-text-glow">YOUR BODY</span>
        </h1>

        {/* TAGLINE */}
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Elite training. Real results. No excuses.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="px-10 py-6 text-lg bg-primary hover:bg-primary/90 empire-glow"
          >
            JOIN NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("locations")}
            className="px-10 py-6 text-lg"
          >
            BOOK A VISIT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Fitness Empire transformed my life. Down 20kg in 6 months.",
    name: "Rajesh Kumar",
    city: "Nagawara",
  },
  {
    id: 2,
    quote: "Best gym in Bangalore. The trainers are incredibly dedicated.",
    name: "Anitha Sharma",
    city: "Marathahalli",
  },
  {
    id: 3,
    quote: "Finally found a gym that feels like home. Results speak for themselves.",
    name: "Mohammed Faisal",
    city: "Brookefield",
  },
  {
    id: 4,
    quote: "The personal training program changed everything for me.",
    name: "Deepika Reddy",
    city: "Hoodi",
  },
  {
    id: 5,
    quote: "World-class equipment and atmosphere. Worth every rupee.",
    name: "Suresh Nair",
    city: "Kundanhalli",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            WHAT THEY <span className="text-primary">SAY</span>
          </h2>
        </motion.div>

        <div
          className="relative min-h-[250px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">
                "{testimonials[current].quote}"
              </p>
              <p className="text-lg font-semibold text-primary">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].city}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

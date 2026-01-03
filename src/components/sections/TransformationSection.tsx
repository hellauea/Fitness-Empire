import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Transformation {
  id: number;
  name: string;
  location: string;
  duration: string;
  result: string;
  beforeImage: string;
  afterImage: string;
}

const transformations: Transformation[] = [
  {
    id: 1,
    name: "Rahul",
    location: "Nagawara",
    duration: "12 Weeks",
    result: "Lost 18 kg",
    beforeImage: "/transformations/rahul-nagawara-before.png",
    afterImage: "/transformations/rahul-nagawara-after.png",
  },
  {
    id: 2,
    name: "Arjun",
    location: "Brookefield",
    duration: "20 Weeks",
    result: "Gained 8 kg muscle",
    beforeImage: "/transformations/arjun-brookefield-before.png",
    afterImage: "/transformations/arjun-brookefield-after.png",

  },
];

const TransformationCard = ({ transformation }: { transformation: Transformation }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      className="group relative rounded-lg overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--empire-red)/0.3)]"
    >
      {/* Comparison slider */}
      <div
        ref={containerRef}
        className="relative aspect-[3/4] cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full) */}
        <div className="absolute inset-0 bg-muted">
          <img
            src={transformation.afterImage}
            alt="After"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
            AFTER
          </div>
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 bg-muted overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={transformation.beforeImage}
            alt="Before"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">
            BEFORE
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
              <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Info overlay */}
      <div className="p-5 bg-gradient-to-t from-background to-transparent">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary">{transformation.duration}</span>
          <span className="text-sm font-bold text-foreground">{transformation.result}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {transformation.name}, {transformation.location}
        </p>
      </div>
    </div>
  );
};

const TransformationSection = () => {
  return (
    <section className="py-32 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            REAL PEOPLE. <span className="text-primary empire-text-glow">REAL RESULTS.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <TransformationCard transformation={transformation} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BMISection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // convert cm to m
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(Math.round(bmiValue * 10) / 10);
      
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 25) setCategory("Normal");
      else if (bmiValue < 30) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            CALCULATE YOUR <span className="text-primary">BMI</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 md:p-12 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl"
        >
          {/* Glassmorphism effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input side */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="height" className="text-sm font-medium text-muted-foreground">
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight" className="text-sm font-medium text-muted-foreground">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary h-12 text-lg"
                />
              </div>

              <Button
                onClick={calculateBMI}
                className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                CALCULATE
              </Button>
            </div>

            {/* Result side */}
            <div className="flex items-center justify-center">
              <AnimatePresence mode="wait">
                {bmi !== null ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="text-7xl md:text-8xl font-bold text-primary mb-2"
                    >
                      {bmi}
                    </motion.div>
                    <p className="text-xl font-medium mb-1">{category}</p>
                    <p className="text-sm text-muted-foreground mb-4">Your BMI</p>
                    <Button
                      variant="ghost"
                      onClick={resetCalculator}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Calculate Again
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-muted-foreground"
                  >
                    <div className="text-6xl md:text-7xl font-bold mb-2 opacity-20">--</div>
                    <p className="text-sm">Enter your details to calculate BMI</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BMISection;

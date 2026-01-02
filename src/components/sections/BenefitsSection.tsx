import { motion } from "framer-motion";
import { 
  Utensils, 
  Zap, 
  Dumbbell, 
  Heart, 
  Bone, 
  TrendingDown 
} from "lucide-react";

const benefits = [
  {
    icon: Utensils,
    title: "Regulates Eating Habits",
  },
  {
    icon: Zap,
    title: "Increases Physical Capacity",
  },
  {
    icon: Dumbbell,
    title: "Strengthens Muscles & Tissues",
  },
  {
    icon: Heart,
    title: "Improves Quality of Life",
  },
  {
    icon: Bone,
    title: "Improves Bone Density",
  },
  {
    icon: TrendingDown,
    title: "Fat Loss & Muscle Gain",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            WHY <span className="text-primary">FITNESS EMPIRE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-8 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
              >
                <benefit.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold tracking-tight">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

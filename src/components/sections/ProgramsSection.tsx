import { motion } from "framer-motion";
import { Dumbbell, Heart, Music, UserCheck, Activity } from "lucide-react";

const programs = [
  {
    name: "Weight Training",
    icon: Dumbbell,
    description: "Build strength and muscle mass",
  },
  {
    name: "Cardio Training",
    icon: Heart,
    description: "Boost endurance and heart health",
  },
  {
    name: "Aerobics",
    icon: Music,
    description: "Fun, high-energy group sessions",
  },
  {
    name: "Personal Training",
    icon: UserCheck,
    description: "One-on-one expert guidance",
  },
  {
    name: "Functional Training",
    icon: Activity,
    description: "Real-world strength and mobility",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            OUR <span className="text-primary">PROGRAMS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary transition-all duration-500"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />
              
              <div className="relative p-8">
                <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-tight">
                  {program.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">
                  {program.description}
                </p>

                {/* Red accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Explore →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

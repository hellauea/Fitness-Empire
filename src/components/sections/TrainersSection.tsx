import { motion } from "framer-motion";

const trainers = [
  {
    name: "Manoj",
    role: "Gym Trainer",
    image: "/placeholder.svg",
  },
  {
    name: "Prashant",
    role: "Aerobics Instructor",
    image: "/placeholder.svg",
  },
  {
    name: "Azar",
    role: "Weights Trainer",
    image: "/placeholder.svg",
  },
];

const TrainersSection = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            MEET OUR <span className="text-primary empire-text-glow">TRAINERS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-500">
                {/* Image container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.15]"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Spotlight effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: "radial-gradient(circle at 50% 30%, hsl(var(--primary) / 0.15) 0%, transparent 60%)",
                      }}
                    />
                  </div>
                </div>

                {/* Red accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-base text-primary font-semibold tracking-wide">{trainer.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;

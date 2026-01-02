import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const HoursSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              OPENING HOURS
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                Monday — Friday
              </p>
              <p className="text-3xl md:text-4xl font-bold">
                5:00 AM — 11:30 PM
              </p>
            </motion.div>

            <div className="hidden md:block w-px h-16 bg-border" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                Saturday — Sunday
              </p>
              <p className="text-3xl md:text-4xl font-bold">
                5:00 AM — 10:00 PM
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoursSection;

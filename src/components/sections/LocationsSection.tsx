import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { locations } from "@/data/locations";

const LocationsSection = () => {
  return (
    <section id="locations" className="py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            OUR <span className="text-primary">LOCATIONS</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {location.isComingSoon ? (
                /* Coming Soon Card */
                <div className="h-full min-h-[200px] rounded-xl border border-dashed border-border/50 bg-card/40 flex flex-col items-center justify-center text-center">
                  <span className="mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                    Coming Soon
                  </span>
                  <h3 className="text-lg font-semibold text-muted-foreground">
                    New Location
                  </h3>
                </div>
              ) : (
                /* Location Card */
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_45px_-15px_rgba(239,68,68,0.45)]"
                >
                  {/* Subtle glow overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-transparent transition-all duration-500" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">
                          {location.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {location.area}, {location.city}
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {location.address}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View on Maps
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

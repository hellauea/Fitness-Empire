import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { locations } from "@/data/locations";

interface LocationSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (locationId: string) => void;
}

const LocationSelector = ({ isOpen, onClose, onSelectLocation }: LocationSelectorProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
        >
          <motion.button
            onClick={onClose}
            className="absolute right-6 top-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="h-6 w-6" />
          </motion.button>

          <div className="w-full max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                CHOOSE YOUR
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                FITNESS EMPIRE
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((location, index) => (
                <motion.button
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  onClick={() => !location.isComingSoon && onSelectLocation(location.id)}
                  disabled={location.isComingSoon}
                  className={`relative group p-6 rounded-lg border border-border bg-card/50 text-left transition-all duration-300 ${
                    location.isComingSoon
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:border-primary hover:bg-card"
                  }`}
                >
                  {location.isComingSoon && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                      Coming Soon
                    </span>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{location.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {location.area}, {location.city}
                      </p>
                    </div>
                  </div>

                  {!location.isComingSoon && (
                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    >
                      <span className="text-sm font-medium text-primary">
                        Enter Gym →
                      </span>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LocationSelector;

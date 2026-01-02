import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenLocationSelector: () => void;
}

const Navbar = ({ onOpenLocationSelector }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/brand/logo-icon.png"
              alt="Fitness Empire"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold tracking-tighter">
              FITNESS <span className="text-primary">EMPIRE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={onOpenLocationSelector}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Locations
            </button>

            <Button size="sm" className="bg-primary hover:bg-primary/90">
              JOIN NOW
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-background border-t border-border/50"
            style={{ pointerEvents: "auto" }}
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Locations */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenLocationSelector();
                }}
                className="flex items-center gap-2 text-lg font-medium"
              >
                <MapPin className="w-5 h-5" />
                Locations
              </button>

              <Button className="w-full mt-4">JOIN NOW</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

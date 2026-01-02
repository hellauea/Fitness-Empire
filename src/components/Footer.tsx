import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/brand/logo-icon.png"
              alt="Fitness Empire"
              className="h-8 w-auto"
            />
            <h2 className="text-2xl font-bold tracking-tight">
              FITNESS <span className="text-primary">EMPIRE</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md mb-6">
            Premium fitness centers across Bengaluru and beyond.
          </p>

          <div className="flex gap-4">
            <a href="https://instagram.com/fitnessempire_india" target="_blank">
              <Instagram />
            </a>
            <Facebook />
            <Youtube />
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="uppercase text-sm text-muted-foreground mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#programs">Programs</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="uppercase text-sm text-muted-foreground mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin /> Bengaluru & Nellore.</li>
            <li className="flex gap-2"><Phone /> +91 7019474809</li>
            <li className="flex gap-2"><Mail /> fitnessempireblr@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
        © 2026 Fitness Empire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

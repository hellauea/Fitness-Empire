import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

// Mockup Instagram posts
const mockPosts = [
  { id: 1, image: "/instagram/ig-post-01.png" },
  { id: 2, image: "/instagram/ig-post-02.png" },
  { id: 3, image: "/instagram/ig-post-03.png" },
  { id: 4, image: "/instagram/ig-post-04.png" },
  { id: 5, image: "/instagram/ig-post-05.png" },
  { id: 6, image: "/instagram/ig-post-06.png" },
];


const InstagramSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            FOLLOW THE <span className="text-primary">EMPIRE</span>
          </h2>
          <a
            href="https://instagram.com/fitnessempire_india"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@fitnessempire_india</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {mockPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/fitnessempire_india"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-card"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/fitnessempire_india"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">Follow on Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;

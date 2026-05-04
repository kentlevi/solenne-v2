import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const villas = [
  { id: "ocean", name: "The Ocean", image: "/images/villa-ocean-luxury.png" },
  {
    id: "island",
    name: "The Island",
    image: "/images/villa-island-luxury.png",
  },
  { id: "private", name: "The Private", image: "/images/villa-showcase-1.png" },
];

export default function VillaShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVilla = villas[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % villas.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + villas.length) % villas.length);

  return (
    <section id="rooms" className="py-24 bg-luxury-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Content Left */}
        <div className="lg:col-span-1 py-12 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold mb-6 font-medium">
            Villa Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic font-light text-luxury-dark mb-12">
            Life Along <br /> the Coast
          </h2>

          <div className="space-y-6">
            {villas.map((villa, index) => (
              <button
                key={villa.id}
                onClick={() => setActiveIndex(index)}
                className={`block text-left text-xl md:text-2xl font-serif italic transition-all duration-300 border-l-[3px] pl-6 hover:text-luxury-gold ${
                  activeIndex === index
                    ? "text-luxury-gold border-luxury-gold"
                    : "text-luxury-light/40 border-transparent"
                }`}
              >
                {villa.name}
              </button>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-luxury-light leading-relaxed max-w-xs mb-8">
              Experience the ultimate privacy and luxury in our signature
              villas, each offering a unique connection to the landscape.
            </p>
            <Link to="/booking" className="group flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest font-bold group-hover:text-luxury-gold transition-colors">
                See Details
              </span>
              <div className="w-10 h-px bg-luxury-dark group-hover:bg-luxury-gold transition-all duration-300 group-hover:w-16"></div>
            </Link>
          </div>
        </div>

        {/* Image Right */}
        <div className="lg:col-span-2 relative">
          <div className="aspect-[16/10] overflow-hidden border border-luxury-border shadow-2xl relative bg-[#D9D1C7]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeVilla.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src={activeVilla.image}
                alt={activeVilla.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Navigation Arrows Overlay */}
            <div className="absolute bottom-8 right-8 flex space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-luxury-dark transition-all rounded-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-luxury-dark transition-all rounded-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

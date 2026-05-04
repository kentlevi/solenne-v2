import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import VillaShowcase from "../components/VillaShowcase";

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "25%"]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <div className="overflow-x-hidden pt-0 animate-fade-in bg-luxury-bg">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
      >
        {/* Background Video */}
        <motion.div
          className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform"
          style={{ y: backgroundY, scale }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover md:block"
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/luxury-resort-drone-shot-generation-poster.png"
            aria-label="Solenne Bay luxury resort aerial video"
          >
            <source
              src="/videos/luxury-resort-drone-shot-generation.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light leading-[1.1] drop-shadow-lg tracking-tight"
            >
              Welcome home <br />
              to the extraordinary
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 1.5 }}
              className="mt-12"
            >
              <Link
                to="/booking"
                className="inline-block border-b border-white pb-1 text-[11px] uppercase tracking-[0.2em] font-medium hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300"
              >
                Reserve Your Stay
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll For More */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-[10px] text-white uppercase tracking-[0.2em] mb-4 font-medium opacity-70">
            Scroll For More
          </span>
          <div className="w-px h-12 bg-white/40"></div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 bg-luxury-bg overflow-hidden scroll-mt-32"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-dark font-medium">
              Fine Discovery
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-luxury-dark leading-tight">
              Enjoy a Luxury <br />
              Experience
            </h2>
            <p className="text-luxury-light leading-relaxed max-w-xl text-sm">
              Immerse yourself in a world where luxury meets nature. Our resort
              is designed to provide an exclusive escape from the ordinary,
              offering tailored experiences that resonate with the spirit of
              modern coastal living. From private yacht excursions to sunset
              dinners on the pier.
            </p>
            <div className="pt-4">
              <Link
                to="/services"
                className="inline-block border-b border-luxury-border pb-1 text-[11px] uppercase tracking-[0.2em] font-medium hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-[4/5] overflow-hidden border border-luxury-border shadow-xl relative bg-[#D9D1C7]">
              <img
                src="/images/social-sunset-panorama.png"
                alt="Experience Solenne Bay"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-luxury-muted opacity-10 mix-blend-multiply pointer-events-none"></div>
            </div>
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-white border border-luxury-border p-8 hidden md:block shadow-2xl">
              <span className="block text-4xl font-serif italic text-luxury-dark mb-2">
                15+
              </span>
              <span className="text-[10px] uppercase text-luxury-muted tracking-[0.2em]">
                Years of Excellence
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <VillaShowcase />
    </div>
  );
}

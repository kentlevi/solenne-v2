import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "spa",
    title: "The Solenne Spa",
    description:
      "Rejuvenate your body and mind with our signature treatments using local botanicals and oceanic minerals. Features private treatment villas and vitality pools.",
    image: "/images/experience-pool.png",
  },
  {
    id: "dining",
    title: "Oceanfront Dining",
    description:
      "Savor Michelin-starred coastal cuisine crafted from locally sourced ingredients. Experience open-air dining with panoramic ocean views at dusk.",
    image: "/images/social-dining-1.png",
  },
  {
    id: "excursions",
    title: "Private Yacht Excursions",
    description:
      "Discover hidden coves and secluded beaches aboard our luxury coastal cruisers. Fully catered day trips and sunset tours available daily.",
    image: "/images/resort-aerial-1.png",
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium">
            Curated Amenities
          </span>
          <h1 className="text-5xl md:text-6xl font-serif italic text-luxury-dark mt-6 mb-8">
            Unrivaled <br /> Resort Services
          </h1>
          <p className="text-luxury-light text-lg font-light leading-relaxed">
            Elevate your stay with our world-class facilities and experiences
            designed to cater to your every desire.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-square relative overflow-hidden border border-luxury-border bg-[#EBE7E0]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div
                className={`w-full lg:w-1/2 ${index % 2 !== 0 ? "lg:pr-16" : "lg:pl-16"}`}
              >
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-gold/50 mb-4 block">
                  0{index + 1}
                </span>
                <h2 className="text-4xl font-serif italic text-luxury-dark mb-6">
                  {service.title}
                </h2>
                <p className="text-luxury-light leading-relaxed mb-10 max-w-lg text-lg">
                  {service.description}
                </p>
                <Link
                  to={`/booking?service=${service.id}`}
                  className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-luxury-dark hover:text-luxury-gold transition-colors group"
                >
                  Reserve Experience
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-luxury-dark text-center text-white border border-luxury-border"
        >
          <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-medium block mb-4">
            Personalized Requests
          </span>
          <h3 className="text-4xl font-serif italic font-light mb-6">
            Need something special?
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 mb-10 font-light">
            Our concierge team is available 24/7 to arrange bespoke experiences,
            from private helicopter transfers to in-villa dining perfection.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark px-10 py-4 uppercase text-xs tracking-widest font-bold transition-colors"
          >
            Contact Concierge
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

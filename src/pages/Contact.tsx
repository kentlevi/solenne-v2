import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-luxury-bg">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted font-medium">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif italic text-luxury-dark mt-4">
            Contact Our Concierge
          </h1>
        </div>

        <div className="bg-white p-8 md:p-12 border border-luxury-border shadow-xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-serif italic text-luxury-dark mb-4">
                Message Sent
              </h3>
              <p className="text-luxury-light text-sm">
                Thank you for reaching out. Our concierge team will reply
                shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[11px] uppercase font-medium border-b border-luxury-dark pb-1 text-luxury-dark hover:text-luxury-gold hover:border-luxury-gold transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-muted">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white border border-luxury-border px-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-muted">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white border border-luxury-border px-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none rounded-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-muted">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-white border border-luxury-border px-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none rounded-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-muted">
                  Subject
                </label>
                <select
                  required
                  className="w-full bg-white border border-luxury-border px-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none rounded-none"
                >
                  <option value="concierge">Concierge Services</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="events">Events & Weddings</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-muted">
                  Message
                </label>
                <textarea
                  required
                  className="w-full bg-white border border-luxury-border px-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none h-32 resize-none rounded-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-luxury-dark text-white hover:bg-luxury-gold px-10 py-4 uppercase text-[11px] tracking-widest font-medium transition-colors rounded-none mt-4"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

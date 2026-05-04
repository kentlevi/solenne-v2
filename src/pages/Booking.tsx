import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Calendar, Users, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const availableRooms = [
  {
    id: "ocean-suite",
    name: "Ocean Suite",
    price: 450,
    capacity: 2,
    image: "/images/villa-ocean-luxury.png",
    features: ["Ocean View", "King Bed", "Private Balcony"],
  },
  {
    id: "island-villa",
    name: "Island Villa",
    price: 850,
    capacity: 4,
    image: "/images/villa-island-luxury.png",
    features: ["Private Pool", "2 Bedrooms", "Butler Service"],
  },
  {
    id: "private-estate",
    name: "The Private Estate",
    price: 1500,
    capacity: 6,
    image: "/images/villa-showcase-1.png",
    features: [
      "Panoramic View",
      "3 Bedrooms",
      "Chef included",
      "Private Beach",
    ],
  },
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const preCheckIn = searchParams.get("checkIn");
  const preCheckOut = searchParams.get("checkOut");
  const preGuests = searchParams.get("guests");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    requests: "",
  });

  const handleBook = (roomId: string) => {
    setSelectedRoom(roomId);
    setStep(2);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-luxury-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-medium">
            Reservations
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-luxury-dark mt-4">
            Select Your Sanctuary
          </h1>
        </div>

        {/* Stepper */}
        <div className="flex justify-center items-center mb-16 space-x-4 md:space-x-8">
          <div
            className={`flex flex-col items-center ${step >= 1 ? "text-luxury-dark" : "text-luxury-light"}`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center text-xs font-medium border-2 rounded-none ${step >= 1 ? "border-luxury-dark bg-luxury-dark text-white" : "border-luxury-light bg-transparent"}`}
            >
              1
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest mt-2 hidden md:block">
              Choose Room
            </span>
          </div>
          <div
            className={`w-16 md:w-32 h-px ${step >= 2 ? "bg-luxury-dark" : "bg-luxury-light/30"}`}
          ></div>
          <div
            className={`flex flex-col items-center ${step >= 2 ? "text-luxury-dark" : "text-luxury-light/50"}`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center text-xs font-medium border-2 rounded-none ${step >= 2 ? "border-luxury-dark bg-luxury-dark text-white" : "border-luxury-light bg-transparent"}`}
            >
              2
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest mt-2 hidden md:block">
              Guest Details
            </span>
          </div>
          <div
            className={`w-16 md:w-32 h-px ${step >= 3 ? "bg-luxury-dark" : "bg-luxury-light/30"}`}
          ></div>
          <div
            className={`flex flex-col items-center ${step >= 3 ? "text-luxury-dark" : "text-luxury-light/50"}`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center text-xs font-medium border-2 rounded-none ${step >= 3 ? "border-luxury-dark bg-luxury-dark text-white" : "border-luxury-light bg-transparent"}`}
            >
              3
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest mt-2 hidden md:block">
              Confirmation
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {(preCheckIn || preCheckOut) && (
                <div className="bg-white border border-luxury-border p-6 mb-12 text-center shadow-xl max-w-2xl mx-auto">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-muted font-bold block mb-2">
                    Search Criteria
                  </span>
                  <div className="text-xl font-serif italic text-luxury-dark">
                    {preCheckIn || "Any Date"} &mdash;{" "}
                    {preCheckOut || "Any Date"}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-luxury-muted mt-2">
                    {preGuests || "2 Adults"}
                  </div>
                </div>
              )}
              <div className="space-y-12">
                {availableRooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white border border-luxury-border shadow-xl flex flex-col md:flex-row group relative overflow-hidden"
                  >
                    <div className="md:w-5/12 aspect-video md:aspect-auto relative overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 md:p-12 md:w-7/12 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-3xl font-serif text-luxury-dark">
                            {room.name}
                          </h3>
                          <div className="text-right">
                            <span className="text-4xl font-serif text-luxury-gold">
                              ${room.price}
                            </span>
                            <span className="text-xs uppercase tracking-widest text-luxury-light block">
                              / night
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-luxury-light mb-8">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2" /> Up to{" "}
                            {room.capacity} Guests
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" /> Flexible Canc.
                          </span>
                        </div>
                        <ul className="grid grid-cols-2 gap-y-3 mb-8">
                          {room.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-sm text-luxury-dark"
                            >
                              <Check className="w-4 h-4 text-luxury-gold mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => handleBook(room.id)}
                        className="w-full md:w-auto bg-luxury-dark text-white hover:bg-luxury-gold px-8 py-4 uppercase text-[11px] tracking-widest font-medium transition-colors flex justify-center items-center group-hover:shadow-lg rounded-none"
                      >
                        Select Room <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto bg-white p-8 md:p-12 border border-luxury-border shadow-xl"
            >
              <h2 className="text-2xl font-serif italic text-luxury-dark mb-8">
                Guest Details
              </h2>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-muted">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
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
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
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
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white border border-luxury-border px-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-luxury-muted">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={formData.requests}
                    onChange={(e) =>
                      setFormData({ ...formData, requests: e.target.value })
                    }
                    className="w-full bg-white border border-luxury-border px-4 py-3 text-sm focus:ring-1 focus:ring-luxury-gold outline-none h-24 resize-none rounded-none"
                  ></textarea>
                </div>
                <div className="pt-6 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[11px] font-medium uppercase tracking-widest hover:text-luxury-gold transition-colors text-luxury-muted"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-luxury-dark text-white hover:bg-luxury-gold px-10 py-4 uppercase text-[11px] tracking-widest font-medium transition-colors rounded-none"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white p-12 md:p-16 border border-luxury-border shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-luxury-gold flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg rounded-none">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-serif italic text-luxury-dark mb-4">
                Reservation Confirmed
              </h2>
              <p className="text-luxury-light mb-8">
                Thank you, {formData.firstName || "Guest"}, for choosing Solenne
                Bay. We've sent the confirmation details to{" "}
                {formData.email || "your email"}. We look forward to welcoming
                you.
              </p>
              <div className="bg-luxury-bg p-6 mb-8 border border-luxury-border">
                <div className="text-sm space-y-3">
                  <div className="flex justify-between">
                    <span className="text-luxury-light uppercase text-[10px] tracking-widest font-bold">
                      Confirmation Code
                    </span>
                    <span className="font-mono font-medium">
                      SLN-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-luxury-light uppercase text-[10px] tracking-widest font-bold">
                      Room
                    </span>
                    <span className="font-medium">
                      {availableRooms.find((r) => r.id === selectedRoom)?.name}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-xs uppercase tracking-widest font-bold text-luxury-dark border-b border-luxury-dark hover:text-luxury-gold hover:border-luxury-gold transition-all pb-1"
              >
                Book Another Stay
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

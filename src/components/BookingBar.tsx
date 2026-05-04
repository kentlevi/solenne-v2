import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (checkIn) params.append("checkIn", checkIn);
    if (checkOut) params.append("checkOut", checkOut);
    if (guests) params.append("guests", guests);
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className="relative z-20 -mt-16 w-full max-w-[1000px] mx-auto px-6 scroll-mt-32">
      <div className="bg-white shadow-2xl flex flex-col md:flex-row items-stretch min-h-[6rem] border border-luxury-border">
        <div className="flex-1 flex flex-col justify-center px-8 py-4 border-b md:border-b-0 md:border-r border-luxury-border">
          <label className="text-[10px] uppercase tracking-widest text-luxury-muted mb-1 block">
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent border-none p-0 text-sm font-medium focus:ring-0 outline-none text-brand-dark"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 py-4 border-b md:border-b-0 md:border-r border-luxury-border">
          <label className="text-[10px] uppercase tracking-widest text-luxury-muted mb-1 block">
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent border-none p-0 text-sm font-medium focus:ring-0 outline-none text-brand-dark"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 py-4 border-b md:border-b-0 md:border-r border-luxury-border">
          <label className="text-[10px] uppercase tracking-widest text-luxury-muted mb-1 block">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent border-none p-0 text-sm font-medium focus:ring-0 outline-none text-brand-dark cursor-pointer"
          >
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults, 1 Child</option>
            <option>3 Adults</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="w-full md:w-56 bg-luxury-dark hover:bg-luxury-gold flex items-center justify-center cursor-pointer transition-colors group p-6 md:p-0"
        >
          <span className="text-white text-[11px] uppercase tracking-widest font-bold group-hover:scale-105 transition-transform">
            Check Rates
          </span>
        </button>
      </div>
    </div>
  );
}

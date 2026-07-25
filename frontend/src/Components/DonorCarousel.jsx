import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, BadgeCheck, MapPin } from "lucide-react";

const donors = [
  {
    name: "James Carter",
    bloodType: "O-",
    location: "London, UK",
    age: 29,
    lastDonation: "2 weeks ago",
    available: true,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
  },
  {
    name: "Sofia Alvarez",
    bloodType: "A+",
    location: "Madrid, ES",
    age: 34,
    lastDonation: "1 month ago",
    available: true,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "David Okafor",
    bloodType: "B+",
    location: "Lagos, NG",
    age: 41,
    lastDonation: "3 weeks ago",
    available: false,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "Aisha Rahman",
    bloodType: "AB+",
    location: "Dubai, AE",
    age: 27,
    lastDonation: "5 days ago",
    available: true,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "Marco Rossi",
    bloodType: "O+",
    location: "Milan, IT",
    age: 38,
    lastDonation: "2 months ago",
    available: true,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "James Carter",
    bloodType: "O-",
    location: "London, UK",
    age: 29,
    lastDonation: "2 weeks ago",
    available: true,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
  },
  {
    name: "Sofia Alvarez",
    bloodType: "A+",
    location: "Madrid, ES",
    age: 34,
    lastDonation: "1 month ago",
    available: true,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "David Okafor",
    bloodType: "B+",
    location: "Lagos, NG",
    age: 41,
    lastDonation: "3 weeks ago",
    available: false,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "Aisha Rahman",
    bloodType: "AB+",
    location: "Dubai, AE",
    age: 27,
    lastDonation: "5 days ago",
    available: true,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "Marco Rossi",
    bloodType: "O+",
    location: "Milan, IT",
    age: 38,
    lastDonation: "2 months ago",
    available: true,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

function DonorCard({ donor }) {
  return (
    <div className="min-w-[260px] max-w-[260px] bg-[#141010] rounded-2xl overflow-hidden border border-white/5 flex-shrink-0">
      <div className="relative h-52 w-full">
        <img
          src={donor.img}
          alt={donor.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold w-9 h-9 rounded-full flex items-center justify-center shadow">
          {donor.bloodType}
        </span>
        <span
          className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 ${
            donor.available
              ? "bg-green-600/90 text-white"
              : "bg-neutral-600/90 text-neutral-200"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              donor.available ? "bg-white" : "bg-neutral-300"
            }`}
          />
          {donor.available ? "Available" : "Unavailable"}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1.5">
          <h3 className="text-white font-semibold text-base">{donor.name}</h3>
          <BadgeCheck size={16} className="text-blue-400 shrink-0" />
        </div>

        <div className="flex items-center gap-1 text-neutral-400 text-sm mt-1">
          <MapPin size={13} />
          <span>
            {donor.location} · Age {donor.age}
          </span>
        </div>

        <p className="text-neutral-500 text-sm mt-2">
          Last donation: <span className="text-white font-medium">{donor.lastDonation}</span>
        </p>

        <button
          disabled={!donor.available}
          className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold transition ${
            donor.available
              ? "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
              : "bg-red-900/40 text-red-300/50 cursor-not-allowed"
          }`}
        >
          <Phone size={15} />
          Contact Donor
        </button>
      </div>
    </div>
  );
}

export default function DonorCarousel() {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <div className="bg-[var(--bg-box-color)] rounded-2xl md:w-full lg:w-[80%] w-[80%] my-4 py-10 px-6">
      <div className="flex items-start justify-between mb-6">

        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => scroll(-1)}
            disabled={atStart}
            className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition ${
              atStart
                ? "opacity-30 cursor-not-allowed"
                : "text-white hover:bg-white/10"
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={atEnd}
            className={`w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition ${
              atEnd
                ? "opacity-30 cursor-not-allowed"
                : "text-white hover:bg-white/10"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] "
      >
        {donors.map((d) => (
          <DonorCard key={d.name} donor={d} />
        ))}
      </div>
    </div>
  );
}

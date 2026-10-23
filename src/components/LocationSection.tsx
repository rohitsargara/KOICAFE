import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Sparkles } from 'lucide-react';

export default function LocationSection({ onReserveClick }: { onReserveClick?: () => void }) {
  return (
    <section id="location" className="w-full py-20 lg:py-28 bg-[#F5F8EF] border-t border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Subtitle & Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#08482D] mb-3">
            <span>05. Visit & Connect</span>
            <span aria-hidden="true">·</span>
            <span>Shobhagpura, Udaipur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Inter_Tight',sans-serif] font-bold text-[#101410] leading-tight tracking-tight">
            Finding the courtyard.
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E61] mt-3 leading-relaxed">
            Located just minutes from Sukhadia Circle and Celebration Mall, in the tranquil northern sanctuary of Shobhagpura. Valet and easy street parking available.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Live Info & Operational Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Operational Status Box */}
            <div className="p-5 bg-white rounded-2xl border border-[#08482D]/10 flex items-center justify-between shadow-[0_2px_12px_rgba(8,72,45,0.04)]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#16A34A] animate-pulse" />
                <div>
                  <p className="text-xs font-semibold text-[#101410]">Open Daily · Welcoming Guests</p>
                  <p className="text-[11.5px] text-[#5E5E61]">Operating Hours: 11:00 AM – 11:00 PM</p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#08482D] bg-[#DAE7C7] px-2.5 py-1 rounded-full">
                All Day Dining
              </span>
            </div>

            {/* Address & Contact Details */}
            <div className="p-8 bg-white rounded-[28px] border border-[#08482D]/10 space-y-6 shadow-[0_2px_12px_rgba(8,72,45,0.04)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAE7C7] flex items-center justify-center text-[#08482D] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5E5E61]">Address</span>
                  <p className="text-[15px] font-semibold text-[#101410] mt-0.5 leading-snug">
                    Plot No. 12/13, Near Nayara Petrol Pump,
                  </p>
                  <p className="text-[14px] text-[#5E5E61]">
                    Shobhagpura, Udaipur, Rajasthan 313001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAE7C7] flex items-center justify-center text-[#08482D] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5E5E61]">Phone & WhatsApp</span>
                  <p className="text-[15px] font-semibold text-[#101410] mt-0.5">
                    <a href="tel:+919910750890" className="hover:text-[#08482D] hover:underline">
                      +91 99107 50890
                    </a>
                  </p>
                  <p className="text-[12.5px] text-[#5E5E61]">Table reservations & takeaway pickups</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#DAE7C7] flex items-center justify-center text-[#08482D] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5E5E61]">Parking & Access</span>
                  <p className="text-[14px] text-[#101410] font-medium mt-0.5">
                    Complimentary Valet & Spacious Frontage
                  </p>
                  <p className="text-[12.5px] text-[#5E5E61]">Wheelchair accessible courtyard entrance</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Koi+Cafe+Shobhagpura+Udaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#08482D] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#063923] transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Google Maps Directions
                </a>
                <button
                  type="button"
                  onClick={onReserveClick}
                  className="py-3 px-5 rounded-xl border border-[#08482D] text-[#08482D] text-xs font-semibold uppercase tracking-wider hover:bg-[#08482D]/5 transition-colors"
                >
                  Book Table
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Proximity & Stylized Map Canvas */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Illustrated Map Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[32px] overflow-hidden border border-[#08482D]/12 bg-white shadow-md flex items-center justify-center p-6">
              {/* Map Illustration SVG */}
              <svg viewBox="0 0 600 360" fill="none" className="w-full h-full">
                {/* Background Grid */}
                <rect width="600" height="360" fill="#F8FAF5" />
                {/* Roads and Avenues */}
                <path d="M40 180 H 560" stroke="#DAE7C7" strokeWidth="18" />
                <path d="M40 180 H 560" stroke="#FFF" strokeWidth="12" />
                <path d="M260 40 V 320" stroke="#DAE7C7" strokeWidth="16" />
                <path d="M260 40 V 320" stroke="#FFF" strokeWidth="10" />
                {/* Secondary Roads */}
                <path d="M120 40 L 480 320" stroke="#E2ECDC" strokeWidth="8" strokeDasharray="6 4" />
                <path d="M480 80 V 300" stroke="#E2ECDC" strokeWidth="8" />

                {/* Landmarks */}
                <rect x="80" y="80" width="110" height="60" rx="10" fill="#EBF2E6" stroke="#08482D" strokeWidth="1.5" />
                <text x="135" y="115" textAnchor="middle" fill="#08482D" fontSize="11" fontFamily="Inter" fontWeight="600">
                  Sukhadia Circle
                </text>

                <rect x="360" y="70" width="120" height="60" rx="10" fill="#EBF2E6" stroke="#08482D" strokeWidth="1.5" />
                <text x="420" y="105" textAnchor="middle" fill="#08482D" fontSize="11" fontFamily="Inter" fontWeight="600">
                  Celebration Mall
                </text>

                {/* Central Pin: Koi Cafe */}
                <circle cx="260" cy="180" r="28" fill="#DAE7C7" fillOpacity="0.8" />
                <circle cx="260" cy="180" r="16" fill="#08482D" />
                <circle cx="260" cy="180" r="6" fill="#FFF" />

                {/* Callout Badge for Koi Cafe */}
                <rect x="200" y="220" width="160" height="46" rx="12" fill="#08482D" />
                <text x="280" y="242" textAnchor="middle" fill="#FFF" fontSize="12" fontFamily="Inter" fontWeight="700">
                  Koi Café & Social
                </text>
                <text x="280" y="256" textAnchor="middle" fill="#DAE7C7" fontSize="9.5" fontFamily="Inter" fontWeight="500">
                  Shobhagpura, Udaipur
                </text>
              </svg>

              {/* Floating Proximity Strip */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#08482D]/10 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-[11px] font-mono text-[#5E5E61] block">Sukhadia Circle</span>
                  <span className="text-xs sm:text-sm font-bold text-[#08482D]">4 mins</span>
                </div>
                <div className="border-x border-[#08482D]/10">
                  <span className="text-[11px] font-mono text-[#5E5E61] block">Celebration Mall</span>
                  <span className="text-xs sm:text-sm font-bold text-[#08482D]">6 mins</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#5E5E61] block">Fateh Sagar Lake</span>
                  <span className="text-xs sm:text-sm font-bold text-[#08482D]">12 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

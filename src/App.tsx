import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import SanctuarySection from './components/SanctuarySection';
import MenuSection from './components/MenuSection';
import SpacesSection from './components/SpacesSection';
import CulinaryCraftSection from './components/CulinaryCraftSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [guestCount, setGuestCount] = useState('2 Guests');
  const [timeSlot, setTimeSlot] = useState('7:00 PM');

  return (
    <div className="min-h-screen bg-[#F5F8EF] text-[#101410] flex flex-col items-center justify-start overflow-x-hidden selection:bg-[#DAE7C7] selection:text-[#08482D]">
      {/* 1. Hero Landing Frame with Cylindrical Quad Curved Carousel */}
      <section className="w-full flex justify-center items-center py-2 md:py-6 overflow-hidden">
        <HeroSection onOrderClick={() => setIsOrderModalOpen(true)} />
      </section>

      {/* 2. The Sanctuary (Spatial & Culinary Ethos) */}
      <SanctuarySection />

      {/* 3. Curated Menu (Pure Vegetarian Dishes & Brews) */}
      <MenuSection onOrderClick={() => setIsOrderModalOpen(true)} />

      {/* 4. Courtyard & Spaces (Bali Meets Udaipur Spatial Realms) */}
      <SpacesSection onReserveClick={() => setIsOrderModalOpen(true)} />

      {/* 5. Culinary Craft (Uncompromising Heritage & Hospitality) */}
      <CulinaryCraftSection />

      {/* 6. Location & Hours (Shobhagpura, Udaipur Map & Access) */}
      <LocationSection onReserveClick={() => setIsOrderModalOpen(true)} />

      {/* 7. Layered Card & Glass Refraction Footer */}
      <section id="footer-section" className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 flex flex-col items-center">
        <Footer />
      </section>

      {/* Table Reservation & Order Modal */}
      {isOrderModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsOrderModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => {
                setIsOrderModalOpen(false);
                setIsBooked(false);
              }}
              aria-label="Close"
            >
              &times;
            </button>

            {!isBooked ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[12px] font-bold text-[#08482D] bg-[#DAE7C7] px-3 py-1 rounded-full uppercase tracking-wider">
                    Koi All Day Café
                  </span>
                  <span className="text-[13px] text-[#5E5E61]">Shobhagpura, Udaipur</span>
                </div>

                <h2 className="text-[25px] font-bold text-[#101410] mb-2 font-['Inter_Tight',sans-serif]">
                  Reserve a Table or Pre-Order
                </h2>
                <p className="text-[14.5px] text-[#5E5E61] leading-relaxed mb-6">
                  Experience our tranquil Bali-style greenhouse patio or indoor air-conditioned seating. 100% Pure Vegetarian menu.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-[13px] font-semibold text-[#101410] block mb-1.5">
                      Your Name & Contact
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DAE7C7] bg-[#FDFEFD] text-[14px] focus:outline-none focus:border-[#08482D]"
                        defaultValue="Guest"
                      />
                      <input
                        type="tel"
                        placeholder="+91 Phone Number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DAE7C7] bg-[#FDFEFD] text-[14px] focus:outline-none focus:border-[#08482D]"
                        defaultValue="+91 99107 50890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[13px] font-semibold text-[#101410] block mb-1.5">
                        Party Size
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DAE7C7] bg-[#FDFEFD] text-[14px] focus:outline-none focus:border-[#08482D]"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6+ Gathering</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[13px] font-semibold text-[#101410] block mb-1.5">
                        Time Slot (11 AM - 11 PM)
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DAE7C7] bg-[#FDFEFD] text-[14px] focus:outline-none focus:border-[#08482D]"
                      >
                        <option>12:30 PM (Lunch)</option>
                        <option>4:00 PM (Coffee & Bakes)</option>
                        <option>7:00 PM (Sunset Dinner)</option>
                        <option>8:30 PM (Evening Patio)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[13px] font-semibold text-[#101410] block mb-1.5">
                      Seating Preference
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        type="button"
                        className="px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-[#08482D] text-white"
                      >
                        The Sunken Courtyard
                      </button>
                      <button
                        type="button"
                        className="px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-[#F0F4EC] text-[#101410]"
                      >
                        The Arched Veranda
                      </button>
                      <button
                        type="button"
                        className="px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-[#F0F4EC] text-[#101410]"
                      >
                        The Coffee Bar Lounge
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 bg-[#08482D] text-white rounded-xl font-semibold text-[15px] hover:bg-[#063923] transition-colors shadow-md"
                  onClick={() => setIsBooked(true)}
                >
                  Confirm Table Booking at Koi
                </button>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#DAE7C7] text-[#08482D] mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-[22px] font-bold text-[#101410] mb-2 font-['Inter_Tight',sans-serif]">
                  Table Reserved at Koi Café!
                </h3>
                <p className="text-[14.5px] text-[#5E5E61] leading-relaxed mb-6 max-w-sm mx-auto">
                  We look forward to hosting you for {guestCount} at {timeSlot}. A reservation confirmation has been logged for Plot 12/13, Shobhagpura, Udaipur.
                </p>
                <div className="p-4 bg-[#F2F7EE] rounded-xl text-[13.5px] text-[#08482D] font-medium mb-6">
                  📍 Plot No. 12/13, Near Nayara Petrol Pump, Shobhagpura · +91 99107 50890
                </div>
                <button
                  type="button"
                  className="px-6 py-2.5 bg-[#08482D] text-white rounded-full font-medium text-[14px]"
                  onClick={() => {
                    setIsOrderModalOpen(false);
                    setIsBooked(false);
                  }}
                >
                  Return to Café
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

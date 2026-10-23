import React from 'react';
import { Sparkles, Leaf, Coffee, Compass } from 'lucide-react';

export default function SanctuarySection() {
  return (
    <section id="sanctuary" className="w-full py-20 lg:py-28 bg-[#F5F8EF] border-t border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Subtitle & Title */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#08482D] mb-3">
            <span>01. Spatial & Culinary Ethos</span>
            <span aria-hidden="true">·</span>
            <span>Udaipur Sanctuary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Inter_Tight',sans-serif] font-bold text-[#101410] leading-[1.15] tracking-tight">
            An intentional sanctuary sculpted in lime, sand, and stone.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg border border-[#08482D]/12 bg-[#DAE7C7]/20 group">
              {/* Architectural Illustration */}
              <div className="w-full h-full bg-gradient-to-br from-[#EAEFE4] via-[#DEE8D6] to-[#CBDCC0] flex items-center justify-center p-8 relative">
                <svg viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-105">
                  {/* Arches & Sunlight Pillars */}
                  <rect x="20" y="40" width="280" height="320" rx="24" fill="#F8FAF5" stroke="#08482D" strokeWidth="2.5" />
                  <path d="M60 360 V 160 C 60 100, 160 100, 160 160 V 360" stroke="#08482D" strokeWidth="2.5" fill="#EBF1E6" />
                  <path d="M160 360 V 160 C 160 100, 260 100, 260 160 V 360" stroke="#08482D" strokeWidth="2.5" fill="#E4ECE0" />
                  {/* Central Potted Olive Tree */}
                  <ellipse cx="160" cy="340" rx="34" ry="10" fill="#08482D" fillOpacity="0.15" />
                  <path d="M142 340 L146 300 H174 L178 340 Z" fill="#D6A56E" stroke="#08482D" strokeWidth="2" />
                  <path d="M160 300 V 220" stroke="#08482D" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="160" cy="200" r="32" fill="#08482D" fillOpacity="0.85" />
                  <circle cx="140" cy="190" r="22" fill="#DAE7C7" />
                  <circle cx="180" cy="190" r="22" fill="#08482D" />
                  {/* Dappled Sun Rays */}
                  <line x1="40" y1="60" x2="110" y2="130" stroke="#08482D" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />
                  <line x1="210" y1="60" x2="280" y2="130" stroke="#08482D" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />
                </svg>

                {/* Scrim Overlay & Floating Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101410]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest font-mono text-[#DAE7C7]">
                    The Colonnade · Shobhagpura
                  </p>
                  <p className="text-xl font-['Inter_Tight',sans-serif] font-semibold mt-1">
                    Sculptural arches channeling morning sunlight
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#5E5E61] font-normal leading-relaxed">
              <p>
                In a city celebrated for royal heritage palaces and tranquil lakes,{' '}
                <strong className="font-semibold text-[#101410]">Koi Café & Social</strong> was born from a desire for contemporary repose. We envisioned a space where the clean, breathable lines of Bali courtyards merge naturally with the earthen warmth of Rajasthan.
              </p>
              <p>
                Every surface has been chosen for its tactile honesty: rough-troweled lime plaster that breathes with the desert climate, unpolished travertine pavers cool to the touch, and hand-turned terracotta vessels bearing olive trees. Nothing is rushed here.
              </p>
            </div>

            {/* Invariant Highlights */}
            <div className="pt-6 border-t border-[#08482D]/12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#08482D] font-semibold">
                  Mindful Vegetarianism
                </span>
                <h3 className="text-xl font-['Inter_Tight',sans-serif] font-bold text-[#101410]">
                  No Compromise on Depth
                </h3>
                <p className="text-sm text-[#5E5E61] leading-relaxed">
                  100% pure vegetarian culinary kitchen with dedicated separate Jain preparation stations, house-churned dairy, and zero cross-contamination.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#08482D] font-semibold">
                  Artisanal Coffee Craft
                </span>
                <h3 className="text-xl font-['Inter_Tight',sans-serif] font-bold text-[#101410]">
                  Single-Origin Micro-Lots
                </h3>
                <p className="text-sm text-[#5E5E61] leading-relaxed">
                  Direct-trade estate beans sourced from southern Indian highlands, precision ground and pulled on calibrated pressure with silky microfoam.
                </p>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[#08482D]">
              <span className="flex items-center gap-1.5 bg-[#DAE7C7]/60 px-3 py-1.5 rounded-full">
                <Leaf className="w-3.5 h-3.5" /> 100% Pure Vegetarian
              </span>
              <span className="flex items-center gap-1.5 bg-[#DAE7C7]/60 px-3 py-1.5 rounded-full">
                <Coffee className="w-3.5 h-3.5" /> Fresh Brews Daily
              </span>
              <span className="flex items-center gap-1.5 bg-[#DAE7C7]/60 px-3 py-1.5 rounded-full">
                <Compass className="w-3.5 h-3.5" /> Shobhagpura, Udaipur
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

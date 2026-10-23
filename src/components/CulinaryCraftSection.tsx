import React from 'react';
import { Flame, Coffee, HeartHandshake, ShieldCheck, Check } from 'lucide-react';

export default function CulinaryCraftSection() {
  return (
    <section id="experience" className="w-full py-20 lg:py-28 bg-[#F5F8EF] border-t border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Subtitle & Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#08482D] mb-3">
            <span>04. Guest Experience & Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Uncompromising Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Inter_Tight',sans-serif] font-bold text-[#101410] leading-tight tracking-tight">
            Rooted in pure vegetarian integrity and unhurried hospitality.
          </h2>
          <p className="text-sm sm:text-base text-[#5E5E61] mt-3 leading-relaxed">
            We don’t believe in rushing the table. Whether you are settling in for morning pour-overs with a sketchbook, hosting a family celebration, or escaping for a quiet evening date, our courtyard is your second living room.
          </p>
        </div>

        {/* 3 Interactive Craft Bento Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Pillar 1: Plant-Forward Heritage (7 cols) */}
          <div className="md:col-span-7 p-8 sm:p-10 rounded-[32px] bg-white border border-[#08482D]/10 shadow-[0_4px_24px_rgba(8,72,45,0.04)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#DAE7C7] flex items-center justify-center text-[#08482D]">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#08482D] font-semibold">
                Kitchen Invariant
              </span>
              <h3 className="text-2xl sm:text-3xl font-['Inter_Tight',sans-serif] font-bold text-[#101410]">
                Elevating Plant-Forward & Dairy Traditions
              </h3>
              <p className="text-sm sm:text-base text-[#5E5E61] leading-relaxed">
                Rajasthan has centuries of revered vegetarian culture. At Koi, we honor that heritage by combining ancient clay tandoor techniques with modern culinary rigor: bronze-die pastas, Neapolitan cold-fermented doughs, and delicate cashew-cream marinades without onion or garlic upon request.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#08482D]/10 flex flex-wrap gap-4 text-xs font-mono text-[#08482D] font-medium">
              <span className="flex items-center gap-1.5 bg-[#F5F8EF] px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-[#08482D]" /> Zero cross-contamination
              </span>
              <span className="flex items-center gap-1.5 bg-[#F5F8EF] px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-[#08482D]" /> Dedicated Jain cooking section
              </span>
              <span className="flex items-center gap-1.5 bg-[#F5F8EF] px-3 py-1.5 rounded-full">
                <Check className="w-3.5 h-3.5 text-[#08482D]" /> House-made sauces & dressings
              </span>
            </div>
          </div>

          {/* Pillar 2: Coffee & Extraction Science (5 cols) */}
          <div className="md:col-span-5 p-8 sm:p-10 rounded-[32px] bg-[#DAE7C7]/35 border border-[#08482D]/10 shadow-[0_4px_24px_rgba(8,72,45,0.04)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#08482D] shadow-sm">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#08482D] font-semibold">
                Barista Ethos
              </span>
              <h3 className="text-2xl sm:text-3xl font-['Inter_Tight',sans-serif] font-bold text-[#101410]">
                Extraction Science & Single Origins
              </h3>
              <p className="text-sm sm:text-base text-[#5E5E61] leading-relaxed">
                We treat coffee with the reverence of wine: estate-grown micro-lots from Chikmagalur and Coorg, roasted to profile, and pulled on calibrated pressure-flow espresso bars alongside slow Japanese cold-drips.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#08482D]/12 space-y-2 text-xs font-medium text-[#101410]">
              <div className="flex justify-between items-center">
                <span className="text-[#5E5E61]">Brew Method</span>
                <span className="font-semibold text-[#08482D]">Espresso, V60, Cold Drip</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5E5E61]">Water Calibration</span>
                <span className="font-semibold text-[#08482D]">130 PPM Balanced Mineral Water</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Unhurried Courtyard Hospitality (Full width) */}
          <div className="md:col-span-12 p-8 sm:p-10 rounded-[32px] bg-white border border-[#08482D]/10 shadow-[0_4px_24px_rgba(8,72,45,0.04)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#08482D] font-semibold">
                <HeartHandshake className="w-4 h-4" />
                <span>The Unhurried Table Guarantee</span>
              </div>
              <h4 className="text-2xl font-['Inter_Tight',sans-serif] font-bold text-[#101410]">
                A space designed for hours, not minutes.
              </h4>
              <p className="text-sm text-[#5E5E61] leading-relaxed">
                No turnover timers, no rushing servers. Enjoy the afternoon breeze, plug in at dedicated working banquettes with high-speed fiber, or gather for sunset conversations over sharing plates and botanical coolers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <div className="px-6 py-4 rounded-2xl bg-[#F5F8EF] border border-[#08482D]/10 text-center w-full sm:w-auto">
                <span className="text-xs font-mono text-[#5E5E61] uppercase block">Seating Guarantee</span>
                <span className="text-lg font-bold text-[#08482D] font-['Inter_Tight',sans-serif]">Pure Vegetarian</span>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-[#F5F8EF] border border-[#08482D]/10 text-center w-full sm:w-auto">
                <span className="text-xs font-mono text-[#5E5E61] uppercase block">Pet Friendly</span>
                <span className="text-lg font-bold text-[#08482D] font-['Inter_Tight',sans-serif]">Outdoor Courtyard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

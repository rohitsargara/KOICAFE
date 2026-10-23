import React, { useState } from 'react';
import { Users, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

interface Space {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  capacity: string;
  vibe: string;
  timeOfDay: string;
  illustrationType: 'courtyard' | 'veranda' | 'lounge';
}

const SPACES: Space[] = [
  {
    id: 'courtyard',
    title: 'The Sunken Courtyard',
    subtitle: 'Bali-inspired limestone patio open to the Udaipur sky',
    description:
      'Framed by handcrafted terracotta planters, mature olive trees, and natural lime-washed walls. Designed for open-air conversational ease, dappled afternoon breezes, and quiet reflection under the desert sun.',
    features: [
      'Open-air alfresco dining',
      'Potted mature olive & monstera foliage',
      'Natural travertine stone flooring',
      'Bespoke woven cane chairs'
    ],
    capacity: 'Up to 34 guests',
    vibe: 'Breezy, tranquil, tactile & social',
    timeOfDay: 'Best for afternoon coffee and sunset gatherings',
    illustrationType: 'courtyard'
  },
  {
    id: 'veranda',
    title: 'The Arched Veranda',
    subtitle: 'Sculptural lime-wash arches & shaded daybeds',
    description:
      'A transition between sunlit courtyard and interior calmness. High sculptural arches softly channel the desert light, creating deep cooling shadows and an effortless Mediterranean-Rajasthani resonance.',
    features: [
      'Shaded sculptural archways',
      'Custom linen-upholstered banquettes',
      'Handcrafted ceramic pendant lights',
      'Filtered garden perspective'
    ],
    capacity: 'Up to 22 guests',
    vibe: 'Serene, contemplative & intimate',
    timeOfDay: 'Ideal for leisurely lunches and remote creative work',
    illustrationType: 'veranda'
  },
  {
    id: 'lounge',
    title: 'The Coffee Bar & Indoor Lounge',
    subtitle: 'A climate-controlled haven of fluted stone & rich aromas',
    description:
      'Anchored by a monolithic fluted stone espresso counter where baristas craft manual pour-overs and espresso classics. Tactile wood, warm muted olive cushions, and quiet acoustic privacy.',
    features: [
      'Custom espresso bar counter',
      'Dedicated quiet working alcoves',
      'High-speed fiber connectivity',
      'Ambient soft jazz acoustics'
    ],
    capacity: 'Up to 28 guests',
    vibe: 'Sophisticated, aroma-filled & comfortable',
    timeOfDay: 'Welcoming from opening till late evening dinner',
    illustrationType: 'lounge'
  }
];

export default function SpacesSection({ onReserveClick }: { onReserveClick?: () => void }) {
  const [activeSpaceId, setActiveSpaceId] = useState<string>('courtyard');
  const activeSpace = SPACES.find((s) => s.id === activeSpaceId) || SPACES[0];

  return (
    <section id="spaces" className="w-full py-20 lg:py-28 bg-[#F5F8EF] border-t border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Subtitle & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#08482D] mb-3">
              <span>03. Spatial Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Bali Meets Udaipur</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Inter_Tight',sans-serif] font-bold text-[#101410] leading-tight tracking-tight">
              Three distinct realms of calm and conversation.
            </h2>
            <p className="text-sm sm:text-base text-[#5E5E61] mt-3 leading-relaxed">
              Designed as a sequence of transitions—from the sun-kissed open limestone courtyard to shaded sculptural arches and intimate climate-controlled corners.
            </p>
          </div>

          {/* Space Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#DAE7C7]/50 rounded-2xl self-start md:self-end">
            {SPACES.map((space) => (
              <button
                key={space.id}
                type="button"
                onClick={() => setActiveSpaceId(space.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeSpaceId === space.id
                    ? 'bg-[#08482D] text-white shadow-sm font-semibold'
                    : 'text-[#101410] hover:text-[#08482D]'
                }`}
              >
                {space.title.replace('The ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Space Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white rounded-[36px] p-8 sm:p-10 lg:p-12 border border-[#08482D]/10 shadow-[0_4px_24px_rgba(8,72,45,0.04)]">
          {/* Left: Architectural Render / Illustration */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden border border-[#08482D]/12 bg-gradient-to-br from-[#E6EFE1] to-[#D5E4CE] flex items-center justify-center p-8 group">
              {/* Dynamic SVG Visual according to Space */}
              {activeSpace.illustrationType === 'courtyard' && (
                <svg viewBox="0 0 600 400" fill="none" className="w-full h-full">
                  <rect x="40" y="40" width="520" height="320" rx="16" fill="#FBFDFC" stroke="#08482D" strokeWidth="2.5" />
                  {/* Paved courtyard stones */}
                  <line x1="40" y1="280" x2="560" y2="280" stroke="#08482D" strokeWidth="2" />
                  <path d="M120 280 L180 180 H420 L480 280 Z" fill="#E8F0E2" stroke="#08482D" strokeWidth="2" />
                  {/* Cane Chairs & Round Table */}
                  <circle cx="300" cy="230" r="38" fill="#FFF" stroke="#08482D" strokeWidth="2.5" />
                  <ellipse cx="230" cy="230" rx="18" ry="24" fill="#DAE7C7" stroke="#08482D" strokeWidth="2" />
                  <ellipse cx="370" cy="230" rx="18" ry="24" fill="#DAE7C7" stroke="#08482D" strokeWidth="2" />
                  {/* Mature Olive Plants */}
                  <path d="M90 280 V120" stroke="#08482D" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="90" cy="110" r="45" fill="#08482D" fillOpacity="0.85" />
                  <path d="M510 280 V120" stroke="#08482D" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="510" cy="110" r="45" fill="#08482D" fillOpacity="0.85" />
                </svg>
              )}

              {activeSpace.illustrationType === 'veranda' && (
                <svg viewBox="0 0 600 400" fill="none" className="w-full h-full">
                  <rect x="40" y="40" width="520" height="320" rx="16" fill="#F8FAF5" stroke="#08482D" strokeWidth="2.5" />
                  {/* Three Grand Arches */}
                  <path d="M80 340 V 160 C 80 90, 200 90, 200 160 V 340" stroke="#08482D" strokeWidth="3" fill="#EBF2E6" />
                  <path d="M240 340 V 160 C 240 90, 360 90, 360 160 V 340" stroke="#08482D" strokeWidth="3" fill="#EBF2E6" />
                  <path d="M400 340 V 160 C 400 90, 520 90, 520 160 V 340" stroke="#08482D" strokeWidth="3" fill="#EBF2E6" />
                  {/* Hanging Pendant Lamps */}
                  <line x1="140" y1="40" x2="140" y2="130" stroke="#08482D" strokeWidth="1.8" />
                  <polygon points="125,150 155,150 148,130 132,130" fill="#D6A56E" stroke="#08482D" strokeWidth="2" />
                  <line x1="300" y1="40" x2="300" y2="130" stroke="#08482D" strokeWidth="1.8" />
                  <polygon points="285,150 315,150 308,130 292,130" fill="#D6A56E" stroke="#08482D" strokeWidth="2" />
                  <line x1="460" y1="40" x2="460" y2="130" stroke="#08482D" strokeWidth="1.8" />
                  <polygon points="445,150 475,150 468,130 452,130" fill="#D6A56E" stroke="#08482D" strokeWidth="2" />
                </svg>
              )}

              {activeSpace.illustrationType === 'lounge' && (
                <svg viewBox="0 0 600 400" fill="none" className="w-full h-full">
                  <rect x="40" y="40" width="520" height="320" rx="16" fill="#F6F9F3" stroke="#08482D" strokeWidth="2.5" />
                  {/* Fluted Stone Counter */}
                  <rect x="120" y="200" width="360" height="120" rx="8" fill="#DAE7C7" stroke="#08482D" strokeWidth="2.5" />
                  {/* Fluted lines */}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <line key={i} x1={140 + i * 22} y1="200" x2={140 + i * 22} y2="320" stroke="#08482D" strokeWidth="1.5" strokeOpacity="0.4" />
                  ))}
                  {/* Espresso Machine Silhouette */}
                  <rect x="220" y="140" width="160" height="60" rx="6" fill="#FFF" stroke="#08482D" strokeWidth="2.5" />
                  <circle cx="260" cy="170" r="8" fill="#08482D" />
                  <circle cx="340" cy="170" r="8" fill="#08482D" />
                  {/* Warm steam rising */}
                  <path d="M255 130 C250 115, 265 105, 260 90" stroke="#08482D" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M335 130 C330 115, 345 105, 340 90" stroke="#08482D" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
                </svg>
              )}

              {/* Tag overlay */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#08482D] border border-white/60">
                {activeSpace.title}
              </div>
            </div>
          </div>

          {/* Right: Space Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#08482D] font-semibold">
                Atmosphere & Spatial Rhythm
              </span>
              <h3 className="text-2xl sm:text-3xl font-['Inter_Tight',sans-serif] font-bold text-[#101410] mt-1">
                {activeSpace.title}
              </h3>
              <p className="text-sm font-medium text-[#08482D] mt-1">
                {activeSpace.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#5E5E61] leading-relaxed">
              {activeSpace.description}
            </p>

            {/* Features List */}
            <div className="space-y-2.5 pt-2">
              {activeSpace.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#101410]">
                  <CheckCircle2 className="w-4 h-4 text-[#08482D] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Capacity & Best Time Meta */}
            <div className="p-4 bg-[#F5F8EF] rounded-2xl border border-[#08482D]/10 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#5E5E61] block mb-0.5 font-medium">Capacity</span>
                <span className="font-bold text-[#101410] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#08482D]" />
                  {activeSpace.capacity}
                </span>
              </div>
              <div>
                <span className="text-[#5E5E61] block mb-0.5 font-medium">Best Timing</span>
                <span className="font-bold text-[#101410] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#08482D]" />
                  11 AM – 11 PM
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onReserveClick}
              className="w-full py-3.5 bg-[#08482D] text-white rounded-xl font-semibold text-sm hover:bg-[#063923] transition-colors shadow-sm"
            >
              Reserve Table in {activeSpace.title.replace('The ', '')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

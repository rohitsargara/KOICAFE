import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, MapPin, Phone, Clock, Coffee } from 'lucide-react';

export function LogoIcon() {
  return (
    <div className="w-8 h-8 bg-[#08482D] rounded-[8px] flex items-center justify-center shadow-sm">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C4 20 4 14 10 10C16 6 20 4 20 4C20 4 18 8 14 14C10 20 4 20 4 20Z" fill="white" />
        <path d="M4 20L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function FooterCard() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Phone, href: "tel:+919910750890", label: "Phone" },
    { icon: MapPin, href: "https://maps.google.com", label: "Directions" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto z-10 relative">
      {/* Outer Body: Warm mint-toned layered container matching the hero section */}
      <div className="bg-[#E8ECE2] rounded-[48px] border border-[#DAE7C7] shadow-sm overflow-hidden">
        {/* Inner White Box */}
        <div className="bg-white rounded-[40px] m-2 shadow-sm">
          {/* Content Grid Space */}
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            
            {/* Brand Info (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-7">
              <div className="flex items-center gap-2.5">
                <LogoIcon />
                <span className="text-[26px] font-bold tracking-tight text-[#08482D] font-['Inter_Tight',sans-serif]">
                  koi cafe
                </span>
                <span className="text-[11px] font-semibold text-[#08482D] bg-[#DAE7C7] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Shobhagpura
                </span>
              </div>

              <p className="text-[#64748B] leading-relaxed text-[15.5px] font-normal max-w-[340px]">
                Udaipur’s signature Bali-inspired pure vegetarian café. Specialty roasted coffees, stone-baked pizzas, and tranquil garden seating for slow mornings and vibrant evenings.
              </p>

              {/* Quick Info Strip */}
              <div className="space-y-2 pt-1 text-[13.5px] text-[#475569]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#08482D] mt-0.5 shrink-0" />
                  <span>Plot 12/13, Near Nayara Pump, Shobhagpura, Udaipur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#08482D] shrink-0" />
                  <span>Open Daily: 11:00 AM – 11:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#08482D] shrink-0" />
                  <span>+91 99107 50890 · Pure Vegetarian</span>
                </div>
              </div>

              {/* Socials Group */}
              <div className="flex items-center gap-2.5 pt-2">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#F5F8EF] hover:border-[#DAE7C7] transition-all active:scale-95 group"
                    >
                      <Icon className="w-5 h-5 text-[#08482D] group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Menu Column */}
            <div className="space-y-6">
              <h4 className="text-[13.5px] font-semibold text-[#08482D] tracking-wider uppercase">
                Menu
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: "Specialty Coffees", tag: "Hot & Cold" },
                  { name: "Woodfired Pizzas", tag: "Crisp Crust" },
                  { name: "Gourmet Pastas", tag: "Handmade" },
                  { name: "Tandoori Sandwiches", tag: "Spiced Paneer" },
                  { name: "Thick Shakes & Coolers", tag: "House Blend" },
                  { name: "Steam & Fried Momos", tag: "Chef Secret" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#menu"
                      className="text-[15px] font-medium text-[#1E293B] hover:text-[#08482D] transition-colors flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience Column */}
            <div className="space-y-6">
              <h4 className="text-[13.5px] font-semibold text-[#08482D] tracking-wider uppercase">
                Experience
              </h4>
              <ul className="space-y-3.5">
                {[
                  "Bali-Style Decor",
                  "Outdoor Garden Patio",
                  "Remote Work Nook",
                  "Private Celebrations",
                  "Pure Veg Kitchen",
                  "Evening Acoustic Sets",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#experience"
                      className="text-[15px] font-medium text-[#1E293B] hover:text-[#08482D] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit & Connect Column */}
            <div className="space-y-6">
              <h4 className="text-[13.5px] font-semibold text-[#08482D] tracking-wider uppercase">
                Visit & Connect
              </h4>
              <ul className="space-y-3.5">
                {[
                  "Table Reservation",
                  "Order Online (Zomato)",
                  "Location Map & Parking",
                  "Catering Inquiries",
                  "Host Your Event",
                  "Careers at Koi",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#visit"
                      className="text-[15px] font-medium text-[#1E293B] hover:text-[#08482D] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Legal Bar (Inside Outer Wrap, OUTSIDE of White Box) */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[14.5px]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
            <p className="text-[#5E5E61] font-medium">
              © 2026 Koi Café Shobhagpura, Udaipur. All rights reserved. 100% Pure Vegetarian.
            </p>
            <span className="hidden sm:inline text-[#DAE7C7]">·</span>
            <a
              href="https://heyrohit.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#08482D] font-semibold hover:underline transition-all"
            >
              Website by - Rohit.dev
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-[#5E5E61] font-medium">
            <a href="#privacy" className="hover:text-[#08482D] transition-colors">
              Privacy & Hygiene
            </a>
            <div className="w-[1px] h-4 bg-[#DAE7C7]" />
            <a href="#terms" className="hover:text-[#08482D] transition-colors">
              Dining Policies
            </a>
            <div className="w-[1px] h-4 bg-[#DAE7C7]" />
            <a href="https://maps.google.com/?q=Koi+Cafe+Shobhagpura+Udaipur" target="_blank" rel="noopener noreferrer" className="hover:text-[#08482D] transition-colors">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GlassText() {
  return (
    <div className="relative w-full flex items-center justify-center select-none pt-0 overflow-hidden">
      {/* Invisible SVG filter with handcrafted optical glass refractions */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#08482D" floodOpacity="0.2" result="outer-shadow" />
            <feComponentTransfer in="SourceAlpha" result="alpha">
              <feFuncA type="linear" slope="1" />
            </feComponentTransfer>
            <feOffset in="alpha" dx="0" dy="4" result="offset-white" />
            <feGaussianBlur in="offset-white" stdDeviation="4" result="blur-white" />
            <feComposite in="alpha" in2="blur-white" operator="out" result="inner-white-mask" />
            <feFlood floodColor="#ffffff" floodOpacity="0.35" result="white-fill" />
            <feComposite in="white-fill" in2="inner-white-mask" operator="in" result="inner-white-final" />
            <feGaussianBlur in="alpha" stdDeviation="6" result="blur-black" />
            <feComposite in="alpha" in2="blur-black" operator="out" result="inner-black-mask" />
            <feFlood floodColor="#08482D" floodOpacity="0.18" result="black-fill" />
            <feComposite in="black-fill" in2="inner-black-mask" operator="in" result="inner-black-final" />
            <feMerge>
              <feMergeNode in="outer-shadow" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="inner-white-final" />
              <feMergeNode in="inner-black-final" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Motion Element placed underneath the SVG code */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative -mt-10 sm:-mt-16 md:-mt-24 pointer-events-none"
      >
        <h1
          className="text-[min(23vw,320px)] font-bold tracking-tight leading-none select-none text-white px-4 font-['Inter_Tight',sans-serif] text-center"
          style={{ filter: 'url(#glass-effect)' }}
        >
          koi cafe
        </h1>
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-0 pt-8 pb-4">
      <FooterCard />
      <GlassText />
    </footer>
  );
}

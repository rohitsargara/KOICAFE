import React, { useEffect, useRef, useState } from 'react';

interface CafeItem {
  index: number;
  tag: string;
  title: string;
  subtitle: string;
  price: string;
  category: string;
  badge: string;
  bgGradient: string;
  desc: string;
  svgIcon: string;
}

export const KOI_ITEMS: CafeItem[] = [
  {
    index: 0,
    tag: 'Signature Brew',
    title: 'Velvet Flat White',
    subtitle: 'Ristretto Double & Microfoam Art',
    price: '₹190',
    category: 'Espresso Bar',
    badge: 'Artisan Roast',
    bgGradient: 'linear-gradient(145deg, #E6EFE0 0%, #D2DFCA 100%)',
    desc: 'Pure Arabica espresso pulled on calibrated pressure with silky microfoam, served in handcrafted ceramic drinkware.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="72" rx="36" ry="12" fill="#08482D" fill-opacity="0.12"/>
        <path d="M22 45 C22 68, 32 78, 50 78 C68 78, 78 68, 78 45 Z" fill="#FBFDFC" stroke="#08482D" stroke-width="3"/>
        <ellipse cx="50" cy="45" rx="28" ry="10" fill="#9C6B46" stroke="#08482D" stroke-width="2"/>
        <path d="M42 45 C45 42, 55 42, 58 45 C55 48, 45 48, 42 45 Z" fill="#F4EDE2"/>
        <circle cx="50" cy="44" r="3.5" fill="#F4EDE2"/>
        <path d="M44 32 C41 24, 49 18, 46 10" stroke="#08482D" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="3 3"/>
        <path d="M56 30 C53 22, 61 16, 58 8" stroke="#08482D" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="3 3"/>
        <path d="M78 50 C86 50, 88 62, 75 65" stroke="#08482D" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>
    `
  },
  {
    index: 1,
    tag: 'Chef Special',
    title: 'Woodfired Truffle Pizza',
    subtitle: 'Charred Sourdough Crust & Bocconcini',
    price: '₹390',
    category: 'Stone Oven',
    badge: 'Thin Crust',
    bgGradient: 'linear-gradient(145deg, #F3EDE2 0%, #E3D4C0 100%)',
    desc: 'Fermented 48-hour sourdough base, Italian San Marzano sauce, fresh melted bocconcini cheese, and fragrant black truffle drizzle.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="74" rx="38" ry="10" fill="#08482D" fill-opacity="0.12"/>
        <path d="M20 54 C26 40, 40 34, 50 34 C60 34, 74 40, 80 54 C76 66, 62 70, 50 70 C38 70, 24 66, 20 54 Z" fill="#DFA85D" stroke="#08482D" stroke-width="2.8"/>
        <path d="M32 40 C38 35, 46 34, 50 34 C54 34, 62 35, 68 40" stroke="#08482D" stroke-width="2.2" fill="none"/>
        <circle cx="50" cy="46" r="2.5" fill="#FFF"/>
        <circle cx="40" cy="52" r="2.5" fill="#DC2626"/>
        <circle cx="60" cy="52" r="2.5" fill="#16A34A"/>
      </svg>
    `
  },
  {
    index: 2,
    tag: 'Udaipur Favorite',
    title: 'Tandoori Paneer Toast',
    subtitle: 'Clay-Oven Paneer & Mint Chutney',
    price: '₹260',
    category: 'Cafe Bites',
    badge: 'Popular',
    bgGradient: 'linear-gradient(145deg, #E8EFE3 0%, #CDE0C4 100%)',
    desc: 'Smoky spiced cottage cheese cubes chargrilled to perfection, tucked inside toasted artisanal bread with pickled garden onions.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="76" rx="38" ry="10" fill="#08482D" fill-opacity="0.12"/>
        <path d="M22 60 C20 44, 28 32, 50 32 C72 32, 80 44, 78 60 C78 68, 68 70, 50 70 C32 70, 22 68, 22 60 Z" fill="#C99052" stroke="#08482D" stroke-width="2.6"/>
        <path d="M28 54 C32 44, 40 40, 50 40 C60 40, 68 44, 72 54 C68 62, 58 64, 50 64 C42 64, 32 62, 28 54 Z" fill="#78A65A"/>
        <rect x="42" y="44" width="16" height="14" rx="2" fill="#FEF08A" stroke="#08482D" stroke-width="1.5"/>
      </svg>
    `
  },
  {
    index: 3,
    tag: '18h Steep',
    title: 'Kyoto Cold Brew',
    subtitle: 'Dark Chocolate & Cascading Cream',
    price: '₹220',
    category: 'Cold Brews',
    badge: 'Single Origin',
    bgGradient: 'linear-gradient(145deg, #DFE6DB 0%, #C8D8C2 100%)',
    desc: 'Slow drop-steeped over 18 hours in our Shobhagpura studio. Exceptionally smooth, naturally sweet with lingering cocoa notes.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="80" rx="26" ry="8" fill="#08482D" fill-opacity="0.12"/>
        <path d="M32 20 L36 78 C36 81, 64 81, 64 78 L68 20 Z" fill="#F0F4EC" stroke="#08482D" stroke-width="2.6"/>
        <path d="M34 32 L66 32 L63 76 C63 78, 37 78, 37 76 Z" fill="#3D2619"/>
        <path d="M33 22 C33 22, 45 26, 50 26 C55 26, 67 22, 67 22 L66 32 L34 32 Z" fill="#E8DBCF"/>
      </svg>
    `
  },
  {
    index: 4,
    tag: 'Bali Vibe',
    title: 'Creamy Alfredo Penne',
    subtitle: 'Parmesan White Cream & Basil',
    price: '₹340',
    category: 'Italian Kitchen',
    badge: 'Vegetarian',
    bgGradient: 'linear-gradient(145deg, #E1EDE0 0%, #C7DDC4 100%)',
    desc: 'Al dente penne folded in a velvety slow-simmered garlic parmesan emulsion, cracked black peppercorn, and wild garden oregano.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="75" rx="36" ry="11" fill="#08482D" fill-opacity="0.12"/>
        <path d="M18 42 C18 68, 32 76, 50 76 C68 76, 82 68, 82 42 Z" fill="#F9FAF7" stroke="#08482D" stroke-width="3"/>
        <ellipse cx="50" cy="42" rx="32" ry="11" fill="#FEF08A" stroke="#08482D" stroke-width="2"/>
        <circle cx="48" cy="42" r="3" fill="#16A34A"/>
        <circle cx="56" cy="40" r="2.5" fill="#16A34A"/>
      </svg>
    `
  },
  {
    index: 5,
    tag: 'House Special',
    title: 'Pan-Fried Gravy Momos',
    subtitle: 'Spicy Tangy Glaze & Coriander',
    price: '₹240',
    category: 'Small Plates',
    badge: 'Must Try',
    bgGradient: 'linear-gradient(145deg, #F4EEE4 0%, #E2D3BE 100%)',
    desc: 'Delicately pleated vegetable momos pan-tossed in our signature roasted chili garlic gravy with fresh spring onion shoots.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="74" rx="36" ry="10" fill="#08482D" fill-opacity="0.12"/>
        <circle cx="50" cy="52" r="24" fill="#D69B56" stroke="#08482D" stroke-width="2.8"/>
        <path d="M35 48 C42 42, 58 42, 65 48" stroke="#08482D" stroke-width="2" fill="none"/>
        <circle cx="50" cy="50" r="4" fill="#DC2626"/>
      </svg>
    `
  },
  {
    index: 6,
    tag: 'Artisan Bakery',
    title: 'Butter Croissant Roll',
    subtitle: 'Cultured Butter Honeycomb Layer',
    price: '₹180',
    category: 'Fresh Bakes',
    badge: 'Baked 11 AM',
    bgGradient: 'linear-gradient(145deg, #E6EFE4 0%, #CFE2CC 100%)',
    desc: 'Golden flaky layers that shatter into tender butter bliss, perfect alongside our signature hot cortado.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="74" rx="36" ry="10" fill="#08482D" fill-opacity="0.12"/>
        <circle cx="50" cy="52" r="26" fill="#DFA85D" stroke="#08482D" stroke-width="2.8"/>
        <path d="M30 46 C40 38, 60 38, 70 46" stroke="#08482D" stroke-width="2.4" fill="none"/>
      </svg>
    `
  },
  {
    index: 7,
    tag: 'Cooler',
    title: 'Sunset Peach Mojito',
    subtitle: 'Muddled Mint, Meyer Lime & Soda',
    price: '₹190',
    category: 'Mocktails',
    badge: 'Chilled',
    bgGradient: 'linear-gradient(145deg, #F3EDE3 0%, #E1D3C0 100%)',
    desc: 'Crushed garden mint, freshly squeezed Meyer lime, white peach nectar, and sparkling Himalayan mineral water.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="76" rx="30" ry="10" fill="#08482D" fill-opacity="0.12"/>
        <path d="M30 35 L34 72 C34 75, 66 75, 66 72 L70 35 Z" fill="#FFF5EA" stroke="#08482D" stroke-width="2.6"/>
        <path d="M32 44 L68 44 L65 71 C65 73, 35 73, 35 71 Z" fill="#FB923C"/>
        <line x1="42" y1="20" x2="62" y2="55" stroke="#16A34A" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    index: 8,
    tag: 'Sweet Tooth',
    title: 'Lotus Biscoff Shake',
    subtitle: 'Caramelized Crumb & Vanilla Gelato',
    price: '₹240',
    category: 'Dessert Bar',
    badge: 'Indulgent',
    bgGradient: 'linear-gradient(145deg, #F5EEE2 0%, #E3D6C2 100%)',
    desc: 'Spiced Belgian speculoos cookie spread churned with rich artisan vanilla gelato and topped with buttery Biscoff crumbles.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="76" rx="36" ry="10" fill="#08482D" fill-opacity="0.12"/>
        <ellipse cx="50" cy="52" rx="30" ry="24" fill="#DFA65C" stroke="#08482D" stroke-width="2.8"/>
        <circle cx="50" cy="46" r="6" fill="#B87737" stroke="#08482D" stroke-width="2"/>
      </svg>
    `
  },
  {
    index: 9,
    tag: 'Classic',
    title: 'Honey Sea Salt Cortado',
    subtitle: '1:1 Ratio Espresso & Local Honey',
    price: '₹190',
    category: 'Espresso Bar',
    badge: 'Barista Pick',
    bgGradient: 'linear-gradient(145deg, #E6EFE1 0%, #CFDFCA 100%)',
    desc: 'Equal measure of dark espresso shot and steamed velvet milk with raw forest honey and a hint of Himalayan pink salt.',
    svgIcon: `
      <svg viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="78" rx="26" ry="8" fill="#08482D" fill-opacity="0.12"/>
        <path d="M30 32 L36 74 C36 77, 64 77, 64 74 L70 32 Z" fill="#F4F8F0" stroke="#08482D" stroke-width="2.6"/>
        <path d="M32 44 L68 44 L63 73 C63 75, 37 75, 37 73 Z" fill="#885033"/>
      </svg>
    `
  }
];

export default function HeroSection({ onOrderClick }: { onOrderClick?: () => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<CafeItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clock
    const clock = document.documentElement.animate([], { duration: 1e9, iterations: 1 });
    let scrollPos = 0;
    let lastTime = Number(clock.currentTime || performance.now());
    let coastVelocity = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let lastPointerX = 0;
    let lastPointerTime = 0;
    let dragVelocity = 0;
    let hasMovedFar = false;

    // Build DOM cards inside track
    track.innerHTML = '';
    const cards: { el: HTMLDivElement; item: CafeItem }[] = [];

    KOI_ITEMS.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'carousel-card cursor-pointer';
      card.dataset.index = String(idx);

      const mediaBox = document.createElement('div');
      mediaBox.className = 'card-media-box';
      mediaBox.style.background = item.bgGradient;
      mediaBox.innerHTML = `
        <div class="card-tag">${item.tag}</div>
        <div class="card-illustration">${item.svgIcon}</div>
        <div class="card-info">
          <div class="card-title">${item.title}</div>
          <div class="card-sub">${item.subtitle}</div>
          <div class="card-price-row">
            <span class="card-price">${item.price}</span>
            <span class="card-badge-small">${item.badge}</span>
          </div>
        </div>
      `;

      const playIcon = document.createElement('div');
      playIcon.className = 'card-play-icon';
      playIcon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      `;

      card.appendChild(mediaBox);
      card.appendChild(playIcon);

      card.addEventListener('click', () => {
        if (hasMovedFar) return;
        setSelectedItem(item);
        setIsModalOpen(true);
      });

      track.appendChild(card);
      cards.push({ el: card, item });
    });

    function getScale() {
      const isMobile = window.innerWidth <= 820;
      if (isMobile) {
        const u = window.innerWidth / 640;
        return { u, cx: 320, baseH: 175, centerCy: 125, pitch: 130, loopPeriod: 1300, isMobile: true };
      }
      const u = Math.min(window.innerWidth / 1440, window.innerHeight / 1080);
      return { u, cx: 720, baseH: 280, centerCy: 687, pitch: 196, loopPeriod: 1960, isMobile: false };
    }

    function computeRoundedQuadPath(
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      p3: { x: number; y: number },
      radius: number
    ) {
      const pts = [p0, p1, p2, p3];
      const inPts = [];
      const outPts = [];
      for (let i = 0; i < 4; i++) {
        const prev = pts[(i + 3) % 4];
        const curr = pts[i];
        const next = pts[(i + 1) % 4];
        const vPX = prev.x - curr.x;
        const vPY = prev.y - curr.y;
        const lP = Math.hypot(vPX, vPY) || 1;
        const vNX = next.x - curr.x;
        const vNY = next.y - curr.y;
        const lN = Math.hypot(vNX, vNY) || 1;
        const r = Math.min(radius, lP * 0.44, lN * 0.44);
        inPts[i] = { x: curr.x + r * (vPX / lP), y: curr.y + r * (vPY / lP) };
        outPts[i] = { x: curr.x + r * (vNX / lN), y: curr.y + r * (vNY / lN) };
      }
      return (
        `M ${outPts[0].x.toFixed(1)} ${outPts[0].y.toFixed(1)} ` +
        `L ${inPts[1].x.toFixed(1)} ${inPts[1].y.toFixed(1)} ` +
        `Q ${pts[1].x.toFixed(1)} ${pts[1].y.toFixed(1)}, ${outPts[1].x.toFixed(1)} ${outPts[1].y.toFixed(1)} ` +
        `L ${inPts[2].x.toFixed(1)} ${inPts[2].y.toFixed(1)} ` +
        `Q ${pts[2].x.toFixed(1)} ${pts[2].y.toFixed(1)}, ${outPts[2].x.toFixed(1)} ${outPts[2].y.toFixed(1)} ` +
        `L ${inPts[3].x.toFixed(1)} ${inPts[3].y.toFixed(1)} ` +
        `Q ${pts[3].x.toFixed(1)} ${pts[3].y.toFixed(1)}, ${outPts[3].x.toFixed(1)} ${outPts[3].y.toFixed(1)} ` +
        `L ${inPts[0].x.toFixed(1)} ${inPts[0].y.toFixed(1)} ` +
        `Q ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}, ${outPts[0].x.toFixed(1)} ${outPts[0].y.toFixed(1)} Z`
      );
    }

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      hasMovedFar = false;
      track.classList.add('is-dragging');
      track.setPointerCapture(e.pointerId);
      dragStartX = e.clientX;
      dragStartScroll = scrollPos;
      lastPointerX = e.clientX;
      lastPointerTime = Number(clock.currentTime || performance.now());
      dragVelocity = 0;
      coastVelocity = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const { u } = getScale();
      const dx = (e.clientX - dragStartX) / u;
      if (Math.abs(e.clientX - dragStartX) > 6) hasMovedFar = true;
      scrollPos = dragStartScroll - dx;

      const now = Number(clock.currentTime || performance.now());
      const dt = (now - lastPointerTime) / 1000;
      if (dt > 0.008) {
        const instV = -(e.clientX - lastPointerX) / (u * dt);
        dragVelocity = dragVelocity * 0.35 + instV * 0.65;
        lastPointerX = e.clientX;
        lastPointerTime = now;
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('is-dragging');
      try {
        track.releasePointerCapture(e.pointerId);
      } catch (_) {}
      coastVelocity = dragVelocity;
      setTimeout(() => {
        hasMovedFar = false;
      }, 60);
    };

    track.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    let rafId: number;
    function loop() {
      const now = Number(clock.currentTime || performance.now());
      let dt = (now - lastTime) / 1000;
      lastTime = now;
      if (dt > 0.1) dt = 0.1;

      const scale = getScale();
      const { u, cx, baseH, centerCy, pitch, loopPeriod, isMobile } = scale;

      if (!isDragging) {
        if (Math.abs(coastVelocity) > 0.5) {
          coastVelocity = coastVelocity * Math.pow(0.05, dt);
        } else {
          coastVelocity = 0;
        }
        scrollPos += (50 + coastVelocity) * dt;
      }
      scrollPos = ((scrollPos % loopPeriod) + loopPeriod) % loopPeriod;

      for (let i = 0; i < cards.length; i++) {
        const { el } = cards[i];
        let t = ((i * pitch - scrollPos) % loopPeriod + loopPeriod) % loopPeriod;
        if (t > loopPeriod / 2) t -= loopPeriod;

        const normSpan = isMobile ? 314 : 706;
        const pushFactor = isMobile ? 0.075 : 0.083;
        const tRatio = t / normSpan;
        const xU = cx + t * (1 + pushFactor * tRatio * tRatio);
        const d = Math.abs(xU - cx) / normSpan;

        const baseW = isMobile ? 104 : 170;
        const deltaW = isMobile ? 26 : 48;
        const wU = baseW + deltaW * d * d;

        const xLeftU = xU - wU / 2;
        const xRightU = xU + wU / 2;
        const qLeft = Math.abs(xLeftU - cx) / normSpan;
        const qRight = Math.abs(xRightU - cx) / normSpan;

        const deltaH = isMobile ? 55 : 92;
        const hLeftU = baseH + deltaH * Math.pow(qLeft, 2.6);
        const hRightU = baseH + deltaH * Math.pow(qRight, 2.6);

        const centerDrop = isMobile ? 6 : 12;
        const cyU = centerCy - centerDrop * d * d;

        const W = wU * u;
        const H_left = hLeftU * u;
        const H_right = hRightU * u;
        const cy = cyU * u;

        const yTop_min = Math.min(cy - H_left / 2, cy - H_right / 2);
        const yBottom_max = Math.max(cy + H_left / 2, cy + H_right / 2);
        const H_box = yBottom_max - yTop_min;
        const posX = xLeftU * u;
        const posY = yTop_min;

        const screenLimit = isMobile ? window.innerWidth + 80 : 1440 * u + 100;
        if (posX + W < -100 || posX > screenLimit) {
          el.style.display = 'none';
          continue;
        } else {
          el.style.display = 'block';
        }

        const p0 = { x: 0, y: cy - H_left / 2 - posY };
        const p1 = { x: W, y: cy - H_right / 2 - posY };
        const p2 = { x: W, y: cy + H_right / 2 - posY };
        const p3 = { x: 0, y: cy + H_left / 2 - posY };

        const radiusU = (isMobile ? 10 : 15) * u;
        const pathData = computeRoundedQuadPath(p0, p1, p2, p3, radiusU);

        el.style.transform = `translate3d(${posX.toFixed(1)}px, ${posY.toFixed(1)}px, 0)`;
        el.style.width = `${W.toFixed(1)}px`;
        el.style.height = `${H_box.toFixed(1)}px`;
        el.style.clipPath = `path('${pathData}')`;
      }

      rafId = requestAnimationFrame(loop);
    }

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  return (
    <>
      <div id="hero-frame" className="relative flex flex-col items-center">
        {/* Top Bar: Logo */}
        <div className="top-logo" title="Koi Cafe Shobhagpura">
          <svg className="logo-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 23C5 23 7 13 14 7C21 1 24.5 3 24.5 3C24.5 3 25 11 18.5 18C12 25 5 23 5 23Z"
              fill="#08482D"
            />
            <path
              d="M5 23C9.5 19 15 14.5 19.5 8"
              stroke="#DAE7C7"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="9.5" cy="18.5" r="2.5" fill="#DAE7C7" />
          </svg>
          <span className="logo-text">Koi Café</span>
          <span className="logo-badge">Shobhagpura</span>
        </div>

        {/* Top Bar: Nav */}
        <nav className="top-nav" aria-label="Primary Navigation">
          <a href="#sanctuary" className="nav-link">The Sanctuary</a>
          <a href="#menu" className="nav-link">Curated Menu</a>
          <a href="#spaces" className="nav-link">Courtyard & Spaces</a>
          <a href="#experience" className="nav-link">Culinary Craft</a>
          <a href="#location" className="nav-link">Location & Hours</a>
        </nav>

        {/* Top Bar: Buttons */}
        <div className="top-buttons">
          <a
            href="tel:+919910750890"
            className="btn-login"
          >
            Call Us
          </a>
          <button
            className="btn-signup"
            type="button"
            onClick={onOrderClick}
          >
            Reserve Table
          </button>
        </div>

        {/* Badge */}
        <div className="trust-badge">
          Udaipur’s Favorite Bali-Inspired Vegetarian Café
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          <div className="headline-line-1">Slow-Crafted Brews</div>
          <div className="headline-line-2">& Woodfired Bakes</div>
        </h1>

        {/* Subline */}
        <p className="hero-subline">
          Artisanal single-origin espresso, hand-stretched woodfired pizzas, and gourmet vegetarian<br />
          small plates in a tranquil Bali-inspired greenhouse patio in Shobhagpura, Udaipur.<br />
          Pull up a sunlit chair or order ahead for express table pickup.
        </p>

        {/* Handwritten Notes & Doodles */}
        <div className="notes-layer">
          {/* Doodle // */}
          <svg className="doodle-slashes" viewBox="0 0 36 36" fill="none">
            <path d="M 8 30 C 12 20, 16 10, 19 5" stroke="#08482D" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 18 30 C 22 20, 26 10, 29 5" stroke="#08482D" strokeWidth="2.6" strokeLinecap="round" />
          </svg>

          {/* Note: Ovens on at 11 AM */}
          <div className="note-be-seen-container handwritten-font">
            <div className="note-be-seen-text">
              Open 11 AM<br />to 11 PM
            </div>
          </div>
          <svg className="arrow-be-seen-svg" viewBox="0 0 120 170" fill="none">
            <path d="M 75 10 C 85 65, 55 110, 15 155" stroke="#08482D" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 12 138 C 13 148, 14 153, 15 155 C 22 153, 29 150, 35 146" stroke="#08482D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Note: Pure Veg */}
          <div className="note-zero-cost-container handwritten-font">
            <div className="note-zero-cost-text">100% Pure Veg</div>
          </div>
          <svg className="arrow-zero-cost-svg" viewBox="0 0 45 26" fill="none">
            <path d="M 5 18 C 18 20, 28 14, 38 12" stroke="#08482D" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 28 7 L 38 12 L 29 18" stroke="#08482D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Curved Video Carousel */}
        <div id="carousel-container">
          <div id="carousel-track" ref={trackRef} role="region" aria-label="Koi Cafe Specialties Carousel" />
        </div>

        {/* CTA Button */}
        <div className="cta-container">
          <svg className="dashed-ring-svg" viewBox="0 0 190 74" fill="none">
            <rect
              x="1.5"
              y="1.5"
              width="187"
              height="71"
              rx="35.5"
              stroke="#08482D"
              strokeWidth="1.8"
              strokeDasharray="6 6"
            />
          </svg>
          <button className="btn-make-reel" type="button" onClick={onOrderClick}>
            Explore Menu
          </button>
        </div>
      </div>

      {/* Item Inspection Modal */}
      {isModalOpen && selectedItem && (
        <div className="modal-backdrop is-open" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[12.5px] font-bold text-[#08482D] bg-[#DAE7C7] px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedItem.category} · {selectedItem.badge}
              </span>
              <span className="text-[18px] text-[#08482D] font-bold">{selectedItem.price}</span>
            </div>
            <h2 className="text-[25px] font-bold text-[#101410] mb-1 font-['Inter_Tight',sans-serif]">
              {selectedItem.title}
            </h2>
            <p className="text-[14px] text-[#5E5E61] mb-4">{selectedItem.subtitle}</p>
            <div
              className="rounded-2xl p-6 flex items-center justify-center mb-5"
              style={{ background: selectedItem.bgGradient }}
            >
              <div className="w-32 h-32" dangerouslySetInnerHTML={{ __html: selectedItem.svgIcon }} />
            </div>
            <p className="text-[14.5px] text-[#374151] leading-relaxed mb-6">
              {selectedItem.desc}
            </p>
            <button
              type="button"
              className="w-full py-3.5 bg-[#08482D] text-white rounded-xl font-semibold text-[15px] hover:bg-[#063923] transition-colors"
              onClick={() => {
                setIsModalOpen(false);
                if (onOrderClick) onOrderClick();
              }}
            >
              Order for Dine-In / Takeaway ({selectedItem.price})
            </button>
          </div>
        </div>
      )}
    </>
  );
}

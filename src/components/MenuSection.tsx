import React, { useState } from 'react';
import { Sparkles, Utensils, Heart } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'mocktails' | 'small-plates' | 'handhelds' | 'pastas-pizzas' | 'desserts';
  price: number;
  description: string;
  tags: string[];
  pairingNote?: string;
  badge?: string;
}

export const FULL_MENU: MenuItem[] = [
  {
    id: 'c1',
    name: 'Classic Frappe Cold Coffee',
    category: 'coffee',
    price: 240,
    description: 'Double shot slow-extracted espresso whipped with creamy chilled milk and raw organic demerara sugar.',
    tags: ['signature'],
    pairingNote: 'Pairs seamlessly with our warm Basque cheesecake',
    badge: 'House Favorite'
  },
  {
    id: 'c2',
    name: 'Vietnamese Slow-Drip Cold Brew',
    category: 'coffee',
    price: 260,
    description: '18-hour cold steeped Arabica poured over sweet condensed cream and crystallized ice shards.',
    tags: ['chef-special'],
    pairingNote: 'Bold, velvety, and deeply aromatic'
  },
  {
    id: 'c3',
    name: 'Spanish Cinnamon Cortado',
    category: 'coffee',
    price: 210,
    description: 'Equal measures of intense espresso and textured steamed whole milk, finished with Ceylon cinnamon bark dust.',
    tags: ['signature']
  },
  {
    id: 'c4',
    name: 'Ceremonial Uji Matcha Latte',
    category: 'coffee',
    price: 280,
    description: 'Stone-ground ceremonial grade Japanese matcha whisked with velvety oat milk and raw wildflower honey.',
    tags: ['vegan-friendly'],
    pairingNote: 'Clean grassy notes with natural mellow sweetness'
  },
  {
    id: 'c5',
    name: 'Single Origin Manual Pour-Over (V60)',
    category: 'coffee',
    price: 240,
    description: 'Estate-grown Chikmagalur washed beans with pronounced notes of citrus blossom, stone fruit, and dark cocoa.',
    tags: ['vegan-friendly']
  },
  {
    id: 'm1',
    name: 'The Daredevil Botanical Mocktail',
    category: 'mocktails',
    price: 270,
    description: 'Signature spiced citrus elixir infused with crushed pink peppercorn, kaffir lime leaf, ginger extract, and artisanal tonic.',
    tags: ['signature', 'chef-special'],
    pairingNote: 'Crisp, invigorating, and beautifully balanced',
    badge: 'Signature'
  },
  {
    id: 'm2',
    name: 'Hibiscus Berry Botanical Spritz',
    category: 'mocktails',
    price: 250,
    description: 'Slow-brewed sun-dried hibiscus calyces, crushed wild berries, clarifying lime, and effervescent sparkling soda.',
    tags: ['vegan-friendly', 'jain-friendly']
  },
  {
    id: 'm3',
    name: 'Yuzu Mint Garden Cooler',
    category: 'mocktails',
    price: 260,
    description: 'Japanese yuzu pulp muddled with garden spearmint leaves, cucumber ribbon, and filtered mineral tonic.',
    tags: ['vegan-friendly', 'jain-friendly']
  },
  {
    id: 'm4',
    name: 'Passionfruit Basil Quencher',
    category: 'mocktails',
    price: 250,
    description: 'Tropical passionfruit seed reduction with sweet Thai holy basil and a sea-salt smoked rim.',
    tags: ['signature']
  },
  {
    id: 's1',
    name: 'Reshmi Malai Paneer Tikka',
    category: 'small-plates',
    price: 360,
    description: 'Pillow-soft fresh dairy paneer steeped in cashew emulsion, green cardamom, roasted mace, and charcoal-baked in the clay pit.',
    tags: ['signature', 'jain-friendly'],
    pairingNote: 'Served with micro-coriander and pickled pink onions',
    badge: 'Guest Landmark'
  },
  {
    id: 's2',
    name: 'Tandoori Malai Charred Broccoli',
    category: 'small-plates',
    price: 340,
    description: 'Tender broccoli florets marinated in hung curd, philadelphia cream, cracked black pepper, and toasted nigella seeds.',
    tags: ['chef-special', 'jain-friendly'],
    pairingNote: 'Smoky, charred, and tender to the bite'
  },
  {
    id: 's3',
    name: 'Beetroot & Roasted Pine Nut Kebabs',
    category: 'small-plates',
    price: 330,
    description: 'Velvety roasted beet and heirloom potato medallions crusted with toasted pine nuts, served over mint labneh.',
    tags: ['chef-special', 'vegan-friendly']
  },
  {
    id: 's4',
    name: 'Artisanal Gravy Dim Sums / Momos',
    category: 'small-plates',
    price: 310,
    description: 'Delicate hand-pinched steamed vegetable dim sums resting in a fragrant fiery roasted chili and toasted sesame broth.',
    tags: ['signature'],
    pairingNote: 'A crowd favorite with layered umami spice',
    badge: 'Bestseller'
  },
  {
    id: 's5',
    name: 'Crispy Truffle & Herb Fries',
    category: 'small-plates',
    price: 280,
    description: 'Hand-cut russet potatoes tossed with white truffle aromatics, sea salt crystals, fresh rosemary, and house garlic dip.',
    tags: ['jain-friendly']
  },
  {
    id: 'h1',
    name: 'Tandoori Paneer Sourdough Melt',
    category: 'handhelds',
    price: 340,
    description: 'Spiced clay-oven paneer slivers, bell pepper ribbons, and aged cheddar pressed between 48-hour fermented rustic sourdough.',
    tags: ['signature'],
    pairingNote: 'Served with house-made smoked tomato relish'
  },
  {
    id: 'h2',
    name: 'Pesto Bocconcini Panini',
    category: 'handhelds',
    price: 360,
    description: 'Fresh torn bocconcini cheese, sweet vine tomatoes, pine-nut basil pesto, and balsamic glaze on toasted ciabatta.',
    tags: ['chef-special', 'jain-friendly']
  },
  {
    id: 'h3',
    name: 'Hass Avocado & Whipped Feta Tartine',
    category: 'handhelds',
    price: 380,
    description: 'Sliced ripe avocado atop whipped sheep’s milk feta, toasted pumpkin seeds, chili crisp, and lemon zest on seeded sourdough.',
    tags: ['signature']
  },
  {
    id: 'p1',
    name: 'Creamy Truffle Alfredo Fettuccine',
    category: 'pastas-pizzas',
    price: 420,
    description: 'Bronze-die cut fettuccine tossed in a slow-simmered emulsion of aged parmesan, thyme butter, button mushrooms, and white truffle.',
    tags: ['signature', 'jain-friendly'],
    pairingNote: 'Unmatched comfort and velvety depth',
    badge: 'Chef Signature'
  },
  {
    id: 'p2',
    name: 'Neapolitan San Marzano Burrata Pizza',
    category: 'pastas-pizzas',
    price: 490,
    description: 'Wood-fired 72-hour leopard-crust crust topped with Italian San Marzano sauce, fresh whole burrata globe, and torn sweet basil.',
    tags: ['signature', 'chef-special']
  },
  {
    id: 'p3',
    name: 'Spaghetti Aglio Olio e Peperoncino',
    category: 'pastas-pizzas',
    price: 370,
    description: 'Spaghetti rolled in extra virgin cold-pressed olive oil, sliced golden garlic crisps, bird’s eye chili flakes, and Italian parsley.',
    tags: ['vegan-friendly']
  },
  {
    id: 'p4',
    name: 'Classic Rustic Margherita Pizza',
    category: 'pastas-pizzas',
    price: 420,
    description: 'Hand-stretched sourdough base, crush plum tomato pomodoro, fresh fior di latte mozzarella, and cold-pressed olive oil drizzle.',
    tags: ['jain-friendly']
  },
  {
    id: 'd1',
    name: 'Basque Burnt Cheesecake',
    category: 'desserts',
    price: 310,
    description: 'Caramelized mahogany exterior yielding to an ultra-creamy molten vanilla bean center, paired with house wild berry compote.',
    tags: ['signature'],
    badge: 'House Specialty'
  },
  {
    id: 'd2',
    name: 'Warm Saffron Pistachio Tres Leches',
    category: 'desserts',
    price: 290,
    description: 'Sponge cake steeped overnight in Kashmiri saffron cardamom milk, topped with toasted Iranian pistachios.',
    tags: ['chef-special', 'jain-friendly']
  },
  {
    id: 'd3',
    name: '70% Dark Chocolate Sea Salt Ganache',
    category: 'desserts',
    price: 320,
    description: 'Rich artisanal single-origin dark chocolate tart with Maldon sea salt flakes and roasted hazelnut praline crumble.',
    tags: ['signature']
  }
];

export default function MenuSection({ onOrderClick }: { onOrderClick?: () => void }) {
  const [filter, setFilter] = useState<'all' | 'signature' | 'coffee' | 'small-plates' | 'pastas-pizzas' | 'mocktails' | 'desserts' | 'jain-friendly'>('all');

  const filteredItems = FULL_MENU.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'signature') return item.tags.includes('signature') || item.tags.includes('chef-special');
    if (filter === 'jain-friendly') return item.tags.includes('jain-friendly');
    return item.category === filter;
  });

  return (
    <section id="menu" className="w-full py-20 lg:py-28 bg-[#F5F8EF] border-t border-[#08482D]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Subtitle & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#08482D] mb-3">
              <span>02. The Culinary Collection</span>
              <span aria-hidden="true">·</span>
              <span>100% Pure Vegetarian</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Inter_Tight',sans-serif] font-bold text-[#101410] leading-tight tracking-tight">
              Curated plates and slow artisanal extractions.
            </h2>
            <p className="text-sm sm:text-base text-[#5E5E61] mt-3 leading-relaxed max-w-2xl">
              Every dish is crafted in-house using pure dairy, stone-ground flours, fresh garden herbs, and imported Italian staples. Custom Jain preparations are available across the menu.
            </p>
          </div>

          <button
            type="button"
            onClick={onOrderClick}
            className="self-start md:self-end px-5 py-2.5 rounded-full bg-[#08482D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#063923] transition-colors shadow-sm"
          >
            Pre-Order for Table
          </button>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#08482D]/10">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'signature', label: 'House Signatures' },
            { id: 'coffee', label: 'Specialty Coffee' },
            { id: 'small-plates', label: 'Small Plates & Tandoor' },
            { id: 'pastas-pizzas', label: 'Pizzas & Pastas' },
            { id: 'mocktails', label: 'Botanical Mocktails' },
            { id: 'desserts', label: 'Artisan Desserts' },
            { id: 'jain-friendly', label: 'Jain Friendly' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              type="button"
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#08482D] text-white shadow-sm'
                  : 'bg-[#DAE7C7]/50 text-[#101410] hover:bg-[#DAE7C7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-[24px] p-6 border border-[#08482D]/10 shadow-[0_2px_12px_rgba(8,72,45,0.04)] flex flex-col justify-between hover:border-[#08482D]/30 transition-all hover:-translate-y-1"
            >
              <div>
                {/* Header: Title & Badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-['Inter_Tight',sans-serif] font-bold text-lg text-[#101410] leading-snug">
                    {dish.name}
                  </h3>
                  {dish.badge && (
                    <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#08482D] bg-[#DAE7C7] px-2.5 py-0.5 rounded-full">
                      {dish.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[13.5px] text-[#5E5E61] leading-relaxed mb-4">
                  {dish.description}
                </p>

                {/* Pairing Note */}
                {dish.pairingNote && (
                  <div className="mb-4 text-[12px] text-[#08482D] bg-[#F5F8EF] px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{dish.pairingNote}</span>
                  </div>
                )}
              </div>

              {/* Price & Action Row */}
              <div className="pt-4 border-t border-[#08482D]/8 flex items-center justify-between mt-2">
                <span className="font-['Inter_Tight',sans-serif] font-bold text-lg text-[#08482D]">
                  ₹{dish.price}
                </span>

                <div className="flex items-center gap-2">
                  {dish.tags.includes('jain-friendly') && (
                    <span className="text-[10.5px] font-semibold text-[#08482D] bg-[#DAE7C7]/60 px-2 py-0.5 rounded">
                      Jain Available
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={onOrderClick}
                    className="text-xs font-semibold text-[#08482D] hover:underline"
                  >
                    + Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

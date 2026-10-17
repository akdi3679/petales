"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

const filterData = {
  occasion: [
    { label: "Amour & Romance", value: "amour" },
    { label: "Anniversaire", value: "anniversaire" },
    { label: "Célébration", value: "celebration" },
    { label: "Naissance", value: "naissance" },
    { label: "Remerciement", value: "remerciement" },
    { label: "Prompt rétablissement", value: "get_well" },
    { label: "Condoléances", value: "sympathy" },
    { label: "Diplôme", value: "graduation" },
  ],
  colour: [
    { label: "Blanc", value: "white" },
    { label: "Rose", value: "pink" },
    { label: "Rouge", value: "red" },
    { label: "Vert", value: "green" },
  ],
  style: [
    { label: "Bouquets", value: "bouquets" },
    { label: "Vases", value: "vases" },
    { label: "Coffrets", value: "boxes" },
    { label: "Sacs", value: "bags" },
    { label: "Coffrets Cadeaux", value: "gift_sets" },
  ],
  type: [
    { label: "Roses", value: "roses" },
    { label: "Chrysanthèmes", value: "chrysanthemums" },
    { label: "Œillets", value: "sim_carnations" },
  ],
};

export function BoutiqueClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (value: string) => {
    if (value === "all_types") {
      const typeValues = filterData.type.map(t => t.value);
      setActiveFilters(prev => prev.filter(f => !typeValues.includes(f)));
      return;
    }
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSearchQuery("");
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters = activeFilters.length === 0 || activeFilters.some((f) => p.tags.includes(f));
      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, activeFilters]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32 md:pb-16">
      
      {/* ── MOBILE ONLY: Search & Filter Dropdown ── */}
      <div className="md:hidden mb-10">
        {/* Search Bar */}
        <div className="relative mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Rechercher une création..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-4 py-4 bg-cream/30 border border-line rounded-full focus:border-rose-deep focus:outline-none focus:ring-1 focus:ring-rose-deep/30 transition-all text-sm text-ink placeholder:text-ink/40"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between gap-2 px-6 py-3 bg-white border border-line rounded-full hover:bg-cream/50 transition-all active:scale-[0.98] shadow-sm"
          >
            <span className="text-sm font-medium text-ink">
              Filtres {activeFilters.length > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-rose-deep rounded-full">
                  {activeFilters.length}
                </span>
              )}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-ink transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showFilters && (
            <div className="absolute top-full left-0 z-50 mt-3 w-full bg-white border border-line rounded-2xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-6 border-b border-line pb-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-ink">Affiner par</h2>
                {activeFilters.length > 0 && (
                  <button onClick={clearAllFilters} className="text-xs font-medium text-rose-deep hover:underline">
                    Tout effacer
                  </button>
                )}
              </div>
              
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                <FilterGroup title="Occasion" items={filterData.occasion} activeFilters={activeFilters} toggleFilter={toggleFilter} />
                <FilterGroup title="Couleur" items={filterData.colour} activeFilters={activeFilters} toggleFilter={toggleFilter} />
                <FilterGroup title="Style" items={filterData.style} activeFilters={activeFilters} toggleFilter={toggleFilter} />
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-ink">Type de Fleur</h3>
                    <button onClick={() => toggleFilter("all_types")} className="text-[10px] font-medium text-ink/50 hover:text-ink">Tout voir</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filterData.type.map((item) => (
                      <FilterChip key={item.value} item={item} activeFilters={activeFilters} toggleFilter={toggleFilter} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── MAIN GRID: Sidebar (desktop) + Products (both) ── */}
      <div className="grid gap-8 md:gap-12 md:grid-cols-[280px_1fr]">
        
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:block">
          <div className="sticky top-24 space-y-8 border-r border-line pr-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-widest text-ink">Affiner par</h2>
              {activeFilters.length > 0 && (
                <button onClick={clearAllFilters} className="text-xs font-medium text-rose-deep hover:underline">
                  Effacer
                </button>
              )}
            </div>

            <FilterGroup title="Occasion" items={filterData.occasion} activeFilters={activeFilters} toggleFilter={toggleFilter} />
            <FilterGroup title="Couleur" items={filterData.colour} activeFilters={activeFilters} toggleFilter={toggleFilter} />
            <FilterGroup title="Style" items={filterData.style} activeFilters={activeFilters} toggleFilter={toggleFilter} />
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink">Type de Fleur</h3>
                <button onClick={() => toggleFilter("all_types")} className="text-[10px] font-medium text-ink/50 hover:text-ink">Tout voir</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {filterData.type.map((item) => (
                  <FilterChip key={item.value} item={item} activeFilters={activeFilters} toggleFilter={toggleFilter} />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Desktop Search + Products Grid */}
        <div>
          {/* DESKTOP SEARCH */}
          <div className="relative mb-10 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une création..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-cream/30 border border-line rounded-full focus:border-rose-deep focus:outline-none focus:ring-1 focus:ring-rose-deep/30 transition-all text-sm text-ink placeholder:text-ink/40"
            />
          </div>

          {/* PRODUCTS GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/boutique/${product.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream mb-4">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-title text-base md:text-lg text-ink group-hover:text-rose-deep transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-ink/60 mt-1">
                    {product.price} 
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-lg text-ink/60">Aucune création ne correspond à vos critères.</p>
              <button onClick={clearAllFilters} className="mt-4 text-sm font-medium text-rose-deep hover:underline">
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, items, activeFilters, toggleFilter }: any) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item: any) => (
          <FilterChip key={item.value} item={item} activeFilters={activeFilters} toggleFilter={toggleFilter} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({ item, activeFilters, toggleFilter }: any) {
  const isActive = activeFilters.includes(item.value);
  return (
    <button
      onClick={() => toggleFilter(item.value)}
      className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-medium transition-all border ${
        isActive
          ? "bg-ink text-ivory border-ink"
          : "bg-white text-ink/70 border-line hover:border-ink/30"
      }`}
    >
      {item.label}
    </button>
  );
}
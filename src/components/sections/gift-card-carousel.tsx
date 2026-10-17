import Link from "next/link";
import Image from "next/image";
import { giftCards } from "@/data/gift-cards";
import { products } from "@/data/products";
import { Reveal } from "@/components/ui/reveal";

export function GiftCardCarousel() {
  const scrollItems = [...giftCards, ...giftCards];

  return (
    <section className="w-full bg-cream/30 py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <Reveal>
          {/* Removed 'eyebrow' class and styled manually to force rose-deep color */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-rose-deep/60" />
            Cadeau tout prêt
            <span className="w-8 h-px bg-rose-deep/60" />
          </p>
          <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">
            Offrez l'attention parfaite
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink/70">
            Choisissez une carte pensée pour eux. Le produit et le message sont déjà prêts, 
            vous n'avez plus qu'à valider.
          </p>
        </Reveal>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full">
        {/* Fade masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-cream/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-cream/30 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max px-6">
          {scrollItems.map((card, index) => {
            const product = products.find((p) => p.slug === card.productSlug);
            if (!product) return null;

            const commandUrl = `/commande?produit=${product.slug}&recipient=${encodeURIComponent(card.persona.replace("Pour ", ""))}&message=${encodeURIComponent(card.message)}`;

            return (
              <Link 
                key={`${card.id}-${index}`} 
                href={commandUrl}
                className="group flex shrink-0 w-[320px] flex-col bg-white rounded-2xl border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image Part */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className={`absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-ink border ${card.accent}`}>
                    {card.persona}
                  </div>
                </div>

                {/* Content Part */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-title text-lg text-ink leading-tight mb-3">
                    {product.name}
                  </h3>
                  {/* Increased from text-xs to text-sm for better readability while scrolling */}
                  <p className="text-sm text-ink/70 italic font-serif leading-relaxed line-clamp-3 mb-4 flex-1">
                    "{card.message}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-line/50">
                    <span className="text-base font-semibold text-rose-deep">
                      {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(card.priceCents / 100)}
                    </span>
                    <span className="text-sm font-medium text-ink/60 group-hover:text-rose-deep transition-colors flex items-center gap-1">
                      Offrir <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
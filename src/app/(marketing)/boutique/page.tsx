import type { Metadata } from "next";
import { BoutiqueClient } from "@/components/shop/boutique-client";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Boutique | Maison de Pétales",
  description: "Découvrez nos bouquets de fleurs en guimauve artisanales. Filtrez par occasion, couleur ou style pour trouver le cadeau parfait.",
};

export default function BoutiquePage() {
  return (
    <main className="bg-ivory pb-24">
      {/* Hero / Header */}
      <section className="pt-32 pb-16 px-6 text-center bg-cream/20 border-b border-line">
        <Reveal>
          <p className="eyebrow justify-center">La Collection</p>
          <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">
            Nos Créations
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink/70">
            Des œuvres d'art comestibles, sculptées à la main dans notre atelier azuréen. 
            Trouvez celle qui racontera votre histoire.
          </p>
        </Reveal>
      </section>

      {/* Client Side Search & Filters */}
      <section className="pt-16">
        <Reveal delay={100}>
          <BoutiqueClient />
        </Reveal>
      </section>
    </main>
  );
}
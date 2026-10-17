import type { Metadata } from "next";
import Link from "next/link";
import { occasions } from "@/data/occasions";
import { cardMoods } from "@/data/card-moods";

export async function generateMetadata({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ occasion?: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = decodeURIComponent(slug).replace(/-/g, " ");
  return {
    title: `Une carte pour ${name.charAt(0).toUpperCase() + name.slice(1)}`,
    description: "Ouvrez votre carte fleurie de la Maison de Pétales.",
  };
}

export default async function PourPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ occasion?: string }> }) {
  const { slug } = await params;
  const sp = await searchParams;
  const name = decodeURIComponent(slug).replace(/-/g, " ");
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const occasion = occasions.find((o) => o.slug === sp.occasion);
  const mood = cardMoods[0]; // Default mood for the recipient view

  return (
    <main className="min-h-screen bg-[#faf7f2] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* The Card (Static Render) */}
        <div className="flex aspect-[5/7] w-full max-w-[400px] mx-auto overflow-hidden shadow-2xl rounded-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <div className="w-1/2 relative">
            <img src={mood.image} alt="Ambiance" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="w-1/2 flex flex-col justify-between bg-[#faf7f2] p-6 relative">
            <div className="absolute inset-3 border border-[#b08d57]/40 pointer-events-none" />
            <div className="text-center mt-4">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8a6a3b] font-semibold">Maison de Pétales</p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-ink/50 mt-1">Azuréenne</p>
            </div>
            <div className="text-center space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-ink/60">Une pensée pour</p>
              <h2 className="text-3xl text-[#9d5c63] leading-none" style={{ fontFamily: "'Parisienne', cursive" }}>{capitalName}</h2>
              <p className="text-[10px] italic text-ink/70 px-2 leading-relaxed">"J'ai pensé à toi pour un bouquet qui ne fane pas..."</p>
              <p className="text-[9px] uppercase tracking-widest text-ink/50">— Quelqu'un qui t'aime</p>
            </div>
            <div className="text-center mb-4">
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#8a6a3b]">{occasion?.name ?? "Occasion spéciale"} · maisondepetales.fr</p>
            </div>
          </div>
        </div>

        {/* The Conversion CTA */}
        <div className="text-center md:text-left space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3b] font-semibold">Maison de Pétales</p>
          <h1 className="display text-4xl text-[#3f3238] sm:text-5xl">
            Une fleur vous attend, <span className="script text-[#9d5c63]">{capitalName}</span>.
          </h1>
          <p className="text-base leading-7 text-ink/70 max-w-md">
            Quelqu'un de cher a créé cette carte pour vous. Derrière elle se cache une création artisanale en guimauve, faite main sur la Côte d'Azur, pensée pour ne jamais faner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/boutique" className="btn btn-primary px-8 py-3.5 text-base">
              Voir les créations
            </Link>
            <Link href="/commande" className="btn btn-outline px-8 py-3.5 text-base bg-white/60">
              Commander ce bouquet
            </Link>
          </div>
          <p className="text-xs text-ink/50 pt-4">
            Envie de créer votre propre carte pour un proche ? <Link href="/cartes" className="text-[#9d5c63] underline underline-offset-4">Ouvrir le studio de cartes →</Link>
          </p>
        </div>

      </div>
    </main>
  );
}
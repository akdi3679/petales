"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <section className="w-full bg-pink-bg py-24 pb-35">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          {/* Changed to text-ink for perfect, elegant contrast against the pink background */}
          <p className="script text-4xl text-ink">Un moment à célébrer ?</p>
          
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">
            Offrez des fleurs qui ne fanent jamais.
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-ink/75">
            Commandez votre bouquet artisanal ou confiez-nous votre projet sur mesure. 
            Emmanuelle prépare chaque pièce à la main et vous répond sous 24 heures.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Button: Explicit rounded-full, dark bg, light text, rose hover */}
            <Link 
              href="/boutique" 
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-base font-medium text-ivory transition-all duration-300 hover:bg-rose-deep hover:shadow-lg hover:-translate-y-0.5"
            >
              Voir les créations
            </Link>
            
            {/* Outline Button: Explicit rounded-full, white bg, dark text, rose hover */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white/60 px-8 py-3.5 text-base font-medium text-ink transition-all duration-300 hover:bg-white hover:border-rose-deep hover:text-rose-deep hover:-translate-y-0.5"
            >
              Demande sur mesure
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
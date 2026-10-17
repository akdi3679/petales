import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "L'atelier",
  description: "Découvrez l'histoire de Maison en Pétales et notre savoir-faire artisanal.",
};

export default function AProposPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-deep">
          Notre histoire
        </p>
        <h1 className="display mt-4 text-5xl">L'atelier</h1>
        <p className="mt-5 text-base leading-7 text-cocoa">
          Maison en Pétales est née d'une passion pour les fleurs et la pâtisserie. Chaque création est préparée à la main dans notre atelier.
        </p>
      </Reveal>
    </section>
  );
}
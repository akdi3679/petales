import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Événements & collaborations",
  description: "Créations personnalisées pour événements et collaborations professionnelles.",
};

export default function EvenementsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-deep">
          Sur mesure
        </p>
        <h1 className="display mt-4 text-5xl">Événements & collaborations</h1>
        <p className="mt-5 text-base leading-7 text-cocoa">
          Mariages, événements professionnels, collaborations créatives : nous créons des pièces sur mesure pour vos moments importants.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12 card-luxe p-8">
        <h2 className="display text-2xl">Demande personnalisée</h2>
        <p className="mt-4 text-sm leading-6 text-cocoa">
          Formulaire de demande événementielle à venir.
        </p>
      </Reveal>
    </section>
  );
}
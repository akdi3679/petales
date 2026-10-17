import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function CardTeaser() {
  return (
    <section className="w-full bg-cream/40 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="eyebrow justify-center">Le studio de cartes</p>
          <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">
            Offrez une carte qui fleurit
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/70">
            Créez une carte élégante, téléchargez-la pour Instagram, ou envoyez le lien magique. 
            La personne qui l'ouvrira découvrira votre message… et le chemin vers notre atelier.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/cartes" className="btn btn-primary px-8 py-3.5 text-base">
              Créer ma carte
            </Link>
            <Link href="/cartes#cadeau" className="btn btn-outline px-8 py-3.5 text-base bg-white/60">
              Carte cadeau classique
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
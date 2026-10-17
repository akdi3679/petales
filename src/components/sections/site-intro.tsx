import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function SiteIntro() {
  return (
    <section className="w-full bg-pink-bg py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="display text-4xl text-ink sm:text-5xl">
            La Maison
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">
            Un atelier lumineux sur la Côte d'Azur, où les commandes partent en
            petites séries. Chaque bouquet est préparé à la commande, emballé
            comme un cadeau, et accompagné d'une carte écrite à la main.
          </p>
          <div className="mt-10">
            <Link href="/boutique" className="link-hero">
              <span className="link-hero-line text-ink">Découvrir la boutique</span>
              <span aria-hidden="true" className="link-hero-arrow text-ink">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
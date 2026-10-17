import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Ateliers Floraux",
  description: "Apprenez l'art de la fleur en guimauve lors de nos ateliers créatifs sur la Côte d'Azur.",
};

const workshops = [
  { title: "L'Initiation", duration: "2 heures", price: "85 ", description: "Idéal pour découvrir les bases. Apprenez à colorer, modeler et assembler 3 fleurs simples que vous repartirez avec dans un écrin.", level: "Débutant" },
  { title: "La Masterclass", duration: "4 heures", price: "150 ", description: "Pour les passionnés. Création d'un bouquet complet avec des techniques avancées de texturisation et de réalisme.", level: "Intermédiaire" },
  { title: "Atelier Privé & Événementiel", duration: "Sur mesure", price: "À partir de 400 ", description: "Anniversaire, EVJF ou team building. Nous nous déplaçons ou vous accueillons dans notre atelier pour un moment unique en petit comité.", level: "Tous niveaux" },
];

export default function AteliersPage() {
  return (
    <main className="bg-ivory pb-32 md:pb-24">
      <section className="relative h-dvh w-full overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=80" alt="Atelier floral en guimauve" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 w-full px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="display text-4xl text-ivory sm:text-5xl md:text-6xl drop-shadow-lg">
                Ateliers Floraux
                <span className="script mt-2 block text-3xl text-rose sm:text-4xl">créativité & gourmandise</span>
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 text-ivory/90 drop-shadow-md sm:text-base">
                Apprenez à modeler vos propres fleurs en guimauve dans un cadre élégant et bienveillant sur la Côte d'Azur.
              </p>
              <Link href="#formules" className="group mt-8 inline-flex flex-col items-start">
                <span className="text-sm font-medium uppercase tracking-widest text-ivory drop-shadow-md">Découvrir nos formules</span>
                <span className="mt-2 h-px w-full bg-ivory transition-all duration-500 group-hover:w-2/3 group-hover:bg-rose" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center text-rose-deep">L'Expérience</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">Plus qu'un atelier, un souvenir</h2>
            <p className="mt-6 text-base leading-8 text-ink/70">
              Dans notre atelier lumineux, nous vous fournissons tout le nécessaire : agar-agar de qualité, colorants naturels, outils de modelage et bien sûr, beaucoup de patience et de bonne humeur. 
              Vous repartez avec vos créations, prêtes à être offertes ou dégustées.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="formules" className="py-16 px-6 bg-cream/30">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="display text-3xl text-ink sm:text-4xl text-center mb-12">Nos Formules</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {workshops.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="flex flex-col h-full bg-white rounded-2xl border border-line p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rose-deep bg-rose/20 rounded-full">{w.level}</span>
                  </div>
                  <h3 className="font-title text-xl text-ink mb-2">{w.title}</h3>
                  <p className="text-sm text-ink/60 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {w.duration}
                  </p>
                  <p className="text-sm leading-7 text-ink/70 flex-1 mb-6">{w.description}</p>
                  <div className="mt-auto pt-6 border-t border-line/50 flex items-center justify-between">
                    <span className="text-lg font-semibold text-ink">{w.price}</span>
                    <Link href="/contact" className="text-sm font-medium text-rose-deep hover:text-ink transition-colors">Réserver →</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <Reveal>
          <h2 className="display text-3xl text-ink sm:text-4xl mb-6">Prêt à créer ?</h2>
          <p className="text-base leading-8 text-ink/70 max-w-xl mx-auto mb-10">
            Les places sont limitées pour garantir une attention personnalisée. Contactez-nous pour vérifier les disponibilités ou organiser un événement privé.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#f5a1a1] hover:bg-[#e89595] rounded-full transition-colors shadow-md shadow-[#f5a1a1]/30">Nous contacter pour réserver</Link>
            <Link href="/boutique" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-ink bg-white border border-line hover:bg-cream rounded-full transition-colors">Voir la boutique</Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
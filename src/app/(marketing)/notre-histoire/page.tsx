import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { FAQ } from "@/components/sections/faq";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Notre Histoire",
  description: "De la première rose en guimauve à l'atelier azuréen : découvrez le savoir-faire et l'univers de la Maison de Pétales.",
};

const galleryImages = [
  "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1093950/pexels-photo-1093950.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3512718/pexels-photo-3512718.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const favoriteProducts = products.slice(0, 3);

export default function NotreHistoirePage() {
  return (
    <main className="bg-ivory pb-32 md:pb-24">
      <section className="relative h-dvh w-full overflow-hidden">
        <Image src="https://images.pexels.com/photos/3512718/pexels-photo-3512718.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Notre Histoire" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 w-full px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="display text-4xl text-ivory sm:text-5xl md:text-6xl drop-shadow-lg">
                Notre Histoire
                <span className="script mt-2 block text-3xl text-rose sm:text-4xl">passion & savoir-faire</span>
              </h1>
              <p className="mt-5 text-sm leading-7 text-ivory/90 sm:text-base drop-shadow-md max-w-md">
                Tout a commencé par une obsession : capturer la beauté éphémère d'une fleur et la rendre éternelle.
              </p>
              <div className="mt-8">
                <Link href="#philosophie" className="group inline-flex flex-col items-start">
                  <span className="text-sm font-medium tracking-widest uppercase text-ivory drop-shadow-md">Découvrir notre univers</span>
                  <span className="mt-2 h-px w-full bg-ivory transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="philosophie" className="py-24 px-6 bg-cream/20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow justify-center text-rose-deep">Notre Philosophie</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">Suspendre le temps, sublimer l'émotion</h2>
            <p className="mt-6 text-base leading-8 text-ink/70">
              Pourquoi offrir une fleur qui dure ? Parce que l'acte d'offrir est, au fond, une tentative de figer l'instant. 
              Nous croyons que les émotions les plus fortes méritent un écrin qui ne s'efface pas. 
              À la croisée de l'art floral et de la pâtisserie d'exception, nous façonnons des souvenirs tangibles, conçus pour être contemplés, conservés et partagés.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
                <Image src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Emmanuelle, fondatrice" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="eyebrow text-rose-deep">La Fondatrice</p>
              <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">La vision d'Emmanuelle</h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-ink/70">
                <p>Tout a commencé dans une petite cuisine ensoleillée de Nice. Fascinée par la botanique et la pâtisserie, Emmanuelle cherchait à offrir un bouquet à sa mère qui ne fanerait jamais.</p>
                <p>Après des mois d'expérimentation, elle a mis au point une recette unique de guimauve végétale à base d'agar-agar, capable de reproduire la délicatesse d'un véritable pétale.</p>
              </div>
              <Link href="/contact" className="group inline-flex flex-col items-start mt-8">
                <span className="text-sm font-medium tracking-widest uppercase text-ink">Rencontrer l'atelier</span>
                <span className="mt-2 h-px w-full bg-ink transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose-deep" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream/30">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center text-rose-deep">Notre Boutique</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">Un écrin de douceur sur la Côte d'Azur</h2>
            <p className="mt-6 text-base leading-8 text-ink/70">
              Créée en 2021, notre boutique est le fruit d'une rencontre entre la passion de la botanique et l'art de la pâtisserie. 
              Située au cœur de Nice, elle est bien plus qu'un lieu de vente : c'est un espace sensoriel où les parfums subtils de vanille et de rose se mêlent à la lumière du sud. 
              Chaque visite est une invitation à ralentir, à observer les détails de nos créations, et à repartir avec un morceau d'éternité.
            </p>
            <Link href="/contact" className="group inline-flex flex-col items-center mt-8">
              <span className="text-sm font-medium tracking-widest uppercase text-ink">Nous rendre visite</span>
              <span className="mt-2 h-px w-full bg-ink transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose-deep" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-pink-bg text-ink">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="eyebrow justify-center text-ink/70">Notre Savoir-Faire</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl text-ink">L'excellence dans chaque détail</h2>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            <Reveal delay={0}>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-rose-deep"><path d="M2 22s5.5-3 10-8c4.5-5 8-10 8-10s-5.5 3-10 8c-4.5 5-8 10-8 10z" /><path d="M12 12c2-2 4-4 4-4" /></svg>
                </div>
                <h3 className="font-title text-xl mb-2 text-ink">100% Végétal</h3>
                <p className="text-sm leading-7 text-ink/70">Nous avons banni la gélatine animale. Nos créations sont façonnées à base d'agar-agar et de colorants naturels, pour une gourmandise responsable.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-rose-deep"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" /></svg>
                </div>
                <h3 className="font-title text-xl mb-2 text-ink">Fait Main</h3>
                <p className="text-sm leading-7 text-ink/70">Aucun moule industriel. Chaque pétale est étiré, texturisé et assemblé à la main par nos artisanes dans notre atelier.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-rose-deep"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                </div>
                <h3 className="font-title text-xl mb-2 text-ink">Écrin Protecteur</h3>
                <p className="text-sm leading-7 text-ink/70">Chaque création est livrée dans un packaging anti-choc élégant, garantissant qu'elle arrive en parfait état.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="eyebrow text-rose-deep">Nos Coups de Cœur</p>
                <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">Les préférés de l'atelier</h2>
              </div>
              <Link href="/boutique" className="text-sm font-medium text-ink hover:text-rose-deep transition-colors underline underline-offset-4">Voir toute la collection →</Link>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <Link href={`/boutique/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream mb-4">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="font-title text-lg text-ink group-hover:text-rose-deep transition-colors">{p.name}</h3>
                  <p className="text-sm text-ink/60 mt-1">{p.price} </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <FAQ />
      </section>

      <section className="py-24 px-6 text-center bg-cream/30">
        <Reveal>
          <h2 className="display text-3xl text-ink sm:text-4xl mb-6">Prêt à offrir l'éternité ?</h2>
          <p className="text-base leading-8 text-ink/70 max-w-xl mx-auto mb-10">
            Parcourez notre collection et trouvez la création qui racontera votre histoire, sans jamais faner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/boutique" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#f5a1a1] hover:bg-[#e89595] rounded-full transition-colors shadow-md shadow-[#f5a1a1]/30">Explorer la boutique</Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-ink bg-white border border-line hover:bg-cream rounded-full transition-colors">Demande sur-mesure</Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
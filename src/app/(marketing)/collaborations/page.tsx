import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Collaborations & Entreprises",
  description: "Fleurs en guimauve premium pour cadeaux d'affaires, mariages de luxe et scénographie événementielle.",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad4d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
];

export default function CollaborationsPage() {
  return (
    <main className="bg-ivory">
      {/* Hero */}
      <section className="relative h-dvh w-full overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80" alt="Collaborations" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 w-full px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="display text-4xl text-ivory sm:text-5xl md:text-6xl drop-shadow-lg">
                L'Art Floral Comestible
                <span className="script mt-2 block text-3xl text-rose sm:text-4xl">pour les Maisons d'Exception</span>
              </h1>
              <p className="mt-5 text-sm leading-7 text-ivory/90 sm:text-base drop-shadow-md max-w-md">
                Sublimez vos événements et vos cadeaux clients avec nos créations sur-mesure. L'alternative luxueuse et inoubliable aux fleurs traditionnelles.
              </p>
              <div className="mt-8">
                <Link href="#projet" className="group inline-flex flex-col items-start">
                  <span className="text-sm font-medium tracking-widest uppercase text-ivory drop-shadow-md">Demander une consultation</span>
                  <span className="mt-2 h-px w-full bg-ivory transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Text 1 */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-base leading-8 text-ink/70">
              Dans un monde où l'attention est la monnaie la plus précieuse, offrez à vos clients ce qu'ils n'ont jamais vu. Nos fleurs en guimauve ne fanent pas, se dégustent, et laissent une empreinte émotionnelle forte, parfaitement alignée avec l'image de marque des maisons les plus exigeantes.
            </p>
            <Link href="#projet" className="group inline-flex flex-col items-center mt-8">
              <span className="text-sm font-medium tracking-widest uppercase text-ink">Voir nos réalisations</span>
              <span className="mt-2 h-px w-full bg-ink transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose-deep" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <Reveal delay={0}><div className="relative aspect-[4/5] overflow-hidden rounded-lg md:col-span-2"><Image src={galleryImages[0]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={100}><div className="relative aspect-square overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[1]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={200}><div className="relative aspect-square overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[2]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={0}><div className="relative aspect-[3/4] overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[3]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={100}><div className="relative aspect-[3/4] overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[4]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={200}><div className="relative aspect-[3/4] overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[5]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={300}><div className="relative aspect-[3/4] overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[6]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={0}><div className="relative aspect-square overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[7]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={100}><div className="relative aspect-[4/5] overflow-hidden rounded-lg md:col-span-2"><Image src={galleryImages[8]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
            <Reveal delay={200}><div className="relative aspect-square overflow-hidden rounded-lg md:col-span-1"><Image src={galleryImages[9]} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" /></div></Reveal>
          </div>
        </div>
      </section>

      {/* Text 2 */}
      <section className="py-24 px-6 bg-cream/30">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-base leading-8 text-ink/70">
              De la reproduction exacte de vos couleurs Pantone à l'intégration de votre logo en sucre, notre atelier azuréen conçoit des pièces monumentales ou des coffrets VIP. Respect strict de vos délais et de votre cahier des charges.
            </p>
            <Link href="#projet" className="group inline-flex flex-col items-center mt-8">
              <span className="text-sm font-medium tracking-widest uppercase text-ink">Parler de votre projet</span>
              <span className="mt-2 h-px w-full bg-ink transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose-deep" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section id="projet" className="py-24 pb-45 px-6 text-center">
        <Reveal>
          <p className="text-base leading-8 text-ink/70 max-w-xl mx-auto">
            Prêt à créer l'inattendu ? Notre équipe étudie chaque demande avec la plus grande attention.
          </p>
          <Link href="/contact" className="group inline-flex flex-col items-center mt-8">
            <span className="text-sm font-medium tracking-widest uppercase text-rose-deep">Nous contacter</span>
            <span className="mt-2 h-px w-full bg-rose-deep transition-all duration-500 group-hover:w-3/4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
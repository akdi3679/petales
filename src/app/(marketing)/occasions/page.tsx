import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Occasions & Cadeaux",
  description: "Trouvez la création parfaite pour chaque moment : amour, anniversaire, naissance, remerciement, ou sur-mesure.",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1tjpDooYioU?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-xQLLJXHuItc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-FHwt-zKndpY?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-fY1ECB1RCd0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-ElxBX6bsAgQ?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-EWwvua92Jf4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-pGr7g4l8EOI?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-J3pLliEQu3Q?auto=format&fit=crop&w=800&q=80",
];

export default function OccasionsPage() {
  return (
    <main className="bg-ivory">
      <section className="relative h-dvh w-full overflow-hidden">
        <Image src="https://images.unsplash.com/photo-62saZ_T5AP0?auto=format&fit=crop&w=1600&q=80" alt="Occasions" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 w-full px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="display text-4xl text-ivory sm:text-5xl md:text-6xl drop-shadow-lg">
                L'Art d'Offrir
                <span className="script mt-2 block text-3xl text-rose sm:text-4xl">le geste parfait</span>
              </h1>
              <p className="mt-5 text-sm leading-7 text-ivory/90 sm:text-base drop-shadow-md max-w-md">
                Fini le stress des cadeaux classiques. Offrez une œuvre d'art comestible qui ne fanera jamais.
              </p>
              <div className="mt-8">
                <Link href="#collections" className="group inline-flex flex-col items-start">
                  <span className="text-sm font-medium tracking-widest uppercase text-ivory drop-shadow-md">Explorer par occasion</span>
                  <span className="mt-2 h-px w-full bg-ivory transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream/20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow justify-center text-rose-deep">Inspiration</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">Célébrez chaque instant</h2>
            <p className="mt-6 text-base leading-8 text-ink/70">
              Que ce soit pour un <span className="font-semibold text-ink">anniversaire</span>, une <span className="font-semibold text-ink">déclaration d'amour</span>, un <span className="font-semibold text-ink">remerciement</span>, une <span className="font-semibold text-ink">naissance</span> ou simplement pour dire <span className="font-semibold text-ink">"Je pense à toi"</span>, nos créations capturent l'essence de votre message.
            </p>
            <div className="mt-10 p-8 bg-white rounded-2xl border border-line shadow-sm">
              <p className="text-lg font-title text-ink mb-3">Votre occasion est unique ?</p>
              <p className="text-sm leading-7 text-ink/70 mb-6 max-w-xl mx-auto">
                Diplôme, départ à la retraite, nouvelle maison, ou un clin d'œil complice... Si vous ne trouvez pas exactement ce que vous cherchez, imaginez-le avec nous. Nous créons des pièces sur-mesure pour raconter votre histoire.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#f5a1a1] hover:bg-[#e89595] rounded-full transition-colors shadow-md shadow-[#f5a1a1]/30">
                Imaginer ma création sur-mesure
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="collections" className="px-4 pb-24 sm:px-6 lg:px-8">
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
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-cream/30">
        <Reveal>
          <p className="text-base leading-8 text-ink/70 max-w-xl mx-auto">
            Prêt à faire battre son cœur ? Parcourez notre boutique et trouvez la création qui dira exactement ce que vous ressentez.
          </p>
          <Link href="/boutique" className="group inline-flex flex-col items-center mt-8">
            <span className="text-sm font-medium tracking-widest uppercase text-rose-deep">Découvrir la boutique</span>
            <span className="mt-2 h-px w-full bg-rose-deep transition-all duration-500 group-hover:w-3/4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
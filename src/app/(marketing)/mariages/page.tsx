import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Mariages & Événements",
  description: "Bouquets de mariée en guimauve et scénographies florales comestibles pour un jour J inoubliable.",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518895949257-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
];

export default function MariagesPage() {
  return (
    <main className="bg-ivory">
      {/* Hero */}
      <section className="relative h-dvh w-full overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80" alt="Mariage" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 w-full px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="display text-4xl text-ivory sm:text-5xl md:text-6xl drop-shadow-lg">
                Fleurs de Mariage
                <span className="script mt-2 block text-3xl text-rose sm:text-4xl">inoubliables & comestibles</span>
              </h1>
              <p className="mt-5 text-sm leading-7 text-ivory/90 sm:text-base drop-shadow-md max-w-md">
                Des bouquets de mariée et des scénographies en guimauve, conçus pour durer éternellement et sublimer votre jour J.
              </p>
              <div className="mt-8">
                <Link href="#consultation" className="group inline-flex flex-col items-start">
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
              Les fleurs fraîches fanent, mais les souvenirs restent. Offrez à vos invités une surprise totale et conservez votre bouquet comme une œuvre d'art. Chaque pétale est modelé à la main pour capturer la poésie de votre histoire d'amour.
            </p>
            <Link href="#consultation" className="group inline-flex flex-col items-center mt-8">
              <span className="text-sm font-medium tracking-widest uppercase text-ink">Découvrir nos mariages</span>
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
              Parce que votre mariage mérite une attention absolue, nous échangeons longuement sur votre vision, votre palette et vos émotions. Bouquet de mariée, boutonsnières ou cadeaux d'invités : nous créons des pièces qui vous ressemblent, en toute sérénité.
            </p>
            <Link href="/contact" className="group inline-flex flex-col items-center mt-8">
              <span className="text-sm font-medium tracking-widest uppercase text-ink">Réserver votre consultation</span>
              <span className="mt-2 h-px w-full bg-ink transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose-deep" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section id="consultation" className="py-24 pb-45 px-6 text-center">
        <Reveal>
          <p className="text-base leading-8 text-ink/70 max-w-xl mx-auto">
            Prête à dire oui à des fleurs éternelles ? Confiez-nous votre vision, Emmanuelle étudie chaque projet avec la plus grande attention.
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
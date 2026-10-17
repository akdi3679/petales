import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { FAQ } from "@/components/sections/faq";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez la Maison de Pétales pour vos commandes, mariages, ateliers ou collaborations sur la Côte d'Azur.",
};

export default function ContactPage() {
  return (
    <main className="bg-ivory pb-32 md:pb-24">
      <section className="relative h-[50vh] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=80" alt="Atelier" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="display text-4xl text-ivory sm:text-5xl md:text-6xl drop-shadow-lg">Contactez-nous</h1>
          <p className="script mt-4 text-2xl text-rose sm:text-3xl drop-shadow-md">Nous sommes à votre écoute</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="display text-3xl text-ink mb-6">Écrivez-nous</h2>
            <p className="text-sm text-ink/70 mb-8 leading-7">
              Une question, un projet de mariage, une demande d'atelier ou de collaboration ? 
              Remplissez le formulaire ci-dessous, notre équipe vous répondra sous 24h ouvrées.
            </p>
            <ContactForm />
          </Reveal>

          <Reveal delay={150}>
            <h2 className="display text-3xl text-ink mb-6">Rendez-nous visite</h2>
            <div className="space-y-6 text-sm text-ink/70">
              <div>
                <p className="font-bold text-ink uppercase tracking-wider text-xs mb-2">Adresse</p>
                <p>12 Rue des Fleurs<br/>06000 Nice, Côte d'Azur<br/>France</p>
              </div>
              <div>
                <p className="font-bold text-ink uppercase tracking-wider text-xs mb-2">Contact</p>
                <p>bonjour@maisondepetales.fr<br/>+33 6 00 00 00 00</p>
              </div>
              <div>
                <p className="font-bold text-ink uppercase tracking-wider text-xs mb-2">Horaires de l'atelier</p>
                <p>Lundi - Vendredi : 9h00 - 18h00<br/>Sur rendez-vous uniquement</p>
              </div>
              <div>
                <p className="font-bold text-ink uppercase tracking-wider text-xs mb-2">Suivez-nous</p>
                <a href="https://instagram.com/maisondepetales" target="_blank" className="text-rose-deep hover:underline">@maisondepetales</a>
              </div>
            </div>
            
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-cream/30">
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=7.26%2C43.69%2C7.30%2C43.71&layer=mapnik" width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Localisation Maison de Pétales"></iframe>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <FAQ />
      </section>
    </main>
  );
}
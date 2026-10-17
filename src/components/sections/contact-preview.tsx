import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function ContactPreview() {
  return (
    <section className="w-full bg-cream/30 py-24 px-6">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <Reveal>
          {/* Custom rose-deep styling to override the default brown eyebrow class */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-rose-deep/60" />
            Contact & Visite
          </p>
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Poussez la porte de l'atelier
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/70 max-w-md">
            Notre écrin azuréen vous accueille sur rendez-vous. Venez découvrir nos créations, 
            discuter de votre projet ou simplement prendre un café avec nous.
          </p>
          <div className="mt-8 space-y-3 text-sm text-ink/70">
            <p><strong className="text-ink">Adresse :</strong> 12 Rue des Fleurs, 06000 Nice</p>
            <p><strong className="text-ink">Email :</strong> bonjour@maisondepetales.fr</p>
            <p><strong className="text-ink">Téléphone :</strong> +33 6 00 00 00 00</p>
          </div>
          <Link href="/contact" className="group inline-flex flex-col items-start mt-8">
            <span className="text-sm font-medium tracking-widest uppercase text-ink">
              Voir la page contact
            </span>
            <span className="mt-2 h-px w-full bg-ink transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose-deep" />
          </Link>
        </Reveal>
        
        <Reveal delay={150}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.26%2C43.69%2C7.30%2C43.71&layer=mapnik" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              title="Localisation"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
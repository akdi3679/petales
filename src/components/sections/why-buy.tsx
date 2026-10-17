import Link from "next/link";
import { occasions } from "@/data/occasions";
import { FloralArt } from "@/components/illustrations/floral";
import { Reveal } from "@/components/ui/reveal";

const triggers = [
  { title: "Elle ne fane jamais", text: "Un bouquet que l'on garde des semaines en souvenir, avant même d'y goûter.", art: "wreath" as const },
  { title: "Elle se déguste", text: "Une fleur qui finit en douceur : l'effet de surprise est garanti à table.", art: "closeup" as const },
  { title: "Elle est unique", text: "Modelée à la main, jamais identique. Votre cadeau ne ressemblera à aucun autre.", art: "bouquet" as const },
  { title: "Elle raconte quelque chose", text: "Couleurs, message, occasion : chaque création porte une intention précise.", art: "sprig" as const },
];

export function WhyBuy() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="eyebrow">Pourquoi offrir</p>
          <h2 className="display mt-3 max-w-xl text-4xl text-ink sm:text-5xl">
            Quatre raisons de craquer
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {triggers.map((t, i) => (
            <Reveal key={t.title} delay={i * 90} className="h-full">
              <article className="card-luxe h-full p-6 text-center">
                <FloralArt kind={t.art} className="mx-auto h-16 w-16 text-rose-deep/80" />
                <h3 className="font-title mt-5 text-xl text-ink">{t.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-ink/60">Offrir pour :</span>
            {occasions.map((o) => (
              <Link
                key={o.slug}
                href={`/occasions/${o.slug}`}
                className="btn rounded-full border border-line bg-ivory px-4 py-2 text-xs font-medium text-ink/75 hover:border-gold hover:text-ink"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
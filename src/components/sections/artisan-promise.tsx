import { Reveal } from "@/components/ui/reveal";

const promises = [
  {
    title: "Ingrédients purs",
    text: "Sans gélatine animale, à base d'agar-agar. Des colorants naturels pour une gourmandise accessible à tous.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Fait main, pas en série",
    text: "Chaque pétale est modelé à la main par Emmanuelle. Aucun moule industriel, juste du temps et du soin.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Livré intact, conservé longtemps",
    text: "Emballage anti-choc pensé pour le transport. Se conserve 3 semaines à l'abri de l'humidité.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-8 w-8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export function ArtisanPromise() {
  return (
    <section className="w-full bg-pink-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            L'exigence de l'atelier
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/70">
            Ce n'est pas juste un bouquet. C'est une pièce d'artisanat comestible,
            pensée pour durer et pour émerveiller.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="text-center">
              <div className="flex justify-center text-ink">
                {p.icon}
              </div>
              <h3 className="mt-5 font-title text-xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section className="w-full bg-pink-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="display text-3xl text-ink sm:text-4xl">
            La Maison de Pétales, une boutique pas comme les autres
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            <p>
              Maison de Pétales est une boutique artisanale de la Côte d'Azur. Nous y sculptons à la main
              des fleurs en guimauve, à base d'agar-agar, sans gélatine animale ni colorants artificiels.
            </p>
            <p>
              Notre philosophie tient en une idée simple : capturer l'émotion d'un instant pour qu'elle ne fane
              jamais. Chaque pétale est façonné avec patience, pour offrir un souvenir à la fois beau, bon et
              durable — une fleur qui se regarde, se conserve et se déguste.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
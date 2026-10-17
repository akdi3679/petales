import { occasions } from "@/data/occasions";
import { OccasionCard } from "@/components/sections/occasion-card";
import { Reveal } from "@/components/ui/reveal";

export function Orientation() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Acheter par occasion
          </h2>
        </Reveal>
      </div>

      {/* scroll-pl-* matches pl-* so snap points respect the left padding */}
      <div className="mt-8 flex w-full gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar pl-8 sm:pl-12 lg:pl-20 scroll-pl-8 sm:scroll-pl-12 lg:scroll-pl-20">
        {occasions.map((occasion) => (
          <OccasionCard key={occasion.slug} occasion={occasion} />
        ))}
      </div>
    </section>
  );
}
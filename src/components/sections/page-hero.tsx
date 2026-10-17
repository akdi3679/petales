import type { ReactNode } from "react";
import { HeroBackground } from "@/components/ui/hero-background";
import { heroImages } from "@/data/hero-images";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  script,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  script?: string;
  description: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-dvh max-h-dvh min-h-dvh overflow-hidden border-b border-line">
      <div className="grid h-full grid-rows-[auto_1fr] md:grid-cols-[1fr_0.9fr] md:grid-rows-1">
        <div className="flex flex-col justify-center overflow-y-auto bg-ivory px-6 py-10 md:px-12 lg:px-16">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display mt-4 max-w-xl text-4xl text-ink sm:text-5xl lg:text-6xl">
              {title}
              {script && (
                <span className="script mt-2 block text-3xl text-rose-deep sm:text-4xl">
                  {script}
                </span>
              )}
            </h1>
            <p className="mt-5 max-w-prose text-sm leading-6 text-ink/70 sm:text-base sm:leading-7">
              {description}
            </p>
            {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
          </Reveal>
        </div>

        <div className="relative min-h-0">
          <HeroBackground
            src={image}
            fallbackSrc={heroImages.generalFallback}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
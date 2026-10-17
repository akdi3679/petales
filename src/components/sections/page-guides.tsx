import Link from "next/link";
import Image from "next/image";
import { heroImages } from "@/data/hero-images";

const guides = [
  {
    image: heroImages.mariages,
    title: "Mariages & événements privés",
    description: "Bouquets de mariée, cadeaux d'invités et scénographies comestibles pour votre jour J.",
    linkText: "Voir les créations mariage",
    linkHref: "/mariages",
  },
  {
    image: heroImages.ateliers,
    title: "Ateliers & initiations",
    description: "Apprenez à modeler vos propres fleurs en guimauve lors d'un atelier en petit groupe.",
    linkText: "Découvrir les ateliers",
    linkHref: "/ateliers",
  },
  {
    image: heroImages.collaborations,
    title: "Collaborations professionnelles",
    description: "Wedding planners, fleuristes, lieux, photographes, marques et presse : créons ensemble.",
    linkText: "Parler de votre projet",
    linkHref: "/collaborations",
  },
  {
    image: heroImages.histoire,
    title: "Notre histoire",
    description: "De la première rose en guimauve à l'atelier azuréen : l'histoire de Maison de Pétales.",
    linkText: "Lire notre histoire",
    linkHref: "/notre-histoire",
  },
];

export function PageGuides() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-6">
      {guides.map((guide) => (
        <section
          key={guide.linkHref}
          className="relative w-full h-[55vh] min-h-[450px] overflow-hidden rounded-[2rem] group"
        >
          <Image
            src={guide.image}
            alt=""
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12 md:p-16">
            <h2 className="display text-3xl text-ivory sm:text-4xl md:text-5xl max-w-2xl drop-shadow-lg">
              {guide.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ivory/95 sm:text-lg drop-shadow-md">
              {guide.description}
            </p>
            
            <div className="mt-8">
              <Link
                href={guide.linkHref}
                className="inline-flex items-center gap-3 text-ivory font-medium text-lg group/link"
              >
                <span className="relative pb-1">
                  {guide.linkText}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-ivory transition-all duration-500 ease-out group-hover/link:w-full" />
                </span>
                <span 
                  aria-hidden="true" 
                  className="text-rose opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover/link:opacity-100 group-hover/link:translate-x-0"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
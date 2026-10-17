import Link from "next/link";
import Image from "next/image";
import type { Occasion } from "@/data/occasions";

export function OccasionCard({ occasion }: { occasion: Occasion }) {
  return (
    <Link
      href={`/boutique?occasions=${occasion.slug}`}
      className="group flex shrink-0 w-[320px] flex-col snap-start md:w-[360px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={occasion.image}
          alt={`Créations pour ${occasion.name}`}
          fill
          sizes="(max-width: 768px) 90vw, 360px"
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 px-1">
        <h3 className="font-title text-xl text-ink md:text-2xl">{occasion.name}</h3>
        <span
          aria-hidden="true"
          className="text-2xl text-ink/60 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-rose-deep md:text-3xl"
        >
          →
        </span>
      </div>
    </Link>
  );
}
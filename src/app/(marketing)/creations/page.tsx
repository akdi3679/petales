import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/sections/product-card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Les créations",
  description: "Catalogue des créations florales en guimauve de Maison en Pétales.",
};

export default function CreationsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-rose-deep">
          Catalogue
        </p>
        <h1 className="display mt-4 text-5xl">Les créations</h1>
        <p className="mt-5 text-base leading-7 text-cocoa">
          Chaque pièce est préparée à la main. Découvrez nos bouquets, coffrets et compositions événementielles.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={Math.min(index, 5) * 60} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { occasions } from "@/data/occasions";
import { products } from "@/data/products";
import { PageHero } from "@/components/sections/page-hero";
import { ProductCard } from "@/components/sections/product-card";
import { Reveal } from "@/components/ui/reveal";
import { heroImages } from "@/data/hero-images";

export function generateStaticParams() {
  return occasions.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const occasion = occasions.find((o) => o.slug === slug);
  if (!occasion) return { title: "Occasion introuvable" };
  return { title: occasion.name, description: occasion.description };
}

export default async function OccasionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const occasion = occasions.find((o) => o.slug === slug);
  if (!occasion) notFound();

  const list = products.filter((p) => p.tags.occasions.includes(slug));

  return (
    <>
      <PageHero
        eyebrow="Occasion"
        title={occasion.name}
        description={occasion.description}
        image={heroImages.occasions}
      >
        <Link href="/occasions" className="btn btn-outline">Toutes les occasions</Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {list.length === 0 ? (
          <p className="text-sm text-ink/60">
            Aucune création pour le moment — écrivez-nous pour du sur-mesure.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={i * 70} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
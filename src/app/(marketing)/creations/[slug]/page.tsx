import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryLabels,
  getProductBySlug,
  products,
} from "@/data/products";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Création introuvable",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link
        href="/creations"
        className="rounded-md text-sm text-cocoa transition hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
      >
        ← Retour aux créations
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div
          aria-hidden="true"
          className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-line bg-gradient-to-tr from-petal via-blush to-cream p-6"
        >
          <span className="rounded-full bg-white/70 px-5 py-3 text-sm text-cocoa">
            Photo à venir
          </span>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-rose-deep">
            {categoryLabels[product.category]}
          </p>

          <h1 className="mt-3 font-display text-4xl">{product.name}</h1>

          <p className="mt-4 text-lg font-semibold text-rose-deep">
            {formatPrice(product.priceCents)} · {product.unitLabel}
          </p>

          <p className="mt-6 max-w-prose text-base leading-7 text-cocoa">
            {product.description}
          </p>

          <ul className="mt-6 space-y-2 text-sm leading-6 text-cocoa">
            {product.details.map((detail) => (
              <li key={detail}>• {detail}</li>
            ))}
          </ul>

          <div className="mt-8">
            {product.available ? (
              <Link
                href={`/commande?produit=${product.slug}`}
                className="inline-flex rounded-full bg-rose-deep px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
              >
                Commander cette création
              </Link>
            ) : (
              <p className="rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-cocoa">
                Création indisponible pour le moment
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/ui/reveal";

export function BestSellers() {
  const best = products.filter((p) => p.bestSeller);
  const displayProducts = best.length > 0 ? best : products.slice(0, 4); 

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="display text-3xl text-ink sm:text-4xl">
            Nos meilleures ventes
          </h2>
          <p className="mt-2 text-sm text-ink/60">Faites défiler pour voir plus de créations</p>
        </Reveal>
      </div>

      {/* Removed <Reveal> wrapper from individual cards to prevent position jumping */}
      <div className="mt-8 flex items-stretch gap-6 overflow-x-auto px-4 pb-4 snap-x snap-mandatory hide-scrollbar sm:px-6 md:gap-8 md:px-10 lg:px-16 scroll-px-4 sm:scroll-px-6 md:scroll-px-10 lg:scroll-px-16 after:content-[''] after:block after:w-4 after:shrink-0 sm:after:w-6 md:after:w-10 lg:after:w-16">
        {displayProducts.map((product, i) => (
          <Link
            key={product.id}
            href={`/boutique/${product.slug}`}
            className="group flex shrink-0 w-[280px] flex-col h-full relative z-10 snap-start md:w-[320px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              {product.hoverImage && (
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} détail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="absolute inset-0 object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                />
              )}
            </div>

            <div className="mt-3 px-1 flex flex-col flex-1">
              <h3 className="font-title text-base text-ink md:text-lg">
                {product.name}
              </h3>
              <p className="mt-auto pt-2 text-sm font-medium text-rose-deep">
                {formatPrice(product.variants[1]?.priceCents || product.variants[0].priceCents)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
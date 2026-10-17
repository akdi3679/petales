import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { FloralArt } from "@/components/illustrations/floral";

export function ProductCard({ product }: { product: Product }) {`n  const { addItem } = useCart();
  const signature = product.variants.find((v) => v.badge) ?? product.variants[1] ?? product.variants[0];

  return (
    <article className="card-luxe group h-full overflow-hidden">
      <Link href={`/boutique/${product.slug}`} className="flex h-full flex-col p-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${product.visuals.main} transition-all duration-500 group-hover:scale-105 group-hover:opacity-0`}>
            <FloralArt kind="bouquet" className="h-3/4 w-3/4 text-rose-deep/70" />
          </div>
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${product.visuals.hover} opacity-0 scale-105 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100`}>
            <FloralArt kind="closeup" className="h-3/4 w-3/4 text-rose-deep/80" />
          </div>

          {!product.available && (
            <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-ivory">
              Indisponible
            </span>
          )}
          {product.available && product.bestSeller && (
            <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-ivory/85 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-ink backdrop-blur">
              Best-seller
            </span>
          )}

          <span className="btn absolute bottom-3 right-3 translate-y-2 rounded-full bg-rose-deep px-4 py-2 text-xs font-medium text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Commander →
          </span>
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <h3 className="font-title text-xl text-ink">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/65">{product.shortDescription}</p>
          <div className="mt-4 flex flex-1 items-end justify-between border-t border-line pt-4">
            <span className="text-xs text-ink/55">{signature.name}</span>
            <span className="text-sm font-semibold text-rose-deep">{formatPrice(signature.priceCents)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
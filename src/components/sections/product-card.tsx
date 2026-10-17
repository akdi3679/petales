"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl bg-white border border-line transition-all hover:shadow-lg">
      <Link href={`/boutique/${product.slug}`} className="block h-full">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream rounded-t-2xl">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
        
        <div className="p-4">
          <h3 className="font-title text-lg text-ink group-hover:text-rose-deep transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-rose-deep">
            {product.price} 
          </p>
        </div>
      </Link>

      {/* Floating Add to Cart Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product.id);
        }}
        className="absolute bottom-4 right-4 bg-[#f5a1a1] text-white p-3 rounded-full shadow-lg hover:bg-[#e89595] transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 z-10"
        aria-label="Ajouter au panier"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </article>
  );
}
"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, type Product } from "@/data/products";
import { emptySelection, type FilterKey } from "@/data/filters";
import { Filters } from "@/components/shop/filters";
import { ProductCard } from "@/components/sections/product-card";
import { Reveal } from "@/components/ui/reveal";
import { FloralArt } from "@/components/illustrations/floral";

function matches(product: Product, key: FilterKey, values: string[]) {
  if (values.length === 0) return true;
  return product.tags[key].some((t) => values.includes(t));
}

export function ShopClient() {
  const params = useSearchParams();
  const router = useRouter();

  const [selected, setSelected] = useState<Record<FilterKey, string[]>>(() => {
    const next: Record<FilterKey, string[]> = {
      occasions: [],
      colors: [],
      flowers: [],
      styles: [],
    };
    (Object.keys(next) as FilterKey[]).forEach((key) => {
      const raw = params.get(key);
      if (raw) next[key] = raw.split(",").filter(Boolean);
    });
    return next;
  });

  const filtered = useMemo(
    () =>
      products.filter((p) =>
        (Object.keys(selected) as FilterKey[]).every((k) => matches(p, k, selected[k]))
      ),
    [selected]
  );

  function sync(next: Record<FilterKey, string[]>) {
    const sp = new URLSearchParams();
    (Object.keys(next) as FilterKey[]).forEach((k) => {
      if (next[k].length) sp.set(k, next[k].join(","));
    });
    router.replace(sp.toString() ? `?${sp.toString()}` : "/boutique", { scroll: false });
  }

  function toggle(key: FilterKey, value: string) {
    const next = {
      ...selected,
      [key]: selected[key].includes(value)
        ? selected[key].filter((v) => v !== value)
        : [...selected[key], value],
    };
    setSelected(next);
    sync(next);
  }

  function clear() {
    const next: Record<FilterKey, string[]> = { ...emptySelection, occasions: [], colors: [], flowers: [], styles: [] };
    setSelected(next);
    sync(next);
  }

  function counts(key: FilterKey, value: string) {
    return products.filter((p) => {
      const others = (Object.keys(selected) as FilterKey[]).filter((k) => k !== key);
      return others.every((k) => matches(p, k, selected[k])) && p.tags[key].includes(value);
    }).length;
  }

  const activeCount = (Object.values(selected) as string[][]).reduce((n, v) => n + v.length, 0);

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <Filters selected={selected} counts={counts} onToggle={toggle} onClear={clear} activeCount={activeCount} />
      </aside>

      <div>
        <p className="text-sm text-ink/60" role="status">
          {filtered.length} création{filtered.length > 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="card-luxe mt-6 p-12 text-center">
            <FloralArt kind="sprig" className="mx-auto h-14 w-10 text-ink/30" />
            <p className="mt-4 font-title text-xl text-ink">Aucune création ne correspond</p>
            <p className="mt-2 text-sm text-ink/60">
              Essayez d'enlever un filtre, ou laissez-nous créer sur mesure.
            </p>
            <button type="button" onClick={clear} className="btn btn-outline mt-6 py-2.5! text-sm!">
              Effacer les filtres
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 5) * 70} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
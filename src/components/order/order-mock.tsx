"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { products, getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { FloralArt } from "@/components/illustrations/floral";

type Line = { productId: string; variantId: string; quantity: number };

export function OrderMock({
  initialProduct,
  initialVariant,
}: {
  initialProduct?: string;
  initialVariant?: string;
}) {
  const start = getProductBySlug(initialProduct ?? "");

  const [lines, setLines] = useState<Line[]>(
    start
      ? [
          {
            productId: start.id,
            variantId:
              initialVariant && start.variants.some((v) => v.id === initialVariant)
                ? initialVariant
                : start.variants[1]?.id ?? start.variants[0].id,
            quantity: 1,
          },
        ]
      : [
          {
            productId: products[0].id,
            variantId: products[0].variants[1]?.id ?? products[0].variants[0].id,
            quantity: 1,
          },
        ]
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    mode: "retrait",
    address: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState<null | { reference: string }>(null);

  const total = useMemo(
    () =>
      lines.reduce((sum, line) => {
        const p = products.find((x) => x.id === line.productId);
        const v = p?.variants.find((x) => x.id === line.variantId);
        return sum + (v?.priceCents ?? 0) * line.quantity;
      }, 0),
    [lines]
  );

  function update(index: number, patch: Partial<Line>) {
    setLines((cur) => cur.map((l, i) => (i === index ? { ...l, ...patch } : l)));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted({ reference: `MPA-${Math.floor(1000 + Math.random() * 9000)}` });
    window.scrollTo(0, 0);
  }

  if (submitted) {
    return (
      <div className="card-luxe mx-auto max-w-2xl p-10 text-center">
        <FloralArt kind="bouquet" className="mx-auto h-20 w-20 text-rose-deep" />
        <h2 className="display mt-6 text-3xl text-ink">
          Merci {form.name.split(" ")[0] || "à vous"}
        </h2>
        <p className="mt-4 text-sm leading-6 text-ink/70">
          Votre demande simulée porte la référence{" "}
          <span className="font-semibold text-rose-deep">{submitted.reference}</span>.
          Dans la version réelle, Emmanuelle la recevrait immédiatement et vous
          répondrait sous 24 h ouvrées.
        </p>
        <button type="button" onClick={() => setSubmitted(null)} className="btn btn-outline mt-8 py-2.5! text-sm!">
          Préparer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="card-luxe p-6 sm:p-8">
        <h2 className="font-title text-2xl text-ink">Vos créations</h2>
        <div className="mt-6 space-y-4">
          {lines.map((line, i) => {
            const product = products.find((p) => p.id === line.productId);
            return (
              <div key={i} className="grid gap-3 md:grid-cols-[1.2fr_1fr_90px_auto]">
                <div>
                  <label htmlFor={`p-${i}`} className="sr-only">Création {i + 1}</label>
                  <select
                    id={`p-${i}`}
                    value={line.productId}
                    onChange={(e) => {
                      const np = products.find((p) => p.id === e.target.value);
                      update(i, {
                        productId: e.target.value,
                        variantId: np?.variants[1]?.id ?? np?.variants[0].id ?? "",
                      });
                    }}
                    className="w-full px-4 py-3 text-sm"
                  >
                    {products.filter((p) => p.available).map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`v-${i}`} className="sr-only">Format {i + 1}</label>
                  <select
                    id={`v-${i}`}
                    value={line.variantId}
                    onChange={(e) => update(i, { variantId: e.target.value })}
                    className="w-full px-4 py-3 text-sm"
                  >
                    {product?.variants.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} — {formatPrice(v.priceCents)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`q-${i}`} className="sr-only">Quantité {i + 1}</label>
                  <input
                    id={`q-${i}`}
                    type="number"
                    min={1}
                    max={10}
                    value={line.quantity}
                    onChange={(e) =>
                      update(i, { quantity: Math.max(1, Math.min(10, Number(e.target.value) || 1)) })
                    }
                    className="w-full px-3 py-3 text-sm"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setLines((cur) => cur.filter((_, x) => x !== i))}
                  disabled={lines.length === 1}
                  className="btn rounded-full border border-line px-4 text-sm text-ink/60 disabled:opacity-40"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            const p = products.find((x) => x.available);
            if (p)
              setLines((cur) => [
                ...cur,
                { productId: p.id, variantId: p.variants[1]?.id ?? p.variants[0].id, quantity: 1 },
              ]);
          }}
          className="btn btn-outline mt-5 py-2.5! text-sm!"
        >
          + Ajouter une création
        </button>

        <p className="mt-6 border-t border-line pt-4 text-right text-base font-semibold text-rose-deep">
          Total estimé : {formatPrice(total)}
        </p>
      </section>

      <section className="card-luxe p-6 sm:p-8">
        <h2 className="font-title text-2xl text-ink">Vos coordonnées</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="o-name" className="mb-2 block text-sm font-medium">Nom complet</label>
            <input id="o-name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="o-email" className="mb-2 block text-sm font-medium">E-mail</label>
            <input id="o-email" type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="o-phone" className="mb-2 block text-sm font-medium">Téléphone</label>
            <input id="o-phone" type="tel" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="o-date" className="mb-2 block text-sm font-medium">Date souhaitée</label>
            <input id="o-date" type="date" required value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="o-mode" className="mb-2 block text-sm font-medium">Mode de remise</label>
            <select id="o-mode" value={form.mode} onChange={(e) => setForm((f) => ({ ...f, mode: e.target.value }))} className="w-full px-4 py-3 text-sm">
              <option value="retrait">Retrait à l'atelier</option>
              <option value="livraison">Livraison locale (Côte d'Azur)</option>
            </select>
          </div>
          {form.mode === "livraison" && (
            <div className="sm:col-span-2">
              <label htmlFor="o-address" className="mb-2 block text-sm font-medium">Adresse</label>
              <textarea id="o-address" rows={2} required value={form.address} onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} className="w-full px-4 py-3 text-sm" />
            </div>
          )}
          <div className="sm:col-span-2">
            <label htmlFor="o-notes" className="mb-2 block text-sm font-medium">Message / précisions (carte manuscrite)</label>
            <textarea id="o-notes" rows={3} value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
        </div>
      </section>

      <p className="rounded-2xl border border-line bg-cream/60 p-4 text-xs leading-5 text-ink/60">
        Démo : aucune commande réelle n'est envoyée. À la validation du projet,
        cette page sera reliée à la boîte d'Emmanuelle, au suivi des commandes
        et, si souhaité, au paiement en ligne.
      </p>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Transmettre ma demande
      </button>
    </form>
  );
}
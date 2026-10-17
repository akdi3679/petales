"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";

type OrderLine = {
  productId: string;
  quantity: number;
};

type SubmittedOrder = {
  reference: string;
  totalCents: number;
  lines: {
    name: string;
    quantity: number;
    totalCents: number;
  }[];
  name: string;
  email: string;
  phone: string;
  date: string;
  mode: string;
  address: string;
  notes: string;
};

const inputClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep";

const primaryButtonClass =
  "rounded-full bg-rose-deep px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep";

const secondaryButtonClass =
  "rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-plum transition hover:border-rose hover:bg-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep";

export function OrderForm({
  initialProductId,
}: {
  initialProductId?: string;
}) {
  const availableProducts = products.filter((product) => product.available);

  const initialProduct = availableProducts.find(
    (product) =>
      product.slug === initialProductId || product.id === initialProductId
  );

  const defaultProductId =
    initialProduct?.id ?? availableProducts[0]?.id ?? "";

  const [lines, setLines] = useState<OrderLine[]>([
    {
      productId: defaultProductId,
      quantity: 1,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    mode: "retrait",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState<SubmittedOrder | null>(null);

  const totalCents = useMemo(() => {
    return lines.reduce((sum, line) => {
      const product = products.find((item) => item.id === line.productId);
      return product ? sum + product.priceCents * line.quantity : sum;
    }, 0);
  }, [lines]);

  function updateLine(index: number, patch: Partial<OrderLine>) {
    setLines((current) =>
      current.map((line, i) => (i === index ? { ...line, ...patch } : line))
    );
  }

  function addLine() {
    setLines((current) => [
      ...current,
      {
        productId: defaultProductId,
        quantity: 1,
      },
    ]);
  }

  function removeLine(index: number) {
    setLines((current) => current.filter((_, i) => i !== index));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const reference = `MEP-${new Date().getFullYear()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    const preparedLines = lines.map((line) => {
      const product = products.find((item) => item.id === line.productId);
      const unitPriceCents = product?.priceCents ?? 0;

      return {
        name: product?.name ?? "Création",
        quantity: line.quantity,
        totalCents: unitPriceCents * line.quantity,
      };
    });

    setSubmitted({
      reference,
      totalCents,
      lines: preparedLines,
      ...form,
    });

    window.scrollTo(0, 0);
  }

  if (availableProducts.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-line bg-white p-8 text-sm leading-6 text-cocoa">
        Les créations ne sont pas disponibles pour le moment dans cette
        démonstration.
      </div>
    );
  }

  if (submitted) {
    return (
      <section className="rounded-[1.75rem] border border-line bg-white p-8">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-rose-deep">
          Démonstration
        </p>

        <h2 className="mt-3 font-display text-3xl">
          Merci {submitted.name}
        </h2>

        <p className="mt-4 max-w-prose text-sm leading-6 text-cocoa">
          Votre demande simulée porte la référence{" "}
          <span className="font-semibold text-plum">{submitted.reference}</span>.
          Dans la version réelle, cette demande sera envoyée à Emmanuelle par
          e-mail ou enregistrée dans un espace de suivi.
        </p>

        <dl className="mt-8 space-y-4 text-sm">
          <div className="rounded-2xl border border-line px-4 py-3">
            <dt className="font-medium text-plum">Date souhaitée</dt>
            <dd className="mt-1 text-cocoa">{submitted.date || "—"}</dd>
          </div>

          <div className="rounded-2xl border border-line px-4 py-3">
            <dt className="font-medium text-plum">Mode</dt>
            <dd className="mt-1 text-cocoa">
              {submitted.mode === "livraison" ? "Livraison" : "Retrait"}
            </dd>
          </div>

          {submitted.address ? (
            <div className="rounded-2xl border border-line px-4 py-3">
              <dt className="font-medium text-plum">Adresse</dt>
              <dd className="mt-1 text-cocoa">{submitted.address}</dd>
            </div>
          ) : null}

          {submitted.notes ? (
            <div className="rounded-2xl border border-line px-4 py-3">
              <dt className="font-medium text-plum">Précisions</dt>
              <dd className="mt-1 text-cocoa">{submitted.notes}</dd>
            </div>
          ) : null}
        </dl>

        <ul className="mt-6 space-y-3">
          {submitted.lines.map((line, index) => (
            <li
              key={`${line.name}-${index}`}
              className="flex items-center justify-between gap-4 rounded-2xl border border-line px-4 py-3 text-sm"
            >
              <span>
                {line.quantity} × {line.name}
              </span>
              <span>{formatPrice(line.totalCents)}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-right text-base font-semibold text-plum">
          Total estimé : {formatPrice(submitted.totalCents)}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className={primaryButtonClass}
          >
            Préparer une autre demande
          </button>

          <Link href="/creations" className={secondaryButtonClass}>
            Revoir les créations
          </Link>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="rounded-[1.75rem] border border-line bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl">Créations</h2>

          <button
            type="button"
            onClick={addLine}
            className={secondaryButtonClass}
          >
            Ajouter une création
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {lines.map((line, index) => (
            <div
              key={`line-${index}`}
              className="grid gap-3 md:grid-cols-[1fr_120px_auto]"
            >
              <div>
                <label htmlFor={`product-${index}`} className="sr-only">
                  Création {index + 1}
                </label>

                <select
                  id={`product-${index}`}
                  value={line.productId}
                  onChange={(event) =>
                    updateLine(index, { productId: event.target.value })
                  }
                  className={inputClass}
                >
                  {products.map((product) => (
                    <option
                      key={product.id}
                      value={product.id}
                      disabled={!product.available}
                    >
                      {product.name} — {formatPrice(product.priceCents)}
                      {product.available ? "" : " — indisponible"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor={`quantity-${index}`} className="sr-only">
                  Quantité {index + 1}
                </label>

                <input
                  id={`quantity-${index}`}
                  type="number"
                  min={1}
                  max={10}
                  value={line.quantity}
                  onChange={(event) =>
                    updateLine(index, {
                      quantity: Math.max(
                        1,
                        Math.min(10, Number(event.target.value) || 1)
                      ),
                    })
                  }
                  className={inputClass}
                />
              </div>

              <button
                type="button"
                onClick={() => removeLine(index)}
                disabled={lines.length === 1}
                className="rounded-2xl border border-line px-4 py-3 text-sm text-cocoa transition hover:border-rose hover:text-plum disabled:cursor-not-allowed disabled:opacity-40"
              >
                Retirer
              </button>
            </div>
          ))}
        </div>

        <p className="mt-5 text-right text-base font-semibold text-plum">
          Total estimé : {formatPrice(totalCents)}
        </p>
      </section>

      <section className="rounded-[1.75rem] border border-line bg-white p-6">
        <h2 className="font-display text-2xl">Vos coordonnées</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="order-name" className="mb-2 block text-sm font-medium">
              Nom complet
            </label>
            <input
              id="order-name"
              type="text"
              required
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="order-email" className="mb-2 block text-sm font-medium">
              E-mail
            </label>
            <input
              id="order-email"
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="order-phone" className="mb-2 block text-sm font-medium">
              Téléphone
            </label>
            <input
              id="order-phone"
              type="tel"
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({ ...current, phone: event.target.value }))
              }
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="order-date" className="mb-2 block text-sm font-medium">
              Date souhaitée
            </label>
            <input
              id="order-date"
              type="date"
              required
              value={form.date}
              onChange={(event) =>
                setForm((current) => ({ ...current, date: event.target.value }))
              }
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="order-mode" className="mb-2 block text-sm font-medium">
              Mode de remise
            </label>
            <select
              id="order-mode"
              value={form.mode}
              onChange={(event) =>
                setForm((current) => ({ ...current, mode: event.target.value }))
              }
              className={inputClass}
            >
              <option value="retrait">Retrait</option>
              <option value="livraison">Livraison locale</option>
            </select>
          </div>

          {form.mode === "livraison" ? (
            <div className="md:col-span-2">
              <label htmlFor="order-address" className="mb-2 block text-sm font-medium">
                Adresse de livraison
              </label>
              <textarea
                id="order-address"
                rows={3}
                required
                value={form.address}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    address: event.target.value,
                  }))
                }
                className={inputClass}
              />
            </div>
          ) : null}

          <div className="md:col-span-2">
            <label htmlFor="order-notes" className="mb-2 block text-sm font-medium">
              Précisions utiles
            </label>
            <textarea
              id="order-notes"
              rows={4}
              value={form.notes}
              onChange={(event) =>
                setForm((current) => ({ ...current, notes: event.target.value }))
              }
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <div className="rounded-[1.75rem] border border-line bg-blush/40 p-6 text-sm leading-6 text-cocoa">
        Version de démonstration : aucune commande réelle n’est envoyée.
        Lorsque la cliente validera le projet, cette page pourra être reliée à
        un système de commande, de notification et de suivi.
      </div>

      <button type="submit" className={primaryButtonClass}>
        Transmettre la demande simulée
      </button>
    </form>
  );
}
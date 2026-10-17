"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { giftCardAmounts } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { FloralArt } from "@/components/illustrations/floral";

export function GiftCardOrder({ initialAmount }: { initialAmount?: string }) {
  const parsed = Number(initialAmount);
  const [amount, setAmount] = useState<number>(
    giftCardAmounts.includes(parsed) ? parsed : giftCardAmounts[1]
  );
  const [form, setForm] = useState({
    recipientName: "",
    recipientEmail: "",
    senderName: "",
    message: "",
  });
  const [done, setDone] = useState<null | { reference: string }>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone({ reference: `CG-${Math.floor(1000 + Math.random() * 9000)}` });
    window.scrollTo(0, 0);
  }

  if (done) {
    return (
      <div className="card-luxe mx-auto max-w-2xl p-10 text-center" role="status">
        <FloralArt kind="sprig" className="mx-auto h-16 w-12 text-gold" />
        <h2 className="display mt-6 text-3xl text-ink">Carte cadeau réservée</h2>
        <p className="mt-4 text-sm leading-6 text-ink/70">
          Référence <span className="font-semibold text-rose-deep">{done.reference}</span> — {formatPrice(amount)}.
          Dans la version réelle, {form.recipientName || "la personne choisie"} recevrait la
          carte par e-mail avec son code personnel et votre message.
        </p>
        <button type="button" onClick={() => setDone(null)} className="btn btn-outline mt-8 py-2.5! text-sm!">
          Modifier ma demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="card-luxe p-6 sm:p-8">
        <h2 className="font-title text-2xl text-ink">Montant de la carte</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {giftCardAmounts.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAmount(a)}
              aria-pressed={amount === a}
              className={`btn rounded-2xl border p-5 text-center transition ${
                amount === a
                  ? "border-rose-deep bg-rose-deep text-ivory shadow-lg shadow-rose-deep/20"
                  : "border-line bg-ivory text-ink hover:border-gold"
              }`}
            >
              <span className="display block text-2xl">{formatPrice(a)}</span>
              <span className="mt-1 block text-xs opacity-75">valable 1 an</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card-luxe p-6 sm:p-8">
        <h2 className="font-title text-2xl text-ink">Pour qui ?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="gc-recipient" className="mb-2 block text-sm font-medium">Prénom / nom du destinataire</label>
            <input id="gc-recipient" required value={form.recipientName} onChange={(e) => setForm((f) => ({ ...f, recipientName: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="gc-email" className="mb-2 block text-sm font-medium">E-mail du destinataire</label>
            <input id="gc-email" type="email" required value={form.recipientEmail} onChange={(e) => setForm((f) => ({ ...f, recipientEmail: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="gc-sender" className="mb-2 block text-sm font-medium">De la part de</label>
            <input id="gc-sender" required value={form.senderName} onChange={(e) => setForm((f) => ({ ...f, senderName: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="gc-message" className="mb-2 block text-sm font-medium">Votre message (recopié à la main)</label>
            <textarea id="gc-message" rows={3} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 text-sm" />
          </div>
        </div>
      </section>

      <p className="rounded-2xl border border-line bg-cream/60 p-4 text-xs leading-5 text-ink/60">
        Démo : aucun paiement ni e-mail réel. À la validation du projet : code
        personnel, envoi e-mail automatique et suivi du solde.
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-base font-semibold text-rose-deep">Total : {formatPrice(amount)}</p>
        <button type="submit" className="btn btn-primary">Offrir cette carte</button>
      </div>
    </form>
  );
}
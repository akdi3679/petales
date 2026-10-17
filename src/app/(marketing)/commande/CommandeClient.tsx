"use client";

import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Reveal } from "@/components/ui/reveal";

const inputClass = "w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-rose-deep focus:outline-none focus:ring-1 focus:ring-rose-deep/30 transition-all";

export default function CommandeClient() {
  const { details, count, total, removeItem, isLoaded } = useCart();

  if (!isLoaded) return null; // Prevent hydration mismatch

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-8">
        {/* 1. Livraison */}
        <Reveal delay={100}>
          <section className="rounded-2xl border border-line bg-white p-6 md:p-8">
            <h2 className="font-title text-xl text-ink mb-6">1. Informations de livraison</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Prénom" className={inputClass} />
              <input type="text" placeholder="Nom" className={inputClass} />
              <input type="email" placeholder="Email" className={`${inputClass} sm:col-span-2`} />
              <input type="text" placeholder="Adresse" className={`${inputClass} sm:col-span-2`} />
              <input type="text" placeholder="Code postal" className={inputClass} />
              <input type="text" placeholder="Ville" className={inputClass} />
            </div>
          </section>
        </Reveal>

        {/* 2. Détails de la carte */}
        <Reveal delay={200}>
          <section className="rounded-2xl border border-line bg-white p-6 md:p-8">
            <h2 className="font-title text-xl text-ink mb-6">2. Détails de la carte</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">Objet de la carte</label>
                <select className={inputClass}>
                  <option value="personal">Message personnel</option>
                  <option value="rsvp">Réponse à une invitation (RSVP)</option>
                  <option value="gift">Carte cadeau</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">Votre message</label>
                <textarea placeholder="Écrivez votre message personnel ici..." rows={4} className={`${inputClass} resize-none`} />
                <p className="mt-2 text-xs text-ink/50">✉️ Chaque commande est accompagnée d'une carte écrite à la main par notre atelier.</p>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* 3. Résumé du Panier */}
      <Reveal delay={300}>
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-line bg-cream/30 p-6 md:p-8 sticky top-24">
            <h2 className="font-title text-xl text-ink mb-4">Votre sélection ({count})</h2>
            
            {details.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-ink/60 mb-4">Votre panier est vide.</p>
                <Link href="/boutique" className="text-sm font-medium text-rose-deep hover:underline">
                  Découvrir la boutique →
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                  {details.map((item) => (
                    <div key={item.id} className="flex gap-3 items-start">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-cream shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-ink truncate">{item.name}</p>
                        <p className="text-xs text-ink/60">Qté: {item.quantity}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-ink/40 hover:text-red-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm border-t border-line pt-4">
                  <div className="flex justify-between text-ink/60">
                    <span>Sous-total</span>
                    <span>{total.toFixed(2)} </span>
                  </div>
                  <div className="flex justify-between text-ink/60">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="border-t border-line pt-3 flex justify-between font-medium text-ink text-base">
                    <span>Total</span>
                    <span>{total.toFixed(2)} </span>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-4 text-center rounded-full bg-[#f5a1a1] text-white hover:bg-[#e89595] transition-colors font-medium shadow-md shadow-[#f5a1a1]/30">
                  Confirmer et payer
                </button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ink/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  <span>Paiement sécurisé par Stripe</span>
                </div>
              </>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
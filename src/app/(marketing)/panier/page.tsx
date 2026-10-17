import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Votre Panier",
  description: "Finalisez votre commande de fleurs en guimauve artisanales.",
};

export default function PanierPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h1 className="display text-4xl text-ink">Votre Panier</h1>
      
      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Placeholder for cart items */}
          <div className="rounded-2xl border border-line bg-white p-6 text-center text-ink/60">
            Votre panier est actuellement vide.
            <Link href="/boutique" className="mt-4 inline-block text-rose-deep underline">
              Découvrir nos créations
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-line bg-cream/30 p-6">
            <h2 className="font-title text-xl text-ink">Résumé de la commande</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between text-ink/60">
                <span>Sous-total</span>
                <span>0,00 </span>
              </div>
              <div className="flex justify-between text-ink/60">
                <span>Livraison</span>
                <span>Calculée à l'étape suivante</span>
              </div>
              <div className="border-t border-line pt-3 flex justify-between font-medium text-ink">
                <span>Total</span>
                <span>0,00 </span>
              </div>
            </div>
            <button disabled className="btn btn-primary mt-6 w-full opacity-50 cursor-not-allowed">
              Passer la commande
            </button>
            <p className="mt-4 text-center text-xs text-ink/50">
              🔒 Paiement 100% sécurisé · Carte manuscrite offerte
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
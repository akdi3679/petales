import Link from "next/link";
import { giftCardAmounts } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { FloralArt } from "@/components/illustrations/floral";
import { Reveal } from "@/components/ui/reveal";

export function GiftCard() {
  return (
    <section id="cadeau" className="border-y border-line bg-rose/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">Carte cadeau</p>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
            Le cadeau qui laisse le choix
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/70">
            Valable un an sur toute la boutique. Livrée par e-mail avec un code
            personnel et un mot manuscrit recopié à la main.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {giftCardAmounts.map((amount, i) => (
            <Reveal key={amount} delay={i * 90} className="h-full">
              <article className="card-luxe h-full p-8 text-center">
                <FloralArt kind="sprig" className="mx-auto h-14 w-10 text-gold" />
                <p className="display mt-5 text-4xl text-rose-deep">{formatPrice(amount)}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink/55">valable 1 an</p>
                <Link
                  href={`/commande?produit=carte-cadeau&montant=${amount}`}
                  className="btn btn-outline mt-6 w-full py-2.5! text-sm!"
                >
                  Offrir cette carte
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
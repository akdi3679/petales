import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 
  const product = products.find((p) => p.slug === slug);
  
  if (!product) return notFound();

  return (
    <main className="bg-ivory pb-40 md:pb-24 pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-xs text-ink/50">
          <Link href="/boutique" className="hover:text-ink">Boutique</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-rose-deep mb-2">Création Artisanale</p>
              <h1 className="display text-4xl text-ink sm:text-5xl">{product.name}</h1>
              <p className="mt-4 text-2xl font-title text-ink">{product.price} </p>
              
              <div className="mt-8 space-y-4 text-sm leading-7 text-ink/70">
                <p>{product.description}</p>
                <p>Chaque pétale est sculpté à la main dans notre atelier de la Côte d'Azur, en utilisant de l'agar-agar et des colorants naturels. Une œuvre d'art comestible qui ne fane pas.</p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {/* Primary Button: Exact brand pink with soft shadow */}
                <Link 
                  href="/commande" 
                  className="flex-1 py-5 px-8 text-center rounded-full bg-[#f5a1a1] text-white hover:bg-[#e89595] transition-colors font-medium shadow-md shadow-[#f5a1a1]/30"
                >
                  Ajouter au panier
                </Link>
                
                {/* Outline Button: White background with border, matching padding */}
                <Link 
                  href="/contact" 
                  className="flex-1 py-5 px-8 text-center rounded-full border border-line bg-white text-ink hover:bg-cream transition-colors font-medium"
                >
                  Poser une question
                </Link>
              </div>

              <div className="mt-12 border-t border-line pt-8">
                <h3 className="font-title text-lg text-ink mb-4">Nos Engagements</h3>
                <ul className="space-y-2 text-sm text-ink/60">
                  <li>✦ 100% Fait main sur la Côte d'Azur</li>
                  <li>✦ Ingrédients naturels (Agar-agar, sans gélatine)</li>
                  <li>✦ Livraison soignée en écrin protecteur</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
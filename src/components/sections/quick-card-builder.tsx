"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { toPng } from "html-to-image";
import { occasions } from "@/data/occasions";
import { products } from "@/data/products";
import { Reveal } from "@/components/ui/reveal";

export function QuickCardBuilder() {
  const [productIndex, setProductIndex] = useState(0);
  const [occasionIndex, setOccasionIndex] = useState(0);
  const [recipient, setRecipient] = useState("Marie");
  const [message, setMessage] = useState("J'ai pensé à toi...");
  const [fontStyle, setFontStyle] = useState<"script" | "serif">("script");
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const cardRef = useRef<HTMLDivElement>(null);

  const product = products[productIndex];
  const occasion = occasions[occasionIndex];

  const nextProduct = () => setProductIndex((i) => (i + 1) % products.length);
  const prevProduct = () => setProductIndex((i) => (i - 1 + products.length) % products.length);
  const nextOccasion = () => setOccasionIndex((i) => (i + 1) % occasions.length);
  const prevOccasion = () => setOccasionIndex((i) => (i - 1 + occasions.length) % occasions.length);
  const toggleFont = () => setFontStyle(f => f === "script" ? "serif" : "script");

  const commandUrl = `/commande?produit=${product.slug}&recipient=${encodeURIComponent(recipient)}&occasion=${occasion.slug}&message=${encodeURIComponent(message)}`;

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setDownloadStatus('loading');
    try {
      // html-to-image handles modern CSS (oklab) perfectly
      const dataUrl = await toPng(cardRef.current, { 
        cacheBust: true,
        pixelRatio: 2 // High resolution
      });
      const link = document.createElement('a');
      link.download = `carte-maison-de-petales.png`;
      link.href = dataUrl;
      link.click();
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 2500);
    } catch (err) {
      console.error("Download failed:", err);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 2500);
    }
  };

  const handleCopyLink = async () => {
    setCopyStatus('loading');
    try {
      await navigator.clipboard.writeText(window.location.origin + commandUrl);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch (err) {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2500);
    }
  };

  return (
    <section className="relative w-full bg-cream/30 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <Reveal>
            <h2 className="display text-2xl text-ink sm:text-3xl">Le studio express</h2>
            <p className="text-xs text-ink/60 mt-1">Créez votre carte en un instant.</p>
          </Reveal>
          <Reveal delay={100}>
            <Link href={`/cartes?produit=${product.slug}&recipient=${encodeURIComponent(recipient)}&msg=${encodeURIComponent(message)}&font=${fontStyle}&occ=${occasion.slug}`} className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white/60 px-4 py-2 text-xs font-medium text-ink transition-all hover:bg-white">
              Ouvrir le studio complet →
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <Reveal delay={150} className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[500px] md:max-w-none md:mx-0 mx-auto group">
              {/* FIXED: w-1/2 for BOTH image and text on ALL screens for consistent proportions */}
              <div ref={cardRef} className="flex flex-row w-full max-w-[500px] md:max-w-[550px] overflow-hidden rounded-2xl shadow-2xl bg-[#faf7f2] border border-line">
                
                {/* Image: Exactly 50% width on mobile and desktop */}
                <div className="w-1/2 relative aspect-square md:aspect-auto min-h-[180px]">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded-full">
                    {product.name}
                  </div>
                </div>

                {/* Text: Exactly 50% width on mobile and desktop */}
                <div className="w-1/2 flex flex-col p-3 sm:p-4 md:p-6 relative min-h-[180px]">
                  <div className="absolute inset-2 md:inset-3 border border-[#b08d57]/20 pointer-events-none rounded-sm" />
                  
                  <button onClick={toggleFont} className="absolute top-2 right-2 bg-white/90 hover:bg-white text-ink w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full shadow-sm border border-line z-20 transition-all">
                    <span className={`text-[10px] md:text-xs font-bold ${fontStyle === 'script' ? "font-[family-name:var(--font-script)] text-sm md:text-base" : "font-serif italic"}`}>Aa</span>
                </button>

                  <div className="text-center mt-1 z-10">
                    <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-rose-deep font-bold">Maison de Pétales</p>
                    <p className="text-[7px] md:text-[8px] uppercase tracking-widest text-ink/40 mt-0.5">Azuréenne</p>
                  </div>

                  <div className="flex-1 flex flex-col justify-center z-10 space-y-1 md:space-y-3 px-1 sm:px-2">
                    <input value={recipient} onChange={(e) => setRecipient(e.target.value)} className={`w-full bg-transparent text-center text-base sm:text-xl md:text-3xl text-[#9d5c63] leading-tight focus:outline-none border-b border-dashed border-transparent focus:border-[#b08d57]/40 transition-all ${fontStyle === 'script' ? "font-[family-name:var(--font-script)]" : "font-serif italic"}`} placeholder="Pour qui ?" />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={2} className="w-full bg-transparent text-center text-[10px] sm:text-xs md:text-sm text-ink/70 italic font-serif leading-relaxed focus:outline-none border-b border-dashed border-transparent focus:border-[#b08d57]/40 transition-all resize-none" placeholder="Votre message..." />
                  </div>

                  <div className="flex items-center justify-center gap-1 md:gap-2 z-10 mt-1 md:mt-2">
                    <button onClick={prevOccasion} className="text-ink/40 hover:text-ink transition-colors text-xs md:text-sm px-1">←</button>
                    <p className="text-[9px] md:text-xs uppercase tracking-wider text-ink/60 font-medium min-w-[60px] text-center">{occasion.name}</p>
                    <button onClick={nextOccasion} className="text-ink/40 hover:text-ink transition-colors text-xs md:text-sm px-1">→</button>
                  </div>

                  <div className="text-center mt-1 md:mt-2 z-10">
                    <p className="text-[8px] md:text-[10px] text-ink/60">@maisondepetales</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-center md:text-left w-full">
                <p className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-3">1. Choisissez le produit</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <button onClick={prevProduct} className="bg-white hover:bg-cream text-ink w-10 h-10 flex items-center justify-center rounded-full shadow-sm border border-line transition-all text-lg">←</button>
                  <div className="relative w-36 h-36 rounded-xl overflow-hidden border border-line shadow-md">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <button onClick={nextProduct} className="bg-white hover:bg-cream text-ink w-10 h-10 flex items-center justify-center rounded-full shadow-sm border border-line transition-all text-lg">→</button>
                </div>
                <div className="mt-3">
                  <p className="text-base font-medium text-ink text-center md:text-left">{product.name}</p>
                  <p className="text-sm text-rose-deep font-semibold text-center md:text-left">
                    À partir de {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(product.price)}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full mt-6">
                <button onClick={handleDownload} disabled={downloadStatus === 'loading'} className={`flex-1 transition-all rounded-lg py-3 text-sm font-medium text-center text-white ${downloadStatus === 'loading' ? 'bg-rose/70 cursor-wait' : downloadStatus === 'success' ? 'bg-green-600' : downloadStatus === 'error' ? 'bg-red-500' : 'bg-rose-deep hover:bg-[#c99595]'}`}>
                  {downloadStatus === 'loading' ? 'Préparation...' : downloadStatus === 'success' ? 'Téléchargé ✓' : downloadStatus === 'error' ? 'Échec ❌' : 'Télécharger la carte'}
                </button>
                <button onClick={handleCopyLink} disabled={copyStatus === 'loading'} className={`flex-1 transition-all border rounded-lg py-3 text-sm font-medium text-center ${copyStatus === 'loading' ? 'bg-cream/50 border-line text-ink/50 cursor-wait' : copyStatus === 'success' ? 'bg-green-50 border-green-200 text-green-700' : copyStatus === 'error' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-white border-line text-ink hover:bg-cream'}`}>
                  {copyStatus === 'loading' ? 'Copie...' : copyStatus === 'success' ? 'Lien copié ✓' : copyStatus === 'error' ? 'Échec ❌' : 'Copier le lien'}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
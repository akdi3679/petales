"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { toPng } from "html-to-image";
import { cardMoods } from "@/data/card-moods";
import { occasions } from "@/data/occasions";
import { Reveal } from "@/components/ui/reveal";
import { useSearchParams } from "next/navigation";

export function CardStudio() {
  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Initialize state from URL params if present (from homepage)
  const initialMoodId = searchParams.get("mood");
  const initialRecipient = searchParams.get("recipient");
  const initialMsg = searchParams.get("msg");
  const initialFont = searchParams.get("font") as "script" | "serif";
  const initialOcc = searchParams.get("occ");

  const [mood, setMood] = useState(cardMoods.find(m => m.id === initialMoodId) || cardMoods[0]);
  const [recipient, setRecipient] = useState(initialRecipient || "");
  const [message, setMessage] = useState(initialMsg || "");
  const [sender, setSender] = useState("");
  const [occasion, setOccasion] = useState(initialOcc || occasions[0].slug);
  const [fontStyle, setFontStyle] = useState<"script" | "serif">(initialFont || "script");
  
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const occasionName = occasions.find((o) => o.slug === occasion)?.name ?? "";

  async function handleDownload() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      await document.fonts.ready;
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `carte-pour-${recipient || "toi"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) { console.error(err); } finally { setDownloading(false); }
  }

  function handleCopyLink() {
    const slug = (recipient || "toi").toLowerCase().replace(/\s+/g, "-");
    const url = `${window.location.origin}/pour/${slug}?occasion=${occasion}&mood=${mood.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-8">
        <Reveal>
          <fieldset>
            <legend className="eyebrow mb-4">1. Ambiance</legend>
            <div className="grid grid-cols-3 gap-3">
              {cardMoods.map((m) => (
                <button key={m.id} type="button" onClick={() => setMood(m)} className={`relative aspect-[4/5] overflow-hidden rounded-xl border-2 transition-all ${mood.id === m.id ? "border-gold scale-[0.98]" : "border-transparent opacity-70 hover:opacity-100"}`}>
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                  <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium text-ivory drop-shadow-md">{m.name}</span>
                </button>
              ))}
            </div>
          </fieldset>
        </Reveal>

        <Reveal delay={100}>
          <fieldset className="space-y-4">
            <legend className="eyebrow mb-4">2. Message</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Pour qui ?</label>
                <input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Marie" className="w-full px-4 py-3 text-sm" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Occasion</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full px-4 py-3 text-sm">
                  {occasions.map((o) => <option key={o.slug} value={o.slug}>{o.name}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-ink">Votre message</label>
                <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-ink">De la part de</label>
                <input value={sender} onChange={(e) => setSender(e.target.value)} placeholder="Votre prénom" className="w-full px-4 py-3 text-sm" />
              </div>
            </div>
          </fieldset>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={handleDownload} disabled={downloading} className="btn btn-primary flex-1">{downloading ? "..." : "Télécharger (PNG)"}</button>
            <button onClick={handleCopyLink} className="btn btn-outline flex-1">{copied ? "Lien copié ✓" : "Copier le lien"}</button>
          </div>
        </Reveal>
      </div>

      <div className="flex items-center justify-center bg-cream/40 p-6 rounded-2xl border border-line">
        <Reveal delay={150}>
          <div ref={cardRef} className="flex aspect-[5/7] w-full max-w-[400px] overflow-hidden shadow-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <div className="w-1/2 relative">
              <img src={mood.image} alt="Ambiance" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="w-1/2 flex flex-col justify-between bg-[#faf7f2] p-6 relative">
              <div className="absolute inset-3 border border-[#b08d57]/40 pointer-events-none" />
              <div className="text-center mt-4">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#8a6a3b] font-semibold">Maison de Pétales</p>
                <p className="text-[8px] uppercase tracking-[0.2em] text-ink/50 mt-1">Azuréenne</p>
              </div>
              <div className="text-center space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-ink/60">Une pensée pour</p>
                <h2 className={`text-3xl text-[#9d5c63] leading-none ${fontStyle === 'script' ? "font-[family-name:var(--font-script)]" : "font-serif italic"}`}>{recipient || "Toi"}</h2>
                <p className="text-[10px] italic text-ink/70 px-2 leading-relaxed">"{message || "..."}"</p>
                <p className="text-[9px] uppercase tracking-widest text-ink/50">— {sender || "..."}</p>
              </div>
              <div className="text-center mb-4">
                <p className="text-[8px] uppercase tracking-[0.2em] text-[#8a6a3b]">{occasionName} · maisondepetales.fr</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
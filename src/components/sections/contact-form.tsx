"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const inputClass = "w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-rose-deep focus:outline-none focus:ring-1 focus:ring-rose-deep/30 transition-all";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-cream/30 p-8 text-center">
        <p className="text-lg font-title text-ink">Merci pour votre message !</p>
        <p className="mt-2 text-sm text-ink/60">Nous vous répondrons sous 24h ouvrées.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" placeholder="Prénom" required className={inputClass} />
        <input type="text" placeholder="Nom" required className={inputClass} />
      </div>
      <input type="email" placeholder="Email" required className={inputClass} />
      <input type="text" placeholder="Sujet (ex: Mariage, Atelier...)" required className={inputClass} />
      <textarea placeholder="Votre message..." rows={5} required className={`${inputClass} resize-none`} />
      
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-[#f5a1a1] py-3.5 text-sm font-medium text-white transition-all hover:bg-[#e89595] disabled:opacity-70 disabled:cursor-wait shadow-md shadow-[#f5a1a1]/30"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
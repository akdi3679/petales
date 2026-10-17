"use client";

export function WorkshopForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Prénom</label>
        <input type="text" required className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Nom</label>
        <input type="text" required className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1 sm:col-span-2">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Email</label>
        <input type="email" required className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Téléphone</label>
        <input type="tel" className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Occasion</label>
        <input type="text" placeholder="Anniversaire, EVJF..." className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Date souhaitée</label>
        <input type="date" className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Heure souhaitée</label>
        <input type="time" className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="sm:col-span-2 mt-4">
        <button type="submit" className="btn btn-primary w-full !py-4 text-base">
          Envoyer ma demande de privatisation
        </button>
        <p className="mt-3 text-center text-xs text-ink/50">
          En soumettant ce formulaire, vous acceptez d'être recontacté par notre atelier sous 24h.
        </p>
      </div>
    </form>
  );
}
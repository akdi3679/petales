"use client";

export function B2BForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Entreprise / Agence</label>
        <input type="text" required placeholder="Nom de votre société" className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Votre Nom</label>
        <input type="text" required placeholder="Prénom et Nom" className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Email Professionnel</label>
        <input type="email" required placeholder="vous@entreprise.com" className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Téléphone</label>
        <input type="tel" placeholder="+33 6 00 00 00 00" className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors" />
      </div>
      <div className="space-y-1 sm:col-span-2">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Type de Projet</label>
        <select className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors">
          <option>Cadeaux d'affaires & Clients VIP</option>
          <option>Mariage & Wedding Planning</option>
          <option>Scénographie Hôtelière & Événementielle</option>
          <option>Collaboration Créative / Presse</option>
          <option>Autre</option>
        </select>
      </div>
      <div className="space-y-1 sm:col-span-2">
        <label className="text-xs font-bold uppercase tracking-wider text-ink/60">Cahier des charges / Message</label>
        <textarea rows={4} placeholder="Parlez-nous de votre vision, de vos couleurs, du nombre d'invités ou de la quantité souhaitée..." className="w-full px-4 py-3 text-sm bg-cream/30 border border-line focus:border-rose-deep focus:outline-none transition-colors resize-none" />
      </div>
      <div className="sm:col-span-2 mt-4">
        <button type="submit" className="btn btn-primary w-full !py-4 text-base">
          Demander le catalogue B2B & un devis
        </button>
        <p className="mt-3 text-center text-xs text-ink/50">
          Notre équipe vous recontacte sous 24h ouvrées pour étudier votre projet.
        </p>
      </div>
    </form>
  );
}
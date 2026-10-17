const items = [
  {
    label: "Emballage anti-choc",
    sub: "Livré en parfait état",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-ink">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    label: "Paiement sécurisé",
    sub: "CB, Apple Pay, Stripe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-ink">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Livraison & Retrait",
    sub: "Côte d'Azur & envoi suivi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-ink">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Carte manuscrite",
    sub: "Offerte avec chaque commande",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-ink">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export function ReassuranceBar() {
  return (
    <section className="w-full bg-pink-bg py-8 border-t border-white/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        {/* justify-center ensures everything is centered, and flex-wrap handles the next line also being centered */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="shrink-0 flex items-center justify-center mt-0.5">{item.icon}</div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium text-ink leading-tight text-center sm:text-left">{item.label}</p>
                <p className="text-xs text-ink/60 leading-tight mt-0.5 text-center sm:text-left">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
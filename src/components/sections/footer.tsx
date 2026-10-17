"use client";

import Link from "next/link";
import { useState } from "react";
import { brand } from "@/data/brand";
import { FooterFoliage } from "@/components/sections/footer-foliage";
import { FallingLeaves } from "@/components/sections/falling-leaves";

const explorer = [
  { href: "/boutique", label: "Boutique" },
  { href: "/occasions", label: "Occasions" },
  { href: "/mariages", label: "Mariages & événements" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/collaborations", label: "Collaborations" },
];

const infos = [
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/mentions-legales", label: "Mentions légales" },
  { href: "/legal/confidentialite", label: "Confidentialité" },
  { href: "/legal/cgv", label: "CGV" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <footer className="relative w-full border-t border-line bg-white pt-16 pb-8" style={{ overflow: 'visible' }}>
      
      {/* THE FOLIAGE IS BACK! */}
      <FooterFoliage />
      <FallingLeaves />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-title text-2xl leading-none tracking-wide text-ink">
                Mp <span className="script text-xl text-gold-ink">{brand.scriptWord}</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-ink/60">
              {brand.description}
            </p>
          </div>

          {/* Explorer Column */}
          <nav aria-label="Explorer" className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Explorer</h3>
            <ul className="mt-4 space-y-3">
              {explorer.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/60 transition-colors hover:text-rose-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Infos Column */}
          <nav aria-label="Informations" className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Informations</h3>
            <ul className="mt-4 space-y-3">
              {infos.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/60 transition-colors hover:text-rose-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter Column */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">L'atelier en lettres</h3>
            <p className="mt-4 text-sm text-ink/60">
              Les nouveautés et éditions limitées, une fois par mois.
            </p>
            
            {subscribed ? (
              <p className="mt-4 text-sm font-medium text-sage-ink">
                Merci pour votre inscription ! ✓
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2">
                <label htmlFor="footer-email" className="sr-only">Votre e-mail</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  className="w-full rounded-lg border border-line bg-ivory px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose"
                />
                <button 
                  type="submit" 
                  className="w-full rounded-lg bg-ink py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-rose-deep"
                >
                  S'inscrire
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-ink/50">
            © {new Date().getFullYear()} {brand.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-ink/50">
            Fait main avec amour sur la {brand.city}.
          </p>
        </div>
      </div>
    </footer>
  );
}
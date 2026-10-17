"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { brand } from "@/data/brand";
import { useCart } from "@/hooks/use-cart";

const links = [
  { href: "/boutique", label: "Boutique" },
  { href: "/occasions", label: "Occasions" },
  { href: "/mariages", label: "Mariages & événements" },
  { href: "/ateliers", label: "Ateliers" },
  { href: "/collaborations", label: "Collaborations" },
  { href: "/notre-histoire", label: "Notre histoire" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { count, isLoaded } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-line transition-transform duration-300 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="btn rounded-full px-2 py-1 text-ink">
          <span className="sr-only">{brand.name} — accueil</span>
          <span aria-hidden="true" className="font-title text-2xl leading-none tracking-wide">Mp</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink/85 transition-colors hover:text-rose-deep">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Natural Shopping Cart Icon with Counter */}
          <Link href="/commande" className="relative p-2 text-ink hover:text-rose-deep transition-colors">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {isLoaded && count > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f5a1a1] text-[10px] font-bold text-white shadow-sm">
                {count}
              </span>
            )}
          </Link>

          {/* Changed from Panier to Contact */}
          <Link href="/contact" className="hidden px-5 py-2 text-sm font-medium text-white sm:inline-flex rounded-full bg-[#f5a1a1] hover:bg-[#e89595] shadow-[0_0_8px_rgba(245,161,161,0.4)] transition-colors duration-300">
            Contact
          </Link>

          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Ouvrir le menu" className="btn rounded-full border border-line p-2 text-ink lg:hidden">
             <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M4 7 H20 M4 12 H20 M4 17 H20" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Navigation mobile" className="border-t border-line bg-white px-6 py-6 lg:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block text-base font-medium text-ink/85 py-2 hover:text-rose-deep transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-line mt-2">
              <Link href="/contact" onClick={() => setOpen(false)} className="flex w-full justify-center px-5 py-3 text-base font-medium text-white rounded-full bg-[#f5a1a1] hover:bg-[#e89595] shadow-[0_0_8px_rgba(245,161,161,0.4)] transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
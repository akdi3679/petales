"use client";

import Link from "next/link";

export function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
      <div className="flex items-center justify-between gap-3 bg-white/95 backdrop-blur-xl border border-line/50 rounded-full p-2 shadow-2xl shadow-ink/10">
        <Link
          href="/boutique"
          className="flex-1 flex items-center justify-center px-4 py-3 text-sm font-semibold text-ink bg-cream rounded-full border border-line/30 hover:bg-cream/80 active:scale-[0.98] transition-all"
        >
          Boutique
        </Link>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#f5a1a1] rounded-full shadow-md shadow-[#f5a1a1]/40 hover:bg-[#e89595] active:scale-[0.98] transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="rounded-md text-sm text-cocoa transition hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
      >
        ← Retour à l’accueil
      </Link>

      <h1 className="mt-6 font-display text-3xl">{title}</h1>

      <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-rose-deep">
        Version démonstration
      </p>

      <div className="mt-8 space-y-6 text-sm leading-6 text-cocoa">
        {children}
      </div>
    </main>
  );
}
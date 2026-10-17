import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  {
    href: "/admin",
    label: "Tableau de bord",
  },
  {
    href: "/admin/commandes",
    label: "Commandes",
  },
  {
    href: "/admin/demandes",
    label: "Demandes",
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b border-line bg-petal/40 px-4 py-3 text-sm text-plum">
        Démonstration — espace d’administration simulé. Aucune donnée réelle
        n’est utilisée.
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 md:flex-row">
        <aside className="w-full shrink-0 md:w-56">
          <nav
            aria-label="Administration"
            className="flex flex-wrap gap-3 md:flex-col"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-line bg-white px-4 py-2 text-sm text-cocoa transition hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/"
              className="rounded-2xl border border-line bg-blush px-4 py-2 text-sm text-plum transition hover:border-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep"
            >
              Retour au site
            </Link>
          </nav>
        </aside>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
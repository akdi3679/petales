import Link from "next/link";
import { FloralArt } from "@/components/illustrations/floral";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <FloralArt kind="sprig" className="h-20 w-14 text-rose/60" />
      <h1 className="display mt-6 text-4xl text-ink">Cette page s'est fanée</h1>
      <p className="mt-3 max-w-sm text-sm text-ink/65">Elle n'existe pas ou a été déplacée. Nos créations, elles, sont toujours là.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn btn-primary py-2.5! text-sm!">Accueil</Link>
        <Link href="/boutique" className="btn btn-outline py-2.5! text-sm!">Boutique</Link>
      </div>
    </main>
  );
}
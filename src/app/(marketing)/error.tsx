"use client";

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="eyebrow justify-center">Oups</p>
      <h1 className="display mt-4 text-4xl text-ink">Un pétale s'est envolé</h1>
      <p className="mt-4 text-sm leading-6 text-ink/70">
        Cette section n'a pas pu s'afficher pour le moment. Réessayez — ou
        écrivez-nous, nous répondons sous 24 h ouvrées.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-ink/50">Référence : {error.digest}</p>
      )}
      <button type="button" onClick={reset} className="btn btn-primary mt-8">
        Réessayer
      </button>
    </main>
  );
}
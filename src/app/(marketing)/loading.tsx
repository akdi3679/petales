export default function MarketingLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-busy="true">
      <div className="h-4 w-32 animate-pulse rounded-full bg-cream" />
      <div className="mt-4 h-12 w-72 max-w-full animate-pulse rounded-2xl bg-cream" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="card-luxe h-80 animate-pulse bg-cream/60" />
        ))}
      </div>
      <span className="sr-only">Chargement de la page…</span>
    </div>
  );
}
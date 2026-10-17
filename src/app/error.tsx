"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Une erreur est survenue</h1>
      <p>Nous sommes désolés. Veuillez réessayer.</p>
      <button onClick={() => reset()}>Réessayer</button>
    </main>
  );
}
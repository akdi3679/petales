import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-16">
      <div className="rounded-[1.75rem] border border-line bg-white p-8">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-rose-deep">
          Démonstration
        </p>

        <h1 className="mt-3 font-display text-3xl">Connexion</h1>

        <p className="mt-4 text-sm leading-6 text-cocoa">
          L’authentification réelle sera ajoutée lorsque le projet sera
          confirmé. Pour la maquette, cet écran montre simplement l’accès
          futur à l’espace d’administration.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="login-email"
              className="mb-2 block text-sm font-medium"
            >
              E-mail
            </label>

            <input
              id="login-email"
              type="email"
              disabled
              placeholder="emmanuelle@maisonenpetales.fr"
              className="w-full rounded-2xl border border-line bg-blush/30 px-4 py-3 text-sm text-cocoa"
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="mb-2 block text-sm font-medium"
            >
              Mot de passe
            </label>

            <input
              id="login-password"
              type="password"
              disabled
              placeholder="••••••••"
              className="w-full rounded-2xl border border-line bg-blush/30 px-4 py-3 text-sm text-cocoa"
            />
          </div>

          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-full bg-cocoa/50 px-6 py-3 text-sm font-semibold text-white"
          >
            Connexion bientôt active
          </button>
        </form>
      </div>
    </main>
  );
}
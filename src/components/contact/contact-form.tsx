"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="card-luxe p-10 text-center" role="status">
        <p className="font-title text-2xl text-ink">Message bien reçu</p>
        <p className="mt-3 text-sm leading-6 text-ink/70">
          Emmanuelle vous répond sous 24 h ouvrées. (Démo — aucun message réel envoyé.)
        </p>
        <button type="button" onClick={() => setDone(false)} className="btn btn-outline mt-6 py-2.5! text-sm!">
          Écrire un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-luxe space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-2 block text-sm font-medium">Nom</label>
          <input id="c-name" required className="w-full px-4 py-3 text-sm" />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-2 block text-sm font-medium">E-mail</label>
          <input id="c-email" type="email" required className="w-full px-4 py-3 text-sm" />
        </div>
      </div>
      <div>
        <label htmlFor="c-subject" className="mb-2 block text-sm font-medium">Sujet</label>
        <select id="c-subject" className="w-full px-4 py-3 text-sm">
          <option>Question sur une création</option>
          <option>Commande personnalisée</option>
          <option>Mariage / événement</option>
          <option>Entreprise / collaboration</option>
          <option>Atelier</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="c-message" className="mb-2 block text-sm font-medium">Votre message</label>
        <textarea id="c-message" rows={5} required className="w-full px-4 py-3 text-sm" />
      </div>
      <button type="submit" className="btn btn-primary">Envoyer</button>
    </form>
  );
}
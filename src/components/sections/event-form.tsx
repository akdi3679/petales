"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

const inputClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep";

const primaryButtonClass =
  "rounded-full bg-rose-deep px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-deep";

export function EventForm() {
  const [submitted, setSubmitted] = useState<null | { reference: string }>(
    null
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted({
      reference: `EVT-${Math.floor(1000 + Math.random() * 9000)}`,
    });

    window.scrollTo(0, 0);
  }

  if (submitted) {
    return (
      <section className="rounded-[1.75rem] border border-line bg-white p-8">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-rose-deep">
          Démonstration
        </p>

        <h2 className="mt-3 font-display text-3xl">
          Demande simulée enregistrée
        </h2>

        <p className="mt-4 max-w-prose text-sm leading-6 text-cocoa">
          Référence :{" "}
          <span className="font-semibold text-plum">
            {submitted.reference}
          </span>
          . Dans la version réelle, cette demande sera envoyée à Emmanuelle
          avec toutes les informations nécessaires pour répondre sans
          multiplier les allers-retours.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className={primaryButtonClass}
          >
            Envoyer une autre demande
          </button>

          <Link
            href="/"
            className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose hover:bg-blush"
          >
            Retour à l’accueil
          </Link>
        </div>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-line bg-white p-6"
    >
      <h2 className="font-display text-2xl">Formulaire de demande</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="event-type" className="mb-2 block text-sm font-medium">
            Type de demande
          </label>
          <select id="event-type" required className={inputClass}>
            <option value="mariage">Mariage</option>
            <option value="bapteme">Baptême</option>
            <option value="anniversaire">Anniversaire</option>
            <option value="entreprise">Entreprise</option>
            <option value="collaboration">Collaboration professionnelle</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="event-date" className="mb-2 block text-sm font-medium">
            Date envisagée
          </label>
          <input
            id="event-date"
            type="date"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="event-guests" className="mb-2 block text-sm font-medium">
            Nombre de personnes / quantités
          </label>
          <input
            id="event-guests"
            type="number"
            min={1}
            placeholder="80"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="event-location" className="mb-2 block text-sm font-medium">
            Lieu
          </label>
          <input
            id="event-location"
            type="text"
            placeholder="Ville ou lieu de réception"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="event-budget" className="mb-2 block text-sm font-medium">
            Budget indicatif
          </label>
          <select id="event-budget" className={inputClass}>
            <option value="a-discuter">À discuter</option>
            <option value="moins-300">Moins de 300 </option>
            <option value="300-500">300  à 500 </option>
            <option value="500-1000">500  à 1 000 </option>
            <option value="plus-1000">Plus de 1 000 </option>
          </select>
        </div>

        <div>
          <label htmlFor="event-name" className="mb-2 block text-sm font-medium">
            Nom
          </label>
          <input id="event-name" type="text" required className={inputClass} />
        </div>

        <div>
          <label htmlFor="event-email" className="mb-2 block text-sm font-medium">
            E-mail
          </label>
          <input
            id="event-email"
            type="email"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="event-phone" className="mb-2 block text-sm font-medium">
            Téléphone
          </label>
          <input id="event-phone" type="tel" className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="event-message" className="mb-2 block text-sm font-medium">
            Votre besoin
          </label>
          <textarea
            id="event-message"
            rows={5}
            required
            placeholder="Type d’événement, ambiance souhaitée, couleurs, quantités, contraintes particulières..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-blush/40 p-4 text-sm leading-6 text-cocoa">
        Version de démonstration : aucune demande réelle n’est envoyée.
      </div>

      <button type="submit" className={`${primaryButtonClass} mt-6`}>
        Envoyer la demande simulée
      </button>
    </form>
  );
}
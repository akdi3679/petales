import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import CommandeClient from "./CommandeClient";

export const metadata: Metadata = {
  title: "Finalisation de la commande",
  description: "Finalisez votre commande de fleurs en guimauve artisanales.",
};

export default function CommandePage() {
  return (
    <main className="bg-ivory pb-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h1 className="display text-4xl text-ink text-center mb-4">Finalisation de la commande</h1>
          <p className="text-center text-ink/60 mb-12">Vous êtes à un pas de recevoir votre création.</p>
        </Reveal>
        
        <CommandeClient />
      </div>
    </main>
  );
}
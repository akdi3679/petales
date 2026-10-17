"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { proofCards, type ProofCard } from "@/data/proof-cards";

function Card({ card }: { card: ProofCard }) {
  const base =
    "mr-3 flex w-44 shrink-0 flex-col gap-0.5 rounded-none border border-line bg-ivory/95 px-4 py-3 shadow-sm backdrop-blur-sm";

  const inner = (
    <>
      <span
        className={
          card.type === "review"
            ? "font-title text-xs italic leading-4 text-ink"
            : "text-xs font-medium leading-4 text-ink"
        }
      >
        {card.icon ? `${card.icon} ` : ""}
        {card.text}
      </span>
      {card.sub && <span className="text-[11px] leading-4 text-ink/60">{card.sub}</span>}
      {card.href && (
        <span aria-hidden="true" className="text-[11px] font-medium text-rose-deep">
          Découvrir →
        </span>
      )}
    </>
  );

  if (card.href) {
    return (
      <Link href={card.href} className={`${base} btn hover:border-gold`}>
        {inner}
      </Link>
    );
  }

  return <div className={base}>{inner}</div>;
}

export function ProofCarousel() {
  const [order, setOrder] = useState<ProofCard[]>(proofCards);

  useEffect(() => {
    setOrder([...proofCards].sort(() => Math.random() - 0.5));
  }, []);

  const items = [...order, ...order];

  return (
    <div
      className="marquee marquee-mask relative overflow-hidden py-1"
      aria-label="Preuves, avis et occasions"
    >
      <div className="marquee-track flex">
        {items.map((card, i) => (
          <Card key={`${card.id}-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}
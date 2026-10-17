export type ProofCard = {
  id: string;
  type: "review" | "occasion" | "problem" | "product" | "fact";
  text: string;
  sub?: string;
  href?: string;
  icon?: string;
};

export const proofCards: ProofCard[] = [
  { id: "r1", type: "review", text: "« Ma mère a cru que c'étaient de vraies fleurs. »", sub: "Camille R. — Nice" },
  { id: "r2", type: "review", text: "« Un an plus tard, mon bouquet est toujours dans notre vitrine. »", sub: "Sophie & Marc — Antibes" },
  { id: "r3", type: "review", text: "« Offert à une cliente importante. Elle en parle encore. »", sub: "Julien B. — Cannes" },
  { id: "o1", type: "occasion", text: "Un anniversaire en vue ?", sub: "Petites attentions prêtes en 72 h", href: "/occasions/anniversaire" },
  { id: "o2", type: "occasion", text: "Mariage 2026 ?", sub: "Réservez votre bouquet qui ne fane pas", href: "/mariages" },
  { id: "o3", type: "occasion", text: "Une naissance à célébrer", sub: "Douceur d'aurore, coffret tendresse", href: "/occasions/naissance" },
  { id: "p1", type: "problem", text: "Les fleurs fanent en trois jours.", sub: "Celles-ci se gardent des semaines… puis se savourent." },
  { id: "p2", type: "problem", text: "Encore un cadeau oublié ?", sub: "Carte cadeau valable un an", href: "/cartes#cadeau" },
  { id: "p3", type: "problem", text: "Marre des bouquets vus partout ?", sub: "Chaque pièce est modelée à la main, jamais identique." },
  { id: "g1", type: "product", text: "Baiser de pivoine", sub: "Notre signature, dès 29 ", href: "/boutique/baiser-de-pivoine" },
  { id: "g2", type: "product", text: "Coffret Azur", sub: "La découverte, dès 22 ", href: "/boutique/coffret-azur" },
  { id: "f1", type: "fact", text: "Sans gélatine · agar-agar", icon: "🌱" },
  { id: "f2", type: "fact", text: "Carte manuscrite offerte", icon: "✉️" },
  { id: "f3", type: "fact", text: "Fait main sur la Côte d'Azur", icon: "✋" },
];
import { products } from "./products";

export type GiftCardTemplate = {
  id: string;
  persona: string;
  message: string;
  productSlug: string;
  priceCents: number;
  accent: string;
};

// Helper to get price from the simplified product structure
const getPrice = (slug: string) => {
  const p = products.find(x => x.slug === slug);
  // Multiply by 100 to keep the "Cents" naming convention consistent with the rest of the app
  return p ? p.price * 100 : 4900; 
};

export const giftCards: GiftCardTemplate[] = [
  {
    id: "wife",
    persona: "Pour ma femme",
    message: "À celle qui illumine mes jours, comme ces fleurs illuminent notre maison.",
    productSlug: "baiser-de-pivoine",
    priceCents: getPrice("baiser-de-pivoine"),
    accent: "border-rose/40",
  },
  {
    id: "student",
    persona: "Pour un étudiant",
    message: "Un peu de douceur pour tes révisions. Bon courage, tu vas tout déchirer !",
    productSlug: "jardin-secret", // Changed to match new slugs
    priceCents: getPrice("jardin-secret"),
    accent: "border-sage/40",
  },
  {
    id: "son",
    persona: "Pour mon fils",
    message: "Fier de l'homme que tu deviens. Cette attention est à la hauteur de ton talent.",
    productSlug: "eclat-de-rose", // Changed to match new slugs
    priceCents: getPrice("eclat-de-rose"),
    accent: "border-gold/40",
  },
  {
    id: "colleague",
    persona: "Pour une collègue",
    message: "Merci pour ton aide précieuse et ta bonne humeur au quotidien.",
    productSlug: "coffret-azur",
    priceCents: getPrice("coffret-azur"),
    accent: "border-lilac/40",
  },
  {
    id: "mother",
    persona: "Pour ma mère",
    message: "Pour te dire merci, tout simplement. Je t'aime.",
    productSlug: "douceur-daurore", // Changed to match new slugs
    priceCents: getPrice("douceur-daurore"),
    accent: "border-rose-deep/40",
  },
  {
    id: "friend",
    persona: "Pour une amie",
    message: "Juste une petite pensée pour toi, parce que tu le vaux bien.",
    productSlug: "fraicheur-printaniere", // Changed to match new slugs
    priceCents: getPrice("fraicheur-printaniere"),
    accent: "border-ribbon/40",
  },
];
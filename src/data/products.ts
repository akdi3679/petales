export type ProductVariant = {
  id: string;
  name: string;
  priceCents: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  hoverImage: string; // 👈 Now required
  bestSeller?: boolean;
  tags: string[];
  variants: ProductVariant[];
};

const makeVariants = (price: number): ProductVariant[] => [
  { id: "petit", name: "Petit bouquet", priceCents: Math.round(price * 100 * 0.7) },
  { id: "signature", name: "Signature", priceCents: Math.round(price * 100) },
  { id: "grand", name: "Grand bouquet", priceCents: Math.round(price * 100 * 1.4) },
];

const base = [
  { 
    id: "1", slug: "baiser-de-pivoine", name: "Baiser de Pivoine", bestSeller: true, price: 85, 
    tags: ["amour", "pink", "roses", "bouquets"], 
    image: "https://images.unsplash.com/photo-1518895949257-95d8adfd52c7?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1563241527-3004b7be0ee0?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "Pivoines sculptées aux teintes poudrées.", 
    description: "Un bouquet romantique aux teintes douces, sculpté à la main pour capturer l'essence d'un amour éternel." 
  },
  { 
    id: "2", slug: "douceur-daurore", name: "Douceur d'Aurore", bestSeller: true, price: 65, 
    tags: ["naissance", "white", "roses", "boxes"], 
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "Nuances pastel pour un nouveau départ.", 
    description: "Des nuances pastel délicates pour célébrer une naissance ou un nouveau départ en douceur." 
  },
  { 
    id: "3", slug: "eclat-de-rose", name: "Éclat de Rose", bestSeller: true, price: 120, 
    tags: ["amour", "red", "roses", "bouquets", "celebration"], 
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "L'intensité du rouge, sans compromis.", 
    description: "L'intensité du rouge dans une composition audacieuse et passionnée." 
  },
  { 
    id: "4", slug: "jardin-secret", name: "Jardin Secret", bestSeller: true, price: 95, 
    tags: ["remerciement", "pink", "chrysanthemums", "vases"], 
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "Un écrin de verdure pour dire merci.", 
    description: "Un écrin de verdure et de fleurs délicates pour dire merci avec élégance." 
  },
  { 
    id: "5", slug: "coffret-azur", name: "Coffret Azur", bestSeller: true, price: 150, 
    tags: ["celebration", "green", "sim_carnations", "gift_sets", "boxes"], 
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "Notre coffret signature.", 
    description: "Notre coffret signature, parfait pour les cadeaux d'affaires ou les grandes célébrations." 
  },
  { 
    id: "6", slug: "murmure-blanc", name: "Murmure Blanc", bestSeller: true, price: 75, 
    tags: ["sympathy", "white", "roses", "bags"], 
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "La pureté du blanc, apaisante.", 
    description: "La pureté du blanc dans une composition apaisante et pleine de douceur." 
  },
  { 
    id: "7", slug: "passion-rouge", name: "Passion Rouge", bestSeller: true, price: 110, 
    tags: ["amour", "red", "roses", "bouquets"], 
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "Une déclaration flamboyante.", 
    description: "Une déclaration flamboyante pour les amours passionnées." 
  },
  { 
    id: "8", slug: "fraicheur-printaniere", name: "Fraîcheur Printanière", bestSeller: true, price: 80, 
    tags: ["get_well", "pink", "chrysanthemums", "vases"], 
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80", 
    hoverImage: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=800&q=80", 
    shortDescription: "Lumineuse, pour souhaiter un prompt rétablissement.", 
    description: "Un bouquet lumineux pour souhaiter un prompt rétablissement ou célébrer le printemps." 
  },
];

export const products: Product[] = base.map((p) => ({
  ...p,
  variants: makeVariants(p.price),
}));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productPrice = (p: Product | undefined) => (p ? p.price : 0);
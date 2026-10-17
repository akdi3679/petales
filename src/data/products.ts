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
  hoverImage: string;
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
    image: "https://images.pexels.com/photos/56866/pexels-photo-56866.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/56866/pexels-photo-56866.jpeg?auto=compress&cs=tinysrgb&w=800", 
    shortDescription: "Pivoines sculptées aux teintes poudrées.", 
    description: "Un bouquet romantique aux teintes douces, sculpté à la main pour capturer l'essence d'un amour éternel." 
  },
  { 
    id: "2", slug: "douceur-daurore", name: "Douceur d'Aurore", bestSeller: true, price: 65, 
    tags: ["naissance", "white", "roses", "boxes"], 
    image: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800", 
    shortDescription: "Nuances pastel pour un nouveau départ.", 
    description: "Des nuances pastel délicates pour célébrer une naissance ou un nouveau départ en douceur." 
  },
  { 
    id: "3", slug: "eclat-de-rose", name: "Éclat de Rose", bestSeller: true, price: 120, 
    tags: ["amour", "red", "roses", "bouquets", "celebration"], 
    image: "https://images.pexels.com/photos/1122531/pexels-photo-1122531.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/1122531/pexels-photo-1122531.jpeg?auto=compress&cs=tinysrgb&w=800", 
    shortDescription: "L'intensité du rouge, sans compromis.", 
    description: "L'intensité du rouge dans une composition audacieuse et passionnée." 
  },
  { 
    id: "4", slug: "jardin-secret", name: "Jardin Secret", bestSeller: true, price: 95, 
    tags: ["remerciement", "pink", "chrysanthemums", "vases"], 
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800", 
    shortDescription: "Un écrin de verdure pour dire merci.", 
    description: "Un écrin de verdure et de fleurs délicates pour dire merci avec élégance." 
  },
  { 
    id: "5", slug: "coffret-azur", name: "Coffret Azur", bestSeller: true, price: 150, 
    tags: ["celebration", "green", "sim_carnations", "gift_sets", "boxes"], 
    image: "https://images.pexels.com/photos/185893/pexels-photo-185893.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/185893/pexels-photo-185893.jpeg?auto=compress&cs=tinysrgb&w=800", 
    shortDescription: "Notre coffret signature.", 
    description: "Notre coffret signature, parfait pour les cadeaux d'affaires ou les grandes célébrations." 
  },
  { 
    id: "6", slug: "murmure-blanc", name: "Murmure Blanc", bestSeller: true, price: 75, 
    tags: ["sympathy", "white", "roses", "bags"], 
    image: "https://images.pexels.com/photos/1099660/pexels-photo-1099660.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/1099660/pexels-photo-1099660.jpeg?auto=compress&cs=tinysrgb&w=800", 
    shortDescription: "La pureté du blanc, apaisante.", 
    description: "La pureté du blanc dans une composition apaisante et pleine de douceur." 
  },
  { 
    id: "7", slug: "passion-rouge", name: "Passion Rouge", bestSeller: true, price: 110, 
    tags: ["amour", "red", "roses", "bouquets"], 
    image: "https://images.pexels.com/photos/1122531/pexels-photo-1122531.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/1122531/pexels-photo-1122531.jpeg?auto=compress&cs=tinysrgb&w=800", 
    shortDescription: "Une déclaration flamboyante.", 
    description: "Une déclaration flamboyante pour les amours passionnées." 
  },
  { 
    id: "8", slug: "fraicheur-printaniere", name: "Fraîcheur Printanière", bestSeller: true, price: 80, 
    tags: ["get_well", "pink", "chrysanthemums", "vases"], 
    image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800", 
    hoverImage: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800", 
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
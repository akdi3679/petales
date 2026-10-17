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
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "Pivoines sculptÃƒÂ©es aux teintes poudrÃƒÂ©es.", 
    description: "Un bouquet romantique aux teintes douces, sculptÃƒÂ© ÃƒÂ  la main pour capturer l'essence d'un amour ÃƒÂ©ternel." 
  },
  { 
    id: "2", slug: "douceur-daurore", name: "Douceur d'Aurore", bestSeller: true, price: 65, 
    tags: ["naissance", "white", "roses", "boxes"], 
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "Nuances pastel pour un nouveau dÃƒÂ©part.", 
    description: "Des nuances pastel dÃƒÂ©licates pour cÃƒÂ©lÃƒÂ©brer une naissance ou un nouveau dÃƒÂ©part en douceur." 
  },
  { 
    id: "3", slug: "eclat-de-rose", name: "Ãƒâ€°clat de Rose", bestSeller: true, price: 120, 
    tags: ["amour", "red", "roses", "bouquets", "celebration"], 
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "L'intensitÃƒÂ© du rouge, sans compromis.", 
    description: "L'intensitÃƒÂ© du rouge dans une composition audacieuse et passionnÃƒÂ©e." 
  },
  { 
    id: "4", slug: "jardin-secret", name: "Jardin Secret", bestSeller: true, price: 95, 
    tags: ["remerciement", "pink", "chrysanthemums", "vases"], 
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "Un ÃƒÂ©crin de verdure pour dire merci.", 
    description: "Un ÃƒÂ©crin de verdure et de fleurs dÃƒÂ©licates pour dire merci avec ÃƒÂ©lÃƒÂ©gance." 
  },
  { 
    id: "5", slug: "coffret-azur", name: "Coffret Azur", bestSeller: true, price: 150, 
    tags: ["celebration", "green", "sim_carnations", "gift_sets", "boxes"], 
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "Notre coffret signature.", 
    description: "Notre coffret signature, parfait pour les cadeaux d'affaires ou les grandes cÃƒÂ©lÃƒÂ©brations." 
  },
  { 
    id: "6", slug: "murmure-blanc", name: "Murmure Blanc", bestSeller: true, price: 75, 
    tags: ["sympathy", "white", "roses", "bags"], 
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "La puretÃƒÂ© du blanc, apaisante.", 
    description: "La puretÃƒÂ© du blanc dans une composition apaisante et pleine de douceur." 
  },
  { 
    id: "7", slug: "passion-rouge", name: "Passion Rouge", bestSeller: true, price: 110, 
    tags: ["amour", "red", "roses", "bouquets"], 
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "Une dÃƒÂ©claration flamboyante.", 
    description: "Une dÃƒÂ©claration flamboyante pour les amours passionnÃƒÂ©es." 
  },
  { 
    id: "8", slug: "fraicheur-printaniere", name: "FraÃƒÂ®cheur PrintaniÃƒÂ¨re", bestSeller: true, price: 80, 
    tags: ["get_well", "pink", "chrysanthemums", "vases"], 
    image: " param($match) Get-NextUnsplashUrl ", 
    hoverImage: " param($match) Get-NextUnsplashUrl ", 
    shortDescription: "Lumineuse, pour souhaiter un prompt rÃƒÂ©tablissement.", 
    description: "Un bouquet lumineux pour souhaiter un prompt rÃƒÂ©tablissement ou cÃƒÂ©lÃƒÂ©brer le printemps." 
  },
];

export const products: Product[] = base.map((p) => ({
  ...p,
  variants: makeVariants(p.price),
}));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productPrice = (p: Product | undefined) => (p ? p.price : 0);

export type Occasion = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const occasions: Occasion[] = [
  {
    slug: "anniversaire",
    name: "Anniversaire",
    description: "Une attention douce pour célébrer une année de plus.",
    image: u("photo-1712135596996-3dda241aa9bc"),
  },
  {
    slug: "mariage",
    name: "Mariage",
    description: "Bouquets de mariée, cadeaux d'invités et scénographies.",
    image: u("photo-1519225421980-715cb0215aed"),
  },
  {
    slug: "naissance",
    name: "Naissance",
    description: "Accueillir une nouvelle vie avec tendresse.",
    image: u("photo-1457089328109-e5d9bd499191"),
  },
  {
    slug: "remerciement",
    name: "Remerciement",
    description: "Dire merci avec une pièce qui se garde et se savoure.",
    image: u("photo-1508610048659-a06b669e3321"),
  },
  {
    slug: "amour",
    name: "Amour & Romance",
    description: "Déclarer ses sentiments, sans un mot.",
    image: u("photo-1490750967868-88aa4486c946"),
  },
  {
    slug: "fetes",
    name: "Fêtes & saisons",
    description: "Noël, Fête des mères, éditions de saison en petites séries.",
    image: u("photo-1526047932273-341f2a7631f9"),
  },
];

  
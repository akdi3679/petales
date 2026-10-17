export type CardTemplate = {
  id: string;
  name: string;
  accent: "gold" | "rose" | "sage";
};

export const cardTemplates: CardTemplate[] = [
  { id: "ovale-or", name: "Ovale d'or", accent: "gold" },
  { id: "ovale-rose", name: "Ovale rose", accent: "rose" },
  { id: "ovale-sauge", name: "Ovale sauge", accent: "sage" },
];
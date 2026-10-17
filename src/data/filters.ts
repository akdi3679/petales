export type FilterKey = "occasions" | "colors" | "flowers" | "styles";

export type FilterAxis = {
  key: FilterKey;
  label: string;
  options: { value: string; label: string }[];
};

export const filterAxes: FilterAxis[] = [
  {
    key: "occasions",
    label: "Occasion",
    options: [
      { value: "anniversaire", label: "Anniversaire" },
      { value: "mariage", label: "Mariage" },
      { value: "naissance", label: "Naissance" },
      { value: "remerciement", label: "Remerciement" },
      { value: "amour", label: "Amour" },
      { value: "fetes", label: "Fêtes & saisons" },
    ],
  },
  {
    key: "colors",
    label: "Couleur",
    options: [
      { value: "rose", label: "Rose" },
      { value: "blanc", label: "Blanc & crème" },
      { value: "lilas", label: "Lilas" },
      { value: "rouge", label: "Rouge" },
      { value: "pastel", label: "Pastel mêlé" },
    ],
  },
  {
    key: "flowers",
    label: "Type de fleur",
    options: [
      { value: "pivoine", label: "Pivoine" },
      { value: "rose", label: "Rose" },
      { value: "lilas", label: "Lilas" },
      { value: "renoncule", label: "Ranoncule" },
      { value: "champetre", label: "Champêtre" },
    ],
  },
  {
    key: "styles",
    label: "Style",
    options: [
      { value: "romantique", label: "Romantique" },
      { value: "champetre", label: "Champêtre" },
      { value: "prestige", label: "Prestige" },
      { value: "coffret", label: "Coffret cadeau" },
    ],
  },
];

export const emptySelection: Record<FilterKey, string[]> = {
  occasions: [],
  colors: [],
  flowers: [],
  styles: [],
};
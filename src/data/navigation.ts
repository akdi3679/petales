export type NavigationLink = {
  href: string;
  label: string;
};

export const navigation: NavigationLink[] = [
  { href: "/creations", label: "Créations" },
  { href: "/occasions", label: "Occasions" },
  { href: "/evenements", label: "Événements" },
  { href: "/a-propos", label: "L'atelier" },
];
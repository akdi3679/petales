const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;

export const cardMoods = [
  { id: "romantique", name: "Romantique", image: u("photo-1518895949257-95d8adfd52c7") },
  { id: "champetre", name: "Champêtre", image: u("photo-1526047932273-341f2a7631f9") },
  { id: "prestige", name: "Prestige", image: u("photo-1508610048659-a06b669e3321") },
];
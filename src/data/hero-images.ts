const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`;

export const heroImages = {
  home: u("photo-1490750967868-88aa4486c946"),
  homeFallback: u("photo-1508610048659-a06b669e3321"),
  generalFallback: u("photo-1490750967868-88aa4486c946"),
  boutique: u("photo-1508610048659-a06b669e3321"),
  cartes: u("photo-1518895949257-95d8adfd52c7"),
  mariages: u("photo-1519225421980-715cb0215aed"),
  collaborations: u("photo-1457089328109-e5d9bd499191"),
  ateliers: u("photo-1526047932273-341f2a7631f9"),
  occasions: u("photo-1518895949257-95d8adfd52c7"),
  histoire: u("photo-1457089328109-e5d9bd499191"),
  contact: u("photo-1526047932273-341f2a7631f9"),
  commande: u("photo-1508610048659-a06b669e3321"),
};
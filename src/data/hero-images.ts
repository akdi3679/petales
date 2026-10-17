const u = (id: string) => `https://images.pexels.com/photos/${id}?auto=compress&cs=tinysrgb&w=1600`;

export const heroImages = {
  home: u("56866"), // Elegant pink roses
  homeFallback: u("931177"), // Soft white/cream bouquet
  generalFallback: u("56866"),
  boutique: u("1093950"), // Elegant floral box
  cartes: u("3512718"), // Artisanal/creative vibe
  mariages: u("931177"), // Romantic white/cream
  collaborations: u("3760263"), // Professional/artisanal
  ateliers: u("3760263"), // Workshop/creator vibe
  occasions: u("931177"), // Celebration/gifting
  histoire: u("3512718"), // Vintage/elegant aesthetic
  contact: u("2071882"), // Soft, welcoming floral
  commande: u("1093950"), // Clean, elegant box
};
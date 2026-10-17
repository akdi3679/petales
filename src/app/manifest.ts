import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maison en Pétales",
    short_name: "Maison en Pétales",
    description:
      "Fleurs artisanales en guimauve, sans gélatine, à base d’agar-agar.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdfc",
    theme_color: "#b25e7a",
    icons: [],
  };
}
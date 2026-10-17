import { products } from "@/data/products";
import { occasions } from "@/data/occasions";

export default async function sitemap() {
  const productUrls = products.map((p) => ({
    url: `https://maisondepetales.com/boutique/${p.slug}`,
    lastModified: new Date(),
  }));

  const occasionUrls = occasions.map((o) => ({
    url: `https://maisondepetales.com/occasions/${o.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://maisondepetales.com", lastModified: new Date() },
    { url: "https://maisondepetales.com/boutique", lastModified: new Date() },
    { url: "https://maisondepetales.com/occasions", lastModified: new Date() },
    { url: "https://maisondepetales.com/ateliers", lastModified: new Date() },
    { url: "https://maisondepetales.com/notre-histoire", lastModified: new Date() },
    { url: "https://maisondepetales.com/contact", lastModified: new Date() },
    ...productUrls,
    ...occasionUrls,
  ];
}
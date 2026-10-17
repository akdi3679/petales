import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Maison de Pétales",
    default: "Maison de Pétales",
  },
  description: "Fleurs en guimauve artisanales sur la Côte d'Azur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full bg-ivory text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
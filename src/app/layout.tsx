import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { BottomNav } from "@/components/sections/bottom-nav";

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
      <body className="h-full bg-ivory text-ink antialiased flex flex-col">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
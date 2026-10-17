import type { Metadata } from "next";
import { Cormorant_Garamond, Parisienne, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { BottomNav } from "@/components/sections/bottom-nav";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"]
});

const parisienne = Parisienne({ 
  subsets: ["latin"], 
  variable: "--font-script",
  weight: ["400"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "Maison de Pétales",
  description: "Fleurs en guimauve artisanales sur la Côte d'Azur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${parisienne.variable} ${inter.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; filter: none !important; }`}</style>
        </noscript>
      </head>
      <body className="antialiased bg-ivory text-ink">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
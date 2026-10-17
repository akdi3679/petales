"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Uniquement les images Unsplash que tu as fournies
const cards = [
  {
    id: 1,
    title: "Cadeau tout prêt",
    subtitle: "Offrez l'attention parfaite",
    image: "https://images.unsplash.com/photo-1tjpDooYioU?auto=format&fit=crop&w=800&q=80",
    link: "/boutique"
  },
  {
    id: 2,
    title: "Carte personnalisée",
    subtitle: "Un message unique",
    image: "https://images.unsplash.com/photo-xQLLJXHuItc?auto=format&fit=crop&w=800&q=80",
    link: "/boutique"
  },
  {
    id: 3,
    title: "Coffret signature",
    subtitle: "L'élégance absolue",
    image: "https://images.unsplash.com/photo-FHwt-zKndpY?auto=format&fit=crop&w=800&q=80",
    link: "/boutique"
  },
  {
    id: 4,
    title: "Bouquet éternel",
    subtitle: "Ne fane jamais",
    image: "https://images.unsplash.com/photo-fY1ECB1RCd0?auto=format&fit=crop&w=800&q=80",
    link: "/boutique"
  },
  {
    id: 5,
    title: "Création artisanale",
    subtitle: "Fait main avec amour",
    image: "https://images.unsplash.com/photo-ElxBX6bsAgQ?auto=format&fit=crop&w=800&q=80",
    link: "/boutique"
  },
];

export function GiftCardCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  // --- AUTO-SCROLL FLUIDE ---
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      if (!isDragging.current) {
        const deltaTime = time - lastTime;
        const speed = 0.05; // Vitesse du défilement
        currentTranslate.current -= speed * deltaTime;
        
        // Boucle infinie
        const trackWidth = track.scrollWidth / 2;
        if (trackWidth > 0 && Math.abs(currentTranslate.current) >= trackWidth) {
          currentTranslate.current += trackWidth;
        }
        
        track.style.transform = `translateX(${currentTranslate.current}px)`;
      }
      lastTime = time;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { 
      if (animationRef.current) cancelAnimationFrame(animationRef.current); 
    };
  }, []);

  // --- GESTION DU DRAG (SOURIS & TACTILE) ---
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true; // Met en pause l'auto-scroll
    startX.current = e.clientX;
    prevTranslate.current = currentTranslate.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false; // Relance l'auto-scroll au relâchement
  };

  return (
    <section className="py-24 px-6 bg-cream/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center text-rose-deep">Nos Créations</p>
          <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">
            Cadeau tout prêt
          </h2>
          <p className="mt-4 text-base text-ink/70">
            Offrez l'attention parfaite
          </p>
        </div>

        {/* Conteneur extérieur : gère le drag et cache le débordement */}
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Conteneur intérieur : celui qui se déplace */}
          <div ref={trackRef} className="flex gap-6 w-max">
            
            {/* Cartes originales */}
            {cards.map((card) => (
              <Link key={card.id} href={card.link} className="group block w-72 flex-shrink-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white border border-line shadow-sm hover:shadow-lg transition-shadow">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-title text-xl text-ivory mb-1">{card.title}</h3>
                    <p className="text-sm text-ivory/80">{card.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}

            {/* Cartes dupliquées pour l'effet de défilement infini */}
            {cards.map((card) => (
              <Link key={`dup-${card.id}`} href={card.link} className="group block w-72 flex-shrink-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white border border-line shadow-sm hover:shadow-lg transition-shadow">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-title text-xl text-ivory mb-1">{card.title}</h3>
                    <p className="text-sm text-ivory/80">{card.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const cards = [
  { id: 1, title: "Cadeau tout prêt", subtitle: "Offrez l'attention parfaite", image: "https://images.unsplash.com/photo-1508808703020-ef18109db02f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
 link: "/boutique" },
  { id: 2, title: "Carte personnalisée", subtitle: "Un message unique", image:   "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
 link: "/boutique" },
  { id: 3, title: "Coffret signature", subtitle: "L'élégance absolue", image:   "https://images.unsplash.com/photo-1613052271194-5427710fb39d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
 link: "/boutique" },
  { id: 4, title: "Bouquet éternel", subtitle: "Ne fane jamais", image:    "https://images.unsplash.com/photo-1709983967481-d738b90bd395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
 link: "/boutique" },
  { id: 5, title: "Création artisanale", subtitle: "Fait main avec amour", image:    "https://images.unsplash.com/photo-1712135596996-3dda241aa9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
 link: "/boutique" },
];



export function GiftCardCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  useEffect(() => {
    let lastTime = 0;
    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isDragging.current && trackRef.current) {
        currentTranslate.current -= 0.05 * deltaTime;
        const trackWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(currentTranslate.current) >= trackWidth) {
          currentTranslate.current += trackWidth;
        }
        trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    prevTranslate.current = currentTranslate.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault(); // EMPÊCHE le scroll de la page, garde le contrôle au carousel
    const diff = e.clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <section className="py-24 px-6 bg-cream/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center text-rose-deep">Nos Créations</p>
          <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">Cadeau tout prêt</h2>
          <p className="mt-4 text-base text-ink/70">Offrez l'attention parfaite</p>
        </div>

        {/* touch-action: none est CRUCIAL pour que le doigt contrôle le carousel et non la page */}
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: "none" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div ref={trackRef} className="flex gap-6 w-max">
            {cards.map((card) => (
              <Link key={card.id} href={card.link} className="group block w-72 flex-shrink-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white border border-line shadow-sm hover:shadow-lg transition-shadow">
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-title text-xl text-ivory mb-1">{card.title}</h3>
                    <p className="text-sm text-ivory/80">{card.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
            {/* Dupliqué pour l'effet infini */}
            {cards.map((card) => (
              <Link key={`dup-${card.id}`} href={card.link} className="group block w-72 flex-shrink-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white border border-line shadow-sm hover:shadow-lg transition-shadow">
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
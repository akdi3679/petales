import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-ink m-0 p-0">
      {/* !h-full !w-full !max-w-none overrides the global img { height: auto } rule */}
      <img
        src="https://images.unsplash.com/photo-1712135596996-3dda241aa9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Bouquet de fleurs en guimauve — Maison de Pétales"
        loading="eager"
        decoding="async"
        className="absolute inset-0 !h-full !w-full !max-w-none !object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 z-10 w-full px-6 pb-16 md:px-12 lg:px-20">
        <div className="max-w-md">
          <p className="font-title text-xl leading-8 text-white sm:text-2xl drop-shadow-md">
            Des fleurs en guimauve sculptées à la main sur la Côte d'Azur — un souvenir
            éternel qui se regarde, se conserve et se déguste.
          </p>
          <Link href="/boutique" className="group mt-7 inline-flex flex-col items-start">
            <span className="text-sm font-medium uppercase tracking-widest text-white drop-shadow-md">
              Voir notre collection
            </span>
            <span className="mt-2 h-px w-full bg-white transition-all duration-500 group-hover:w-3/4 group-hover:bg-rose" />
          </Link>
        </div>
      </div>
    </section>
  );
}
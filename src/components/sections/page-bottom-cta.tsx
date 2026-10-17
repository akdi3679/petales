import Link from "next/link";
import Image from "next/image";

export function PageBottomCTA({
  image,
  title,
  description,
  linkText,
  linkHref,
}: {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-16 sm:px-10 lg:px-14">
        <h2 className="display text-3xl text-ivory sm:text-4xl md:text-5xl max-w-2xl">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-ivory/90 sm:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <Link href={linkHref} className="link-hero">
            <span className="link-hero-line">{linkText}</span>
            <span aria-hidden="true" className="link-hero-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
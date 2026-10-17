import { proofBadges, proofStats } from "@/data/proof";
import { testimonials } from "@/data/testimonials";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

export function Proof() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center">
                <p className="display text-5xl text-rose-deep">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-ink/65">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <figure className="card-luxe mx-auto mt-14 max-w-3xl p-8 text-center">
            <blockquote className="font-title text-xl leading-8 text-ink italic">
              « {testimonials[0].text} »
            </blockquote>
            <figcaption className="mt-5 text-sm text-ink/60">
              {testimonials[0].name} · {testimonials[0].city} — {testimonials[0].product}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={240}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {proofBadges.map((b) => (
              <li key={b.text} className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink/60">
                <span aria-hidden="true">{b.icon}</span> {b.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
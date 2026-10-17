"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/ui/reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 md:gap-20 items-start">
          
          {/* LEFT: Relative on mobile, Sticky only on md+ */}
          <div className="relative md:sticky md:top-24 self-start h-fit w-full">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep flex items-center gap-3 mb-2">
                <span className="w-8 h-px bg-rose-deep/60" />
                Questions fréquentes
              </p>
              <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">
                Tout ce que vous devez savoir
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink/60 max-w-xs">
                Des réponses claires pour commander en toute sérénité.
              </p>
            </Reveal>
          </div>

          {/* RIGHT: Compact Accordions */}
          <div className="space-y-2">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={index} delay={index * 50}>
                  <div className="border-b border-line/60 last:border-0">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                    >
                      <span className={`font-title text-base text-ink pr-4 transition-colors duration-300 ${isOpen ? 'text-rose-deep' : 'group-hover:text-rose-deep'}`}>
                        {item.question}
                      </span>
                      <span className={`shrink-0 text-rose-deep text-xl leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-6 text-ink/70 pl-0 max-w-md">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";

export function HeroBackground({
  src,
  fallbackSrc,
  alt,
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
}) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  const current =
    stage === 0 ? src : stage === 1 && fallbackSrc ? fallbackSrc : null;

  if (current === null) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-rose-deep via-[#8a4f56] to-ink"
      />
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={() => setStage((s) => (s === 0 ? 1 : 2))}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
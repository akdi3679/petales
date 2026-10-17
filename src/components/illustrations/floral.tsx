export type ArtKind = "bouquet" | "closeup" | "sprig" | "bud" | "branch" | "wreath";

export function FloralArt({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const };

  switch (kind) {
    case "bouquet":
      return (
        <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
          <g {...stroke}>
            <circle cx="45" cy="42" r="13" />
            <path d="M45 42 c 5 -3, 9 1, 7 6 c -2 4, -8 4, -10 0" />
            <circle cx="72" cy="36" r="10" />
            <path d="M72 36 c 4 -2, 7 1, 5 5" />
            <circle cx="60" cy="58" r="11" />
            <path d="M60 58 c 4 -3, 8 0, 6 5" />
            <path d="M45 55 C 48 70, 55 80, 60 92" />
            <path d="M72 46 C 68 65, 63 78, 60 92" />
            <path d="M60 69 C 60 78, 60 85, 60 92" />
            <path d="M52 74 C 44 70, 40 74, 42 80 C 48 82, 52 79, 52 74 Z" />
            <path d="M68 78 C 76 74, 80 78, 78 84 C 72 86, 68 83, 68 78 Z" />
            <path d="M50 92 L 70 92 L 66 104 L 54 104 Z" />
            <path d="M52 96 L 68 96" />
          </g>
        </svg>
      );
    case "closeup":
      return (
        <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
          <g {...stroke}>
            <circle cx="60" cy="56" r="26" />
            <path d="M60 56 c 8 -5, 15 2, 11 10 c -4 7, -15 6, -18 -1 c -3 -8, 5 -15, 13 -12" />
            <path d="M60 30 C 52 22, 40 24, 36 32" />
            <path d="M60 30 C 68 22, 80 24, 84 32" />
            <path d="M34 56 C 24 52, 16 58, 18 66" />
            <path d="M86 56 C 96 52, 104 58, 102 66" />
            <path d="M60 82 C 60 92, 60 100, 60 108" />
            <path d="M60 94 C 50 90, 44 94, 46 101 C 53 103, 59 99, 60 94 Z" />
          </g>
        </svg>
      );
    case "sprig":
      return (
        <svg viewBox="0 0 60 90" className={className} aria-hidden="true">
          <g {...stroke}>
            <path d="M30 12 C 40 22, 40 42, 30 52 C 20 42, 20 22, 30 12 Z" />
            <path d="M30 52 L 30 80" />
            <path d="M30 62 C 22 58, 16 62, 18 68 C 24 70, 29 67, 30 62 Z" />
            <path d="M30 70 C 38 66, 44 70, 42 76 C 36 78, 31 75, 30 70 Z" />
          </g>
        </svg>
      );
    case "bud":
      return (
        <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
          <g {...stroke}>
            <circle cx="20" cy="16" r="9" />
            <path d="M20 16 c 3 -2, 6 1, 4 4 c -2 3, -6 2, -7 -1" />
            <path d="M20 25 L 20 34" />
          </g>
        </svg>
      );
    case "branch":
      return (
        <svg viewBox="0 0 90 40" className={className} aria-hidden="true">
          <g {...stroke}>
            <path d="M6 20 C 30 18, 60 18, 84 20" />
            <path d="M20 19 C 18 12, 24 8, 28 12 C 28 17, 24 19, 20 19 Z" />
            <path d="M38 19 C 36 12, 42 8, 46 12 C 46 17, 42 19, 38 19 Z" />
            <path d="M56 19 C 54 12, 60 8, 64 12 C 64 17, 60 19, 56 19 Z" />
            <path d="M28 21 C 26 28, 32 32, 36 28 C 36 23, 32 21, 28 21 Z" />
            <path d="M48 21 C 46 28, 52 32, 56 28 C 56 23, 52 21, 48 21 Z" />
          </g>
        </svg>
      );
    case "wreath":
      return (
        <svg viewBox="0 0 200 240" className={className} aria-hidden="true">
          <g {...stroke}>
            <ellipse cx="100" cy="120" rx="70" ry="95" />
            <ellipse cx="100" cy="120" rx="62" ry="87" />
            <path d="M100 25 C 92 18, 84 22, 86 30 C 92 33, 98 30, 100 25 Z" />
            <path d="M100 25 C 108 18, 116 22, 114 30 C 108 33, 102 30, 100 25 Z" />
            <path d="M100 215 C 92 222, 84 218, 86 210 C 92 207, 98 210, 100 215 Z" />
            <path d="M100 215 C 108 222, 116 218, 114 210 C 108 207, 102 210, 100 215 Z" />
            <circle cx="30" cy="120" r="6" />
            <circle cx="170" cy="120" r="6" />
          </g>
        </svg>
      );
  }
}
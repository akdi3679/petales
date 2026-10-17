"use client";

import { filterAxes, type FilterKey } from "@/data/filters";

export function Filters({
  selected,
  counts,
  onToggle,
  onClear,
  activeCount,
}: {
  selected: Record<FilterKey, string[]>;
  counts: (key: FilterKey, value: string) => number;
  onToggle: (key: FilterKey, value: string) => void;
  onClear: () => void;
  activeCount: number;
}) {
  return (
    <div className="space-y-5">
      {filterAxes.map((axis) => (
        <fieldset key={axis.key}>
          <legend className="eyebrow mb-3">{axis.label}</legend>
          <div className="flex flex-wrap gap-2">
            {axis.options.map((opt) => {
              const active = selected[axis.key].includes(opt.value);
              const count = counts(axis.key, opt.value);
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onToggle(axis.key, opt.value)}
                  aria-pressed={active}
                  className={`btn rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                    active
                      ? "border-rose-deep bg-rose-deep text-ivory"
                      : "border-line bg-ivory text-ink/70 hover:border-gold hover:text-ink"
                  } ${count === 0 && !active ? "opacity-40" : ""}`}
                >
                  {opt.label}
                  <span className="ml-1.5 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}

      {activeCount > 0 && (
        <button type="button" onClick={onClear} className="link-underline text-xs font-medium text-rose-deep">
          Effacer les filtres ({activeCount})
        </button>
      )}
    </div>
  );
}
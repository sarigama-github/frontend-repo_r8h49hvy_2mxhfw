import { useState } from "react";

const PRESETS = ["front", "left", "right", "top", "detail"];

export default function PresetChips({ value = [], onChange }) {
  const [selected, setSelected] = useState(value);

  const toggle = (p) => {
    const next = selected.includes(p) ? selected.filter(i => i !== p) : [...selected, p];
    setSelected(next);
    onChange?.(next);
  };

  return (
    <div className="flex flex-wrap gap-2" aria-label="Preset views">
      {PRESETS.map(p => (
        <button
          key={p}
          onClick={() => toggle(p)}
          className={`px-3 py-1.5 rounded-full border ${selected.includes(p) ? "bg-blue-500 text-white border-blue-500" : "bg-white/5 border-white/10 text-white"}`}
          aria-pressed={selected.includes(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

import { useState } from "react";

export default function CustomView3D({ onAnglesChange }) {
  const [h, setH] = useState(0);
  const [v, setV] = useState(0);

  const onKey = (setter) => (e) => {
    if (e.key === 'ArrowLeft') setter((x) => Math.max(-180, x - 5));
    if (e.key === 'ArrowRight') setter((x) => Math.min(180, x + 5));
    if (e.key === 'ArrowUp') setter((x) => Math.min(90, x + 5));
    if (e.key === 'ArrowDown') setter((x) => Math.max(-90, x - 5));
    onAnglesChange?.({ h, v });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Custom 3D angle controller">
      <div className="aspect-video rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_60%)] border border-white/10 flex items-center justify-center text-white">
        <span className="text-sm">3D Preview Placeholder</span>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <label className="flex items-center gap-3">
          <span className="w-24 text-sm">Horizontal</span>
          <input type="range" min="-180" max="180" value={h} onChange={(e)=>{ const val=Number(e.target.value); setH(val); onAnglesChange?.({ h: val, v }); }} className="w-full" aria-label="Horizontal angle" onKeyDown={onKey(setH)} />
          <span className="w-12 text-right text-sm">{h}°</span>
        </label>
        <label className="flex items-center gap-3">
          <span className="w-24 text-sm">Vertical</span>
          <input type="range" min="-90" max="90" value={v} onChange={(e)=>{ const val=Number(e.target.value); setV(val); onAnglesChange?.({ h, v: val }); }} className="w-full" aria-label="Vertical angle" onKeyDown={onKey(setV)} />
          <span className="w-12 text-right text-sm">{v}°</span>
        </label>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function GalleryGrid({ items = [] }) {
  const [hovered, setHovered] = useState(null);

  if (!items.length) {
    return (
      <div className="text-center text-slate-300">Outputs will appear here after generation.</div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((it, idx) => (
        <div key={idx} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5" onMouseEnter={()=>setHovered(idx)} onMouseLeave={()=>setHovered(null)}>
          <img src={it.url} alt={it.alt || `Generated view ${it.viewName || idx+1}`} className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
            <div className="p-2 text-white text-xs w-full flex items-center justify-between">
              <span>{it.viewName || 'View'}</span>
              <span>{it.creditCost ? `${it.creditCost} cr` : ''}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import { copy } from "../content";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-6">FAQ</h2>
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {copy.faq.map((f, i) => (
          <button key={i} className="w-full text-left p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400" onClick={()=> setOpen(open===i?null:i)} aria-expanded={open===i} aria-controls={`faq-${i}`}>
            <div className="flex items-center justify-between text-white">
              <span className="font-medium">{f.q}</span>
              <span className="text-slate-300">{open===i?'-':'+'}</span>
            </div>
            {open===i && <p id={`faq-${i}`} className="mt-2 text-slate-300 text-sm">{f.a}</p>}
          </button>
        ))}
      </div>
    </section>
  );
}

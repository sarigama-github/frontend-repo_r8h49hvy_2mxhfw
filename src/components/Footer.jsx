import { copy } from "../content";

export default function Footer() {
  return (
    <footer className="py-12 text-slate-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">AI Product Photo Generator</span>
          <nav className="flex items-center gap-4 text-sm">
            {copy.footer.links.map((l,i)=> <a key={i} href={l.href} className="hover:text-white">{l.label}</a>)}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href={`mailto:${copy.footer.contact}`} className="hover:text-white">{copy.footer.contact}</a>
          {copy.footer.social.map((s,i)=> <a key={i} href={s.href} target="_blank" className="hover:text-white" rel="noreferrer">{s.label}</a>)}
          {copy.footer.legal.map((l,i)=> <a key={i} href={l.href} className="hover:text-white">{l.label}</a>)}
        </div>
      </div>
    </footer>
  );
}

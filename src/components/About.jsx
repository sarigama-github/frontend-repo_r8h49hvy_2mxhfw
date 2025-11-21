import { copy } from "../content";

export default function About() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-4">{copy.about.title}</h2>
      <p className="text-slate-300 max-w-3xl">{copy.about.body}</p>
    </section>
  );
}

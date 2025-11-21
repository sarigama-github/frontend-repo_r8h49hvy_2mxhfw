import { motion } from "framer-motion";
import { copy } from "../content";

export default function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-6">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {copy.howItWorksSteps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-blue-300 mb-2">Step {i+1}</div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-slate-300 mt-2 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

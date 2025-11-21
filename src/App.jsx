import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import PresetChips from "./components/PresetChips";
import CustomView3D from "./components/CustomView3D";
import CreditsMeter from "./components/CreditsMeter";
import GalleryGrid from "./components/GalleryGrid";
import PricingTable from "./components/PricingTable";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AnalyticsSnippet from "./components/AnalyticsSnippet";
import { siteMeta } from "./content";

function App() {
  // Simple state for preview/demo (would be replaced by real auth/credits)
  const [user, setUser] = useState({ email: "demo@user.com", plan: "free" });
  const [credits, setCredits] = useState({ daily: 10, usedToday: 0, monthlyCap: 50, usedMonthly: 0, balance: 0 });
  const [upload, setUpload] = useState(null);
  const [presets, setPresets] = useState(["front", "left"]);
  const [customAngles, setCustomAngles] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiBase = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    document.title = siteMeta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', siteMeta.description);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = siteMeta.description;
      document.head.appendChild(m);
    }
    const og = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    og.setAttribute('property', 'og:image');
    og.setAttribute('content', siteMeta.ogImage);
    document.head.appendChild(og);

    // JSON-LD structured data for product/service
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteMeta.title,
      description: siteMeta.description,
      offers: { "@type": "Offer", price: 10, priceCurrency: "USD" }
    });
    document.head.appendChild(ld);
  }, []);

  const handleUpload = async (file) => {
    setUpload({ name: file.name, preview: URL.createObjectURL(file) });
    // Simulated API call
    try {
      setLoading(true);
      const form = new FormData();
      form.append('file', file);
      await fetch(`${apiBase}/api/upload`, { method: 'POST', body: form }); // dummy
    } catch {}
    finally { setLoading(false); }
  };

  const generate = async () => {
    if (!upload) return;
    const creditCost = 5; // demo cost example (1 hero + 4 angles)
    if (credits.usedToday + creditCost > credits.daily || credits.usedMonthly + creditCost > credits.monthlyCap) {
      alert('You have reached your free credits limit. Upgrade to Pro for more.');
      return;
    }
    setLoading(true);
    try {
      // dummy background remove
      await fetch(`${apiBase}/api/remove-background`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ imageId: 'demo' }) });
      // dummy generate views
      await fetch(`${apiBase}/api/generate-views`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ imageId: 'demo', presets, customAngles, targetSizes: ['amazon','shopify'] }) });
      // dummy job status
      const outputs = [
        { viewName: 'hero', url: upload.preview, creditCost: 1 },
        { viewName: 'front', url: upload.preview, creditCost: 1 },
        { viewName: 'left', url: upload.preview, creditCost: 1 },
        { viewName: 'right', url: upload.preview, creditCost: 1 },
        { viewName: 'detail', url: upload.preview, creditCost: 1 },
      ];
      setGallery(outputs);
      setCredits(c => ({ ...c, usedToday: c.usedToday + creditCost, usedMonthly: c.usedMonthly + creditCost }));
      window.dispatchEvent(new CustomEvent('track', { detail: { event: 'generate-views' } }));
    } finally {
      setLoading(false);
    }
  };

  const exportZip = async () => {
    await fetch(`${apiBase}/api/export-zip`, { method: 'POST' });
    window.dispatchEvent(new CustomEvent('track', { detail: { event: 'download' } }));
    alert('Download started (demo).');
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <AnalyticsSnippet />
      <Hero />

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        <UploadBox onUpload={handleUpload} />

        {upload && (
          <section className="py-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-4">Select Views</h3>
                <PresetChips value={presets} onChange={setPresets} />
                <div className="mt-6">
                  <CustomView3D onAnglesChange={(a)=>setCustomAngles([a])} />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-4">Credits</h3>
                <CreditsMeter daily={credits.daily} usedToday={credits.usedToday} monthlyCap={credits.monthlyCap} usedMonthly={credits.usedMonthly} />
                <button onClick={generate} disabled={loading} className="mt-6 w-full rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-50 px-4 py-2">{loading? 'Generating...' : 'Generate Views'}</button>
                <button onClick={exportZip} className="mt-2 w-full rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2">Export ZIP</button>
                <p className="mt-2 text-xs text-slate-300">Free — 10 credits/day (monthly cap 50). Pro — 500 credits for $10.</p>
              </div>
            </div>

            <div className="mt-8">
              <GalleryGrid items={gallery} />
            </div>
          </section>
        )}

        <HowItWorks />
        <PricingTable />
        <section className="py-8 text-slate-300 text-sm">Show examples: "1 hero + 4 angle images = 5 credits" so Pro cost per product example.</section>
        <About />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;

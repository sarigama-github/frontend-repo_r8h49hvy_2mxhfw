import { useState } from "react";
import { copy } from "../content";

export default function PricingTable() {
  const [subscribe, setSubscribe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const buyPro = () => {
    // Dummy purchase flow
    setShowModal(true);
    setTimeout(() => setSuccess(true), 600);
  };

  return (
    <section id="pricing" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-2">Pricing</h2>
      <p className="text-slate-300 mb-6">{copy.pricingMicrocopy}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
          <h3 className="text-xl font-semibold">{copy.pricing.free.name}</h3>
          <p className="text-3xl font-extrabold mt-2">{copy.pricing.free.price}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {copy.pricing.free.details.map((d,i)=> <li key={i}>• {d}</li>)}
          </ul>
          <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20" aria-label="Start free with email sign-up">Start Free</button>
        </div>
        <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-transparent p-6 text-white">
          <h3 className="text-xl font-semibold">{copy.pricing.pro.name}</h3>
          <p className="text-3xl font-extrabold mt-2">{copy.pricing.pro.price} <span className="text-sm font-medium text-slate-300">for {copy.pricing.pro.credits} credits</span></p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {copy.pricing.pro.details.map((d,i)=> <li key={i}>• {d}</li>)}
          </ul>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>1 hero + 4 angles = 5 credits</span>
            <span className="text-slate-300">${(10/500*5).toFixed(2)} / product</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={subscribe} onChange={(e)=>setSubscribe(e.target.checked)} />
              Monthly subscription
            </label>
          </div>
          <button onClick={buyPro} className="mt-6 w-full px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600" aria-label="Buy Pro (Demo)">{copy.pricing.pro.cta}</button>
          <p className="text-xs text-slate-300 mt-2">CTA: Buy Pro (Demo) opens a mock payment flow.</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6" role="dialog" aria-modal="true">
          <div className="max-w-md w-full rounded-2xl bg-slate-900 border border-white/10 p-6 text-white">
            {!success ? (
              <>
                <h4 className="text-xl font-bold">Coming Soon — Payments</h4>
                <p className="mt-2 text-slate-300">Payments will be activated shortly. This is a demo checkout.</p>
                <div className="mt-4 flex gap-2 justify-end">
                  <button onClick={()=>setShowModal(false)} className="px-4 py-2 rounded-xl bg-white/10">Close</button>
                  <button onClick={()=>setSuccess(true)} className="px-4 py-2 rounded-xl bg-blue-500">Mock Pay</button>
                </div>
              </>
            ) : (
              <>
                <h4 className="text-xl font-bold">Success</h4>
                <p className="mt-2 text-slate-300">Purchase simulated. 500 credits added to your account.</p>
                <div className="mt-4 flex justify-end">
                  <button onClick={()=>setShowModal(false)} className="px-4 py-2 rounded-xl bg-blue-500">Done</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

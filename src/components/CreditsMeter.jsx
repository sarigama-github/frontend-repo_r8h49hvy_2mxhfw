import { useMemo } from "react";

export default function CreditsMeter({ daily=10, usedToday=0, monthlyCap=50, usedMonthly=0 }) {
  const dailyPct = Math.min(100, Math.round((usedToday / daily) * 100));
  const monthlyPct = Math.min(100, Math.round((usedMonthly / monthlyCap) * 100));
  const dailyLeft = Math.max(0, daily - usedToday);
  const monthlyLeft = Math.max(0, monthlyCap - usedMonthly);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Daily Free Credits</span>
          <span className="text-sm">{dailyLeft}/{daily}</span>
        </div>
        <div className="h-2 rounded bg-white/10 overflow-hidden">
          <div className="h-full bg-blue-500" style={{ width: `${dailyPct}%` }} />
        </div>
        <p className="mt-2 text-xs text-slate-300">Auto-replenishes daily</p>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Monthly Free Cap</span>
          <span className="text-sm">{monthlyLeft}/{monthlyCap}</span>
        </div>
        <div className="h-2 rounded bg-white/10 overflow-hidden">
          <div className="h-full bg-emerald-500" style={{ width: `${monthlyPct}%` }} />
        </div>
        <p className="mt-2 text-xs text-slate-300">Resets monthly</p>
      </div>
    </div>
  );
}

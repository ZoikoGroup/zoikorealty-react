const CHIPS = [
  "🏷 residential",
  "📍 Portugal, UAE",
  "💰 ≤ €2.5M",
  "🧾 FOP eligible",
  "📈 yield > 4.5%",
];

const RESULTS = [
  {
    n: "01",
    title: "Seaside Villa · Cascais, Portugal",
    meta: "€2.35M · 4BR · Freehold · NHR-eligible",
    confidence: "94%",
  },
  {
    n: "02",
    title: "Marina Apartment · Dubai, UAE",
    meta: "AED 8.9M · 3BR · Freehold zone · 6.2% yield",
    confidence: "91%",
  },
  {
    n: "03",
    title: "Hilltop Residence · Lagos, Portugal",
    meta: "€1.85M · 3BR · Golden Visa path · 4.8% yield",
    confidence: "89%",
  },
];

export default function IntentPanel() {
  return (
    <div className="rounded-[20px] bg-linear-to-b from-white/5 to-white/0 p-5 shadow-[0px_40px_100px_0px_rgba(0,0,0,0.45)] outline-1 -outline-offset-1 outline-white/10 backdrop-blur-xs sm:p-6">
      <div className="flex items-center gap-3">
        <span className="relative size-2 shrink-0 rounded-sm bg-lime-400 shadow-[0px_0px_0px_4px_rgba(164,198,78,0.20)]" />
        <p className="flex-1 text-xs text-white/70">ZoikoAI · Intent engine</p>
        <span className="rounded-sm px-2 py-1 text-xs text-white/70 outline-1 -outline-offset-1 outline-white/20">
          ⌘K
        </span>
      </div>

      <div className="mt-4 rounded-xl bg-white/5 p-4 outline-1 -outline-offset-1 outline-white/10">
        <p className="text-sm leading-5 text-white">
          Show me <span className="text-lime-400">waterfront residential</span>{" "}
          in <span className="text-lime-400">Portugal &amp; UAE</span> under
          €2.5M with{" "}
          <span className="text-lime-400">
            foreigner ownership permitted
          </span>{" "}
          and <span className="text-lime-400">rental yield &gt; 4.5%</span>.
        </p>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((c) => (
          <li
            key={c}
            className="rounded-[100px] bg-white/5 px-2.5 py-1.5 text-xs text-white/80 outline-1 -outline-offset-1 outline-white/10"
          >
            {c}
          </li>
        ))}
      </ul>

      <ul className="mt-4 space-y-1.5">
        {RESULTS.map((r) => (
          <li
            key={r.n}
            className="flex items-center gap-4 rounded-[10px] bg-white/5 p-3 outline-1 -outline-offset-1 outline-white/10"
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-linear-to-br from-sky-800 to-emerald-400 text-xs font-bold text-white">
              {r.n}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-white">{r.title}</p>
              <p className="mt-1.5 truncate text-xs text-white/60">{r.meta}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xs font-bold text-lime-400">{r.confidence}</p>
              <p className="mt-1 text-[10px] tracking-wide text-white/50">
                Confidence
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

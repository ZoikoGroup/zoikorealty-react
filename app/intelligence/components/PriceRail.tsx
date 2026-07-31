const HEADLINE_STATS = [
  { value: "5.2%", label: "Yield" },
  { value: "91%", label: "Overall" },
  { value: "42d", label: "Est close" },
];

const LAYER_CONFIDENCE = [
  { icon: "⚖", label: "Legal", score: "94%", moderate: false },
  { icon: "💰", label: "Financial", score: "91%", moderate: false },
  { icon: "📐", label: "Physical", score: "88%", moderate: false },
  { icon: "📊", label: "Market", score: "93%", moderate: false },
  { icon: "🔮", label: "Predictive", score: "76%", moderate: true },
];

const SOURCES = [
  { name: "Conservatória do Reg. Predial", tier: "Tier 1" },
  { name: "IGT Cadastre", tier: "Tier 1" },
  { name: "ADENE EPC registry", tier: "Tier 1" },
  { name: "Câmara M. Cascais", tier: "Tier 1" },
  { name: "INE transaction stats", tier: "Tier 2" },
  { name: "EU JRC climate risk", tier: "Tier 2" },
  { name: "Comp basket (n=14)", tier: "Tier 3" },
];

export default function PriceRail() {
  return (
    <aside className="flex flex-col gap-4 xl:sticky xl:top-6">
      <section className="relative overflow-hidden rounded-2xl bg-sky-950 p-5">
        <div
          className="absolute inset-0 bg-radial-[at_100%_100%] from-emerald-400/25 to-transparent to-60%"
          aria-hidden
        />
        <div className="relative">
          <h2 className="text-xs uppercase tracking-wider text-white/60">
            Asking price
          </h2>
          <p className="mt-1.5 text-3xl font-bold text-white">€2,350,000</p>
          <p className="mt-2 text-xs text-white/60">
            €5,704 / m² · ~AED 9.36M · ~$2.51M
          </p>

          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
            {HEADLINE_STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-sm font-bold text-lime-400">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wide text-white/50">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-col gap-2.5">
            {/* No Deal Room route yet — button, not a link to nowhere. */}
            <button
              type="button"
              className="rounded-md bg-linear-to-r from-emerald-400 to-lime-400 px-4 py-2.5 text-center text-xs font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              Open Deal Room →
            </button>
            <button
              type="button"
              className="rounded-md px-4 py-2.5 text-xs font-semibold tracking-tight text-white outline-1 -outline-offset-1 outline-white transition-colors hover:bg-white/5"
            >
              Schedule viewing
            </button>
            <button
              type="button"
              className="rounded-md px-4 py-2.5 text-xs font-semibold tracking-tight text-white outline-1 -outline-offset-1 outline-white transition-colors hover:bg-white/5"
            >
              Talk to advisor
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 outline-1 -outline-offset-1 outline-blue-100">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold text-sky-950">Layer confidence</h2>
          <span className="flex items-center gap-1.5 rounded-[100px] bg-green-400/10 px-2.5 py-1 text-xs font-medium text-green-600 outline-1 -outline-offset-1 outline-green-400/30">
            <span aria-hidden className="size-1.5 rounded-[3px] bg-green-600" />
            Verified
          </span>
        </div>
        <dl className="mt-4 space-y-3">
          {LAYER_CONFIDENCE.map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-xs">
              <dt className="flex flex-1 items-center gap-2 text-slate-900">
                <span aria-hidden>{l.icon}</span>
                {l.label}
              </dt>
              <dd
                className={
                  l.moderate
                    ? "font-semibold text-yellow-600"
                    : "font-semibold text-green-600"
                }
              >
                {l.score}
              </dd>
            </div>
          ))}
          <div className="flex items-center gap-2 border-t border-blue-100 pt-3 text-xs">
            <dt className="flex-1 font-bold text-sky-950">Overall</dt>
            <dd className="font-bold text-sky-950">91%</dd>
          </div>
        </dl>
      </section>

      <section
        id="provenance"
        className="rounded-2xl bg-white p-5 outline-1 -outline-offset-1 outline-blue-100"
      >
        <h2 className="text-sm font-bold text-sky-950">Sources cited</h2>
        <dl className="mt-4 space-y-3">
          {SOURCES.map((s) => (
            <div key={s.name} className="flex items-center gap-3 text-xs">
              <dt className="flex-1 text-slate-500">{s.name}</dt>
              <dd className="font-semibold text-sky-800">{s.tier}</dd>
            </div>
          ))}
        </dl>
        {/* Data-governance page is not built, so this stays unlinked. */}
        <p className="mt-4 text-xs text-slate-500">
          See full <span className="font-semibold text-sky-800">data lineage →</span>
        </p>
      </section>
    </aside>
  );
}

import LayerCard from "./LayerCard";

type Forecast = {
  label: string;
  value: string;
  detail: string;
  /** Modelled band and its median, as percentages of the track. */
  band: { from: number; to: number; median: number };
};

const FORECASTS: Forecast[] = [
  {
    label: "12-month price",
    value: "€2.49M – €2.62M",
    detail: "Median €2.55M · +8.5%",
    band: { from: 30, to: 77, median: 52 },
  },
  {
    label: "Liquidity score",
    value: "7.8 / 10",
    detail: "Days-on-market 38–55 (P50: 46)",
    band: { from: 26, to: 78, median: 60 },
  },
  {
    label: "Risk-adj. IRR (5Y)",
    value: "11.2%",
    detail: "Downside −2.4% · Upside 18.7%",
    band: { from: 22, to: 82, median: 55 },
  },
];

export default function PredictiveLayer() {
  return (
    <LayerCard
      id="predictive"
      name="predictive"
      title="Predictive layer"
      updated="Model v2026.03"
      basis="1,440 features"
      confidence="76%"
      confidenceTone="moderate"
    >
      <dl className="mt-5 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {FORECASTS.map((f) => (
          <div key={f.label} className="rounded-xl bg-sky-950 p-4">
            <dt className="text-xs uppercase tracking-wider text-lime-400">
              {f.label}
            </dt>
            <dd>
              <span className="mt-1.5 block text-xl font-bold text-white">
                {f.value}
              </span>
              <span className="mt-2 block text-xs text-white/60">
                {f.detail}
              </span>
              <span
                aria-hidden
                className="relative mt-5 block h-1.5 rounded-[3px] bg-white/10"
              >
                <span
                  className="absolute inset-y-0 rounded-[3px] bg-linear-to-r from-lime-400 to-emerald-400"
                  style={{
                    left: `${f.band.from}%`,
                    right: `${100 - f.band.to}%`,
                  }}
                />
                <span
                  className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-lime-400 bg-white"
                  style={{ left: `${f.band.median}%` }}
                />
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-xs text-slate-500">
        Confidence is moderate (76%) due to limited 5-year transaction history in
        the Cascais waterfront micro-segment. See{" "}
        <a href="#provenance" className="font-semibold text-sky-800 underline">
          model card →
        </a>
      </p>
    </LayerCard>
  );
}

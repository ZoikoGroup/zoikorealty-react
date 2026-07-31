import LayerCard from "./LayerCard";
import FactTile, { type Fact } from "./FactTile";

const FACTS: Fact[] = [
  {
    label: "Asking price",
    value: "€2,350,000",
    detail: "€5,704 / m²",
    source: "Listing",
  },
  {
    label: "All-in acquisition",
    value: "€2,578,625",
    detail: "+9.7% over price",
    source: "Calc",
  },
  {
    label: "Annual operating",
    value: "€18,400",
    detail: "IMI + insurance + maint.",
    source: "Calc",
  },
];

const SCENARIOS = [
  { label: "Long let", value: "4.4% net", detail: "conservative" },
  { label: "Tourist license", value: "6.8% net", detail: "+Alojamento Local" },
  { label: "Buy-to-flip 24m", value: "+12.5% IRR", detail: "at +6.5% appreciation" },
];

export default function FinancialLayer() {
  return (
    <LayerCard
      id="financial"
      name="financial"
      title="Financial layer"
      updated="Updated 2h ago"
      basis="6 sources"
      confidence="91%"
    >
      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {FACTS.map((f) => (
          <FactTile key={f.label} {...f} />
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-linear-73 from-sky-800 to-emerald-400 p-4.5">
          <p className="text-xs uppercase tracking-wider text-white/70">
            Gross yield · est.
          </p>
          <p className="mt-1.5 text-3xl font-bold text-white">5.2%</p>
          <p className="mt-4 text-xs text-white/70">
            Based on €122,200 / yr long-let comp basket (n=14)
          </p>
        </div>
        <div className="rounded-xl bg-linear-73 from-sky-950 to-sky-800 p-4.5">
          <p className="text-xs uppercase tracking-wider text-white/70">
            Net yield · est.
          </p>
          <p className="mt-1.5 text-3xl font-bold text-white">4.4%</p>
          <p className="mt-4 text-xs text-white/70">
            After IMI, mgmt 8%, vacancy 4%, AIMI
          </p>
        </div>
      </div>

      <h3 className="mt-8 text-xs font-bold uppercase tracking-wide text-sky-800">
        Scenario lab
      </h3>
      <dl className="mt-3.5 grid gap-2.5 sm:grid-cols-3">
        {SCENARIOS.map((s) => (
          <div
            key={s.label}
            className="rounded-[10px] bg-slate-50 p-3.5 outline-1 -outline-offset-1 outline-blue-100"
          >
            <dt className="text-xs font-bold text-sky-800">{s.label}</dt>
            <dd>
              <span className="mt-1.5 block text-lg font-bold text-sky-950">
                {s.value}
              </span>
              <span className="mt-2 block text-xs text-slate-500">
                {s.detail}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </LayerCard>
  );
}

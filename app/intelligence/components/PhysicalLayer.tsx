import LayerCard from "./LayerCard";
import FactTile, { type Fact } from "./FactTile";

const FACTS: Fact[] = [
  {
    label: "Built area",
    value: "412 m²",
    detail: "Across 3 floors + basement",
    source: "Cadastre",
  },
  {
    label: "Plot",
    value: "1,840 m²",
    detail: "Coastal-facing",
    source: "IGT",
  },
  {
    label: "Year built",
    value: "2018",
    detail: "Renovated 2024",
    source: "CMC",
  },
  {
    label: "Energy",
    value: "A · 156 kWh/m²·y",
    detail: "Solar + heat pump",
    source: "ADENE",
  },
  {
    label: "Climate risk",
    value: "Low (2/10)",
    detail: "Flood, fire, erosion modeled",
    source: "EU JRC",
  },
  {
    label: "Condition score",
    value: "9.1 / 10",
    detail: "Based on 24 inspection points",
    source: "Inspection",
  },
];

/** Share of the Cascais comparable set in each EPC band. */
const EPC = [
  { band: "A", pct: 22, note: "22% · this 1", bar: "bg-linear-to-r from-green-400 to-lime-400" },
  { band: "B", pct: 28, note: "28%", bar: "bg-lime-400" },
  { band: "C", pct: 31, note: "31%", bar: "bg-amber-400" },
  { band: "D", pct: 13, note: "13%", bar: "bg-orange-400" },
  { band: "E+", pct: 6, note: "6%", bar: "bg-orange-500" },
];

export default function PhysicalLayer() {
  return (
    <LayerCard
      id="physical"
      name="physical"
      title="Physical layer"
      updated="Updated 1d ago"
      basis="3 sources"
      confidence="88%"
    >
      {/* Placeholder for the 3D plan render. */}
      <div className="mt-5 grid h-60 place-items-center rounded-xl bg-linear-to-b from-sky-950 to-sky-800">
        <p className="text-xl font-bold text-white">3D Plan Image</p>
      </div>

      <div className="mt-5 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {FACTS.map((f) => (
          <FactTile key={f.label} {...f} />
        ))}
      </div>

      <h3 className="mt-8 text-xs font-bold uppercase tracking-wide text-sky-800">
        EPC distribution · Cascais comparable set
      </h3>
      <dl className="mt-3.5 space-y-1.5">
        {EPC.map((e) => (
          <div key={e.band} className="flex items-center gap-4">
            <dt className="w-5 shrink-0 text-xs font-bold text-sky-950">
              {e.band}
            </dt>
            <dd className="flex flex-1 items-center gap-4">
              <span className="flex-1">
                <span
                  aria-hidden
                  className={`block h-2.5 rounded-sm ${e.bar}`}
                  style={{ width: `${e.pct}%` }}
                />
              </span>
              <span className="w-24 shrink-0 text-xs text-slate-500">
                {e.note}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </LayerCard>
  );
}

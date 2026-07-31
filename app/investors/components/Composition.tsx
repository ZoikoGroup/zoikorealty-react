import Card from "./Card";

const CLASSES = [
  { swatch: "bg-sky-800", label: "Residential", count: "5 assets", value: "€32.0M · 38%" },
  { swatch: "bg-emerald-400", label: "Commercial", count: "3 assets", value: "€20.2M · 24%" },
  { swatch: "bg-lime-400", label: "Hospitality", count: "2 assets", value: "€15.2M · 18%" },
  { swatch: "bg-yellow-600", label: "Logistics", count: "1 asset", value: "€10.1M · 12%" },
  { swatch: "bg-indigo-500", label: "Land · dev.", count: "1 asset", value: "€6.7M · 8%" },
];

export default function Composition() {
  return (
    <Card title="Composition" meta="· by asset class">
      <div className="mt-6 flex justify-center">
        <div className="flex size-32 flex-col items-center justify-center rounded-full outline-1 -outline-offset-1 outline-blue-100">
          <p className="text-4xl font-extrabold leading-none text-sky-950">12</p>
          <p className="mt-2 text-[10px] font-semibold tracking-widest text-slate-500">
            ASSETS
          </p>
        </div>
      </div>

      <dl className="mt-7 space-y-2">
        {CLASSES.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span
              aria-hidden
              className={`size-3 shrink-0 rounded-[3px] ${c.swatch}`}
            />
            <dt className="flex-1 text-xs font-bold text-sky-950">{c.label}</dt>
            <dd className="flex shrink-0 items-baseline gap-3 text-xs">
              <span className="text-slate-500">{c.count}</span>
              <span className="font-bold text-sky-950">{c.value}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

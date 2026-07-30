import Image from "next/image";

const LEGEND = [
  { label: "Hot (>+5% y/y)", dot: "bg-orange-500" },
  { label: "Active", dot: "bg-lime-400" },
  { label: "Cooling / negative", dot: "bg-slate-500" },
  { label: "Not modeled", dot: "bg-slate-300" },
];

/** Supplied render, 831 x 467. Sits over the export's slate placeholder. */
const MAP_SRC = "/markets/world-map.png";

export default function MapCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-blue-100">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-100 p-5">
        <div>
          <p className="text-sm font-bold text-slate-900">
            Global Markets · April 2026
          </p>
          <p className="mt-1.5 text-xs text-slate-500">
            Overlay: 12-month price change · Click a market to focus
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="flex items-center gap-2 rounded-[100px] bg-white px-3 py-1 outline-1 -outline-offset-1 outline-blue-100">
            <span className="size-1.5 rounded-[3px] bg-green-400" />
            <span className="text-xs font-medium tracking-tight text-sky-800">
              Data fresh
            </span>
          </span>
          <span className="rounded-[100px] bg-white px-3 py-1 text-xs font-medium tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-blue-100">
            As of 22 Apr 2026
          </span>
        </div>
      </div>

      <div className="relative aspect-831/467 bg-linear-to-b from-slate-50 to-slate-200">
        <Image
          src={MAP_SRC}
          alt="Global market heatmap, 12-month price change overlay"
          fill
          sizes="(min-width: 1024px) 832px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-blue-100 px-5 py-3">
        <span className="text-xs font-bold text-sky-950">Legend</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:ml-auto">
          {LEGEND.map((l) => (
            <span key={l.label} className="flex items-center gap-2">
              <span className={`size-2.5 rounded-[5px] ${l.dot}`} />
              <span className="text-xs text-slate-500">{l.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

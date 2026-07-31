export type LayerName =
  | "legal"
  | "financial"
  | "physical"
  | "market"
  | "predictive";

/** Tile colour per layer, matching the icon chips in the frame. */
const CHIPS: Record<LayerName, string> = {
  legal: "bg-slate-50 text-sky-800",
  financial: "bg-linear-to-br from-green-400 to-green-600 text-white",
  physical: "bg-sky-950 text-lime-400",
  market: "bg-emerald-400/20 text-teal-600",
  predictive: "bg-lime-400/20 text-lime-700",
};

const PATHS: Record<LayerName, React.ReactNode> = {
  legal: (
    <>
      <path d="M4.5 2.25h6l3 3v8.5a.75.75 0 0 1-.75.75h-8.25a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75Z" />
      <path d="M10.5 2.25v3h3M6.5 8.5h5M6.5 11h3" />
    </>
  ),
  financial: (
    <>
      <path d="M2.25 11.25 6 7.5l2.5 2.5 5.25-5.25" />
      <path d="M10.5 4.75h3.25V8" />
    </>
  ),
  physical: (
    <>
      <path d="M2.25 6.75 8 2.25l5.75 4.5v6.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75Z" />
      <path d="M6.75 14v-4h2.5v4" />
    </>
  ),
  market: (
    <>
      <path d="M2.75 13.25V9M6.25 13.25V4.5M9.75 13.25v-6M13.25 13.25V2.75" />
    </>
  ),
  predictive: (
    <>
      <path d="M2.25 10.25 5 7l2.25 2.25L10 5.5l3.75 3.75" />
      <path d="M2.25 13.25h11.5" />
    </>
  ),
};

export default function LayerIcon({ name }: { name: LayerName }) {
  return (
    <span
      aria-hidden
      className={`grid size-8 shrink-0 place-items-center rounded-lg ${CHIPS[name]}`}
    >
      <svg
        viewBox="0 0 16 16"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PATHS[name]}
      </svg>
    </span>
  );
}

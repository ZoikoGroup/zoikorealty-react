export type Fact = {
  label: string;
  value: string;
  detail: string;
  /** Provenance chip, e.g. "Land Reg" or "Calc". */
  source: string;
  /** Amber treatment for facts that carry a caveat. */
  flagged?: boolean;
};

export default function FactTile({
  label,
  value,
  detail,
  source,
  flagged,
}: Fact) {
  return (
    <div
      className={
        flagged
          ? "rounded-[10px] border-l-[2.68px] border-amber-700 bg-amber-700/5 px-3.5 py-3"
          : "rounded-[10px] bg-slate-50 px-3.5 py-3"
      }
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-xs uppercase tracking-wide text-slate-500">
          {label}
        </h4>
        <span
          className={
            flagged
              ? "shrink-0 rounded-sm bg-amber-700/10 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide text-amber-700"
              : "shrink-0 rounded-sm bg-sky-800/10 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide text-sky-800"
          }
        >
          {source}
        </span>
      </div>
      <p className="mt-1 text-base font-bold text-sky-950">{value}</p>
      <p className="mt-1.5 text-xs text-slate-500">{detail}</p>
    </div>
  );
}

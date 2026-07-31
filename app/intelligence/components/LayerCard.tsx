import type { ReactNode } from "react";

import LayerIcon, { type LayerName } from "./LayerIcon";

export default function LayerCard({
  id,
  name,
  title,
  updated,
  /** Bolded middle term, e.g. "4 sources" or "14 comps". */
  basis,
  confidence,
  /** Sub-90% confidence reads amber in the frame, not green. */
  confidenceTone = "good",
  children,
}: {
  id: string;
  name: LayerName;
  title: string;
  updated: string;
  basis: string;
  confidence: string;
  confidenceTone?: "good" | "moderate";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-blue-100"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-blue-100 pb-4">
        <h2 className="flex items-center gap-2.5 text-xl font-bold text-sky-950">
          <LayerIcon name={name} />
          {title}
        </h2>
        <p className="text-xs text-slate-500">
          {updated} · <span className="font-semibold text-sky-950">{basis}</span>{" "}
          · Confidence{" "}
          <span
            className={
              confidenceTone === "good"
                ? "font-semibold text-green-600"
                : "font-semibold text-yellow-600"
            }
          >
            {confidence}
          </span>
        </p>
      </div>
      {children}
    </section>
  );
}

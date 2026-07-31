import type { ReactNode } from "react";

export default function StepCard({
  /** "✓" for done, a step number for the one in progress, "∞" for ongoing. */
  marker,
  done,
  title,
  meta,
  /** The step in progress carries a sky-800 border instead of the pale one. */
  active,
  children,
}: {
  marker: string;
  done?: boolean;
  title: string;
  meta: string;
  active?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className={
        active
          ? "rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-sky-800"
          : "rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-blue-100"
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-blue-100 pb-4">
        <h2 className="flex items-center gap-2.5 text-lg font-bold text-sky-950">
          <span
            aria-hidden
            className={
              done
                ? "grid size-7 shrink-0 place-items-center rounded-full bg-green-400 text-xs font-bold text-white"
                : "grid size-7 shrink-0 place-items-center rounded-full bg-sky-800 text-xs font-bold text-white"
            }
          >
            {marker}
          </span>
          {title}
        </h2>
        <p className="text-xs text-slate-500">{meta}</p>
      </div>
      {children}
    </section>
  );
}

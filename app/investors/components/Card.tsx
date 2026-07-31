import type { ReactNode } from "react";

/** Shared panel shell: title on the left, muted qualifier on the right. */
export default function Card({
  title,
  meta,
  children,
  className = "",
}: {
  title: string;
  meta?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-blue-100 ${className}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-sm font-bold text-sky-950">{title}</h2>
        {meta && <p className="text-xs font-medium text-slate-500">{meta}</p>}
      </div>
      {children}
    </section>
  );
}

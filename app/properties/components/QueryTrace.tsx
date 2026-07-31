import type { ReactNode } from "react";

type Step = {
  title: string;
  detail: ReactNode;
  /** Completed steps show a tick; the rest show their step number. */
  done?: boolean;
  /** The step currently executing — highlighted lime. */
  current?: boolean;
};

const STEPS: Step[] = [
  {
    title: "Intent parsed",
    detail: "residential-waterfront-investment-acquisition · confidence 0.96",
    done: true,
  },
  {
    title: "Constraints extracted",
    detail: (
      <>
        8 constraints · 2 suggested from{" "}
        <code className="rounded-[3px] bg-white/10 px-1.5 py-0.5 font-mono text-lime-400">
          peer-query
        </code>
      </>
    ),
    done: true,
  },
  {
    title: "Jurisdiction resolved",
    detail: "PT, AE · rule-packs v2026.04 · FOP gate enforced",
    done: true,
  },
  {
    title: "Candidate retrieval",
    detail: "14,218 indexed → 1,103 jurisdiction-eligible → 412 filtered",
    done: true,
  },
  {
    title: "Ranking & explanation",
    detail: "Hybrid: BM25 + embeddings + constraint score + confidence bonus",
    current: true,
  },
  {
    title: "Result delivery",
    detail: "De-identified until S2 reached · PIP link gated",
  },
];

export default function QueryTrace() {
  return (
    <aside
      id="query-trace"
      className="h-fit rounded-2xl bg-sky-950 p-5 xl:sticky xl:top-6"
    >
      <h2 className="text-xs font-bold uppercase tracking-wider text-lime-400">
        ⚙ Query trace
      </h2>

      <ol className="relative mt-4 space-y-4">
        {/* Rail behind the step markers — centred on the 20px marker column. */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[9.5px] top-2 w-0.5 bg-white/10"
        />
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative flex gap-4">
            <span
              className={
                step.done || step.current
                  ? "z-10 grid size-5 shrink-0 place-items-center rounded-full bg-lime-400/25 text-xs text-lime-400"
                  : "z-10 grid size-5 shrink-0 place-items-center rounded-full bg-white/10 text-xs text-white/50"
              }
            >
              {step.done ? "✓" : i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-white">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-4 text-white/60">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-[10px] bg-lime-400/10 p-3 outline-1 -outline-offset-1 outline-lime-400/25">
        <h3 className="text-xs font-bold uppercase leading-4 tracking-wide text-lime-400">
          RAG Guardrails active
        </h3>
        <p className="mt-2 text-xs leading-4 text-white/80">
          Every numeric fact (price, yield, tax) is source-linked via the
          governed data layer. No free-text generation of factual claims. See{" "}
          {/* Data-governance page is not built, so this stays unlinked. */}
          <span className="text-lime-400">Data Governance →</span>
        </p>
      </div>
    </aside>
  );
}

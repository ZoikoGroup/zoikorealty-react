import StepCard from "./StepCard";

const CHECKS = ["PEP", "Sanctions", "Adverse", "Court"];

/** false = flagged for review, shown amber. */
const PARTIES: { name: string; results: boolean[] }[] = [
  { name: "Marcus Lee (S3)", results: [true, true, true, true] },
  { name: "Emma Walsh (S2)", results: [true, true, true, true] },
  { name: "Yusuf Chen (S3)", results: [true, true, false, true] },
  { name: "ZR Capital Partners I LP", results: [true, true, true, true] },
];

export default function ContinuousScreening() {
  return (
    <StepCard
      marker="∞"
      done
      title="Continuous screening"
      meta="All parties · refreshed every 24h · last sweep 09:14 today"
    >
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-x-2 border-spacing-y-1.5 text-left">
          <thead>
            <tr>
              <th className="w-3/5" />
              {CHECKS.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="px-2 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PARTIES.map((p) => (
              <tr key={p.name}>
                <th
                  scope="row"
                  className="rounded-lg bg-white px-3 py-2.5 text-left text-xs font-semibold text-sky-950 outline-1 -outline-offset-1 outline-blue-100"
                >
                  {p.name}
                </th>
                {p.results.map((ok, i) => (
                  <td
                    key={CHECKS[i]}
                    className={
                      ok
                        ? "rounded-lg bg-green-400/10 px-2 py-2.5 text-center text-xs text-green-600"
                        : "rounded-lg bg-amber-700/10 px-2 py-2.5 text-center text-xs text-amber-700"
                    }
                  >
                    <span className="sr-only">
                      {CHECKS[i]}: {ok ? "clear" : "flagged"}
                    </span>
                    <span aria-hidden>{ok ? "✓" : "!"}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 rounded-lg bg-amber-700/10 px-3.5 py-2.5 text-xs text-amber-700">
        <span className="font-bold">!</span> Adverse media match for{" "}
        <span className="font-bold">Yusuf Chen</span> resolved by AML officer
        (false positive — name collision). Audit-logged 12 Mar.
      </p>
    </StepCard>
  );
}

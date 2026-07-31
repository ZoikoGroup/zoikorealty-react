import Image from "next/image";

const PASSPORT_ROWS = [
  { label: "ZoikoID", value: "ZID-7K2-9F4-AC8" },
  { label: "Trust state", value: "S3 · KYC" },
  { label: "Risk", value: "Low (2/10)" },
  { label: "Last screening", value: "09:14 today" },
  { label: "Next refresh", value: "09:14 tomorrow" },
  { label: "Documents valid", value: "4 / 4 ✓" },
  { label: "Restricted (SX)", value: "No" },
];

const UNLOCKS = [
  { label: "Browse markets & heatmaps", state: "S0", locked: false },
  { label: "Save searches & alerts", state: "S1", locked: false },
  { label: "Full Property Intelligence Pages", state: "S2", locked: false },
  { label: "Make offers · Open Deal Room", state: "S3", locked: false },
  { label: "PAMS · Treasury wallet · Escrow", state: "S4", locked: true },
  {
    label: "Multi-sig · API · institutional",
    state: "S5",
    locked: true,
    emphasis: true,
  },
];

export default function DigitalPassport() {
  return (
    <aside className="flex flex-col gap-4 xl:sticky xl:top-6">
      {/* to-br, not the export's `bg-linear-41`: Figma's rotation maps to a
          CSS angle that puts the teal top-right, but the frame has navy at the
          top fading to teal at the bottom-right. */}
      <section className="overflow-hidden rounded-2xl bg-linear-to-br from-sky-950 via-sky-800 via-60% to-emerald-400 p-5.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
            ZoikoID · Digital passport
          </h2>
          <span className="flex items-center gap-1.5 rounded-[100px] bg-lime-400/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-lime-400">
            <span aria-hidden className="size-1.5 rounded-full bg-lime-400" />
            S3 · KYC complete
          </span>
        </div>

        <span
          aria-hidden
          className="mt-6 grid size-16 place-items-center rounded-full bg-linear-to-br from-lime-400 to-white text-xl font-extrabold text-sky-950"
        >
          ML
        </span>
        <h3 className="mt-4 text-lg font-bold text-white">Marcus Lee</h3>
        <p className="mt-1 text-xs text-white/70">
          Singapore · Investor account · since 14 Mar 2026
        </p>

        <dl className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
          {PASSPORT_ROWS.map((r) => (
            <div key={r.label} className="flex items-center gap-3 text-xs">
              <dt className="flex-1 text-white/60">{r.label}</dt>
              <dd className="font-semibold text-white">{r.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 border-t border-white/10 pt-4 text-[10px] text-white/50">
          SHA-256 · 8a4f...12cc · attested 14 Mar 09:24
        </p>
      </section>

      <section className="rounded-2xl bg-linear-to-br from-status-green to-emerald-400 p-5">
        <h2 className="text-xs font-semibold text-white/80">Next milestone</h2>
        <p className="mt-1.5 text-lg font-bold text-white">
          Reach S4 · Source-of-Funds
        </p>
        <p className="mt-2 text-xs leading-5 text-white/80">
          Upload tax return + AML attestation to unlock Deal Room funding, PAMS
          access, and Treasury wallet.
        </p>
        <button
          type="button"
          className="mt-4 rounded-md bg-white px-3.5 py-2 text-xs font-semibold tracking-tight text-sky-950 transition-opacity hover:opacity-90"
        >
          Continue Step 4 →
        </button>
      </section>

      <section className="rounded-2xl bg-white p-5 outline-1 -outline-offset-1 outline-blue-100">
        <h2 className="text-xs font-bold uppercase tracking-wide text-sky-800">
          What each state unlocks
        </h2>
        <ul className="mt-4 space-y-3">
          {UNLOCKS.map((u) => (
            <li key={u.state} className="flex items-center gap-3 text-xs">
              {u.locked ? (
                <Image
                  src="/verify-identity/lock.png"
                  alt=""
                  width={13}
                  height={13}
                  className="shrink-0"
                />
              ) : (
                <span aria-hidden className="text-green-600">
                  ✓
                </span>
              )}
              <span
                className={u.locked ? "flex-1 text-slate-400" : "flex-1 text-slate-900"}
              >
                {u.label}
              </span>
              <span
                className={
                  u.emphasis
                    ? "shrink-0 rounded-[100px] bg-sky-950 px-2 py-0.5 text-[10px] font-semibold text-white"
                    : "shrink-0 rounded-[100px] bg-sky-800/10 px-2 py-0.5 text-[10px] font-semibold text-sky-800"
                }
              >
                {u.state}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

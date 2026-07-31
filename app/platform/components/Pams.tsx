import Container from "./Container";

const KPIS = [
  { label: "AUM", value: "$148.2M", delta: "+4.8%" },
  { label: "NOI (TTM)", value: "$9.4M", delta: "+6.1%" },
  { label: "Occupancy", value: "94.1%", delta: "+1.2" },
];

// 12-month NAV bars — heights read off the Figma y-offsets (taller = later).
const NAV_BARS = [56, 59, 55, 64, 69, 66, 71, 77, 74, 82, 86, 90];

// Read off the full-page render — the code export was truncated mid-row.
const ALLOCATION = [
  { label: "Residential", value: "42%" },
  { label: "Commercial", value: "33%" },
  { label: "Logistics", value: "18%" },
  { label: "Land", value: "7%" },
];

export default function Pams() {
  return (
    <section className="bg-slate-50 py-16 lg:py-[96px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,551px)_minmax(0,665px)] lg:gap-x-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Post-close operations
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-sky-950 sm:text-4xl lg:text-[41px] lg:leading-[48px]">
              Portfolio you can actually govern.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-500">
              PAMS is built for institutional operators: real-time asset
              registers, valuation reconciliation, covenant monitoring, scenario
              lab, distribution batches, and investor-ready reporting —
              integrated with Treasury.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/investors"
                className="rounded-md bg-sky-800 px-6 py-3 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-sky-900"
              >
                Open PAMS →
              </a>
              {/* No Treasury route yet — button, not a link to nowhere. */}
              <button
                type="button"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-slate-50"
              >
                Treasury &amp; Ledger
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 outline-1 -outline-offset-1 outline-blue-100">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold text-sky-950">
                Portfolio · ZR Capital Partners I
              </p>
              <span className="flex items-center gap-2 rounded-[100px] bg-green-400/10 px-3 py-1 outline-1 -outline-offset-1 outline-green-400/30">
                <span className="size-1.5 rounded-[3px] bg-green-600" />
                <span className="text-xs font-medium tracking-tight text-green-600">
                  Healthy
                </span>
              </span>
            </div>

            <dl className="mt-5 grid gap-4 sm:grid-cols-3">
              {KPIS.map((k) => (
                <div key={k.label} className="rounded-[10px] bg-slate-50 p-3.5">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">
                    {k.label}
                  </dt>
                  <dd className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-sky-950">
                      {k.value}
                    </span>
                    <span className="text-xs font-bold text-green-600">
                      {k.delta}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-xs tracking-tight text-slate-500">
                NAV trajectory · 12 months
              </p>
              <p className="text-xs tracking-tight text-slate-500">
                Stress-tested: −15% rates, +40bps vacancy
              </p>
            </div>

            <div className="mt-4 flex h-36 items-end gap-2 border-t border-blue-100 pt-4">
              {NAV_BARS.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  // Sampled from the frame. The export said emerald-400 →
                  // sky-800, but stock emerald-400 (#34D399) renders bright
                  // green where the design is teal — likely because the brand
                  // emerald token is a teal. Hard-coded until that's confirmed.
                  className="flex-1 rounded-t-sm bg-linear-to-b from-[#5CC0BE] to-[#3F8FA9]"
                />
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {ALLOCATION.map((a) => (
                <div key={a.label} className="rounded-lg bg-slate-50 p-2.5">
                  <dt className="text-[10px] uppercase tracking-wide text-slate-500">
                    {a.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-bold text-sky-950">
                    {a.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

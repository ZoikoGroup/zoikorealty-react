import Container from "./Container";

const KPIS = [
  { label: "NAV", value: "€84.2M", delta: "↑ +€2.1M (2.6%) QoQ" },
  { label: "Assets", value: "12", delta: "11 stabilized · 1 in DD" },
  { label: "Net yield (TTM)", value: "5.1%", delta: "↑ +20bps vs prior" },
  { label: "Occupancy", value: "96.8%", delta: "↑ +1.4pp QoQ" },
  { label: "IRR (since inception)", value: "14.7%", delta: "vs benchmark 9.2%" },
];

export default function PortfolioHeader() {
  return (
    // Same treatment as the platform hero: solid navy base with a soft wash
    // upper-left, since the export's transparent radial alone renders white.
    <section className="relative overflow-hidden bg-sky-950">
      <div
        className="absolute inset-0 bg-radial-[at_0%_0%] from-emerald-400/20 to-transparent to-50%"
        aria-hidden
      />

      <Container className="relative pb-10 pt-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-3 text-xs">
            <li>
              <a href="/platform" className="text-white/90 hover:underline">
                Platform
              </a>
            </li>
            <li aria-hidden className="text-white/30">
              ›
            </li>
            <li className="text-white/60" aria-current="page">
              Portfolio
            </li>
          </ol>
        </nav>

        <p className="mt-4 text-xs font-medium uppercase tracking-widest text-lime-400">
          PAMS · Portfolio Asset Management System
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          ZR Capital Partners I — Global Portfolio
        </h1>
        <p className="mt-3 text-xs text-white/70">
          12 assets across 6 jurisdictions · Quarterly close: 31 Mar 2026 · Last
          reval 18 Mar (94% confidence)
        </p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {KPIS.map((k) => (
            <div
              key={k.label}
              className="rounded-xl bg-white/5 p-4 outline-1 -outline-offset-1 outline-white/10 backdrop-blur-xs"
            >
              <dt className="text-xs uppercase tracking-wider text-white/60">
                {k.label}
              </dt>
              <dd>
                <span className="mt-1.5 block text-xl font-bold text-white">
                  {k.value}
                </span>
                <span className="mt-2.5 block text-xs text-lime-400">
                  {k.delta}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

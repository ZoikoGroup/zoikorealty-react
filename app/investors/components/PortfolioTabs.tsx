import Container from "./Container";

const TABS = [
  "Overview",
  "Assets",
  "Performance",
  "Cashflow",
  "Risk & exposure",
  "Tax & reporting",
  "Benchmarks",
  "LP statements",
];

export default function PortfolioTabs() {
  return (
    <div className="border-b border-blue-100 bg-white">
      <Container>
        <div
          role="tablist"
          aria-label="Portfolio views"
          className="-mx-1 flex gap-2 overflow-x-auto py-3.5"
        >
          {TABS.map((t, i) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className={
                i === 0
                  ? "shrink-0 whitespace-nowrap rounded-lg bg-sky-950 px-3.5 py-2 text-xs text-white"
                  : "shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 text-xs text-neutral-700 transition-colors hover:bg-slate-50 hover:text-sky-800"
              }
            >
              {t}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}

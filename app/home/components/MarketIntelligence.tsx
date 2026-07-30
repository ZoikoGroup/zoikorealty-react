import Container from "./Container";

const MARKETS = [
  { city: "Dubai, UAE", yield: "7.2%", note: "High Yield · Eligible", tone: "bg-lime-400/20" },
  { city: "London, UK", yield: "4.1%", note: "Stable · Conditional", tone: "bg-green-600/10" },
  { city: "Lagos, Nigeria", yield: "9.4%", note: "Emerging · High Risk", tone: "bg-lime-400/20" },
  { city: "Singapore", yield: "3.8%", note: "Premium · Restricted", tone: "bg-green-600/10" },
  { city: "New York, US", yield: "5.6%", note: "Stable · Open", tone: "bg-lime-400/20" },
  { city: "Sydney, AU", yield: "3.4%", note: "Low Yield · Open", tone: "bg-slate-200" },
];

export default function MarketIntelligence() {
  return (
    <section className="bg-emerald-400 py-16 lg:py-[65px]">
      <Container>
        <h2 className="text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[48.30px]">
          Market Intelligence Before Discovery
        </h2>
        <p className="mx-auto mt-5 max-w-[744px] text-center text-sm leading-7 text-white/50 sm:text-base">
          Understand structural market dynamics before browsing inventory. Yield
          surfaces, regulatory friction, and liquidity diagnostics across global
          markets.
        </p>

        <div className="mx-auto mt-12 max-w-[1018px] rounded-[20px] bg-white p-7 outline-1 -outline-offset-1 outline-lime-400/40">
          <h3 className="text-center text-base font-medium leading-6 text-neutral-700/90">
            Global Market Heatmap Yield Signal
          </h3>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETS.map((m) => (
              <li
                key={m.city}
                className={`rounded-sm p-4 ${m.tone}`}
              >
                <p className="text-xs leading-5 text-neutral-700">{m.city}</p>
                <p className="mt-1 text-base font-medium leading-6 text-lime-400">
                  {m.yield}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-neutral-700">
                  {m.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

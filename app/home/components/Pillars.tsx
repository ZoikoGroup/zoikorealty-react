import Container from "./Container";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    num: "01",
    title: "Intelligence",
    body: "AI-powered discovery, forecasting, risk scoring, and market visibility that moves ahead of inventory.",
    points: [
      "Natural-language property search",
      "AI yield and risk estimation",
      "Jurisdiction-aware routing",
      "Portfolio optimization signals",
    ],
  },
  {
    num: "02",
    title: "Trust",
    body: "Identity, data provenance, financial visibility, and governance built into the architecture — not added after.",
    points: [
      "ZoikoID identity layer",
      "Registry-linked data provenance",
      "ZoikoAssure compliance logic",
      "Transparent audit ledger",
    ],
  },
  {
    num: "03",
    title: "Execution",
    body: "Transaction coordination, compliance gates, portfolio actionability, and institutional workflows in one governed surface.",
    points: [
      "Multi-jurisdiction transaction flow",
      "Compliance-native blocking logic",
      "Portfolio intelligence layer",
      "Institutional deal workflows",
    ],
  },
];

export default function Pillars() {
  return (
    <section className="bg-sky-950 py-16 lg:py-[58px]">
      <Container>
        <SectionHeading
          title="Intelligence. Trust. Execution."
          subtitle="Most platforms show properties. Zoiko structures the decision, governs the process, and improves the operating outcome."
          tone="onDark"
          subtitleWidth="max-w-[640px]"
          subtitleClassName="italic"
        />

        <div className="mt-12 grid gap-8 lg:mt-[62px] lg:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="flex h-full flex-col rounded-xl p-8 outline-1 -outline-offset-1 outline-lime-400/60"
            >
              <p className="text-[44px] font-bold leading-none text-lime-400">
                {p.num}
              </p>
              <h3 className="mt-6 text-lg font-semibold leading-6 text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-white/70">
                {p.body}
              </p>

              <ul className="mt-auto space-y-3 pt-8">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2.5 text-xs leading-5 text-white/70"
                  >
                    <span className="text-lime-400" aria-hidden>
                      →
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

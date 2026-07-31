import Container from "./Container";
import SectionHeading from "./SectionHeading";

type Signal = "Hold" | "Compliance Review" | "Reduce Exposure" | "Opportunity Add";

const SIGNAL_CLASSES: Record<Signal, string> = {
  Hold: "bg-amber-100 text-yellow-700",
  "Compliance Review": "bg-blue-100 text-emerald-400",
  "Reduce Exposure": "bg-red-100 text-orange-700",
  "Opportunity Add": "bg-green-100 text-green-400",
};

const COLUMNS = [
  "Asset",
  "Jurisdiction",
  "Value",
  "Yield",
  "Risk",
  "Confidence",
  "AI Signal",
];

type Row = {
  asset: string;
  assetClass: string;
  jurisdiction: string;
  value: string;
  yield: string;
  risk: string;
  confidence: string;
  signal: Signal;
};

const ROWS: Row[] = [
  {
    asset: "Downtown Tower 34B",
    assetClass: "Residential",
    jurisdiction: "Dubai, UAE",
    value: "Dynamic",
    yield: "7.2%",
    risk: "Low",
    confidence: "94%",
    signal: "Hold",
  },
  {
    asset: "Midtown Office 12F",
    assetClass: "Commercial",
    jurisdiction: "New York, US",
    value: "Dynamic",
    yield: "5.6%",
    risk: "Medium",
    confidence: "87%",
    signal: "Compliance Review",
  },
  {
    asset: "Victoria Island C",
    assetClass: "Multifamily",
    jurisdiction: "Lagos, Nigeria",
    value: "Dynamic",
    yield: "9.4%",
    risk: "High",
    confidence: "71%",
    signal: "Reduce Exposure",
  },
  {
    asset: "East London Dev Site",
    assetClass: "Development Land",
    jurisdiction: "London, UK",
    value: "Dynamic",
    yield: "4.1%",
    risk: "Low",
    confidence: "91%",
    signal: "Opportunity Add",
  },
  {
    asset: "Orchard Road Suite",
    assetClass: "Commercial",
    jurisdiction: "Singapore",
    value: "Dynamic",
    yield: "3.8%",
    risk: "Low",
    confidence: "96%",
    signal: "Hold",
  },
];

export default function PortfolioTable() {
  return (
    <section className="bg-slate-50 py-16 lg:py-[62px]">
      <Container>
        <SectionHeading
          title="From Transaction to Asset Operating Intelligence"
          subtitle="KPI visibility, AI rebalancing signals, and portfolio diagnostics for continuous asset management across jurisdictions."
          subtitleWidth="max-w-[600px]"
          subtitleClassName="text-sky-800/80"
        />

        <div className="mt-10 overflow-x-auto rounded-xl outline-1 -outline-offset-1 outline-blue-100">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="bg-sky-950">
                {COLUMNS.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="px-6 py-4 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {ROWS.map((r) => (
                <tr key={r.asset} className="border-b border-blue-100 last:border-0">
                  <td className="px-6 py-4">
                    <span className="block text-[13px] text-sky-950">
                      {r.asset}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-sky-700">
                      {r.assetClass}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-600">
                    {r.jurisdiction}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-600">
                    {r.value}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-600">
                    {r.yield}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-600">
                    {r.risk}
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-600">
                    {r.confidence}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-[100px] px-2.5 py-1 text-[10px] font-semibold leading-4 ${SIGNAL_CLASSES[r.signal]}`}
                    >
                      {r.signal}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

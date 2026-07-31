import Image from "next/image";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

type Pathway = {
  icon: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
  /** Only set where the destination page exists. */
  href?: string;
};

const PATHWAYS: Pathway[] = [
  {
    icon: "/home/icon-home.png",
    title: "Buyers & Global Families",
    body: "Relocation intelligence, international purchase support, and cross-border legal visibility.",
    points: [
      "Jurisdiction eligibility screening",
      "Cross-border ownership workflows",
      "Verified legal and financial intelligence",
    ],
    cta: "Start Buying Journey",
    href: "/properties",
  },
  {
    icon: "/home/layer-market.png",
    title: "Investors",
    body: "Yield-seeking and portfolio-building workflows with risk-scored, intelligence-backed discovery.",
    points: [
      "AI-filtered yield screening",
      "Portfolio intelligence dashboard",
      "Liquidity and exit diagnostics",
    ],
    cta: "Explore Investment Tools",
    href: "/investors",
  },
  {
    icon: "/home/layer-physical.png",
    title: "Developers & Operators",
    body: "Land discovery, project intelligence, and asset-operating visibility for active developers.",
    points: [
      "Development land screening",
      "Market absorption analytics",
      "Regulatory and planning intelligence",
    ],
    cta: "Developer Platform",
  },
  {
    icon: "/home/icon-bank.png",
    title: "Institutions",
    body: "Funds, family offices, lenders, and strategic capital — governance-grade intelligence and deal workflows.",
    points: [
      "API access and custom workflows",
      "Role-based governance and reporting",
      "Institutional deal-room surfaces",
    ],
    cta: "Request Institutional Access",
  },
];

export default function Pathways() {
  return (
    <section className="bg-white py-16 lg:py-[62px]">
      <Container>
        <SectionHeading
          title="Find Your Pathway Into the Platform"
          subtitle="Each audience enters a workflow built for their operational reality — not a generic homepage experience."
          subtitleWidth="max-w-[620px]"
          subtitleClassName="text-sky-800/80"
        />

        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PATHWAYS.map((p) => (
            <div
              key={p.title}
              className="flex h-full flex-col rounded-xl bg-white p-7 outline-1 -outline-offset-1 outline-blue-100"
            >
              <Image
                src={p.icon}
                alt=""
                width={28}
                height={28}
                className="object-contain"
              />
              <h3 className="mt-6 text-base font-semibold leading-6 text-sky-950">
                {p.title}
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-slate-500">
                {p.body}
              </p>

              <ul className="mt-6 space-y-2.5">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2 text-xs leading-5 text-sky-800"
                  >
                    <span className="text-sky-800/60" aria-hidden>
                      —
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Developer and institutional-access flows are not built, so
                  those two render as buttons rather than links to nowhere. */}
              <div className="mt-auto pt-8">
                {p.href ? (
                  <a
                    href={p.href}
                    className="block rounded-md py-3 text-center text-[13px] font-medium text-sky-800 outline-1 -outline-offset-1 outline-sky-800/40 transition-colors hover:bg-slate-50"
                  >
                    {p.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="block w-full rounded-md py-3 text-center text-[13px] font-medium text-sky-800 outline-1 -outline-offset-1 outline-sky-800/40 transition-colors hover:bg-slate-50"
                  >
                    {p.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "./Container";

// TRANSCRIBED FROM THE FULL-PAGE RENDER, not from a code export — this section
// sits past the point where the paste was truncated. Copy should be verified
// against the section frame.
type Tier = {
  tag: string;
  price: string;
  meta: string;
  features: string[];
  cta: string;
  /** Only set where the destination page exists. */
  href?: string;
  style: "outline" | "solid" | "featured";
};

const TIERS: Tier[] = [
  {
    tag: "Explorer",
    price: "Free",
    meta: "/ S0–S1",
    features: [
      "Public market views & heatmaps",
      "Search with de-identified results",
      "Jurisdiction eligibility quick-check",
      "Saved searches (1)",
    ],
    cta: "Start exploring",
    href: "/properties",
    style: "outline",
  },
  {
    tag: "Verified",
    price: "€49",
    meta: "/ mo · S2–S3",
    features: [
      "Full property intelligence (PIP)",
      "Confidence + provenance on every data point",
      "Saved searches (unlimited) & alerts",
      "Request a viewing / offer",
    ],
    cta: "Verify & unlock",
    href: "/verify-identity",
    style: "solid",
  },
  {
    tag: "Professional",
    price: "€299",
    meta: "/ mo · S4",
    features: [
      "Deal Room access (3 active / month)",
      "PAMS lite · up to 50 assets",
      "Treasury wallet & escrow",
      "Priority legal rule-pack updates",
      "API & export",
    ],
    cta: "Activate Professional",
    style: "featured",
  },
  {
    tag: "Institutional",
    price: "Custom",
    meta: "/ S4–S5",
    features: [
      "PAMS institutional · unlimited assets",
      "Dedicated Deal Rooms & notary rails",
      "SSO, audit exports, SLA",
      "Jurisdiction rule-pack co-design",
      "Dedicated success team",
    ],
    cta: "Talk to us",
    style: "outline",
  },
];

const CTA_CLASSES: Record<Tier["style"], string> = {
  outline:
    "text-sky-800 outline-1 -outline-offset-1 outline-blue-200 hover:bg-slate-50",
  solid: "bg-sky-950 text-white hover:bg-sky-900",
  featured:
    "bg-linear-to-r from-emerald-400 to-lime-400 text-white hover:opacity-90",
};

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-16 lg:py-[96px]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Access architecture
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-sky-950 sm:text-4xl lg:text-[41px] lg:leading-[48px]">
              Trust-progressive pricing
            </h2>
          </div>
          <p className="max-w-[479px] text-base leading-7 text-slate-500 lg:justify-self-end">
            Every tier corresponds to a ZoikoID trust state. What you see and
            what you can do grows as your verification deepens.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((t) => {
            const featured = t.style === "featured";
            return (
              <div
                key={t.tag}
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  featured
                    ? "bg-sky-950 outline-1 -outline-offset-1 outline-sky-950"
                    : "bg-white outline-1 -outline-offset-1 outline-blue-100"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-7 rounded-[100px] bg-linear-to-r from-emerald-400 to-lime-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}

                <p
                  className={`text-[11px] font-medium uppercase tracking-[0.08em] ${
                    featured ? "text-lime-400" : "text-slate-500"
                  }`}
                >
                  {t.tag}
                </p>

                <p className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`text-[28px] font-bold leading-9 ${
                      featured ? "text-white" : "text-sky-950"
                    }`}
                  >
                    {t.price}
                  </span>
                  <span
                    className={`text-xs ${
                      featured ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    {t.meta}
                  </span>
                </p>

                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2.5 text-xs leading-5 ${
                        featured ? "text-white/80" : "text-sky-950"
                      }`}
                    >
                      <span className="text-lime-400" aria-hidden>
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Professional activation and sales contact are not built,
                    so those two render as buttons, not links to nowhere. */}
                <div className="mt-auto pt-8">
                  {t.href ? (
                    <a
                      href={t.href}
                      className={`block rounded-md py-3 text-center text-[13px] font-medium transition-colors ${CTA_CLASSES[t.style]}`}
                    >
                      {t.cta}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`block w-full rounded-md py-3 text-center text-[13px] font-medium transition-colors ${CTA_CLASSES[t.style]}`}
                    >
                      {t.cta}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

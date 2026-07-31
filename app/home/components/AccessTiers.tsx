import Container from "./Container";
import SectionHeading from "./SectionHeading";

type Tier = {
  tag: string;
  name: string;
  blurb: string;
  features: { label: string; included: boolean }[];
  cta: string;
  /** Only set where the destination page exists. */
  href?: string;
  ctaStyle: "outline" | "solid" | "gradient";
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    tag: "S0 · Explorer",
    name: "Free",
    blurb: "No account required",
    features: [
      { label: "Preview property discovery cards", included: true },
      { label: "High-level market intelligence", included: true },
      { label: "Platform pathway exploration", included: true },
      { label: "Full legal & financial signals", included: false },
      { label: "Compare workflows", included: false },
      { label: "Portfolio tools", included: false },
    ],
    cta: "Create Free Account",
    ctaStyle: "outline",
  },
  {
    tag: "S2 · Verified",
    name: "Monthly Access",
    blurb: "Identity-complete access",
    features: [
      { label: "Everything in Explorer", included: true },
      { label: "Expanded property intelligence", included: true },
      { label: "Digital Twin layer access", included: true },
      { label: "Execution-readiness checks", included: true },
      { label: "Save searches & watchlists", included: true },
      { label: "Advanced portfolio tools", included: false },
    ],
    cta: "Complete Verification",
    href: "/verify-identity",
    ctaStyle: "solid",
    popular: true,
  },
  {
    tag: "S3 · Professional",
    name: "Usage-Based",
    blurb: "Advanced analytics access",
    features: [
      { label: "Everything in Verified", included: true },
      { label: "Portfolio intelligence dashboard", included: true },
      { label: "Compare & scenario tools", included: true },
      { label: "Structured deal workflows", included: true },
      { label: "Compliance and export controls", included: true },
      { label: "API & enterprise governance", included: false },
    ],
    cta: "Upgrade to Professional",
    ctaStyle: "outline",
  },
  {
    tag: "S4 · Institutional",
    name: "Custom",
    blurb: "Enterprise governance",
    features: [
      { label: "Everything in Professional", included: true },
      { label: "API and custom workflows", included: true },
      { label: "Role-based access controls", included: true },
      { label: "Governance reporting suite", included: true },
      { label: "Deal-room surfaces", included: true },
      { label: "Dedicated onboarding support", included: true },
    ],
    cta: "Request Institutional Access",
    ctaStyle: "gradient",
  },
];

const CTA_CLASSES: Record<Tier["ctaStyle"], string> = {
  outline:
    "text-sky-950 outline-1 -outline-offset-1 outline-blue-200 hover:bg-slate-50",
  solid: "bg-sky-800 text-white hover:bg-sky-900",
  gradient:
    "bg-linear-to-r from-emerald-400 to-lime-400 text-white hover:opacity-90",
};

export default function AccessTiers() {
  return (
    <section className="bg-slate-50 py-16 lg:py-[62px]">
      <Container>
        <SectionHeading
          title="Access Architecture Built Around Trust Progression"
          subtitle="Identity verification unlocks intelligence depth — not arbitrary paywalls. Each tier reflects what governance and data infrastructure makes possible."
          subtitleWidth="max-w-[640px]"
        />

        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((t) => (
            <div
              key={t.tag}
              className={`flex h-full flex-col overflow-hidden rounded-xl bg-white ${
                t.popular
                  ? "outline-2 -outline-offset-2 outline-sky-800"
                  : "outline-1 -outline-offset-1 outline-blue-100"
              }`}
            >
              {t.popular && (
                <p className="bg-sky-800 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-lime-400">
                  Most Popular
                </p>
              )}

              <div className="flex flex-1 flex-col p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-lime-600">
                  {t.tag}
                </p>
                <h3 className="mt-3 text-[26px] font-semibold leading-8 text-sky-800">
                  {t.name}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {t.blurb}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {t.features.map((f) => (
                    <li
                      key={f.label}
                      className={`flex gap-2.5 text-[13px] leading-5 ${
                        f.included ? "text-sky-950" : "text-slate-400"
                      }`}
                    >
                      <span
                        className={f.included ? "text-lime-600" : "text-slate-300"}
                        aria-hidden
                      >
                        {f.included ? "✓" : "–"}
                      </span>
                      <span>{f.label}</span>
                    </li>
                  ))}
                </ul>

                {/* Account creation, upgrade and institutional access are not
                    built, so those render as buttons, not links to nowhere. */}
                <div className="mt-auto pt-8">
                  {t.href ? (
                    <a
                      href={t.href}
                      className={`block rounded-md py-3 text-center text-[13px] font-medium transition-colors ${CTA_CLASSES[t.ctaStyle]}`}
                    >
                      {t.cta}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`block w-full rounded-md py-3 text-center text-[13px] font-medium transition-colors ${CTA_CLASSES[t.ctaStyle]}`}
                    >
                      {t.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

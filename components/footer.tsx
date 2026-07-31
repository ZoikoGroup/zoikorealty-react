import Image from "next/image";
import Link from "next/link";

/** Wordmark, 136 x 41. */
const LOGO_SRC = "/logo.png";

type Item = { label: string; href?: string };

/**
 * Built routes: /, /platform, /market, /properties, /investors, /intelligence,
 * /verify-identity. Entries without an href render as plain text — nothing
 * points at a page that does not exist, or at an unrelated one.
 */
const COLUMNS: { title: string; links: Item[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Intelligence Engine", href: "/intelligence" },
      { label: "Property Discovery", href: "/properties" },
      { label: "Transaction Engine" },
      { label: "Portfolio Layer", href: "/investors" },
      { label: "API Access" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "Global Heatmap", href: "/market" },
      { label: "Market Reports", href: "/market" },
      { label: "Yield Surfaces", href: "/market" },
      { label: "Regulatory Index", href: "/market" },
      { label: "Liquidity Diagnostics", href: "/market" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Portfolio Intelligence", href: "/investors" },
      { label: "Yield Screening" },
      { label: "Risk Profiling" },
      { label: "Liquidity & Exit" },
      { label: "Deal Workflows" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Compliance Architecture" },
      { label: "Jurisdiction Rules" },
      { label: "Privacy Policy" },
      { label: "Terms of Use" },
      { label: "AML/KYC Policy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Zoiko Realty" },
      { label: "Zoiko Group" },
      { label: "Press" },
      { label: "Careers" },
      { label: "Contact" },
    ],
  },
];

const UTILITY = ["Cookies", "Accessibility", "Sitemap"];

export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-sky-950">
      {/* Canvas gutter is 40px with 1360px of content. */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-x-8 gap-y-12 py-16 md:grid-cols-3 lg:grid-cols-[minmax(0,300px)_repeat(5,minmax(0,1fr))]">
          <div>
            <div className="flex h-14 w-48 items-center justify-center rounded-[19px] bg-white">
              <Image
                src={LOGO_SRC}
                alt="Zoiko Realty Group"
                width={136}
                height={41}
                className="object-contain"
              />
            </div>
            <p className="mt-5 max-w-48 text-xs leading-5 text-white/75">
              Command surface for global real estate intelligence, execution,
              trust, and governance.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-base font-semibold uppercase leading-4 tracking-wide text-lime-400">
                {col.title}
              </h2>
              <ul className="mt-[18px] space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label} className="text-xs leading-5 text-white">
                    {l.href ? (
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-lime-400"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      l.label
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-white/40 py-3.5">
          <p className="text-xs leading-4 text-white">
            © 2026 Zoiko Realty Group · Zoiko Group Inc. · All rights reserved.
            Property intelligence platform. Not a licensed estate agent,
            securities dealer, or legal adviser in any jurisdiction.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6">
            {UTILITY.map((u) => (
              <li key={u} className="text-xs leading-4 text-white/60">
                {u}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

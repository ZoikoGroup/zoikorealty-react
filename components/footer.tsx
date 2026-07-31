import Image from "next/image";
import Link from "next/link";

/** Drop the wordmark at public/zoiko-logo.png (136 x 41). */
const LOGO_SRC = "/zoiko-logo.png";

type Item = { label: string; href: string };

/**
 * Only `/`, `/platform` and `/market` exist so far. Links whose destination
 * has not been built yet stay on "#" rather than pointing at a 404.
 */
const COLUMNS: { title: string; links: Item[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Intelligence Engine", href: "/platform" },
      { label: "Property Discovery", href: "/platform" },
      { label: "Transaction Engine", href: "/platform" },
      { label: "Portfolio Layer", href: "/platform" },
      { label: "API Access", href: "/platform" },
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
      { label: "Portfolio Intelligence", href: "#" },
      { label: "Yield Screening", href: "#" },
      { label: "Risk Profiling", href: "#" },
      { label: "Liquidity & Exit", href: "#" },
      { label: "Deal Workflows", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Compliance Architecture", href: "#" },
      { label: "Jurisdiction Rules", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "AML/KYC Policy", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Zoiko Realty", href: "#" },
      { label: "Zoiko Group", href: "#" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
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
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs leading-5 text-white transition-colors hover:text-lime-400"
                    >
                      {l.label}
                    </Link>
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
              <li key={u}>
                <a
                  href="#"
                  className="text-xs leading-4 text-white/60 transition-colors hover:text-white"
                >
                  {u}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

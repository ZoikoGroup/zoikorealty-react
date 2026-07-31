import Image from "next/image";
import Link from "next/link";

/**
 * Only entries with an href are links. Developers, Compliance and About have no
 * page yet, so they render as plain text rather than navigating somewhere
 * unrelated — give them an href once those routes exist.
 */
const NAV: { label: string; href?: string }[] = [
  { label: "Platform", href: "/platform" },
  { label: "Markets", href: "/market" },
  { label: "Properties", href: "/properties" },
  { label: "Investors", href: "/investors" },
  { label: "Developers" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Compliance" },
  { label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-blue-100 bg-white">
      {/* Canvas gutter is 40px with 1360px of content, matching the footer. */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-3 lg:h-16 lg:flex-nowrap lg:py-0">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Zoiko Realty Group"
              width={169}
              height={51}
              priority
              className="h-[51px] w-auto"
            />
          </Link>

          {/* Drops to its own scrollable row below lg so the wordmark and the
              two calls to action keep the top line to themselves. */}
          <nav
            aria-label="Main"
            className="order-last -mx-5 w-[calc(100%+2.5rem)] overflow-x-auto px-5 sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8 lg:order-none lg:mx-0 lg:w-auto lg:flex-1 lg:px-0"
          >
            <ul className="flex gap-7 whitespace-nowrap lg:justify-center">
              {NAV.map((n) => (
                <li
                  key={n.label}
                  className="text-xs leading-5 tracking-tight text-sky-950"
                >
                  {n.href ? (
                    <Link
                      href={n.href}
                      className="transition-colors hover:text-sky-800"
                    >
                      {n.label}
                    </Link>
                  ) : (
                    n.label
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
            {/* No auth route yet — a button rather than a link to nowhere. */}
            <button
              type="button"
              className="rounded-sm bg-sky-800 px-6 py-2 text-xs tracking-tight text-white transition-opacity hover:opacity-90"
            >
              Sign In
            </button>
            <Link
              href="/verify-identity"
              className="rounded-sm px-7 py-2 text-xs tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-sky-800/5"
            >
              Verify Identity
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

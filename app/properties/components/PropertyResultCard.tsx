import Image from "next/image";

/** Green = constraint satisfied, amber = relaxed or flagged, blue = neutral context. */
type BadgeTone = "ok" | "warn" | "info";

export type PropertyResult = {
  id: string;
  /** Rank within the current sort, e.g. "01". */
  rank: string;
  tag: string;
  /** Lime tag = matched only after a constraint was relaxed. */
  tagRelaxed?: boolean;
  confidence: string;
  title: string;
  meta: string;
  /** Shown while no image is set, and behind a transparent PNG. */
  gradient: string;
  /** Path under /public, e.g. "/properties/cascais.png". Omit to show the gradient alone. */
  image?: string;
  stats: { label: string; value: string }[];
  badges: { label: string; tone: BadgeTone }[];
  price: string;
  priceNote: string;
  /** "Open PIP" where the listing is only reachable through a gated pack. */
  cta: string;
};

const BADGE_TONES: Record<BadgeTone, string> = {
  ok: "bg-green-400/10 text-green-600 outline-green-400/30",
  warn: "bg-amber-700/10 text-amber-700 outline-amber-700/25",
  info: "bg-sky-800/10 text-sky-800 outline-sky-800/20",
};

export default function PropertyResultCard({
  property,
}: {
  property: PropertyResult;
}) {
  // Container queries, not viewport ones: the card sits in a fixed-width
  // column, so `sm:` fired long before the card itself was wide enough and the
  // stat row spilled out of the card.
  return (
    <article className="@container/card flex flex-col gap-4 rounded-2xl bg-white p-4 outline-1 -outline-offset-1 outline-blue-100 @md/card:flex-row">
      <div
        className={`relative h-44 shrink-0 overflow-hidden rounded-[10px] @md/card:w-60 ${property.gradient}`}
      >
        {property.image && (
          <Image
            src={property.image}
            alt=""
            fill
            sizes="(min-width: 640px) 240px, 100vw"
            className="object-cover"
          />
        )}
        <span
          className={
            property.tagRelaxed
              ? "absolute left-2.5 top-2.5 rounded-[100px] bg-lime-400/20 px-2.5 py-1 text-xs font-medium tracking-tight text-lime-600 outline-1 -outline-offset-1 outline-lime-400/30"
              : "absolute left-2.5 top-2.5 rounded-[100px] bg-sky-800 px-2.5 py-1 text-xs font-medium tracking-tight text-white"
          }
        >
          {property.tag}
        </span>
        <span className="absolute bottom-2.5 left-2.5 rounded-[100px] bg-white px-2 py-0.5 text-xs font-bold text-sky-950">
          Rank {property.rank}
        </span>
        <span className="absolute bottom-2.5 right-2.5 rounded-[100px] bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
          ● {property.confidence} confidence
        </span>
      </div>

      <div className="@container/body flex min-w-0 flex-1 flex-col">
        <h3 className="text-base font-bold text-sky-950">{property.title}</h3>
        <p className="mt-1.5 text-xs leading-5 text-slate-500">
          {property.meta}
        </p>

        {/* Four across only once the text column can hold them (288px), and
            minmax(0,…) so the price tile's content can't outvote its track. */}
        <dl className="mt-4 grid grid-cols-2 gap-2 @2xs/body:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {property.stats.map((s) => (
            <div key={s.label} className="rounded-lg bg-slate-50 p-2.5">
              <dt className="text-[10px] uppercase leading-4 tracking-wide text-slate-500">
                {s.label}
              </dt>
              <dd className="mt-1 text-sm font-bold text-sky-950">{s.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-4 flex flex-wrap gap-2">
          {property.badges.map((b) => (
            <li
              key={b.label}
              className={`rounded-[100px] px-2.5 py-1 text-xs outline-1 -outline-offset-1 ${BADGE_TONES[b.tone]}`}
            >
              {b.label}
            </li>
          ))}
        </ul>

        {/* mt-auto pins the footer to the card floor so cards of unequal badge
            count still line their prices up with the image block. */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-blue-100 pt-4 @md/card:mt-auto @md/card:pt-5">
          <div className="min-w-0">
            <p className="text-xl font-bold text-sky-950">{property.price}</p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              {property.priceNote}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            {/* No per-property detail route yet, so this opens nothing until
                app/properties/[id] exists. */}
            <button
              type="button"
              className="rounded-md bg-sky-800 px-4 py-1.5 text-xs font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
            >
              {property.cta}
            </button>
            <button
              type="button"
              className="rounded-md bg-white px-4 py-1.5 text-xs font-semibold tracking-tight text-sky-800 outline-1 -outline-offset-1 outline-sky-800 transition-colors hover:bg-sky-800/5"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";

export type Property = {
  id: string;
  location: string;
  title: string;
  price: string;
  assetClass: string;
  /** Shown while no image is set, and behind a transparent PNG. */
  gradient: string;
  /** Path under /public, e.g. "/home/property-dubai.png". Omit to show the gradient alone. */
  image?: string;
  verified?: boolean;
  fdiEligible?: boolean;
  metrics: { label: string; value: string }[];
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-blue-100">
      <div className={`relative aspect-[512/180] ${property.gradient}`}>
        {property.image && (
          <Image
            src={property.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 512px, (min-width: 1024px) 100vw, 100vw"
            className="object-cover"
          />
        )}
        <div className="absolute right-4 top-3.5 flex gap-2">
          {property.verified && (
            <span className="rounded-[100px] bg-green-600/90 px-2 py-1 text-[9px] font-semibold leading-4 tracking-wide text-white">
              Verified
            </span>
          )}
          {property.fdiEligible && (
            <span className="rounded-[100px] bg-lime-400/90 px-2 py-1 text-[9px] font-semibold leading-4 tracking-wide text-white">
              FDI Eligible
            </span>
          )}
        </div>
        <span className="absolute bottom-4 left-4 rounded-[100px] bg-linear-to-r from-emerald-400 to-lime-400 px-2.5 py-1 text-[10px] font-semibold leading-4 tracking-wide text-white">
          {property.assetClass}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase leading-4 tracking-wide text-slate-500">
          {property.location}
        </p>
        <h3 className="mt-1.5 text-base font-semibold leading-6 text-sky-950">
          {property.title}
        </h3>

        <dl className="mt-5 grid grid-cols-3 gap-4">
          {property.metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-[9px] uppercase leading-4 tracking-wide text-slate-400">
                {m.label}
              </dt>
              <dd className="text-sm font-medium leading-6 text-sky-800">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-blue-100 pt-4">
          <span className="text-lg font-bold leading-7 text-sky-950">
            {property.price}
          </span>
          {/* No per-property detail route yet (app/properties/[id]). */}
          <button
            type="button"
            className="text-sm font-semibold capitalize leading-4 tracking-wide text-slate-500 underline hover:text-sky-800"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

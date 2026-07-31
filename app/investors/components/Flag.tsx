import Image from "next/image";

/**
 * Supplied flag PNGs, all 18x12. Deliberately not emoji flags (🇵🇹 etc.):
 * Windows has no flag glyphs in Segoe UI Emoji, so those render as bare letter
 * pairs ("PT") in Chrome on Windows.
 */
const FLAGS: Record<string, string> = {
  PT: "/markets/flag-pt.png",
  AE: "/markets/flag-ae.png",
  GB: "/markets/flag-gb.png",
  FR: "/markets/flag-fr.png",
  ES: "/markets/flag-es.png",
  SG: "/markets/flag-sg.png",
  JP: "/markets/flag-jp.png",
  US: "/markets/flag-us.png",
};

export default function Flag({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) {
  const src = FLAGS[code];

  if (!src) {
    return (
      <span
        aria-hidden
        className={`inline-block h-3 w-[18px] shrink-0 rounded-xs bg-slate-200 ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={18}
      height={12}
      className={`shrink-0 rounded-xs ${className}`}
    />
  );
}

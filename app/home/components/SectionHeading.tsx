import type { ReactNode } from "react";

/** Type scale taken from the Figma export: 48px/48.30 headline, 16px/28 subtitle. */
export default function SectionHeading({
  title,
  subtitle,
  tone = "onLight",
  subtitleClassName = "",
  subtitleWidth = "max-w-[740px]",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "onLight" | "onDark";
  subtitleClassName?: string;
  subtitleWidth?: string;
}) {
  const dark = tone === "onDark";
  return (
    <>
      <h2
        className={`mx-auto max-w-[1100px] text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-[48.30px] ${
          dark ? "text-white" : "text-sky-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-5 text-center text-sm font-normal leading-7 sm:text-base ${subtitleWidth} ${
            dark ? "text-white/50" : "text-slate-500"
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}

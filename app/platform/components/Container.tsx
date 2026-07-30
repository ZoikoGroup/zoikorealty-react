import type { ReactNode } from "react";

/**
 * Platform-page gutter. The canvas is 1425px wide with 72.5px side padding,
 * so content tops out at ~1280px.
 *
 * Note the padding never drops to zero: capping max-width at the *content*
 * width and removing padding at xl collapses the gutter on any viewport at or
 * just above the breakpoint. The cap is the full canvas width instead.
 */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1425px] px-5 sm:px-8 lg:px-12 xl:px-[72px] ${className}`}
    >
      {children}
    </div>
  );
}

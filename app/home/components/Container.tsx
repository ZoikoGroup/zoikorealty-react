import type { ReactNode } from "react";

/**
 * Shared page gutter. The Figma canvas is 1440px wide with 40px side padding,
 * so content maxes out at 1360px and shrinks with the viewport below that.
 */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

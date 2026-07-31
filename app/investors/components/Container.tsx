import type { ReactNode } from "react";

/** 1425px canvas with 72.5px side gutters, matching the platform page. */
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

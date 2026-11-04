import type { ReactNode } from "react";

/** Keeps important page content visible before and after hydration. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

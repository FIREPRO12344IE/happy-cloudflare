import type { ReactNode } from "react";

// Static wrapper: no scroll animations (content always visible on every host).
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={className}>{children}</div>;
}

export function SectionLabel({ num, children }: { num: string; children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
      <span className="text-primary">{num}</span>
      <span className="h-px w-10 bg-primary" />
      {children}
    </div>
  );
}

export function isPlaceholder(v: string) {
  return !v || v.startsWith("[");
}

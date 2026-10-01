import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
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

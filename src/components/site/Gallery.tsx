import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImagePlus, X } from "lucide-react";
import { gallery } from "@/content/site";

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const n = gallery.length;
  const go = (d: number) => setIdx((i) => (i === null ? i : (i + d + n) % n));

  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  });

  const Tile = ({ i, className }: { i: number; className: string }) => {
    const g = gallery[i]!;
    return (
      <button onClick={() => setIdx(i)} className={`group relative overflow-hidden bg-card text-left ${className}`} aria-label={`Open ${g.caption}`}>
        {g.src ? (
          <img src={g.src} alt={g.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="hatch flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border p-4 text-center text-muted-foreground">
            <ImagePlus className="h-7 w-7" />
            <span className="font-display text-sm uppercase tracking-widest">Owner photo goes here</span>
          </div>
        )}
        <span className="absolute bottom-0 left-0 bg-background/90 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em]">
          <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> {g.category}
        </span>
      </button>
    );
  };

  return (
    <>
      {/* Desktop grid */}
      <div className="hidden grid-cols-4 grid-rows-2 gap-3 md:grid md:h-[640px]">
        <Tile i={0} className="col-span-2 row-span-2" />
        {gallery.slice(1, 5).map((_, k) => (
          <Tile key={k} i={k + 1} className="" />
        ))}
      </div>
      {gallery.length > 5 && (
        <div className="mt-3 hidden gap-3 md:grid md:grid-cols-3">
          {gallery.slice(5).map((_, k) => (
            <Tile key={k} i={k + 5} className="aspect-[16/9]" />
          ))}
        </div>
      )}
      {/* Mobile swipe */}
      <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:hidden">
        {gallery.map((_, i) => (
          <Tile key={i} i={i} className="aspect-[4/5] w-[82%] shrink-0 snap-center" />
        ))}
      </div>

      {idx !== null && gallery[idx] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/97 animate-fade-in"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button className="absolute right-4 top-4 p-3" onClick={() => setIdx(null)} aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <button className="absolute left-2 p-3 md:left-6" onClick={() => go(-1)} aria-label="Previous">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <figure key={idx} className="w-[86vw] max-w-5xl animate-scale-in">
            {gallery[idx]!.src ? (
              <img src={gallery[idx]!.src} alt={gallery[idx]!.caption} className="max-h-[78vh] w-full object-contain" />
            ) : (
              <div className="hatch flex aspect-video w-full flex-col items-center justify-center gap-3 border border-dashed border-border text-muted-foreground">
                <ImagePlus className="h-10 w-10" />
                <span className="font-display uppercase tracking-widest">Owner photo goes here</span>
              </div>
            )}
            <figcaption className="mt-4 flex justify-between font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <span>{gallery[idx]!.caption}</span>
              <span className="text-primary">
                {idx + 1} / {n}
              </span>
            </figcaption>
          </figure>
          <button className="absolute right-2 p-3 md:right-6" onClick={() => go(1)} aria-label="Next">
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}

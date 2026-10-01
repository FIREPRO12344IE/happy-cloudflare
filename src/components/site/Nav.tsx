import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/95 py-3 backdrop-blur" : "py-5 md:py-7"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-display text-2xl font-black uppercase tracking-tight">
          <span className="slash bg-primary px-2 text-primary-foreground">TS</span>
          <span>Workshop</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#quote"
          className="slash hidden bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5 lg:inline-block"
        >
          Book / Get a Quote
        </a>
        <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 top-0 -z-10 flex flex-col justify-between bg-background px-6 pb-10 pt-28 animate-fade-in lg:hidden">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-border">
                <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4 font-display text-4xl font-bold uppercase">
                  <span className="text-sm text-primary">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#quote" onClick={() => setOpen(false)} className="block bg-primary py-5 text-center font-display text-lg font-bold uppercase tracking-widest text-primary-foreground">
            Book / Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}

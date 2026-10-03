import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Instagram, MapPin, Phone, Mail, Clock, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Nav, links } from "@/components/site/Nav";
import { Gallery } from "@/components/site/Gallery";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal, SectionLabel, isPlaceholder } from "@/components/site/ui";
import { about, contact, pricing, reviews, services, social } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TS WORKSHOP — Motorcycle Repairs, Servicing & Diagnostics" },
      { name: "description", content: "TS WORKSHOP: motorcycle servicing, repairs, tyres, electrical, engine work, MOT prep and diagnostics. Fair prices, honest work, fast turnaround." },
      { property: "og:title", content: "TS WORKSHOP — Motorcycle Repairs & Diagnostics" },
      { property: "og:description", content: "Fair prices. Honest work. Fast turnaround. Get a quote from TS WORKSHOP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pickService = (name: string) => window.dispatchEvent(new CustomEvent("ts:service", { detail: name }));

function Index() {
  const year = new Date().getFullYear();
  const aboutExtras = (
    [
      ["Owner & Team", about.team],
      ["Experience", about.experience],
      ["Qualifications", about.qualifications],
      ["Specialisms", about.specialisms],
    ] as const
  ).filter(([, v]) => v);
  const phoneOk = !isPlaceholder(contact.phone);

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <main>
        {/* HERO */}
        <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img src={hero} alt="Motorcycle on a lift in a dark workshop" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32">
            <div className="mb-6 flex items-center gap-3 animate-fade-in">
              <span className="h-[3px] w-12 bg-primary" />
              <span className="h-[3px] w-4 bg-accent" />
              <span className="h-[3px] w-2 bg-brand-blue" />
            </div>
            <h1 className="font-display text-[clamp(3.2rem,11vw,9.5rem)] font-black uppercase leading-[0.85] tracking-normal animate-fade-in">
              Motorcycle
              <br />
              Repairs <span className="text-primary">&amp;</span>
              <br />
              Diagnostics
            </h1>
            <p className="mt-8 max-w-xl font-display text-lg font-semibold uppercase tracking-[0.25em] text-foreground/85 md:text-xl">
              Fair prices. Honest work. <span className="text-primary">Fast turnaround.</span>
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="slash group inline-flex items-center justify-center gap-3 bg-primary px-9 py-5 font-display text-lg font-bold uppercase tracking-[0.18em] text-primary-foreground">
                Get a Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center border border-foreground/40 px-9 py-5 font-display text-lg font-bold uppercase tracking-[0.18em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background">
                View Services
              </a>
            </div>
          </div>
          <a href="#services" aria-label="Scroll to services" className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 md:flex md:right-10">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">Scroll</span>
            <span className="relative h-14 w-px overflow-hidden bg-border">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollline_2s_ease-in-out_infinite] bg-primary" />
            </span>
          </a>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <SectionLabel num="01">Services</SectionLabel>
              <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-7xl">What<br />we do</h2>
              <p className="mt-6 max-w-sm text-lg text-muted-foreground">Professional motorcycle servicing, repairs and diagnostics.</p>
            </Reveal>
            <ul className="border-t border-border lg:col-span-8">
              {services.map((s, i) => (
                <li key={s.name}>
                  <a href="#quote" onClick={() => pickService(s.name)} className="group relative flex items-center gap-5 border-b border-border py-7 transition-colors md:gap-10 md:py-9">
                    <span className="absolute inset-y-0 left-0 w-0 bg-primary transition-all duration-500 group-hover:w-1" />
                    <span className="w-8 pl-3 font-display text-sm font-semibold text-primary md:w-12">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">
                      <span className="block font-display text-3xl font-bold uppercase tracking-normal transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">{s.name}</span>
                      <span className="mt-1 block text-muted-foreground">{s.desc}</span>
                    </span>
                    <span className="hidden font-display text-xs uppercase tracking-[0.2em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 md:block">Get a quote</span>
                    <ArrowUpRight className="h-7 w-7 shrink-0 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="scroll-mt-20 bg-card py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionLabel num="02">Pricing</SectionLabel>
              <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                Clear pricing.<br /><span className="text-accent">No BS.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Prices can vary depending on the motorcycle and work required. Contact TS WORKSHOP for an accurate quote.</p>
            </Reveal>
            <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {pricing.map((p, i) => (
                <Reveal key={p.name} delay={i * 60} className="border-b border-r border-border">
                  <div className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-background md:p-10">
                    <div className="flex justify-between font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      <span>{p.name}</span>
                      <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={`font-display font-black uppercase ${p.price.startsWith("Quote") ? "text-3xl text-foreground/80" : "text-5xl"}`}>{p.price}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <a href="#quote" className="group mt-12 inline-flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-[0.15em] text-primary">
              Get a quote <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel num="03">Our Work</SectionLabel>
              <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">The work<br />speaks for <span className="text-brand-blue">itself.</span></h2>
            </div>
            <p className="max-w-xs text-muted-foreground">Workshop, customer bikes, repairs, servicing, before &amp; after and finished work.</p>
          </Reveal>
          <Reveal><Gallery /></Reveal>
        </section>

        {/* WHY */}
        <section className="relative overflow-hidden border-y border-border py-24 md:py-36">
          <div className="pointer-events-none absolute -right-20 top-0 h-full w-1/2 -skew-x-12 bg-card" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2">
            <Reveal>
              <SectionLabel num="04">Why TS WORKSHOP</SectionLabel>
              <p className="font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
                Fair prices.<br />Honest work.<br /><span className="text-primary">Fast turnaround.</span>
              </p>
            </Reveal>
            <div className="space-y-0 self-end">
              {[
                ["Honest", "Straightforward communication about the work your bike needs."],
                ["Professional", "Focused on proper motorcycle servicing, repairs and diagnostics."],
                ["Efficient", "Clear communication and a focus on getting work completed efficiently."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 100} className="border-t border-border py-8">
                  <div className="flex gap-6">
                    <span className={`mt-2 h-3 w-3 shrink-0 ${i === 1 ? "bg-accent" : i === 2 ? "bg-brand-blue" : "bg-primary"}`} />
                    <div>
                      <h3 className="font-display text-3xl font-bold uppercase">{t}</h3>
                      <p className="mt-2 text-muted-foreground">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
          <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel num="05">About</SectionLabel>
              <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-7xl">About<br /><span className="text-primary">TS WORKSHOP</span></h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={100}>
              <p className={`text-xl leading-relaxed md:text-2xl ${isPlaceholder(about.story) ? "border border-dashed border-border p-6 font-display uppercase tracking-widest text-muted-foreground" : ""}`}>{about.story}</p>
              {aboutExtras.length > 0 && (
                <dl className="mt-12 grid gap-8 sm:grid-cols-2">
                  {aboutExtras.map(([k, v]) => (
                    <div key={k} className="border-t border-border pt-4">
                      <dt className="font-display text-sm uppercase tracking-[0.2em] text-primary">{k}</dt>
                      <dd className="mt-2 text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </Reveal>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="bg-card py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionLabel num="06">Reviews</SectionLabel>
              <h2 className="font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl">What our<br />customers say</h2>
            </Reveal>
            {reviews.length ? (
              <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
                {reviews.map((r) => (
                  <figure key={r.name + r.date} className="bg-card p-8">
                    <Quote className="h-8 w-8 text-brand-blue" />
                    <blockquote className="mt-6 text-lg">{r.text}</blockquote>
                    {r.reply && (
                      <div className="mt-5 border-l-2 border-brand-blue pl-4 text-sm text-muted-foreground">
                        <span className="font-display font-bold uppercase tracking-[0.15em] text-foreground">TS WORKSHOP</span>
                        <span className="mx-2">—</span>{r.reply}
                      </div>
                    )}
                    <figcaption className="mt-8 font-display uppercase tracking-[0.15em]">{r.name} <span className="text-muted-foreground">— {r.date}</span></figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-14 flex flex-col items-start gap-4 border-l-2 border-primary pl-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-lg text-muted-foreground">Genuine customer reviews will appear here. Been in recently? We'd appreciate your feedback.</p>
                <a href="#contact" className="font-display font-bold uppercase tracking-[0.15em] text-primary">Get in touch →</a>
              </div>
            )}
          </div>
        </section>

        {/* QUOTE */}
        <section id="quote" className="relative scroll-mt-16 overflow-hidden py-24 md:py-36">
          <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
          <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel num="07">Book / Get a Quote</SectionLabel>
              <h2 className="font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">Need your bike <span className="text-primary">sorting?</span></h2>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">Tell us what you need and we'll get back to you.</p>
              {phoneOk && (
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-10 inline-flex items-center gap-3 font-display text-3xl font-bold"><Phone className="h-6 w-6 text-primary" />{contact.phone}</a>
              )}
            </Reveal>
            <Reveal className="lg:col-span-7" delay={100}><QuoteForm /></Reveal>
          </div>
        </section>

        {/* SOCIAL */}
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em]">Follow the work</p>
              <p className="mt-4 break-all font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-none tracking-tight">{social.handle}</p>
            </div>
            {social.instagramUrl ? (
              <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary-foreground px-8 py-5 font-display text-lg font-bold uppercase tracking-[0.15em] text-primary">
                <Instagram className="h-5 w-5" /> Follow on Instagram
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 border-2 border-primary-foreground/40 px-8 py-5 font-display text-lg font-bold uppercase tracking-[0.15em] opacity-70">
                <Instagram className="h-5 w-5" /> Profile link coming soon
              </span>
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-36">
          <Reveal>
            <SectionLabel num="08">Contact</SectionLabel>
            <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-7xl">Find the workshop</h2>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <dl className="grid gap-px self-start bg-border sm:grid-cols-2">
              {[
                [MapPin, "Address", contact.address, null],
                [Phone, "Phone", contact.phone, phoneOk ? `tel:${contact.phone.replace(/\s/g, "")}` : null],
                [Mail, "Email", contact.email || "[ADD EMAIL]", !isPlaceholder(contact.email) ? `mailto:${contact.email}` : null],
                [Clock, "Opening hours", contact.hours, null],
              ].map(([Icon, k, v, href]) => {
                const I = Icon as typeof MapPin;
                return (
                  <div key={k as string} className="bg-background p-7">
                    <dt className="flex items-center gap-2 font-display text-sm uppercase tracking-[0.2em] text-primary"><I className="h-4 w-4" />{k as string}</dt>
                    <dd className={`mt-3 whitespace-pre-line text-lg ${isPlaceholder(v as string) ? "text-muted-foreground" : ""}`}>
                      {href ? <a href={href as string} className="hover:text-primary">{v as string}</a> : (v as string)}
                    </dd>
                  </div>
                );
              })}
            </dl>
            {contact.mapEmbedUrl ? (
              <iframe title="TS WORKSHOP location" src={contact.mapEmbedUrl} loading="lazy" className="aspect-[4/3] w-full border-0 grayscale" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div className="hatch flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border border-dashed border-border text-muted-foreground">
                <MapPin className="h-8 w-8 text-primary" />
                <span className="font-display uppercase tracking-widest">Map added once address is confirmed</span>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card pb-28 pt-20 md:pb-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-display text-[clamp(3.5rem,13vw,11rem)] font-black uppercase leading-[0.8] tracking-normal">
            <span className="text-primary">TS</span> WORKSHOP
          </p>
          <p className="mt-4 font-display text-lg uppercase tracking-[0.3em] text-muted-foreground">Motorcycle repairs &amp; diagnostics</p>
          <div className="mt-14 flex flex-col justify-between gap-8 border-t border-border pt-8 md:flex-row md:items-center">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {links.slice(1).map((l) => (
                <li key={l.href}><a href={l.href} className="font-display text-sm uppercase tracking-[0.2em] hover:text-primary">{l.label}</a></li>
              ))}
              <li>
                {social.instagramUrl ? (
                  <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-display text-sm uppercase tracking-[0.2em] hover:text-primary">Socials</a>
                ) : (
                  <span className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">{social.handle}</span>
                )}
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">© TS WORKSHOP {year}</p>
          </div>
        </div>
      </footer>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background md:hidden">
        {phoneOk ? (
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 py-4 font-display font-bold uppercase tracking-widest"><Phone className="h-4 w-4" /> Call</a>
        ) : (
          <a href="#contact" className="flex items-center justify-center gap-2 py-4 font-display font-bold uppercase tracking-widest"><MapPin className="h-4 w-4" /> Contact</a>
        )}
        <a href="#quote" className="flex items-center justify-center bg-primary py-4 font-display font-bold uppercase tracking-widest text-primary-foreground">Get a Quote</a>
      </div>
    </div>
  );
}

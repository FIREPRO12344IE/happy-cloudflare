import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { workshopStory } from "@/content/site";

export const Route = createFileRoute("/more-info")({
  head: () => ({
    meta: [
      { title: "TS WORKSHOP — Our Story & Pictures" },
      { name: "description", content: "How TS WORKSHOP started, our approach to motorcycle and electric vehicle repairs in Gainsborough, and what we’re building towards." },
      { property: "og:title", content: "TS WORKSHOP — Our Story & Pictures" },
      { property: "og:description", content: "The story behind TS WORKSHOP: practical problem-solving, personal service and plans for the future." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MoreInfo,
});

function MoreInfo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 md:px-8">
          <Link to="/" className="font-display text-2xl font-black uppercase">
            <span className="text-primary">TS</span>{" "}
            <span className="border-y-2 border-t-accent border-b-brand-blue">WORKSHOP</span>
          </Link>
          <Button asChild variant="ghost" className="rounded-none font-display uppercase tracking-normal">
            <Link to="/" hash="work"><ArrowLeft /> Back to our work</Link>
          </Button>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="border-b border-border py-14 md:py-20">
          <p className="mb-5 font-display text-sm font-semibold uppercase text-primary">Our story &amp; pictures</p>
          <h1 className="font-display text-5xl font-black uppercase leading-none md:text-7xl">TS WORKSHOP</h1>
        </div>
        {workshopStory.map((section, index) => (
          <section key={section.title} className="grid gap-8 border-b border-border py-12 md:gap-14 md:py-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 font-display text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="font-display text-4xl font-bold uppercase leading-tight md:text-5xl">{section.title}</h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <figure className="self-start lg:col-span-5">
              <div className="hatch flex aspect-[4/3] items-center justify-center border border-dashed border-border bg-card">
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                  <ImagePlus className="h-9 w-9 text-brand-blue" aria-hidden="true" />
                  <span className="font-display text-lg font-semibold uppercase">{section.photo}</span>
                </div>
              </div>
              <figcaption className="mt-3 font-display text-sm uppercase text-muted-foreground">{section.title}</figcaption>
            </figure>
          </section>
        ))}
        <div className="mt-10 flex justify-end">
          <Button asChild className="h-auto rounded-none px-7 py-4 font-display text-lg font-bold uppercase shadow-none">
            <Link to="/" hash="work">View our work <ArrowRight /></Link>
          </Button>
        </div>
      </main>
      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">TS WORKSHOP · Gainsborough</footer>
    </div>
  );
}
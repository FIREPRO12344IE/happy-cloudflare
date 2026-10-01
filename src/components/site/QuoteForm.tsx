import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { contact, services, social } from "@/content/site";
import { isPlaceholder } from "./ui";

const field =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-0";
const label = "font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground";

export function QuoteForm() {
  const [service, setService] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const on = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener("ts:service", on);
    return () => window.removeEventListener("ts:service", on);
  }, []);

  const hasEmail = !isPlaceholder(contact.email);
  const hasPhone = !isPlaceholder(contact.phone);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    if (!get("name") || (!get("phone") && !get("email"))) {
      setError("Please add your name and a phone number or email so we can reply.");
      return;
    }
    if (get("email") && !/^\S+@\S+\.\S+$/.test(get("email"))) {
      setError("That email address doesn't look right.");
      return;
    }
    if (!hasEmail) {
      setError("Online enquiries open soon — the workshop email hasn't been added yet. Please call or message us instead.");
      return;
    }
    setError("");
    const body = [
      ["Name", "name"], ["Phone", "phone"], ["Email", "email"], ["Make", "make"], ["Model", "model"],
      ["Registration", "reg"], ["Mileage", "mileage"], ["Service", "service"], ["Preferred date", "date"], ["Info", "info"],
    ]
      .map(([l, k]) => `${l}: ${get(k!) || "-"}`)
      .join("\n");
    const subject = `Enquiry: ${get("service") || "General"} — ${get("make")} ${get("model")}`.trim();
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      <label className="block"><span className={label}>Name *</span><input name="name" autoComplete="name" className={field} maxLength={100} /></label>
      <label className="block"><span className={label}>Phone</span><input name="phone" type="tel" autoComplete="tel" className={field} maxLength={30} /></label>
      <label className="block sm:col-span-2"><span className={label}>Email</span><input name="email" type="email" autoComplete="email" className={field} maxLength={200} /></label>
      <label className="block"><span className={label}>Motorcycle make</span><input name="make" className={field} placeholder="e.g. Yamaha" maxLength={60} /></label>
      <label className="block"><span className={label}>Motorcycle model</span><input name="model" className={field} placeholder="e.g. MT-07" maxLength={60} /></label>
      <label className="block"><span className={label}>Registration</span><input name="reg" className={`${field} uppercase`} maxLength={12} /></label>
      <label className="block"><span className={label}>Mileage</span><input name="mileage" inputMode="numeric" className={field} maxLength={10} /></label>
      <label className="block">
        <span className={label}>Service required</span>
        <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={`${field} [&>option]:bg-card`}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.name}>{s.name}</option>)}
          <option>Other / not sure</option>
        </select>
      </label>
      <label className="block"><span className={label}>Preferred date</span><input name="date" type="date" className={`${field} [color-scheme:dark]`} /></label>
      <label className="block sm:col-span-2"><span className={label}>Additional information</span><textarea name="info" rows={4} className={`${field} resize-none`} maxLength={2000} placeholder="Symptoms, noises, warning lights…" /></label>

      {error && <p role="alert" className="border-l-2 border-accent pl-3 text-sm text-foreground sm:col-span-2">{error}</p>}
      {sent && <p className="border-l-2 border-primary pl-3 text-sm sm:col-span-2">Your email app should now be open with your enquiry ready to send.</p>}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
        <button type="submit" className="group flex flex-1 items-center justify-center gap-3 bg-primary py-5 font-display text-lg font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground">
          Send Enquiry <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
        {social.instagramUrl ? (
          <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-foreground/30 px-6 py-5 font-display font-bold uppercase tracking-[0.15em] hover:border-primary hover:text-primary">
            <MessageSquare className="h-5 w-5" /> Message TS Workshop
          </a>
        ) : hasPhone ? (
          <a href={`sms:${contact.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 border border-foreground/30 px-6 py-5 font-display font-bold uppercase tracking-[0.15em] hover:border-primary hover:text-primary">
            <MessageSquare className="h-5 w-5" /> Message TS Workshop
          </a>
        ) : (
          <span className="flex items-center justify-center gap-2 border border-dashed border-border px-6 py-5 font-display uppercase tracking-[0.15em] text-muted-foreground" title="Add phone or Instagram URL in site content">
            <MessageSquare className="h-5 w-5" /> Message link coming soon
          </span>
        )}
      </div>
    </form>
  );
}

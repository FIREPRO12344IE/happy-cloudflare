// ============================================================
// TS WORKSHOP — EDIT YOUR BUSINESS INFO HERE
// Replace placeholders with real details. Leave a field as ""
// to hide it on the website.
// ============================================================

import engineSwapsImg from "@/assets/engine-swaps.png";
import engineWorkImg from "@/assets/engine-work.png";
import ecuBarrelImg from "@/assets/ecu-barrel.png";
import scooterRepairImg from "@/assets/scooter-repair.png";
import pitBikeImg from "@/assets/pit-bike.png";
import kawasakiNightImg from "@/assets/kawasaki-night.png";

export const contact = {
  address: "Gainsborough", // full street address can replace this
  phone: "07378 442618", // tap-to-call buttons across the site use this
  email: "tsworkshopp@gmail.com", // the quote form sends enquiries here
  hours: "8am – 10pm",
  mapEmbedUrl: "https://maps.google.com/maps?q=Gainsborough,+Lincolnshire&output=embed", // replace with exact address pin when confirmed
  googleMapsUrl: "https://maps.app.goo.gl/uhHBphtJNfm8Ae9K7", // Google Maps listing + reviews
};

export const social = {
  handle: "@tsworkshop",
  instagramUrl: "", // add real profile URL, e.g. "https://instagram.com/..."
  snapchatUrl: "https://www.snapchat.com/add/tsworkshop?share_id=YF-ZRerW-Ww&locale=en-GB",
};

export const services = [
  { name: "Servicing", price: "From £75", desc: "Routine services, maintenance and safety checks." },
  { name: "Diagnostics", price: "From £50", desc: "Motorcycle and e-bike diagnostics, fault finding, electrical repairs, running issues, no-start diagnosis, MTV6+ / OBDII scans." },
  { name: "Repairs", price: "Quote required", desc: "Crash damage, brake, suspension and general mechanical repairs." },
  { name: "Tyre Fitting", price: "£25 / £30", desc: "Tyre fitting, puncture repairs and wheel balancing." },
  { name: "MOT Prep", price: "From £25", desc: "Pre-MOT checks, preparation and failure repairs." },
  { name: "Rebuilds", price: "Quote required", desc: "Top ends, bottom ends, brake calipers/master cylinders, forks, carburettors, fuel taps, gearboxes, clutches, water pumps, oil pumps and starter motors." },
  { name: "Engine Work", price: "Quote required", desc: "Engine repairs, rebuilds and performance troubleshooting." },
  { name: "E-Vehicles", price: "Quote required", desc: "EAPCs, conversion kits, mobility scooters and e-scooters; servicing, diagnostics and repairs." },
];

// Real owner-supplied prices — do not change or invent new ones.
export const pricing = [
  { name: "Servicing", price: "From £75" },
  { name: "Diagnostics", price: "From £50" },
  { name: "Repairs", price: "Quote required" },
  { name: "Tyre Fitting", price: "£25 / £30" },
  { name: "MOT Prep", price: "From £25" },
  { name: "Rebuilds", price: "Quote required" },
  { name: "Engine Work", price: "Quote required" },
  { name: "E-Vehicles", price: "Quote required" },
];

// Exact wording supplied by the owner — do not paraphrase.
export const pricingNote =
  "Prices shown are approximate guide prices. Parts, motorcycle condition and additional faults may affect the final cost. Engine repairs, complex diagnostics and larger repairs require an individual quotation.";

// Add real photos: set `src` to an image URL. Empty src shows a placeholder.
export const gallery: { src: string; category: string; caption: string }[] = [
  { src: engineSwapsImg, category: "Engine Work", caption: "Engine swaps & repairs" },
  { src: engineWorkImg, category: "Engine Work", caption: "Engine work 🔧" },
  { src: ecuBarrelImg, category: "Repairs", caption: "ECU & barrel replacement 💰" },
  { src: scooterRepairImg, category: "Customer Bikes", caption: "Scooter back on the road" },
  { src: pitBikeImg, category: "Customer Bikes", caption: "Electric pit bike" },
  { src: kawasakiNightImg, category: "Finished Work", caption: "Ready for the road" },
];

export const about = {
  story: "TS WORKSHOP is built on one man's drive. A motivated, inspired owner with a dream of making it big — every bike that rolls into the workshop gets that same commitment: honest work, fair prices and a real passion for motorcycles.",
  team: "", // owner / team info
  experience: "",
  qualifications: "",
  specialisms: "",
};

// Add genuine reviews only.
export const reviews: { name: string; date: string; text: string; reply?: string }[] = [
  {
    name: "Kurt",
    date: "4 weeks ago",
    text: "Amazing guys drove 5 hours to deliver a bike to me, over the moon with it. No lies, no hassle, exactly what you would want when buying a bike. Very professional — would recommend any day of the week.",
    reply: "We Deliver Anywhere In The UK 🚚 Glad You're Happy 😃",
  },
  {
    name: "Nathan",
    date: "A month ago",
    text: "Really happy with T's Workshop. Had my spark plugs changed and it was all sorted the same day with no problems at all. The bike is running perfectly now. Really good price as well, so can't complain. Would definitely recommend them and I'll be using them again!",
    reply: "Nice one mate! I'll Always Charge Accordingly💪🏼",
  },
  {
    name: "Justin Torcato",
    date: "A month ago",
    text: "Kept me updated, sorted my bike out.",
    reply: "Always a pleasure working on the Z750 mate!",
  },
];

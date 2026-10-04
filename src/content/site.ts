// ============================================================
// TS WORKSHOP — EDIT YOUR BUSINESS INFO HERE
// Replace placeholders with real details. Leave a field as ""
// to hide it on the website.
// ============================================================

import engineSwapsImg from "@/assets/engine-swaps.png.asset.json";
import engineWorkImg from "@/assets/engine-work.png.asset.json";
import ecuBarrelImg from "@/assets/ecu-barrel.png.asset.json";
import scooterRepairImg from "@/assets/scooter-repair.png.asset.json";
import pitBikeImg from "@/assets/pit-bike.png.asset.json";
import kawasakiNightImg from "@/assets/kawasaki-night.png.asset.json";

export const contact = {
  address: "[ADD ADDRESS]",
  phone: "07378 442618", // tap-to-call buttons across the site use this
  email: "tsworkshopp@gmail.com", // the quote form sends enquiries here
  hours: "[ADD OPENING HOURS]",
  mapEmbedUrl: "", // Google Maps embed URL once address is confirmed
  googleMapsUrl: "https://maps.app.goo.gl/uhHBphtJNfm8Ae9K7", // Google Maps listing + reviews
};

export const social = {
  handle: "@tsworkshop",
  instagramUrl: "", // add real profile URL, e.g. "https://instagram.com/..."
  snapchatUrl: "https://www.snapchat.com/add/tsworkshop?share_id=YF-ZRerW-Ww&locale=en-GB",
};

export const services = [
  { name: "Servicing", desc: "Professional motorcycle servicing and maintenance." },
  { name: "Repairs", desc: "Mechanical repairs and troubleshooting." },
  { name: "Tyres", desc: "Tyre fitting and related services." },
  { name: "Electrical", desc: "Electrical diagnostics and repair." },
  { name: "Engine Work", desc: "Engine-related inspection and repair." },
  { name: "MOT Prep", desc: "Preparation and checks before an MOT." },
  { name: "Diagnostics", desc: "Fault finding and motorcycle diagnostics." },
];

// Replace "From £_" with real prices, e.g. "From £120"
export const pricing = [
  { name: "Servicing", price: "From £_" },
  { name: "Diagnostics", price: "From £_" },
  { name: "Tyres", price: "From £_" },
  { name: "Repairs", price: "Quote required" },
  { name: "Engine Work", price: "Quote required" },
  { name: "MOT Prep", price: "From £_" },
];

// Add real photos: set `src` to an image URL. Empty src shows a placeholder.
export const gallery: { src: string; category: string; caption: string }[] = [
  { src: engineSwapsImg.url, category: "Engine Work", caption: "Engine swaps & repairs" },
  { src: engineWorkImg.url, category: "Engine Work", caption: "Engine work 🔧" },
  { src: ecuBarrelImg.url, category: "Repairs", caption: "ECU & barrel replacement 💰" },
  { src: scooterRepairImg.url, category: "Customer Bikes", caption: "Scooter back on the road" },
  { src: pitBikeImg.url, category: "Customer Bikes", caption: "Electric pit bike" },
  { src: kawasakiNightImg.url, category: "Finished Work", caption: "Ready for the road" },
];

export const about = {
  story: "[OWNER: ADD COMPANY STORY HERE]",
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

// ============================================================
// TS WORKSHOP — EDIT YOUR BUSINESS INFO HERE
// Replace placeholders with real details. Leave a field as ""
// to hide it on the website.
// ============================================================

export const contact = {
  address: "[ADD ADDRESS]",
  phone: "[ADD PHONE]", // e.g. "07123 456789"
  email: "", // e.g. "hello@tsworkshop.co.uk" — the quote form sends to this
  hours: "[ADD OPENING HOURS]",
  mapEmbedUrl: "", // Google Maps embed URL once address is confirmed
};

export const social = {
  handle: "@tsworkshop",
  instagramUrl: "", // add real profile URL, e.g. "https://instagram.com/..."
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
  { src: "", category: "Workshop", caption: "Workshop photo" },
  { src: "", category: "Customer Bikes", caption: "Customer motorcycle" },
  { src: "", category: "Repairs", caption: "Repair in progress" },
  { src: "", category: "Servicing", caption: "Service work" },
  { src: "", category: "Before & After", caption: "Before & after" },
  { src: "", category: "Finished Work", caption: "Finished work" },
];

export const about = {
  story: "[OWNER: ADD COMPANY STORY HERE]",
  team: "", // owner / team info
  experience: "",
  qualifications: "",
  specialisms: "",
};

// Add genuine reviews only.
export const reviews: { name: string; date: string; text: string }[] = [];

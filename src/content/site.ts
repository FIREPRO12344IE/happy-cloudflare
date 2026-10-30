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
import work7Img from "@/assets/work/work-7.jpeg";
import work8Img from "@/assets/work/work-8.jpeg";
import work9Img from "@/assets/work/work-9.jpeg";
import work10Img from "@/assets/work/work-10.jpeg";
import work2Img from "@/assets/work/work-2.jpeg";
import work3Img from "@/assets/work/work-3.jpeg";
import work4Img from "@/assets/work/work-4.jpeg";
import work5Img from "@/assets/work/work-5.jpeg";
import work1Img from "@/assets/work/work-1.jpeg";
import work6Img from "@/assets/work/work-6.jpeg";

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
  facebookUrl: "https://www.facebook.com/61592042192011", // confirm this is the correct page
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
  { src: work7Img, category: "Customer Bikes", caption: "Hi-Performance Bikes" },
  { src: work8Img, category: "Diagnostics", caption: "No Start Diagnosis" },
  { src: work9Img, category: "Diagnostics", caption: "iCarsoft MTV6+" },
  { src: work10Img, category: "Customer Bikes", caption: "We Get You Back On The Road In No Time" },
  { src: work2Img, category: "Repairs", caption: "Clutch Work" },
  { src: work3Img, category: "E-Vehicles", caption: "E-Bike Repairs" },
  { src: work4Img, category: "Rebuilds", caption: "YZF-R Caliper Rebuild" },
  { src: work5Img, category: "Tyres", caption: "Harley Fatbob Tyres" },
  { src: work1Img, category: "Rebuilds", caption: "Husky TE 300i Rebuild" },
  { src: work6Img, category: "Servicing", caption: "Aprilia SXR50 Service" },
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

// Owner-supplied workshop story; future plans are ambitions, not current services.
export const workshopStory = [
  {
    "title": "HOW IT STARTED",
    "paragraphs": [
      "TS WORKSHOP began with a motorcycle accident, a broken wrist and a determination to stay connected to something I loved.",
      "Unable to ride or return to work while recovering, I bought a non-running moped and set about bringing it back to life. With my injured wrist too sensitive to work in the cold, those first repairs happened inside my house. Before long, the moped was running—and I had found a new direction.",
      "One project led to another. I began buying, repairing and selling more motorcycles and mopeds, developing my skills with every fault I traced and every bike I brought back onto the road. What started as a way to keep busy during recovery revealed an ability for mechanical problem-solving and a passion that went beyond riding."
    ],
    "photo": "Photo to be added"
  },
  {
    "title": "WHY TS WORKSHOP EXISTS",
    "paragraphs": [
      "At first, repairing bikes helped me stay involved with motorcycles and earn a modest income while I couldn’t do my usual job. It soon became something much more meaningful: the opportunity to build an independent business around work I cared about.",
      "TS WORKSHOP grew from that experience. Today, it’s an independent motorcycle and electric vehicle workshop in Gainsborough, built around practical problem-solving, personal service and the satisfaction of getting customers moving again.",
      "Whether it’s routine maintenance, a persistent electrical fault or an engine rebuild, I bring the same curiosity and determination that got that first moped running."
    ],
    "photo": "Photo to be added"
  },
  {
    "title": "HOW I WORK",
    "paragraphs": [
      "My approach is straightforward: investigate thoroughly, communicate clearly and keep each job moving. I aim to get repairs completed efficiently, with same-day turnaround wherever the work and parts availability allow, while giving every job the attention it needs.",
      "I believe customers should understand what’s happening with their bike. That means explaining what I find, discussing the work needed and keeping them involved through updates, photos and videos along the way.",
      "Customer satisfaction is at the heart of TS WORKSHOP. An independent workshop depends on trust, repeat customers and recommendations. I want people to feel confident leaving their bike with me—and confident coming back whenever they need help."
    ],
    "photo": "Photo to be added"
  },
  {
    "title": "WHAT I’M BUILDING TOWARDS",
    "paragraphs": [
      "My ambition is to build TS WORKSHOP into an established, trusted business with a strong reputation for its workmanship and the way it treats people.",
      "Longer term, I’d like to explore additional workshops and self-service spaces where riders can hire a bay and tools to work on their own bikes. Making workshop space and equipment more accessible is an idea I’d love to develop as the business grows.",
      "For now, my focus is right here: improving the current workshop, investing in equipment, developing my skills and refining how each job is handled. Every step has the same purpose—to give customers a service they can rely on and help keep them on the road."
    ],
    "photo": "Photo to be added"
  }
];

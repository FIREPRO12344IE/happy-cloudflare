# TS Workshop — Premium Website Plan

Note: the TS Workshop Instagram image mentioned in the brief was not attached. The design follows the brief's colours (black, white, yellow, red, small blue accents). Attach the image anytime and the styling will be matched to it.

## Look and feel
- Near-black charcoal base, white type, yellow for CTAs/highlights, red sparingly, a thin blue accent line.
- Headings: Barlow Condensed / Oswald-style heavy condensed font; body: clean sans (e.g. Manrope). No Inter/Poppins.
- Sharp edges, diagonal racing slashes, numbered sections, hairline dividers. No rounded floating cards, blobs, glass or gradients.
- Subtle motion only: text/image reveals on scroll, compacting nav, gentle hovers.

## Single page, sections in order
1. Sticky nav — TS WORKSHOP left; Home, Services, Pricing, Our Work, About, Contact; yellow BOOK / GET A QUOTE. Shrinks on scroll. Full-screen mobile menu.
2. Hero — full-screen dark workshop photo, "MOTORCYCLE REPAIRS & DIAGNOSTICS", tagline, GET A QUOTE + VIEW SERVICES, scroll indicator.
3. What We Do — 7 numbered services (Servicing, Repairs, Tyres, Electrical, Engine Work, MOT Prep, Diagnostics) as an editorial list with hover + arrow linking to the quote form preselected with that service.
4. Pricing — "CLEAR PRICING. NO BS." with placeholders (From £_ / Quote required), all in one easy-to-edit list.
5. Our Work — gallery grid (1 large + smaller tiles) with clearly labelled "Owner photo goes here" placeholders per category, full-screen viewer, swipe on mobile.
6. Why TS Workshop — big statement + Honest / Professional / Efficient.
7. About — labelled owner placeholders (story, team, experience, qualifications, specialisms); empty fields hidden once real content is added.
8. Reviews — "WHAT OUR CUSTOMERS SAY" structure; shows a tasteful "Reviews coming soon" state until real reviews are added. No fake reviews.
9. Book / Get a Quote — all requested fields, large SEND ENQUIRY, plus MESSAGE TS WORKSHOP option.
10. Follow the Work — @tsworkshop branded section; link stays inactive until the real URL is supplied.
11. Contact — address, phone, email, hours placeholders + map placeholder.
12. Large footer with links and auto year.
- Sticky mobile "Get a Quote / Call" bar.

## Honest functionality
- Quote form: validates, then opens the visitor's email app with the enquiry pre-filled to the workshop's email (works on any static host, no secrets). Can be upgraded later to send directly once you choose an email service.
- Hero photo: one realistic dark workshop image as a temporary stand-in, easy to swap for your own. No other images pretend to be TS Workshop.
- No invented prices, reviews, stats, history or social links.

## Cloudflare deployment
- Keeps the project's existing Cloudflare-compatible setup untouched (no server-only packages, no Node-only libraries, no secrets in the browser).
- Every page is plain front-end content, so it publishes from Lovable and also builds cleanly for Cloudflare.

## Technical details
- All editable business info (prices, contact, hours, socials, about, reviews, gallery entries) in one file: `src/content/site.ts`.
- Rewrite `src/routes/index.tsx`; components under `src/components/site/`; tokens in `src/styles.css`; fonts via `<link>` in `__root.tsx`; proper head metadata (title, description, og tags).
- Scroll reveals via IntersectionObserver (no extra animation library); lightbox and swipe built with plain React + touch events.
- Record structure rule in AGENTS.md; save brand rules (no fake content, colour usage) to project memory.

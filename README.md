# Lumina Health Clinic — Website Template

A premium, conversion-focused clinic website built with **React + Tailwind CSS v4 + React Router + Framer Motion**. Designed as a live demo template for cold outreach to clinics — swap in a real clinic's name, colors, copy, and photos to turn this into a client site in a few hours.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

Requires Node 18+.

## Project structure

```
src/
  components/
    layout/      Navbar, Footer, AnnouncementBar, Logo, Layout wrapper
    ui/           Reusable pieces: Button, SectionHeading, cards, FAQ item, PageHero
    sections/     Homepage sections (Hero, Services, Testimonials, etc.)
  pages/          One file per route: Home, About, Services, Doctors, Contact, BookAppointment
  data/           Editable content: services.js, doctors.js, testimonials.js, faqs.js, nav.js
  index.css       Design tokens (colors, type, shadows) via Tailwind v4 @theme
```

## Customizing for a real clinic

1. **Brand** — update `src/components/layout/Logo.jsx` (name + mark) and `index.css` `@theme` color tokens (`--color-primary`, `--color-teal`, etc.).
2. **Content** — edit the files in `src/data/` for services, doctors, testimonials and FAQs. Everything on the site pulls from these files, so adding or removing a doctor/service updates every page automatically.
3. **Images** — all imagery currently points to Unsplash placeholder URLs. Replace `src` attributes in `Hero.jsx`, `FeaturedValue.jsx`, `About.jsx`, and each doctor's `image` field in `data/doctors.js` with the clinic's real photography before sending to a client.
4. **Contact details** — phone/email/address appear in `Navbar.jsx`, `Footer.jsx`, `AnnouncementBar`, and `Contact.jsx`.
5. **Booking flow** — `pages/BookAppointment.jsx` is a fully client-side, 4-step demo (service → doctor → date/time → patient info → confirmation). It doesn't call a real backend; wire the final confirmation step to a booking API/CRM for production use.

## Notes

- Fonts (Fraunces + Manrope) load from Google Fonts via `index.css`.
- Tailwind v4 is configured through `@tailwindcss/vite` — there is no separate `tailwind.config.js`; all design tokens live in the `@theme` block in `src/index.css`.
- Built and verified with `npm run build` (Vite/Rollup) with no errors.

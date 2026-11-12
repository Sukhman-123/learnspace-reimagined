# Fixed Tutors

Fixed Tutors is a responsive maths tutoring website for families looking for one consistent tutor, clear chapter-based pricing, and ongoing doubt support. The site introduces tutor Arvind Suthar and his Cambridge CIE 9709 AS Level and Edexcel A/AS Level teaching, explains the masterclass and pricing model, and links visitors to Cal.id to schedule and pay.

- **Tagline:** One fixed tutor. One fixed price. Until your final exam.
- **Website:** fixedtutors.com
- **Booking and payment:** [cal.id/fixedtutors](https://cal.id/fixedtutors)
- **Contact:** fixedtutors@gmail.com

## Site pages

- **Home** — tutoring approach, current courses and topics, lesson format, and masterclass details.
- **Tutor profile** — Arvind’s qualifications, experience, achievements, and LinkedIn profile.
- **Pricing** — explains the €10, 45-minute masterclass and fixed chapter-price model. The masterclass fee is credited toward the first chapter; exact chapter prices are shared in the student’s personal plan.
- **Booking information** — sends visitors to Cal.id, where scheduling and payment are managed.
- **Family hub preview** — an illustrative page. It does not display live student schedules, progress, or lesson materials.

## Content updates

Most client-approved site content is centralized in [`src/data/site.ts`](src/data/site.ts). Update the brand details, tutor profile, courses, topics, teaching approach, lesson format, masterclass terms, and booking URL there. The homepage, tutor profile, pricing page, booking information, footer, and help chat use this shared content.

The site is not connected to a content management system or student database. Editing the content source requires a new build and deployment. Booking and payment are handled on Cal.id; this project does not process or store them.

## Tech stack

- React and TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Bun for dependency management and scripts
- Netlify for deployment

## Requirements

Install [Bun](https://bun.sh/) and use a compatible Node.js release. The repository includes a Bun lockfile and an `.nvmrc` file.

## Run locally

```sh
git clone <repository-url>
cd <repository-directory>
bun install --frozen-lockfile
bun run dev
```

Vite prints the local development URL in the terminal.

## Available commands

```sh
bun run build       # Create the production build
bun run preview     # Preview the Vite build locally
bun run lint        # Run ESLint
bun run test        # Run the Vitest suite
bun run test:watch  # Run tests in watch mode
```

The production build writes the public site to `dist`. Netlify is configured to run `bun run build` and publish that directory.

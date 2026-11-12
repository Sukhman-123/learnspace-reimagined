import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Check,
  Clock3,
  CreditCard,
  Video,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BRAND, COURSES, FORMAT, OFFER, TUTOR } from "@/data/site";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: `Book a Masterclass | ${BRAND.name}` },
      {
        name: "description",
        content: `Schedule and pay for a ${OFFER.masterclassMinutes}-minute maths masterclass with ${TUTOR.name} through Cal.id.`,
      },
      { property: "og:title", content: `Book a Masterclass | ${BRAND.name}` },
      {
        property: "og:description",
        content: `A ${OFFER.masterclassMinutes}-minute level check and mini-lesson, with a personal plan and chapter prices.`,
      },
    ],
  }),
});

function BookPage() {
  return (
    <section className="paper-grid min-h-[80vh] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <CalendarClock className="size-4" /> Book with {TUTOR.name}
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
              Start with a masterclass
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Choose an available time and complete payment on Cal.id. Your booking details and
              payment are managed there.
            </p>
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display font-bold text-primary-foreground"
            >
              Schedule and pay on Cal.id <ArrowRight className="size-4" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              You’ll be taken to{" "}
              <span className="font-semibold text-foreground">cal.id/fixedtutors</span> to select
              your appointment.
            </p>

            <section className="mt-9 rounded-2xl border border-border bg-white p-6">
              <h2 className="font-display text-xl font-extrabold">Your first lesson includes</h2>
              <ul className="mt-4 space-y-3">
                {OFFER.masterclassIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-5 rounded-2xl border border-border bg-white p-6">
              <h2 className="font-display text-xl font-extrabold">Courses currently available</h2>
              <ul className="mt-4 space-y-2">
                {COURSES.map((course) => (
                  <li
                    key={course.id}
                    className="rounded-xl bg-secondary/70 p-3 text-sm font-semibold"
                  >
                    {course.label}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <section className="rounded-2xl border-2 border-primary bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">Masterclass</p>
              <p className="mt-2 font-display text-3xl font-extrabold">
                {OFFER.masterclassMinutes} minutes · €{OFFER.masterclassPrice}
              </p>
              <p className="mt-2 text-sm font-semibold text-success">{OFFER.masterclassCredit}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Video className="size-4 text-primary" /> Live 1:1 mini-lesson
                </p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock3 className="size-4 text-primary" /> Around {FORMAT.lessonMinutes} minutes
                  for regular lessons
                </p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CreditCard className="size-4 text-primary" /> Schedule and payment handled on
                  Cal.id
                </p>
              </div>
            </section>
            <section className="rounded-2xl border border-border bg-white p-6">
              <h2 className="font-display text-xl font-extrabold">After the level check</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {OFFER.chapterPricing} Your personal plan includes exact chapter prices before you
                decide to continue.
              </p>
            </section>
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-display font-bold text-gold-foreground"
            >
              Open Cal.id booking <ArrowRight className="size-4" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

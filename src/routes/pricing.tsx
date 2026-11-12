import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, FileText, MessageCircleMore, Wallet } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BRAND, COURSES, OFFER, TUTOR } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: `Chapter Pricing | ${BRAND.name}` },
      {
        name: "description",
        content: `A €${OFFER.masterclassPrice} ${OFFER.masterclassMinutes}-minute masterclass, credited toward the first chapter, followed by fixed chapter prices shared before you start.`,
      },
      { property: "og:title", content: `Chapter Pricing | ${BRAND.name}` },
      {
        property: "og:description",
        content: "No hourly billing. Get the exact price for each chapter before you begin.",
      },
    ],
  }),
});

function PricingPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">
              Straightforward pricing
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
              One fixed price for each chapter
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              No hourly billing. {TUTOR.name} maps out a personal chapter plan and shares each
              chapter’s fixed price before you decide to continue.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <article className="h-full rounded-3xl border-2 border-foreground bg-card p-7 hard-shadow">
              <p className="font-display text-4xl font-extrabold text-primary">
                €{OFFER.masterclassPrice}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold">
                {OFFER.masterclassMinutes}-minute 1:1 masterclass
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A first lesson to check the student’s level, experience the teaching and map the
                next steps.
              </p>
              <p className="mt-3 text-sm font-bold text-success">{OFFER.masterclassCredit}</p>
              <ul className="mt-5 space-y-2">
                {OFFER.masterclassIncludes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href={BRAND.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 font-bold text-gold-foreground"
              >
                Schedule on Cal.id <ArrowRight className="size-4" />
              </a>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-3xl border-2 border-primary bg-card p-7">
              <div className="flex items-center gap-3">
                <Wallet className="size-6 text-primary" />
                <h2 className="font-display text-2xl font-extrabold">Chapter-by-chapter pricing</h2>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{OFFER.chapterPricing}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: FileText,
                    title: "See your plan",
                    text: "Get a personal chapter plan with exact prices after your level check.",
                  },
                  {
                    icon: Clock3,
                    title: "No hourly meter",
                    text: "The price is tied to the chapter, not the minutes spent teaching.",
                  },
                  { icon: MessageCircleMore, title: "Doubts included", text: OFFER.doubtSupport },
                  {
                    icon: Check,
                    title: "Choose with clarity",
                    text: "Review your chapter prices before deciding to continue.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-secondary/70 p-4">
                    <item.icon className="size-5 text-primary" />
                    <h3 className="mt-2 font-display font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <section className="mt-14 rounded-3xl bg-secondary p-6 sm:p-8">
            <h2 className="font-display text-2xl font-extrabold">Courses covered</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {COURSES.map((course) => (
                <article key={course.id} className="rounded-2xl border border-border bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    {course.board}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold">{course.level}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {course.subject}
                    {course.code ? ` · ${course.code}` : ""}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-14 rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Start with a clear plan
            </h2>
            <p className="mt-3 text-primary-foreground/75">
              Meet {TUTOR.name}, check the student’s level and receive the chapter prices.
            </p>
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 font-display text-base font-bold text-gold-foreground"
            >
              Schedule and pay on Cal.id <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

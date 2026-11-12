import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  MessageCircleMore,
  NotebookPen,
  UsersRound,
} from "lucide-react";
import tutorPhoto from "@/assets/arvind-suthar.webp";
import { Reveal } from "@/components/reveal";
import {
  BRAND,
  COURSES,
  FORMAT,
  OFFER,
  TEACHING_APPROACH,
  TOPICS,
  TUTOR,
  WAITLIST,
} from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${BRAND.name} | ${BRAND.tagline}` },
      {
        name: "description",
        content: `${TUTOR.name}, IIT Roorkee trained maths tutor for Cambridge CIE 9709 AS Level and Edexcel A/AS Level. Fixed chapter prices and unlimited doubt solving.`,
      },
      { property: "og:title", content: `${BRAND.name} | ${BRAND.tagline}` },
      {
        property: "og:description",
        content: `${TUTOR.name} teaches Cambridge CIE and Edexcel maths, with one fixed tutor and one fixed chapter price.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const courseBoards = [...new Set(COURSES.map((course) => course.board))];
  const highlights = [
    { value: `${TUTOR.experienceYears}+ years`, label: "teaching mathematics" },
    { value: "550,000+", label: "subscribers gained on a JEE teaching channel" },
    { value: "100% NPS", label: "on multiple live batches of 500 students" },
  ];
  const teachingIcons = [BookOpenCheck, GraduationCap, NotebookPen, MessageCircleMore];

  return (
    <>
      <section className="hero-wash relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:pb-28 lg:pt-20">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-3.5 py-2 text-xs font-bold text-primary shadow-sm sm:text-sm">
              <GraduationCap className="size-4" /> IIT Roorkee · {TUTOR.experienceYears}+ years
              teaching maths
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-[2.65rem] font-extrabold leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-[4.15rem]">
              <span className="hero-highlight">{BRAND.tagline}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Meet {TUTOR.name}, your dedicated maths tutor for Cambridge CIE 9709 AS Level and
              Edexcel A/AS Level. Concept-first teaching, fixed chapter prices and unlimited doubt
              solving.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book a {OFFER.masterclassMinutes}-minute masterclass
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/tutors"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white/80 px-6 py-3.5 font-display text-base font-bold text-foreground transition-colors hover:bg-white"
              >
                Meet {TUTOR.name.split(" ")[0]}
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground sm:text-sm">
              {["No hourly billing", "One tutor throughout", "Doubts included"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="size-4 text-success" /> {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-primary/10 pt-5 text-[11px] font-semibold text-muted-foreground sm:text-xs">
              {courseBoards.map((board) => (
                <span key={board} className="rounded-full bg-white/75 px-3 py-1.5">
                  {board}
                </span>
              ))}
              <span className="rounded-full bg-white/75 px-3 py-1.5">
                {FORMAT.timeZones.join(" / ")}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/5 sm:-inset-5" />
            <figure className="relative overflow-hidden rounded-[1.5rem] border-2 border-primary/10 bg-primary shadow-2xl shadow-primary/15 sm:rounded-[2rem]">
              <img
                src={tutorPhoto}
                width={700}
                height={1050}
                fetchPriority="high"
                decoding="async"
                alt={`${TUTOR.name}, mathematics tutor`}
                className="h-[30rem] w-full object-cover object-[center_24%] sm:h-[34rem]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/95 to-transparent px-5 pb-5 pt-20 text-primary-foreground sm:px-7 sm:pb-7">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-gold">
                  Your fixed tutor
                </p>
                <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
                  {TUTOR.name}
                </h2>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  {TUTOR.qualification} · {TUTOR.institution}
                </p>
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline decoration-gold underline-offset-4"
                >
                  View LinkedIn profile <ArrowRight className="size-4" />
                </a>
              </figcaption>
            </figure>
            <div className="relative mx-3 -mt-3 rounded-2xl border border-white/70 bg-white p-4 shadow-xl shadow-primary/10 sm:mx-8">
              <p className="flex items-center gap-2 text-xs font-bold text-primary">
                <CalendarDays className="size-4" /> Start with a personal plan
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Your {OFFER.masterclassMinutes}-minute masterclass includes a level check, live
                mini-lesson and exact chapter prices for your plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-5 py-6 sm:grid-cols-3 sm:gap-8 sm:py-8">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-muted-foreground sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">
                A simple way to learn
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Clear teaching, built around your exam
              </h2>
              <p className="mt-3 text-muted-foreground">
                Lessons move from understanding to exam practice, with a tutor who stays with you.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEACHING_APPROACH.map((item, index) => {
              const Icon = teachingIcons[index];
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <span className="grid size-11 place-items-center rounded-xl bg-gold-soft text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">
              Current syllabus focus
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Topics you can work on
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Arvind currently teaches the courses listed here. Cambridge IGCSE and other boards are
              planned for a future waitlist.
            </p>
            <a
              href={`mailto:${BRAND.email}?subject=${encodeURIComponent(WAITLIST.emailSubject)}`}
              className="mt-6 inline-flex items-center gap-2 font-bold text-primary underline underline-offset-4"
            >
              Join the IGCSE and other boards waitlist <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
            <div className="space-y-4">
              {COURSES.map((course) => (
                <div key={course.id} className="rounded-2xl bg-accent/60 p-4">
                  <p className="font-display text-lg font-bold">{course.label}</p>
                </div>
              ))}
            </div>
            <h3 className="mt-7 font-display text-lg font-bold">Chapter topics include</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">
                Simple, clear pricing
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                Know the chapter price before you start
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                No hourly meter. Your personal chapter prices are mapped out after the level check.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "One fixed tutor",
                text: `Learn with ${TUTOR.name} from your first chapter through your final exam.`,
                icon: GraduationCap,
              },
              { title: "One fixed chapter price", text: OFFER.chapterPricing, icon: NotebookPen },
              {
                title: "Unlimited doubt solving",
                text: OFFER.doubtSupport,
                icon: MessageCircleMore,
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full rounded-2xl border-2 border-foreground bg-card p-6 hard-shadow">
                  <item.icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 font-bold text-primary underline underline-offset-4"
            >
              See how pricing works <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-border bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Clock3 className="size-6 text-primary" />
                <h2 className="font-display text-2xl font-extrabold">How lessons work</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {[
                  `${FORMAT.delivery} · around ${FORMAT.lessonMinutes} minutes`,
                  `${FORMAT.groupOptions.join(" or ")} lesson formats`,
                  ...(FORMAT.recorded ? ["Lessons are recorded"] : []),
                  `${FORMAT.availability.join(" and ")} availability`,
                  `Times shown in ${FORMAT.timeZones.join(" and ")}`,
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-primary/10 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <UsersRound className="size-6 text-primary" />
                <h2 className="font-display text-2xl font-extrabold">Start with a masterclass</h2>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                A focused first lesson, with a plan you can use to decide what comes next.
              </p>
              <p className="mt-4 font-display text-3xl font-extrabold text-primary">
                {OFFER.masterclassMinutes} minutes · €{OFFER.masterclassPrice}
              </p>
              <p className="mt-1 text-sm font-semibold text-success">{OFFER.masterclassCredit}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {OFFER.masterclassIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground"
              >
                Request a masterclass <ArrowRight className="size-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-gold">
              Ready to get started?
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">
              Meet {TUTOR.name} in a {OFFER.masterclassMinutes}-minute 1:1 masterclass.
            </h2>
            <p className="mt-4 text-primary-foreground/75">
              €{OFFER.masterclassPrice}, credited toward your first chapter.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 font-display text-lg font-bold text-gold-foreground"
            >
              Request your masterclass <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

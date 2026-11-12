import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CircleHelp,
  MessageCircle,
  NotebookPen,
} from "lucide-react";
import { BRAND, COURSES, FORMAT, OFFER, TOPICS, TUTOR } from "@/data/site";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: `Family Learning Hub Preview | ${BRAND.name}` },
      {
        name: "description",
        content: "A preview of the learning information families can review alongside their tutor.",
      },
    ],
  }),
});

function DashboardPage() {
  return (
    <section className="min-h-[75vh] bg-secondary/55 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-primary">
              FAMILY LEARNING HUB{" "}
              <span className="ml-2 rounded-full bg-gold-soft px-2 py-1 text-[10px] uppercase tracking-wider">
                Preview
              </span>
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              A clearer view of learning
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              This page shows the kinds of course information families can use.
            </p>
          </div>
          <Link
            to="/tutors"
            className="inline-flex min-h-10 items-center gap-2 self-start rounded-xl border border-border bg-white px-4 py-2 text-sm font-bold text-primary sm:self-auto"
          >
            Meet {TUTOR.name.split(" ")[0]} <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <CalendarDays className="size-5 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Scheduling
                  </p>
                  <h2 className="mt-1 font-display text-xl font-extrabold">
                    Choose a time that works
                  </h2>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Lessons are online, usually around {FORMAT.lessonMinutes} minutes, with evening and
                weekend availability in {FORMAT.timeZones.join(" and ")}. Select an available time
                and manage your booking through Cal.id.
              </p>
              <a
                href={BRAND.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                View times and book on Cal.id <ArrowRight className="size-4" />
              </a>
            </section>

            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <BookOpen className="size-5 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Syllabus
                  </p>
                  <h2 className="mt-1 font-display text-xl font-extrabold">
                    Topics in the current teaching plan
                  </h2>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {TOPICS.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <NotebookPen className="size-5 text-primary" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Progress and materials
                  </p>
                  <h2 className="mt-1 font-display text-xl font-extrabold">
                    Keep notes and recordings together
                  </h2>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {FORMAT.recorded
                  ? "Lessons are recorded."
                  : "Lesson recordings are not currently offered."}{" "}
                This preview does not contain real student progress, lesson notes or recordings.
              </p>
            </section>
          </div>

          <aside className="space-y-4">
            <section className="rounded-2xl bg-primary p-5 text-primary-foreground shadow-lg shadow-primary/15 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gold">Course options</p>
              <ul className="mt-4 space-y-3">
                {COURSES.map((course) => (
                  <li key={course.id} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {course.label}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-2">
                <CircleHelp className="size-4 text-primary" />
                <h2 className="font-display text-base font-extrabold">Chapter costs</h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {OFFER.chapterPricing} Unlimited doubt solving is included.
              </p>
              <Link
                to="/pricing"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                How pricing works <ArrowRight className="size-4" />
              </Link>
            </section>
            <section className="rounded-2xl border border-border bg-white p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <MessageCircle className="size-4 text-primary" />
                <h2 className="font-display text-base font-extrabold">Questions?</h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Email {BRAND.email} to ask about courses, scheduling or the first lesson.
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Email {TUTOR.name.split(" ")[0]} <ArrowRight className="size-4" />
              </a>
            </section>
          </aside>
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          Preview only. Booking and payment are managed on Cal.id; student-specific progress and
          lesson materials are not connected to this preview.
        </p>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, GraduationCap, Linkedin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import tutorPhoto from "@/assets/arvind-suthar.webp";
import { BRAND, COURSES, TOPICS, TUTOR } from "@/data/site";

export const Route = createFileRoute("/tutors")({
  component: TutorPage,
  head: () => ({
    meta: [
      { title: `${TUTOR.name} | ${BRAND.name}` },
      {
        name: "description",
        content: `${TUTOR.name} is an IIT Roorkee graduate with 10+ years teaching mathematics. Learn Cambridge CIE 9709 AS Level and Edexcel A/AS Level maths.`,
      },
    ],
  }),
});

function TutorPage() {
  return (
    <section className="hero-wash min-h-[70vh] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-bold text-primary">
            <Sparkles className="size-4" /> One student. One fixed tutor.
          </p>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <aside className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20">
              <img
                src={tutorPhoto}
                width={700}
                height={1050}
                decoding="async"
                alt={`${TUTOR.name}, mathematics tutor`}
                className="aspect-[4/5] w-full object-cover object-[center_24%]"
              />
              <div className="relative bg-white p-4 text-primary">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <GraduationCap className="size-4" /> {TUTOR.qualification}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {TUTOR.specialization} · {TUTOR.institution} · {TUTOR.graduationYears}
                </p>
              </div>
            </aside>
            <div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">
                Your dedicated maths tutor
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Meet {TUTOR.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {TUTOR.profile}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                From FIITJEE and leading online classrooms to coaching Cambridge and Edexcel
                students in Europe, Arvind brings exam-focused maths teaching to every lesson.
              </p>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-bold text-primary"
              >
                <Linkedin className="size-4" /> View LinkedIn profile
              </a>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {TUTOR.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-primary/10 bg-white/80 p-4"
                  >
                    <p className="font-display text-2xl font-extrabold text-primary">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {TUTOR.awards.map((award) => (
                  <span
                    key={award}
                    className="inline-flex items-center gap-2 rounded-full bg-gold-soft px-3 py-1.5 text-xs font-bold text-primary"
                  >
                    <Award className="size-4" /> {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <BookOpen className="size-5 text-primary" />
              <h2 className="font-display text-2xl font-extrabold">Courses and topics</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {COURSES.map((course) => (
                <li
                  key={course.id}
                  className="rounded-xl bg-secondary/70 p-3 text-sm font-semibold"
                >
                  {course.label}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl font-extrabold">Teaching experience</h2>
            <ol className="mt-5 space-y-4 border-l-2 border-primary/15 pl-5">
              {TUTOR.teachingExperience.map((item) => (
                <li key={`${item.organization}-${item.period}`} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-white" />
                  <p className="font-bold">{item.organization}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.role} · {item.period}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="mt-10 text-center">
          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display font-bold text-primary-foreground"
          >
            Schedule and pay on Cal.id <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

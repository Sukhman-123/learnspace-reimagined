import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, Check, GraduationCap, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BOARDS, TUTORS, initials } from "@/data/site";

export const Route = createFileRoute("/tutors")({
  component: TutorPage,
  head: () => ({
    meta: [
      { title: "Your Maths Tutor | Fixed Tutor" },
      {
        name: "description",
        content:
          "Meet your dedicated IIT-trained maths tutor for AS, A Level and IB. One tutor, a plan built around your goals, and support through exam day.",
      },
    ],
  }),
});

function TutorPage() {
  const tutor = TUTORS[0];
  return (
    <section className="hero-wash min-h-[70vh] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-bold text-primary">
            <Sparkles className="size-4" /> One student. One dedicated tutor.
          </p>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20">
              <div className="absolute inset-5 rounded-[1.5rem] border border-white/20" />
              <div className="relative grid size-36 place-items-center rounded-full bg-white/15 font-display text-5xl font-extrabold text-white ring-8 ring-white/10">
                {initials(tutor.name)}
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white p-4 shadow-lg">
                <p className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Award className="size-4" /> {tutor.college}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {tutor.exp} of teaching experience
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">
                Your dedicated maths tutor
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Meet {tutor.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {tutor.bio} Lessons are shaped around your current level, exam board, and the topics
                you want to master. You keep the same tutor throughout your journey.
              </p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Exam boards covered">
                {BOARDS.map((board) => (
                  <span
                    key={board}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-primary shadow-sm"
                  >
                    {board}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [GraduationCap, "AS, A Level & IB Maths"],
                  [BookOpen, `${tutor.focus.join(" & ")} specialisms`],
                  [Check, "Lessons shaped to your goals"],
                  [Sparkles, "Support between lessons too"],
                ].map(([Icon, label]) => {
                  const ItemIcon = Icon as typeof GraduationCap;
                  return (
                    <div
                      key={label as string}
                      className="flex items-center gap-2.5 rounded-xl border border-primary/10 bg-white/80 p-3 text-sm font-semibold"
                    >
                      <ItemIcon className="size-4 shrink-0 text-primary" />
                      {label as string}
                    </div>
                  );
                })}
              </div>
              <Link
                to="/book"
                search={{ tutor: tutor.id }}
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"
              >
                Meet your tutor <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

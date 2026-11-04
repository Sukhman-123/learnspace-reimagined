import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { BOARDS, TUTORS, initials } from "@/data/site";

export const Route = createFileRoute("/tutors")({
  component: TutorsPage,
  head: () => ({
    meta: [
      { title: "Meet the Tutors — IIT-Trained Maths Tutors | Fixed Tutor" },
      {
        name: "description",
        content:
          "Four IIT-trained maths tutors covering Edexcel, AQA, OCR and IB. Book a masterclass with the one that fits, then keep them until your exams.",
      },
      {
        property: "og:title",
        content: "Meet the Tutors — IIT-Trained Maths Tutors | Fixed Tutor",
      },
      {
        property: "og:description",
        content:
          "Four IIT-trained maths tutors covering Edexcel, AQA, OCR and IB. Book a masterclass with the one that fits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function TutorsPage() {
  const [board, setBoard] = useState<string>("All");
  const filtered =
    board === "All" ? TUTORS : TUTORS.filter((t) => t.boards.includes(board));

  return (
    <section className="paper-grid min-h-[70vh] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Choose your <span className="highlight">tutor</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We cover Edexcel, AQA, OCR and IB. Each card shows the boards that tutor
            teaches. Book a masterclass with the one that fits, then keep them until your
            exams.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by exam board">
            {(["All", ...BOARDS] as const).map((b) => (
              <button
                key={b}
                type="button"
                aria-pressed={board === b}
                onClick={() => setBoard(b)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${
                  board === b
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border-2 border-foreground bg-card p-6 hard-shadow">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                    {initials(t.name)}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold">{t.name}</h2>
                    <p className="text-sm text-muted-foreground">{t.college}</p>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t.bio}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.levels.map((l) => (
                    <span
                      key={l}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {l}
                    </span>
                  ))}
                  {t.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-semibold text-gold-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t.exp} teaching · {t.boards.join(", ")}
                </p>
                <div className="mt-auto pt-5">
                  <Link
                    to="/book"
                    search={{ tutor: t.id }}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:hard-shadow"
                  >
                    Book masterclass with {t.name.split(" ")[0]}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

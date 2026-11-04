import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronRight,
  GraduationCap,
  MessagesSquare,
  Star,
  UserCheck,
  Wallet,
} from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";
import { Reveal } from "@/components/reveal";
import { BOARDS, CONFIG, TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Fixed Tutor — An IIT Mathematician for Your Child’s A Level & IB Maths",
      },
      {
        name: "description",
        content:
          "One-to-one AS, A Level and IB maths tutoring with one dedicated IIT-trained tutor, capped chapter prices, and support through exam day.",
      },
      {
        property: "og:title",
        content: "Fixed Tutor — An IIT Mathematician for Your Child’s A Level & IB Maths",
      },
      {
        property: "og:description",
        content:
          "One dedicated maths tutor, capped prices per chapter, unlimited doubt solving. Book a €10 masterclass.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="hero-wash relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:pb-28 lg:pt-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-3.5 py-2 text-xs font-bold text-primary shadow-sm sm:text-sm">
              <span className="grid size-6 place-items-center rounded-full bg-gold-soft text-primary">
                <Star className="size-3.5 fill-current" />
              </span>
              Personal tutoring, built around your child
            </div>
            <h1 className="mt-6 max-w-2xl font-display text-[2.65rem] font-extrabold leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-[4.15rem]">
              Big goals need a <span className="hero-highlight">better way</span> to learn.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              One-to-one AS, A Level and IB maths tutoring with an IIT-trained tutor who stays with
              your child from the first question to the final exam.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-display text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Find your tutor
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/tutors"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white/80 px-6 py-3.5 font-display text-base font-bold text-foreground transition-colors hover:bg-white"
              >
                Explore our tutors
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground sm:text-sm">
              {["No rotating tutors", "No surprise bills", "Doubts answered anytime"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="size-4 text-success" />
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-primary/10 pt-5 text-[11px] font-semibold text-muted-foreground sm:text-xs">
              {BOARDS.map((b) => (
                <span key={b} className="rounded-full bg-white/75 px-3 py-1.5">
                  {b}
                </span>
              ))}
              <span className="rounded-full bg-white/75 px-3 py-1.5">IB AA & AI</span>
              <span className="rounded-full bg-white/75 px-3 py-1.5">UK / CET evening slots</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/5 sm:-inset-5" />
            <img
              src={heroImg}
              width={1408}
              height={1024}
              alt="A student studying maths with calculus formulas floating around"
              className="relative aspect-[1.22] w-full rounded-[1.5rem] object-cover shadow-2xl shadow-primary/15 sm:rounded-[2rem]"
            />
            <div className="absolute -bottom-6 left-3 right-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl shadow-primary/10 sm:-bottom-8 sm:left-8 sm:right-auto sm:w-[min(22rem,calc(100%-2rem))] sm:p-5">
              <p className="flex items-center gap-2 text-xs font-bold text-primary">
                <span className="grid size-7 place-items-center rounded-lg bg-gold-soft">
                  <CalendarClock className="size-4" />
                </span>{" "}
                A real question. A real tutor.
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed sm:text-base">
                “Why does ∫ 1/x dx give ln|x| and not ln x?”
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-success">
                <Check className="size-3.5" /> Answered with care, whenever it comes up
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 py-6 sm:grid-cols-4 sm:gap-8 sm:py-8">
          {[
            { value: "1:1", label: "Personal lessons" },
            { value: "IIT", label: "Expert tutor" },
            { value: "100%", label: "Focused on progress" },
            { value: "∞", label: "Doubts welcome" },
          ].map((item) => (
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
                A calmer way to make progress
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                For students and the people cheering them on
              </h2>
              <p className="mt-3 text-muted-foreground">
                The same learning plan works for the student doing the work and the parent
                supporting the journey.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            <Reveal>
              <Link
                to="/tutors"
                className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gold-soft text-primary">
                  <GraduationCap className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold">I’m a student</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
                  Get clear explanations, ask every question, and build a plan for the maths exams
                  you’re working toward.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Meet your tutor{" "}
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/dashboard"
                className="group flex h-full flex-col rounded-3xl border border-primary/10 bg-accent/60 p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-primary">
                  <UserCheck className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold">I’m a parent</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
                  See how the family learning hub brings upcoming lessons, progress, and tutor notes
                  together.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Preview the family hub{" "}
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why families choose */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
              Why families choose <span className="highlight">Fixed Tutor</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "IIT-trained tutor",
                text: "Learn with a maths specialist trained at an IIT, with clear explanations and practical exam technique.",
              },
              {
                icon: UserCheck,
                title: "Fixed tutor: yours till the exam",
                text: "Choose one tutor after the masterclass and stay with them to the final paper. No rotating teachers.",
                fx: true,
              },
              {
                icon: Wallet,
                title: "Fixed price: capped per chapter",
                text: "Each chapter has a maximum price. Take the extra sessions you need without the bill growing.",
                fx: true,
              },
              {
                icon: MessagesSquare,
                title: "Unlimited doubt solving",
                text: "Send questions between lessons. Nobody is watching the clock, so students ask more.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:hard-shadow">
                  <div className="grid size-11 place-items-center rounded-xl bg-gold-soft text-primary">
                    <c.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {c.fx ? (
                      <>
                        <span className="highlight font-extrabold">{c.title.split(":")[0]}</span>
                        {c.title.slice(c.title.indexOf(":"))}
                      </>
                    ) : (
                      c.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three things we fix */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
              Three things we fix, so you don’t have to worry
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                fx: "Fixed",
                rest: " price",
                text: "One capped price per chapter. You know the cost before the first lesson, however many sessions or doubts it takes.",
              },
              {
                fx: "Fixed",
                rest: " tutor",
                text: "You pick one tutor after the masterclass and keep them till the final exam. No rotation, no starting over.",
              },
              {
                fx: "Fix",
                rest: " the gaps",
                text: "With no clock running, lessons continue until the concept is clear. We measure success by the grade, not the hours logged.",
              },
            ].map((c, i) => (
              <Reveal key={c.rest} delay={i * 90}>
                <div className="h-full rounded-2xl border-2 border-primary bg-card p-6 hard-shadow">
                  <h3 className="font-display text-xl font-extrabold">
                    <span className="rounded-md bg-gold px-2 py-0.5 text-gold-foreground">
                      {c.fx}
                    </span>
                    {c.rest}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-primary">
                Your learning journey
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                A clear path from first chat to exam day
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A familiar face, a focused plan, and steady progress at every step.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Meet your tutor",
                text: "Talk through your goals, exam board, and the topics that feel tricky right now.",
              },
              {
                n: "02",
                title: "Build your plan",
                text: "Your tutor maps out the chapters and skills to focus on, at a pace that works for you.",
              },
              {
                n: "03",
                title: "Learn with confidence",
                text: "Work through each idea together, check your understanding, and keep moving toward your exams.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 90}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 sm:p-7">
                  <span className="font-display text-sm font-extrabold text-primary">
                    STEP {item.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning without the clock */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
              Learning without the clock
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <p className="font-hand text-2xl text-primary">
                  The lesson doesn’t end at 60 minutes
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  If a topic is still unfinished, your tutor carries on for another 15 to 20 minutes
                  at no extra charge. Your child leaves with the concept understood, not half-done.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <p className="font-hand text-2xl text-primary">A budget you can plan around</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Every chapter has a capped price, so you know the cost before you start. If your
                  child has more doubts close to the exam, there are no surprise bills.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="paper-grid border-y border-border py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
              Words from parents
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.who} delay={i * 120}>
                <figure
                  className={`tape relative rounded-sm border border-border bg-card px-6 pb-6 pt-8 shadow-note ${
                    i % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >
                  <blockquote className="font-hand text-2xl leading-[1.35] text-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-right font-hand text-xl font-bold text-primary">
                    — {t.who}
                  </figcaption>
                  <span className="mt-3 inline-block rounded-full border border-dashed border-warn px-2.5 py-0.5 text-[11px] font-semibold text-warn">
                    Sample story
                  </span>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
              <p className="font-hand text-2xl text-gold">Ready when you are</p>
              <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">
                Book a masterclass for{" "}
                <span className="rounded-lg bg-gold px-2 text-gold-foreground">
                  €{CONFIG.demoPrice}
                </span>{" "}
                — meet your tutor before you commit.
              </h2>
              <p className="mt-4 text-primary-foreground/75">
                Live one-to-one, on a real topic from your child’s syllabus · Launch offer, was €
                {CONFIG.originalPrice} · {CONFIG.slotsLeft} slots left this week
              </p>
              <Link
                to="/book"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 font-display text-lg font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
              >
                Reserve my slot
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

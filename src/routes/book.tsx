import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarClock, Check, Clock3, Mail, Video } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { BRAND, COURSES, FORMAT, OFFER, TUTOR } from "@/data/site";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: `Request a Masterclass | ${BRAND.name}` },
      {
        name: "description",
        content: `Request a ${OFFER.masterclassMinutes}-minute 1:1 maths masterclass with ${TUTOR.name}. The €${OFFER.masterclassPrice} fee is credited toward your first chapter.`,
      },
      { property: "og:title", content: `Request a Masterclass | ${BRAND.name}` },
      {
        property: "og:description",
        content: `${OFFER.masterclassMinutes} minutes, a level check, a live mini-lesson and a personal plan with chapter prices.`,
      },
    ],
  }),
});

function BookPage() {
  const [courseId, setCourseId] = useState<string>(COURSES[0].id);
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [topic, setTopic] = useState("");
  const [mailReady, setMailReady] = useState(false);
  const [error, setError] = useState("");
  const course = COURSES.find((item) => item.id === courseId) ?? COURSES[0];

  const requestHref = useMemo(() => {
    const subject = `Masterclass request — ${studentName || "student"}`;
    const body = [
      `Hello ${TUTOR.name},`,
      "",
      "I would like to request a 45-minute 1:1 masterclass.",
      `Parent/guardian: ${parentName}`,
      `Student: ${studentName}`,
      `Email: ${email}`,
      `Course: ${course.label}`,
      `Time zone: ${timeZone || "Please advise"}`,
      `Topic to try: ${topic || "Please suggest one"}`,
      "",
      `I understand the €${OFFER.masterclassPrice} masterclass fee is credited toward the first chapter. Please share available times and payment details.`,
    ].join("\n");
    return `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [course.label, email, parentName, studentName, timeZone, topic]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!parentName.trim() || !studentName.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Add the parent or guardian name, student name and a valid email address.");
      setMailReady(false);
      return;
    }
    setError("");
    setMailReady(true);
  };

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-3 text-sm outline-none focus:ring-2 focus:ring-ring";
  const labelClass = "block text-sm font-semibold";

  return (
    <section className="paper-grid min-h-[80vh] py-12 pb-20 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <CalendarClock className="size-4" /> Request a first lesson
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
              Book your masterclass
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell {TUTOR.name} a little about the student and course. We’ll confirm a time by
              email.
            </p>
            <form
              onSubmit={submit}
              className="mt-8 rounded-2xl border-2 border-foreground bg-card p-5 shadow-hard sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="parent-name">
                    Parent or guardian name
                  </label>
                  <input
                    id="parent-name"
                    autoComplete="name"
                    value={parentName}
                    onChange={(event) => setParentName(event.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="student-name">
                    Student name
                  </label>
                  <input
                    id="student-name"
                    autoComplete="off"
                    value={studentName}
                    onChange={(event) => setStudentName(event.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="course">
                    Course
                  </label>
                  <select
                    id="course"
                    value={courseId}
                    onChange={(event) => setCourseId(event.target.value)}
                    className={inputClass}
                  >
                    {COURSES.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="timezone">
                    Preferred time zone
                  </label>
                  <select
                    id="timezone"
                    value={timeZone}
                    onChange={(event) => setTimeZone(event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Choose one</option>
                    {[...FORMAT.timeZones, "Other — please advise"].map((zone) => (
                      <option key={zone}>{zone}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="topic">
                    Topic for the mini-lesson{" "}
                    <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="topic"
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    placeholder="e.g. Differentiation"
                    className={inputClass}
                  />
                </div>
              </div>
              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg bg-destructive/10 px-3 py-2 text-sm font-semibold text-destructive"
                >
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-display font-bold text-primary-foreground sm:w-auto"
              >
                Prepare email request <ArrowRight className="size-4" />
              </button>
              {mailReady && (
                <div
                  className="mt-4 rounded-xl border border-success/30 bg-success/5 p-4"
                  role="status"
                >
                  <p className="text-sm font-semibold">
                    Your request is ready. Send the email to contact {TUTOR.name}.
                  </p>
                  <a
                    href={requestHref}
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-gold-foreground"
                  >
                    <Mail className="size-4" /> Open email app
                  </a>
                </div>
              )}
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                This opens your email app with the details filled in. Nothing is submitted or stored
                on this website.
              </p>
            </form>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <section className="rounded-2xl border-2 border-primary bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Your first lesson
              </p>
              <p className="mt-2 font-display text-3xl font-extrabold">
                {OFFER.masterclassMinutes} minutes · €{OFFER.masterclassPrice}
              </p>
              <p className="mt-2 text-sm font-semibold text-success">{OFFER.masterclassCredit}</p>
              <ul className="mt-5 space-y-2">
                {OFFER.masterclassIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" /> {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-border bg-white p-6">
              <h2 className="font-display text-xl font-bold">Lesson format</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Video className="size-4 shrink-0 text-primary" /> {FORMAT.delivery},{" "}
                  {FORMAT.groupOptions.join(" or ")}
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Clock3 className="size-4 shrink-0 text-primary" /> Around {FORMAT.lessonMinutes}{" "}
                  minutes per regular lesson
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-primary" /> Lessons are recorded
                </li>
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <CalendarClock className="size-4 shrink-0 text-primary" />{" "}
                  {FORMAT.availability.join(", ")} · {FORMAT.timeZones.join(" and ")}
                </li>
              </ul>
            </section>
            <p className="rounded-xl bg-accent p-4 text-sm leading-relaxed text-muted-foreground">
              Exact chapter prices are included in the personal plan after the level check. We’ll
              confirm availability and payment details by email.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

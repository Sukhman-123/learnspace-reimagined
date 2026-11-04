import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CalendarDays, Check, CircleHelp, Clock3, FileText, GraduationCap, MessageCircle, Target } from "lucide-react";
import { useState } from "react";
import { TUTORS, initials } from "@/data/site";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({ meta: [{ title: "Family Learning Hub | Fixed Tutor" }, { name: "description", content: "A family dashboard preview for lessons, maths progress, and tutor notes." }] }),
});

const initialTopics = [
  { name: "Differentiation", detail: "Rules & applications", done: true },
  { name: "Integration", detail: "Area under a curve", done: true },
  { name: "Trigonometry", detail: "Identities & equations", done: false },
  { name: "Mechanics", detail: "Forces and motion", done: false },
];

function DashboardPage() {
  const tutor = TUTORS[0];
  const [topics, setTopics] = useState(initialTopics);
  const completed = topics.filter((topic) => topic.done).length;
  const toggleTopic = (name: string) => setTopics((items) => items.map((topic) => topic.name === name ? { ...topic, done: !topic.done } : topic));

  return (
    <section className="min-h-[75vh] bg-secondary/55 py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="text-sm font-bold text-primary">FAMILY LEARNING HUB <span className="ml-2 rounded-full bg-gold-soft px-2 py-1 text-[10px] uppercase tracking-wider">Preview</span></p><h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Welcome back, Alex</h1><p className="mt-1 text-sm text-muted-foreground">A simple view of what’s next in your maths learning.</p></div>
          <Link to="/tutors" className="inline-flex min-h-10 items-center gap-2 self-start rounded-xl border border-border bg-white px-4 py-2 text-sm font-bold text-primary sm:self-auto">Your tutor <ArrowRight className="size-4" /></Link>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
          <div className="space-y-4">
            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6" aria-labelledby="next-lesson-title">
              <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Next session</p><h2 id="next-lesson-title" className="mt-1 font-display text-xl font-extrabold">A Level Maths · Trigonometry</h2></div><span className="grid size-11 place-items-center rounded-xl bg-accent text-primary"><CalendarDays className="size-5" /></span></div>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><CalendarDays className="size-4" /> Thu, 12 Nov · 5:30 pm</span><span className="inline-flex items-center gap-2"><Clock3 className="size-4" /> 60 min</span></div>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-secondary/70 p-3"><div className="grid size-10 place-items-center rounded-full bg-primary text-xs font-extrabold text-white">{initials(tutor.name)}</div><div><p className="text-sm font-bold">{tutor.name}</p><p className="text-xs text-muted-foreground">Your dedicated maths tutor</p></div><span className="ml-auto rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-success">Confirmed</span></div>
            </section>

            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6" aria-labelledby="progress-title">
              <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your learning plan</p><h2 id="progress-title" className="mt-1 font-display text-xl font-extrabold">Chapter progress</h2></div><p className="text-sm font-bold text-primary">{completed} of {topics.length} topics</p></div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary" role="progressbar" aria-label="Topic progress" aria-valuemin={0} aria-valuemax={topics.length} aria-valuenow={completed}><div className="h-full rounded-full bg-success transition-all" style={{ width: `${(completed / topics.length) * 100}%` }} /></div>
              <ul className="mt-4 divide-y divide-border">{topics.map((topic) => <li key={topic.name} className="flex items-center gap-3 py-3"><span className={`grid size-8 shrink-0 place-items-center rounded-lg ${topic.done ? "bg-accent text-success" : "bg-secondary text-muted-foreground"}`}>{topic.done ? <Check className="size-4" /> : <BookOpen className="size-4" />}</span><div className="min-w-0"><p className="text-sm font-bold">{topic.name}</p><p className="text-xs text-muted-foreground">{topic.detail}</p></div><button type="button" onClick={() => toggleTopic(topic.name)} aria-pressed={topic.done} className="ml-auto rounded-lg px-3 py-2 text-xs font-bold text-primary hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{topic.done ? "Reviewed" : "Mark reviewed"}</button></li>)}</ul>
            </section>

            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6" aria-labelledby="notes-title">
              <div className="flex items-center gap-2"><FileText className="size-4 text-primary" /><h2 id="notes-title" className="font-display text-lg font-extrabold">A note from your tutor</h2></div>
              <p className="mt-3 rounded-xl bg-gold-soft/70 p-4 text-sm leading-relaxed text-foreground">“You’re getting more confident choosing the right trig identity. Before our next session, try explaining why each step works, not just what to do.”</p>
              <p className="mt-2 text-xs text-muted-foreground">{tutor.name} · Lesson notes</p>
            </section>
          </div>

          <aside className="space-y-4">
            <section className="rounded-2xl bg-primary p-5 text-primary-foreground shadow-lg shadow-primary/15 sm:p-6"><div className="flex items-center gap-2 text-gold"><Target className="size-5" /><p className="text-xs font-bold uppercase tracking-wider">Current goal</p></div><p className="mt-4 font-display text-2xl font-extrabold">Feel ready for your mock exams</p><p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">Keep building confidence one topic at a time. Your tutor can adjust the plan as you go.</p><div className="mt-5 flex items-center gap-2 rounded-xl bg-white/10 p-3 text-sm"><GraduationCap className="size-4 text-gold" /> AS Maths · Edexcel</div></section>
            <section className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6"><h2 className="font-display text-lg font-extrabold">Quick links</h2><div className="mt-3 space-y-2"><Link to="/pricing" className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold hover:bg-secondary"><BookOpen className="size-4 text-primary" /> Chapter pricing <ArrowRight className="ml-auto size-4" /></Link><Link to="/book" className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold hover:bg-secondary"><CalendarDays className="size-4 text-primary" /> Booking information <ArrowRight className="ml-auto size-4" /></Link><a href="mailto:hello@fixedtutor.com" className="flex items-center gap-3 rounded-xl p-3 text-sm font-semibold hover:bg-secondary"><MessageCircle className="size-4 text-primary" /> Contact your tutor <ArrowRight className="ml-auto size-4" /></a></div></section>
            <section className="rounded-2xl border border-border bg-white p-5 sm:p-6"><div className="flex items-center gap-2"><CircleHelp className="size-4 text-primary" /><h2 className="font-display text-base font-extrabold">Family view</h2></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Students can track topics, while parents can check the learning plan and recent tutor notes in one place.</p></section>
          </aside>
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">This is a sample dashboard preview. Lesson dates, progress, and notes shown here are illustrative.</p>
      </div>
    </section>
  );
}

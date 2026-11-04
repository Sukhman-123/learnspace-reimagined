import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import {
  CONFIG,
  IB_COURSES,
  IB_LEVELS,
  LEVELS,
  TUTORS,
  initials,
  isPlaceholder,
} from "@/data/site";

type Search = { tutor?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    tutor: typeof search.tutor === "string" ? search.tutor : undefined,
  }),
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book a Masterclass — Fixed Tutor" },
      {
        name: "description",
        content:
          "Reserve a €10 one-to-one masterclass with your dedicated IIT-trained maths tutor. Choose your level and exam board in three steps.",
      },
      { property: "og:title", content: "Book a Masterclass — Fixed Tutor" },
      {
        property: "og:description",
        content: "Reserve a €10 one-to-one masterclass with an IIT-trained maths tutor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const STEPS = ["Choose course", "Your details", "Pay", "Pick a time"];
const BOARD_OPTIONS = ["Edexcel", "AQA", "OCR", "IB", "Not sure yet"];

type Form = {
  tutor: string;
  pn: string;
  em: string;
  ph: string;
  sn: string;
  lv: string;
  bd: string;
  ibc: string;
  ibl: string;
  co: string;
  tp: string;
  tutorName?: string;
};

function fmt(sec: number) {
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

function Pill({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${
        on
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-primary/50"
      }`}
    >
      {children}
    </button>
  );
}

function BookPage() {
  const { tutor: tutorParam } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState(() =>
    tutorParam && TUTORS.some((t) => t.id === tutorParam) ? tutorParam : TUTORS[0].id,
  );
  const [sel, setSel] = useState({
    lv: "AS Maths",
    bd: "Not sure yet",
    ibc: "Not sure yet",
    ibl: "Not sure yet",
  });
  const [form, setForm] = useState<Partial<Form>>({});
  const [error, setError] = useState("");

  // Phone sheet + slot hold
  const [sheetOpen, setSheetOpen] = useState(false);
  const [cc, setCc] = useState("+44");
  const [phone, setPhone] = useState("");
  const [holdLeft, setHoldLeft] = useState(CONFIG.holdMinutes * 60);
  const [holdOver, setHoldOver] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  useEffect(() => {
    if (!sheetOpen) return;
    setHoldLeft(CONFIG.holdMinutes * 60);
    setHoldOver(false);
    const id = setInterval(() => setHoldLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [sheetOpen]);

  useEffect(() => {
    if (holdLeft === 0 && sheetOpen) setHoldOver(true);
  }, [holdLeft, sheetOpen]);

  const setLevel = (lv: string) => {
    setSel((s) => ({
      ...s,
      lv,
      bd: /^IB/.test(lv) ? "IB" : s.bd === "IB" ? "Not sure yet" : s.bd,
    }));
  };

  const setBoard = (bd: string) => {
    setSel((s) => ({
      ...s,
      bd,
      lv: /^IB/.test(bd) ? "IB Maths" : /^IB/.test(s.lv) ? "AS Maths" : s.lv,
    }));
  };

  const chosenTutor = TUTORS.find((t) => t.id === chosen) ?? TUTORS[0];
  const phoneDigits = phone.replace(/ /g, "");

  const reserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneDigits.length < 6) return;
    setForm((f) => ({ ...f, phone: `${cc} ${phone}` }));
    setSheetOpen(false);
    setStep(1);
  };

  const submitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const d: Partial<Form> = {
      tutor: String(fd.get("tutor")),
      pn: String(fd.get("pn")).trim(),
      em: String(fd.get("em")).trim(),
      ph: String(fd.get("ph")).trim(),
      sn: String(fd.get("sn")).trim(),
      lv: String(fd.get("lv")),
      bd: String(fd.get("bd")),
      ibc: String(fd.get("ibc")),
      ibl: String(fd.get("ibl")),
      co: String(fd.get("co")).trim(),
      tp: String(fd.get("tp")).trim(),
    };
    if (!d.pn || !d.sn || !/^\S+@\S+\.\S+$/.test(d.em)) {
      setError("Enter the parent’s name, the student’s name and a valid email address.");
      return;
    }
    setError("");
    d.tutorName = TUTORS.find((t) => t.id === d.tutor)?.name;
    setForm(d);
    setChosen(d.tutor);
    setStep(2);
  };

  const inputCls =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";
  const labelCls = "block text-sm font-semibold";
  const isIb = /^IB/.test(sel.lv);

  return (
    <section className="paper-grid min-h-[80vh] py-14 pb-40">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Book your <span className="highlight">masterclass</span>
          </h1>

          <ol className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
            {STEPS.map((s, i) => {
              const n = i + 1;
              const state = step === n ? "on" : step > n ? "done" : "todo";
              return (
                <li key={s} className="flex items-center gap-2">
                  <span
                    className={`grid size-6 place-items-center rounded-full text-xs font-bold ${
                      state === "on"
                        ? "bg-primary text-primary-foreground"
                        : state === "done"
                          ? "bg-success text-primary-foreground"
                          : "border-2 border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {state === "done" ? <Check className="size-3.5" /> : n}
                  </span>
                  <span
                    className={`font-semibold ${
                      state === "todo" ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {s}
                  </span>
                  {n < STEPS.length && <span className="text-border">→</span>}
                </li>
              );
            })}
          </ol>
        </Reveal>

        {/* Step 0 — choose level, board, tutor */}
        {step === 0 && (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-bold">Level</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {LEVELS.map((lv) => (
                  <Pill key={lv} on={sel.lv === lv} onClick={() => setLevel(lv)}>
                    {lv}
                  </Pill>
                ))}
              </div>

              <h2 className="mt-7 font-display text-lg font-bold">Exam board</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {BOARD_OPTIONS.map((bd) => (
                  <Pill key={bd} on={sel.bd === bd} onClick={() => setBoard(bd)}>
                    {bd}
                  </Pill>
                ))}
              </div>

              {isIb && (
                <div className="mt-7 rounded-xl bg-accent p-4">
                  <h2 className="font-display text-lg font-bold">IB course</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {IB_COURSES.map((ibc) => (
                      <Pill
                        key={ibc}
                        on={sel.ibc === ibc}
                        onClick={() => setSel((s) => ({ ...s, ibc }))}
                      >
                        {ibc}
                      </Pill>
                    ))}
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold">IB level</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {IB_LEVELS.map((ibl) => (
                      <Pill
                        key={ibl}
                        on={sel.ibl === ibl}
                        onClick={() => setSel((s) => ({ ...s, ibl }))}
                      >
                        {ibl}
                      </Pill>
                    ))}
                  </div>
                </div>
              )}

              <h2 className="mt-7 font-display text-lg font-bold">Your dedicated tutor</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You’ll work one-to-one with the same tutor throughout your learning plan.
              </p>
            </div>

            <aside className="h-fit rounded-2xl border-2 border-foreground bg-card p-6 lg:sticky lg:top-24 hard-shadow">
              <div className="flex items-center gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                  {initials(chosenTutor.name)}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{chosenTutor.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {chosenTutor.college} · {chosenTutor.exp} teaching
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {chosenTutor.bio}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {chosenTutor.boards.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        )}

        {/* Step 1 — details */}
        {step === 1 && (
          <form
            onSubmit={submitDetails}
            className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8"
            noValidate
          >
            <label className={labelCls} htmlFor="f-tutor">
              Tutor
            </label>
            <select
              id="f-tutor"
              name="tutor"
              defaultValue={form.tutor ?? chosen}
              className={inputCls}
            >
              {TUTORS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.college.split(",")[0]})
                </option>
              ))}
            </select>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="f-pn">
                  Parent’s name
                </label>
                <input
                  id="f-pn"
                  name="pn"
                  autoComplete="name"
                  defaultValue={form.pn ?? ""}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="f-em">
                  Email
                </label>
                <input
                  id="f-em"
                  name="em"
                  type="email"
                  autoComplete="email"
                  defaultValue={form.em ?? ""}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="f-ph">
                  Phone
                </label>
                <input
                  id="f-ph"
                  name="ph"
                  type="tel"
                  autoComplete="tel"
                  defaultValue={form.phone ?? form.ph ?? ""}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="f-sn">
                  Student’s name
                </label>
                <input id="f-sn" name="sn" defaultValue={form.sn ?? ""} className={inputCls} />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="f-lv">
                  Level
                </label>
                <select id="f-lv" name="lv" defaultValue={form.lv ?? sel.lv} className={inputCls}>
                  {LEVELS.map((lv) => (
                    <option key={lv}>{lv}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="f-bd">
                  Exam board
                </label>
                <select id="f-bd" name="bd" defaultValue={form.bd ?? sel.bd} className={inputCls}>
                  {BOARD_OPTIONS.map((bd) => (
                    <option key={bd}>{bd}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="f-co">
                  Country / time zone
                </label>
                <input
                  id="f-co"
                  name="co"
                  placeholder="e.g. Germany, CET"
                  defaultValue={form.co ?? ""}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="f-tp">
                  Topic to try in the masterclass (optional)
                </label>
                <input id="f-tp" name="tp" defaultValue={form.tp ?? ""} className={inputCls} />
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
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-display text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Continue to payment <ArrowRight className="size-4" />
            </button>
          </form>
        )}

        {/* Step 2 — pay */}
        {step === 2 && (
          <div className="mt-10 rounded-2xl border-2 border-foreground bg-card p-6 sm:p-8 hard-shadow">
            <h2 className="font-display text-xl font-bold">
              Masterclass with {form.tutorName ?? chosenTutor.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {form.sn} · {form.lv} · {form.bd}
            </p>
            <p className="mt-5 font-display text-4xl font-extrabold">
              <span className="text-lg font-medium text-muted-foreground line-through">
                €{CONFIG.originalPrice}
              </span>{" "}
              €{CONFIG.demoPrice}
            </p>
            <p className="mt-1 text-sm font-bold text-success">
              Launch offer: you save €{CONFIG.originalPrice - CONFIG.demoPrice}
            </p>

            <div className="mt-6 flex items-start gap-2 rounded-xl bg-accent p-4 text-sm">
              <Lock className="mt-0.5 size-4 shrink-0 text-primary" />
              <p className="text-muted-foreground">
                {isPlaceholder(CONFIG.stripeLink)
                  ? "Online payment is being set up. Meanwhile, write to us and we’ll hold your slot and send a payment link."
                  : "You will pay on a secure Stripe page. Come back here afterwards to choose your slot."}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {isPlaceholder(CONFIG.stripeLink) ? (
                <a
                  href={`mailto:${CONFIG.email}?subject=${encodeURIComponent("Masterclass booking")}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-display text-base font-bold text-gold-foreground"
                >
                  Email us to pay €{CONFIG.demoPrice}
                </a>
              ) : (
                <a
                  href={CONFIG.stripeLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-display text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  Pay €{CONFIG.demoPrice}
                </a>
              )}
              <button
                type="button"
                onClick={() => setStep(3)}
                className="rounded-xl border-2 border-foreground bg-card px-5 py-3.5 text-sm font-bold transition-colors hover:bg-accent"
              >
                I have paid, pick a time
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="rounded-xl border-2 border-border bg-card px-5 py-3.5 text-sm font-bold transition-colors hover:bg-accent"
              >
                Edit details
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — pick a time */}
        {step === 3 && (
          <div className="mt-10 rounded-2xl border-2 border-foreground bg-card p-6 sm:p-8 hard-shadow">
            <h2 className="font-display text-xl font-bold">Pick your masterclass time</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose a slot in your own time zone. Mention {form.sn ?? "your child"} and{" "}
              {form.tutorName ?? chosenTutor.name} in the notes.
            </p>
            <div className="mt-6">
              {isPlaceholder(CONFIG.calendlyLink) ? (
                <>
                  <a
                    href={`mailto:${CONFIG.email}?subject=${encodeURIComponent("Booking a masterclass time")}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-display text-base font-bold text-gold-foreground"
                  >
                    Email us to pick a time
                  </a>
                  <p className="mt-3 text-sm text-muted-foreground">
                    The online calendar is being set up — email us and we’ll send you the available
                    evening slots.
                  </p>
                </>
              ) : (
                <a
                  href={`${CONFIG.calendlyLink}?name=${encodeURIComponent(form.pn ?? "")}&email=${encodeURIComponent(form.em ?? "")}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-display text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  Open calendar <ArrowRight className="size-4" />
                </a>
              )}
            </div>
            <p className="mt-6 border-t border-dashed border-border pt-5 text-sm text-muted-foreground">
              After the masterclass, choose your tutor and start the first chapter. Questions? Write
              to{" "}
              <a
                href={`mailto:${CONFIG.email}`}
                className="font-semibold text-primary underline underline-offset-2"
              >
                {CONFIG.email}
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Sticky booking bar — step 0 only */}
      {step === 0 && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-foreground bg-card/95 backdrop-blur">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-3">
            <div>
              <p className="font-display text-2xl font-extrabold leading-none">
                <span className="text-sm font-medium text-muted-foreground line-through">
                  €{CONFIG.originalPrice}
                </span>{" "}
                €{CONFIG.demoPrice}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Launch offer · {CONFIG.slotsLeft} slots left this week
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="rounded-xl bg-gold px-6 py-3 font-display text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Reserve my slot
            </button>
          </div>
        </div>
      )}

      {/* Phone sheet */}
      {sheetOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div
            className="absolute inset-0 bg-foreground/55 backdrop-blur-sm"
            onClick={() => setSheetOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Reserve your slot"
            className="relative w-full max-w-md rounded-t-3xl bg-card p-6 sm:rounded-3xl sm:border-2 sm:border-foreground sm:hard-shadow"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold">Reserve your slot</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSheetOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-accent"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-accent p-4 text-center">
              <div>
                <p className="font-display text-2xl font-extrabold text-primary">
                  {CONFIG.slotsLeft}
                </p>
                <p className="text-xs text-muted-foreground">Slots left this week</p>
              </div>
              <div>
                <p className="flex items-center justify-center gap-1 font-display text-2xl font-extrabold text-primary">
                  <Clock className="size-4" />
                  {fmt(holdLeft)}
                </p>
                <p className="text-xs text-muted-foreground">Your slot is held for</p>
              </div>
            </div>

            {holdOver && (
              <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-sm font-semibold text-destructive">
                Your hold has ended.{" "}
                <button
                  type="button"
                  onClick={() => {
                    setHoldLeft(CONFIG.holdMinutes * 60);
                    setHoldOver(false);
                  }}
                  className="underline underline-offset-2"
                >
                  Hold my slot again
                </button>
              </p>
            )}

            <form onSubmit={reserve} className="mt-5">
              <label className="block text-sm font-semibold" htmlFor="r-phone">
                Your phone number
              </label>
              <div className="mt-1.5 flex gap-2">
                <select
                  aria-label="Country code"
                  value={cc}
                  onChange={(e) => setCc(e.target.value)}
                  className="w-24 shrink-0 rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                >
                  {["+44", "+49", "+33", "+31", "+353", "+41", "+46", "+39", "+34", "+91"].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    ),
                  )}
                </select>
                <input
                  id="r-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9 ]/g, ""))}
                  className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={phoneDigits.length < 6}
                className="mt-4 w-full rounded-xl bg-primary px-5 py-3 font-display text-base font-bold text-primary-foreground transition-opacity disabled:opacity-40"
              >
                Continue
              </button>
              <p className="mt-2.5 text-center text-xs text-muted-foreground">
                We will use your number to confirm your masterclass.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

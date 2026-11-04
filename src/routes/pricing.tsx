import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CHAPTERS, CONFIG } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Fixed Prices, Capped per Chapter | Fixed Tutor" },
      {
        name: "description",
        content:
          "A €10 masterclass, then one capped price per chapter: unlimited sessions and doubts inside each chapter, with the same tutor from start to finish.",
      },
      {
        property: "og:title",
        content: "Pricing — Fixed Prices, Capped per Chapter | Fixed Tutor",
      },
      {
        property: "og:description",
        content:
          "A €10 masterclass, then one capped price per chapter with unlimited sessions and doubts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function PricingPage() {
  const asChapters = CHAPTERS.filter((c) => c.lv === "AS");
  const a2Chapters = CHAPTERS.filter((c) => c.lv === "A2");

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            <span className="highlight">Fixed</span> pricing: one capped price per chapter
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The only thing you pay before meeting your tutor is the masterclass. After that, every
            chapter has one maximum price — however many sessions or doubts it takes.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border-2 border-foreground bg-card p-7 hard-shadow">
              <p className="font-display text-4xl font-extrabold">
                <span className="text-base font-medium text-muted-foreground line-through">
                  €{CONFIG.originalPrice}
                </span>{" "}
                €{CONFIG.demoPrice}
              </p>
              <h2 className="mt-2 flex items-center gap-2 font-display text-lg font-bold">
                Masterclass
                <span className="rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold text-gold-foreground">
                  Launch offer
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A live one-to-one masterclass on a real topic, with the tutor of your choice.
              </p>
              <Link
                to="/book"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 pt-3 text-sm font-bold text-gold-foreground transition-transform hover:-translate-y-0.5 [margin-top:1.5rem]"
              >
                Book now
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex h-full flex-col rounded-2xl border-2 border-primary bg-card p-7 hard-shadow">
              <p className="font-display text-4xl font-extrabold text-primary">Fixed</p>
              <h2 className="mt-2 font-display text-lg font-bold">Capped per chapter</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Fixed maximum per chapter",
                  "Unlimited sessions and doubts inside it",
                  "Same tutor, start to finish",
                ].map((li) => (
                  <li key={li} className="flex gap-2 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex h-full flex-col rounded-2xl border-2 border-foreground bg-card p-7 hard-shadow">
              <p className="font-display text-4xl font-extrabold text-primary">Till exams</p>
              <h2 className="mt-2 font-display text-lg font-bold">Fixed tutor</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Chapter after chapter, with the tutor you picked, up to the final paper.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="mt-16 font-display text-2xl font-extrabold sm:text-3xl">Chapter prices</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            These are the capped prices — the most a chapter can cost, however long it takes.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-6 overflow-hidden rounded-2xl border-2 border-foreground bg-card hard-shadow">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-foreground bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3 font-bold">Chapter</th>
                  <th className="hidden px-5 py-3 font-bold sm:table-cell">Level</th>
                  <th className="px-5 py-3 text-right font-bold">Capped price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gold-soft">
                  <td
                    colSpan={3}
                    className="px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary"
                  >
                    AS Maths
                  </td>
                </tr>
                {asChapters.map((c) => (
                  <tr key={c.n} className="border-b border-border">
                    <td className="px-5 py-3.5 font-medium">{c.n}</td>
                    <td className="hidden px-5 py-3.5 text-muted-foreground sm:table-cell">
                      {c.lv}
                    </td>
                    <td className="px-5 py-3.5 text-right font-display text-base font-extrabold">
                      €{c.price}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gold-soft">
                  <td
                    colSpan={3}
                    className="px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary"
                  >
                    A2 Maths
                  </td>
                </tr>
                {a2Chapters.map((c) => (
                  <tr key={c.n} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-3.5 font-medium">{c.n}</td>
                    <td className="hidden px-5 py-3.5 text-muted-foreground sm:table-cell">
                      {c.lv}
                    </td>
                    <td className="px-5 py-3.5 text-right font-display text-base font-extrabold">
                      €{c.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Start with the €{CONFIG.demoPrice} masterclass
            </h2>
            <p className="mt-3 text-primary-foreground/75">
              Meet your tutor, see the teaching style, then decide. {CONFIG.slotsLeft} slots left
              this week.
            </p>
            <Link
              to="/book"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 font-display text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Book a masterclass
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

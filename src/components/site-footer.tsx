import { Link } from "@tanstack/react-router";
import { BRAND, COURSES, FORMAT, TUTOR, WAITLIST } from "@/data/site";
import { Logo } from "@/components/site-nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
            {BRAND.tagline} {TUTOR.name} teaches Cambridge CIE and Edexcel maths online.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/" className="text-primary-foreground/85 hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tutors" className="text-primary-foreground/85 hover:text-gold">
                Meet Arvind
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-primary-foreground/85 hover:text-gold">
                Family hub preview
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-primary-foreground/85 hover:text-gold">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/book" className="text-primary-foreground/85 hover:text-gold">
                Request a masterclass
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60">
            Good to know
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/85">
            <li>
              {COURSES.map((course) => course.board)
                .filter((board, index, all) => all.indexOf(board) === index)
                .join(" and ")}
            </li>
            <li>
              {FORMAT.availability.join(" and ")} · {FORMAT.timeZones.join(" / ")}
            </li>
            <li>{WAITLIST.courses.join(" and ")} waitlist</li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="underline decoration-gold underline-offset-4 hover:text-gold"
              >
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {BRAND.name} · {BRAND.tagline}
      </div>
    </footer>
  );
}

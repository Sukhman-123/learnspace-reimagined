import { Link } from "@tanstack/react-router";
import { CONFIG } from "@/data/site";
import { Logo } from "@/components/site-nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
            One-to-one AS, A Level and IB maths tutoring. One dedicated tutor from the
            first question to the final exam.
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
                Meet your tutor
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-primary-foreground/85 hover:text-gold">
                Family learning hub
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-primary-foreground/85 hover:text-gold">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/book" className="text-primary-foreground/85 hover:text-gold">
                Book a masterclass
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60">
            Good to know
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/85">
            <li>All exam boards</li>
            <li>Lessons in UK / CET-friendly evening slots</li>
            <li>
              <a
                href={`mailto:${CONFIG.email}`}
                className="underline decoration-gold underline-offset-4 hover:text-gold"
              >
                {CONFIG.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Fixed Tutor · One dedicated maths tutor
      </div>
    </footer>
  );
}

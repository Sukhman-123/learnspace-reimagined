import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/tutors", label: "Tutors" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-baseline gap-1" aria-label="Fixed Tutor home">
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          light ? "text-primary-foreground" : "text-primary"
        }`}
      >
        Fixed
      </span>
      <span className="rounded-md bg-gold px-1.5 font-display text-xl font-extrabold tracking-tight text-gold-foreground">
        Tutor
      </span>
    </Link>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const linkCls =
    "rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground data-[status=active]:bg-accent data-[status=active]:font-semibold data-[status=active]:text-primary";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-3">
        <Logo />
        <div className="ml-auto hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/book"
          className="ml-2 hidden rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
        >
          Book a masterclass
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-lg p-2 text-foreground transition-colors hover:bg-accent sm:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-3 sm:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-accent data-[status=active]:bg-accent data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground"
            >
              Book a masterclass
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

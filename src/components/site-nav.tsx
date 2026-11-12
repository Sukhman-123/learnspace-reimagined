import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BRAND } from "@/data/site";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/tutors", label: "Meet Arvind" },
  { to: "/pricing", label: "Pricing" },
  { to: "/dashboard", label: "Family hub preview" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="inline-flex shrink-0 items-center gap-2.5"
      aria-label={`${BRAND.name} home`}
    >
      <img
        src="/favicon.svg"
        alt=""
        width={40}
        height={40}
        className={`block size-9 rounded-xl sm:size-10 ${light ? "bg-background p-1" : ""}`}
      />
      <span
        className={`font-display text-lg font-extrabold tracking-tight sm:text-xl ${light ? "text-primary-foreground" : "text-primary"}`}
      >
        {BRAND.name}
      </span>
    </Link>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkCls =
    "rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent/70 hover:text-primary data-[status=active]:text-primary";

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5">
        <Logo />
        <div className="ml-auto hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href={BRAND.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="ml-2 hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
        >
          Schedule & pay <ArrowRight className="size-4" />
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-lg p-2 text-foreground transition-colors hover:bg-accent sm:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-border bg-background px-5 py-3 sm:hidden"
      >
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
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-3">
            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-primary px-3 py-3 text-center text-sm font-bold text-primary-foreground"
            >
              Schedule & pay
            </a>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-border px-3 py-3 text-center text-sm font-bold text-foreground"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

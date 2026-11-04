import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { HelpChat } from "@/components/help-chat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-hand text-4xl text-gold-foreground">Oops!</p>
      <h1 className="mt-2 font-display text-6xl font-extrabold text-foreground">404</h1>
      <h2 className="mt-4 font-display text-xl font-bold">Page not found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:opacity-90"
      >
        Go home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-xl font-bold tracking-tight text-foreground">
        This page didn’t load
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:opacity-90"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-accent"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fixed Tutor — IIT Maths Tutors for AS, A Level & IB" },
      {
        name: "description",
        content:
          "One-to-one AS, A Level and IB maths tutoring with a dedicated tutor, capped prices per chapter, and unlimited doubt solving.",
      },
      { property: "og:title", content: "Fixed Tutor — IIT Maths Tutors for AS, A Level & IB" },
      {
        property: "og:description",
        content:
          "One dedicated IIT-trained maths tutor, capped chapter prices, and support through the final exam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        href: "/fonts/bricolage-grotesque-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/dm-sans-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-background px-4 py-3 font-semibold text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <SiteNav />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <HelpChat />
      </div>
    </QueryClientProvider>
  );
}

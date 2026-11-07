"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#month", label: "This month" },
  { href: "/#activities", label: "Activities" },
  { href: "/#donate", label: "Donate" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header
      className={cn(
        "z-20",
        onHome
          ? "absolute inset-x-0 top-0"
          : "sticky top-0 border-b border-border/80 bg-[color:var(--bg)]/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link
          href="/"
          className={cn(
            "font-display text-lg font-semibold tracking-tight md:text-xl",
            onHome
              ? "hero-text-shadow font-semibold text-white"
              : "text-foreground",
          )}
        >
          {site.name}
        </Link>
        <nav
          className={cn(
            "hidden items-center gap-6 text-sm font-semibold md:flex",
            onHome ? "hero-text-shadow-soft text-white" : "text-muted",
          )}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "transition",
                onHome ? "hover:text-white/85" : "hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={onHome ? "#donate" : "/#donate"}
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg shadow-sm transition hover:brightness-110"
        >
          Donate
        </a>
      </div>
    </header>
  );
}

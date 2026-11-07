import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-5 py-24 md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        That activity or page doesn&apos;t exist. Head back to the homepage.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg"
      >
        Back home
      </Link>
    </div>
  );
}

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyCardButtonProps = {
  cardNumber: string;
  className?: string;
};

export function CopyCardButton({ cardNumber, className }: CopyCardButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(cardNumber);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = cardNumber;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const formatted = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "group flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-elevated px-5 py-4 text-left transition hover:border-accent/40",
        className,
      )}
      aria-label="Copy donation card number"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Card for donation
        </p>
        <p className="mt-1 font-display text-xl tracking-wide text-foreground md:text-2xl">
          {formatted}
        </p>
      </div>
      <span className="shrink-0 rounded-full bg-accent-dim px-3 py-1.5 text-sm font-semibold text-accent transition group-hover:bg-accent group-hover:text-accent-fg">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

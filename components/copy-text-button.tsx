"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyTextButtonProps = {
  text: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
};

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function CopyTextButton({
  text,
  label = "Copy",
  className,
  children,
}: CopyTextButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await copyText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "group flex w-full flex-col gap-3 rounded-2xl border border-border bg-elevated/70 p-5 text-left transition hover:border-accent/40 active:scale-[0.99]",
        className,
      )}
      aria-label={copied ? "Copied" : label}
    >
      {children}
      <span className="inline-flex w-fit items-center rounded-full bg-accent-dim px-3 py-1.5 text-sm font-semibold text-accent transition group-hover:bg-accent group-hover:text-accent-fg">
        {copied ? "Copied" : label}
      </span>
    </button>
  );
}

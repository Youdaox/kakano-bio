"use client";

import { useState } from "react";
import type { ElementType, KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BilingualProps = {
  /** English text, shown by default. */
  en: ReactNode;
  /** Te reo Māori text, revealed on hover, keyboard focus, or tap. */
  mi: ReactNode;
  /** Element to render. Use the tag the copy would have used anyway (h1, p, span). */
  as?: ElementType;
  className?: string;
  /** Class applied only to the te reo layer, for colour tweaks over imagery. */
  miClassName?: string;
  /** Dotted underline affordance. Turn off where it would fight large display type. */
  hint?: boolean;
};

/**
 * Stacks both languages in a single grid cell so the block is always sized to the
 * longer of the two — revealing te reo crossfades in place and never reflows the page.
 *
 * Hover covers mouse, focus covers keyboard, and the click handler covers touch, where
 * hover either does not exist or sticks until the next tap somewhere else.
 */
export default function Bilingual({
  en,
  mi,
  as: Tag = "span",
  className,
  miClassName,
  hint = true,
}: BilingualProps) {
  const [revealed, setRevealed] = useState(false);

  const toggle = () => setRevealed((current) => !current);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <Tag
      className={cn("group/bilingual relative grid cursor-default", className)}
      data-revealed={revealed ? "true" : undefined}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      onBlur={() => setRevealed(false)}
    >
      <span
        className={cn(
          "col-start-1 row-start-1 transition-opacity duration-300 ease-out",
          "group-hover/bilingual:opacity-0 group-focus-visible/bilingual:opacity-0",
          "group-data-[revealed=true]/bilingual:opacity-0",
          hint &&
            "decoration-current/25 underline-offset-[0.35em] [text-decoration-line:underline] [text-decoration-style:dotted]",
        )}
      >
        {en}
      </span>

      <span
        lang="mi"
        className={cn(
          "col-start-1 row-start-1 opacity-0 transition-opacity duration-300 ease-out",
          "group-hover/bilingual:opacity-100 group-focus-visible/bilingual:opacity-100",
          "group-data-[revealed=true]/bilingual:opacity-100",
          miClassName,
        )}
      >
        {mi}
      </span>
    </Tag>
  );
}

"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 420;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full cursor-pointer",
        "border border-white/30 bg-linear-to-br from-primary to-secondary text-white",
        "shadow-[0_12px_30px_rgba(26,26,26,0.28)] backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(26,26,26,0.35)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <span className="sr-only">Back to top</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="mx-auto h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 18V7" />
        <path d="m6.5 12.5 5.5-5.5 5.5 5.5" />
      </svg>
    </button>
  );
}

export default BackToTop;